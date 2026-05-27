import { Breadcrumbs } from "@/components/Breadcrumbs";
import { HubGrid } from "@/components/HubGrid";
import { ProjectCTA } from "@/components/ProjectCTA";
import { useCases } from "@/data/useCases";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Cas d'usage IA pour PME et ETI",
  description: "Cas d'usage IA B2B : automatisation, agents IA, chatbot, RAG, reporting, formation et intégration métier.",
  path: "/cas-usages"
});

export default function UseCasesHubPage() {
  return (
    <>
      <div className="page-shell">
        <Breadcrumbs items={[{ label: "Cas d'usage", href: "/cas-usages" }]} />
        <div className="mt-8 max-w-4xl">
          <h1 className="text-4xl font-semibold tracking-normal text-ink md:text-5xl">Cas d'usage IA pour PME et ETI</h1>
          <p className="mt-5 text-lg leading-8 text-muted">
            Pages structurées par besoin métier pour comprendre les objectifs, budgets, risques et types de prestataires à privilégier.
          </p>
        </div>
      </div>
      <section className="section">
        <HubGrid items={useCases.map((useCase) => ({ title: useCase.title, href: `/cas-usages/${useCase.slug}`, description: useCase.summary }))} />
      </section>
      <ProjectCTA />
    </>
  );
}
