import { CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProjectForm } from "@/components/ProjectForm";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Déposer un projet IA - Shortlist prestataires IA",
  description:
    "Formulaire B2B pour décrire un projet IA, qualifier le besoin et préparer une shortlist de prestataires adaptés.",
  path: "/deposer-un-projet-ia"
});

export default function SubmitProjectPage() {
  return (
    <div className="page-shell">
      <Breadcrumbs items={[{ label: "Déposer un projet IA", href: "/deposer-un-projet-ia" }]} />
      <div className="mt-8 grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
        <div>
          <h1 className="text-4xl font-semibold tracking-normal text-ink md:text-5xl">
            Décrivez votre projet IA, recevez une shortlist qualifiée
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted">
            Le formulaire sert à comprendre votre besoin, votre budget, vos outils et vos contraintes. L'objectif est de préparer une shortlist manuelle de 2 à 3 prestataires adaptés.
          </p>
          <div className="mt-6 rounded-md border border-line bg-soft p-5">
            <p className="text-sm font-semibold text-ink">Bêta de lancement</p>
            <p className="mt-2 text-sm leading-6 text-muted">
              Gratuit côté entreprise au lancement. La beta priorise les PME et ETI avec un projet concret, un décideur identifié et une enveloppe réaliste, souvent à partir de 5 000 €.
            </p>
            <p className="mt-2 text-sm leading-6 text-muted">
              Réponse cible : qualification et prochaines étapes sous 72 h ouvrées lorsque le besoin est assez précis. Si le sujet est trop tôt, Entreprise.ai pourra recommander un cadrage avant shortlist.
            </p>
          </div>
          <div className="mt-6 space-y-3">
            {[
              "Vous n'avez pas besoin de savoir si votre projet relève d'une agence, d'un consultant ou d'un intégrateur.",
              "La shortlist dépendra du besoin réel : secteur, données, budget, outils à connecter et niveau de risque.",
              "Si le projet est trop tôt ou trop flou, Entreprise.ai pourra recommander un cadrage avant mise en relation."
            ].map((item) => (
              <div key={item} className="flex gap-3 text-sm leading-6 text-muted">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-forest" aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </div>
        <ProjectForm />
      </div>
    </div>
  );
}
