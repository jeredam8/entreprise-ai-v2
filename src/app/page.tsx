import Link from "next/link";
import { ArrowRight, CheckCircle2, ClipboardList, Search, ShieldCheck, Users, type LucideIcon } from "lucide-react";
import { ProjectCTA } from "@/components/ProjectCTA";
import { guides } from "@/data/guides";
import { sectors } from "@/data/sectors";
import { useCases } from "@/data/useCases";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Entreprise.ai - Trouver un prestataire IA pour votre projet",
  description:
    "Entreprise.ai aide les PME et ETI à clarifier leur besoin IA et à recevoir une shortlist manuelle de prestataires adaptés.",
  path: "/"
});

const projectTypes = [
  "Automatisation IA",
  "Agent IA interne",
  "Chatbot service client",
  "RAG / base documentaire",
  "Formation IA",
  "Audit IA",
  "Intégration CRM / ERP",
  "IA pour reporting",
  "Traitement documentaire",
  "Prospection commerciale"
];

const companyTargets = ["PME", "ETI", "Directions métier", "Directions générales", "DSI", "DAF", "DRH", "Équipes commerciales", "Équipes support"];
const providerCategories = ["Agences IA", "Consultants IA", "Intégrateurs IA", "Cabinets data", "Formateurs IA", "Experts automatisation", "Spécialistes RAG", "Experts agents IA"];
const processSteps: Array<[string, LucideIcon]> = [
  ["Vous décrivez le projet", ClipboardList],
  ["Nous qualifions le besoin", Search],
  ["Nous préparons la shortlist", Users],
  ["Vous comparez les options", ArrowRight],
  ["Vous choisissez librement", ShieldCheck]
];

const shortlistRows = [
  {
    label: "Agence IA orientée automatisation",
    fit: "Bon fit si le projet touche plusieurs outils métier",
    tags: ["Workflow", "CRM", "Support"]
  },
  {
    label: "Consultant IA senior",
    fit: "Bon fit si le besoin doit être cadré avec un dirigeant",
    tags: ["Cadrage", "Budget", "Risques"]
  },
  {
    label: "Intégrateur data / RAG",
    fit: "Bon fit si le sujet dépend de documents et de données internes",
    tags: ["RAG", "Sécurité", "SI"]
  }
];

