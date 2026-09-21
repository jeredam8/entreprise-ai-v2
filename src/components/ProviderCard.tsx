import { specialtyLabel } from "@/lib/directory";
import Link from "next/link";
import { ArrowRight, BadgeCheck, MapPin } from "lucide-react";
import type { Provider } from "@/data/types";

export function ProviderCard({ provider }: { provider: Provider }) {
  return (
    <article className="flex h-full flex-col rounded-md border border-line bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-ink">
            <Link
              href={`/prestataires-ia/${provider.slug}`}
              className="hover:underline"
            >
              {provider.name}
            </Link>
          </h2>
          <p className="mt-1 text-sm text-muted">{provider.type}</p>
        </div>
        <span
          className={
            provider.verificationLevel === "Vérifié"
              ? "inline-flex items-center gap-1 rounded-md border border-forest/30 bg-forest/5 px-2.5 py-1 text-xs font-medium text-forest"
              : "inline-flex items-center gap-1 rounded-md border border-amber/30 bg-amber/10 px-2.5 py-1 text-xs font-medium text-amber"
          }
        >
          {provider.verificationLevel === "Vérifié" ? (
            <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
          ) : null}
          {provider.legal ? "Identité vérifiée" : "Déclaratif"}
        </span>
      </div>
      <div className="mt-4 flex items-center gap-2 text-sm text-muted">
        <MapPin className="h-4 w-4" aria-hidden="true" />
        {provider.city} · {provider.intervention}
      </div>
      <p className="mt-4 line-clamp-3 text-sm leading-6 text-muted">
        {provider.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {[...new Set(provider.specialties.map(specialtyLabel))]
          .slice(0, 3)
          .map((specialty) => (
            <a
              href={`/prestataires-ia?specialty=${encodeURIComponent(specialtyLabel(specialty))}`}
              key={specialty}
              className="rounded-md bg-soft px-2.5 py-2 text-xs text-ink hover:underline"
            >
              {specialtyLabel(specialty)}
            </a>
          ))}
      </div>
      <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-line pt-4 text-sm">
        <div>
          <dt className="text-muted">Budget min.</dt>
          <dd className="font-semibold text-ink">
            {provider.minBudget > 0 ? provider.minBudgetLabel : "Non renseigné"}
          </dd>
        </div>
        <div>
          <dt className="text-muted">Équipe</dt>
          <dd className="font-semibold text-ink">{provider.teamSize}</dd>
        </div>
      </dl>
      <Link
        href={`/prestataires-ia/${provider.slug}`}
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-forest"
      >
        Voir la fiche<span className="sr-only"> de {provider.name}</span>
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </article>
  );
}
