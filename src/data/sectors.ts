import type { ContentPage } from "@/data/types";

function sectorPage(input: Omit<ContentPage, "sections" | "faqs" | "relatedPages"> & Partial<Pick<ContentPage, "sections" | "faqs" | "relatedPages">>): ContentPage {
  return {
    ...input,
    sections: input.sections ?? [
      {
        title: "Problèmes fréquents",
        body:
          "Les opportunités IA viennent surtout des tâches répétitives, de la surcharge documentaire, du reporting, des relances, du support et des contrôles manuels.",
        bullets: ["tâches répétitives", "documents nombreux", "reporting lent", "support récurrent", "contrôles et conformité"]
      },
      {
        title: "Cas d'usage IA adaptés",
        body:
          "Les meilleurs premiers projets sont ceux qui s'insèrent dans un flux métier existant, avec un responsable identifié et un résultat mesurable."
      },
      {
        title: "Types de prestataires à privilégier",
        body:
          "Le choix dépend du niveau de risque : consultant pour cadrer, agence pour produire un workflow, intégrateur pour connecter au SI, formateur pour acculturer les équipes."
      },
      {
        title: "Risques spécifiques",
        body:
          "Les données clients, la confidentialité, la responsabilité métier, la validation humaine et la conformité doivent être traitées avant la mise en production."
      }
    ],
    faqs: input.faqs ?? [
      { question: "Quel premier projet IA choisir dans ce secteur ?", answer: "Un projet récurrent, mesurable, avec données accessibles et faible risque de décision automatisée." },
      { question: "Quel budget prévoir ?", answer: "Les premiers cadrages commencent souvent autour de 5 000 à 10 000 €. Les intégrations dépassent fréquemment 20 000 €." },
      { question: "Faut-il un prestataire spécialisé secteur ?", answer: "C'est préférable lorsque les données, la conformité ou le vocabulaire métier sont sensibles." },
      { question: "Comment limiter les risques ?", answer: "Limiter le périmètre, garder une validation humaine et traiter RGPD, sécurité et maintenance dès le cadrage." }
    ],
    relatedPages: input.relatedPages ?? [
      { label: "Déposer un projet IA", href: "/deposer-un-projet-ia" },
      { label: "Automatisation IA", href: "/cas-usages/automatisation-ia" },
      { label: "RGPD et IA", href: "/guides/rgpd-ia-entreprise" }
    ]
  };
}

