import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";
import { ProjectCTA } from "@/components/ProjectCTA";
import { getCityBySlug, cities } from "@/data/cities";
import { providers } from "@/data/providers";
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
  const localExamples = providers.filter((provider) => provider.city === city.city);

  return (
    <>
      <div className="page-shell">
        <Breadcrumbs items={[{ label: "Villes", href: "/villes" }, { label: city.city, href: `/villes/${city.slug}` }]} />
        <div className="mt-8 max-w-4xl">
          <h1 className="text-4xl font-semibold tracking-normal text-ink md:text-5xl">{city.h1}</h1>
          <p className="mt-5 text-lg leading-8 text-muted">{city.intro}</p>
          <p className="mt-4 rounded-md border border-line bg-soft p-4 text-sm leading-6 text-muted">
            Cette page locale est un template SEO MVP. Les prestataires affichés restent des exemples fictifs ou des placeholders à vérifier.
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
          <h2 className="text-2xl font-semibold text-ink">Prestataires exemples à {city.city}</h2>
          {localExamples.length > 0 ? (
            <ul className="mt-4 grid gap-3 md:grid-cols-2">
              {localExamples.map((provider) => (
                <li key={provider.slug}>
                  <Link href={`/prestataires-ia/${provider.slug}`} className="font-semibold text-forest hover:text-teal">
                    {provider.name}
                  </Link>
                  <span className="text-sm text-muted"> · {provider.type} · Exemple MVP</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 text-sm leading-6 text-muted">Aucun exemple local strict dans cette V2. La page reste prête pour l'ajout de prestataires réels vérifiés.</p>
          )}
        </div>
      </section>
      <FAQ items={city.faqs} />
      <ProjectCTA />
    </>
  );
}
