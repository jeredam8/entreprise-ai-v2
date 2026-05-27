import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProjectCTA } from "@/components/ProjectCTA";
import { JsonLd } from "@/components/JsonLd";
import { getProviderBySlug, providers } from "@/data/providers";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/routes";

type ProviderPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return providers.map((provider) => ({ slug: provider.slug }));
}

export async function generateMetadata({ params }: ProviderPageProps) {
  const { slug } = await params;
  const provider = getProviderBySlug(slug);
  if (!provider) return {};
  return buildMetadata({
    title: `${provider.name} - Fiche prestataire IA exemple MVP`,
    description: `${provider.name} est une fiche fictive MVP de type ${provider.type}, basée à ${provider.city}, pour tester l'annuaire Entreprise.ai.`,
    path: `/prestataires-ia/${provider.slug}`
  });
}

export default async function ProviderPage({ params }: ProviderPageProps) {
  const { slug } = await params;
  const provider = getProviderBySlug(slug);
  if (!provider) notFound();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: provider.name,
          url: absoluteUrl(`/prestataires-ia/${provider.slug}`),
          description: `Exemple MVP fictif : ${provider.description}`,
          areaServed: "France",
          additionalType: provider.type,
          knowsAbout: provider.specialties,
          disambiguatingDescription:
            "Fiche fictive de démonstration pour un MVP local. Ce prestataire n'est pas présenté comme une entreprise réelle vérifiée."
        }}
      />
      <div className="page-shell">
        <Breadcrumbs items={[{ label: "Prestataires IA", href: "/prestataires-ia" }, { label: provider.name, href: `/prestataires-ia/${provider.slug}` }]} />
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-md border border-amber/30 bg-amber/10 px-3 py-1 text-xs font-semibold text-amber">
                {provider.verificationLevel}
              </span>
              <span className="rounded-md bg-soft px-3 py-1 text-xs font-semibold text-muted">{provider.type}</span>
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-normal text-ink md:text-5xl">{provider.name}</h1>
            <p className="mt-5 text-lg leading-8 text-muted">{provider.description}</p>
            <p className="mt-4 rounded-md border border-amber/30 bg-amber/10 p-4 text-sm leading-6 text-amber">
              {provider.verificationNote}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/deposer-un-projet-ia" className="btn-primary">
                Demander une mise en relation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/deposer-un-projet-ia" className="btn-secondary">
                Déposer un projet IA
              </Link>
            </div>
          </div>
          <aside className="rounded-md border border-line bg-white p-6 shadow-panel">
            <h2 className="text-lg font-semibold text-ink">Informations clés</h2>
            <dl className="mt-5 space-y-4 text-sm">
              <Info label="Ville" value={provider.city} />
              <Info label="Intervention" value={provider.intervention} />
              <Info label="Remote" value={provider.remote ? "Oui" : "Non"} />
              <Info label="Budget minimum" value={provider.minBudgetLabel} />
              <Info label="Taille d'équipe" value={provider.teamSize} />
            </dl>
            <div className="mt-5 flex items-center gap-2 text-sm text-muted">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              France · Données exemple MVP
            </div>
          </aside>
        </div>
      </div>

      <section className="section">
        <div className="grid gap-6 lg:grid-cols-3">
          <TagBlock title="Spécialités" items={provider.specialties} />
          <TagBlock title="Secteurs couverts" items={provider.sectors} />
          <TagBlock title="Outils ou stacks" items={provider.stacks} />
        </div>
      </section>

      <section className="section pt-0">
        <div className="rounded-md border border-line bg-soft p-6">
          <h2 className="text-2xl font-semibold text-ink">Cas d'usage typiques</h2>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {provider.typicalUseCases.map((useCase) => (
              <li key={useCase} className="flex gap-3 text-sm leading-6 text-muted">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-forest" aria-hidden="true" />
                {useCase}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <ProjectCTA title="Votre projet ressemble à ce profil ?" description="Décrivez votre besoin. La version finale d'Entreprise.ai cherchera 2 à 3 prestataires réellement vérifiés et adaptés à votre contexte." />
    </>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-line pb-3">
      <dt className="text-muted">{label}</dt>
      <dd className="text-right font-semibold text-ink">{value}</dd>
    </div>
  );
}

function TagBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-md border border-line bg-white p-5">
      <h2 className="text-lg font-semibold text-ink">{title}</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="rounded-md bg-soft px-3 py-1.5 text-sm text-muted">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
