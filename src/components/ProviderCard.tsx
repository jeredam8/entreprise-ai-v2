import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import type { Provider } from "@/data/types";

export function ProviderCard({ provider }: { provider: Provider }) {
  return (
    <article className="flex h-full flex-col rounded-md border border-line bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-ink">{provider.name}</h2>
          <p className="mt-1 text-sm text-muted">{provider.type}</p>
        </div>
        <span className="rounded-md border border-amber/30 bg-amber/10 px-2.5 py-1 text-xs font-medium text-amber">
          {provider.verificationLevel}
        </span>
      </div>
      <div className="mt-4 flex items-center gap-2 text-sm text-muted">
        <MapPin className="h-4 w-4" aria-hidden="true" />
        {provider.city} · {provider.intervention}
      </div>
      <p className="mt-4 line-clamp-3 text-sm leading-6 text-muted">{provider.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {provider.specialties.slice(0, 3).map((specialty) => (
          <span key={specialty} className="rounded-md bg-soft px-2.5 py-1 text-xs text-ink">
            {specialty}
          </span>
        ))}
      </div>
      <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-line pt-4 text-sm">
        <div>
          <dt className="text-muted">Budget min.</dt>
          <dd className="font-semibold text-ink">{provider.minBudgetLabel}</dd>
        </div>
        <div>
          <dt className="text-muted">Équipe</dt>
          <dd className="font-semibold text-ink">{provider.teamSize}</dd>
        </div>
      </dl>
      <Link href={`/prestataires-ia/${provider.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-forest">
        Voir la fiche
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </article>
  );
}
