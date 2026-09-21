import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
export const metadata = buildMetadata({
  title: "À propos : qui anime Entreprise.ai ?",
  description:
    "Entreprise.ai, un annuaire de prestataires IA animé par Jérémy Tripoli, pour aider les entreprises à choisir.",
  path: "/a-propos",
});
export default function Page() {
  return (
    <div className="page-shell content-prose max-w-4xl">
      <h1 className="text-4xl font-semibold text-ink">
        Un interlocuteur pour avancer dans votre projet IA
      </h1>
      <p>
        Entreprise.ai est animé par Jérémy Tripoli et édité par TAC Digital
        EURL. Son objectif : permettre aux entreprises de comprendre les offres
        de prestations IA et de trouver les bons interlocuteurs.
      </p>
      <h2>Un annuaire et une aide au choix</h2>
      <p>
        Vous pouvez consulter librement les fiches et contacter les
        professionnels via leur site. Si votre besoin demande à être précisé,
        décrivez-le : Jérémy examine votre demande et vous recontacte pour
        orienter la recherche. Le choix du prestataire et la contractualisation
        vous appartiennent.
      </p>
      <h2>Des informations dont la portée est claire</h2>
      <p>
        Les fiches présentent les offres annoncées par les prestataires et leurs
        sources. Le badge d’identité vérifiée porte sur l’identité légale
        publique, pas sur la qualité des missions. Les fiches déclaratives sont
        signalées. Aucun classement n’est vendu.
      </p>
      <h2>Un référencement gratuit</h2>
      <p>
        Les agences, indépendants, intégrateurs et formateurs peuvent demander
        l’ajout ou la correction de leur fiche. Les demandes sont relues avant
        publication.
      </p>
      <p>
        <Link href="/methodologie" className="text-forest underline">
          Lire notre méthode
        </Link>{" "}
        ·{" "}
        <Link href="/contact" className="text-forest underline">
          Contacter Jérémy
        </Link>
      </p>
    </div>
  );
}
