import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact - Entreprise.ai",
  description: "Contacter Entreprise.ai pour déposer un projet IA ou proposer un profil de prestataire IA.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <div className="page-shell">
      <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />
      <div className="mt-8 max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-normal text-ink md:text-5xl">Contact</h1>
        <p className="mt-5 text-lg leading-8 text-muted">
          Pour qualifier un projet IA, le plus efficace est de passer par le formulaire de dépôt de projet. Pour une demande générale, utilisez l'adresse ci-dessous.
        </p>
        <div className="mt-8 rounded-md border border-line bg-soft p-6 text-sm leading-6 text-muted">
          Contact : contact@entreprise.ai
        </div>
      </div>
    </div>
  );
}
