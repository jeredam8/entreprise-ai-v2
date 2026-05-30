import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";
import { ProjectCTA } from "@/components/ProjectCTA";
import { getCityBySlug, cities } from "@/data/cities";
import { buildMetadata } from "@/lib/seo";

type CityPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return cities.map((city) => ({ slug: city.slug }));
}

export async function generateMetadata({ params }: CityPageProps) {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};
  return buildMetadata({
    title: city.metaTitle,
    description: city.metaDescription,
    path: `/villes/${city.slug}`
  });
}

export default async function CityPage({ params }: CityPageProps) {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  return (
    <>
      <div className="page-shell">
        <Breadcrumbs items={[{ label: "Villes", href: "/villes" }, { label: city.city, href: `/villes/${city.slug}` }]} />
        <div className="mt-8 max-w-4xl">
          <h1 className="text-4xl font-semibold tracking-normal text-ink md:text-5xl">{city.h1}</h1>
          <p className="mt-5 text-lg leading-8 text-muted">{city.intro}</p>
          <p className="mt-4 rounded-md border border-line bg-soft p-4 text-sm leading-6 text-muted">
            Entreprise.ai peut qualifier un projet local ou national, puis orienter vers des prestataires capables d'intervenir à distance ou sur site selon le contexte.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-md border border-line bg-white p-5">
            <h2 className="text-xl font-semibold text-ink">Secteurs fréquents</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {city.sectors.map((sector) => <li key={sector}>{sector}</li>)}
            </ul>
          </div>
          <div className="rounded-md border border-line bg-white p-5">
            <h2 className="text-xl font-semibold text-ink">Cas d'usage fréquents</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {city.useCases.map((useCase) => <li key={useCase}>{useCase}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="rounded-md border border-line bg-soft p-6">
          <h2 className="text-2xl font-semibold text-ink">Shortlist locale ou nationale</h2>
          <p className="mt-4 text-sm leading-6 text-muted">
            La sélection ne part pas d'une liste publique de noms. Elle part du projet : niveau technique, budget, outils à connecter, besoin de proximité et risques de livraison.
          </p>
        </div>
      </section>
      <FAQ items={city.faqs} />
      <ProjectCTA />
    </>
  );
}
