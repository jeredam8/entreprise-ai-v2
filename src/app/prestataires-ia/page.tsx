import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProjectCTA } from "@/components/ProjectCTA";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Comparer les prestataires IA - Agence, consultant, intégrateur",
  description:
    "Comprendre quel type de prestataire IA choisir selon le projet : agence IA, consultant, intégrateur, formateur, cabinet data ou spécialiste automatisation.",
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

const matchingCriteria = [
  "Type de projet et niveau de complexité",
  "Budget et délai réalistes",
  "Secteur, contraintes métier et données manipulées",
  "Outils à connecter et maturité interne",
  "Besoin de conseil, de production ou d'intégration",
  "Risques sécurité, RGPD, maintenance et adoption"
];

export default function ProvidersPage() {
  return (
    <>
      <div className="page-shell">
        <Breadcrumbs items={[{ label: "Types de prestataires IA", href: "/prestataires-ia" }]} />
        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.78fr]">
          <div>
            <h1 className="text-4xl font-semibold tracking-normal text-ink md:text-5xl">
              Comparer les types de prestataires IA
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted">
              Le bon choix n'est pas toujours une agence. Selon le besoin, une PME peut avoir besoin d'un consultant, d'un intégrateur, d'un cabinet data, d'un formateur ou d'un spécialiste automatisation.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/deposer-un-projet-ia" className="btn-primary">
                Déposer un projet IA
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/comment-ca-marche" className="btn-secondary">
                Voir la méthode
              </Link>
            </div>
          </div>
          <div className="rounded-md border border-line bg-soft p-6">
            <h2 className="text-xl font-semibold text-ink">Ce qu'Entreprise.ai compare</h2>
            <ul className="mt-5 space-y-3">
              {matchingCriteria.map((criterion) => (
                <li key={criterion} className="flex gap-3 text-sm leading-6 text-muted">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-forest" aria-hidden="true" />
                  {criterion}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

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
            <h2>Pourquoi ne pas partir d'un annuaire brut ?</h2>
            <p>
              Une liste de prestataires ne dit pas qui est adapté à votre contexte. Entreprise.ai part du projet, puis remonte vers le bon type d'acteur.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["Moins de bruit", "On évite de comparer des acteurs qui ne jouent pas le même rôle."],
              ["Meilleur cadrage", "Le besoin est traduit en critères de choix, budget et risques."],
              ["Shortlist actionnable", "L'entreprise reçoit des options à contacter, pas seulement une page à parcourir."]
            ].map(([title, text]) => (
              <div key={title} className="rounded-md border border-line bg-white p-6">
                <h3 className="text-lg font-semibold text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectCTA />
    </>
  );
}
