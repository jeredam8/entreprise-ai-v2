export type ProviderType =
  | "Agence IA"
  | "Consultant IA"
  | "Intégrateur IA"
  | "Formateur IA"
  | "Cabinet data";

// « Exemple MVP » a été retiré le 26/07/2026 en même temps que les fiches
// fictives : le typage interdit désormais de réintroduire une fiche inventée.
export type VerificationLevel = "Vérifié" | "Déclaratif";

/** Faits légaux issus du répertoire Sirene (API recherche-entreprises.api.gouv.fr).
 *  Absents si l'unité est non diffusible (droit d'opposition d'un entrepreneur
 *  individuel) — dans ce cas la fiche ne porte aucune donnée légale. */
export type LegalIdentity = {
  siren: string;
  legalForm?: string;
  naf?: string;
  createdAt?: string;
  headcount?: string;
  headOfficeCity?: string;
  headOfficePostalCode?: string;
  sourceUrl: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type RelatedPage = {
  label: string;
  href: string;
  description?: string;
};

export type Provider = {
  slug: string;
  name: string;
  type: ProviderType;
  city: string;
  intervention: "Nationale" | "Locale" | "Nationale et locale";
  remote: boolean;
  minBudget: number;
  minBudgetLabel: string;
  teamSize: string;
  specialties: string[];
  sectors: string[];
  stacks: string[];
  description: string;
  typicalUseCases: string[];
  verificationLevel: VerificationLevel;
  verificationNote: string;
  relatedUseCases: string[];
  /** Site officiel du prestataire. */
  website?: string;
  /** Faits légaux vérifiés au répertoire Sirene. */
  legal?: LegalIdentity;
  /** Date du dernier contrôle des données (AAAA-MM-JJ). */
  verifiedAt?: string;
  /** Page d'où le positionnement a été relevé (le texte est reformulé, jamais copié). */
  sourceUrl?: string;
};

export type ContentSection = {
  title: string;
  body: string;
  bullets?: string[];
};

export type BudgetRow = {
  label: string;
  budget: string;
  complexity: string;
  notes: string;
};

export type ContentPage = {
  updatedAt?: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  summary: string;
  sections: ContentSection[];
  examples?: string[];
  quickFacts?: {
    objective: string;
    providers: string;
    budget: string;
    complexity: string;
    timeline: string;
    vigilance: string;
  };
  budgetRows?: BudgetRow[];
  risks?: string[];
  questions?: string[];
  faqs: FaqItem[];
  relatedPages: RelatedPage[];
  relatedProviders: string[];
};

export type CityPage = {
  slug: string;
  city: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sectors: string[];
  useCases: string[];
  faqs: FaqItem[];
};

export type GlossaryEntry = {
  slug: string;
  term: string;
  definition: string;
  b2bExplanation: string;
  example: string;
  relatedPages: RelatedPage[];
};
