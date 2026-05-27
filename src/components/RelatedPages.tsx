import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { RelatedPage } from "@/data/types";

export function RelatedPages({ pages }: { pages: RelatedPage[] }) {
  if (pages.length === 0) return null;

  return (
    <section className="section">
      <div className="section-heading">
        <h2>Pages associées</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {pages.map((page) => (
          <Link key={page.href} href={page.href} className="group rounded-md border border-line bg-white p-5 transition hover:border-forest">
            <span className="flex items-center justify-between gap-4 text-base font-semibold text-ink">
              {page.label}
              <ArrowRight className="h-4 w-4 text-forest transition group-hover:translate-x-1" aria-hidden="true" />
            </span>
            {page.description ? <p className="mt-2 text-sm leading-6 text-muted">{page.description}</p> : null}
          </Link>
        ))}
      </div>
    </section>
  );
}
