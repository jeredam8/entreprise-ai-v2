import { ProviderResearch } from "@/components/ProviderResearch";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BadgeCheck, ExternalLink, MapPin } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { ProjectCTA } from "@/components/ProjectCTA";
import { ProviderCard } from "@/components/ProviderCard";
import { providers } from "@/data/providers";
import type { FaqItem, Provider } from "@/data/types";
import { absoluteUrl } from "@/lib/routes";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structuredData";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return providers.map((provider) => ({ slug: provider.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const provider = providers.find((item) => item.slug === slug);
  if (!provider) {
    return buildMetadata({
      title: "Prestataire introuvable",
      description: "Cette fiche prestataire n'existe pas ou n'est plus référencée.",
      path: "/prestataires-ia",
      noIndex: true
    });
  }
  return buildMetadata({
    title: `${provider.name} — ${provider.type} à ${provider.city}`,
    description:
      `${provider.name} : ${provider.type.toLowerCase()} basé à ${provider.city}. ` +
      `Spécialités, offre et informations pratiques pour un projet IA.`,
    path: `/prestataires-ia/${provider.slug}`
  });
}

/** FAQ dérivée des faits de la fiche — aucune affirmation qui ne soit dans les données. */
function faqsFor(provider: Provider): FaqItem[] {
  const faqs: FaqItem[] = [
    {
      question: `Où est basé ${provider.name} ?`,
      answer: provider.legal?.headOfficeCity
        ? `Le siège social est déclaré à ${provider.legal.headOfficeCity}` +
          `${provider.legal.headOfficePostalCode ? ` (${provider.legal.headOfficePostalCode})` : ""}. ` +
          `Les modalités d’intervention sont à confirmer avec le prestataire.`
        : `${provider.name} est rattaché au bassin de ${provider.city}. Les modalités d’intervention sont à confirmer.`
    },
    {
      question: `Quelles sont les spécialités IA de ${provider.name} ?`,
      answer: provider.specialties.length
        ? `D'après son site : ${provider.specialties.join(", ").toLowerCase()}.`
        : "Les spécialités ne sont pas détaillées publiquement sur son site."
    }
  ];
  if (provider.legal?.createdAt) {
    faqs.push({
      question: `Depuis quand ${provider.name} existe-t-il ?`,
      answer:
        `La structure est immatriculée depuis le ${new Date(provider.legal.createdAt).toLocaleDateString("fr-FR")}` +
        `${provider.legal.legalForm ? `, sous la forme ${provider.legal.legalForm}` : ""}.`
    });
  }
  if (provider.minBudget > 0) {
    faqs.push({
      question: `Quel budget prévoir avec ${provider.name} ?`,
      answer: `${provider.minBudgetLabel}. Le montant réel dépend du périmètre et doit être confirmé par un devis.`
    });
  }
  return faqs;
}

