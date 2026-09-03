import Link from "next/link";
import { ArrowRight, CheckCircle2, ClipboardList, Search, ShieldCheck, Users, type LucideIcon } from "lucide-react";
import { ProjectCTA } from "@/components/ProjectCTA";
import { guides } from "@/data/guides";
import { providers } from "@/data/providers";
import { sectors } from "@/data/sectors";
import { useCases } from "@/data/useCases";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Annuaire des prestataires IA en France : agences et consultants vérifiés",
  description:
    "Comparez les agences, consultants, intégrateurs et formateurs IA français. Identité légale vérifiée, spécialités et budgets, filtrables par ville et par besoin.",
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


export default function HomePage() {
  const verifies = providers.filter((provider) => provider.legal).length;
  const villes = new Set(providers.map((provider) => provider.city)).size;
  const specialites = new Set(providers.flatMap((provider) => provider.specialties)).size;
  const derniereVerif = providers.map((p) => p.verifiedAt).filter(Boolean).sort().pop();
  const derniers = [...providers]
    .sort((a, b) => (b.verifiedAt ?? "").localeCompare(a.verifiedAt ?? "") || a.name.localeCompare(b.name))
    .slice(0, 3);

  return (
    <>
      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1fr_0.86fr] lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <h1 className="max-w-4xl text-4xl font-semibold tracking-normal text-ink md:text-6xl">
              L'annuaire des prestataires IA en France
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
              {providers.length} agences, consultants, intégrateurs et formateurs spécialisés en
              intelligence artificielle. Chaque fiche est rattachée à une entreprise réelle,
              vérifiée au répertoire Sirene.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/prestataires-ia" className="btn-primary">
                Explorer l'annuaire
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/deposer-un-projet-ia" className="btn-secondary">
                Décrire mon projet
              </Link>
            </div>
            <p className="mt-5 text-sm font-medium text-muted">
              Gratuit et indépendant. Aucune position n'est vendue.{" "}
              <Link href="/barometre-prestataires-ia" className="font-semibold text-forest">
                Baromètre 2026 des prestataires IA
              </Link>
            </p>
          </div>

          <div className="rounded-md border border-line bg-soft p-5 shadow-panel">
            <div className="rounded-md bg-white p-5">
              <div className="flex items-center justify-between border-b border-line pb-4">
                <div>
                  <p className="text-sm font-semibold text-ink">L'annuaire en chiffres</p>
                  <p className="mt-1 text-xs text-muted">
                    Mis à jour le{" "}
                    {derniereVerif
                      ? new Date(derniereVerif).toLocaleDateString("fr-FR")
                      : "—"}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-md bg-forest/10 px-3 py-1 text-xs font-semibold text-forest">
                  <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                  Sirene
                </span>
              </div>
              <dl className="mt-5 grid grid-cols-2 gap-4">
                {[
                  ["Prestataires", String(providers.length)],
                  ["Identités vérifiées", String(verifies)],
                  ["Villes couvertes", String(villes)],
                  ["Spécialités", String(specialites)]
                ].map(([label, valeur]) => (
                  <div key={label} className="rounded-md bg-soft p-4">
                    <dt className="text-xs text-muted">{label}</dt>
                    <dd className="mt-1 text-2xl font-semibold text-ink">{valeur}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-5 space-y-3">
                {derniers.map((provider) => (
                  <Link
                    key={provider.slug}
                    href={`/prestataires-ia/${provider.slug}`}
                    className="flex items-center justify-between gap-4 rounded-md border border-line p-3 transition hover:border-forest/40"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-ink">{provider.name}</p>
                      <p className="mt-0.5 truncate text-xs text-muted">
                        {provider.type} · {provider.city}
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-forest" aria-hidden="true" />
                  </Link>
                ))}
              </div>
              <Link
                href="/prestataires-ia"
                className="mt-4 block text-center text-sm font-semibold text-forest"
              >
                Voir les {providers.length} prestataires
              </Link>
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
