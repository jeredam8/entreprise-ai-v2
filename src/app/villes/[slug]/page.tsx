import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";
import { ProjectCTA } from "@/components/ProjectCTA";
import { ProviderCard } from "@/components/ProviderCard";
import { getCityBySlug, cities } from "@/data/cities";
import { providers } from "@/data/providers";
import { absoluteUrl } from "@/lib/routes";
import { itemListJsonLd } from "@/lib/structuredData";
import { JsonLd } from "@/components/JsonLd";
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

  const locaux = providers.filter((provider) => provider.city === city.city);

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

      {locaux.length ? (
        <>
        <JsonLd data={itemListJsonLd(`Prestataires IA à ${city.city}`, locaux.map((p) => absoluteUrl(`/prestataires-ia/${p.slug}`)))} />
        <section className="section pt-0">
          <div className="section-heading">
            <h2>
              {locaux.length} prestataire{locaux.length > 1 ? "s" : ""} IA référencé
              {locaux.length > 1 ? "s" : ""} à {city.city}
            </h2>
            <p>
              Identité légale vérifiée au répertoire Sirene. Ces prestataires interviennent aussi à
              distance ; la proximité facilite le cadrage, elle ne remplace pas la compétence.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {locaux.map((provider) => (
              <ProviderCard key={provider.slug} provider={provider} />
            ))}
          </div>
          <Link
            href="/prestataires-ia"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-forest"
          >
            Voir les {providers.length} prestataires de l'annuaire
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </section>
        </>
      ) : (
        <section className="section pt-0">
          <div className="rounded-md border border-line bg-soft p-6">
            <h2 className="text-2xl font-semibold text-ink">
              Aucun prestataire référencé à {city.city} pour l'instant
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted">
              L'annuaire s'enrichit progressivement et ne couvre pas encore cette ville. Les{" "}
              <Link href="/prestataires-ia" className="font-semibold text-forest">
                {providers.length} prestataires référencés
              </Link>{" "}
              interviennent tous à distance sur l'ensemble du territoire.
            </p>
          </div>
        </section>
      )}
      <FAQ items={city.faqs} />
      <ProjectCTA />
    </>
  );
}
