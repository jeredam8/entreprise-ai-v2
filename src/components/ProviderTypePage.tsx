import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { ProjectCTA } from "@/components/ProjectCTA";
import { ProviderCard } from "@/components/ProviderCard";
import { providers } from "@/data/providers";
import type { Provider } from "@/data/types";
import { absoluteUrl } from "@/lib/routes";
import { budgetStats, cityPagesWithCounts, formatDateFr, formatEuro, lastVerification, ofType } from "@/lib/stats";
import { itemListJsonLd } from "@/lib/structuredData";

type ProviderTypePageProps = {
  type: Provider["type"];
  title: string;
  description: string;
  path: string;
};

/** Page d'un type de prestataire. Depuis le 03/09/2026 elle LISTE les fiches du type
 *  (avant : une page explicative sans aucun prestataire, sur laquelle « agence ia »
 *  faisait 600 impressions Google pour zéro clic). */
export function ProviderTypePage({ type, title, description, path }: ProviderTypePageProps) {
  const liste = ofType(type);
  const n = liste.length;
  const budgets = budgetStats(liste);
  const villes = cityPagesWithCounts(liste).filter((v) => v.count > 0);
  const verif = formatDateFr(lastVerification(liste));
  const pluriel = n > 1 ? "s" : "";

  return (
    <>
      <JsonLd data={itemListJsonLd(`${title} en France`, liste.map((p) => absoluteUrl(`/prestataires-ia/${p.slug}`)))} />
      <div className="page-shell">
        <Breadcrumbs items={[{ label: title, href: path }]} />
        <div className="mt-8 max-w-4xl">
          <h1 className="text-4xl font-semibold tracking-normal text-ink md:text-5xl">
            {title} en France : {n} prestataire{pluriel} vérifié{pluriel}
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted">{description}</p>
          <p className="mt-4 text-sm leading-6 text-muted">
            {n} fiche{pluriel} rattachée{pluriel} à une entreprise réelle, vérifiée au répertoire Sirene
            {verif ? ` (dernier contrôle le ${verif})` : ""}.
            {budgets.known > 0
              ? ` Budget de départ connu pour ${budgets.known} d'entre elles, médiane ${formatEuro(budgets.median)}.`
              : ""}{" "}
            Ordre éditorial, aucune position n'est vendue.
          </p>
        </div>
      </div>

      {n > 0 ? (
        <section className="section pt-0">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {liste.map((provider) => (
              <ProviderCard key={provider.slug} provider={provider} />
            ))}
          </div>
          <Link href="/prestataires-ia" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-forest">
            Voir les {providers.length} prestataires de l'annuaire
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </section>
      ) : null}

      {villes.length > 0 ? (
        <section className="section pt-0">
          <div className="section-heading">
            <h2>Par ville</h2>
            <p>Nombre de fiches de ce type rattachées à chaque bassin d'emploi.</p>
          </div>
          <ul className="flex flex-wrap gap-3 text-sm">
            {villes.map((v) => (
              <li key={v.slug}>
                <Link href={`/villes/${v.slug}`} className="rounded-md border border-line bg-white px-4 py-2 font-medium text-ink hover:border-forest hover:text-forest">
                  {v.city} · {v.count}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="section pt-0">
        <div className="grid gap-5 md:grid-cols-3">
          <Card title="Bon fit" text={`À envisager quand le besoin correspond vraiment à un profil ${type.toLowerCase()}, et pas seulement à une recherche générique de prestataire IA.`} />
          <Card title="À vérifier" text="Méthode de cadrage, capacité de livraison, références, maintenance, sécurité, périmètre exact et interlocuteur qui réalisera la mission." />
          <Card title="Rôle d'Entreprise.ai" text="Vérifier l'identité et l'offre de chaque prestataire, puis donner les critères pour comparer, sans vendre de position." />
        </div>
      </section>
      <ProjectCTA />
    </>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-md border border-line bg-white p-6">
      <h2 className="text-xl font-semibold text-ink">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
    </div>
  );
}
