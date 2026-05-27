export type ProviderType =
  | "Agence IA"
  | "Consultant IA"
  | "Intégrateur IA"
  | "Formateur IA"
  | "Cabinet data";

export type VerificationLevel = "Exemple MVP" | "À vérifier" | "Vérifié";

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
