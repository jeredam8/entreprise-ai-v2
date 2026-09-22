import type { ContentPage } from "@/data/types";

function makeUseCasePage(
  input: Omit<ContentPage, "sections" | "faqs" | "relatedPages"> &
    Partial<Pick<ContentPage, "sections" | "faqs" | "relatedPages">>,
): ContentPage {
  return {
    ...input,
    sections: input.sections ?? [
      {
        title: "À quoi sert ce projet IA ?",
        body: "Le projet doit viser un processus métier identifiable, avec des données disponibles, des utilisateurs définis et un résultat contrôlable.",
      },
      {
        title: "Quel prestataire choisir ?",
        body: "Un consultant IA convient pour cadrer et prioriser. Une agence IA ou un intégrateur devient préférable dès que le projet touche aux outils métier, aux données sensibles ou à la maintenance.",
      },
      {
        title: "Budget et complexité",
        body: "Le budget dépend du nombre d'outils à connecter, du niveau de contrôle humain, des exigences RGPD et de la qualité des données existantes.",
      },
    ],
    faqs: input.faqs ?? [
      {
        question: "Ce cas d'usage est-il adapté à une PME ?",
        answer:
          "Oui si le périmètre est clair, les données accessibles et les utilisateurs prêts à tester un premier workflow contrôlé.",
      },
      {
        question: "Faut-il un intégrateur ?",
        answer:
          "Un intégrateur est utile lorsque la solution doit se connecter au SI, gérer des droits ou fonctionner dans un environnement sécurisé.",
      },
      {
        question: "Quel est le principal risque ?",
        answer:
          "Le risque principal est de lancer un outil sans cadrage métier, sans données fiables ou sans validation humaine.",
      },
      {
        question: "Comment Entreprise.ai peut aider ?",
        answer:
          "La plateforme vise à qualifier le besoin puis à proposer une sélection de prestataires adaptés au contexte.",
      },
    ],
    relatedPages: input.relatedPages ?? [
      { label: "Déposer un projet IA", href: "/deposer-un-projet-ia" },
      {
        label: "Comment choisir une agence IA",
        href: "/guides/comment-choisir-agence-ia",
      },
      {
        label: "Combien coûte un projet IA",
        href: "/guides/combien-coute-projet-ia",
      },
    ],
  };
}

