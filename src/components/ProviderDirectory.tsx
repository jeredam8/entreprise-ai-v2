"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { Provider } from "@/data/types";
import { ProviderCard } from "@/components/ProviderCard";
import {
  emptyFilters,
  matches,
  specialtyLabel,
  sectorLabel,
  type Filters,
} from "@/lib/directory";
import { event as track } from "@/lib/analytics";
export function ProviderDirectory({
  providers,
  initialType,
}: {
  providers: Provider[];
  initialType?: Provider["type"];
}) {
  const [f, setF] = useState<Filters>({
    ...emptyFilters,
    type: initialType || "",
  });
  const [selected, setSelected] = useState<string[]>([]);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const restore = () => {
      const q = new URLSearchParams(window.location.search);
      const n = { ...emptyFilters, type: initialType || "" };
      for (const key of [
        "q",
        "type",
        "specialty",
        "sector",
        "city",
        "budget",
      ] as const)
        if (q.has(key)) n[key] = q.get(key) || "";
      n.remote = q.get("remote") === "1";
      n.known = q.get("known") === "1";
      setF(n);
      setReady(true);
    };
    restore();
    window.addEventListener("popstate", restore);
    return () => window.removeEventListener("popstate", restore);
  }, [initialType]);
  function update(key: keyof Filters, value: string | boolean) {
    setF((old) => ({ ...old, [key]: value }));
  }
  useEffect(() => {
    if (!ready) return;
    const t = setTimeout(() => {
      const url = new URL(window.location.href);
      for (const [key, value] of Object.entries(f)) {
        if (value)
          url.searchParams.set(key, value === true ? "1" : String(value));
        else url.searchParams.delete(key);
      }
      window.history.replaceState(null, "", url);
      if (Object.values(f).some(Boolean))
        track("directory_filter", {
          has_query: !!f.q,
          results: providers.filter((p) => matches(p, f)).length,
        });
    }, 450);
    return () => clearTimeout(t);
  }, [f, ready, providers]);
  const list = useMemo(
    () =>
      providers
        .filter((p) => matches(p, f))
        .sort((a, b) => a.name.localeCompare(b.name, "fr")),
    [providers, f],
  );
  const unique = (values: string[]) =>
    [...new Set(values)].sort((a, b) => a.localeCompare(b, "fr"));
  const compare = providers.filter((p) => selected.includes(p.slug));
  const active = Object.entries(f).filter(([, v]) => !!v);
  return (
    <section className="section pt-0" aria-label="Rechercher un prestataire">
      <div className="rounded-md border border-line bg-soft p-4 sm:p-5">
        <label className="block font-semibold">
          Rechercher par nom, besoin ou ville
          <input
            type="search"
            value={f.q}
            onChange={(e) => update("q", e.target.value)}
            placeholder="Ex. automatisation, formation, Stamina…"
            className="mt-2 w-full rounded-md border border-line bg-white p-3 text-base"
          />
        </label>
        <details className="mt-3">
          <summary className="cursor-pointer py-2 text-sm font-semibold text-forest">
            Affiner la recherche
            {active.length > 0 ? ` (${active.length} critères actifs)` : ""}
          </summary>
          <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <Select
              label="Type"
              value={f.type}
              change={(v) => update("type", v)}
              options={unique(providers.map((p) => p.type))}
            />
            <Select
              label="Spécialité"
              value={f.specialty}
              change={(v) => update("specialty", v)}
              options={unique(
                providers.flatMap((p) => p.specialties.map(specialtyLabel)),
              )}
            />
            <Select
              label="Secteur"
              value={f.sector}
              change={(v) => update("sector", v)}
              options={unique(
                providers.flatMap((p) => p.sectors.map(sectorLabel)),
              )}
            />
            <Select
              label="Ville"
              value={f.city}
              change={(v) => update("city", v)}
              options={unique(providers.map((p) => p.city))}
            />
            <label className="text-sm font-medium">
              Mon budget maximal
              <select
                value={f.budget}
                onChange={(e) => update("budget", e.target.value)}
                className="mt-2 w-full rounded-md border border-line bg-white p-3 text-base"
              >
                <option value="">À définir</option>
                {[1000, 5000, 10000, 20000, 50000].map((n) => (
                  <option value={n} key={n}>
                    {n.toLocaleString("fr-FR")} €
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="mt-4 flex flex-wrap gap-5 text-sm">
            <label className="flex gap-2 items-center py-2">
              <input
                type="checkbox"
                checked={f.remote}
                onChange={(e) => update("remote", e.target.checked)}
                className="h-5 w-5"
              />
              Intervention à distance
            </label>
            <label className="flex gap-2 items-center py-2">
              <input
                type="checkbox"
                checked={f.known}
                onChange={(e) => update("known", e.target.checked)}
                className="h-5 w-5"
              />
              Budget de départ renseigné uniquement
            </label>
          </div>
          {f.budget && (
            <p className="mt-2 text-xs leading-5 text-muted">
              Le budget de départ doit être inférieur à votre plafond. Les
              tarifs non renseignés restent inclus sauf si vous les excluez. Un
              devis reste nécessaire.
            </p>
          )}
        </details>
      </div>
      <div className="my-5 flex flex-wrap items-center justify-between gap-3">
        <p role="status" className="text-sm text-muted">
          <strong className="text-ink">{list.length}</strong> prestataire
          {list.length > 1 ? "s" : ""} sur {providers.length} · Ordre
          alphabétique
        </p>
        {active.length > 0 && (
          <button
            onClick={() => setF({ ...emptyFilters })}
            className="btn-secondary"
          >
            Effacer les filtres
          </button>
        )}
      </div>
      {active.length > 0 && (
        <div className="mb-5 flex flex-wrap gap-2">
          {active.map(([key, value]) => (
            <button
              key={key}
              className="rounded-md border border-line px-3 py-2 text-sm"
              onClick={() =>
                update(
                  key as keyof Filters,
                  typeof value === "boolean" ? false : "",
                )
              }
              aria-label={`Retirer ${key === "remote" ? "À distance" : key === "known" ? "Budget connu" : value}`}
            >
              {key === "remote"
                ? "À distance"
                : key === "known"
                  ? "Budget connu"
                  : key === "budget"
                    ? `Plafond ${value} €`
                    : String(value)}{" "}
              ×
            </button>
          ))}
        </div>
      )}
      {!list.length && (
        <div className="rounded-md border border-line p-7">
          <h2 className="text-xl font-semibold">
            Aucun profil ne correspond à tous ces critères.
          </h2>
          <p className="mt-3 text-muted">
            Retirez un filtre ou décrivez votre besoin : nous vous aiderons à
            orienter la recherche.
          </p>
          <Link href="/deposer-un-projet-ia" className="btn-primary mt-5">
            Parler de mon projet
          </Link>
        </div>
      )}
      {compare.length > 0 && (
        <div className="mb-6 rounded-md border border-forest/30 bg-soft p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="font-semibold">
              Votre comparaison ({compare.length}/3)
            </h2>
            <button
              onClick={() => setSelected([])}
              className="text-sm underline"
            >
              Vider la sélection
            </button>
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">
                Comparer les prestataires sélectionnés
              </caption>
              <thead>
                <tr>
                  <th className="p-3">Critère</th>
                  {compare.map((p) => (
                    <th className="min-w-48 p-3" key={p.slug}>
                      <Link
                        href={`/prestataires-ia/${p.slug}`}
                        className="text-forest underline"
                      >
                        {p.name}
                      </Link>
                      <button
                        className="ml-3"
                        aria-label={`Retirer ${p.name} de la comparaison`}
                        onClick={() =>
                          setSelected((s) => s.filter((x) => x !== p.slug))
                        }
                      >
                        ×
                      </button>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Type", (p: Provider) => p.type],
                  ["Ville", (p: Provider) => p.city],
                  [
                    "Spécialités",
                    (p: Provider) =>
                      p.specialties.map(specialtyLabel).join(", "),
                  ],
                  [
                    "Budget de départ",
                    (p: Provider) =>
                      p.minBudget > 0 ? p.minBudgetLabel : "Non renseigné",
                  ],
                  [
                    "Vérification",
                    (p: Provider) =>
                      p.legal
                        ? "Identité légale vérifiée"
                        : "Fiche déclarative",
                  ],
                ].map(([label, get]) => (
                  <tr className="border-t border-line" key={String(label)}>
                    <th className="p-3">{String(label)}</th>
                    {compare.map((p) => (
                      <td className="p-3 align-top" key={p.slug}>
                        {(get as (p: Provider) => string)(p)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-muted">
            Les offres sont déclaratives. La vérification d’identité ne certifie
            pas la qualité d’une prestation.
          </p>
        </div>
      )}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <div key={p.slug} className="flex flex-col">
            <ProviderCard provider={p} />
            <label className="mt-2 flex items-center gap-2 p-2 text-sm">
              <input
                type="checkbox"
                className="h-5 w-5"
                checked={selected.includes(p.slug)}
                disabled={selected.length >= 3 && !selected.includes(p.slug)}
                onChange={(e) => {
                  setSelected((s) =>
                    e.target.checked
                      ? [...s, p.slug]
                      : s.filter((x) => x !== p.slug),
                  );
                  track("provider_compare", { provider: p.slug });
                }}
              />
              Comparer {p.name}
            </label>
          </div>
        ))}
      </div>
    </section>
  );
}
function Select({
  label,
  value,
  change,
  options,
}: {
  label: string;
  value: string;
  change: (v: string) => void;
  options: string[];
}) {
  return (
    <label className="text-sm font-medium">
      {label}
      <select
        className="mt-2 w-full rounded-md border border-line bg-white p-3 text-base"
        value={value}
        onChange={(e) => change(e.target.value)}
      >
        <option value="">Tous</option>
        {options.map((x) => (
          <option key={x}>{x}</option>
        ))}
      </select>
    </label>
  );
}
