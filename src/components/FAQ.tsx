import type { FaqItem } from "@/data/types";
import { JsonLd } from "@/components/JsonLd";
import { faqJsonLd } from "@/lib/structuredData";

export function FAQ({ items }: { items: FaqItem[] }) {
  if (items.length === 0) return null;

  return (
    <section className="section">
      <JsonLd data={faqJsonLd(items)} />
      <div className="section-heading">
        <h2>Questions fréquentes</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <details key={item.question} className="rounded-md border border-line bg-white p-5">
            <summary className="cursor-pointer text-base font-semibold text-ink">{item.question}</summary>
            <p className="mt-3 text-sm leading-6 text-muted">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
