import type { ContentPage } from "@/data/types";

export function QuickFacts({ facts }: { facts: NonNullable<ContentPage["quickFacts"]> }) {
  const items = [
    ["Objectif", facts.objective],
    ["Prestataires adaptés", facts.providers],
    ["Budget indicatif", facts.budget],
    ["Complexité", facts.complexity],
    ["Délai typique", facts.timeline],
    ["Vigilance", facts.vigilance]
  ];

  return (
    <aside className="rounded-md border border-line bg-soft p-5">
      <h2 className="text-lg font-semibold text-ink">Résumé rapide</h2>
      <dl className="mt-4 grid gap-4 sm:grid-cols-2">
        {items.map(([label, value]) => (
          <div key={label}>
            <dt className="text-xs font-semibold uppercase text-muted">{label}</dt>
            <dd className="mt-1 text-sm leading-6 text-ink">{value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}
