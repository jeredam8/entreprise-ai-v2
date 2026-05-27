import { Breadcrumbs } from "@/components/Breadcrumbs";
import { HubGrid } from "@/components/HubGrid";
import { ProjectCTA } from "@/components/ProjectCTA";
import { guides } from "@/data/guides";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Guides IA pour PME et ETI",
  description: "Guides pratiques pour choisir un prestataire IA, estimer un budget, rédiger un cahier des charges et traiter le RGPD.",
  path: "/guides"
});

export default function GuidesHubPage() {
  return (
    <>
      <div className="page-shell">
        <Breadcrumbs items={[{ label: "Guides", href: "/guides" }]} />
        <div className="mt-8 max-w-4xl">
          <h1 className="text-4xl font-semibold tracking-normal text-ink md:text-5xl">Guides IA pour entreprises</h1>
          <p className="mt-5 text-lg leading-8 text-muted">
            Guides conçus pour les dirigeants, DSI, DAF, DRH et directions métier qui doivent cadrer un projet IA et sélectionner un prestataire.
          </p>
        </div>
      </div>
      <section className="section">
        <HubGrid items={guides.map((guide) => ({ title: guide.title, href: `/guides/${guide.slug}`, description: guide.summary }))} />
      </section>
      <ProjectCTA />
    </>
  );
}
