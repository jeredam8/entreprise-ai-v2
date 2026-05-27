import type { Provider } from "@/data/types";

export const providers: Provider[] = [
  {
    slug: "atelier-ia-conseil",
    name: "Atelier IA Conseil",
    type: "Consultant IA",
    city: "Paris",
    intervention: "Nationale",
    remote: true,
    minBudget: 8000,
    minBudgetLabel: "À partir de 8 000 €",
    teamSize: "1 à 3 personnes",
    specialties: ["Audit IA", "cadrage projet", "formation directions"],
    sectors: ["Comptabilité", "Juridique", "Services B2B"],
    stacks: ["ChatGPT Enterprise", "Microsoft 365", "Notion", "Make"],
    description:
      "Exemple MVP de consultant senior spécialisé dans le cadrage de projets IA pour directions de PME. Profil fictif utilisé pour tester les filtres, le maillage et les fiches prestataires.",
    typicalUseCases: ["Diagnostic IA", "cahier des charges", "formation comité de direction"],
    verificationLevel: "Exemple MVP",
    verificationNote: "Prestataire fictif. Données non vérifiées et non publiables en production.",
    relatedUseCases: ["automatisation-ia", "formation-ia-entreprise"]
  },
  {
    slug: "hexa-automatisation",
    name: "Hexa Automatisation",
    type: "Agence IA",
    city: "Lyon",
    intervention: "Nationale et locale",
    remote: true,
    minBudget: 10000,
    minBudgetLabel: "À partir de 10 000 €",
    teamSize: "4 à 8 personnes",
    specialties: ["Automatisation IA", "workflows no-code", "intégration CRM"],
    sectors: ["E-commerce", "Immobilier", "Services"],
    stacks: ["Make", "n8n", "HubSpot", "Airtable", "OpenAI API"],
    description:
      "Exemple MVP d'agence d'automatisation orientée PME. Le profil illustre les besoins de missions avec outils métier existants et plusieurs équipes utilisatrices.",
    typicalUseCases: ["Automatisation back-office", "qualification de leads", "reporting commercial"],
    verificationLevel: "Exemple MVP",
    verificationNote: "Prestataire fictif. À remplacer par une fiche réelle après validation manuelle.",
    relatedUseCases: ["automatisation-ia", "ia-prospection-commerciale", "integration-ia-outils-metier"]
  },
  {
    slug: "dataops-pme",
    name: "DataOps PME",
    type: "Cabinet data",
    city: "Nantes",
    intervention: "Nationale",
    remote: true,
    minBudget: 15000,
    minBudgetLabel: "À partir de 15 000 €",
    teamSize: "6 à 12 personnes",
    specialties: ["Data", "reporting IA", "gouvernance des données"],
    sectors: ["Industrie", "Assurance", "E-commerce"],
    stacks: ["Power BI", "BigQuery", "dbt", "Python", "Azure"],
    description:
      "Exemple MVP de cabinet data adapté aux projets où la qualité des données conditionne la réussite IA : reporting, consolidation, modèles internes et gouvernance.",
    typicalUseCases: ["Reporting augmenté", "préparation des données", "tableaux de bord métier"],
    verificationLevel: "Exemple MVP",
    verificationNote: "Prestataire fictif. Aucun avis ou cas client réel n'est associé.",
    relatedUseCases: ["ia-reporting", "ia-traitement-documentaire"]
  },
  {
    slug: "agentique-studio",
    name: "Agentique Studio",
    type: "Agence IA",
    city: "Paris",
    intervention: "Nationale",
    remote: true,
    minBudget: 20000,
    minBudgetLabel: "À partir de 20 000 €",
    teamSize: "5 à 10 personnes",
    specialties: ["Agents IA", "assistants internes", "orchestration"],
    sectors: ["Services B2B", "Industrie", "Support client"],
    stacks: ["LangChain", "OpenAI API", "Vercel AI SDK", "PostgreSQL"],
    description:
      "Exemple MVP de studio spécialisé dans les agents IA internes. Profil fictif utile pour représenter les projets plus techniques avec sécurité, logs et supervision.",
    typicalUseCases: ["Agent IA interne", "assistant support", "workflow multi-outils"],
    verificationLevel: "Exemple MVP",
    verificationNote: "Prestataire fictif. Ne pas présenter comme agence réelle.",
    relatedUseCases: ["agent-ia-entreprise", "ia-service-client"]
  },
  {
    slug: "rag-conseil",
    name: "RAG Conseil",
    type: "Intégrateur IA",
    city: "Bordeaux",
    intervention: "Nationale et locale",
    remote: true,
    minBudget: 18000,
    minBudgetLabel: "À partir de 18 000 €",
    teamSize: "3 à 7 personnes",
    specialties: ["RAG", "bases documentaires", "recherche interne"],
    sectors: ["Juridique", "Santé / médico-social", "Organismes de formation"],
    stacks: ["Vector databases", "Azure OpenAI", "SharePoint", "LlamaIndex"],
    description:
      "Exemple MVP d'intégrateur focalisé sur les bases documentaires internes, avec enjeux de confidentialité, sources vérifiables et validation humaine.",
    typicalUseCases: ["Base documentaire RAG", "assistant juridique interne", "support documentaire"],
    verificationLevel: "Exemple MVP",
    verificationNote: "Prestataire fictif pour prototype de fiche.",
    relatedUseCases: ["rag-base-documentaire", "ia-traitement-documentaire"]
  },
  {
    slug: "cabinet-synapse-ia",
    name: "Cabinet Synapse IA",
    type: "Consultant IA",
    city: "Lille",
    intervention: "Nationale",
    remote: true,
    minBudget: 7000,
    minBudgetLabel: "À partir de 7 000 €",
    teamSize: "2 à 4 personnes",
    specialties: ["Conduite du changement", "audit IA", "formation métiers"],
    sectors: ["RH", "Assurance", "BTP"],
    stacks: ["Microsoft Copilot", "Notion", "Miro", "Google Workspace"],
    description:
      "Exemple MVP de cabinet conseil pour accompagner les directions métier dans l'adoption, la priorisation et la gouvernance des usages IA.",
    typicalUseCases: ["Audit des usages", "charte IA", "formation managers"],
    verificationLevel: "Exemple MVP",
    verificationNote: "Prestataire fictif. Les références clients doivent être collectées plus tard.",
    relatedUseCases: ["formation-ia-entreprise", "automatisation-ia"]
  },
  {
    slug: "automatech-b2b",
    name: "Automatech B2B",
    type: "Intégrateur IA",
    city: "Toulouse",
    intervention: "Nationale et locale",
    remote: true,
    minBudget: 12000,
    minBudgetLabel: "À partir de 12 000 €",
    teamSize: "4 à 9 personnes",
    specialties: ["Intégration CRM / ERP", "automatisation commerciale", "API"],
    sectors: ["Industrie", "E-commerce", "Immobilier"],
    stacks: ["Salesforce", "HubSpot", "Odoo", "n8n", "Python"],
    description:
      "Exemple MVP d'intégrateur orienté systèmes métier, pertinent quand le projet IA doit se connecter à des données clients, devis, commandes ou tickets.",
    typicalUseCases: ["Synchronisation CRM", "assistant commercial", "traitement de demandes entrantes"],
    verificationLevel: "Exemple MVP",
    verificationNote: "Prestataire fictif de démonstration.",
    relatedUseCases: ["integration-ia-outils-metier", "ia-prospection-commerciale"]
  },
  {
    slug: "formation-ia-direction",
    name: "Formation IA Direction",
    type: "Formateur IA",
    city: "Marseille",
    intervention: "Nationale",
    remote: true,
    minBudget: 5000,
    minBudgetLabel: "À partir de 5 000 €",
    teamSize: "2 à 5 personnes",
    specialties: ["Formation IA", "acculturation CODIR", "ateliers métiers"],
    sectors: ["RH", "Services B2B", "Organismes de formation"],
    stacks: ["ChatGPT", "Claude", "Microsoft Copilot", "supports internes"],
    description:
      "Exemple MVP d'organisme de formation destiné aux directions et managers qui veulent cadrer des usages concrets sans lancer un projet technique trop tôt.",
    typicalUseCases: ["Formation direction", "atelier cas d'usage", "charte d'utilisation IA"],
    verificationLevel: "Exemple MVP",
    verificationNote: "Prestataire fictif. Certification et numéro d'organisme non vérifiés.",
    relatedUseCases: ["formation-ia-entreprise"]
  },
  {
    slug: "integria-solutions",
    name: "Intégria Solutions",
    type: "Intégrateur IA",
    city: "Paris",
    intervention: "Nationale",
    remote: false,
    minBudget: 25000,
    minBudgetLabel: "À partir de 25 000 €",
    teamSize: "10 à 20 personnes",
    specialties: ["Intégration métier", "sécurité", "déploiement SI"],
    sectors: ["Assurance", "Santé / médico-social", "Industrie"],
    stacks: ["Azure", "AWS", "SSO", "API internes", "PostgreSQL"],
    description:
      "Exemple MVP d'intégrateur adapté aux ETI avec contraintes SI, sécurité, données sensibles, déploiement contrôlé et maintenance.",
    typicalUseCases: ["Intégration SI", "assistant métier sécurisé", "déploiement multi-sites"],
    verificationLevel: "Exemple MVP",
    verificationNote: "Prestataire fictif réservé au prototype.",
    relatedUseCases: ["integration-ia-outils-metier", "agent-ia-entreprise"]
  },
  {
    slug: "opsia-france",
    name: "OpsIA France",
    type: "Agence IA",
    city: "Nantes",
    intervention: "Nationale",
    remote: true,
    minBudget: 9000,
    minBudgetLabel: "À partir de 9 000 €",
    teamSize: "3 à 6 personnes",
    specialties: ["IA opérations", "process PME", "support client"],
    sectors: ["BTP", "Immobilier", "Comptabilité"],
    stacks: ["Airtable", "Make", "OpenAI API", "Google Workspace"],
    description:
      "Exemple MVP d'agence opérationnelle pour automatiser des tâches répétitives, structurer un workflow et garder un contrôle humain sur les décisions sensibles.",
    typicalUseCases: ["Traitement documentaire", "suivi de dossiers", "support interne"],
    verificationLevel: "Exemple MVP",
    verificationNote: "Prestataire fictif. Les badges réels seront ajoutés après vérification.",
    relatedUseCases: ["ia-traitement-documentaire", "ia-service-client", "automatisation-ia"]
  }
];

export function getProviderBySlug(slug: string) {
  return providers.find((provider) => provider.slug === slug);
}

export function getRelatedProviders(slugs: string[]) {
  return providers.filter((provider) => slugs.includes(provider.slug));
}

export function getProvidersByType(type: Provider["type"]) {
  return providers.filter((provider) => provider.type === type);
}
