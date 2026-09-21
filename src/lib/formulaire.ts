import { createHash, createHmac, randomUUID } from "node:crypto";

type Environment = Record<string, string | undefined>;
type Payload = Record<string, string>;
type StoredRequest = { id: number; payload: Payload };
const LABELS: Record<string, string> = {
  providerName: "Prestataire",
  providerType: "Type",
  website: "Site web",
  city: "Ville",
  country: "Pays",
  teamSize: "Équipe",
  specialties: "Spécialités",
  sectors: "Secteurs",
  minBudget: "Budget minimum",
  missions: "Missions",
  references: "Références",
  contactName: "Contact",
  email: "Email",
  phone: "Téléphone",
  companyName: "Entreprise",
  sector: "Secteur",
  companySize: "Effectif",
  role: "Fonction",
  projectType: "Projet",
  need: "Besoin",
  businessGoal: "Objectif",
  existingTools: "Outils",
  sensitiveData: "Données sensibles",
  urgency: "Échéance",
  budget: "Budget",
  firstName: "Prénom",
  lastName: "Nom",
  contactPreference: "Préférence de contact",
  message: "Message",
  requestType: "Type de demande",
  providerSlug: "Fiche concernée",
  originPage: "Page d’origine",
  source: "Source",
  medium: "Canal",
  campaign: "Campagne",
  acceptedTerms: "Accord pour traiter la demande",
};
const KINDS: Record<string, string> = {
  provider_submission: "Nouvelle demande de référencement",
  project_submission: "Nouveau projet IA",
  contact_submission: "Nouveau message",
};
const EMAIL = /^[^@\s<>]+@[^@\s<>]+\.[^@\s<>]+$/;
const UUID =
  /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const reply = (status: number, data: object) =>
  Response.json(data, { status, headers: { "Cache-Control": "no-store" } });

/** Notification interne uniquement. Aucun email automatique au visiteur. */
export function notificationEmail(data: Payload, id: number, env: Environment) {
  const text = [
    KINDS[data.form_kind],
    `Référence : ${id}`,
    "",
    ...Object.entries(LABELS)
      .filter(([key]) => data[key])
      .map(([key, label]) => `${label} : ${data[key]}`),
    "",
    "Demande enregistrée dans Entreprise.ai. Répondre à cet email permet de contacter le demandeur.",
    "Aucune fiche n’est publiée automatiquement.",
  ].join("\n");
  return {
    from: env.RESEND_FROM,
    to: [env.FORM_NOTIFICATION_TO],
    reply_to: data.email,
    subject: `Entreprise.ai — ${KINDS[data.form_kind]}`,
    text,
  };
}

