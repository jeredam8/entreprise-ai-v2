import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";
import { ProjectCTA } from "@/components/ProjectCTA";
import { providers } from "@/data/providers";
import type { FaqItem } from "@/data/types";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Méthodologie : comment nous référençons les prestataires IA",
  description:
    "Sources, critères de vérification, motifs d'exclusion, ordre d'affichage et frontière commerciale. " +
    "La méthode complète de constitution de l'annuaire Entreprise.ai.",
  path: "/methodologie"
});

const etapes = [
  {
    titre: "1. Découverte",
    texte:
      "Les prestataires sont identifiés par une veille sur les recherches réelles des entreprises " +
      "(« agence IA », « consultant IA », « agence automatisation », déclinées par ville et par " +
      "spécialité). Les annuaires concurrents peuvent servir de piste de lecture, jamais de source " +
      "de données : nous retournons systématiquement vérifier à la source."
  },
  {
    titre: "2. Vérification de l'identité",
    texte:
      "Le numéro SIREN est relevé sur le site du prestataire lui-même, puis confronté au répertoire " +
      "Sirene via l'API publique de l'État. Une page de mentions légales cite souvent plusieurs " +
      "sociétés (hébergeur, prestataire technique) : chaque numéro trouvé est rapproché du nom de " +
      "la structure, et rejeté s'il ne correspond pas."
  },
  {
    titre: "3. Contrôle de cohérence",
    texte:
      "L'activité déclarée doit être compatible avec une prestation numérique, de conseil ou de " +
      "formation. Un homonyme parfait dont le métier ne correspond pas est écarté : nous préférons " +
      "une fiche en moins à une donnée fausse."
  },
  {
    titre: "4. Relevé du positionnement",
    texte:
      "Spécialités, secteurs adressés et technologies sont relevés sur le site du prestataire. " +
      "Les descriptions sont reformulées, jamais recopiées. Une information absente reste absente : " +
      "aucun champ n'est estimé ni complété au jugé."
  },
  {
    titre: "5. Revue éditoriale",
    texte:
      "Une relecture humaine tranche les cas limites : écoles, agences généralistes sans offre IA " +
      "réelle, sociétés de services où l'IA n'est qu'une ligne de catalogue. Chaque exclusion est " +
      "motivée et conservée."
  }
];

const exclusions = [
  ["Identité non établie", "Aucun SIREN vérifiable rattaché de façon certaine à la structure."],
  ["Activité incompatible", "L'activité déclarée n'a pas de rapport avec une prestation numérique."],
  ["Pas d'offre IA réelle", "Le site ne présente pas d'offre IA identifiable, seulement une mention."],
  ["Nature différente", "École, média, comparateur, organisme public : ce ne sont pas des prestataires."],
  ["Droit d'opposition", "Structure non diffusible au répertoire Sirene : ses données ne sont pas publiées."]
];

const faqs: FaqItem[] = [
  {
    question: "Un prestataire peut-il payer pour être référencé ou mieux placé ?",
    answer:
      "Non. Le référencement est gratuit et aucune position n'est vendue. Si une offre payante " +
      "existe un jour, elle sera signalée explicitement sur chaque emplacement concerné et ne " +
      "modifiera jamais l'ordre éditorial."
  },
  {
    question: "D'où viennent les données affichées sur les fiches ?",
    answer:
      "Les données légales proviennent du répertoire Sirene, diffusé en open data par l'État. " +
      "Le positionnement est relevé sur le site public du prestataire. Chaque fiche indique sa " +
      "date de dernier contrôle et renvoie vers la source officielle."
  },
  {
    question: "Ma structure est référencée sans que je l'aie demandé. Que faire ?",
    answer:
      "Les fiches sont constituées à partir d'informations publiques, comme le fait tout annuaire " +
      "professionnel. Vous pouvez demander une correction ou le retrait de votre fiche à tout " +
      "moment via la page contact : nous traitons ces demandes sans discussion."
  },
  {
    question: "Comment les prestataires sont-ils classés ?",
    answer:
      "Par ordre alphabétique. Nous n'attribuons pas de note et ne publions pas de classement " +
      "de performance : nous n'avons pas encore la matière pour le faire honnêtement."
  },
  {
    question: "Tous les prestataires IA français sont-ils référencés ?",
    answer:
      `Non. L'annuaire en compte ${providers.length} à ce jour et s'enrichit progressivement. ` +
      "Une absence ne signifie rien sur la qualité d'un prestataire."
  }
];

export default function MethodologiePage() {
  return (
    <>
      <div className="page-shell">
        <Breadcrumbs items={[{ label: "Méthodologie", href: "/methodologie" }]} />
        <div className="mt-8 max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-normal text-ink md:text-5xl">
            Comment nous référençons les prestataires IA
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted">
            Un annuaire ne vaut que par ce qu'il a vérifié. Cette page décrit exactement d'où
            viennent les données, ce que nous contrôlons, ce que nous refusons de publier et où
            passe la frontière commerciale.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="section-heading">
          <h2>Les cinq étapes du référencement</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {etapes.map((etape) => (
            <article key={etape.titre} className="rounded-md border border-line bg-white p-6">
              <h3 className="text-lg font-semibold text-ink">{etape.titre}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{etape.texte}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-soft">
        <div className="section">
          <div className="section-heading">
            <h2>Ce que nous refusons de publier</h2>
            <p>Chaque exclusion est motivée. Une fiche en moins vaut mieux qu'une donnée fausse.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {exclusions.map(([titre, texte]) => (
              <div key={titre} className="rounded-md border border-line bg-white p-6">
                <h3 className="text-base font-semibold text-ink">{titre}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <h2>Indépendance et frontière commerciale</h2>
        </div>
        <div className="max-w-3xl space-y-4 text-base leading-7 text-muted">
          <p>
            Le référencement est <strong className="text-ink">gratuit et le restera</strong>. Aucun
            prestataire ne peut acheter sa présence, sa position ou une recommandation.
          </p>
          <p>
            Entreprise.ai pourra à l'avenir être rémunéré sur la mise en relation ou proposer des
            emplacements identifiés. Le jour où ce sera le cas, ces emplacements seront signalés
            comme tels sur la page où ils apparaissent, et l'ordre éditorial restera indépendant.
            Les critères de classement seront publiés ici, en clair.
          </p>
          <p>
            Les données déclaratives (ce que le prestataire dit de lui) sont distinguées des données
            vérifiées (ce que nous avons contrôlé à la source). Les fiches indiquent l'origine de
            chaque bloc et sa date de contrôle.
          </p>
          <p>
            Une erreur, une donnée périmée, une demande de retrait ?{" "}
            <Link href="/contact" className="font-semibold text-forest">
              Écrivez-nous
            </Link>{" "}
            — c'est traité sans contrepartie.
          </p>
        </div>
      </section>

      <FAQ items={faqs} />
      <ProjectCTA />
    </>
  );
}