export const sectors: ContentPage[] = [
  sectorPage({
    slug: "ia-cabinet-comptable",
    title: "IA pour cabinet comptable",
    metaTitle: "IA pour cabinets comptables : usages, prestataires et budget",
    metaDescription:
      "Cas d'usage IA pour cabinets comptables : traitement documentaire, relances, reporting, synthèses et risques de confidentialité.",
    h1: "IA pour cabinets comptables : usages, prestataires et budget",
    intro:
      "Les cabinets comptables manipulent des volumes importants de documents, relances, demandes clients et contrôles. L'IA peut aider, mais la confidentialité et la validation restent centrales.",
    summary:
      "Les premiers projets pertinents concernent le traitement documentaire, les synthèses, les relances clients, l'aide au reporting et la préparation de réponses internes.",
    examples: ["tri de pièces", "synthèse de dossier client", "relance de documents manquants", "FAQ interne", "préparation de reporting", "contrôle de cohérence"],
    budgetRows: [
      { label: "Atelier IA cabinet", budget: "5 000 à 10 000 €", complexity: "Faible", notes: "Priorisation et règles internes." },
      { label: "Traitement documentaire", budget: "12 000 à 40 000 €", complexity: "Moyenne à élevée", notes: "Validation humaine indispensable." },
      { label: "Intégration outils métier", budget: "30 000 €+", complexity: "Élevée", notes: "Droits, connecteurs, sécurité." }
    ],
    risks: ["données clients", "secret professionnel", "erreurs d'interprétation", "traçabilité"],
    questions: ["Comment les données clients sont-elles protégées ?", "Qui valide les sorties ?", "Quels outils métier sont concernés ?", "Le prestataire connaît-il les contraintes cabinet ?"],
    relatedProviders: ["atelier-ia-conseil", "opsia-france", "dataops-pme"]
  }),
  sectorPage({
    slug: "ia-cabinet-avocat",
    title: "IA pour cabinet d'avocat",
    metaTitle: "IA pour cabinets d'avocats : usages, risques et prestataires",
    metaDescription:
      "IA pour cabinets d'avocats : recherche documentaire, synthèse, traitement de dossiers, confidentialité et choix du prestataire.",
    h1: "IA pour cabinets d'avocats : usages, prestataires et budget",
    intro:
      "Dans un cabinet d'avocat, l'IA peut assister la recherche, la synthèse et l'organisation documentaire. Elle ne remplace ni l'analyse juridique ni la responsabilité professionnelle.",
    summary:
      "Le bon projet IA juridique privilégie les sources internes, les citations vérifiables, la confidentialité et une validation humaine systématique.",
    examples: ["recherche documentaire interne", "synthèse de pièces", "préparation de chronologie", "FAQ interne", "classement de dossiers", "veille contrôlée"],
    budgetRows: [
      { label: "Cadrage IA juridique", budget: "6 000 à 15 000 €", complexity: "Moyenne", notes: "Risques et sources." },
      { label: "RAG documentaire", budget: "20 000 à 70 000 €", complexity: "Élevée", notes: "Sources, droits, citations." },
      { label: "Intégration sécurisée", budget: "50 000 €+", complexity: "Très élevée", notes: "Confidentialité renforcée." }
    ],
    risks: ["secret professionnel", "hallucinations", "sources non vérifiées", "données sensibles"],
    questions: ["Les réponses citent-elles les sources ?", "Où les données sont-elles hébergées ?", "Comment éviter les hallucinations ?", "Quel contrôle humain est prévu ?"],
    relatedProviders: ["rag-conseil", "integria-solutions", "atelier-ia-conseil"]
  }),
  sectorPage({
    slug: "ia-ecommerce",
    title: "IA pour e-commerce",
    metaTitle: "IA pour e-commerce : automatisation, catalogue, support, reporting",
    metaDescription:
      "Cas d'usage IA pour e-commerce : catalogue, support client, reporting, prospection, contenu produit et automatisation opérationnelle.",
    h1: "IA pour e-commerce : usages, prestataires et budget",
    intro:
      "L'e-commerce combine catalogue, support, acquisition, reporting et opérations. L'IA peut aider à prioriser les actions, produire des contenus contrôlés et automatiser des tâches récurrentes.",
    summary:
      "Les meilleurs projets e-commerce restent connectés aux données produit, aux commandes, aux tickets et aux contraintes marketplace ou CRM.",
    examples: ["contenu catalogue", "analyse des ventes", "support client", "reporting hebdomadaire", "veille concurrence", "qualification de leads B2B", "traitement de tickets"],
    budgetRows: [
      { label: "Audit opportunités", budget: "5 000 à 12 000 €", complexity: "Faible à moyenne", notes: "Catalogue, support, reporting." },
      { label: "Workflow catalogue ou support", budget: "10 000 à 35 000 €", complexity: "Moyenne", notes: "Contrôle qualité nécessaire." },
      { label: "Intégration CRM / ERP", budget: "25 000 €+", complexity: "Élevée", notes: "Outils et données connectés." }
    ],
    risks: ["contenu produit erroné", "données clients", "automatisation marketing excessive", "dépendance marketplace"],
    questions: ["Quelles données produit sont fiables ?", "Le workflow touche-t-il au CRM ?", "Comment valider les contenus ?", "Quels KPI suivra-t-on ?"],
    relatedProviders: ["hexa-automatisation", "dataops-pme", "automatech-b2b"]
  }),
  sectorPage({
    slug: "ia-immobilier",
    title: "IA pour immobilier",
    metaTitle: "IA pour immobilier : leads, annonces, dossiers et support",
    metaDescription:
      "Usages IA pour agences et réseaux immobiliers : qualification de leads, annonces, dossiers, reporting et support client.",
    h1: "IA pour immobilier : usages, prestataires et budget",
    intro:
      "Dans l'immobilier, l'IA peut aider à qualifier des demandes, préparer des annonces, structurer des dossiers et améliorer le suivi commercial.",
    summary:
      "Les projets utiles combinent automatisation commerciale, traitement documentaire et contrôle humain sur les informations publiées.",
    examples: ["qualification acquéreurs", "préparation d'annonces", "synthèse de dossiers", "relances", "FAQ locataires", "reporting agence"],
    budgetRows: [
      { label: "Workflow commercial", budget: "8 000 à 20 000 €", complexity: "Moyenne", notes: "CRM et relances." },
      { label: "Traitement dossiers", budget: "12 000 à 35 000 €", complexity: "Moyenne", notes: "Documents et validations." },
      { label: "Déploiement réseau", budget: "35 000 €+", complexity: "Élevée", notes: "Multi-sites et adoption." }
    ],
    risks: ["données personnelles", "annonces inexactes", "discrimination involontaire", "CRM mal synchronisé"],
    questions: ["Quels champs CRM sont fiables ?", "Qui valide les annonces ?", "Quelles données personnelles sont traitées ?", "Comment gérer les exceptions ?"],
    relatedProviders: ["hexa-automatisation", "automatech-b2b", "opsia-france"]
  }),
  sectorPage({
    slug: "ia-industrie",
    title: "IA pour industrie",
    metaTitle: "IA pour industrie : maintenance, qualité, reporting, documents",
    metaDescription:
      "Cas d'usage IA industriels : maintenance, qualité, documentation, reporting, support interne et intégration SI.",
    h1: "IA pour industrie : usages, prestataires et budget",
    intro:
      "L'industrie présente des opportunités IA sur la documentation, la qualité, la maintenance, le support interne et l'analyse opérationnelle.",
    summary:
      "Les projets industriels nécessitent souvent un intégrateur ou un cabinet data, car les systèmes existants et les contraintes de sécurité comptent autant que le modèle IA.",
    examples: ["assistant documentation technique", "analyse incidents", "reporting production", "support maintenance", "contrôle qualité documentaire", "synthèse de tickets"],
    budgetRows: [
      { label: "Diagnostic IA industriel", budget: "8 000 à 18 000 €", complexity: "Moyenne", notes: "Cartographie processus." },
      { label: "Assistant documentaire", budget: "25 000 à 70 000 €", complexity: "Élevée", notes: "RAG et droits." },
      { label: "Intégration SI", budget: "60 000 €+", complexity: "Très élevée", notes: "Sécurité, API, maintenance." }
    ],
    risks: ["données techniques sensibles", "sécurité SI", "erreurs opérationnelles", "intégration aux systèmes existants"],
    questions: ["Quels systèmes doivent être connectés ?", "Quelle donnée fait autorité ?", "Quels risques de sécurité existent ?", "Comment tester en environnement maîtrisé ?"],
    relatedProviders: ["integria-solutions", "dataops-pme", "agentique-studio"]
  }),
  sectorPage({
    slug: "ia-btp",
    title: "IA pour BTP",
    metaTitle: "IA pour BTP : dossiers, devis, suivi chantier et reporting",
    metaDescription:
      "Usages IA pour entreprises du BTP : traitement de dossiers, devis, suivi chantier, reporting, relances et documentation.",
    h1: "IA pour BTP : usages, prestataires et budget",
    intro:
      "Le BTP génère beaucoup de documents, demandes, comptes rendus, devis, relances et contraintes de suivi. L'IA peut réduire la charge administrative si elle reste contrôlée.",
    summary:
      "Les premiers projets pertinents concernent le traitement documentaire, les comptes rendus, le suivi de dossiers et les relances.",
    examples: ["synthèse de comptes rendus", "tri de documents chantier", "préparation de devis", "relance pièces manquantes", "reporting opérationnel", "FAQ interne"],
    budgetRows: [
      { label: "Automatisation administrative", budget: "8 000 à 22 000 €", complexity: "Moyenne", notes: "Documents et relances." },
      { label: "Assistant documentaire", budget: "15 000 à 45 000 €", complexity: "Moyenne à élevée", notes: "Sources et validations." },
      { label: "Intégration outils chantier", budget: "40 000 €+", complexity: "Élevée", notes: "Connecteurs et droits." }
    ],
    risks: ["documents incomplets", "responsabilité technique", "données fournisseurs", "adoption terrain"],
    questions: ["Quels documents reviennent le plus ?", "Qui valide les devis ?", "Quels outils chantier sont utilisés ?", "Comment former les équipes ?"],
    relatedProviders: ["opsia-france", "cabinet-synapse-ia", "automatech-b2b"]
  }),
  sectorPage({
    slug: "ia-rh",
    title: "IA pour RH",
    metaTitle: "IA pour RH : formation, support interne, documents et conformité",
    metaDescription:
      "Cas d'usage IA RH : support interne, formation, documents, reporting RH, risques RGPD et sélection de prestataires.",
    h1: "IA pour RH : usages, prestataires et budget",
    intro:
      "Les RH peuvent utiliser l'IA pour structurer des réponses internes, préparer des supports, traiter des documents et former les managers, avec une vigilance forte sur les données personnelles.",
    summary:
      "L'IA RH doit éviter les décisions automatisées opaques et privilégier l'assistance, la documentation et la formation.",
    examples: ["FAQ RH interne", "synthèse de politiques", "formation managers", "préparation onboarding", "tri documentaire", "reporting RH"],
    budgetRows: [
      { label: "Formation IA RH", budget: "3 000 à 12 000 €", complexity: "Faible", notes: "Acculturation et règles." },
      { label: "Assistant RH documentaire", budget: "15 000 à 45 000 €", complexity: "Élevée", notes: "Données personnelles." },
      { label: "Intégration SIRH", budget: "40 000 €+", complexity: "Très élevée", notes: "Droits et conformité." }
    ],
    risks: ["données salariés", "biais", "décisions automatisées", "confidentialité"],
    questions: ["Quelles données RH sont exclues ?", "Le DPO est-il impliqué ?", "Quel humain valide ?", "Le prestataire comprend-il les risques RH ?"],
    relatedProviders: ["formation-ia-direction", "cabinet-synapse-ia", "rag-conseil"]
  }),
  sectorPage({
    slug: "ia-assurance",
    title: "IA pour assurance",
    metaTitle: "IA pour assurance : dossiers, support, conformité, reporting",
    metaDescription:
      "Usages IA dans l'assurance : traitement de dossiers, support client, conformité, reporting et intégration sécurisée.",
    h1: "IA pour assurance : usages, prestataires et budget",
    intro:
      "L'assurance combine données sensibles, volumes documentaires et exigences de conformité. L'IA peut assister les équipes, mais le cadre doit être strict.",
    summary:
      "Les meilleurs projets visent l'assistance documentaire, le support et le reporting, avec validation humaine et auditabilité.",
    examples: ["synthèse de dossier", "tri de pièces", "support conseiller", "base documentaire", "reporting sinistres", "détection d'anomalies"],
    budgetRows: [
      { label: "Cadrage conformité", budget: "8 000 à 18 000 €", complexity: "Moyenne", notes: "Risques et données." },
      { label: "Assistant documentaire", budget: "25 000 à 80 000 €", complexity: "Élevée", notes: "Sources et droits." },
      { label: "Intégration sécurisée", budget: "80 000 €+", complexity: "Très élevée", notes: "SI, logs, audit." }
    ],
    risks: ["données sensibles", "responsabilité", "auditabilité", "explicabilité"],
    questions: ["Quelles décisions restent humaines ?", "Comment auditer les sorties ?", "Quels sous-traitants traitent les données ?", "Quelle traçabilité est conservée ?"],
    relatedProviders: ["integria-solutions", "dataops-pme", "rag-conseil"]
  }),
  sectorPage({
    slug: "ia-organisme-formation",
    title: "IA pour organisme de formation",
    metaTitle: "IA pour organismes de formation : contenus, support, administratif",
    metaDescription:
      "Cas d'usage IA pour organismes de formation : supports, support apprenants, administratif, conformité Qualiopi et budget.",
    h1: "IA pour organismes de formation : usages, prestataires et budget",
    intro:
      "Un organisme de formation peut utiliser l'IA pour préparer des supports, répondre aux apprenants, structurer des contenus et automatiser des tâches administratives.",
    summary:
      "Le contenu généré doit rester validé par des experts, surtout lorsque la formation engage une certification, une conformité ou un résultat professionnel.",
    examples: ["préparation supports", "FAQ apprenants", "synthèse feedback", "automatisation administrative", "base documentaire formateurs", "reporting qualité"],
    budgetRows: [
      { label: "Atelier usages IA", budget: "3 000 à 8 000 €", complexity: "Faible", notes: "Cas d'usage et règles." },
      { label: "Assistant contenu", budget: "10 000 à 30 000 €", complexity: "Moyenne", notes: "Validation pédagogique." },
      { label: "Support apprenants connecté", budget: "25 000 €+", complexity: "Élevée", notes: "Données et intégration LMS." }
    ],
    risks: ["contenu non validé", "droits d'auteur", "données apprenants", "conformité qualité"],
    questions: ["Qui valide les contenus ?", "Quels supports sont réutilisables ?", "Le LMS doit-il être connecté ?", "Comment gérer les droits ?"],
    relatedProviders: ["formation-ia-direction", "rag-conseil", "cabinet-synapse-ia"]
  }),
  sectorPage({
    slug: "ia-sante-medico-social",
    title: "IA santé et médico-social",
    metaTitle: "IA santé médico-social : usages, confidentialité et prestataires",
    metaDescription:
      "Usages IA dans la santé et le médico-social : documentation, support interne, administratif, risques données sensibles et budget.",
    h1: "IA pour santé et médico-social : usages, prestataires et budget",
    intro:
      "Dans la santé et le médico-social, l'IA doit être abordée avec prudence. Les premiers usages doivent rester administratifs, documentaires ou d'assistance interne, avec validation humaine.",
    summary:
      "Les projets doivent exclure toute décision médicale automatisée non cadrée et traiter données sensibles, hébergement et responsabilité dès le début.",
    examples: ["synthèse administrative", "FAQ interne", "traitement documentaire", "support qualité", "formation équipes", "reporting opérationnel"],
    budgetRows: [
      { label: "Cadrage risques", budget: "8 000 à 20 000 €", complexity: "Moyenne", notes: "Données et conformité." },
      { label: "Assistant documentaire interne", budget: "25 000 à 80 000 €", complexity: "Élevée", notes: "Droits et hébergement." },
      { label: "Intégration sécurisée", budget: "80 000 €+", complexity: "Très élevée", notes: "Gouvernance stricte." }
    ],
    risks: ["données de santé", "hébergement", "responsabilité", "validation humaine"],
    questions: ["Les données de santé sont-elles concernées ?", "Quel hébergement est prévu ?", "Quelles décisions sont exclues ?", "Qui valide les réponses ?"],
    relatedProviders: ["integria-solutions", "rag-conseil", "formation-ia-direction"]
  })
];

export function getSectorBySlug(slug: string) {
  return sectors.find((sector) => sector.slug === slug);
}