export const useCases: ContentPage[] = [
  makeUseCasePage({
  "slug": "automatisation-ia",
  "title": "Automatisation IA",
  "updatedAt": "2026-09-22",
  "metaTitle": "Automatisation IA pour PME : cadrer un premier projet",
  "metaDescription": "Choisissez une tâche à automatiser, préparez le brief et les tests du pilote. Comparez les coûts, les connecteurs et les prestataires IA pour votre PME.",
  "h1": "Automatisation IA pour PME et ETI",
  "intro": "L'automatisation IA sert à réduire les tâches répétitives qui mobilisent les équipes : traitement de demandes, enrichissement de données, relances, reporting ou préparation de documents.",
  "summary": "Le bon projet automatise un flux régulier sans supprimer le contrôle humain sur les décisions sensibles.",
  "quickFacts": {
    "objective": "Gagner du temps sur un processus répétitif.",
    "providers": "Agence IA, expert automatisation, intégrateur.",
    "budget": "À chiffrer selon les outils, les exceptions et la maintenance.",
    "complexity": "Moyenne, plus élevée si plusieurs outils sont connectés.",
    "timeline": "À définir après un test sur vos données.",
    "vigilance": "Qualité des données, exceptions, droits d'accès, maintenance."
  },
  "examples": [
    "préqualification de demandes entrantes",
    "relances commerciales semi-automatiques",
    "génération de comptes rendus structurés",
    "tri de documents et affectation aux bonnes équipes",
    "enrichissement de fiches CRM",
    "suivi d'anomalies dans un tableau opérationnel",
    "préparation de réponses support à valider",
    "alertes sur dossiers bloqués"
  ],
  "sections": [
    {
      "title": "Commencer par un processus que vous pouvez mesurer",
      "body": "Choisissez une tâche fréquente dont vous connaissez les entrées, les sorties et les exceptions. Relevez le temps réellement consacré au travail avant le projet, puis comparez-le au temps restant après automatisation, contrôle humain inclus.",
      "bullets": [
        "Exemple de pilote : classer des demandes entrantes puis proposer une affectation, avec validation par un collaborateur.",
        "Autre exemple : préparer les champs d’une facture pour vérification, sans déclencher de paiement automatique.",
        "Ces exemples sont des scénarios de cadrage, pas des résultats obtenus chez des clients."
      ]
    },
    {
      "title": "IA ou automatisation classique ?",
      "body": "Une règle suffit parfois : déplacer un fichier, recopier un champ ou envoyer une alerte sur un seuil connu. L’IA devient une option lorsque les informations sont variables ou non structurées. Demandez au prestataire de justifier chaque étape et de prévoir les cas où le système ne sait pas répondre.",
      "links": [
        {
          "label": "Si votre besoin est de retrouver une information dans des documents",
          "href": "/cas-usages/rag-base-documentaire"
        }
      ]
    },
    {
      "title": "Choisir un flux et prévoir son contrôle",
      "body": "Les situations suivantes sont des exemples de cadrage. Elles ne décrivent pas des missions client ni des gains mesurés.",
      "table": {
        "caption": "Exemples de tâches à cadrer avant consultation",
        "columns": [
          "Tâche",
          "Place possible de l’IA",
          "Contrôle à conserver"
        ],
        "rows": [
          [
            "Trier des demandes entrantes",
            "Interpréter un message et proposer une catégorie",
            "Relecture des cas incertains et destinataires vérifiés"
          ],
          [
            "Préparer une saisie depuis un document",
            "Extraire les champs puis appliquer des règles",
            "Comparaison avec l’original avant validation"
          ],
          [
            "Préparer une réponse support",
            "Produire un brouillon depuis une base autorisée",
            "Validation avant envoi et reprise humaine"
          ]
        ]
      }
    },
    {
      "title": "Ce qui fait varier le devis",
      "body": "Le coût dépend du nombre d’outils à connecter, de la qualité des données, des droits à gérer, de la fréquence des traitements et du niveau de supervision. Il n’existe pas de tarif unique déductible du seul mot automatisation.",
      "bullets": [
        "Séparer le cadrage, le prototype et la mise en production.",
        "Chiffrer les abonnements, consommations, maintenance et temps de contrôle interne sur douze mois.",
        "Préciser les critères d’acceptation, les reprises manuelles et ce qui reste hors périmètre."
      ],
      "links": [
        {
          "label": "Construire le budget sur douze mois",
          "href": "/guides/combien-coute-projet-ia"
        }
      ]
    },
    {
      "title": "Un brief prêt à transmettre",
      "body": "Décrivez : la tâche actuelle ; le nombre de dossiers ; les outils utilisés ; un exemple anonymisé ; les erreurs à éviter ; la personne qui valide ; le plafond de budget ; l’échéance. Faites répondre deux ou trois prestataires sur ce même périmètre."
    },
    {
      "title": "Tester les exceptions avant la mise en production",
      "body": "Constituez un échantillon représentatif du travail réel et réservez des cas pour le test final. Convenez des seuils d’acceptation avec le responsable métier ; il n’existe pas de seuil unique valable pour toutes les tâches.",
      "bullets": [
        "Un même dossier soumis deux fois ne doit pas créer deux actions non souhaitées.",
        "Une panne de connexion doit laisser une trace et permettre une reprise contrôlée.",
        "Un document incomplet doit être signalé, sans inventer les champs manquants.",
        "Mesurer le temps total après relecture et correction, pas seulement le temps de génération."
      ],
      "links": [
        {
          "label": "Faire préciser ces engagements dans le devis",
          "href": "/guides/questions-a-poser-prestataire-ia"
        }
      ]
    }
  ],
  "risks": [
    "données mal structurées",
    "exceptions non prévues",
    "automatisation de décisions sensibles",
    "maintenance oubliée"
  ],
  "questions": [
    "Quels cas doivent rester manuels ?",
    "Qui valide les sorties ?",
    "Quels outils doivent être connectés ?",
    "Comment mesurer le gain de temps ?"
  ],
  "relatedProviders": [
    "epickone",
    "stamina-solutions",
    "dl-consulting"
  ],
  "faqs": [
    {
      "question": "Faut-il de l’IA pour automatiser une tâche ?",
      "answer": "Pas nécessairement. Des règles suffisent lorsque les entrées et les décisions sont prévisibles. L’IA peut aider à interpréter des textes ou documents variables ; demandez au prestataire de justifier ce choix."
    },
    {
      "question": "Quel premier processus choisir dans une PME ?",
      "answer": "Choisissez un flux fréquent, délimité, avec des exemples disponibles, un responsable et des erreurs contrôlables. Mesurez la situation initiale et le temps de correction après le pilote."
    },
    {
      "question": "Comment obtenir un devis exploitable ?",
      "answer": "Précisez les outils, les volumes, les données d’entrée, les sorties attendues, les exceptions et les validations. Demandez de séparer réalisation, abonnements, consommation et maintenance."
    },
    {
      "question": "Quand arrêter ou revoir le pilote ?",
      "answer": "Si les critères convenus ne sont pas atteints, si les erreurs restent difficiles à détecter ou si les corrections annulent le gain attendu, revoyez le périmètre avant de passer en production."
    }
  ],
  "relatedPages": [
    {
      "label": "Choisir le profil de prestataire",
      "href": "/guides/agence-ia-ou-consultant-ia"
    },
    {
      "label": "Calculer le coût total",
      "href": "/guides/combien-coute-projet-ia"
    },
    {
      "label": "Comparer les devis IA",
      "href": "/guides/questions-a-poser-prestataire-ia"
    }
  ],
  "projectCta": {
    "title": "Quelle tâche souhaitez-vous automatiser ?",
    "description": "Décrivez une tâche répétitive, les outils utilisés et les exceptions à gérer. Nous examinons votre demande pour vous orienter vers des profils adaptés. Dépôt gratuit, sans engagement."
  }
}),
  makeUseCasePage({
    slug: "agent-ia-entreprise",
    title: "Agent IA en entreprise",
    metaTitle:
      "Agent IA pour entreprise : usages, budget et choix du prestataire",
    metaDescription:
      "Guide B2B sur les agents IA internes : objectifs, complexité, sécurité, budget et types de prestataires à sélectionner.",
    h1: "Agent IA pour entreprise : usages, prestataires et budget",
    intro:
      "Un agent IA d'entreprise exécute ou prépare des actions à partir d'un objectif : chercher une information, rédiger une réponse, interroger un outil ou déclencher un workflow contrôlé.",
    summary:
      "Un agent IA utile doit être limité, supervisé, connecté aux bons outils et observable. Il ne doit pas agir librement sur des processus critiques.",
    quickFacts: {
      objective: "Assister une équipe sur un flux métier encadré.",
      providers: "Agence IA technique, intégrateur, cabinet data.",
      budget: "20 000 à 80 000 €+ selon intégration.",
      complexity: "Élevée.",
      timeline: "8 à 16 semaines.",
      vigilance: "Droits, logs, hallucinations, sécurité, escalade humaine.",
    },
    examples: [
      "assistant support interne",
      "agent de préparation de devis",
      "assistant RH documentaire",
      "agent de synthèse CRM",
      "agent de traitement de tickets",
      "agent d'analyse de dossiers",
    ],
    budgetRows: [
      {
        label: "Agent prototype",
        budget: "15 000 à 30 000 €",
        complexity: "Moyenne",
        notes: "Périmètre étroit et supervision forte.",
      },
      {
        label: "Agent connecté",
        budget: "30 000 à 80 000 €",
        complexity: "Élevée",
        notes: "API, droits, logs et tests.",
      },
      {
        label: "Agent critique",
        budget: "80 000 €+",
        complexity: "Très élevée",
        notes: "Gouvernance SI et maintenance.",
      },
    ],
    risks: [
      "actions non contrôlées",
      "droits trop larges",
      "absence de logs",
      "confusion entre assistant et décideur",
    ],
    questions: [
      "Quelles actions l'agent peut-il faire ?",
      "Quelles actions sont interdites ?",
      "Comment auditer son comportement ?",
      "Quel humain valide ?",
    ],
    relatedProviders: [
      "agentique-studio",
      "integria-solutions",
      "automatech-b2b",
    ],
  }),
  makeUseCasePage({
    slug: "chatbot-ia-entreprise",
    title: "Chatbot IA entreprise",
    metaTitle: "Chatbot IA pour entreprise : service client, budget, risques",
    metaDescription:
      "Créer un chatbot IA B2B : base de connaissance, escalade humaine, RGPD, budget et choix du prestataire.",
    h1: "Chatbot IA pour entreprise : usages, prestataires et budget",
    intro:
      "Un chatbot IA peut répondre plus vite aux questions clients ou internes, à condition de s'appuyer sur une base fiable et de prévoir une escalade humaine.",
    summary:
      "Le chatbot doit être conçu comme un canal de support contrôlé, pas comme une réponse automatique illimitée.",
    quickFacts: {
      objective:
        "Réduire les demandes simples et améliorer le délai de réponse.",
      providers: "Agence IA, intégrateur, spécialiste support client.",
      budget: "12 000 à 40 000 €.",
      complexity: "Moyenne à élevée.",
      timeline: "6 à 12 semaines.",
      vigilance: "Qualité de la base, escalade, RGPD, ton, mesure qualité.",
    },
    examples: [
      "FAQ client",
      "support interne IT",
      "assistant SAV",
      "réponse produit",
      "tri de demandes",
      "préparation de tickets",
    ],
    budgetRows: [
      {
        label: "FAQ contrôlée",
        budget: "8 000 à 18 000 €",
        complexity: "Moyenne",
        notes: "Base simple et validation humaine.",
      },
      {
        label: "Chatbot support connecté",
        budget: "18 000 à 45 000 €",
        complexity: "Élevée",
        notes: "CRM, tickets, historique.",
      },
      {
        label: "Support multi-pays",
        budget: "45 000 €+",
        complexity: "Élevée",
        notes: "Langues, conformité, analytics.",
      },
    ],
    risks: [
      "réponses fausses",
      "absence d'escalade",
      "contenu obsolète",
      "données clients mal protégées",
    ],
    questions: [
      "Quelle base de connaissance est utilisée ?",
      "Quand le chatbot doit-il transférer à un humain ?",
      "Comment mesurer la qualité ?",
      "Qui met à jour les réponses ?",
    ],
    relatedProviders: ["agentique-studio", "opsia-france", "rag-conseil"],
  }),
  makeUseCasePage({
  "slug": "rag-base-documentaire",
  "title": "Assistant IA sur vos documents (RAG)",
  "metaTitle": "Assistant documentaire IA (RAG) : budget et prestataires",
  "metaDescription": "Préparez un assistant IA sur vos documents : sources, droits d’accès, tests, budget et maintenance. Comparez les prestataires sur un pilote mesurable.",
  "h1": "Assistant IA sur vos documents : cadrer un projet RAG",
  "intro": "Vos équipes perdent du temps à retrouver une procédure ou une réponse dans des fichiers dispersés ? Un assistant documentaire peut rechercher les passages utiles et formuler une réponse. Le projet commence par les documents, les questions et les accès, avant le choix du modèle.",
  "summary": "Un RAG relie la recherche dans une base documentaire à la génération d’une réponse. Exigez les sources consultables, le respect des droits et la capacité à dire que l’information manque. Une citation ne garantit pas que la réponse interprète correctement le document.",
  "quickFacts": {
    "objective": "Retrouver et expliquer une information avec sa source.",
    "providers": "Équipe ayant une expérience documentaire et des droits d’accès.",
    "budget": "À chiffrer selon le corpus, les connexions, les tests et le support.",
    "complexity": "Dépend des formats, des mises à jour et des droits.",
    "timeline": "À fixer après examen du corpus et du pilote.",
    "vigilance": "Sources obsolètes, accès interdits et réponses non étayées."
  },
  "risks": [
    "sources non citées",
    "droits d'accès mal gérés",
    "documents obsolètes",
    "réponses trop affirmatives"
  ],
  "questions": [
    "Quels documents et quelles versions seront indexés ?",
    "Comment les droits de lecture sont-ils appliqués ?",
    "Comment signalez-vous une réponse non étayée ?",
    "Sous quel délai une suppression est-elle répercutée ?",
    "Qui corrige une source et qui corrige un défaut du système ?"
  ],
  "relatedProviders": [
    "rag-conseil",
    "integria-solutions",
    "dataops-pme"
  ],
  "sections": [
    {
      "title": "Quand un assistant documentaire est-il pertinent ?",
      "body": "Il est à étudier si des questions reviennent et si les réponses existent dans des documents maintenus. Si les documents se contredisent ou ne sont pas à jour, commencez par clarifier les sources. Une recherche classique peut suffire pour retrouver un fichier ; le besoin de synthèse doit justifier la génération d’une réponse.",
      "bullets": [
        "Exemple de cadrage : retrouver la procédure applicable à une demande de support.",
        "Exemple de cadrage : répondre à une question interne avec le passage du manuel et sa version.",
        "Ces exemples sont des scénarios possibles, pas des résultats client documentés."
      ]
    },
    {
      "title": "Préparer le corpus et les accès",
      "body": "Listez les dossiers, formats, versions, propriétaires et groupes autorisés. Identifiez les PDF scannés, les tableaux et les documents contradictoires qui devront être traités. Faites préciser la prise en compte des suppressions et des changements de droits.",
      "bullets": [
        "Nommer la source de référence lorsqu’il existe plusieurs versions.",
        "Définir qui ajoute, corrige et retire un document.",
        "Tester les accès avec plusieurs rôles, y compris un compte non autorisé."
      ]
    },
    {
      "title": "Ce qu’un pilote doit permettre de vérifier",
      "body": "Préparez avec les utilisateurs des questions courantes et des cas difficiles. Conservez une réponse attendue et son document de référence. Convenez des critères avant la démonstration et réservez des exemples que le prestataire n’a pas préparés.",
      "table": {
        "caption": "Grille de test d’un assistant documentaire",
        "columns": [
          "Cas à tester",
          "Comportement attendu",
          "Preuve à examiner"
        ],
        "rows": [
          [
            "Information présente",
            "Réponse fidèle et passage source accessible",
            "Document, version et extrait correspondant"
          ],
          [
            "Information absente",
            "Absence signalée, sans réponse inventée",
            "Question non couverte par le corpus"
          ],
          [
            "Deux documents contradictoires",
            "Conflit signalé ou règle de priorité explicitée",
            "Sources et dates utilisées"
          ],
          [
            "Document non autorisé",
            "Aucune divulgation du contenu",
            "Même question testée avec deux rôles"
          ],
          [
            "Document modifié ou supprimé",
            "Réponse actualisée dans le délai convenu",
            "Test après modification de la source"
          ]
        ]
      },
      "links": [
        {
          "label": "CNIL : fonctionnement, limites et choix des systèmes d’IA générative",
          "href": "https://www.cnil.fr/fr/les-questions-reponses-de-la-cnil-sur-lutilisation-dun-systeme-dia-generative"
        }
      ]
    },
    {
      "title": "Les postes à faire chiffrer",
      "body": "Demandez de séparer l’inventaire et la préparation des documents, les connecteurs, la recherche, la génération, l’interface, les droits, la recette et la formation. Ajoutez l’hébergement, les consommations, la mise à jour de l’index et le support. Nous ne disposons pas d’un échantillon comparable permettant d’annoncer un prix moyen.",
      "bullets": [
        "Indiquer le volume du corpus et la fréquence des modifications.",
        "Préciser les utilisateurs, leurs rôles et le nombre de questions prévu.",
        "Faire chiffrer l’ajout d’une source et la reprise des données en fin de contrat."
      ],
      "links": [
        {
          "label": "Calculer le budget sur douze mois",
          "href": "/guides/combien-coute-projet-ia"
        },
        {
          "label": "Comparer les engagements des devis",
          "href": "/guides/questions-a-poser-prestataire-ia"
        }
      ]
    },
    {
      "title": "Choisir une équipe et préparer l’exploitation",
      "body": "Demandez une démonstration sur des documents représentatifs, avec des droits distincts et une mise à jour de source. Identifiez le responsable du corpus dans votre entreprise et celui du support chez le prestataire. La maintenance doit couvrir les erreurs de recherche et de réponse, les connexions et les changements de documents.",
      "links": [
        {
          "label": "Choisir entre agence, consultant et intégrateur",
          "href": "/guides/agence-ia-ou-consultant-ia"
        },
        {
          "label": "Si votre projet doit aussi exécuter des actions : cadrer l’automatisation",
          "href": "/cas-usages/automatisation-ia"
        }
      ]
    }
  ],
  "faqs": [
    {
      "question": "Un RAG supprime-t-il les hallucinations ?",
      "answer": "Non. La recherche de documents fournit du contexte, mais une réponse peut rester incorrecte ou mal interpréter un passage. Vérifiez la fidélité à la source et testez les questions auxquelles le corpus ne répond pas."
    },
    {
      "question": "Faut-il entraîner un modèle sur nos documents ?",
      "answer": "Un RAG apporte des passages de documents au moment de répondre ; il ne nécessite pas, à lui seul, de réentraîner le modèle. Demandez au prestataire de justifier séparément toute proposition d’entraînement."
    },
    {
      "question": "Peut-on utiliser tous les documents de l’entreprise ?",
      "answer": "Définissez un corpus utile, maintenu et autorisé pour les utilisateurs concernés. Les droits existants doivent être pris en compte ; ajouter tous les fichiers sans tri rend les tests et la maintenance plus difficiles."
    },
    {
      "question": "Comment estimer le budget d’un assistant documentaire ?",
      "answer": "Faites examiner un échantillon représentatif, les connecteurs, les droits et les mises à jour. Demandez un devis de pilote distinct de la production, puis un coût d’exploitation sur douze mois."
    }
  ],
  "relatedPages": [
    {
      "label": "Choisir une agence IA",
      "href": "/guides/comment-choisir-agence-ia"
    },
    {
      "label": "Calculer le budget total",
      "href": "/guides/combien-coute-projet-ia"
    },
    {
      "label": "Comparer les devis",
      "href": "/guides/questions-a-poser-prestataire-ia"
    }
  ],
  "updatedAt": "2026-09-22",
  "projectCta": {
    "title": "Vous voulez retrouver plus facilement vos informations internes ?",
    "description": "Décrivez vos documents, les questions des équipes et les outils concernés, sans transmettre de contenu confidentiel. Nous vous aidons à cadrer le besoin et les profils à consulter."
  }
}),
  makeUseCasePage({
    slug: "ia-service-client",
    title: "IA service client",
    metaTitle:
      "IA pour service client : chatbot, tri de tickets, support augmenté",
    metaDescription:
      "Cas d'usage IA pour service client : tri, réponses assistées, FAQ, base documentaire, budget et risques.",
    h1: "IA pour service client : usages, prestataires et budget",
    intro:
      "L'IA peut aider un service client à trier les demandes, proposer des réponses, retrouver la bonne information et prioriser les cas urgents.",
    summary:
      "Le service client est un bon terrain IA si la base de connaissance est fiable et si les réponses sensibles restent validées.",
    quickFacts: {
      objective: "Réduire les délais et homogénéiser les réponses.",
      providers: "Agence IA, intégrateur support, expert RAG.",
      budget: "12 000 à 50 000 €.",
      complexity: "Moyenne à élevée.",
      timeline: "6 à 12 semaines.",
      vigilance: "Qualité des réponses, escalade, données clients.",
    },
    examples: [
      "tri de tickets",
      "réponses assistées",
      "synthèse d'historique client",
      "détection d'urgence",
      "FAQ dynamique",
      "base interne support",
    ],
    budgetRows: [
      {
        label: "Réponses assistées",
        budget: "10 000 à 25 000 €",
        complexity: "Moyenne",
        notes: "Validation humaine recommandée.",
      },
      {
        label: "Support connecté",
        budget: "25 000 à 60 000 €",
        complexity: "Élevée",
        notes: "Connexion ticketing et CRM.",
      },
      {
        label: "Support multi-canal",
        budget: "60 000 €+",
        complexity: "Élevée",
        notes: "Téléphone, email, chat, analytics.",
      },
    ],
    risks: [
      "réponse erronée au client",
      "ton incohérent",
      "absence de mise à jour",
      "données personnelles exposées",
    ],
    questions: [
      "Quels cas restent humains ?",
      "Quelle base fait autorité ?",
      "Comment suivre la satisfaction ?",
      "Comment corriger une mauvaise réponse ?",
    ],
    relatedProviders: ["opsia-france", "agentique-studio", "rag-conseil"],
  }),
  makeUseCasePage({
    slug: "ia-prospection-commerciale",
    title: "IA prospection commerciale",
    metaTitle:
      "IA pour prospection commerciale B2B : qualification et workflows",
    metaDescription:
      "Utiliser l'IA pour la prospection B2B : qualification, enrichissement CRM, messages, scoring, risques et budget.",
    h1: "IA pour prospection commerciale B2B",
    intro:
      "L'IA peut aider les équipes commerciales à qualifier des comptes, préparer des messages, enrichir le CRM et prioriser les relances.",
    summary:
      "Le bon usage n'est pas l'envoi massif automatisé, mais une meilleure préparation commerciale avec données vérifiées et contrôle humain.",
    quickFacts: {
      objective: "Améliorer la qualification et la préparation commerciale.",
      providers: "Agence IA, expert automatisation, intégrateur CRM.",
      budget: "8 000 à 30 000 €.",
      complexity: "Moyenne.",
      timeline: "4 à 10 semaines.",
      vigilance: "Données personnelles, délivrabilité, qualité des signaux.",
    },
    examples: [
      "scoring de comptes",
      "enrichissement CRM",
      "préparation de messages",
      "priorisation de relances",
      "synthèse de comptes",
      "veille prospects",
    ],
    budgetRows: [
      {
        label: "Workflow de qualification",
        budget: "8 000 à 18 000 €",
        complexity: "Moyenne",
        notes: "Sources et règles claires.",
      },
      {
        label: "Intégration CRM",
        budget: "18 000 à 40 000 €",
        complexity: "Moyenne à élevée",
        notes: "Droits, champs, synchronisation.",
      },
      {
        label: "Sales ops augmenté",
        budget: "40 000 €+",
        complexity: "Élevée",
        notes: "Multi-sources et pilotage.",
      },
    ],
    risks: [
      "messages trop génériques",
      "données non conformes",
      "automatisation excessive",
      "CRM pollué",
    ],
    questions: [
      "Quelles sources sont autorisées ?",
      "Qui valide les messages ?",
      "Quels champs CRM seront mis à jour ?",
      "Comment éviter le spam ?",
    ],
    relatedProviders: ["hexa-automatisation", "automatech-b2b", "dataops-pme"],
  }),
  makeUseCasePage({
    slug: "ia-reporting",
    title: "IA reporting",
    metaTitle: "IA pour reporting : synthèses, tableaux de bord et analyse",
    metaDescription:
      "Cas d'usage IA pour reporting PME et ETI : synthèses, alertes, analyse de données, budget et prestataires.",
    h1: "IA pour reporting et analyse opérationnelle",
    intro:
      "L'IA peut aider à résumer des données, détecter des anomalies, produire des commentaires de performance et accélérer la préparation de reportings.",
    summary:
      "Le reporting IA devient utile quand les données sources sont fiables et que les indicateurs restent traçables.",
    quickFacts: {
      objective:
        "Accélérer la lecture des données et la préparation des synthèses.",
      providers: "Cabinet data, intégrateur, consultant IA.",
      budget: "10 000 à 45 000 €.",
      complexity: "Moyenne à élevée.",
      timeline: "6 à 12 semaines.",
      vigilance: "Qualité des données, traçabilité, interprétation.",
    },
    examples: [
      "commentaire automatique de KPI",
      "alertes anomalies",
      "synthèse hebdomadaire",
      "analyse de ventes",
      "reporting financier",
      "priorisation opérationnelle",
    ],
    budgetRows: [
      {
        label: "Synthèse reporting",
        budget: "10 000 à 20 000 €",
        complexity: "Moyenne",
        notes: "Données déjà propres.",
      },
      {
        label: "Data pipeline + IA",
        budget: "20 000 à 60 000 €",
        complexity: "Élevée",
        notes: "Préparation et gouvernance des données.",
      },
      {
        label: "Pilotage multi-entités",
        budget: "60 000 €+",
        complexity: "Élevée",
        notes: "Droits, qualité, supervision.",
      },
    ],
    risks: [
      "données incohérentes",
      "interprétation non vérifiée",
      "KPI mal définis",
      "conclusions non sourcées",
    ],
    questions: [
      "Quelle source fait autorité ?",
      "Quels KPI sont prioritaires ?",
      "Les calculs restent-ils auditables ?",
      "Qui valide les commentaires ?",
    ],
    relatedProviders: ["dataops-pme", "automatech-b2b", "integria-solutions"],
  }),
  makeUseCasePage({
    slug: "formation-ia-entreprise",
    title: "Formation IA entreprise",
    metaTitle:
      "Formation IA pour entreprise : directions, managers, équipes métier",
    metaDescription:
      "Former une PME ou ETI à l'IA : formats, budgets, risques, prestataires et contenu utile pour directions et équipes métier.",
    h1: "Formation IA pour entreprise",
    intro:
      "La formation IA aide les directions et équipes métier à distinguer usages réalistes, risques, règles internes et premières opportunités opérationnelles.",
    summary:
      "Une formation utile part des métiers de l'entreprise et produit des cas d'usage priorisés, pas seulement une présentation d'outils.",
    quickFacts: {
      objective: "Acculturer et prioriser des usages concrets.",
      providers: "Formateur IA, consultant IA, cabinet conseil.",
      budget: "3 000 à 15 000 €.",
      complexity: "Faible à moyenne.",
      timeline: "1 à 4 semaines.",
      vigilance: "Exemples métier, règles internes, sécurité.",
    },
    examples: [
      "formation CODIR",
      "atelier managers",
      "cas d'usage métier",
      "charte IA",
      "formation RH",
      "formation commerciale",
    ],
    budgetRows: [
      {
        label: "Session direction",
        budget: "3 000 à 7 000 €",
        complexity: "Faible",
        notes: "Acculturation et cadrage.",
      },
      {
        label: "Parcours métier",
        budget: "7 000 à 15 000 €",
        complexity: "Moyenne",
        notes: "Ateliers par équipe.",
      },
      {
        label: "Programme interne",
        budget: "15 000 €+",
        complexity: "Moyenne",
        notes: "Supports, règles, ambassadeurs.",
      },
    ],
    risks: [
      "formation trop générique",
      "outils sans règles",
      "pas de suite opérationnelle",
      "promesses irréalistes",
    ],
    questions: [
      "Quels métiers sont concernés ?",
      "Quels outils sont autorisés ?",
      "Quels cas d'usage seront produits ?",
      "Comment mesurer l'adoption ?",
    ],
    relatedProviders: [
      "formation-ia-direction",
      "cabinet-synapse-ia",
      "atelier-ia-conseil",
    ],
  }),
  makeUseCasePage({
    slug: "ia-traitement-documentaire",
    title: "IA traitement documentaire",
    metaTitle:
      "IA pour traitement documentaire : extraction, synthèse, contrôle",
    metaDescription:
      "Automatiser le traitement documentaire avec l'IA : extraction, classification, synthèse, risques RGPD et prestataires adaptés.",
    h1: "IA pour traitement documentaire",
    intro:
      "L'IA peut accélérer la lecture, le tri, l'extraction et la synthèse de documents, mais les documents sensibles exigent un cadrage strict.",
    summary:
      "Le traitement documentaire est un cas d'usage fort si les formats sont connus, les exceptions identifiées et les résultats vérifiés.",
    quickFacts: {
      objective:
        "Réduire le temps de traitement et fiabiliser le tri documentaire.",
      providers: "Intégrateur IA, cabinet data, agence automatisation.",
      budget: "12 000 à 50 000 €.",
      complexity: "Moyenne à élevée.",
      timeline: "6 à 12 semaines.",
      vigilance: "Confidentialité, formats, taux d'erreur, validation.",
    },
    examples: [
      "tri de factures",
      "synthèse de contrats",
      "extraction de champs",
      "contrôle de pièces",
      "classement de dossiers",
      "résumé de rapports",
    ],
    budgetRows: [
      {
        label: "Extraction simple",
        budget: "10 000 à 22 000 €",
        complexity: "Moyenne",
        notes: "Formats réguliers.",
      },
      {
        label: "Workflow documentaire",
        budget: "22 000 à 55 000 €",
        complexity: "Élevée",
        notes: "Validation et intégration.",
      },
      {
        label: "Documents sensibles",
        budget: "55 000 €+",
        complexity: "Élevée",
        notes: "Sécurité et conformité.",
      },
    ],
    risks: [
      "erreurs d'extraction",
      "documents illisibles",
      "données sensibles",
      "absence d'échantillon de test",
    ],
    questions: [
      "Quels formats sont fréquents ?",
      "Quel taux d'erreur est acceptable ?",
      "Qui valide les extractions ?",
      "Où sont stockés les documents ?",
    ],
    relatedProviders: ["opsia-france", "rag-conseil", "dataops-pme"],
  }),
  makeUseCasePage({
    slug: "integration-ia-outils-metier",
    title: "Intégration IA outils métier",
    metaTitle: "Intégration IA dans CRM, ERP et outils métier",
    metaDescription:
      "Connecter l'IA aux outils métier : CRM, ERP, ticketing, documents, API, sécurité, budget et prestataires adaptés.",
    h1: "Intégration IA dans les outils métier",
    intro:
      "L'IA devient réellement utile lorsqu'elle travaille avec les outils existants : CRM, ERP, ticketing, stockage documentaire, messagerie ou applications internes.",
    summary:
      "Une intégration IA doit être traitée comme un projet SI : droits, logs, tests, environnements, maintenance et plan de retour arrière.",
    quickFacts: {
      objective:
        "Connecter l'IA à un processus et aux données de l'entreprise.",
      providers: "Intégrateur IA, agence technique, cabinet data.",
      budget: "20 000 à 100 000 €+.",
      complexity: "Élevée.",
      timeline: "8 à 20 semaines.",
      vigilance: "API, sécurité, droits, monitoring, maintenance.",
    },
    examples: [
      "assistant CRM",
      "lecture ERP",
      "création de tickets",
      "mise à jour de dossiers",
      "recherche documentaire",
      "workflow de validation",
    ],
    budgetRows: [
      {
        label: "Connexion simple",
        budget: "15 000 à 35 000 €",
        complexity: "Moyenne à élevée",
        notes: "Un outil principal.",
      },
      {
        label: "Process multi-outils",
        budget: "35 000 à 90 000 €",
        complexity: "Élevée",
        notes: "API, droits, tests.",
      },
      {
        label: "Déploiement ETI",
        budget: "90 000 €+",
        complexity: "Très élevée",
        notes: "Gouvernance SI complète.",
      },
    ],
    risks: [
      "droits trop larges",
      "API instable",
      "pas de logs",
      "absence de maintenance",
      "dépendance à un outil",
    ],
    questions: [
      "Quels outils sont prioritaires ?",
      "Existe-t-il des API ?",
      "Comment gérer les droits ?",
      "Quel plan de retour arrière ?",
    ],
    relatedProviders: [
      "integria-solutions",
      "automatech-b2b",
      "agentique-studio",
    ],
  }),
];

export function getUseCaseBySlug(slug: string) {
  return useCases.find((useCase) => useCase.slug === slug);
}
