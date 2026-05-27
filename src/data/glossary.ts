import type { GlossaryEntry } from "@/data/types";

export const glossary: GlossaryEntry[] = [
  {
    slug: "agence-ia",
    term: "Agence IA",
    definition: "Prestataire structuré qui conçoit et livre des projets IA pour des entreprises.",
    b2bExplanation:
      "Une agence IA peut réunir cadrage, automatisation, développement, intégration, design de workflow, formation et maintenance.",
    example: "Une PME confie à une agence IA la création d'un assistant support connecté à sa base documentaire.",
    relatedPages: [{ label: "Agences IA", href: "/agences-ia" }, { label: "Comment choisir une agence IA", href: "/guides/comment-choisir-agence-ia" }]
  },
  {
    slug: "consultant-ia",
    term: "Consultant IA",
    definition: "Expert indépendant ou petite structure qui aide à cadrer, prioriser ou piloter un projet IA.",
    b2bExplanation: "Le consultant IA est souvent adapté aux audits, formations, cahiers des charges et premiers projets à périmètre maîtrisé.",
    example: "Une direction générale demande à un consultant IA d'identifier les trois cas d'usage les plus rentables.",
    relatedPages: [{ label: "Consultants IA", href: "/consultants-ia" }, { label: "Agence ou consultant IA", href: "/guides/agence-ia-ou-consultant-ia" }]
  },
  {
    slug: "integrateur-ia",
    term: "Intégrateur IA",
    definition: "Prestataire qui connecte des briques IA aux outils et systèmes d'information de l'entreprise.",
    b2bExplanation: "Il intervient lorsque l'IA doit lire, écrire ou orchestrer des actions dans un CRM, ERP, SIRH, ticketing ou stockage documentaire.",
    example: "Une ETI choisit un intégrateur IA pour connecter un agent interne à son CRM et à ses droits d'accès.",
    relatedPages: [{ label: "Intégrateurs IA", href: "/integrateurs-ia" }, { label: "Intégration IA outils métier", href: "/cas-usages/integration-ia-outils-metier" }]
  },
  {
    slug: "agent-ia",
    term: "Agent IA",
    definition: "Système IA capable de planifier ou préparer plusieurs actions pour atteindre un objectif donné.",
    b2bExplanation: "En entreprise, un agent IA doit être limité, journalisé, supervisé et relié à des droits précis.",
    example: "Un agent prépare une synthèse client puis propose une action commerciale à valider.",
    relatedPages: [{ label: "Agent IA entreprise", href: "/cas-usages/agent-ia-entreprise" }]
  },
  {
    slug: "rag",
    term: "RAG",
    definition: "Méthode qui combine génération IA et recherche dans une base documentaire pour produire des réponses sourcées.",
    b2bExplanation: "Le RAG est utile pour interroger des procédures, contrats, fiches techniques ou bases de connaissance internes.",
    example: "Un assistant RAG répond à une question RH en citant la politique interne pertinente.",
    relatedPages: [{ label: "RAG base documentaire", href: "/cas-usages/rag-base-documentaire" }]
  },
  {
    slug: "automatisation-ia",
    term: "Automatisation IA",
    definition: "Utilisation de l'IA pour accélérer ou assister un processus répétitif.",
    b2bExplanation: "Elle peut combiner extraction, classification, génération de réponse, enrichissement de données et validation humaine.",
    example: "Un workflow classe des demandes entrantes et prépare une réponse pour validation.",
    relatedPages: [{ label: "Automatisation IA", href: "/cas-usages/automatisation-ia" }]
  },
  {
    slug: "chatbot-ia",
    term: "Chatbot IA",
    definition: "Interface conversationnelle qui répond à des questions à partir de règles, documents ou modèles IA.",
    b2bExplanation: "Un chatbot entreprise doit gérer les limites, l'escalade humaine, le ton et les données personnelles.",
    example: "Un chatbot support répond aux questions simples puis ouvre un ticket si le sujet est sensible.",
    relatedPages: [{ label: "Chatbot IA entreprise", href: "/cas-usages/chatbot-ia-entreprise" }]
  },
  {
    slug: "audit-ia",
    term: "Audit IA",
    definition: "Analyse structurée des opportunités, risques et priorités IA d'une entreprise.",
    b2bExplanation: "L'audit sert à décider quels cas d'usage lancer, dans quel ordre, avec quel budget et quelles protections.",
    example: "Une PME réalise un audit IA avant de choisir entre formation, automatisation et RAG.",
    relatedPages: [{ label: "Réussir un projet IA PME", href: "/guides/reussir-projet-ia-pme" }]
  },
  {
    slug: "formation-ia",
    term: "Formation IA",
    definition: "Parcours d'acculturation et de pratique destiné aux dirigeants, managers ou équipes métier.",
    b2bExplanation: "Une formation utile adapte les exemples au métier et fixe les règles internes d'usage.",
    example: "Un CODIR suit une formation IA pour distinguer les usages réalistes des risques.",
    relatedPages: [{ label: "Formation IA entreprise", href: "/cas-usages/formation-ia-entreprise" }]
  },
  {
    slug: "llm",
    term: "LLM",
    definition: "Grand modèle de langage capable de comprendre et générer du texte.",
    b2bExplanation: "Les LLM servent à rédiger, classifier, résumer, interroger des documents et assister des workflows.",
    example: "Un LLM résume des tickets support pour aider un manager à suivre les irritants récurrents.",
    relatedPages: [{ label: "Glossaire IA B2B", href: "/glossaire" }]
  },
  {
    slug: "donnees-sensibles",
    term: "Données sensibles",
    definition: "Données nécessitant une protection renforcée en raison de leur nature ou de leur impact potentiel.",
    b2bExplanation: "RH, santé, juridique, finance, clients et secrets d'affaires exigent un cadrage strict avant usage IA.",
    example: "Un projet d'assistant RH doit exclure certaines données ou utiliser un environnement sécurisé.",
    relatedPages: [{ label: "RGPD et IA", href: "/guides/rgpd-ia-entreprise" }]
  },
  {
    slug: "hallucination",
    term: "Hallucination",
    definition: "Réponse IA fausse ou inventée présentée comme plausible.",
    b2bExplanation: "Les hallucinations se réduisent par sources, tests, garde-fous, validation humaine et limitation du périmètre.",
    example: "Un assistant documentaire cite une procédure inexistante : la validation humaine doit détecter l'erreur.",
    relatedPages: [{ label: "RAG base documentaire", href: "/cas-usages/rag-base-documentaire" }]
  },
  {
    slug: "prompt-engineering",
    term: "Prompt engineering",
    definition: "Conception d'instructions pour guider le comportement d'un modèle IA.",
    b2bExplanation: "En entreprise, le prompt n'est qu'une partie du système : données, tests, sécurité et maintenance comptent autant.",
    example: "Un prompt standardise la synthèse de comptes rendus commerciaux.",
    relatedPages: [{ label: "Questions à poser", href: "/guides/questions-a-poser-prestataire-ia" }]
  },
  {
    slug: "workflow-automation",
    term: "Workflow automation",
    definition: "Automatisation d'une suite d'étapes métier entre plusieurs outils.",
    b2bExplanation: "Elle relie souvent formulaires, emails, CRM, documents, validation humaine et reporting.",
    example: "Une demande entrante déclenche une qualification, une synthèse et une tâche CRM.",
    relatedPages: [{ label: "Automatisation IA", href: "/cas-usages/automatisation-ia" }]
  },
  {
    slug: "no-code-automation",
    term: "No-code automation",
    definition: "Automatisation construite avec des outils visuels ou peu de code.",
    b2bExplanation: "Approche utile pour tester vite, mais qui nécessite gouvernance, documentation et maintenance.",
    example: "Un workflow Make prépare une réponse support à partir d'un formulaire.",
    relatedPages: [{ label: "Automatisation IA", href: "/cas-usages/automatisation-ia" }]
  },
  {
    slug: "ai-act",
    term: "AI Act",
    definition: "Cadre réglementaire européen sur les systèmes d'intelligence artificielle.",
    b2bExplanation: "Il impose une attention particulière aux usages à risque, à la transparence et à la gouvernance.",
    example: "Une entreprise évalue si son cas d'usage IA touche une décision sensible ou réglementée.",
    relatedPages: [{ label: "RGPD et IA", href: "/guides/rgpd-ia-entreprise" }]
  },
  {
    slug: "rgpd",
    term: "RGPD",
    definition: "Règlement européen qui encadre le traitement des données personnelles.",
    b2bExplanation: "Tout projet IA manipulant des données personnelles doit clarifier finalité, base légale, sous-traitance, hébergement et droits.",
    example: "Un chatbot client doit préciser comment les conversations contenant des données personnelles sont conservées.",
    relatedPages: [{ label: "RGPD et IA", href: "/guides/rgpd-ia-entreprise" }]
  }
];
