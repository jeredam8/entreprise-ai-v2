import { CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProviderReferenceForm } from "@/components/ProjectForm";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Référencer mon agence IA - Entreprise.ai",
  description:
    "Demande de référencement pour agences IA, consultants, intégrateurs, cabinets data et formateurs IA accompagnant des PME et ETI.",
  path: "/referencer-mon-agence-ia"
});

export default function ReferenceProviderPage() {
  return (
    <div className="page-shell">
      <Breadcrumbs items={[{ label: "Référencer mon agence IA", href: "/referencer-mon-agence-ia" }]} />
      <div className="mt-8 grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
        <div>
          <h1 className="text-4xl font-semibold tracking-normal text-ink md:text-5xl">
            Recevoir des opportunités IA qualifiées
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted">
            Entreprise.ai construit un réseau de prestataires IA mobilisables lorsqu'un projet PME/ETI correspond à leur expertise, leur budget minimum et leur capacité de livraison.
          </p>
          <div className="mt-6 space-y-3 rounded-md border border-line bg-soft p-5 text-sm leading-6 text-muted">
            <p>Modèle initial : référencement gratuit au lancement, qualification manuelle des projets, opportunités transmises seulement si le fit est sérieux.</p>
            <p>Le produit prioritaire n'est pas un annuaire de volume : c'est une marketplace de projets IA avec matching humain.</p>
          </div>
          <div className="mt-6 space-y-3">
            {[
              "Indiquez les projets que vous voulez vraiment recevoir.",
              "Précisez vos budgets minimums, secteurs forts et limites d'intervention.",
              "Les opportunités doivent être mieux qualifiées qu'un lead froid générique."
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
