import Link from "next/link";
import type { RelatedPage } from "@/data/types";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/structuredData";

type BreadcrumbsProps = {
  items: RelatedPage[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const fullItems = [{ label: "Accueil", href: "/" }, ...items];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(fullItems)} />
      <nav aria-label="Fil d'Ariane" className="text-sm text-muted">
        <ol className="flex flex-wrap items-center gap-2">
          {fullItems.map((item, index) => (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              <Link href={item.href} className="hover:text-ink">
                {item.label}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
