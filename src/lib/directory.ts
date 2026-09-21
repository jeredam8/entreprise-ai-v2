import type { Provider } from "../data/types";
export const normalize = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
export function specialtyLabel(value: string) {
  const v = normalize(value);
  if (v.includes("agent")) return "Agents IA";
  if (v.includes("automatis")) return "Automatisation";
  if (v.includes("formation") || v.includes("acculturation"))
    return "Formation IA";
  if (v.includes("chatbot") || v.includes("conversation")) return "Chatbots";
  if (/\brag\b/.test(v) || v.includes("documentaire"))
    return "RAG et recherche documentaire";
  if (v.includes("audit") || v.includes("cadrage") || v.includes("strategie"))
    return "Audit et stratégie IA";
  return value;
}
export const sectorLabel = (value: string) =>
  ["rh", "ressources humaines"].includes(normalize(value))
    ? "Ressources humaines"
    : value;
export type Filters = {
  q: string;
  type: string;
  specialty: string;
  sector: string;
  city: string;
  budget: string;
  remote: boolean;
  known: boolean;
};
export const emptyFilters: Filters = {
  q: "",
  type: "",
  specialty: "",
  sector: "",
  city: "",
  budget: "",
  remote: false,
  known: false,
};
export function matches(p: Provider, f: Filters) {
  const hay = normalize(
    [
      p.name,
      p.city,
      p.description,
      p.type,
      ...p.specialties,
      ...p.specialties.map(specialtyLabel),
      ...p.sectors.map(sectorLabel),
      ...p.stacks,
      ...p.typicalUseCases,
    ].join(" "),
  );
  const terms = normalize(f.q)
    .split(/\s+/)
    .filter(Boolean)
    .map((x) =>
      x === "rh"
        ? "ressources"
        : x === "automatisation"
          ? "automatis"
          : x === "assistant"
            ? "agent"
            : x,
    );
  return (
    terms.every((x) => hay.includes(x)) &&
    (!f.type || p.type === f.type) &&
    (!f.specialty ||
      p.specialties
        .map(specialtyLabel)
        .includes(specialtyLabel(f.specialty))) &&
    (!f.sector || p.sectors.map(sectorLabel).includes(f.sector)) &&
    (!f.city || p.city === f.city) &&
    (!f.remote || p.remote) &&
    (!f.known || p.minBudget > 0) &&
    (!Number(f.budget) || p.minBudget === 0 || p.minBudget <= Number(f.budget))
  );
}
