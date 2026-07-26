import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProviderReferenceForm } from "@/components/ProjectForm";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Référencer un prestataire IA - Entreprise.ai",
  description:
    "Demande d'étude de profil pour agences IA, consultants, intégrateurs, cabinets data et formateurs IA accompagnant des PME et ETI.",
  path: "/referencer-un-prestataire-ia"
});

export default function ReferenceProviderPage() {
  return (
    <div className="page-shell">
      <Breadcrumbs items={[{ label: "Référencer un prestataire IA", href: "/referencer-un-prestataire-ia" }]} />
      <div className="mt-8 grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
        <div>
          <h1 className="text-4xl font-semibold tracking-normal text-ink md:text-5xl">
            Référencer un prestataire IA
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted">
            Entreprise.ai référence les agences, consultants, intégrateurs et formateurs IA
            français. Le référencement est gratuit et sans contrepartie : aucune position ni
            recommandation n'est vendue.
          </p>
          <div className="mt-6 space-y-3 rounded-md border border-line bg-soft p-5 text-sm leading-6 text-muted">
            <p>
              <strong className="text-ink">Votre fiche existe peut-être déjà.</strong> Nous
              constituons l'annuaire à partir de sources publiques.{" "}
              <Link href="/prestataires-ia" className="font-semibold text-forest">
                Cherchez votre structure
              </Link>{" "}
              : si elle y est, ce formulaire sert à la corriger et à la compléter.
            </p>
            <p>
              Chaque fiche est contrôlée avant publication (identité légale, cohérence de
              l'activité, offre IA réelle) — voir la{" "}
              <Link href="/methodologie" className="font-semibold text-forest">
                méthodologie
              </Link>
              .
            </p>
          </div>
          <div className="mt-6 space-y-3">
            {[
              "Décrivez précisément vos spécialités IA, pas seulement « intelligence artificielle ».",
              "Précisez vos budgets minimums, secteurs forts et limites d'intervention.",
              "Les projets qui vous seront transmis seront qualifiés en amont, pas diffusés en masse."
            ].map((item) => (
              <div key={item} className="flex gap-3 text-sm leading-6 text-muted">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-forest" aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </div>
        <ProviderReferenceForm />
      </div>
    </div>
  );
}
