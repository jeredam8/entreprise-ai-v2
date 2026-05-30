import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Politique de confidentialité - Entreprise.ai",
  description: "Politique de confidentialité d'Entreprise.ai pour les formulaires projet et prestataire.",
  path: "/confidentialite"
});

export default function PrivacyPage() {
  return (
    <div className="page-shell">
      <Breadcrumbs items={[{ label: "Confidentialité", href: "/confidentialite" }]} />
      <article className="content-prose mt-8 max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-normal text-ink md:text-5xl">Politique de confidentialité</h1>
        <p>Dernière mise à jour : 30 mai 2026.</p>
        <h2>Données collectées</h2>
        <p>Entreprise.ai collecte les informations transmises volontairement via les formulaires : identité professionnelle, coordonnées, entreprise, description du projet IA, budget indicatif, outils existants et informations de positionnement prestataire.</p>
        <h2>Finalités</h2>
        <p>Ces données servent à répondre à la demande, qualifier un projet IA, préparer une shortlist de prestataires ou étudier une demande de référencement prestataire.</p>
        <h2>Sous-traitants techniques</h2>
        <p>Les formulaires peuvent transiter par Formspree. Le site est hébergé par Vercel. Les données ne sont pas vendues à des tiers.</p>
        <h2>Durée de conservation</h2>
        <p>Les données de contact et de qualification sont conservées au maximum 3 ans après le dernier échange, sauf demande de suppression ou obligation légale contraire.</p>
        <h2>Droits</h2>
        <p>Vous pouvez demander l'accès, la rectification ou la suppression de vos données en écrivant à contact@entreprise.ai.</p>
      </article>
    </div>
  );
}
