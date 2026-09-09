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
          {page.updatedAt ? <p className="mt-3 text-sm text-muted">Par Entreprise.ai · Mis à jour le <time dateTime={page.updatedAt}>9 septembre 2026</time></p> : null}
          <div className="mt-6 rounded-md border border-line bg-soft p-5 text-base leading-7 text-ink">
            {page.summary}
          </div>
        </div>
      </div>

      {page.quickFacts ? (
        <section className="section pt-0">
          <QuickFacts facts={page.quickFacts} />
        </section>
      ) : null}

      <section className="section">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <article className="content-prose">
            {variant === "guide" ? (
              <nav className="rounded-md border border-line bg-white p-5" aria-label="Sommaire">
                <h2 className="mt-0 text-lg">Sommaire</h2>
                <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm">
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

      {related.length > 0 ? <section className="section pt-0"><div className="section-heading"><h2>Prestataires à étudier pour ce besoin</h2><p>Leurs offres publiques donnent des pistes de comparaison. Consultez les sources et les points à vérifier sur chaque fiche.</p></div><div className="grid gap-5 md:grid-cols-3">{related.map((provider) => <ProviderCard key={provider.slug} provider={provider} />)}</div><p className="mt-5"><Link href="/agences-ia" className="text-forest underline">Comparer les agences IA</Link></p></section> : null}
      <RelatedPages pages={page.relatedPages} />
      <FAQ items={page.faqs} />
      <ProjectCTA />
    </>
  );
}
