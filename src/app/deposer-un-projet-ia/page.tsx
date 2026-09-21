import Link from "next/link";
import { ProjectForm } from "@/components/ProjectForm";
import { buildMetadata } from "@/lib/seo";
export const metadata = buildMetadata({
  title: "Parlons de votre projet IA",
  description:
    "Expliquez le problème que vous souhaitez résoudre. Nous vous recontactons pour clarifier votre besoin et identifier les profils adaptés.",
  path: "/deposer-un-projet-ia",
});
export default function Page() {
  return (
    <div className="page-shell">
      <div className="grid items-start gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h1 className="text-3xl font-semibold leading-tight md:text-4xl">
            Parlons de votre projet IA
          </h1>
          <p className="mt-4 text-lg leading-7 text-muted">
            Expliquez le problème que vous souhaitez résoudre. Nous vous
            recontactons pour clarifier votre besoin et identifier les profils
            adaptés.
          </p>
          <p className="mt-5 text-sm leading-6 text-muted">
            Le dépôt est gratuit et sans engagement. Votre demande est examinée
            personnellement, sans diffusion automatique aux prestataires.
          </p>
          <Link
            href="/prestataires-ia"
            className="mt-4 inline-block py-2 font-semibold text-forest underline"
          >
            Consulter l’annuaire
          </Link>
        </div>
        <ProjectForm />
      </div>
    </div>
  );
}
