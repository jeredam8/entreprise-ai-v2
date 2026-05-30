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
  return (
    <>
      <div className="page-shell">
        <Breadcrumbs items={[parent, { label: page.title, href: `${parent.href}/${page.slug}` }]} />
        <div className="mt-8 max-w-4xl">
          <h1 className="text-4xl font-semibold tracking-normal text-ink md:text-5xl">{page.h1}</h1>
          <p className="mt-5 text-lg leading-8 text-muted">{page.intro}</p>
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
                  {page.sections.map((section) => (
                    <li key={section.title}>{section.title}</li>
                  ))}
                  {page.budgetRows ? <li>Budget et complexité</li> : null}
                  {page.risks ? <li>Risques et points de vigilance</li> : null}
                  {page.questions ? <li>Questions à poser</li> : null}
                </ol>
              </nav>
            ) : null}

            {page.sections.map((section) => (
              <section key={section.title}>
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
                <h2>Budget et complexité</h2>
                <div className="mt-4 overflow-x-auto">
                  <BudgetTable rows={page.budgetRows} />
                </div>
              </section>
            ) : null}

            {page.questions ? (
              <section>
                <h2>Questions à poser avant de choisir un prestataire</h2>
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
              <h2 className="text-lg font-semibold text-ink">Shortlist recommandée</h2>
              <p className="mt-2 text-sm leading-6 text-muted">
                Pour ce type de page, la version finale devra distinguer recommandations, prestataires vérifiés et mises en avant sponsorisées.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <RelatedPages pages={page.relatedPages} />
      <FAQ items={page.faqs} />
      <ProjectCTA />
    </>
  );
}
