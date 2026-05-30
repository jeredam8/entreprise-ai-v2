import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Mentions légales - Entreprise.ai",
  description: "Mentions légales du site Entreprise.ai édité par TAC Digital EURL.",
  path: "/mentions-legales"
});

export default function LegalPage() {
  return (
    <div className="page-shell">
      <Breadcrumbs items={[{ label: "Mentions légales", href: "/mentions-legales" }]} />
      <article className="content-prose mt-8 max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-normal text-ink md:text-5xl">Mentions légales</h1>
        <h2>Éditeur</h2>
        <p>Le site Entreprise.ai est édité par TAC Digital EURL.</p>
        <ul>
          <li>Forme juridique : EURL</li>
          <li>Siège social : Mandelieu-la-Napoule, France</li>
          <li>Responsable de la publication : Jérémy Tripoli</li>
          <li>Contact : contact@entreprise.ai</li>
        </ul>
        <h2>Hébergement</h2>
        <p>Ce site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.</p>
        <h2>Propriété intellectuelle</h2>
        <p>Les contenus publiés sur ce site sont la propriété de TAC Digital EURL, sauf mention contraire. Toute reproduction ou réutilisation sans autorisation écrite préalable est interdite.</p>
      </article>
    </div>
  );
}
