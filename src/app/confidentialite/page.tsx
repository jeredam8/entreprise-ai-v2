import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Politique de confidentialité - Entreprise.ai",
  description:
    "Politique de confidentialité d'Entreprise.ai pour les formulaires projet et prestataire.",
  path: "/confidentialite",
});

export default function PrivacyPage() {
  return (
    <div className="page-shell">
      <Breadcrumbs
        items={[{ label: "Confidentialité", href: "/confidentialite" }]}
      />
      <article className="content-prose mt-8 max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-normal text-ink md:text-5xl">
          Politique de confidentialité
        </h1>
        <p>Dernière mise à jour : 21 septembre 2026.</p>
        <h2>Données collectées</h2>
        <p>
          Entreprise.ai collecte les informations transmises volontairement via
          les formulaires : identité professionnelle, coordonnées, entreprise,
          description du projet IA, budget indicatif, outils existants et
          informations de positionnement prestataire.
        </p>
        <h2>Finalités</h2>
        <p>
          Ces données servent à répondre à la demande, qualifier un projet IA,
          préparer une sélection de prestataires ou étudier une demande de
          référencement prestataire.
        </p>
        <h2>Sous-traitants techniques</h2>
        <p>
          Les demandes sont enregistrées dans Supabase. Resend transmet une
          notification à l’éditeur, avec les informations nécessaires au
          traitement de la demande. Le site est hébergé par Vercel. Vercel Web
          Analytics mesure les consultations. Des compteurs journaliers des
          étapes des parcours sont conservés dans Supabase sans identifiant de
          visiteur ; les noms, emails, textes des messages et termes recherchés
          ne sont pas inclus dans les événements de conversion. Les données ne
          sont pas vendues à des tiers.
        </p>
        <h2>Durée de conservation</h2>
        <p>
          Les données de contact et de qualification sont conservées au maximum
          3 ans après le dernier échange, sauf demande de suppression ou
          obligation légale contraire.
        </p>
        <h2>Droits</h2>
        <p>
          Vous pouvez demander l'accès, la rectification ou la suppression de
          vos données via le formulaire de contact, en précisant la demande
          concernée.
        </p>
      </article>
    </div>
  );
}
