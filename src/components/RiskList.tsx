import { AlertTriangle } from "lucide-react";

export function RiskList({ risks }: { risks?: string[] }) {
  if (!risks || risks.length === 0) return null;

  return (
    <div className="rounded-md border border-burgundy/20 bg-burgundy/5 p-5">
      <h2 className="flex items-center gap-2 text-lg font-semibold text-ink">
        <AlertTriangle className="h-5 w-5 text-burgundy" aria-hidden="true" />
        Risques et points de vigilance
      </h2>
      <ul className="mt-4 grid gap-3 text-sm leading-6 text-muted md:grid-cols-2">
        {risks.map((risk) => (
          <li key={risk} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" aria-hidden="true" />
            {risk}
          </li>
        ))}
      </ul>
    </div>
  );
}
