import assert from "node:assert/strict";
import test from "node:test";
import { handleForm } from "../src/lib/formulaire.ts";
const env = {
  SUPABASE_URL: "https://yhozabfbkepsplokwvxh.supabase.co",
  SUPABASE_SERVICE_KEY: "test-only",
  RESEND_API_KEY: "test-only",
  RESEND_FROM: "Entreprise.ai <notifications@entreprise.ai>",
  FORM_NOTIFICATION_TO: "owner@example.test",
};
const payload = {
  form_kind: "provider_submission",
  providerName: "Agence test",
  providerType: "Agence IA",
  website: "https://example.test",
  city: "Paris",
  contactName: "Test",
  email: "visitor@example.test",
  specialties: "Audit IA",
  acceptedTerms: "on",
  submission_id: "00000000-0000-4000-8000-000000000001",
};
const request = (data) =>
  new Request("https://entreprise.ai/api/formulaire", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Origin: "https://entreprise.ai",
      "X-Forwarded-For": "192.0.2.1",
    },
    body: JSON.stringify(data),
  });
function services({
  storageDown = false,
  mailDown = false,
  rateLimit = false,
} = {}) {
  const rows = [],
    mails = [],
    calls = [];
  const fetch = async (url, init = {}) => {
    calls.push({ url, init });
    if (url === "https://api.resend.com/emails") {
      mails.push(JSON.parse(init.body));
      return Response.json(
        mailDown ? { message: "unavailable" } : { id: "email_test" },
        { status: mailDown ? 503 : 200 },
      );
    }
    assert.ok(url.startsWith(env.SUPABASE_URL + "/rest/v1/demandes_site"));
    if (storageDown) return Response.json({}, { status: 503 });
    if (init.method === "POST") {
      const row = { id: 1, ...JSON.parse(init.body) };
      rows.push(row);
      return Response.json([row], { status: 201 });
    }
    if (init.method === "PATCH") {
      Object.assign(rows[0], JSON.parse(init.body));
      return new Response(null, { status: 204 });
    }
    if (url.includes("created_at="))
      return Response.json(rateLimit ? [1, 2, 3, 4, 5] : []);
    return Response.json(rows);
  };
  return { fetch, rows, mails, calls };
}
test("Stockage puis notification interne, sans doublon en cas de nouvel essai", async () => {
  const s = services();
  const r = await handleForm(request(payload), env, s.fetch);
  assert.equal(r.status, 200);
  assert.deepEqual(await r.json(), { ok: true, stored: true });
  assert.equal(s.rows.length, 1);
  assert.equal(s.mails.length, 1);
  assert.deepEqual(s.mails[0].to, ["owner@example.test"]);
  assert.equal(s.mails[0].reply_to, "visitor@example.test");
  assert.match(s.mails[0].text, /Agence test/);
  assert.equal(s.rows[0].payload._notification, "accepted");
  assert.equal(s.rows[0].payload._resend_id, "email_test");
  assert.ok(
    s.calls.findIndex(
      (c) =>
        c.init.method === "POST" && c.url !== "https://api.resend.com/emails",
    ) < s.calls.findIndex((c) => c.url === "https://api.resend.com/emails"),
  );
  const again = await handleForm(request(payload), env, s.fetch);
  assert.equal(again.status, 200);
  assert.equal(s.rows.length, 1);
  assert.equal(s.mails.length, 1);
});
test("Un identifiant reçu ne permet pas de remplacer la demande", async () => {
  const s = services();
  await handleForm(request(payload), env, s.fetch);
  assert.equal(
    (
      await handleForm(
        request({ ...payload, providerName: "Autre" }),
        env,
        s.fetch,
      )
    ).status,
    409,
  );
  assert.equal(s.mails.length, 1);
});
test("Panne Resend : réception réussie et notification en attente traçable", async () => {
  const s = services({ mailDown: true });
  assert.equal((await handleForm(request(payload), env, s.fetch)).status, 200);
  assert.equal(s.rows[0].payload._notification, "pending");
  assert.equal(s.rows.length, 1);
});
test("Panne stockage : aucun succès ni email non conservé", async () => {
  const s = services({ storageDown: true });
  assert.equal((await handleForm(request(payload), env, s.fetch)).status, 503);
  assert.equal(s.mails.length, 0);
});
test("Champs malformés, consentement absent, URL dangereuse : aucun appel externe", async () => {
  const s = services();
  for (const bad of [
    { ...payload, email: [] },
    { ...payload, acceptedTerms: "" },
    { ...payload, website: "javascript:alert(1)" },
    { ...payload, form_kind: "toString" },
  ])
    assert.equal((await handleForm(request(bad), env, s.fetch)).status, 400);
  assert.equal(s.calls.length, 0);
});
test("Antirobot, origine tierce et corps trop grand : aucun appel externe", async () => {
  const s = services();
  assert.equal(
    (
      await handleForm(
        request({ ...payload, website_hp: "spam" }),
        env,
        s.fetch,
      )
    ).status,
    200,
  );
  const other = request(payload);
  other.headers.set("origin", "https://evil.test");
  assert.equal((await handleForm(other, env, s.fetch)).status, 403);
  assert.equal(
    (
      await handleForm(
        request({ ...payload, need: "x".repeat(25000) }),
        env,
        s.fetch,
      )
    ).status,
    413,
  );
  assert.equal(s.calls.length, 0);
});
test("Limite de fréquence : aucune insertion ni notification supplémentaire", async () => {
  const s = services({ rateLimit: true });
  assert.equal((await handleForm(request(payload), env, s.fetch)).status, 429);
  assert.equal(s.rows.length, 0);
  assert.equal(s.mails.length, 0);
});
test("Projet IA : validation et notification correspondantes", async () => {
  const s = services();
  const data = {
    form_kind: "project_submission",
    companyName: "PME",
    contactName: "Test User",
    acceptedTerms: "on",
    email: "visitor@example.test",
    need: "Classer nos demandes",
    projectType: "Audit IA",
  };
  assert.equal((await handleForm(request(data), env, s.fetch)).status, 200);
  assert.match(s.mails[0].subject, /Nouveau projet IA/);
});
test("Contact général conservé séparément avec consentement obligatoire", async () => {
  const s = services();
  const p = {
    form_kind: "contact_submission",
    contactName: "Test",
    email: "visitor@example.test",
    message: "Question générale",
    acceptedTerms: "on",
  };
  assert.equal(
    (await handleForm(request({ ...p, acceptedTerms: "" }), env, s.fetch))
      .status,
    400,
  );
  assert.equal((await handleForm(request(p), env, s.fetch)).status, 200);
  assert.equal(s.rows[0].kind, "contact_submission");
  assert.match(s.mails[0].text, /Question générale/);
});
test("Ne renvoie pas une notification incertaine après expiration de la clé Resend", async () => {
  const s = services({ mailDown: true });
  await handleForm(request(payload), env, s.fetch);
  s.rows[0].payload._notification_attempted_at = new Date(
    Date.now() - 25 * 3600000,
  ).toISOString();
  await handleForm(request(payload), env, s.fetch);
  assert.equal(s.mails.length, 1);
});
