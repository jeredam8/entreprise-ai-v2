import { createHash } from "node:crypto";
import { NextResponse } from "next/server";

/** Réception des deux formulaires du site (référencement prestataire, dépôt de projet).
 *  Depuis le 03/09/2026 : écrit dans la table Supabase `demandes_site` et prévient Jérémy
 *  sur Telegram, à la place de Formspree (dont les e-mails n'étaient lus par personne :
 *  trois prestataires ont attendu jusqu'à huit semaines). Le formulaire garde Formspree en
 *  secours si cette route échoue. Aucune donnée n'est exposée : clés côté serveur seulement. */
export const runtime = "nodejs";

const KINDS: Record<string, string> = {
  provider_submission: "Nouvelle demande de référencement",
  project_submission: "Nouveau projet IA déposé"
};

export async function POST(req: Request) {
  const data = (await req.json().catch(() => null)) as Record<string, string> | null;
  if (!data || !KINDS[data.form_kind]) {
    return NextResponse.json({ ok: false, error: "kind" }, { status: 400 });
  }
  if (data.website_hp) return NextResponse.json({ ok: true, stored: false }); // piège à robots
  const email = String(data.email ?? "").trim();
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "email" }, { status: 400 });
  }
  const nom = String(data.providerName ?? data.companyName ?? "").trim().slice(0, 200);
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "";
  const row = {
    kind: data.form_kind,
    nom,
    email,
    site_web: data.website ? String(data.website).slice(0, 300) : null,
    ville: data.city ? String(data.city).slice(0, 120) : null,
    type_declare: (data.providerType ?? data.projectType ?? null) as string | null,
    payload: data,
    user_agent: req.headers.get("user-agent")?.slice(0, 200) ?? null,
    ip_hash: ip ? createHash("sha256").update(ip).digest("hex").slice(0, 32) : null
  };

  let stored = false;
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_KEY;
  if (url && key) {
    try {
      const r = await fetch(`${url}/rest/v1/demandes_site`, {
        method: "POST",
        headers: {
          apikey: key,
          Authorization: `Bearer ${key}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
          "User-Agent": "cockpit-worker"
        },
        body: JSON.stringify(row)
      });
      stored = r.ok;
    } catch {
      stored = false;
    }
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chat = process.env.TELEGRAM_CHAT_ID;
  if (token && chat) {
    const texte = `🤖 Formulaires entreprise.ai — ${KINDS[data.form_kind]} : ${nom || "(sans nom)"}${row.ville ? ` (${row.ville})` : ""}${row.site_web ? ` · ${row.site_web}` : ""} · ${email}${stored ? "" : " · ⚠ non enregistré en base"}`;
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chat, text: texte, disable_web_page_preview: true })
    }).catch(() => undefined);
  }

  if (!stored) return NextResponse.json({ ok: false, stored }, { status: 502 });
  return NextResponse.json({ ok: true, stored });
}
