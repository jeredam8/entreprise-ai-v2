import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ProjectCTAProps = {
  title?: string;
  description?: string;
};

export function ProjectCTA({
  title = "Vous avez un projet IA mais vous ne savez pas quel prestataire choisir ?",
  description = "Décrivez le besoin, le budget, les outils existants et les contraintes. La version finale d'Entreprise.ai proposera une shortlist de prestataires adaptés."
}: ProjectCTAProps) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
      <div className="rounded-md bg-forest px-6 py-8 text-white md:flex md:items-center md:justify-between md:gap-8 lg:px-10">
        <div>
          <h2 className="text-2xl font-semibold tracking-normal md:text-3xl">{title}</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-teal-50">{description}</p>
        </div>
        <Link href="/deposer-un-projet-ia" className="mt-6 inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-forest transition hover:bg-soft md:mt-0">
          Déposer un projet IA
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
