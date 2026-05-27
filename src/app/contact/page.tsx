import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact - Entreprise.ai",
  description: "Contact placeholder pour la version locale Entreprise.ai V2.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <div className="page-shell">
      <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />
      <div className="mt-8 max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-normal text-ink md:text-5xl">Contact</h1>
        <p className="mt-5 text-lg leading-8 text-muted">
          Page de contact placeholder pour le MVP local. La version finale pourra connecter un email transactionnel ou un CRM après validation.
        </p>
        <div className="mt-8 rounded-md border border-line bg-soft p-6 text-sm leading-6 text-muted">
          Contact placeholder : contact@entreprise.ai
        </div>
      </div>
    </div>
  );
}
