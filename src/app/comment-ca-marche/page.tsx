import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProjectCTA } from "@/components/ProjectCTA";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Comment fonctionne Entreprise.ai",
  description: "Fonctionnement côté entreprise et côté prestataire : dépôt de projet, qualification, shortlist, échange direct et modèle commission.",
  path: "/comment-ca-marche"
});

export default function HowItWorksPage() {
  return (
    <>
      <div className="page-shell">
        <Breadcrumbs items={[{ label: "Comment ça marche", href: "/comment-ca-marche" }]} />
        <div className="mt-8 max-w-4xl">
          <h1 className="text-4xl font-semibold tracking-normal text-ink md:text-5xl">Comment ça marche</h1>
          <p className="mt-5 text-lg leading-8 text-muted">
            Entreprise.ai doit devenir un point d'entrée B2B : qualifier un besoin IA, identifier des prestataires pertinents et laisser l'entreprise échanger directement avec eux.
          </p>
        </div>
      </div>
      <section className="section">
        <div className="grid gap-6 md:grid-cols-2">
          <Process title="Côté entreprise" items={["Décrire le projet IA", "Clarifier le budget, les outils et les risques", "Recevoir 2 à 3 prestataires adaptés", "Échanger directement avec les prestataires", "Choisir librement ou suspendre le projet"]} />
          <Process title="Côté prestataire" items={["Demander à être référencé", "Présenter spécialités, secteurs et budget minimum", "Recevoir des opportunités qualifiées", "Échanger directement avec l'entreprise", "Payer une commission au succès dans le modèle initial"]} />
        </div>
        <div className="mt-8 rounded-md border border-line bg-soft p-6">
          <h2 className="text-2xl font-semibold text-ink">Règle de confiance</h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            Le futur site devra séparer classement éditorial, prestataires vérifiés, sponsorisation et recommandations de shortlist. Un prestataire sponsorisé ne doit jamais être présenté comme objectivement meilleur uniquement parce qu'il paie.
          </p>
        </div>
      </section>
      <section className="section pt-0">
        <Link href="/referencer-mon-agence-ia" className="btn-secondary">Référencer un prestataire IA</Link>
      </section>
      <ProjectCTA />
    </>
  );
}

function Process({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-md border border-line bg-white p-6">
      <h2 className="text-2xl font-semibold text-ink">{title}</h2>
      <ol className="mt-5 space-y-4">
        {items.map((item, index) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-muted">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-forest text-xs font-semibold text-white">{index + 1}</span>
            {item}
          </li>
        ))}
      </ol>
    </div>
  );
}
