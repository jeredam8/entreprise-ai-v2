import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProjectCTA } from "@/components/ProjectCTA";
import { ProviderDirectory } from "@/components/ProviderDirectory";
import { JsonLd } from "@/components/JsonLd";
import { providers } from "@/data/providers";
import { buildMetadata } from "@/lib/seo";
import { itemListJsonLd } from "@/lib/structuredData";

export const metadata = buildMetadata({
  title: `Prestataires IA en France : ${providers.length} agences et consultants vérifiés`,
  description:
    `Comparez ${providers.length} agences, consultants, intégrateurs et formateurs IA français. ` +
    "Identité vérifiée au répertoire Sirene, spécialités, budgets, filtres par ville et par besoin.",
  path: "/prestataires-ia"
});

const providerTypes = [
  {
    title: "Agence IA",
    bestFor: "Projets multi-compétences avec besoin de production, design de workflow, intégration légère et suivi projet.",
    watch: "Vérifier le niveau réel des équipes qui livrent, pas seulement la qualité du discours commercial."
  },
  {
    title: "Consultant IA",
    bestFor: "Cadrage dirigeant, audit, choix d'outils, priorisation de cas d'usage et accompagnement d'équipes internes.",
    watch: "Clarifier si le consultant livre lui-même, pilote des freelances ou reste uniquement en conseil."
  },
  {
    title: "Intégrateur IA",
    bestFor: "Projets connectés au SI : CRM, ERP, base documentaire, tickets support, permissions et données internes.",
    watch: "Vérifier sécurité, maintenance, réversibilité et capacité à travailler avec les outils déjà en place."
  },
  {
    title: "Cabinet data",
    bestFor: "Projets où la qualité des données, les pipelines, le reporting et les modèles analytiques sont centraux.",
    watch: "Ne pas confondre projet data long avec quick win IA opérationnel."
  },
  {
    title: "Formateur IA",
    bestFor: "Acculturation, adoption, bonnes pratiques, prompts métiers et montée en compétence d'équipes.",
    watch: "La formation ne suffit pas si le besoin réel est de livrer un workflow en production."
  },
  {
    title: "Spécialiste automatisation",
    bestFor: "Connexions rapides entre outils, back-office, relances, reporting, qualification et tâches répétitives.",
    watch: "Vérifier la robustesse, la documentation et la gestion des erreurs avant de dépendre du workflow."
  }
];

export default function ProvidersPage() {
  const verifies = providers.filter((provider) => provider.legal).length;
  const villes = new Set(providers.map((provider) => provider.city)).size;
  const derniereVerif = providers
    .map((provider) => provider.verifiedAt)
    .filter(Boolean)
    .sort()
    .pop();

  return (
    <>
      <JsonLd
        data={itemListJsonLd(
          "Prestataires IA référencés en France",
          providers.map((provider) => `/prestataires-ia/${provider.slug}`)
        )}
      />
      <div className="page-shell">
        <Breadcrumbs items={[{ label: "Prestataires IA", href: "/prestataires-ia" }]} />
        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.78fr]">
          <div>
            <h1 className="text-4xl font-semibold tracking-normal text-ink md:text-5xl">
              Les prestataires IA français, vérifiés un par un
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted">
              {providers.length} agences, consultants, intégrateurs, formateurs et cabinets data
              spécialisés en intelligence artificielle. Chaque fiche est rattachée à une entreprise
              réelle, contrôlée au répertoire Sirene.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/deposer-un-projet-ia" className="btn-primary">
                Déposer un projet IA
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/methodologie" className="btn-secondary">
                Notre méthodologie
              </Link>
            </div>
          </div>
          <div className="rounded-md border border-line bg-soft p-6">
            <h2 className="text-xl font-semibold text-ink">L'état du référencement</h2>
            <dl className="mt-5 grid grid-cols-2 gap-4">
              {[
                ["Prestataires référencés", String(providers.length)],
                ["Identités vérifiées", String(verifies)],
                ["Villes couvertes", String(villes)],
                [
                  "Dernière vérification",
                  derniereVerif ? new Date(derniereVerif).toLocaleDateString("fr-FR") : "—"
                ]
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-sm text-muted">{label}</dt>
                  <dd className="mt-1 text-2xl font-semibold text-ink">{value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-sm leading-6 text-muted">
              Fiche de base gratuite, Fiche complète signalée comme telle. Aucun paiement ne peut influencer une
              position ou une recommandation.
            </p>
          </div>
        </div>
      </div>

      <ProviderDirectory providers={providers} />

      <section className="section">
        <div className="section-heading">
          <h2>Quel prestataire choisir ?</h2>
          <p>
            Cette page sert à comprendre les options. La shortlist finale dépend du besoin réel, du budget, des outils existants et du niveau de risque du projet.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {providerTypes.map((providerType) => (
            <article key={providerType.title} className="rounded-md border border-line bg-white p-6">
              <h3 className="text-xl font-semibold text-ink">{providerType.title}</h3>
              <p className="mt-4 text-sm font-semibold text-forest">Adapté si</p>
              <p className="mt-2 text-sm leading-6 text-muted">{providerType.bestFor}</p>
              <p className="mt-4 text-sm font-semibold text-burgundy">Point de vigilance</p>
              <p className="mt-2 text-sm leading-6 text-muted">{providerType.watch}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-soft">
        <div className="section">
          <div className="section-heading">
            <h2>Ce que nous vérifions avant de référencer</h2>
            <p>
              Une liste de noms ne vaut rien si personne ne l'a contrôlée. Chaque fiche est
              rattachée à une entreprise identifiée, dont l'activité est cohérente avec une
              prestation IA.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              [
                "Identité légale",
                "SIREN relevé sur le site du prestataire puis confronté au répertoire Sirene : forme juridique, date de création, effectif et commune du siège."
              ],
              [
                "Activité cohérente",
                "L'activité déclarée doit correspondre à une prestation numérique. Un homonyme au bon nom mais au mauvais métier est écarté."
              ],
              [
                "Offre IA réelle",
                "Le site doit présenter une offre IA identifiable, pas une simple mention. Les descriptions sont reformulées à partir de sources publiques."
              ]
            ].map(([title, text]) => (
              <div key={title} className="rounded-md border border-line bg-white p-6">
                <h3 className="text-lg font-semibold text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/methodologie" className="btn-secondary">
              Lire la méthodologie complète
            </Link>
            <Link href="/referencer-un-prestataire-ia" className="text-sm font-semibold text-forest">
              Vous dirigez un prestataire IA ? Référencez-vous gratuitement →
            </Link>
          </div>
        </div>
      </section>

      <ProjectCTA />
    </>
  );
}