export default async function ProviderPage({ params }: PageProps) {
  const { slug } = await params;
  const provider = providers.find((item) => item.slug === slug);
  if (!provider) notFound();

  const faqs = faqsFor(provider);
  const similaires = providers
    .filter((item) => item.slug !== provider.slug)
    .map((item) => ({
      item,
      score:
        (item.type === provider.type ? 2 : 0) +
        (item.city === provider.city ? 2 : 0) +
        item.specialties.filter((s) => provider.specialties.includes(s)).length
    }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((entry) => entry.item);

  const faits: [string, string | undefined][] = [
    ["Type", provider.type],
    ["Localisation", provider.legal?.headOfficeCity ?? provider.city],
    ["Équipe", provider.teamSize],
    ["Forme juridique", provider.legal?.legalForm],
    ["Création", provider.legal?.createdAt?.slice(0, 4)],
    ["Budget de départ", provider.minBudget > 0 ? provider.minBudgetLabel : undefined]
  ];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: provider.name,
          url: provider.website,
          description: provider.description,
          address: provider.legal?.headOfficeCity
            ? {
                "@type": "PostalAddress",
                addressLocality: provider.legal.headOfficeCity,
                postalCode: provider.legal.headOfficePostalCode,
                addressCountry: "FR"
              }
            : undefined,
          identifier: provider.legal?.siren,
          foundingDate: provider.legal?.createdAt,
          mainEntityOfPage: absoluteUrl(`/prestataires-ia/${provider.slug}`)
        }}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { label: "Prestataires IA", href: "/prestataires-ia" },
          { label: provider.name, href: `/prestataires-ia/${provider.slug}` }
        ])}
      />

      <div className="page-shell">
        <Breadcrumbs
          items={[
            { label: "Prestataires IA", href: "/prestataires-ia" },
            { label: provider.name, href: `/prestataires-ia/${provider.slug}` }
          ]}
        />

        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.6fr]">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-md bg-soft px-2.5 py-1 text-xs font-medium text-ink">
                {provider.type}
              </span>
              {provider.legal ? (
                <span className="inline-flex items-center gap-1.5 rounded-md border border-forest/30 bg-forest/5 px-2.5 py-1 text-xs font-medium text-forest">
                  <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
                  Identité vérifiée
                </span>
              ) : (
                <span className="rounded-md border border-line px-2.5 py-1 text-xs text-muted">Fiche déclarative</span>
              )}
            </div>
            <h1 className="mt-4 text-4xl font-semibold tracking-normal text-ink md:text-5xl">
              {provider.name}
            </h1>
            <p className="mt-4 flex items-center gap-2 text-sm text-muted">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {provider.legal?.headOfficeCity ?? provider.city} · modalités d’intervention à confirmer
            </p>
            <p className="mt-5 text-lg leading-8 text-muted">{provider.description}</p>

            {provider.website ? (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={provider.website}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="btn-primary"
                >
                  Visiter le site
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
                <Link href="/deposer-un-projet-ia" className="btn-secondary">
                  Décrire mon projet
                </Link>
              </div>
            ) : null}
          </div>

          <div className="rounded-md border border-line bg-soft p-6">
            <h2 className="text-xl font-semibold text-ink">En bref</h2>
            <dl className="mt-5 space-y-3">
              {faits
                .filter(([, valeur]) => Boolean(valeur))
                .map(([label, valeur]) => (
                  <div key={label} className="flex justify-between gap-4 text-sm">
                    <dt className="text-muted">{label}</dt>
                    <dd className="text-right font-semibold text-ink">{valeur}</dd>
                  </div>
                ))}
            </dl>
          </div>
        </div>
      </div>

      {provider.specialties.length || provider.sectors.length || provider.stacks.length ? (
        <section className="section">
          <div className="section-heading">
            <h2>Positionnement</h2>
            <p>
              {provider.requestedByProvider ? "Informations issues de la demande de référencement et du site, relues" : "Relevé sur le site du prestataire"}
              {provider.verifiedAt ? ` le ${new Date(provider.verifiedAt).toLocaleDateString("fr-FR")}` : ""}.
              Ces éléments sont déclaratifs : ils décrivent l'offre annoncée, pas une évaluation.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["Spécialités IA", provider.specialties],
              ["Secteurs adressés", provider.sectors],
              ["Technologies citées", provider.stacks]
            ]
              .filter(([, valeurs]) => (valeurs as string[]).length > 0)
              .map(([titre, valeurs]) => (
                <div key={titre as string} className="rounded-md border border-line bg-white p-6">
                  <h3 className="text-lg font-semibold text-ink">{titre as string}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {(valeurs as string[]).map((valeur) => (
                      <span key={valeur} className="rounded-md bg-soft px-2.5 py-1 text-xs text-ink">
                        {valeur}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </section>
      ) : null}

      {provider.legal ? (
        <section className="border-y border-line bg-soft">
          <div className="section">
            <div className="section-heading">
              <h2>Identité légale</h2>
              <p>
                Données publiques du répertoire Sirene, contrôlées
                {provider.verifiedAt ? ` le ${new Date(provider.verifiedAt).toLocaleDateString("fr-FR")}` : ""}.
                L’identité de la structure a été rapprochée de son site et des informations disponibles au répertoire.
              </p>
            </div>
            <div className="rounded-md border border-line bg-white p-6">
              <dl className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  ["SIREN", provider.legal.siren],
                  ["Forme juridique", provider.legal.legalForm],
                  ["Code NAF", provider.legal.naf],
                  ["Commune du siège", provider.legal.headOfficeCity]
                ]
                  .filter(([, valeur]) => Boolean(valeur))
                  .map(([label, valeur]) => (
                    <div key={label as string}>
                      <dt className="text-sm text-muted">{label as string}</dt>
                      <dd className="mt-1 font-semibold text-ink">{valeur as string}</dd>
                    </div>
                  ))}
              </dl>
              <a
                href={provider.legal.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-forest"
              >
                Consulter la source officielle
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <p className="mt-4 text-sm leading-6 text-muted">
              {provider.requestedByProvider
                ? "Référencement demandé par le prestataire. Les informations ont été rapprochées de son site et des sources publiques."
                : "Cette fiche a été constituée à partir de sources publiques et n'a pas été revendiquée par son dirigeant."}{" "}
              <Link href="/contact" className="font-semibold text-forest">
                Signaler une erreur ou demander une correction
              </Link>
              .
            </p>
          </div>
        </section>
      ) : null}

      <ProviderResearch slug={provider.slug} />
      {!provider.legal && provider.requestedByProvider ? (
        <section className="section pt-0">
          <p className="text-sm leading-6 text-muted">
            Référencement demandé par le prestataire. Cette fiche présente son offre commerciale,
            relue sur son site. Les informations légales ne sont pas affichées.
          </p>
        </section>
      ) : null}
      <FAQ items={faqs} />

      <section className="section pt-0">
        <div className="rounded-md border border-line bg-soft p-6">
          <h2 className="text-2xl font-semibold text-ink">Vous représentez {provider.name} ?</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">
            Cette fiche de base est gratuite et le restera. Vérifiez-la, demandez une correction si besoin, et
            partagez le lien de votre fiche sur votre site. La{" "}
            <Link href="/referencer-un-prestataire-ia" className="font-semibold text-forest">
              Fiche complète
            </Link>{" "}
            (149 € HT par an) ajoute une présentation détaillée, vos réalisations, un lien direct et votre logo.
          </p>
          {provider.legal ? <div className="mt-5 flex flex-wrap items-start gap-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/badge/reference-entreprise-ai.svg" alt="Prestataire IA vérifié sur Entreprise.ai" width={220} height={56} />
            <pre className="max-w-full overflow-x-auto rounded-md border border-line bg-white p-3 text-xs leading-5 text-ink">
              <code>{`<a href="${absoluteUrl(`/prestataires-ia/${provider.slug}`)}"><img src="https://entreprise.ai/badge/reference-entreprise-ai.svg" alt="Prestataire IA vérifié sur Entreprise.ai" width="220" height="56"></a>`}</code>
            </pre>
          </div> : null}
        </div>
      </section>

      {similaires.length ? (
        <section className="section">
          <div className="section-heading">
            <h2>Prestataires comparables</h2>
            <p>Profils proches par le type d'acteur, la localisation ou les spécialités.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {similaires.map((item) => (
              <ProviderCard key={item.slug} provider={item} />
            ))}
          </div>
          <Link
            href="/prestataires-ia"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-forest"
          >
            Voir les {providers.length} prestataires référencés
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </section>
      ) : null}

      <ProjectCTA />
    </>
  );
}
