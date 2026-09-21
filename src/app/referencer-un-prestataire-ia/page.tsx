import Link from "next/link";
import { ProviderReferenceForm } from "@/components/ProjectForm";
import { buildMetadata } from "@/lib/seo";
export const metadata = buildMetadata({
  title: "Référencez gratuitement votre activité IA",
  description:
    "Vous êtes agence, consultant, intégrateur ou formateur ? Présentez votre activité ou demandez une correction de votre fiche.",
  path: "/referencer-un-prestataire-ia",
});
export default function Page() {
  return (
    <div className="page-shell">
      <div className="grid items-start gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h1 className="text-3xl font-semibold leading-tight md:text-4xl">
            Référencez gratuitement votre activité IA
          </h1>
          <p className="mt-4 text-lg leading-7 text-muted">
            Vous êtes agence, consultant, intégrateur ou formateur ? Présentez
            votre activité ou demandez une correction de votre fiche.
          </p>
          <p className="mt-5 text-sm leading-6 text-muted">
            Nous relisons chaque demande avant publication. Le référencement de
            base est gratuit. Aucune position dans l’annuaire n’est vendue.
          </p>
          <Link
            href="/prestataires-ia"
            className="mt-4 inline-block py-2 font-semibold text-forest underline"
          >
            Consulter l’annuaire
          </Link>
        </div>
        <ProviderReferenceForm />
      </div>
    </div>
  );
}
