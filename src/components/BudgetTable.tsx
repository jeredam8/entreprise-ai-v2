import type { BudgetRow } from "@/data/types";

export function BudgetTable({ rows }: { rows: BudgetRow[] }) {
  if (!rows || rows.length === 0) return null;

  return (
    <div className="overflow-hidden rounded-md border border-line bg-white">
      <table className="w-full min-w-[720px] text-left text-sm">
        <thead className="bg-soft text-ink">
          <tr>
            <th className="px-4 py-3 font-semibold">Projet</th>
            <th className="px-4 py-3 font-semibold">Budget indicatif</th>
            <th className="px-4 py-3 font-semibold">Complexité</th>
            <th className="px-4 py-3 font-semibold">Notes</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {rows.map((row) => (
            <tr key={row.label}>
              <td className="px-4 py-4 font-medium text-ink">{row.label}</td>
              <td className="px-4 py-4 text-muted">{row.budget}</td>
              <td className="px-4 py-4 text-muted">{row.complexity}</td>
              <td className="px-4 py-4 text-muted">{row.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
