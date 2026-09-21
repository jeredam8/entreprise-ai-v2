import { providers } from "@/data/providers";
const events = new Set([
  "form_start",
  "form_success",
  "form_error",
  "directory_filter",
  "provider_compare",
  "provider_view",
  "provider_website",
]);
const kinds = new Set([
  "",
  "provider_submission",
  "project_submission",
  "contact_submission",
]);
const paths = new Set([
  "/",
  "/contact",
  "/prestataires-ia",
  "/referencer-un-prestataire-ia",
  "/deposer-un-projet-ia",
  "/agences-ia",
  "/consultants-ia",
  "/integrateurs-ia",
  "/formations-ia",
  ...providers.map((p) => `/prestataires-ia/${p.slug}`),
]);
const slugs = new Set(["", ...providers.map((p) => p.slug)]);
export async function POST(req: Request) {
  const empty = () => new Response(null, { status: 204 });
  if (req.headers.get("origin") !== new URL(req.url).origin) return empty();
  if (Number(req.headers.get("content-length")) > 1500) return empty();
  const reader = req.body?.getReader();
  if (!reader) return empty();
  let bytes = 0,
    raw = "";
  const decoder = new TextDecoder();
  try {
    while (true) {
      const r = await reader.read();
      if (r.done) break;
      bytes += r.value.byteLength;
      if (bytes > 1500) {
        await reader.cancel();
        return empty();
      }
      raw += decoder.decode(r.value, { stream: true });
    }
    raw += decoder.decode();
    const d = JSON.parse(raw);
    if (
      !events.has(d.event) ||
      !paths.has(d.page) ||
      !kinds.has(d.kind) ||
      !slugs.has(d.provider) ||
      !["", "empty", "results"].includes(d.outcome)
    )
      return empty();
    const url = process.env.SUPABASE_URL,
      key = process.env.SUPABASE_SERVICE_KEY;
    if (url !== "https://yhozabfbkepsplokwvxh.supabase.co" || !key)
      return empty();
    const r = await fetch(`${url}/rest/v1/rpc/entreprise_ai_count_event`, {
      method: "POST",
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        event_name: d.event,
        page_path: d.page,
        form_kind: d.kind,
        provider_slug: d.provider,
        result_group: d.outcome,
      }),
      signal: AbortSignal.timeout(4000),
    });
    if (!r.ok) console.error("Compteur de parcours indisponible");
  } catch {
    /* Counting must not block navigation. */
  }
  return empty();
}
