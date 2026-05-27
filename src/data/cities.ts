import type { CityPage } from "@/data/types";

const defaultFaqs = (city: string) => [
  {
    question: `Faut-il choisir une agence IA basée à ${city} ?`,
    answer:
      "La proximité peut aider pour les ateliers de cadrage, mais beaucoup de missions IA se pilotent à distance. Le critère prioritaire reste l'adéquation entre spécialité, budget, secteur et contraintes techniques."
  },
  {
    question: "Entreprise.ai référence-t-il déjà des prestataires réels dans cette ville ?",
    answer:
      "Cette V2 locale utilise des exemples MVP. Les fiches réelles devront être ajoutées après vérification manuelle des prestataires."
  },
  {
    question: "Quel budget prévoir pour une agence IA locale ?",
    answer:
      "Les premiers cadrages se situent souvent entre 5 000 € et 10 000 €. Les intégrations, RAG ou agents connectés dépassent fréquemment 20 000 €."
  },
  {
    question: "Comment déposer un projet IA ?",
    answer:
      "Le formulaire de dépôt permet de décrire le besoin, le budget, les outils existants et les contraintes pour préparer une shortlist de prestataires adaptés."
  }
];

export const cities: CityPage[] = [
  {
    slug: "agence-ia-paris",
    city: "Paris",
    metaTitle: "Agence IA Paris : trouver un prestataire IA pour PME et ETI",
    metaDescription:
      "Page locale pour rechercher une agence IA à Paris : cas d'usage, secteurs, budgets indicatifs et dépôt de projet.",
    h1: "Agence IA à Paris : sélectionner un prestataire adapté",
    intro:
      "Paris concentre de nombreux prestataires IA, cabinets data, consultants et intégrateurs. Pour une PME ou ETI, l'enjeu est de filtrer par spécialité réelle plutôt que par visibilité commerciale.",
    sectors: ["Services B2B", "Assurance", "Juridique", "E-commerce", "Santé / médico-social"],
    useCases: ["RAG documentaire", "agent IA interne", "intégration SI", "formation direction"],
    faqs: defaultFaqs("Paris")
  },
  {
    slug: "agence-ia-lyon",
    city: "Lyon",
    metaTitle: "Agence IA Lyon : prestataires IA pour entreprises",
    metaDescription:
      "Trouver une agence IA à Lyon pour automatisation, data, CRM, support ou formation IA en PME et ETI.",
    h1: "Agence IA à Lyon : projets IA pour PME et ETI",
    intro:
      "À Lyon, les besoins IA concernent souvent l'industrie, les services, l'e-commerce et les directions commerciales. Le choix du prestataire doit intégrer les outils existants et les contraintes métier.",
    sectors: ["Industrie", "E-commerce", "Services", "Immobilier"],
    useCases: ["Automatisation IA", "intégration CRM", "reporting IA", "prospection commerciale"],
    faqs: defaultFaqs("Lyon")
  },
  {
    slug: "agence-ia-marseille",
    city: "Marseille",
    metaTitle: "Agence IA Marseille : prestataires IA et formation entreprise",
    metaDescription:
      "Sélectionner une agence IA à Marseille pour formation, automatisation, support et projets IA B2B.",
    h1: "Agence IA à Marseille : trouver un prestataire IA",
    intro:
      "Les entreprises de Marseille peuvent chercher un prestataire IA pour former les équipes, automatiser des tâches ou structurer un premier projet. La clarté du brief reste déterminante.",
    sectors: ["Formation", "Services", "Immobilier", "BTP"],
    useCases: ["Formation IA", "support client", "traitement documentaire", "automatisation administrative"],
    faqs: defaultFaqs("Marseille")
  },
  {
    slug: "agence-ia-bordeaux",
    city: "Bordeaux",
    metaTitle: "Agence IA Bordeaux : RAG, data et automatisation",
    metaDescription:
      "Prestataires IA à Bordeaux pour bases documentaires, automatisation, data, support et projets PME / ETI.",
    h1: "Agence IA à Bordeaux : sélectionner un prestataire",
    intro:
      "Bordeaux est pertinent pour des projets IA autour de la documentation, des services, de l'e-commerce et de l'automatisation. La shortlist doit rester fondée sur les compétences vérifiables.",
    sectors: ["Juridique", "Services", "E-commerce", "Formation"],
    useCases: ["RAG base documentaire", "traitement documentaire", "automatisation IA", "formation IA"],
    faqs: defaultFaqs("Bordeaux")
  },
  {
    slug: "agence-ia-nantes",
    city: "Nantes",
    metaTitle: "Agence IA Nantes : data, automatisation et prestataires IA",
    metaDescription:
      "Rechercher une agence IA à Nantes pour data, reporting, automatisation, traitement documentaire et projets PME.",
    h1: "Agence IA à Nantes : prestataires IA pour entreprises",
    intro:
      "À Nantes, les projets IA peuvent mêler data, opérations et automatisation. Le bon prestataire doit comprendre les données disponibles et le niveau d'intégration attendu.",
    sectors: ["Industrie", "E-commerce", "Comptabilité", "Services"],
    useCases: ["Reporting IA", "traitement documentaire", "automatisation IA", "support interne"],
    faqs: defaultFaqs("Nantes")
  },
  {
    slug: "agence-ia-lille",
    city: "Lille",
    metaTitle: "Agence IA Lille : consultants IA, formation et automatisation",
    metaDescription:
      "Trouver un consultant ou une agence IA à Lille pour audit, formation, automatisation et conduite du changement.",
    h1: "Agence IA à Lille : sélectionner un consultant ou prestataire",
    intro:
      "Les projets IA à Lille peuvent concerner les fonctions support, RH, assurance, commerce ou opérations. Un cadrage clair évite de choisir un prestataire trop généraliste.",
    sectors: ["RH", "Assurance", "Services", "E-commerce"],
    useCases: ["Formation IA", "audit IA", "automatisation", "support interne"],
    faqs: defaultFaqs("Lille")
  },
  {
    slug: "agence-ia-toulouse",
    city: "Toulouse",
    metaTitle: "Agence IA Toulouse : intégration IA et automatisation",
    metaDescription:
      "Prestataires IA à Toulouse pour intégration CRM / ERP, automatisation commerciale, industrie et projets B2B.",
    h1: "Agence IA à Toulouse : intégration et automatisation IA",
    intro:
      "Toulouse est un bassin pertinent pour les projets d'intégration, d'industrie et d'automatisation. Les contraintes SI doivent être clarifiées avant toute sélection.",
    sectors: ["Industrie", "Services B2B", "Immobilier", "E-commerce"],
    useCases: ["Intégration IA outils métier", "agent IA", "automatisation commerciale", "reporting"],
    faqs: defaultFaqs("Toulouse")
  }
];

export function getCityBySlug(slug: string) {
  return cities.find((city) => city.slug === slug);
}
