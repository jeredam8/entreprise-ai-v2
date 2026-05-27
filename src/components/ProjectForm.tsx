"use client";

import { useState } from "react";
import type { FormEvent, ReactNode } from "react";

const companySizes = ["1-9", "10-49", "50-249", "250-999", "1000+"];
const requesterRoles = ["Direction générale", "DSI", "DAF", "DRH", "Direction marketing", "Direction commerciale", "Direction opérationnelle", "Autre"];
const projectTypes = ["Audit IA", "Automatisation IA", "Agent IA interne", "Chatbot", "RAG / base documentaire", "Formation IA", "Intégration CRM / ERP", "Reporting / data", "Traitement documentaire", "Autre"];
const urgencies = ["Moins de 1 mois", "1 à 3 mois", "3 à 6 mois", "Pas encore défini"];
const budgets = ["Moins de 5 000 €", "5 000 à 10 000 €", "10 000 à 25 000 €", "25 000 à 50 000 €", "50 000 €+", "Je ne sais pas"];

export function ProjectForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/project-submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!response.ok) throw new Error("Submission failed");
      setStatus("success");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8 rounded-md border border-line bg-white p-6 shadow-panel">
      <FormSection title="Informations entreprise">
        <TextInput label="Nom de l'entreprise" name="companyName" required />
        <TextInput label="Site web" name="website" type="url" />
        <TextInput label="Secteur" name="sector" required />
        <SelectInput label="Taille de l'entreprise" name="companySize" options={companySizes} required />
        <SelectInput label="Fonction du demandeur" name="role" options={requesterRoles} required />
      </FormSection>

      <FormSection title="Projet">
        <SelectInput label="Type de projet" name="projectType" options={projectTypes} required />
        <TextArea label="Description du besoin" name="need" required />
        <TextArea label="Objectif business" name="businessGoal" required />
        <TextArea label="Outils existants" name="existingTools" />
        <SelectInput label="Données sensibles" name="sensitiveData" options={["Non", "Oui", "À clarifier"]} required />
        <SelectInput label="Urgence" name="urgency" options={urgencies} required />
        <SelectInput label="Budget estimé" name="budget" options={budgets} required />
      </FormSection>

      <FormSection title="Contact">
        <TextInput label="Prénom" name="firstName" required />
        <TextInput label="Nom" name="lastName" required />
        <TextInput label="Email professionnel" name="email" type="email" required />
        <TextInput label="Téléphone" name="phone" type="tel" />
        <SelectInput label="Préférence de contact" name="contactPreference" options={["Email", "Téléphone", "Visio", "À définir"]} required />
      </FormSection>

      <button type="submit" className="btn-primary w-full justify-center sm:w-auto" disabled={status === "submitting"}>
        {status === "submitting" ? "Enregistrement..." : "Enregistrer la demande locale"}
      </button>

      {status === "success" ? (
        <p className="rounded-md border border-forest/20 bg-forest/5 p-4 text-sm leading-6 text-forest">
          Votre demande a bien été enregistrée pour cette version locale. Dans la version finale, Entreprise.ai analysera votre besoin et vous proposera une shortlist de prestataires adaptés.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="rounded-md border border-burgundy/20 bg-burgundy/5 p-4 text-sm text-burgundy">
          La soumission locale n'a pas pu être enregistrée. Le formulaire reste un prototype local sans envoi réel.
        </p>
      ) : null}
    </form>
  );
}

export function ProviderReferenceForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/provider-submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!response.ok) throw new Error("Submission failed");
      setStatus("success");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8 rounded-md border border-line bg-white p-6 shadow-panel">
      <FormSection title="Structure">
        <TextInput label="Nom du prestataire" name="providerName" required />
        <SelectInput label="Type de structure" name="providerType" options={["Agence IA", "Consultant IA", "Intégrateur IA", "Formateur IA", "Cabinet data", "Autre"]} required />
        <TextInput label="Site web" name="website" type="url" required />
        <TextInput label="Ville" name="city" required />
        <TextInput label="Pays" name="country" defaultValue="France" required />
        <TextInput label="Nombre de personnes" name="teamSize" required />
      </FormSection>

      <FormSection title="Positionnement">
        <TextArea label="Spécialités" name="specialties" required />
        <TextArea label="Secteurs d'intervention" name="sectors" required />
        <SelectInput label="Budget minimum" name="minBudget" options={["Moins de 5 000 €", "5 000 à 10 000 €", "10 000 à 25 000 €", "25 000 €+"]} required />
        <TextArea label="Exemples de missions" name="missions" required />
        <TextArea label="Références clients" name="references" />
      </FormSection>

      <FormSection title="Contact">
        <TextInput label="Contact" name="contactName" required />
        <TextInput label="Email" name="email" type="email" required />
        <TextInput label="Téléphone" name="phone" type="tel" />
        <label className="flex gap-3 text-sm leading-6 text-muted md:col-span-2">
          <input type="checkbox" name="acceptedTerms" required className="mt-1 h-4 w-4 rounded border-line text-forest" />
          J'accepte que ces informations soient utilisées pour étudier une demande de référencement dans cette version locale.
        </label>
      </FormSection>

      <button type="submit" className="btn-primary w-full justify-center sm:w-auto" disabled={status === "submitting"}>
        {status === "submitting" ? "Enregistrement..." : "Demander le référencement"}
      </button>
      {status === "success" ? (
        <p className="rounded-md border border-forest/20 bg-forest/5 p-4 text-sm leading-6 text-forest">
          Votre demande a bien été enregistrée pour cette version locale. Aucun email ni CRM réel n'est connecté dans ce MVP.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="rounded-md border border-burgundy/20 bg-burgundy/5 p-4 text-sm text-burgundy">
          La soumission locale n'a pas pu être enregistrée. Le formulaire reste un prototype local.
        </p>
      ) : null}
    </form>
  );
}

function FormSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <fieldset>
      <legend className="text-lg font-semibold text-ink">{title}</legend>
      <div className="mt-4 grid gap-4 md:grid-cols-2">{children}</div>
    </fieldset>
  );
}

function TextInput({
  label,
  name,
  type = "text",
  required,
  defaultValue
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  defaultValue?: string;
}) {
  return (
    <label className="text-sm font-medium text-ink">
      {label}
      <input name={name} type={type} required={required} defaultValue={defaultValue} className="mt-2 w-full rounded-md border border-line px-3 py-2 text-sm text-ink outline-none transition focus:border-forest" />
    </label>
  );
}

function SelectInput({ label, name, options, required }: { label: string; name: string; options: string[]; required?: boolean }) {
  return (
    <label className="text-sm font-medium text-ink">
      {label}
      <select name={name} required={required} className="mt-2 w-full rounded-md border border-line bg-white px-3 py-2 text-sm text-ink outline-none transition focus:border-forest">
        <option value="">Sélectionner</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextArea({ label, name, required }: { label: string; name: string; required?: boolean }) {
  return (
    <label className="text-sm font-medium text-ink md:col-span-2">
      {label}
      <textarea name={name} required={required} rows={5} className="mt-2 w-full rounded-md border border-line px-3 py-2 text-sm leading-6 text-ink outline-none transition focus:border-forest" />
    </label>
  );
}
