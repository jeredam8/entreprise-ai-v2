import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
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
            Entreprise.ai fonctionne comme une marketplace de projets IA : on part du besoin de l'entreprise, on qualifie le projet, puis on prépare une shortlist de prestataires adaptés.
          </p>
        </div>
      </div>
      <section className="section">
        <div className="grid gap-6 md:grid-cols-2">
          <Process title="Côté entreprise" items={["Décrire le projet IA", "Clarifier budget, outils, données et contraintes", "Recevoir une shortlist de 2 à 3 options pertinentes", "Comparer les critères de choix et points de vigilance", "Échanger directement avec les prestataires retenus"]} />
          <Process title="Côté prestataire" items={["Présenter son positionnement et ses cas d'intervention", "Indiquer secteurs, budgets minimums et types de projets acceptés", "Être mobilisé uniquement quand le besoin correspond", "Recevoir des opportunités plus qualifiées qu'un formulaire générique", "Échanger directement avec l'entreprise"]} />
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            ["Qualification humaine", "Le matching part du contexte réel, pas seulement d'un filtre de catégorie."],
            ["Critères explicites", "La shortlist explique pourquoi chaque option peut correspondre au projet."],
            ["Choix libre", "Entreprise.ai aide à décider, sans imposer un prestataire."]
          ].map(([title, text]) => (
            <div key={title} className="rounded-md border border-line bg-soft p-6">
              <CheckCircle2 className="h-5 w-5 text-forest" aria-hidden="true" />
              <h2 className="mt-4 text-lg font-semibold text-ink">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section pt-0">
        <div className="rounded-md border border-line bg-white p-6 md:flex md:items-center md:justify-between md:gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-ink">Vous êtes prestataire IA ?</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">
              Le référencement sert à intégrer le réseau mobilisable pour des projets qualifiés, pas à remplir un annuaire de volume.
            </p>
          </div>
          <Link href="/referencer-mon-agence-ia" className="btn-secondary mt-5 md:mt-0">Référencer mon agence IA</Link>
        </div>
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
