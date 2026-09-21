"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Suspense,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { event as track } from "@/lib/analytics";

type Kind = "project_submission" | "provider_submission" | "contact_submission";
const fieldClass =
  "mt-2 w-full rounded-md border border-line bg-white px-3 py-3 text-base text-ink";
function Field({
  name,
  label,
  type = "text",
  required = true,
  children,
  value,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  children?: ReactNode;
  value?: string;
}) {
  return (
    <label className="block text-sm font-medium text-ink">
      {label}
      {!required && " (facultatif)"}
      {children ? (
        <select name={name} required={required} className={fieldClass}>
          {children}
        </select>
      ) : type === "textarea" ? (
        <textarea
          name={name}
          required={required}
          maxLength={3000}
          rows={4}
          className={fieldClass}
          defaultValue={value}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          maxLength={300}
          autoComplete={
            type === "email"
              ? "email"
              : name === "contactName"
                ? "name"
                : name === "phone"
                  ? "tel"
                  : undefined
          }
          className={fieldClass}
          defaultValue={value}
        />
      )}
    </label>
  );
}
function Form({ kind }: { kind: Kind }) {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [error, setError] = useState("");
  const params = useSearchParams();
  const context = {
    provider: params.get("provider") || "",
    name: params.get("name") || "",
    website: params.get("website") || "",
    mode: params.get("mode") === "correction" ? "correction" : "new",
  };
  const id = useRef("");
  const started = useRef(false);
  const busy = useRef(false);
  const message = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (status === "success" || status === "error") message.current?.focus();
  }, [status]);
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (busy.current || status === "success") return;
    const form = e.currentTarget; // Capture before await: React currentTarget is cleared afterwards.
    const data = Object.fromEntries(new FormData(form).entries());
    busy.current = true;
    setStatus("sending");
    if (!id.current) id.current = crypto.randomUUID();
    const q = new URLSearchParams(window.location.search);
    let attribution: Record<string, string> = {};
    try {
      attribution = JSON.parse(
        sessionStorage.getItem("entreprise-ai-attribution") || "{}",
      );
    } catch {}
    const payload = {
      ...data,
      form_kind: kind,
      submission_id: id.current,
      providerSlug: context.provider,
      originPage: window.location.pathname,
      source: q.get("utm_source") || attribution.utm_source || "",
      medium: q.get("utm_medium") || attribution.utm_medium || "",
      campaign: q.get("utm_campaign") || attribution.utm_campaign || "",
    };
    try {
      const response = await fetch("/api/formulaire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(25000),
      });
      const result = await response.json();
      if (!response.ok || !result.ok || !result.stored) {
        if (response.status === 409) id.current = "";
        throw new Error(
          response.status === 429
            ? "Trop de tentatives. Réessayez dans une heure."
            : "La réception n’a pas pu être confirmée. Vos informations sont conservées ici : réessayez.",
        );
      }
      setStatus("success");
      track("form_success", { kind });
      form.reset();
    } catch (err) {
      setError(
        err instanceof Error && err.message.startsWith("Trop")
          ? err.message
          : "La réception n’a pas pu être confirmée. Vos informations sont conservées ici : réessayez.",
      );
      setStatus("error");
      track("form_error", { kind });
    } finally {
      busy.current = false;
    }
  }
  if (status === "success")
    return (
      <div
        ref={message}
        tabIndex={-1}
        role="status"
        className="rounded-md border border-forest/30 bg-soft p-6"
      >
        <h2 className="text-2xl font-semibold text-forest">
          Votre demande est bien enregistrée.
        </h2>
        <p className="mt-3 leading-7 text-muted">
          {kind === "provider_submission"
            ? "Nous allons examiner les informations et vous recontacter. Une inscription ne publie pas automatiquement une fiche."
            : "Nous allons lire votre message et vous répondre personnellement à l’adresse indiquée."}
        </p>
        <Link className="btn-secondary mt-5" href="/prestataires-ia">
          Revenir à l’annuaire
        </Link>
      </div>
    );
  return (
    <form
      onSubmit={submit}
      onFocus={() => {
        if (!started.current) {
          started.current = true;
          track("form_start", { kind });
        }
      }}
      className="space-y-5 rounded-md border border-line bg-white p-5 sm:p-7"
      aria-busy={status === "sending"}
    >
      <p className="text-sm text-muted">
        Seuls les champs marqués « facultatif » peuvent être laissés vides.
      </p>
      <div aria-hidden="true" className="hidden">
        <label>
          Ne pas remplir
          <input name="website_hp" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      {kind === "provider_submission" ? (
        <>
          <Field name="requestType" label="Votre demande" key={context.mode}>
            <option value={context.mode}>
              {context.mode === "correction"
                ? "Corriger une fiche existante"
                : "Créer une fiche gratuite"}
            </option>
            <option
              value={context.mode === "correction" ? "new" : "correction"}
            >
              {context.mode === "correction"
                ? "Créer une fiche gratuite"
                : "Corriger une fiche existante"}
            </option>
          </Field>
          <Field
            name="providerName"
            label="Nom de votre structure"
            value={context.name}
            key={"name" + context.name}
          />
          <Field
            name="website"
            label="Site internet (https://…)"
            type="url"
            value={context.website}
            key={"url" + context.website}
          />
          <Field name="city" label="Ville ou zone d’intervention" />
          <Field
            name="specialties"
            label="Vos prestations IA ou les corrections demandées"
            type="textarea"
          />
        </>
      ) : kind === "project_submission" ? (
        <>
          {context.name && (
            <p className="rounded-md bg-soft p-3 text-sm">
              Prestataire qui vous intéresse : <strong>{context.name}</strong>.
              Votre demande sera lue par Entreprise.ai avant toute mise en
              relation.
            </p>
          )}
          <Field
            name="need"
            label="Que souhaitez-vous améliorer dans votre entreprise ?"
            type="textarea"
          />
          <Field name="companyName" label="Votre entreprise" />
          <div className="grid gap-5 sm:grid-cols-2">
            <Field name="budget" label="Budget envisagé">
              <option>À définir ensemble</option>
              <option>Moins de 5 000 €</option>
              <option>5 000 à 15 000 €</option>
              <option>15 000 à 50 000 €</option>
              <option>Plus de 50 000 €</option>
            </Field>
            <Field name="urgency" label="Échéance">
              <option>À définir</option>
              <option>Dès que possible</option>
              <option>Dans les 3 mois</option>
              <option>Plus tard</option>
            </Field>
          </div>
        </>
      ) : (
        <Field name="message" label="Votre message" type="textarea" />
      )}
      <div className="grid gap-5 sm:grid-cols-2">
        <Field name="contactName" label="Votre nom" />
        <Field name="email" label="Votre email" type="email" />
      </div>
      <details className="text-sm">
        <summary className="cursor-pointer py-2 font-semibold text-forest">
          Ajouter des précisions (facultatif)
        </summary>
        <div className="mt-4 space-y-5">
          <Field name="phone" label="Téléphone" type="tel" required={false} />
          {kind === "provider_submission" ? (
            <>
              <Field
                name="providerType"
                label="Type de prestataire"
                required={false}
              >
                <option value="">À préciser</option>
                {[
                  "Agence IA",
                  "Consultant IA",
                  "Intégrateur IA",
                  "Formateur IA",
                  "Cabinet data",
                ].map((x) => (
                  <option key={x}>{x}</option>
                ))}
              </Field>
              <Field name="minBudget" label="Budget de départ" required={false}>
                <option value="">Non renseigné</option>
                <option>Moins de 1 000 €</option>
                <option>1 000 à 5 000 €</option>
                <option>5 000 à 15 000 €</option>
                <option>Plus de 15 000 €</option>
              </Field>
              <Field
                name="references"
                label="Exemples de missions et liens vers des réalisations"
                type="textarea"
                required={false}
              />
            </>
          ) : (
            <Field
              name="existingTools"
              label="Outils, contexte ou contraintes"
              type="textarea"
              required={false}
            />
          )}
        </div>
      </details>
      <label className="flex items-start gap-3 text-sm leading-6 text-muted">
        <input
          type="checkbox"
          name="acceptedTerms"
          required
          className="mt-1 h-5 w-5 shrink-0"
        />
        <span>
          J’accepte qu’Entreprise.ai utilise ces informations pour traiter ma
          demande et me recontacter.{" "}
          <Link href="/confidentialite" className="underline">
            Confidentialité
          </Link>
          .
        </span>
      </label>
      <p className="text-xs leading-5 text-muted">
        Ne transmettez pas de mots de passe, de données clients ou de documents
        confidentiels.
      </p>
      {status === "error" && (
        <div
          ref={message}
          tabIndex={-1}
          role="alert"
          className="rounded-md border border-red-300 p-4 text-sm text-red-800"
        >
          {error}
        </div>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full justify-center"
      >
        {status === "sending"
          ? "Enregistrement en cours…"
          : kind === "provider_submission"
            ? "Envoyer ma demande gratuite"
            : kind === "project_submission"
              ? "Parler de mon projet"
              : "Envoyer mon message"}
      </button>
    </form>
  );
}
export function ProjectForm() {
  return (
    <Suspense fallback={<p>Chargement du formulaire…</p>}>
      <Form kind="project_submission" />
    </Suspense>
  );
}
export function ProviderReferenceForm() {
  return (
    <Suspense fallback={<p>Chargement du formulaire…</p>}>
      <Form kind="provider_submission" />
    </Suspense>
  );
}
export function ContactForm() {
  return (
    <Suspense fallback={<p>Chargement du formulaire…</p>}>
      <Form kind="contact_submission" />
    </Suspense>
  );
}
