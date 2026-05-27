import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Mentions légales - Placeholder",
  description: "Mentions légales placeholder pour le MVP local Entreprise.ai V2.",
  path: "/mentions-legales"
});

export default function LegalPage() {
  return (
    <div className="page-shell">
      <Breadcrumbs items={[{ label: "Mentions légales", href: "/mentions-legales" }]} />
      <article className="content-prose mt-8 max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-normal text-ink md:text-5xl">Mentions légales</h1>
        <p>Placeholder juridique pour la version locale. Les informations légales réelles devront être validées avant toute mise en ligne.</p>
        <h2>Éditeur</h2>
        <p>Entreprise.ai - informations à compléter.</p>
        <h2>Hébergement</h2>
        <p>À compléter selon l'hébergeur choisi lors d'un futur déploiement.</p>
      </article>
    </div>
  );
}
