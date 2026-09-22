import type { ContentPage } from "@/data/types";

const commonRelated = [
  {
    label: "Déposer un projet IA",
    href: "/deposer-un-projet-ia",
    description: "Faire qualifier un besoin et préparer une sélection.",
  },
  {
    label: "Types de prestataires IA",
    href: "/prestataires-ia",
    description: "Comparer les types de prestataires disponibles.",
  },
];

export const guides: ContentPage[] = [
  {
  "slug": "comment-choisir-agence-ia",
  "title": "Comment choisir une agence IA ?",
  "metaTitle": "Choisir une agence IA pour PME : critères et preuves",
  "metaDescription": "Choisissez une agence IA pour votre PME : brief commun, spécialité, références, test du pilote et maintenance. Identifiez les preuves à demander.",
  "h1": "Comment choisir une agence IA pour son entreprise ?",
  "updatedAt": "2026-09-22",
  "intro": "Pour comparer deux agences, donnez-leur le même problème, les mêmes contraintes et les mêmes critères de réussite. Une présentation commerciale ne permet pas, à elle seule, de savoir qui saura livrer votre projet.",
  "summary": "Notre méthode : un brief commun, deux ou trois agences pertinentes, une démonstration sur des exemples représentatifs et une décision documentée. L’identité légale d’un prestataire est un premier contrôle ; elle ne prouve ni son expérience métier ni la qualité de ses livraisons.",
  "sections": [
    {
      "title": "1. Rédiger un brief que chaque agence pourra chiffrer",
      "body": "Décrivez une tâche réelle avant de demander un chatbot ou un agent. Le même brief doit être envoyé à chaque candidat pour rendre les réponses comparables.",
      "bullets": [
        "Processus actuel : étapes, fréquence et personnes concernées.",
        "Résultat attendu : temps de traitement, erreurs acceptables et validation humaine.",
        "Données : exemples anonymisés, formats, volumes et droits d’accès.",
        "Outils à connecter, contraintes d’hébergement, responsable interne et plafond budgétaire."
      ]
    },
    {
      "title": "2. Choisir une spécialité adaptée au travail à livrer",
      "body": "Une automatisation entre deux outils, un assistant documentaire et un agent autorisé à modifier un ERP présentent des difficultés différentes. Demandez au candidat de justifier son approche et d’identifier ce qui peut fonctionner sans IA.",
      "bullets": [
        "Automatisation : gérer les exceptions et la reprise après échec.",
        "RAG documentaire : retrouver la bonne source et respecter les droits de lecture.",
        "Agent connecté : limiter les actions et contrôler leurs conséquences."
      ],
      "links": [
        {
          "label": "Agence, consultant ou intégrateur : choisir le bon profil",
          "href": "/guides/agence-ia-ou-consultant-ia"
        },
        {
          "label": "Cadrer une automatisation métier",
          "href": "/cas-usages/automatisation-ia"
        },
        {
          "label": "Préparer un assistant sur vos documents",
          "href": "/cas-usages/rag-base-documentaire"
        }
      ]
    },
    {
      "title": "3. Comparer les candidats avec six critères communs",
      "body": "Attribuez à chaque critère une appréciation documentée : absent, partiel ou démontré. Conservez les pièces qui justifient votre choix. Une note totale ne doit pas compenser un refus de traiter un risque bloquant.",
      "bullets": [
        "Compréhension métier : reformulation du problème et critères de succès mesurables.",
        "Preuve de livraison : mission comparable, rôle exact du candidat et référence vérifiable.",
        "Données et sécurité : flux, accès, conservation et responsabilités explicités.",
        "Équipe : personnes qui réaliseront le travail, disponibilité et sous-traitance.",
        "Devis : livrables, exclusions, recette, coûts récurrents et coût total sur douze mois.",
        "Après livraison : supervision, délais d’intervention, documentation et réversibilité."
      ]
    },
    {
      "title": "4. Demander une démonstration qui peut aussi échouer",
      "body": "Préparez un petit jeu d’exemples représentatifs : cas courants, documents contradictoires, information absente et accès interdit. Convenez du résultat attendu avant la démonstration. Le candidat doit montrer comment la solution signale une incertitude et passe la main.",
      "bullets": [
        "Faire citer le document ou l’enregistrement à l’origine d’une réponse.",
        "Tester une demande qui dépasse les autorisations de l’utilisateur.",
        "Observer le comportement lors d’une panne de connecteur.",
        "Mesurer les corrections nécessaires, pas seulement la vitesse."
      ]
    },
    {
      "title": "5. Séparer prototype, pilote et mise en production dans le devis",
      "body": "Un prototype teste une idée. Un pilote confronte la solution à des utilisateurs et données représentatifs. La production ajoute notamment les droits, le suivi, les sauvegardes et le support. Demandez un livrable et une condition d’arrêt pour chaque étape.",
      "links": [
        {
          "label": "Comparer deux devis poste par poste",
          "href": "/guides/questions-a-poser-prestataire-ia"
        },
        {
          "label": "Calculer le coût sur douze mois",
          "href": "/guides/combien-coute-projet-ia"
        }
      ]
    },
    {
      "title": "6. Préparer la sortie dès le début du projet",
      "body": "Faites préciser la remise du code ou des workflows, la propriété des comptes et la documentation. Demandez comment changer de prestataire et exporter les données. Les conditions d’accès et de reprise doivent être écrites, même si la maintenance est optionnelle."
    }
  ],
  "risks": [
    "Démonstration uniquement sur des exemples choisis par le vendeur.",
    "Logo client sans description du travail réellement réalisé.",
    "Tarif attractif qui exclut les connecteurs, la recette ou le support.",
    "Absence de personne responsable après la livraison."
  ],
  "questions": [
    "Qui réalise la mission et quelle mission comparable cette équipe a-t-elle livrée ?",
    "Quel résultat déclenche la validation du pilote ?",
    "Qui voit les données, où transitent-elles et combien de temps sont-elles conservées ?",
    "Quel est le coût total sur douze mois, y compris notre travail interne ?",
    "Comment récupérer les comptes, les workflows et les données si nous arrêtons ?"
  ],
  "faqs": [
    {
      "question": "Combien d’agences IA faut-il comparer ?",
      "answer": "Deux ou trois candidats adaptés au besoin permettent une comparaison approfondie. Le point essentiel est de leur soumettre le même brief et d’obtenir des réponses documentées."
    },
    {
      "question": "Une identité vérifiée garantit-elle la qualité d’une agence ?",
      "answer": "Non. Le contrôle d’identité relie la fiche à une entreprise réelle. Les compétences, les références et la qualité de livraison demandent des vérifications distinctes."
    },
    {
      "question": "Faut-il payer un prototype avant de choisir ?",
      "answer": "Ce peut être un test utile si le périmètre, les livrables et la condition d’arrêt sont explicites. Il ne remplace pas les vérifications de sécurité, de maintenance et d’intégration."
    },
    {
      "question": "Quels documents demander avant de signer ?",
      "answer": "Un devis détaillé, une description des flux de données, les critères de recette, les responsabilités de maintenance et les conditions de réversibilité."
    }
  ],
  "relatedPages": [
    {
      "label": "Agence, consultant ou intégrateur ?",
      "href": "/guides/agence-ia-ou-consultant-ia"
    },
    {
      "label": "Comparer les devis IA",
      "href": "/guides/questions-a-poser-prestataire-ia"
    },
    {
      "label": "Évaluer le budget total",
      "href": "/guides/combien-coute-projet-ia"
    }
  ],
  "relatedProviders": [
    "betomorrow",
    "creme-de-code",
    "noxcod"
  ],
  "projectCta": {
    "title": "Vous cherchez un prestataire pour un besoin précis ?",
    "description": "Décrivez le processus, les outils et les contraintes. Jérémy examine votre demande pour vous aider à identifier des profils à comparer. Dépôt gratuit, sans engagement."
  }
},
  {
  "slug": "combien-coute-projet-ia",
  "title": "Combien coûte un projet IA en entreprise ?",
  "metaTitle": "Prix d’un projet IA : calcul du budget et exemple sur 12 mois",
  "metaDescription": "Calculez le coût d’un projet IA : cadrage, données, intégration, licences et maintenance. Exemple de budget sur 12 mois et grille pour comparer les devis.",
  "h1": "Combien coûte un projet IA en entreprise ?",
  "updatedAt": "2026-09-22",
  "intro": "Le nom de la solution ne suffit pas à donner son prix. Un chatbot de démonstration et un assistant relié à vos documents confidentiels n’ont pas le même périmètre. Pour obtenir un budget utile, chiffrez la construction, l’exploitation et le temps de vos équipes.",
  "summary": "Budget sur 12 mois = prestation initiale + préparation interne + 12 × coûts mensuels + réserve explicitement choisie. Les montants de l’exemple ci-dessous sont des hypothèses de calcul, pas des tarifs observés ni une moyenne du marché.",
  "sections": [
    {
      "title": "Avant de demander un prix : un périmètre commun",
      "body": "Pour comparer les devis, utilisez un tableau avec cinq colonnes : livrable ; quantité ou volume ; inclus dans le prix initial ; coût récurrent ; responsable après livraison. Faites expliciter les exclusions et demandez ce qui change si le volume double. Le montant d’une offre isolée ne permet pas de déduire un prix moyen du marché.",
      "links": [
        {
          "label": "Utiliser la grille de comparaison des devis",
          "href": "/guides/questions-a-poser-prestataire-ia"
        }
      ]
    },
    {
      "title": "Les six postes à demander dans chaque devis",
      "body": "Demandez un montant et un périmètre pour chaque poste. Une ligne non chiffrée ne doit pas être considérée comme gratuite.",
      "bullets": [
        "Cadrage : processus, faisabilité, choix de solution et critères de recette.",
        "Données : collecte, nettoyage, classement et autorisations.",
        "Réalisation : interfaces, connecteurs, workflows et logique IA.",
        "Validation : cas de test, erreurs, sécurité et formation des utilisateurs.",
        "Exploitation : modèles, licences, hébergement et supervision.",
        "Maintenance : incidents, évolutions des API, support et mises à jour."
      ]
    },
    {
      "title": "Exemple chiffré : un pilote à 17 020 € sur douze mois",
      "body": "Exemple pédagogique, hors taxes : imaginons une prestation initiale de 8 000 €, huit jours internes valorisés à 400 € et 300 € par mois d’exploitation et de maintenance. Le sous-total atteint 14 800 €. Une réserve choisie de 15 %, soit 2 220 €, porte le total à 17 020 €. Ces hypothèses servent uniquement à montrer le calcul ; demandez un devis pour votre périmètre."
    },
    {
      "title": "Ce qui fait varier le prix d’un assistant ou d’un agent",
      "body": "La qualité des données, les connecteurs et les exigences de contrôle peuvent peser davantage que le coût du modèle. Un agent qui écrit dans vos outils demande aussi de définir ses autorisations et de gérer les actions incorrectes.",
      "bullets": [
        "Documents propres et centralisés ou fichiers dispersés à préparer.",
        "Lecture seule ou modification de données dans un CRM ou un ERP.",
        "Un outil et une équipe ou plusieurs systèmes et plusieurs rôles.",
        "Faible volume prévisible ou pics d’usage à absorber.",
        "Support aux heures ouvrées ou disponibilité renforcée."
      ],
      "links": [
        {
          "label": "Les postes d’un projet d’automatisation",
          "href": "/cas-usages/automatisation-ia"
        },
        {
          "label": "Les postes d’un assistant documentaire",
          "href": "/cas-usages/rag-base-documentaire"
        }
      ]
    },
    {
      "title": "Comparer forfait, temps passé et abonnement",
      "body": "Un forfait doit décrire précisément ce qu’il inclut et comment sont traitées les demandes supplémentaires. Au temps passé, demandez les taux, les profils, une estimation et un plafond d’engagement. Pour un abonnement, vérifiez les limites d’usage, le support inclus et les conditions de sortie."
    },
    {
      "title": "Tester le coût si le volume double",
      "body": "Demandez deux scénarios au candidat : l’usage prévu et une montée en charge. Séparez ce qui reste fixe de ce qui varie avec les documents, utilisateurs, exécutions ou requêtes. Faites écrire la procédure d’alerte et d’autorisation avant un dépassement.",
      "table": {
        "caption": "Coûts fixes, variables et travail interne",
        "columns": [
          "Poste",
          "Base de calcul à obtenir",
          "Question à poser"
        ],
        "rows": [
          [
            "Licences et hébergement",
            "Forfait, utilisateurs et stockage inclus",
            "Que se passe-t-il au-delà du forfait ?"
          ],
          [
            "Consommation des modèles et automatisations",
            "Volumes inclus et prix des dépassements",
            "Un plafond et une alerte sont-ils possibles ?"
          ],
          [
            "Support et maintenance",
            "Heures, horaires et interventions incluses",
            "Les changements de connecteurs sont-ils compris ?"
          ],
          [
            "Travail interne",
            "Préparation, validation et formation",
            "Combien de temps reste à notre charge ?"
          ]
        ]
      }
    },
    {
      "title": "Estimer le gain avec des hypothèses prudentes",
      "body": "Mesurez le temps réellement récupéré après contrôle humain. Exemple hypothétique : 40 heures gagnées par mois valorisées à 30 € représentent 1 200 € de capacité libérée. Ce n’est une économie de trésorerie que si une dépense diminue réellement. Comparez ensuite ce gain aux coûts récurrents et à l’investissement initial."
    },
    {
      "title": "Réduire le risque avec un périmètre limité",
      "body": "Commencez par un processus et un responsable métier. Mesurez la situation initiale, imposez une validation humaine adaptée et décidez après le pilote si les résultats justifient l’étape suivante. Réduire le périmètre est plus utile que supprimer les tests ou oublier la maintenance."
    }
  ],
  "budgetRows": [
    {
      "label": "Prestation initiale",
      "budget": "8 000 €",
      "complexity": "Hypothèse",
      "notes": "Cadrage, réalisation et recette inclus dans cet exemple."
    },
    {
      "label": "Temps interne",
      "budget": "3 200 €",
      "complexity": "8 jours × 400 €",
      "notes": "Valorisation du temps, à distinguer d’un décaissement supplémentaire."
    },
    {
      "label": "Exploitation et maintenance",
      "budget": "3 600 € / an",
      "complexity": "12 × 300 €",
      "notes": "Hypothèse à remplacer par les licences, usages et support du devis."
    },
    {
      "label": "Réserve choisie de 15 %",
      "budget": "2 220 €",
      "complexity": "15 % × 14 800 €",
      "notes": "Hypothèse de prudence, pas une norme du marché."
    },
    {
      "label": "Total de l’exemple sur 12 mois",
      "budget": "17 020 € HT",
      "complexity": "Coût économique",
      "notes": "Illustration arithmétique, pas une offre commerciale."
    }
  ],
  "risks": [
    "Confondre coût économique et sortie de trésorerie.",
    "Présenter une capacité de travail libérée comme une économie déjà réalisée.",
    "Oublier la préparation des données ou les abonnements.",
    "Comparer un prototype à une solution maintenue en production."
  ],
  "questions": [
    "Quels postes sont exclus du prix initial ?",
    "Comment évolue le coût si le volume double ?",
    "Quels comptes et licences seront à notre nom ?",
    "Quel plafond peut-on fixer au pilote ?",
    "Que coûte l’arrêt et l’export des données ?"
  ],
  "faqs": [
    {
      "question": "Quel est le prix moyen d’un projet IA ?",
      "answer": "Nous ne disposons pas d’un échantillon de devis comparable permettant de donner une moyenne fiable. Le coût dépend du périmètre, des données, des intégrations et des exigences d’exploitation."
    },
    {
      "question": "Peut-on commencer avec moins de 5 000 € ?",
      "answer": "Un périmètre limité peut être étudié avec ce plafond, mais ce montant ne garantit aucun livrable précis. Faites chiffrer une première étape et distinguez-la d’une mise en production complète."
    },
    {
      "question": "Les montants du tableau sont-ils des tarifs de prestataires ?",
      "answer": "Non. Ce sont des hypothèses pédagogiques pour illustrer un budget sur douze mois. Ils doivent être remplacés par les montants de vos devis et vos coûts internes."
    },
    {
      "question": "Que faut-il prévoir après la livraison ?",
      "answer": "Les licences et consommations, l’hébergement, la supervision, le support et les évolutions des outils connectés. Demandez qui prend en charge chaque poste et selon quelles limites."
    }
  ],
  "relatedPages": [
    {
      "label": "Comparer des devis sur le même périmètre",
      "href": "/guides/questions-a-poser-prestataire-ia"
    },
    {
      "label": "Préparer le cahier des charges",
      "href": "/guides/cahier-des-charges-projet-ia"
    },
    {
      "label": "Choisir les candidats à consulter",
      "href": "/guides/comment-choisir-agence-ia"
    }
  ],
  "relatedProviders": [
    "bienfait",
    "eurelis",
    "eleven-labs"
  ],
  "projectCta": {
    "title": "Quel périmètre faire chiffrer avec votre budget ?",
    "description": "Décrivez la tâche, les outils et votre plafond si vous le connaissez. Nous vous aidons à clarifier le besoin avant de solliciter des prestataires. Le dépôt est gratuit ; les prestations font l’objet de leurs devis."
  }
},
  {
  "slug": "agence-ia-ou-consultant-ia",
  "title": "Agence, consultant ou intégrateur IA : que choisir ?",
  "metaTitle": "Agence, consultant ou intégrateur IA : que choisir ?",
  "metaDescription": "Comparatif B2B entre agence IA, consultant IA et intégrateur pour sélectionner le bon prestataire selon le projet.",
  "h1": "Agence, consultant ou intégrateur IA : que choisir ?",
  "intro": "Le bon choix dépend moins du titre du prestataire que du niveau de complexité : cadrage, formation, automatisation simple, intégration SI ou déploiement multi-équipes.",
  "summary": "Choisissez selon le travail à confier : cadrage, réalisation ou connexion à vos outils. Le titre du prestataire ne garantit ni ses compétences ni sa capacité de support. Demandez qui fera le travail, avec quels livrables et quel relais après livraison.",
  "sections": [
    {
      "title": "Le profil dépend du résultat attendu",
      "body": "Cette grille sert à orienter la recherche. Les périmètres se recoupent : un consultant peut développer et une agence peut intégrer. Vérifiez les capacités réelles de l’équipe proposée.",
      "table": {
        "caption": "Trois profils à comparer selon votre besoin",
        "columns": [
          "Votre situation",
          "Profil à étudier",
          "Preuve à demander"
        ],
        "rows": [
          [
            "Vous devez prioriser et rédiger le brief",
            "Consultant ou cabinet de conseil",
            "Exemple de cadrage, livrables et indépendance du conseil"
          ],
          [
            "Vous avez un périmètre à concevoir et livrer",
            "Agence ou équipe spécialisée",
            "Personnes affectées, réalisation comparable et protocole de test"
          ],
          [
            "Vous devez connecter CRM, ERP et droits utilisateurs",
            "Intégrateur ou équipe ayant cette expérience",
            "Démonstration de connexion, gestion des incidents et reprise"
          ]
        ]
      }
    },
    {
      "title": "Quand un consultant peut suffire",
      "body": "Un interlocuteur spécialisé peut cadrer le besoin, accompagner les utilisateurs ou réaliser un périmètre limité. Vérifiez sa disponibilité, les compétences manquantes et la solution de relais en cas d’absence. Ne choisissez pas une personne seule pour son prix sans examiner la continuité attendue."
    },
    {
      "title": "Quand une équipe devient utile",
      "body": "Plusieurs intervenants peuvent être nécessaires pour traiter à la fois le métier, les données, les interfaces et l’exploitation. Demandez les noms ou rôles des personnes affectées, leur disponibilité et la part sous-traitée. La taille annoncée de l’entreprise ne décrit pas l’équipe de votre projet."
    },
    {
      "title": "Comparer les engagements plutôt que des tarifs par catégorie",
      "body": "Un forfait de cadrage et un déploiement maintenu ne sont pas comparables. Demandez le même périmètre à chaque candidat, les exclusions et le coût sur douze mois. Nous ne disposons pas de tarifs comparables permettant de publier une fourchette fiable par type de prestataire.",
      "links": [
        {
          "label": "Les critères de choix d’une agence",
          "href": "/guides/comment-choisir-agence-ia"
        },
        {
          "label": "Calculer le budget complet",
          "href": "/guides/combien-coute-projet-ia"
        },
        {
          "label": "Comparer les devis",
          "href": "/guides/questions-a-poser-prestataire-ia"
        }
      ]
    }
  ],
  "risks": [
    "Choisir sur le seul intitulé agence ou consultant.",
    "Confondre effectif de l’entreprise et équipe affectée.",
    "Absence de relais ou de documentation après livraison."
  ],
  "questions": [
    "Qui porte la responsabilité technique ?",
    "Quelles compétences sont nécessaires ?",
    "Le projet touche-t-il au SI ?",
    "Combien d'équipes seront utilisatrices ?"
  ],
  "faqs": [
    {
      "question": "Un consultant IA peut-il livrer une automatisation ?",
      "answer": "Oui si le périmètre est maîtrisé. Pour un système critique ou multi-outils, une équipe structurée peut être plus adaptée."
    },
    {
      "question": "Une agence IA est-elle toujours plus chère ?",
      "answer": "Pas toujours, mais elle porte souvent plus de coordination et de production. Il faut comparer les livrables."
    },
    {
      "question": "Peut-on combiner consultant et intégrateur ?",
      "answer": "Oui. Un consultant peut cadrer le besoin puis aider à sélectionner un intégrateur."
    },
    {
      "question": "Comment éviter le mauvais choix ?",
      "answer": "Décrire le projet, les contraintes, le budget et demander une sélection cohérente plutôt qu'un annuaire trop large."
    }
  ],
  "relatedPages": [
    {
      "label": "Parcourir les consultants",
      "href": "/consultants-ia"
    },
    {
      "label": "Parcourir les agences",
      "href": "/agences-ia"
    },
    {
      "label": "Parcourir les intégrateurs",
      "href": "/integrateurs-ia"
    }
  ],
  "relatedProviders": [
    "bienfait",
    "eurelis",
    "eleven-labs"
  ],
  "updatedAt": "2026-09-22",
  "projectCta": {
    "title": "Vous hésitez entre plusieurs types de prestataires ?",
    "description": "Indiquez ce que vous avez déjà cadré, ce qui doit être livré et les outils concernés. Nous vous aidons à préciser le profil recherché, sans engagement."
  }
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
      {
        title: "Objectifs business",
        body: "Indiquez ce qui doit changer concrètement : temps gagné, erreurs réduites, délai de traitement, qualité de réponse, capacité de reporting.",
      },
      {
        title: "Données et accès",
        body: "Listez les sources, formats, volumes, propriétaires, droits d'accès, données personnelles et données sensibles.",
      },
      {
        title: "Utilisateurs et validation humaine",
        body: "Précisez qui utilise la solution, qui valide les sorties, qui corrige les erreurs et qui décide en cas d'incertitude.",
      },
      {
        title: "Contraintes techniques",
        body: "Documentez CRM, ERP, messagerie, stockage documentaire, SSO, API, hébergement et contraintes internes.",
      },
      {
        title: "Livrables, planning et budget",
        body: "Demandez des jalons clairs : cadrage, prototype, tests, mise en production, formation, maintenance.",
      },
    ],
    risks: [
      "périmètre trop large",
      "données non disponibles",
      "absence de responsable métier",
      "critères de succès non mesurables",
    ],
    questions: [
      "Quel résultat business sera mesuré ?",
      "Qui valide les sorties IA ?",
      "Quelles données ne doivent jamais sortir ?",
      "Quel niveau d'autonomie est acceptable ?",
    ],
    faqs: [
      {
        question:
          "Faut-il un cahier des charges avant de parler à un prestataire ?",
        answer:
          "Pas toujours. Un brief structuré suffit pour un premier échange, mais un cahier des charges devient utile dès que plusieurs devis sont comparés.",
      },
      {
        question: "Qui doit rédiger le cahier des charges ?",
        answer:
          "La direction métier doit contribuer. Le prestataire ou un tiers peut aider à cadrer les aspects techniques.",
      },
      {
        question: "Faut-il inclure le budget ?",
        answer:
          "Oui, au moins une fourchette. Sans budget, les réponses risquent d'être incomparables.",
      },
      {
        question: "Le cahier des charges doit-il être très long ?",
        answer:
          "Non. Il doit être précis, pas volumineux. Une dizaine de pages bien structurées peut suffire.",
      },
    ],
    relatedPages: [
      ...commonRelated,
      {
        label: "Questions à poser",
        href: "/guides/questions-a-poser-prestataire-ia",
      },
      {
        label: "Combien coûte un projet IA",
        href: "/guides/combien-coute-projet-ia",
      },
    ],
    relatedProviders: [
      "atelier-ia-conseil",
      "cabinet-synapse-ia",
      "integria-solutions",
    ],
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
      {
        title: "Identifier les données personnelles",
        body: "Un email, un nom, un ticket support, un dossier RH ou une note commerciale peuvent contenir des données personnelles.",
      },
      {
        title: "Traiter les données sensibles avec prudence",
        body: "Santé, RH, juridique, finance et données clients confidentielles exigent des garanties supplémentaires.",
      },
      {
        title: "Vérifier les sous-traitants",
        body: "Demandez quels outils IA sont utilisés, où les données sont hébergées, si elles servent à entraîner des modèles et quels contrats encadrent le traitement.",
      },
      {
        title: "Garder une validation humaine",
        body: "Pour les décisions importantes, l'IA doit assister. Elle ne doit pas décider seule sans contrôle adapté.",
      },
    ],
    risks: [
      "copie de données sensibles dans un outil public",
      "absence de DPA",
      "logs non maîtrisés",
      "décisions automatisées non contrôlées",
    ],
    questions: [
      "Où sont hébergées les données ?",
      "Les prompts sont-ils conservés ?",
      "Les données entraînent-elles un modèle ?",
      "Comment supprimer ou auditer les traces ?",
    ],
    faqs: [
      {
        question: "Peut-on utiliser ChatGPT avec des données clients ?",
        answer:
          "Cela dépend de l'offre, du paramétrage, du contrat et du type de données. Il faut vérifier avant usage.",
      },
      {
        question: "Un projet RAG est-il plus risqué ?",
        answer:
          "Il peut l'être si la base documentaire contient des données sensibles ou si les droits d'accès sont mal gérés.",
      },
      {
        question:
          "Le prestataire doit-il signer un accord de confidentialité ?",
        answer:
          "Pour un projet B2B avec données internes, c'est fortement recommandé.",
      },
      {
        question: "Faut-il impliquer le DPO ?",
        answer:
          "Oui lorsque des données personnelles ou sensibles sont traitées.",
      },
    ],
    relatedPages: [
      ...commonRelated,
      {
        label: "RAG base documentaire",
        href: "/cas-usages/rag-base-documentaire",
      },
      {
        label: "IA traitement documentaire",
        href: "/cas-usages/ia-traitement-documentaire",
      },
    ],
    relatedProviders: ["rag-conseil", "integria-solutions", "dataops-pme"],
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
      {
        title: "Choisir un cas d'usage opérationnel",
        body: "Priorisez un flux fréquent : demandes clients, documents, reporting, relances, qualification ou support interne.",
      },
      {
        title: "Limiter le périmètre initial",
        body: "Un premier projet doit prouver une valeur mesurable sans toucher tout le système d'information.",
      },
      {
        title: "Impliquer les utilisateurs",
        body: "Les équipes doivent comprendre ce que l'IA fait, ce qu'elle ne fait pas et comment corriger les erreurs.",
      },
      {
        title: "Mesurer avant d'étendre",
        body: "Temps gagné, taux d'erreur, délai de traitement, qualité de réponse : choisissez quelques indicateurs simples.",
      },
    ],
    budgetRows: [
      {
        label: "Premier atelier",
        budget: "3 000 à 8 000 €",
        complexity: "Faible",
        notes: "Priorisation et feuille de route.",
      },
      {
        label: "Premier workflow",
        budget: "8 000 à 25 000 €",
        complexity: "Moyenne",
        notes: "Automatisation contrôlée.",
      },
      {
        label: "Extension multi-équipes",
        budget: "25 000 €+",
        complexity: "Élevée",
        notes: "Gouvernance et maintenance nécessaires.",
      },
    ],
    risks: [
      "projet trop large",
      "absence de données propres",
      "outil choisi avant le besoin",
      "formation oubliée",
    ],
    questions: [
      "Quel irritant revient chaque semaine ?",
      "Qui utilisera la solution ?",
      "Quel gain sera mesuré ?",
      "Quel risque nécessite une validation humaine ?",
    ],
    faqs: [
      {
        question: "Quel est le meilleur premier projet IA ?",
        answer:
          "Un projet fréquent, mesurable, avec données disponibles et faible risque de décision automatisée.",
      },
      {
        question: "Faut-il recruter avant de lancer ?",
        answer:
          "Pas nécessairement. Un prestataire peut aider à cadrer et transférer la méthode aux équipes internes.",
      },
      {
        question: "Combien de temps faut-il ?",
        answer:
          "Un cadrage peut prendre quelques semaines. Une intégration sérieuse prend souvent un à trois mois.",
      },
      {
        question: "Comment éviter l'effet gadget ?",
        answer:
          "Relier chaque usage à un processus métier, un responsable et un indicateur.",
      },
    ],
    relatedPages: [
      ...commonRelated,
      { label: "Automatisation IA", href: "/cas-usages/automatisation-ia" },
      {
        label: "Formation IA entreprise",
        href: "/cas-usages/formation-ia-entreprise",
      },
    ],
    relatedProviders: [
      "opsia-france",
      "hexa-automatisation",
      "cabinet-synapse-ia",
    ],
  },
  {
  "slug": "questions-a-poser-prestataire-ia",
  "title": "Comparer les devis de prestataires IA",
  "metaTitle": "Comparer des devis IA : grille et questions à poser",
  "metaDescription": "Comparez des devis IA sur le même périmètre : livrables, données, recette, coût sur 12 mois, maintenance et sortie. Repérez les exclusions à clarifier.",
  "h1": "Comparer des devis IA : les questions à poser avant de signer",
  "intro": "Deux montants ne se comparent que si les offres couvrent le même travail. Avant de signer, faites préciser les livrables, les conditions de validation et ce qui restera à votre charge.",
  "summary": "Reprenez chaque devis dans une grille commune. Marquez chaque point « inclus et décrit », « option chiffrée », « exclu » ou « à clarifier ». Une zone vide n’est pas un engagement : demandez une réponse écrite avant de choisir.",
  "sections": [
    {
      "title": "1. Vérifier que les offres répondent au même besoin",
      "body": "Figez une version du brief avec le processus, les outils, le volume, les utilisateurs et les résultats attendus. Si un candidat propose un autre périmètre, demandez une variante distincte. Un prototype ne se compare pas à une solution exploitée et maintenue.",
      "links": [
        {
          "label": "Préparer le brief commun",
          "href": "/guides/cahier-des-charges-projet-ia"
        },
        {
          "label": "Sélectionner les candidats avant le devis",
          "href": "/guides/comment-choisir-agence-ia"
        }
      ]
    },
    {
      "title": "2. Remplir une grille pour chaque devis",
      "body": "Pour chaque ligne, recopiez la réponse, la page du devis et le point restant à clarifier. Cette grille est une méthode de comparaison proposée par Entreprise.ai, pas une notation des prestataires.",
      "table": {
        "caption": "Grille de lecture d’un devis IA",
        "columns": [
          "À comparer",
          "Ce qui doit être écrit",
          "Question si cela manque"
        ],
        "rows": [
          [
            "Livrables et exclusions",
            "Fonctions, connecteurs, volumes et limites",
            "Que faut-il payer ou réaliser en complément ?"
          ],
          [
            "Préparation des données",
            "Sources, formats, nettoyage et responsable",
            "Qui rend les données utilisables ?"
          ],
          [
            "Recette du pilote",
            "Jeu de tests, résultats attendus et décision de validation",
            "Qu’est-ce qui permet d’accepter ou de refuser le pilote ?"
          ],
          [
            "Accès et confidentialité",
            "Comptes, droits, flux et conservation",
            "Qui peut consulter les documents et les traces ?"
          ],
          [
            "Coût sur douze mois",
            "Initial, récurrent, variable et travail interne",
            "Quel est le total avec l’usage prévu ?"
          ],
          [
            "Support et incidents",
            "Responsable, horaires, délai et limites",
            "Qui intervient si le traitement s’arrête ?"
          ],
          [
            "Sortie et reprise",
            "Export, documentation, comptes et coût de transfert",
            "Que récupérons-nous si nous changeons de prestataire ?"
          ]
        ]
      }
    },
    {
      "title": "3. Rendre les prix comparables",
      "body": "Additionnez le coût initial, les charges récurrentes sur douze mois et le travail interne. Distinguez les options indispensables des améliorations facultatives. Exemple fictif : une offre A à 8 000 € puis 500 € par mois représente 14 000 € la première année ; une offre B à 11 000 € puis 200 € par mois représente 13 400 €. Cette comparaison n’a de sens qu’à périmètre et durée identiques, avant les autres coûts éventuels.",
      "links": [
        {
          "label": "Détailler le calcul du budget total",
          "href": "/guides/combien-coute-projet-ia"
        }
      ]
    },
    {
      "title": "4. Faire préciser les tests selon le projet",
      "body": "Pour une automatisation, demandez comment sont traités les doublons, les pannes et les reprises. Pour un assistant documentaire, demandez une réponse sourcée, un cas sans réponse et un test d’accès interdit. Fixez les critères avec le responsable métier avant le pilote.",
      "links": [
        {
          "label": "Préparer les tests d’une automatisation",
          "href": "/cas-usages/automatisation-ia"
        },
        {
          "label": "Évaluer un assistant documentaire",
          "href": "/cas-usages/rag-base-documentaire"
        }
      ]
    },
    {
      "title": "5. Traiter les points bloquants avant de noter les offres",
      "body": "Une bonne note commerciale ne compense pas l’absence de droits sur les données, de responsable de maintenance ou de livrable vérifiable. Demandez une clarification écrite. Si le périmètre reste incertain, faites chiffrer un cadrage limité avec ses livrables et sa condition d’arrêt."
    }
  ],
  "questions": [
    "Quelle version du brief couvre ce prix ?",
    "Quelles options sont nécessaires pour mettre réellement en production ?",
    "Qui valide le pilote et sur quels exemples ?",
    "Quel montant payons-nous si nous arrêtons après le pilote ?",
    "Que récupérons-nous à la fin de la prestation ?"
  ],
  "risks": [
    "Prix d’appel excluant les connecteurs nécessaires.",
    "Maintenance sans périmètre ni interlocuteur.",
    "Recette limitée à une démonstration préparée.",
    "Comptes et documentation impossibles à reprendre."
  ],
  "faqs": [
    {
      "question": "Faut-il choisir le devis IA le moins cher ?",
      "answer": "Comparez d’abord les livrables, les exclusions et le coût total sur la même durée. Un devis initial moins élevé peut demander davantage de travail interne ou de dépenses récurrentes."
    },
    {
      "question": "Comment comparer un forfait et une prestation au temps passé ?",
      "answer": "Demandez les livrables attendus dans les deux cas. Pour le temps passé, obtenez les profils, les taux, l’estimation et un plafond d’engagement ; pour le forfait, les exclusions et les conditions de modification."
    },
    {
      "question": "Que faire si le prestataire ne chiffre pas la maintenance ?",
      "answer": "Demandez son périmètre et son mode de facturation, ou identifiez qui l’assurera. Ne considérez pas une ligne absente comme un service gratuit."
    },
    {
      "question": "Une grille remplace-t-elle la vérification des références ?",
      "answer": "Non. Les références, le rôle de l’équipe et la capacité à livrer se vérifient séparément. La grille aide à comparer les engagements écrits."
    }
  ],
  "relatedPages": [
    {
      "label": "Calculer le budget total",
      "href": "/guides/combien-coute-projet-ia"
    },
    {
      "label": "Choisir une agence IA",
      "href": "/guides/comment-choisir-agence-ia"
    },
    {
      "label": "Agence ou consultant ?",
      "href": "/guides/agence-ia-ou-consultant-ia"
    }
  ],
  "relatedProviders": [
    "betomorrow",
    "creme-de-code",
    "noxcod"
  ],
  "updatedAt": "2026-09-22",
  "projectCta": {
    "title": "Vous avez des devis difficiles à comparer ?",
    "description": "Expliquez votre besoin et les points qui restent flous, sans joindre de documents confidentiels. Nous pouvons vous aider à clarifier les critères et les profils à consulter. Demande gratuite, sans engagement."
  }
},
];

export function getGuideBySlug(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