export default function HomePage() {
  return (
    <>
      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1fr_0.86fr] lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <h1 className="max-w-4xl text-4xl font-semibold tracking-normal text-ink md:text-6xl">
              Trouvez le bon prestataire IA pour votre projet
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
              Décrivez votre besoin. Entreprise.ai le qualifie, identifie le type de prestataire adapté et prépare une shortlist manuelle de 2 à 3 options à comparer.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/deposer-un-projet-ia" className="btn-primary">
                Déposer un projet IA
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/referencer-un-prestataire-ia" className="btn-secondary">
                Référencer un prestataire IA
              </Link>
            </div>
            <p className="mt-5 text-sm font-medium text-muted">
              Gratuit pour les entreprises au lancement. Matching humain. Shortlist qualifiée.
            </p>
          </div>

          <div className="rounded-md border border-line bg-soft p-5 shadow-panel">
            <div className="rounded-md bg-white p-5">
              <div className="flex items-center justify-between border-b border-line pb-4">
                <div>
                  <p className="text-sm font-semibold text-ink">Livrable Entreprise.ai</p>
                  <p className="mt-1 text-xs text-muted">Exemple de shortlist manuelle</p>
                </div>
                <span className="rounded-md bg-forest/10 px-3 py-1 text-xs font-semibold text-forest">72 h cible</span>
              </div>
              <div className="mt-5 space-y-4">
                {shortlistRows.map((row, index) => (
                  <div key={row.label} className="rounded-md border border-line p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-ink">{row.label}</p>
                        <p className="mt-1 text-xs leading-5 text-muted">{row.fit}</p>
                      </div>
                      <span className="text-xs font-semibold text-forest">#{index + 1}</span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {row.tags.map((tag) => (
                        <span key={tag} className="rounded-md bg-soft px-2 py-1 text-xs text-muted">{tag}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3 text-center text-xs text-muted">
                <div className="rounded-md bg-soft p-3">Besoin qualifié</div>
                <div className="rounded-md bg-soft p-3">Budget cadré</div>
                <div className="rounded-md bg-soft p-3">Risques listés</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <h2>Pourquoi Entreprise.ai</h2>
          <p>
            Le problème n'est pas de trouver une liste de prestataires. Le vrai sujet est de savoir quel type d'acteur choisir, avec quel budget, quel niveau technique et quelles questions poser avant de signer.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Besoin clarifié", "Transformer une intention IA floue en périmètre, priorité, budget et niveau de risque."],
            ["Prestataire adapté", "Choisir entre agence, consultant, intégrateur, formateur ou cabinet data selon le projet."],
            ["Décision plus sûre", "Comparer les options avec critères, points de vigilance et questions à poser en rendez-vous."]
          ].map(([title, text]) => (
            <div key={title} className="rounded-md border border-line bg-white p-6">
              <CheckCircle2 className="h-6 w-6 text-forest" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-soft">
        <div className="section">
          <div className="section-heading">
            <h2>Comment ça marche</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-5">
            {processSteps.map(([title, StepIcon], index) => {
              return (
                <div key={String(title)} className="rounded-md border border-line bg-white p-5">
                  <StepIcon className="h-5 w-5 text-forest" aria-hidden="true" />
                  <p className="mt-4 text-xs font-semibold uppercase text-muted">Étape {index + 1}</p>
                  <h3 className="mt-2 text-base font-semibold text-ink">{title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <HomeListSection title="Types de projets IA" items={projectTypes} />
      <HomeListSection title="Pour quelles entreprises ?" items={companyTargets} muted />
      <HomeListSection title="Types de prestataires mobilisables" items={providerCategories} />

      <section className="section">
        <div className="section-heading">
          <h2>Secteurs</h2>
          <p>Chaque page sectorielle aide à comprendre les cas d'usage, budgets, risques et critères de choix avant de déposer un projet.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {sectors.slice(0, 10).map((sector) => (
            <Link key={sector.slug} href={`/secteurs/${sector.slug}`} className="rounded-md border border-line bg-white p-4 text-sm font-semibold text-ink transition hover:border-forest">
              {sector.title.replace("IA pour ", "")}
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-soft">
        <div className="section">
          <div className="section-heading">
            <h2>Guides</h2>
            <p>Des contenus conçus pour aider les dirigeants et directions métier à cadrer un achat IA avant de solliciter des prestataires.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {guides.slice(0, 5).map((guide) => (
              <Link key={guide.slug} href={`/guides/${guide.slug}`} className="rounded-md border border-line bg-white p-5 transition hover:border-forest">
                <h3 className="text-lg font-semibold text-ink">{guide.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{guide.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <h2>Cas d'usage à cadrer</h2>
          <p>Un bon matching commence par le bon diagnostic : type de projet, maturité interne, données disponibles, outils à intégrer et budget réaliste.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {useCases.slice(0, 6).map((useCase) => (
            <Link key={useCase.slug} href={`/cas-usages/${useCase.slug}`} className="rounded-md border border-line bg-white p-5 transition hover:border-forest">
              <h3 className="text-lg font-semibold text-ink">{useCase.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{useCase.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <ProjectCTA />
    </>
  );
}

function HomeListSection({ title, items, muted = false }: { title: string; items: string[]; muted?: boolean }) {
  return (
    <section className={muted ? "border-y border-line bg-soft" : ""}>
      <div className="section">
        <div className="section-heading">
          <h2>{title}</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((item) => (
            <div key={item} className="rounded-md border border-line bg-white p-4 text-sm font-semibold text-ink">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
