import { Breadcrumbs } from "@/components/Breadcrumbs";
import { HubGrid } from "@/components/HubGrid";
import { ProjectCTA } from "@/components/ProjectCTA";
import { cities } from "@/data/cities";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Agences IA par ville - Paris, Lyon, Marseille, Bordeaux",
  description: "Pages locales pour rechercher une agence IA ou un prestataire IA par ville en France.",
  path: "/villes"
});

export default function CitiesHubPage() {
  return (
    <>
      <div className="page-shell">
        <Breadcrumbs items={[{ label: "Villes", href: "/villes" }]} />
        <div className="mt-8 max-w-4xl">
          <h1 className="text-4xl font-semibold tracking-normal text-ink md:text-5xl">Agences IA par ville</h1>
          <p className="mt-5 text-lg leading-8 text-muted">
            Pages locales prévues pour le SEO B2B. La proximité est utile pour le cadrage, mais la sélection doit rester fondée sur les compétences et le contexte projet.
          </p>
        </div>
      </div>
      <section className="section">
        <HubGrid items={cities.map((city) => ({ title: `Agence IA ${city.city}`, href: `/villes/${city.slug}`, description: city.intro }))} />
      </section>
      <ProjectCTA />
    </>
  );
}
