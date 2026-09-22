import Link from "next/link";
import { providers } from "@/data/providers";
import { useCaseProviders } from "@/data/editorialLinks";
import { ProviderCard } from "@/components/ProviderCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BudgetTable } from "@/components/BudgetTable";
import { FAQ } from "@/components/FAQ";
import { ProjectCTA } from "@/components/ProjectCTA";
import { QuickFacts } from "@/components/QuickFacts";
import { RelatedPages } from "@/components/RelatedPages";
import { RiskList } from "@/components/RiskList";
import type { ContentPage } from "@/data/types";

type ContentPageRendererProps = {
  page: ContentPage;
  parent: {
    label: string;
    href: string;
  };
  variant: "guide" | "useCase" | "sector";
};

export function ContentPageRenderer({ page, parent, variant }: ContentPageRendererProps) {
  const related = (variant === "useCase" ? useCaseProviders[page.slug] ?? [] : page.relatedProviders).flatMap((slug) => { const p = providers.find((p) => p.slug === slug); return p ? [p] : []; });
  return (
    <>
      <div className="page-shell">
        <Breadcrumbs items={[parent, { label: page.title, href: `${parent.href}/${page.slug}` }]} />
        <div className="mt-8 max-w-4xl">
          <h1 className="text-4xl font-semibold tracking-normal text-ink md:text-5xl">{page.h1}</h1>
          <p className="mt-5 text-lg leading-8 text-muted">{page.intro}</p>
          {page.updatedAt ? <p className="mt-3 text-sm text-muted">Par Entreprise.ai · Mis à jour le <time dateTime={page.updatedAt}>{new Date(page.updatedAt).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })}</time></p> : null}
          <div className="mt-6 rounded-md border border-line bg-soft p-5 text-base leading-7 text-ink">
            {page.summary}
          </div>
          {page.projectCta ? <div className="mt-5 flex flex-wrap gap-4"><Link href="/deposer-un-projet-ia" className="btn-primary">Parler de mon besoin</Link><a href="#prestataires" className="btn-secondary">Voir les prestataires</a></div> : null}
        </div>
      </div>

      {page.quickFacts ? (
        <section className="section pt-0">
          <QuickFacts facts={page.quickFacts} />
        </section>
      ) : null}

      <section className="section">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <article className="content-prose min-w-0">
            {variant === "guide" || page.projectCta ? (
              <nav className="rounded-md border border-line bg-white p-5" aria-label="Sommaire">
                <h2 className="mt-0 text-lg">Sommaire</h2>
                <ol className="mt-3 list-none space-y-2 text-sm">
                  {page.sections.map((section, index) => (
                    <li key={section.title}><a href={`#section-${index + 1}`} className="text-forest underline">{section.title}</a></li>
                  ))}
                  {page.budgetRows ? <li><a href="#budget" className="text-forest underline">Budget et complexité</a></li> : null}

                  {page.questions ? <li><a href="#questions" className="text-forest underline">Questions à poser</a></li> : null}
                </ol>
              </nav>
            ) : null}

            {page.sections.map((section, index) => (
              <section key={section.title} id={`section-${index + 1}`} className="scroll-mt-24">
                <h2>{section.title}</h2>
                <p>{section.body}</p>
                {section.bullets ? (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
                {section.table ? <><p className="text-xs text-muted lg:hidden">Faites défiler le tableau horizontalement pour lire toutes les colonnes.</p><div className="mt-5 overflow-x-auto rounded-md border border-line" tabIndex={0} role="region" aria-label={section.table.caption}>
                  <table className="w-full min-w-[620px] text-left text-sm leading-6">
                    <caption className="bg-soft p-4 text-left font-semibold text-ink">{section.table.caption}</caption>
                    <thead className="bg-soft"><tr>{section.table.columns.map((column) => <th key={column} scope="col" className="px-4 py-3 text-ink">{column}</th>)}</tr></thead>
                    <tbody className="divide-y divide-line">{section.table.rows.map((row) => <tr key={row[0]}>{row.map((cell, index) => index === 0 ? <th key={index} scope="row" className="px-4 py-4 font-medium text-ink">{cell}</th> : <td key={index} className="px-4 py-4 align-top">{cell}</td>)}</tr>)}</tbody>
                  </table>
                </div></> : null}
                {section.links ? <div className="mt-4 flex flex-col items-start gap-3">{section.links.map((link) => <Link key={link.href} href={link.href} className="text-forest underline underline-offset-4">{link.label}</Link>)}</div> : null}
              </section>
            ))}

            {page.examples ? (
              <section>
                <h2>Cas d'usage concrets</h2>
                <ul>
                  {page.examples.map((example) => (
                    <li key={example}>{example}</li>
                  ))}
                </ul>
              </section>
            ) : null}

            {page.budgetRows ? (
              <section>
                <h2 id="budget" className="scroll-mt-24">Budget et complexité</h2>
                <div className="mt-4 overflow-x-auto">
                  <BudgetTable rows={page.budgetRows} illustrative={page.slug === "combien-coute-projet-ia"} />
                </div>
              </section>
            ) : null}

            {page.questions ? (
              <section>
                <h2 id="questions" className="scroll-mt-24">Questions à poser avant de choisir un prestataire</h2>
                <ul>
                  {page.questions.map((question) => (
                    <li key={question}>{question}</li>
                  ))}
                </ul>
              </section>
            ) : null}
          </article>

          <aside className="space-y-5">
            <RiskList risks={page.risks} />
            <div className="rounded-md border border-line bg-white p-5">
              <h2 className="text-lg font-semibold text-ink">Préparer une comparaison</h2>
              <p className="mt-2 text-sm leading-6 text-muted">
                Décrivez un périmètre commun et demandez des preuves de livraison comparables. Une présence dans l’annuaire ne constitue pas une recommandation de qualité.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 ? <section id="prestataires" className="section scroll-mt-24 pt-0"><div className="section-heading"><h2>Prestataires à étudier pour ce besoin</h2><p>Leurs offres publiques donnent des pistes de comparaison. Consultez les sources et les points à vérifier sur chaque fiche.</p></div><div className="grid gap-5 md:grid-cols-3">{related.map((provider) => <ProviderCard key={provider.slug} provider={provider} />)}</div><p className="mt-5"><Link href="/agences-ia" className="text-forest underline">Comparer les agences IA</Link></p></section> : null}
      <RelatedPages pages={page.relatedPages} />
      <FAQ items={page.faqs} />
      <ProjectCTA {...page.projectCta} />
    </>
  );
}
