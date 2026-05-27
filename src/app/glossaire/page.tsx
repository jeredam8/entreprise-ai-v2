import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProjectCTA } from "@/components/ProjectCTA";
import { glossary } from "@/data/glossary";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Glossaire IA B2B - Définitions pour PME et ETI",
  description: "Glossaire IA en français : agence IA, consultant IA, intégrateur, RAG, agent IA, automatisation, RGPD et AI Act.",
  path: "/glossaire"
});

export default function GlossaryPage() {
  return (
    <>
      <div className="page-shell">
        <Breadcrumbs items={[{ label: "Glossaire", href: "/glossaire" }]} />
        <div className="mt-8 max-w-4xl">
          <h1 className="text-4xl font-semibold tracking-normal text-ink md:text-5xl">Glossaire IA B2B</h1>
          <p className="mt-5 text-lg leading-8 text-muted">
            Définitions courtes et orientées entreprise pour aider les dirigeants, DSI, DAF, DRH et directions métier à cadrer leurs projets IA.
          </p>
        </div>
      </div>
      <section className="section">
        <div className="grid gap-5 lg:grid-cols-2">
          {glossary.map((entry) => (
            <article key={entry.slug} id={entry.slug} className="rounded-md border border-line bg-white p-6">
              <h2 className="text-xl font-semibold text-ink">{entry.term}</h2>
              <p className="mt-3 text-sm leading-6 text-ink">{entry.definition}</p>
              <p className="mt-3 text-sm leading-6 text-muted">{entry.b2bExplanation}</p>
              <p className="mt-3 rounded-md bg-soft p-3 text-sm leading-6 text-muted">
                Exemple : {entry.example}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {entry.relatedPages.map((page) => (
                  <Link key={page.href} href={page.href} className="rounded-md border border-line px-3 py-1.5 text-xs font-semibold text-forest hover:border-forest">
                    {page.label}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <ProjectCTA />
    </>
  );
}
