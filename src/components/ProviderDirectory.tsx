"use client";

import { useMemo, useState } from "react";
import type { Provider } from "@/data/types";
import { ProviderCard } from "@/components/ProviderCard";

type ProviderDirectoryProps = {
  providers: Provider[];
  initialType?: Provider["type"];
};

const budgetOptions = [
  { label: "Tous budgets", value: 0 },
  { label: "5 000 €+", value: 5000 },
  { label: "10 000 €+", value: 10000 },
  { label: "20 000 €+", value: 20000 }
];

export function ProviderDirectory({ providers, initialType }: ProviderDirectoryProps) {
  const [type, setType] = useState(initialType ?? "");
  const [specialty, setSpecialty] = useState("");
  const [sector, setSector] = useState("");
  const [city, setCity] = useState("");
  const [budget, setBudget] = useState("0");
  const [remote, setRemote] = useState(false);
  const [teamSize, setTeamSize] = useState("");

  const facets = useMemo(() => {
    return {
      types: [...new Set(providers.map((provider) => provider.type))],
      specialties: [...new Set(providers.flatMap((provider) => provider.specialties))],
      sectors: [...new Set(providers.flatMap((provider) => provider.sectors))],
      cities: [...new Set(providers.map((provider) => provider.city))],
      teamSizes: [...new Set(providers.map((provider) => provider.teamSize))]
    };
  }, [providers]);

  const filtered = useMemo(() => {
    return providers.filter((provider) => {
      if (type && provider.type !== type) return false;
      if (specialty && !provider.specialties.includes(specialty)) return false;
      if (sector && !provider.sectors.includes(sector)) return false;
      if (city && provider.city !== city) return false;
      if (Number(budget) > 0 && provider.minBudget < Number(budget)) return false;
      if (remote && !provider.remote) return false;
      if (teamSize && provider.teamSize !== teamSize) return false;
      return true;
    });
  }, [budget, city, providers, remote, sector, specialty, teamSize, type]);

  return (
    <section className="section">
      <div className="rounded-md border border-line bg-white p-5">
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          <FilterSelect label="Type" value={type} onChange={setType} options={facets.types} />
          <FilterSelect label="Spécialité" value={specialty} onChange={setSpecialty} options={facets.specialties} />
          <FilterSelect label="Secteur" value={sector} onChange={setSector} options={facets.sectors} />
          <FilterSelect label="Ville" value={city} onChange={setCity} options={facets.cities} />
          <label className="text-sm font-medium text-ink">
            Budget minimum
            <select className="mt-2 w-full rounded-md border border-line bg-white px-3 py-2 text-sm text-ink" value={budget} onChange={(event) => setBudget(event.target.value)}>
              {budgetOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
          <FilterSelect label="Taille" value={teamSize} onChange={setTeamSize} options={facets.teamSizes} />
        </div>
        <label className="mt-4 flex items-center gap-2 text-sm text-muted">
          <input type="checkbox" checked={remote} onChange={(event) => setRemote(event.target.checked)} className="h-4 w-4 rounded border-line text-forest" />
          Intervention à distance possible
        </label>
      </div>
      <div className="mt-6 flex items-center justify-between gap-4">
        <p className="text-sm text-muted">{filtered.length} prestataire(s) exemple(s) affiché(s)</p>
        <p className="text-sm text-muted">Éditorial · Vérifié · Sponsorisé : séparation prévue pour la V2 publique</p>
      </div>
      <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((provider) => (
          <ProviderCard key={provider.slug} provider={provider} />
        ))}
      </div>
    </section>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <label className="text-sm font-medium text-ink">
      {label}
      <select className="mt-2 w-full rounded-md border border-line bg-white px-3 py-2 text-sm text-ink" value={value} onChange={(event) => onChange(event.target.value)}>
        <option value="">Tous</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
