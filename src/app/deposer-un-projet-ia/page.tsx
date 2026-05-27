import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProjectForm } from "@/components/ProjectForm";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Déposer un projet IA - Shortlist prestataires IA",
  description:
    "Formulaire B2B pour décrire un projet IA, qualifier le besoin et préparer une shortlist de prestataires adaptés.",
  path: "/deposer-un-projet-ia"
});

export default function SubmitProjectPage() {
  return (
    <div className="page-shell">
      <Breadcrumbs items={[{ label: "Déposer un projet IA", href: "/deposer-un-projet-ia" }]} />
      <div className="mt-8 grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
        <div>
          <h1 className="text-4xl font-semibold tracking-normal text-ink md:text-5xl">Déposer un projet IA</h1>
          <p className="mt-5 text-lg leading-8 text-muted">
            Décrivez votre contexte, vos outils, votre budget et vos contraintes. Ce formulaire est filtrant pour préparer une qualification sérieuse du besoin.
          </p>
          <div className="mt-6 rounded-md border border-line bg-soft p-5 text-sm leading-6 text-muted">
            Cette version locale enregistre les soumissions dans un fichier de développement si l'API locale est disponible. Aucun email, CRM ou service externe n'est connecté.
          </div>
        </div>
        <ProjectForm />
      </div>
    </div>
  );
}
