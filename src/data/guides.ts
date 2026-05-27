import type { ContentPage } from "@/data/types";

const commonRelated = [
  { label: "Déposer un projet IA", href: "/deposer-un-projet-ia", description: "Faire qualifier un besoin et préparer une shortlist." },
  { label: "Types de prestataires IA", href: "/prestataires-ia", description: "Comparer les types de prestataires disponibles." }
];

export const guides: ContentPage[] = [
  {
    slug: "comment-choisir-agence-ia",
    title: "Comment choisir une agence IA ?",
    metaTitle: "Comment choisir une agence IA pour une PME ou ETI",
    metaDescription:
      "Méthode pratique pour choisir une agence IA : spécialités, sécurité, références, devis, cadrage et questions à poser avant de signer.",
    h1: "Comment choisir une agence IA ?",
    intro:
      "Choisir une agence IA ne consiste pas à retenir le discours le plus ambitieux. Pour une PME ou une ETI, le bon choix dépend du problème métier, du niveau d'intégration, des données disponibles, du budget et de la capacité à maintenir la solution.",
    summary:
      "La bonne agence IA est celle qui sait cadrer le besoin, expliquer les limites, sécuriser les données, travailler avec vos outils existants et livrer une solution exploitable par vos équipes.",
    sections: [
      {
        title: "Clarifier le problème avant de comparer les prestataires",
        body:
          "Une agence IA sérieuse commence par comprendre le processus concerné, les utilisateurs, les données, les contraintes de validation et le résultat business attendu.",
        bullets: ["process concerné", "équipes utilisatrices", "données disponibles", "outils existants", "critères de succès"]
      },
      {
        title: "Distinguer spécialité technique et expérience métier",
        body:
          "Une agence peut être excellente en automatisation mais moins pertinente pour un projet RAG documentaire sensible. L'expérience sectorielle compte quand les risques réglementaires ou métiers sont élevés."
      },
      {
        title: "Comparer les devis sur le cadrage, pas seulement le prix",
        body:
          "Un devis utile précise les livrables, les hypothèses, les exclusions, les jalons, les rôles côté client et les conditions de maintenance. Un prix bas sans cadrage crée souvent un risque de dérive."
      },
      {
        title: "Vérifier sécurité, RGPD et maintenance",
        body:
          "Les questions de données personnelles, d'accès aux outils, de logs, de supervision et de validation humaine doivent être traitées avant le lancement, pas après la mise en production."
      }
    ],
    budgetRows: [
      { label: "Audit ou cadrage", budget: "5 000 à 12 000 €", complexity: "Faible à moyenne", notes: "Utile avant une intégration." },
      { label: "Automatisation simple", budget: "8 000 à 20 000 €", complexity: "Moyenne", notes: "Dépend des outils et des validations." },
      { label: "Projet RAG ou agent interne", budget: "18 000 à 60 000 €+", complexity: "Élevée", notes: "Données, sécurité et maintenance critiques." }
    ],
    risks: ["références imprécises", "promesses techniques non testées", "absence de maintenance", "données sensibles mal cadrées", "devis non comparable"],
    questions: [
      "Quel problème métier précis allez-vous résoudre ?",
      "Quelles données seront utilisées et où seront-elles hébergées ?",
      "Quels livrables seront remis à chaque étape ?",
      "Comment les erreurs ou hallucinations seront-elles contrôlées ?",
      "Qui maintient la solution après la livraison ?",
      "Avez-vous déjà traité un cas similaire dans notre secteur ?"
    ],
    faqs: [
      { question: "Faut-il choisir une agence IA généraliste ou spécialisée ?", answer: "Une agence généraliste peut convenir pour un audit ou un premier prototype. Un projet avec données sensibles, intégration SI ou contraintes métier fortes justifie un prestataire plus spécialisé." },
      { question: "Un POC suffit-il pour choisir une agence ?", answer: "Un POC aide à valider une hypothèse, mais il ne remplace pas l'analyse de sécurité, l'intégration, la maintenance et l'adoption par les équipes." },
      { question: "Combien de devis comparer ?", answer: "Deux à trois prestataires bien ciblés valent mieux que dix devis trop hétérogènes." },
      { question: "Entreprise.ai choisit-il à la place du client ?", answer: "Non. L'objectif est de préparer une shortlist qualifiée. L'entreprise reste libre dans son choix final." }
    ],
    relatedPages: [
      ...commonRelated,
      { label: "Agence IA ou consultant IA", href: "/guides/agence-ia-ou-consultant-ia" },
      { label: "Cahier des charges IA", href: "/guides/cahier-des-charges-projet-ia" }
    ],
    relatedProviders: ["hexa-automatisation", "agentique-studio", "opsia-france"]
  },
  {
    slug: "combien-coute-projet-ia",
    title: "Combien coûte un projet IA en entreprise ?",
    metaTitle: "Prix projet IA en entreprise : budgets indicatifs PME et ETI",
    metaDescription:
      "Fourchettes prudentes pour audit IA, formation, automatisation, chatbot, RAG, agent IA, intégration métier et maintenance.",
    h1: "Combien coûte un projet IA en entreprise ?",
    intro:
      "Le coût d'un projet IA dépend surtout du niveau d'intégration, de la qualité des données, du nombre d'utilisateurs, des contraintes de sécurité et du besoin de maintenance.",
    summary:
      "Pour une PME, les premiers projets sérieux démarrent souvent entre 5 000 € et 10 000 €. Les projets RAG, agents IA ou intégrations métier dépassent fréquemment 20 000 €.",
    sections: [
      { title: "Les coûts bas correspondent surtout à de l'acculturation", body: "Une formation ou un atelier peut être utile pour cadrer les usages, mais ne produit pas nécessairement une solution intégrée." },
      { title: "L'intégration fait monter le budget", body: "Dès que l'IA doit lire des données internes, écrire dans un CRM, respecter des droits d'accès ou produire des traces, le projet devient un projet SI." },
      { title: "La maintenance doit être budgétée", body: "Prompts, connecteurs, modèles, droits et processus métier évoluent. Un budget sans maintenance expose l'entreprise à une solution rapidement fragile." }
    ],
    budgetRows: [
      { label: "Formation IA direction ou métier", budget: "3 000 à 10 000 €", complexity: "Faible", notes: "Ateliers, supports, cas d'usage." },
      { label: "Audit IA / diagnostic PME", budget: "5 000 à 15 000 €", complexity: "Faible à moyenne", notes: "Cartographie des opportunités et priorisation." },
      { label: "Automatisation simple", budget: "8 000 à 25 000 €", complexity: "Moyenne", notes: "Workflow avec validation humaine." },
      { label: "Chatbot service client", budget: "12 000 à 40 000 €", complexity: "Moyenne à élevée", notes: "Base de connaissance, escalade, contrôle qualité." },
      { label: "RAG / base documentaire", budget: "18 000 à 70 000 €+", complexity: "Élevée", notes: "Indexation, sécurité, sources, monitoring." },
      { label: "Agent IA connecté au SI", budget: "25 000 à 100 000 €+", complexity: "Élevée", notes: "Droits, logs, intégrations et supervision." }
    ],
    risks: ["sous-estimer la préparation des données", "oublier la maintenance", "comparer des périmètres différents", "acheter un prototype au prix d'un produit fini"],
    questions: ["Quel est le budget réaliste de départ ?", "Quel coût interne sera mobilisé ?", "La maintenance est-elle incluse ?", "Le prestataire facture-t-il au forfait ou au temps passé ?"],
    faqs: [
      { question: "Peut-on lancer un projet IA avec moins de 5 000 € ?", answer: "Oui pour une formation courte ou un cadrage léger. Pour une solution intégrée, ce budget est souvent trop limité." },
      { question: "Pourquoi les fourchettes sont-elles larges ?", answer: "Deux projets portant le même nom peuvent être très différents selon les données, les outils, la sécurité et le niveau d'automatisation." },
      { question: "Faut-il prévoir un abonnement logiciel ?", answer: "Souvent oui : modèles IA, outils no-code, hébergement, base vectorielle, monitoring ou analytics peuvent ajouter des coûts récurrents." },
      { question: "La commission Entreprise.ai augmente-t-elle le prix client ?", answer: "Le modèle cible est une commission au succès côté prestataire. Les règles commerciales devront rester transparentes." }
    ],
    relatedPages: [
      ...commonRelated,
      { label: "Réussir un projet IA PME", href: "/guides/reussir-projet-ia-pme" },
      { label: "RGPD et IA", href: "/guides/rgpd-ia-entreprise" }
    ],
    relatedProviders: ["dataops-pme", "rag-conseil", "integria-solutions"]
  },
  {
    slug: "agence-ia-ou-consultant-ia",
    title: "Agence IA ou consultant IA : que choisir ?",
    metaTitle: "Agence IA ou consultant IA : choisir selon budget et complexité",
    metaDescription:
      "Comparatif B2B entre agence IA, consultant IA et intégrateur pour sélectionner le bon prestataire selon le projet.",
    h1: "Agence IA ou consultant IA : que choisir ?",
    intro:
      "Le bon choix dépend moins du titre du prestataire que du niveau de complexité : cadrage, formation, automatisation simple, intégration SI ou déploiement multi-équipes.",
    summary:
      "Un consultant convient souvent au cadrage et aux premiers usages. Une agence ou un intégrateur devient préférable quand plusieurs expertises, connecteurs ou garanties de maintenance sont nécessaires.",
    sections: [
      { title: "Quand choisir un consultant IA", body: "Pour clarifier une stratégie, former une direction, auditer les processus ou préparer un cahier des charges sans engager trop tôt un gros projet." },
      { title: "Quand choisir une agence IA", body: "Pour livrer un workflow, un chatbot, un agent interne ou une automatisation nécessitant design de solution, développement, tests et accompagnement." },
      { title: "Quand choisir un intégrateur", body: "Pour connecter l'IA à un SI existant, gérer des droits, des API, de la sécurité, des environnements et une maintenance structurée." }
    ],
    budgetRows: [
      { label: "Consultant IA", budget: "5 000 à 20 000 €", complexity: "Cadrage à moyen", notes: "Souple, rapide, dépend fortement du profil." },
      { label: "Agence IA", budget: "10 000 à 60 000 €", complexity: "Moyen à élevé", notes: "Plusieurs compétences et capacité de production." },
      { label: "Intégrateur IA", budget: "20 000 à 100 000 €+", complexity: "Élevé", notes: "Adapté aux contraintes SI et ETI." }
    ],
    risks: ["choisir une agence pour un simple cadrage", "choisir un solo pour une intégration critique", "ne pas prévoir la conduite du changement"],
    questions: ["Qui porte la responsabilité technique ?", "Quelles compétences sont nécessaires ?", "Le projet touche-t-il au SI ?", "Combien d'équipes seront utilisatrices ?"],
    faqs: [
      { question: "Un consultant IA peut-il livrer une automatisation ?", answer: "Oui si le périmètre est maîtrisé. Pour un système critique ou multi-outils, une équipe structurée peut être plus adaptée." },
      { question: "Une agence IA est-elle toujours plus chère ?", answer: "Pas toujours, mais elle porte souvent plus de coordination et de production. Il faut comparer les livrables." },
      { question: "Peut-on combiner consultant et intégrateur ?", answer: "Oui. Un consultant peut cadrer le besoin puis aider à sélectionner un intégrateur." },
      { question: "Comment éviter le mauvais choix ?", answer: "Décrire le projet, les contraintes, le budget et demander une shortlist cohérente plutôt qu'un annuaire trop large." }
    ],
    relatedPages: [
      ...commonRelated,
      { label: "Consultants IA", href: "/consultants-ia" },
      { label: "Intégrateurs IA", href: "/integrateurs-ia" }
    ],
    relatedProviders: ["atelier-ia-conseil", "hexa-automatisation", "automatech-b2b"]
  },
  {
    slug: "cahier-des-charges-projet-ia",
    title: "Cahier des charges projet IA",
    metaTitle: "Cahier des charges IA : modèle de structure pour PME et ETI",
    metaDescription:
      "Les rubriques à inclure dans un cahier des charges IA : objectifs, données, utilisateurs, contraintes, outils, budget, planning et critères de succès.",
    h1: "Cahier des charges projet IA : les rubriques essentielles",
    intro:
      "Un bon cahier des charges IA aide les prestataires à répondre sur un périmètre comparable. Il évite les devis flous et force à traiter les données, les utilisateurs et les risques.",
    summary:
      "Le document doit décrire le problème métier, les données disponibles, les outils concernés, les contraintes de sécurité, les livrables attendus, le budget et les critères de succès.",
    sections: [
      { title: "Objectifs business", body: "Indiquez ce qui doit changer concrètement : temps gagné, erreurs réduites, délai de traitement, qualité de réponse, capacité de reporting." },
      { title: "Données et accès", body: "Listez les sources, formats, volumes, propriétaires, droits d'accès, données personnelles et données sensibles." },
      { title: "Utilisateurs et validation humaine", body: "Précisez qui utilise la solution, qui valide les sorties, qui corrige les erreurs et qui décide en cas d'incertitude." },
      { title: "Contraintes techniques", body: "Documentez CRM, ERP, messagerie, stockage documentaire, SSO, API, hébergement et contraintes internes." },
      { title: "Livrables, planning et budget", body: "Demandez des jalons clairs : cadrage, prototype, tests, mise en production, formation, maintenance." }
    ],
    risks: ["périmètre trop large", "données non disponibles", "absence de responsable métier", "critères de succès non mesurables"],
    questions: ["Quel résultat business sera mesuré ?", "Qui valide les sorties IA ?", "Quelles données ne doivent jamais sortir ?", "Quel niveau d'autonomie est acceptable ?"],
    faqs: [
      { question: "Faut-il un cahier des charges avant de parler à un prestataire ?", answer: "Pas toujours. Un brief structuré suffit pour un premier échange, mais un cahier des charges devient utile dès que plusieurs devis sont comparés." },
      { question: "Qui doit rédiger le cahier des charges ?", answer: "La direction métier doit contribuer. Le prestataire ou un tiers peut aider à cadrer les aspects techniques." },
      { question: "Faut-il inclure le budget ?", answer: "Oui, au moins une fourchette. Sans budget, les réponses risquent d'être incomparables." },
      { question: "Le cahier des charges doit-il être très long ?", answer: "Non. Il doit être précis, pas volumineux. Une dizaine de pages bien structurées peut suffire." }
    ],
    relatedPages: [
      ...commonRelated,
      { label: "Questions à poser", href: "/guides/questions-a-poser-prestataire-ia" },
      { label: "Combien coûte un projet IA", href: "/guides/combien-coute-projet-ia" }
    ],
    relatedProviders: ["atelier-ia-conseil", "cabinet-synapse-ia", "integria-solutions"]
  },
  {
    slug: "rgpd-ia-entreprise",
    title: "RGPD et IA en entreprise",
    metaTitle: "RGPD et IA en entreprise : points de vigilance avant un projet",
    metaDescription:
      "Questions RGPD à traiter avant un projet IA : données personnelles, données sensibles, hébergement, sous-traitance, anonymisation et validation humaine.",
    h1: "RGPD et IA en entreprise : points de vigilance",
    intro:
      "Les projets IA manipulent souvent des données clients, salariés, prospects ou documents internes. Le RGPD n'interdit pas l'IA, mais impose un cadrage sérieux.",
    summary:
      "Avant de choisir un prestataire IA, vérifiez les données traitées, les finalités, l'hébergement, les sous-traitants, les droits d'accès, les logs et le rôle de validation humaine.",
    sections: [
      { title: "Identifier les données personnelles", body: "Un email, un nom, un ticket support, un dossier RH ou une note commerciale peuvent contenir des données personnelles." },
      { title: "Traiter les données sensibles avec prudence", body: "Santé, RH, juridique, finance et données clients confidentielles exigent des garanties supplémentaires." },
      { title: "Vérifier les sous-traitants", body: "Demandez quels outils IA sont utilisés, où les données sont hébergées, si elles servent à entraîner des modèles et quels contrats encadrent le traitement." },
      { title: "Garder une validation humaine", body: "Pour les décisions importantes, l'IA doit assister. Elle ne doit pas décider seule sans contrôle adapté." }
    ],
    risks: ["copie de données sensibles dans un outil public", "absence de DPA", "logs non maîtrisés", "décisions automatisées non contrôlées"],
    questions: ["Où sont hébergées les données ?", "Les prompts sont-ils conservés ?", "Les données entraînent-elles un modèle ?", "Comment supprimer ou auditer les traces ?"],
    faqs: [
      { question: "Peut-on utiliser ChatGPT avec des données clients ?", answer: "Cela dépend de l'offre, du paramétrage, du contrat et du type de données. Il faut vérifier avant usage." },
      { question: "Un projet RAG est-il plus risqué ?", answer: "Il peut l'être si la base documentaire contient des données sensibles ou si les droits d'accès sont mal gérés." },
      { question: "Le prestataire doit-il signer un accord de confidentialité ?", answer: "Pour un projet B2B avec données internes, c'est fortement recommandé." },
      { question: "Faut-il impliquer le DPO ?", answer: "Oui lorsque des données personnelles ou sensibles sont traitées." }
    ],
    relatedPages: [
      ...commonRelated,
      { label: "RAG base documentaire", href: "/cas-usages/rag-base-documentaire" },
      { label: "IA traitement documentaire", href: "/cas-usages/ia-traitement-documentaire" }
    ],
    relatedProviders: ["rag-conseil", "integria-solutions", "dataops-pme"]
  },
  {
    slug: "reussir-projet-ia-pme",
    title: "Réussir un projet IA en PME",
    metaTitle: "Réussir un projet IA en PME : méthode, budget et risques",
    metaDescription:
      "Méthode pragmatique pour réussir un projet IA en PME : choisir un cas d'usage, cadrer les données, tester, former et maintenir.",
    h1: "Réussir un projet IA en PME",
    intro:
      "Un projet IA réussi en PME est rarement le plus spectaculaire. C'est souvent celui qui résout un problème récurrent, avec un périmètre clair et une adoption simple.",
    summary:
      "Commencez par un processus précis, validez les données, gardez une supervision humaine, mesurez le gain réel et prévoyez la maintenance dès le départ.",
    sections: [
      { title: "Choisir un cas d'usage opérationnel", body: "Priorisez un flux fréquent : demandes clients, documents, reporting, relances, qualification ou support interne." },
      { title: "Limiter le périmètre initial", body: "Un premier projet doit prouver une valeur mesurable sans toucher tout le système d'information." },
      { title: "Impliquer les utilisateurs", body: "Les équipes doivent comprendre ce que l'IA fait, ce qu'elle ne fait pas et comment corriger les erreurs." },
      { title: "Mesurer avant d'étendre", body: "Temps gagné, taux d'erreur, délai de traitement, qualité de réponse : choisissez quelques indicateurs simples." }
    ],
    budgetRows: [
      { label: "Premier atelier", budget: "3 000 à 8 000 €", complexity: "Faible", notes: "Priorisation et feuille de route." },
      { label: "Premier workflow", budget: "8 000 à 25 000 €", complexity: "Moyenne", notes: "Automatisation contrôlée." },
      { label: "Extension multi-équipes", budget: "25 000 €+", complexity: "Élevée", notes: "Gouvernance et maintenance nécessaires." }
    ],
    risks: ["projet trop large", "absence de données propres", "outil choisi avant le besoin", "formation oubliée"],
    questions: ["Quel irritant revient chaque semaine ?", "Qui utilisera la solution ?", "Quel gain sera mesuré ?", "Quel risque nécessite une validation humaine ?"],
    faqs: [
      { question: "Quel est le meilleur premier projet IA ?", answer: "Un projet fréquent, mesurable, avec données disponibles et faible risque de décision automatisée." },
      { question: "Faut-il recruter avant de lancer ?", answer: "Pas nécessairement. Un prestataire peut aider à cadrer et transférer la méthode aux équipes internes." },
      { question: "Combien de temps faut-il ?", answer: "Un cadrage peut prendre quelques semaines. Une intégration sérieuse prend souvent un à trois mois." },
      { question: "Comment éviter l'effet gadget ?", answer: "Relier chaque usage à un processus métier, un responsable et un indicateur." }
    ],
    relatedPages: [
      ...commonRelated,
      { label: "Automatisation IA", href: "/cas-usages/automatisation-ia" },
      { label: "Formation IA entreprise", href: "/cas-usages/formation-ia-entreprise" }
    ],
    relatedProviders: ["opsia-france", "hexa-automatisation", "cabinet-synapse-ia"]
  },
  {
    slug: "questions-a-poser-prestataire-ia",
    title: "Questions à poser à un prestataire IA",
    metaTitle: "Questions à poser à une agence IA avant de signer",
    metaDescription:
      "Checklist de questions pour évaluer un prestataire IA : cadrage, données, sécurité, budget, maintenance, références et responsabilité.",
    h1: "Questions à poser à un prestataire IA avant de signer",
    intro:
      "Les bonnes questions évitent les devis vagues et les projets impossibles à maintenir. Elles permettent aussi de repérer les prestataires qui vendent une promesse plutôt qu'un système exploitable.",
    summary:
      "Interrogez le prestataire sur le problème métier, les données, la sécurité, les limites de l'IA, les livrables, la maintenance, les références et les responsabilités de chaque partie.",
    sections: [
      { title: "Questions sur le besoin", body: "Demandez au prestataire de reformuler le problème, les utilisateurs, le résultat attendu et les limites du périmètre." },
      { title: "Questions sur les données", body: "Faites préciser les sources, droits d'accès, hébergement, anonymisation, conservation et suppression." },
      { title: "Questions sur la livraison", body: "Clarifiez les jalons, tests, documentation, formation, transfert de compétence et support." },
      { title: "Questions sur le modèle économique", body: "Comparez forfait, régie, maintenance, licences logicielles et coûts récurrents." }
    ],
    questions: [
      "Quel problème métier pensez-vous résoudre ?",
      "Quelles données sont nécessaires ?",
      "Quels risques voyez-vous dans notre demande ?",
      "Comment testez-vous la qualité des réponses ?",
      "Que se passe-t-il si le modèle IA change ?",
      "Quels coûts récurrents faut-il prévoir ?",
      "Quels livrables aurons-nous en fin de mission ?",
      "Qui sera responsable de la maintenance ?"
    ],
    risks: ["réponse trop commerciale", "absence de questions côté prestataire", "délais irréalistes", "promesse d'autonomie totale sans contrôle"],
    faqs: [
      { question: "Un bon prestataire doit-il challenger le brief ?", answer: "Oui. Un prestataire sérieux signale les risques, les dépendances et les zones floues." },
      { question: "Faut-il demander des références ?", answer: "Oui, mais les références doivent être comparables au type de projet envisagé." },
      { question: "Que faire si les réponses sont trop techniques ?", answer: "Demandez une reformulation métier et des livrables concrets." },
      { question: "Comment comparer deux réponses ?", answer: "Comparez périmètre, hypothèses, risques, maintenance, planning et critères de succès, pas seulement le tarif." }
    ],
    relatedPages: [
      ...commonRelated,
      { label: "Comment choisir une agence IA", href: "/guides/comment-choisir-agence-ia" },
      { label: "Cahier des charges IA", href: "/guides/cahier-des-charges-projet-ia" }
    ],
    relatedProviders: ["atelier-ia-conseil", "integria-solutions", "rag-conseil"]
  }
];

export function getGuideBySlug(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
