import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Politique de confidentialité - Placeholder",
  description: "Politique de confidentialité placeholder pour la version locale Entreprise.ai V2.",
  path: "/confidentialite"
});

export default function PrivacyPage() {
  return (
    <div className="page-shell">
      <Breadcrumbs items={[{ label: "Confidentialité", href: "/confidentialite" }]} />
      <article className="content-prose mt-8 max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-normal text-ink md:text-5xl">Politique de confidentialité</h1>
        <p>Placeholder pour le MVP local. Les formulaires de cette version ne sont connectés à aucun service externe.</p>
        <h2>Données collectées dans le MVP local</h2>
        <p>Les formulaires peuvent écrire des soumissions de développement dans un dossier local non versionné.</p>
        <h2>Version finale</h2>
        <p>Une politique complète devra préciser finalités, base légale, durée de conservation, sous-traitants, droits et contact.</p>
      </article>
    </div>
  );
}
