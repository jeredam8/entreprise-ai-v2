import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProjectCTA } from "@/components/ProjectCTA";
import { ProviderDirectory } from "@/components/ProviderDirectory";
import { JsonLd } from "@/components/JsonLd";
import { providers } from "@/data/providers";
import { buildMetadata } from "@/lib/seo";
import { itemListJsonLd } from "@/lib/structuredData";

export const metadata = buildMetadata({
  title: `Prestataires IA en France : ${providers.length} agences et consultants`,
  description:
    `Comparez ${providers.length} agences, consultants, intégrateurs et formateurs IA français. ` +
    "Fiches documentées, spécialités, budgets et filtres par ville et par besoin.",
  path: "/prestataires-ia",
});

const providerTypes = [
  {
    title: "Agence IA",
    bestFor:
      "Projets multi-compétences avec besoin de production, design de workflow, intégration légère et suivi projet.",
    watch:
      "Vérifier le niveau réel des équipes qui livrent, pas seulement la qualité du discours commercial.",
  },
  {
    title: "Consultant IA",
    bestFor:
      "Cadrage dirigeant, audit, choix d'outils, priorisation de cas d'usage et accompagnement d'équipes internes.",
    watch:
      "Clarifier si le consultant livre lui-même, pilote des freelances ou reste uniquement en conseil.",
  },
  {
    title: "Intégrateur IA",
    bestFor:
      "Projets connectés au SI : CRM, ERP, base documentaire, tickets support, permissions et données internes.",
    watch:
      "Vérifier sécurité, maintenance, réversibilité et capacité à travailler avec les outils déjà en place.",
  },
  {
    title: "Cabinet data",
    bestFor:
      "Projets où la qualité des données, les pipelines, le reporting et les modèles analytiques sont centraux.",
    watch: "Ne pas confondre projet data long avec quick win IA opérationnel.",
  },
  {
    title: "Formateur IA",
    bestFor:
      "Acculturation, adoption, bonnes pratiques, prompts métiers et montée en compétence d'équipes.",
    watch:
      "La formation ne suffit pas si le besoin réel est de livrer un workflow en production.",
  },
  {
    title: "Spécialiste automatisation",
    bestFor:
      "Connexions rapides entre outils, back-office, relances, reporting, qualification et tâches répétitives.",
    watch:
      "Vérifier la robustesse, la documentation et la gestion des erreurs avant de dépendre du workflow.",
  },
];

export default function ProvidersPage() {
  return (
    <>
      <JsonLd
        data={itemListJsonLd(
          "Prestataires IA référencés en France",
          providers.map((provider) => `/prestataires-ia/${provider.slug}`),
        )}
      />
      <div className="page-shell">
        <Breadcrumbs
          items={[{ label: "Prestataires IA", href: "/prestataires-ia" }]}
        />
        <h1 className="mt-6 text-3xl font-semibold md:text-4xl">
          Trouvez votre prestataire IA
        </h1>
        <p className="mt-4 max-w-3xl leading-7 text-muted">
          {providers.length} agences, consultants, intégrateurs et formateurs en
          France. Recherchez un nom ou un besoin, puis comparez jusqu’à trois
          profils.
        </p>
      </div>

      <ProviderDirectory providers={providers} />

      <section className="section">
        <div className="section-heading">
          <h2>Quel prestataire choisir ?</h2>
          <p>
            Cette page sert à comprendre les options. La sélection finale dépend
            du besoin réel, du budget, des outils existants et du niveau de
            risque du projet.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {providerTypes.map((providerType) => (
            <article
              key={providerType.title}
              className="rounded-md border border-line bg-white p-6"
            >
              <h3 className="text-xl font-semibold text-ink">
                {providerType.title}
              </h3>
              <p className="mt-4 text-sm font-semibold text-forest">
                Adapté si
              </p>
              <p className="mt-2 text-sm leading-6 text-muted">
                {providerType.bestFor}
              </p>
              <p className="mt-4 text-sm font-semibold text-burgundy">
                Point de vigilance
              </p>
              <p className="mt-2 text-sm leading-6 text-muted">
                {providerType.watch}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-soft">
        <div className="section">
          <div className="section-heading">
            <h2>Ce que nous vérifions avant de référencer</h2>
            <p>
              Une liste de noms ne vaut rien si personne ne l'a contrôlée.
              Chaque fiche est rattachée à une entreprise identifiée, dont
              l'activité est cohérente avec une prestation IA.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              [
                "Identité légale",
                "Les identités publiques sont rapprochées du répertoire Sirene. Une fiche commerciale sans données légales publiques est signalée comme déclarative.",
              ],
              [
                "Activité cohérente",
                "L'offre IA doit être rattachée à la bonne structure. Un code d'activité différent conduit à vérifier le rapprochement, sans confondre deux homonymes.",
              ],
              [
                "Offre IA réelle",
                "Le site doit présenter une offre IA identifiable, pas une simple mention. Les descriptions sont reformulées à partir de sources publiques.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-md border border-line bg-white p-6"
              >
                <h3 className="text-lg font-semibold text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/methodologie" className="btn-secondary">
              Lire la méthodologie complète
            </Link>
            <Link
              href="/referencer-un-prestataire-ia"
              className="text-sm font-semibold text-forest"
            >
              Vous dirigez un prestataire IA ? Référencez-vous gratuitement →
            </Link>
          </div>
        </div>
      </section>

      <ProjectCTA />
    </>
  );
}
