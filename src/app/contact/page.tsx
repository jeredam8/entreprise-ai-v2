import Link from "next/link";
import { ContactForm } from "@/components/ProjectForm";
import { buildMetadata } from "@/lib/seo";
export const metadata = buildMetadata({
  title: "Contactez Entreprise.ai",
  description:
    "Un projet, une demande de référencement ou une question ? Choisissez le bon contact.",
  path: "/contact",
});
export default function Page() {
  return (
    <div className="page-shell">
      <h1 className="text-4xl font-semibold">
        Comment pouvons-nous vous aider ?
      </h1>
      <div className="my-8 grid gap-5 md:grid-cols-2">
        <Link
          href="/deposer-un-projet-ia"
          className="rounded-md border border-line p-6"
        >
          <h2 className="text-xl font-semibold text-forest">
            Je suis une entreprise
          </h2>
          <p className="mt-3 text-muted">
            Décrire un projet et être aidé dans le choix d’un prestataire →
          </p>
        </Link>
        <Link
          href="/referencer-un-prestataire-ia"
          className="rounded-md border border-line p-6"
        >
          <h2 className="text-xl font-semibold text-forest">
            Je suis prestataire
          </h2>
          <p className="mt-3 text-muted">
            Créer ou mettre à jour ma fiche gratuite →
          </p>
        </Link>
      </div>
      <div className="grid items-start gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold">Une autre question ?</h2>
          <p className="mt-4 leading-7 text-muted">
            Jérémy Tripoli lit vos demandes. Ce formulaire permet d’envoyer une
            question générale, un signalement ou une proposition de partenariat.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
