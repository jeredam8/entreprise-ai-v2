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
          <h1 className="text-4xl font-semibold tracking-normal text-ink md:text-5xl">Référencer mon agence IA</h1>
          <p className="mt-5 text-lg leading-8 text-muted">
            Entreprise.ai référence des prestataires IA capables d'accompagner des PME et ETI sur des projets concrets : automatisation, agents IA, RAG, formation, data et intégration métier.
          </p>
          <div className="mt-6 space-y-3 rounded-md border border-line bg-soft p-5 text-sm leading-6 text-muted">
            <p>Modèle initial prévu : référencement gratuit au lancement, sélection manuelle, opportunités qualifiées et commission au succès côté prestataire si une mission est signée.</p>
            <p>Les futures mises en avant sponsorisées devront être clairement identifiées et séparées du classement éditorial.</p>
          </div>
        </div>
        <ProviderReferenceForm />
      </div>
    </div>
  );
}
