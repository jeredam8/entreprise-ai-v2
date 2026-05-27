import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProviderDirectory } from "@/components/ProviderDirectory";
import { ProjectCTA } from "@/components/ProjectCTA";
import type { Provider } from "@/data/types";
import { providers } from "@/data/providers";

type ProviderTypePageProps = {
  type: Provider["type"];
  title: string;
  description: string;
  path: string;
};

export function ProviderTypePage({ type, title, description, path }: ProviderTypePageProps) {
  const filtered = providers.filter((provider) => provider.type === type);

  return (
    <>
      <div className="page-shell">
        <Breadcrumbs items={[{ label: title, href: path }]} />
        <div className="mt-8 max-w-4xl">
          <h1 className="text-4xl font-semibold tracking-normal text-ink md:text-5xl">{title}</h1>
          <p className="mt-5 text-lg leading-8 text-muted">{description}</p>
          <p className="mt-4 text-sm leading-6 text-muted">
            Les prestataires affichés dans cette page sont des exemples MVP, non vérifiés, utilisés pour préparer la structure de l'annuaire.
          </p>
        </div>
      </div>
      <ProviderDirectory providers={filtered} initialType={type} />
      <ProjectCTA />
    </>
  );
}
