import { Breadcrumbs } from "@/components/Breadcrumbs";
import { HubGrid } from "@/components/HubGrid";
import { ProjectCTA } from "@/components/ProjectCTA";
import { sectors } from "@/data/sectors";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Secteurs IA - Prestataires IA par métier",
  description: "Pages sectorielles IA pour cabinets comptables, avocats, e-commerce, immobilier, industrie, BTP, RH, assurance et santé.",
  path: "/secteurs"
});

export default function SectorsHubPage() {
  return (
    <>
      <div className="page-shell">
        <Breadcrumbs items={[{ label: "Secteurs", href: "/secteurs" }]} />
        <div className="mt-8 max-w-4xl">
          <h1 className="text-4xl font-semibold tracking-normal text-ink md:text-5xl">IA par secteur</h1>
          <p className="mt-5 text-lg leading-8 text-muted">
            Chaque secteur a ses contraintes : données clients, confidentialité, outils métier, conformité et adoption par les équipes.
          </p>
        </div>
      </div>
      <section className="section">
        <HubGrid items={sectors.map((sector) => ({ title: sector.title, href: `/secteurs/${sector.slug}`, description: sector.summary }))} />
      </section>
      <ProjectCTA />
    </>
  );
}
