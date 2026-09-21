import test from "node:test";
import assert from "node:assert/strict";
import {
  matches,
  specialtyLabel,
  sectorLabel,
  emptyFilters,
} from "../src/lib/directory.ts";
const base = {
  name: "Stamina Solutions",
  city: "Paris",
  type: "Agence IA",
  description: "Accompagnement des PME",
  specialties: ["Agents IA et automatisation métier (Claude Agent SDK)"],
  sectors: ["RH"],
  stacks: [],
  typicalUseCases: [],
  minBudget: 0,
  remote: true,
};
test("Normalise les variantes sans confondre cadrage et RAG", () => {
  assert.equal(specialtyLabel(base.specialties[0]), "Agents IA");
  assert.equal(specialtyLabel("Cadrage IA"), "Audit et stratégie IA");
  assert.equal(
    specialtyLabel("RAG documentaire"),
    "RAG et recherche documentaire",
  );
  assert.equal(sectorLabel("RH"), "Ressources humaines");
});
test("Recherche par nom, accents, besoin et spécialité", () => {
  assert.ok(matches(base, { ...emptyFilters, q: "stamina paris" }));
  assert.ok(matches(base, { ...emptyFilters, specialty: "Agents IA" }));
  assert.ok(matches(base, { ...emptyFilters, q: "ressources" }));
  assert.equal(matches(base, { ...emptyFilters, q: "inexistant" }), false);
});
test("Un plafond conserve les offres accessibles et distingue les inconnues", () => {
  const f = { ...emptyFilters, budget: "5000" };
  assert.ok(matches({ ...base, minBudget: 1000 }, f));
  assert.equal(matches({ ...base, minBudget: 10000 }, f), false);
  assert.ok(matches(base, f));
  assert.equal(matches(base, { ...f, known: true }), false);
});
test("Les filtres se combinent et remote reste un fait de la fiche", () => {
  assert.equal(
    matches({ ...base, remote: false }, { ...emptyFilters, remote: true }),
    false,
  );
  assert.equal(matches(base, { ...emptyFilters, city: "Lyon" }), false);
  assert.ok(matches(base, { ...emptyFilters, sector: "Ressources humaines" }));
});
