import { cities } from "@/data/cities";
import { providers } from "@/data/providers";
import type { Provider, ProviderType } from "@/data/types";

/** Statistiques de l'annuaire, calculées au build depuis providers.ts (lui-même généré
 *  depuis la base). Principe directeur de la spec : chaque page porte une donnée qu'on ne
 *  trouve nulle part ailleurs, et cette donnée sort de la base. */

export const providerTypes: ProviderType[] = [
  "Agence IA",
  "Consultant IA",
  "Intégrateur IA",
  "Formateur IA",
  "Cabinet data"
];

export const typePaths: Partial<Record<ProviderType, string>> = {
  "Agence IA": "/agences-ia",
  "Consultant IA": "/consultants-ia",
  "Intégrateur IA": "/integrateurs-ia",
  "Formateur IA": "/formations-ia"
};

export function ofType(type: ProviderType, list: Provider[] = providers) {
  return list.filter((p) => p.type === type);
}

export function byType(list: Provider[] = providers) {
  return providerTypes
    .map((type) => ({ type, count: ofType(type, list).length, path: typePaths[type] }))
    .filter((x) => x.count > 0);
}

export function byCity(list: Provider[] = providers) {
  const map = new Map<string, number>();
  for (const p of list) map.set(p.city, (map.get(p.city) ?? 0) + 1);
  return [...map.entries()]
    .map(([city, count]) => ({ city, count, slug: cities.find((c) => c.city === city)?.slug }))
    .sort((a, b) => b.count - a.count || a.city.localeCompare(b.city));
}

/** Les pages villes du site, avec le nombre de fiches rattachées (bassin d'emploi). */
export function cityPagesWithCounts(list: Provider[] = providers) {
  return cities
    .map((c) => ({ city: c.city, slug: c.slug, count: list.filter((p) => p.city === c.city).length }))
    .sort((a, b) => b.count - a.count || a.city.localeCompare(b.city));
}

export function median(values: number[]) {
  if (!values.length) return 0;
  const s = [...values].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : Math.round((s[m - 1] + s[m]) / 2);
}

export function budgetStats(list: Provider[] = providers) {
  const known = list.filter((p) => p.minBudget > 0).map((p) => p.minBudget);
  return {
    known: known.length,
    median: median(known),
    min: known.length ? Math.min(...known) : 0,
    max: known.length ? Math.max(...known) : 0
  };
}

export function sizeStats(list: Provider[] = providers) {
  const map = new Map<string, number>();
  for (const p of list) map.set(p.teamSize, (map.get(p.teamSize) ?? 0) + 1);
  return [...map.entries()].map(([size, count]) => ({ size, count })).sort((a, b) => b.count - a.count);
}

export function ageStats(list: Provider[] = providers) {
  const years = list
    .map((p) => Number(p.legal?.createdAt?.slice(0, 4)))
    .filter((y) => Number.isFinite(y) && y > 1900);
  const recent = years.filter((y) => y >= 2023).length;
  return { known: years.length, since2023: recent, medianYear: median(years) };
}

export function lastVerification(list: Provider[] = providers) {
  return list.map((p) => p.verifiedAt).filter((d): d is string => Boolean(d)).sort().pop() ?? null;
}

export function formatEuro(n: number) {
  return `${n.toLocaleString("fr-FR")} €`;
}

export function formatDateFr(iso: string | null) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
}
