import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProviderDirectory } from "@/components/ProviderDirectory";
import { ProjectCTA } from "@/components/ProjectCTA";
import { providers } from "@/data/providers";
import { buildMetadata } from "@/lib/seo";
import { itemListJsonLd } from "@/lib/structuredData";
import { JsonLd } from "@/components/JsonLd";

export const metadata = buildMetadata({
  title: "Prestataires IA - Annuaire qualifié pour PME et ETI",
  description:
    "Annuaire MVP des agences IA, consultants IA, intégrateurs, formateurs et cabinets data pour projets IA B2B.",
  path: "/prestataires-ia"
});

export default function ProvidersPage() {
  return (
    <>
      <JsonLd data={itemListJsonLd("Prestataires IA exemples", providers.map((provider) => `/prestataires-ia/${provider.slug}`))} />
      <div className="page-shell">
        <Breadcrumbs items={[{ label: "Prestataires IA", href: "/prestataires-ia" }]} />
        <div className="mt-8 max-w-4xl">
          <h1 className="text-4xl font-semibold tracking-normal text-ink md:text-5xl">Annuaire des prestataires IA</h1>
          <p className="mt-5 text-lg leading-8 text-muted">
            Comparez des exemples de prestataires IA par type, spécialité, secteur, budget, ville, intervention à distance et taille de structure. Les fiches actuelles sont des placeholders MVP.
          </p>
        </div>
      </div>
      <ProviderDirectory providers={providers} />
      <ProjectCTA />
    </>
  );
}
