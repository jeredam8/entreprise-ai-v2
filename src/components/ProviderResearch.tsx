import Link from "next/link";
import { providerResearch, researchDate } from "@/data/providerResearch";
export function ProviderResearch({ slug }: { slug: string }) {
  const note = providerResearch[slug];
  if (!note) return null;
  return <section className="section pt-0"><div className="content-prose max-w-4xl rounded-md border border-line bg-soft p-6">
    <h2>Offre et points à vérifier avant un devis</h2>
    <p className="text-sm text-muted">Analyse éditoriale Entreprise.ai · Sources consultées le <time dateTime={researchDate}>9 septembre 2026</time>. Informations déclarées par le prestataire, sans audit de ses prestations.</p>
    <h3>{note.fit}</h3><p>{note.offer}</p>
    <h3>Ce que la source permet de vérifier</h3><p>{note.evidence}</p>
    <h3>Notre point de vigilance</h3><p>{note.question}</p>
    <p><a href={note.source} target="_blank" rel="noopener noreferrer" className="text-forest underline">Consulter la page source du prestataire</a></p>
    <p>Pour préparer l’entretien : <Link href="/guides/comment-choisir-agence-ia" className="text-forest underline">grille de choix d’une agence</Link> et <Link href="/guides/combien-coute-projet-ia" className="text-forest underline">méthode de calcul du budget IA</Link>.</p>
  </div></section>;
}
