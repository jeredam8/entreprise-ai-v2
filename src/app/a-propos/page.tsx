import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProjectCTA } from "@/components/ProjectCTA";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "À propos - Entreprise.ai",
  description: "Positionnement d'Entreprise.ai : qualification de projets IA et shortlist de prestataires adaptés pour PME et ETI.",
  path: "/a-propos"
});

export default function AboutPage() {
  return (
    <>
      <div className="page-shell">
        <Breadcrumbs items={[{ label: "À propos", href: "/a-propos" }]} />
        <div className="mt-8 max-w-4xl">
          <h1 className="text-4xl font-semibold tracking-normal text-ink md:text-5xl">À propos d'Entreprise.ai</h1>
          <p className="mt-5 text-lg leading-8 text-muted">
            Entreprise.ai est conçu comme un point d'entrée de qualification pour les projets IA des PME et ETI : les entreprises décrivent leur besoin, Entreprise.ai qualifie le projet et prépare une shortlist manuelle de prestataires adaptés.
          </p>
        </div>
      </div>
      <section className="section">
        <div className="grid gap-5 md:grid-cols-3">
          <Card title="Ce que le site doit être" text="Un point d'entrée français pour transformer une intention IA floue en décision d'achat claire." />
          <Card title="Ce que le site n'est pas" text="Ni une plateforme freelance self-service, ni une agence IA qui livre elle-même les missions, ni un comparateur d'outils." />
          <Card title="Principe de sélection" text="Comprendre le besoin, qualifier le contexte et orienter vers une shortlist adaptée plutôt que multiplier les contacts inutiles." />
        </div>
      </section>
      <ProjectCTA />
    </>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-md border border-line bg-white p-6">
      <h2 className="text-xl font-semibold text-ink">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
    </div>
  );
}
