import Link from "next/link";
import {
  ArrowRight,
  Workflow,
  MessagesSquare,
  GraduationCap,
  Compass,
} from "lucide-react";
import { ProviderCard } from "@/components/ProviderCard";
import { ProjectCTA } from "@/components/ProjectCTA";
import { FAQ } from "@/components/FAQ";
import { providers } from "@/data/providers";
import { guides } from "@/data/guides";
import { buildMetadata } from "@/lib/seo";
export const metadata = buildMetadata({
  title: "Trouvez votre prestataire IA : agences, consultants et formateurs",
  description:
    "Comparez les prestataires IA en France. Explorez leurs offres ou décrivez votre projet pour être orienté. Référencement gratuit pour les prestataires.",
  path: "/",
});
export default function HomePage() {
  const recent = [...providers]
    .sort(
      (a, b) =>
        (b.verifiedAt || "").localeCompare(a.verifiedAt || "") ||
        a.name.localeCompare(b.name),
    )
    .slice(0, 3);
  return (
    <>
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-12 lg:grid-cols-[1.5fr_0.8fr] lg:gap-16 lg:px-8 lg:py-20">
        <div>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Trouvez le bon prestataire IA pour{" "}
            <span className="text-forest">votre entreprise.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Comparez des agences, consultants et formateurs en France. Besoin
            d’aide pour choisir ? Décrivez votre projet.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/prestataires-ia" className="btn-primary">
              Explorer l’annuaire <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link href="/deposer-un-projet-ia" className="btn-secondary">
              Parler de mon projet
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center divide-y divide-line border-t border-line lg:border-l lg:border-t-0 lg:pl-8">
          <Link href="/deposer-un-projet-ia" className="group py-6">
            <h2 className="flex items-center justify-between gap-3 text-xl font-semibold">
              Vous avez un projet ? <ArrowRight size={20} aria-hidden="true" />
            </h2>
            <p className="mt-3 leading-7 text-muted">
              Expliquez votre besoin. Nous vous aidons à identifier les profils
              adaptés, sans engagement.
            </p>
          </Link>
          <Link href="/referencer-un-prestataire-ia" className="group py-6">
            <h2 className="flex items-center justify-between gap-3 text-xl font-semibold">
              Vous êtes prestataire ?{" "}
              <ArrowRight size={20} aria-hidden="true" />
            </h2>
            <p className="mt-3 leading-7 text-muted">
              Référencez gratuitement votre activité ou mettez à jour votre
              fiche.
            </p>
          </Link>
        </div>
      </section>
      <section className="section border-t border-line">
        <div className="section-heading">
          <h2>Quel est votre besoin ?</h2>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            [
              "Automatisation",
              "Réduire les tâches répétitives.",
              "Automatisation",
              Workflow,
            ],
            [
              "Assistants IA",
              "Aider vos équipes et vos clients.",
              "Agents IA",
              MessagesSquare,
            ],
            [
              "Formation",
              "Faire progresser vos équipes.",
              "Formation IA",
              GraduationCap,
            ],
            [
              "Cadrage",
              "Choisir par où commencer.",
              "Audit et stratégie IA",
              Compass,
            ],
          ].map(([title, text, specialty, Icon]) => {
            const I = Icon as typeof Workflow;
            return (
              <Link
                key={String(title)}
                href={`/prestataires-ia?specialty=${encodeURIComponent(String(specialty))}`}
                className="group py-2"
              >
                <I className="mb-4 h-8 w-8 text-forest" aria-hidden="true" />
                <h3 className="text-lg font-semibold group-hover:underline">
                  {String(title)}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {String(text)}
                </p>
              </Link>
            );
          })}
        </div>
      </section>
      <section className="section border-t border-line">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">
              Des prestataires à découvrir
            </h2>
            <p className="mt-3 text-muted">
              {providers.length} fiches documentées. Voici trois profils
              récemment actualisés.
            </p>
          </div>
          <Link
            href="/prestataires-ia"
            className="font-semibold text-forest underline"
          >
            Voir tout l’annuaire
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {recent.map((p) => (
            <ProviderCard key={p.slug} provider={p} />
          ))}
        </div>
        <p className="mt-5 text-sm text-muted">
          L’identité légale est vérifiée lorsque les données sont publiques.
          Cela ne constitue pas une certification des prestations.{" "}
          <Link className="underline" href="/methodologie">
            Notre méthode
          </Link>
          .
        </p>
      </section>
      <section className="bg-soft">
        <div className="section">
          <div className="section-heading">
            <h2>Avancez en trois étapes</h2>
          </div>
          <ol className="grid gap-8 md:grid-cols-3">
            {[
              [
                "Décrivez votre besoin",
                "Le problème à résoudre, votre contexte et votre échéance suffisent pour commencer.",
              ],
              [
                "Échangeons sur votre projet",
                "Nous clarifions votre demande et recherchons les profils qui correspondent.",
              ],
              [
                "Choisissez librement",
                "Vous échangez avec les prestataires et comparez leurs propositions. Vous gardez la décision.",
              ],
            ].map(([title, text], i) => (
              <li key={title}>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest font-semibold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-muted">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="section">
        <div className="grid gap-6 border-b border-line pb-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold">
              Faites connaître votre activité IA.
            </h2>
            <p className="mt-4 leading-7 text-muted">
              Agences, indépendants, intégrateurs et formateurs : présentez ce
              que vous faites et les entreprises que vous accompagnez. Chaque
              demande est relue avant publication.
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-4">
            <Link href="/referencer-un-prestataire-ia" className="btn-primary">
              Référencer gratuitement mon activité
            </Link>
            <Link
              href="/referencer-un-prestataire-ia?mode=correction"
              className="font-semibold text-forest underline"
            >
              Mettre à jour ma fiche
            </Link>
          </div>
        </div>
      </section>
      <section className="section pt-0">
        <div className="section-heading">
          <h2>Préparez votre projet</h2>
          <p>
            Des repères pour cadrer un budget, choisir un prestataire et
            comparer les devis.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {guides
            .filter((g) => /cout|choisir|reussir/i.test(g.slug))
            .slice(0, 3)
            .map((g) => (
              <Link
                key={g.slug}
                href={`/guides/${g.slug}`}
                className="border-t-2 border-forest py-5"
              >
                <h3 className="text-xl font-semibold">{g.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{g.summary}</p>
                <span className="mt-4 block font-semibold text-forest">
                  Lire le guide →
                </span>
              </Link>
            ))}
        </div>
      </section>
      <FAQ
        items={[
          {
            question: "Est-ce gratuit ?",
            answer:
              "La consultation de l’annuaire, le dépôt d’une demande et le référencement de base sont gratuits. Les prestations réalisées par les professionnels font l’objet de leurs propres devis.",
          },
          {
            question: "Qui lit ma demande ?",
            answer:
              "Jérémy Tripoli, qui anime Entreprise.ai, examine les demandes et prend contact pour clarifier le besoin. Les demandes ne sont pas diffusées automatiquement à tout l’annuaire.",
          },
          {
            question: "Puis-je contacter directement un prestataire ?",
            answer:
              "Oui. Chaque fiche dispose d’un lien vers le site du prestataire lorsqu’il est renseigné. Vous pouvez aussi nous demander de vous aider à comparer les options.",
          },
        ]}
      />
      <ProjectCTA />
    </>
  );
}
