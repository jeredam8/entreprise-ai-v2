import Link from "next/link";
import { providers } from "@/data/providers";
import { providerResearch } from "@/data/providerResearch";
export function AgencyComparison() {
  const selected = providers.filter((p) => p.type === "Agence IA" && providerResearch[p.slug]);
  return <section className="section pt-0">
    <div className="section-heading"><h2>Quelle agence IA pour quel besoin ?</h2><p>Repères tirés des offres publiques consultées le 9 septembre 2026. Ce tableau compare des positionnements ; il ne constitue pas un classement de qualité. L’identité légale vérifiée ne garantit pas une prestation.</p></div>
    <div className="overflow-x-auto rounded-md border border-line"><table className="w-full min-w-[560px] text-left text-sm"><caption className="sr-only">Comparaison d’agences IA selon le besoin et les points à vérifier</caption><thead className="bg-soft"><tr><th scope="col" className="p-4">Agence</th><th scope="col" className="p-4">Besoin à étudier</th><th scope="col" className="p-4">À demander avant de signer</th></tr></thead><tbody>{selected.map((p) => <tr key={p.slug} className="border-t border-line"><th scope="row" className="p-4"><Link href={`/prestataires-ia/${p.slug}`} className="text-forest underline">{p.name}</Link></th><td className="p-4">{providerResearch[p.slug].fit}</td><td className="p-4">{providerResearch[p.slug].question}</td></tr>)}</tbody></table></div>
    <div className="mt-6 grid gap-5 md:grid-cols-3">{[
      ["Automatisation", "Un workflow répétitif entre des outils connus : préciser les exceptions et la validation humaine.", "/cas-usages/automatisation-ia"],
      ["RAG documentaire", "Un assistant sur vos documents : tester les sources citées et les autorisations d’accès.", "/cas-usages/rag-base-documentaire"],
      ["Agent connecté", "Un système qui agit dans vos outils : limiter les droits et prévoir l’arrêt ou la reprise manuelle.", "/cas-usages/agent-ia-entreprise"]
    ].map(([label, body, href]) => <div key={href} className="rounded-md border border-line p-5"><h3 className="font-semibold"><Link href={href} className="text-forest underline">{label}</Link></h3><p className="mt-2 text-sm leading-6 text-muted">{body}</p></div>)}</div>
    <p className="mt-6 leading-7">Avant de demander trois devis, utilisez notre <Link href="/guides/comment-choisir-agence-ia" className="text-forest underline">grille de sélection</Link> et notre <Link href="/guides/combien-coute-projet-ia" className="text-forest underline">méthode de budget sur douze mois</Link>. Pour un diagnostic seul, comparez aussi les <Link href="/consultants-ia" className="text-forest underline">consultants IA</Link> ; pour une intégration complexe, les <Link href="/integrateurs-ia" className="text-forest underline">intégrateurs IA</Link>.</p>
  </section>;
}