export async function handleForm(
  req: Request,
  env: Environment = process.env,
  request: typeof fetch = fetch,
) {
  const origin = req.headers.get("origin");
  if (origin && origin !== new URL(req.url).origin)
    return reply(403, { ok: false, error: "origin" });
  if (!req.headers.get("content-type")?.includes("application/json"))
    return reply(415, { ok: false, error: "content_type" });
  // Limite avant et pendant la lecture, y compris sans Content-Length.
  if (Number(req.headers.get("content-length")) > 24000)
    return reply(413, { ok: false, error: "size" });
  const reader = req.body?.getReader();
  if (!reader) return reply(400, { ok: false, error: "body" });
  let raw = "",
    size = 0;
  const decoder = new TextDecoder();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 24000) {
        await reader.cancel();
        return reply(413, { ok: false, error: "size" });
      }
      raw += decoder.decode(value, { stream: true });
    }
    raw += decoder.decode();
  } catch {
    return reply(400, { ok: false, error: "body" });
  }
  let input: Record<string, unknown>;
  try {
    input = JSON.parse(raw);
  } catch {
    return reply(400, { ok: false, error: "json" });
  }
  if (
    !input ||
    Array.isArray(input) ||
    typeof input !== "object" ||
    typeof input.form_kind !== "string" ||
    !Object.hasOwn(KINDS, input.form_kind)
  )
    return reply(400, { ok: false, error: "kind" });
  if (input.website_hp) return reply(200, { ok: true, stored: false });
  const data: Payload = { form_kind: input.form_kind };
  for (const key of Object.keys(LABELS)) {
    if (input[key] !== undefined && typeof input[key] !== "string")
      return reply(400, { ok: false, error: "field" });
    if (typeof input[key] === "string") {
      if (
        input[key].length >
        ([
          "message",
          "need",
          "businessGoal",
          "existingTools",
          "missions",
          "references",
          "specialties",
          "sectors",
        ].includes(key)
          ? 3000
          : 300)
      )
        return reply(400, { ok: false, error: "field_size" });
      data[key] = input[key].trim();
    }
  }
  if (!EMAIL.test(data.email || ""))
    return reply(400, { ok: false, error: "email" });
  const required =
    data.form_kind === "provider_submission"
      ? ["providerName", "website", "city", "contactName", "specialties"]
      : data.form_kind === "project_submission"
        ? ["companyName", "contactName", "need"]
        : ["contactName", "message"];
  if (required.some((key) => !data[key]) || data.acceptedTerms !== "on")
    return reply(400, { ok: false, error: "required" });
  if (data.website) {
    try {
      if (!["https:", "http:"].includes(new URL(data.website).protocol))
        throw Error();
    } catch {
      return reply(400, { ok: false, error: "website" });
    }
  }
  if (
    input.submission_id !== undefined &&
    (typeof input.submission_id !== "string" || !UUID.test(input.submission_id))
  )
    return reply(400, { ok: false, error: "submission_id" });
  const submissionId = (input.submission_id as string) || randomUUID();
  const digest = createHash("sha256")
    .update(JSON.stringify(Object.fromEntries(Object.entries(data).sort())))
    .digest("hex");
  const url = env.SUPABASE_URL,
    key = env.SUPABASE_SERVICE_KEY;
  if (url !== "https://yhozabfbkepsplokwvxh.supabase.co" || !key)
    return reply(503, { ok: false, error: "unavailable" });
  const headers = {
    apikey: key,
    Authorization: `Bearer ${key}`,
    "Content-Type": "application/json",
    "User-Agent": "entreprise-ai-codex",
  };
  const base = `${url}/rest/v1/demandes_site`;
  const query = `${base}?site=eq.entreprise.ai&payload->>submission_id=eq.${submissionId}&select=id,payload&limit=1`;
  const call = (path: string, options: RequestInit = {}) =>
    request(path, {
      ...options,
      headers: { ...headers, ...options.headers },
      signal: AbortSignal.timeout(10000),
    });
  let stored: StoredRequest;
  try {
    const existing = await call(query);
    if (!existing.ok) throw Error("storage_lookup");
    const found = (await existing.json()) as StoredRequest[];
    if (found.length) stored = found[0];
    else {
      const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
      const ipHash = ip
        ? createHmac("sha256", key).update(ip).digest("hex").slice(0, 32)
        : null;
      const recent = new URLSearchParams({
        site: "eq.entreprise.ai",
        created_at: `gte.${new Date(Date.now() - 3600000).toISOString()}`,
        select: "id",
        limit: "5",
      });
      if (ipHash) recent.set("ip_hash", `eq.${ipHash}`);
      else recent.set("email", `eq.${data.email}`);
      const rate = await call(`${base}?${recent}`);
      if (!rate.ok) throw Error("storage_rate");
      if (((await rate.json()) as unknown[]).length >= 5)
        return reply(429, { ok: false, error: "rate" });
      const payload = {
        ...data,
        submission_id: submissionId,
        _digest: digest,
        _notification: "pending",
      };
      const row = {
        site: "entreprise.ai",
        kind: data.form_kind,
        nom: data.providerName || data.companyName || data.contactName,
        email: data.email,
        site_web: data.website || null,
        ville: data.city || null,
        type_declare: data.providerType || data.projectType || null,
        payload,
        user_agent: req.headers.get("user-agent")?.slice(0, 200) || null,
        ip_hash: ipHash,
      };
      const saved = await call(base, {
        method: "POST",
        headers: { Prefer: "return=representation" },
        body: JSON.stringify(row),
      });
      if (saved.status === 409) {
        const concurrent = await call(query);
        if (!concurrent.ok) throw Error("storage_conflict");
        stored = ((await concurrent.json()) as StoredRequest[])[0];
      } else {
        if (!saved.ok) throw Error("storage_insert");
        stored = ((await saved.json()) as StoredRequest[])[0];
      }
    }
    if (!stored?.id || stored.payload._digest !== digest)
      return reply(409, { ok: false, error: "conflict" });
  } catch {
    console.error("formulaire: stockage indisponible");
    return reply(503, { ok: false, error: "unavailable" });
  }
  if (stored.payload._notification === "accepted")
    return reply(200, { ok: true, stored: true });

  // After Resend’s 24-hour idempotency window, reconcile uncertain delivery manually.
  // A timed-out call could have been accepted; never send it again with an expired key.
  const attemptedAt = stored.payload._notification_attempted_at;
  if (attemptedAt && Date.now() - Date.parse(attemptedAt) > 23 * 3600000) {
    console.error("formulaire: notification ancienne à réconcilier");
    return reply(200, { ok: true, stored: true });
  }
  // Une demande enregistrée reste un succès même si la notification doit être reprise.
  // Resend garantit le même identifiant pendant 24 h pour cette clé ; pas de double email sur un retry.
  if (
    env.RESEND_API_KEY &&
    env.RESEND_FROM &&
    env.FORM_NOTIFICATION_TO &&
    EMAIL.test(env.FORM_NOTIFICATION_TO)
  ) {
    try {
      if (!stored.payload._notification_attempted_at) {
        const attempted = {
          ...stored.payload,
          _notification_attempted_at: new Date().toISOString(),
        };
        const marked = await call(
          `${base}?id=eq.${stored.id}&site=eq.entreprise.ai`,
          { method: "PATCH", body: JSON.stringify({ payload: attempted }) },
        );
        if (!marked.ok) throw Error("notification_tracking");
        stored.payload = attempted;
      }
      const sent = await request("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
          "Idempotency-Key": `entreprise-ai/form/${submissionId}`,
        },
        body: JSON.stringify(notificationEmail(data, stored.id, env)),
        signal: AbortSignal.timeout(10000),
      });
      const result = (await sent.json()) as { id?: string };
      if (!sent.ok || !result.id) throw Error("resend");
      const updated = await call(
        `${base}?id=eq.${stored.id}&site=eq.entreprise.ai`,
        {
          method: "PATCH",
          body: JSON.stringify({
            payload: {
              ...stored.payload,
              _notification: "accepted",
              _resend_id: result.id,
            },
          }),
        },
      );
      if (!updated.ok)
        console.error("formulaire: notification acceptée, suivi à réconcilier");
    } catch {
      console.error(
        "formulaire: demande enregistrée, notification Resend en attente",
      );
    }
  } else
    console.error(
      "formulaire: demande enregistrée, configuration Resend manquante",
    );
  return reply(200, { ok: true, stored: true });
}
