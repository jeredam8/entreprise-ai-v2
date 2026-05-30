import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProjectCTA } from "@/components/ProjectCTA";
import type { Provider } from "@/data/types";

type ProviderTypePageProps = {
  type: Provider["type"];
  title: string;
  description: string;
  path: string;
};

export function ProviderTypePage({ type, title, description, path }: ProviderTypePageProps) {
  return (
    <>
      <div className="page-shell">
        <Breadcrumbs items={[{ label: title, href: path }]} />
        <div className="mt-8 max-w-4xl">
          <h1 className="text-4xl font-semibold tracking-normal text-ink md:text-5xl">{title}</h1>
          <p className="mt-5 text-lg leading-8 text-muted">{description}</p>
          <p className="mt-4 text-sm leading-6 text-muted">
            Cette page sert à comprendre quand ce type de prestataire est pertinent. La shortlist finale dépend du projet, du budget, des outils à connecter et des contraintes de livraison.
          </p>
        </div>
      </div>
      <section className="section">
        <div className="grid gap-5 md:grid-cols-3">
          <Card title="Bon fit" text={`À envisager quand le besoin correspond vraiment à un profil ${type.toLowerCase()}, et pas seulement à une recherche générique de prestataire IA.`} />
          <Card title="À vérifier" text="Méthode de cadrage, capacité de livraison, références, maintenance, sécurité, périmètre exact et interlocuteur qui réalisera la mission." />
          <Card title="Rôle d'Entreprise.ai" text="Traduire le projet en critères de choix, puis préparer une shortlist courte de prestataires à comparer." />
        </div>
      </section>
      <ProjectCTA />
    </>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-md border border-line bg-white p-6">
      <h2 className="text-xl font-semibold text-ink">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
    </div>
  );
}
