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
    slug: "comment-choisir-agence-ia",
    title: "Comment choisir une agence IA ?",
    metaTitle: "Agence IA pour PME : comment choisir et comparer les devis ?",
    metaDescription:
      "Comparez les agences IA avec une grille en 6 critères : démonstration, données, devis, équipe, maintenance et réversibilité. Questions et livrables à demander.",
    h1: "Comment choisir une agence IA pour son entreprise ?",
    updatedAt: "2026-09-21",
    intro:
      "Pour comparer deux agences, donnez-leur le même problème, les mêmes contraintes et les mêmes critères de réussite. Une présentation commerciale ne permet pas, à elle seule, de savoir qui saura livrer votre projet.",
    summary:
      "Notre méthode : un brief commun, deux ou trois agences pertinentes, une démonstration sur des exemples représentatifs et une décision documentée. L’identité légale d’un prestataire est un premier contrôle ; elle ne prouve ni son expérience métier ni la qualité de ses livraisons.",
    sections: [
      {
        title: "1. Rédiger un brief que chaque agence pourra chiffrer",
        body: "Décrivez une tâche réelle avant de demander un chatbot ou un agent. Le même brief doit être envoyé à chaque candidat pour rendre les réponses comparables.",
        bullets: [
          "Processus actuel : étapes, fréquence et personnes concernées.",
          "Résultat attendu : temps de traitement, erreurs acceptables et validation humaine.",
          "Données : exemples anonymisés, formats, volumes et droits d’accès.",
          "Outils à connecter, contraintes d’hébergement, responsable interne et plafond budgétaire.",
        ],
      },
      {
        title: "2. Choisir une spécialité adaptée au travail à livrer",
        body: "Une automatisation entre deux outils, un assistant documentaire et un agent autorisé à modifier un ERP présentent des difficultés différentes. Demandez au candidat de justifier son approche et d’identifier ce qui peut fonctionner sans IA.",
        bullets: [
          "Automatisation : gérer les exceptions et la reprise après échec.",
          "RAG documentaire : retrouver la bonne source et respecter les droits de lecture.",
          "Agent connecté : limiter les actions et contrôler leurs conséquences.",
        ],
      },
      {
        title: "3. Comparer les candidats avec six critères communs",
        body: "Attribuez à chaque critère une appréciation documentée : absent, partiel ou démontré. Conservez les pièces qui justifient votre choix. Une note totale ne doit pas compenser un refus de traiter un risque bloquant.",
        bullets: [
          "Compréhension métier : reformulation du problème et critères de succès mesurables.",
          "Preuve de livraison : mission comparable, rôle exact du candidat et référence vérifiable.",
          "Données et sécurité : flux, accès, conservation et responsabilités explicités.",
          "Équipe : personnes qui réaliseront le travail, disponibilité et sous-traitance.",
          "Devis : livrables, exclusions, recette, coûts récurrents et coût total sur douze mois.",
          "Après livraison : supervision, délais d’intervention, documentation et réversibilité.",
        ],
      },
      {
        title: "4. Demander une démonstration qui peut aussi échouer",
        body: "Préparez un petit jeu d’exemples représentatifs : cas courants, documents contradictoires, information absente et accès interdit. Convenez du résultat attendu avant la démonstration. Le candidat doit montrer comment la solution signale une incertitude et passe la main.",
        bullets: [
          "Faire citer le document ou l’enregistrement à l’origine d’une réponse.",
          "Tester une demande qui dépasse les autorisations de l’utilisateur.",
          "Observer le comportement lors d’une panne de connecteur.",
          "Mesurer les corrections nécessaires, pas seulement la vitesse.",
        ],
      },
      {
        title:
          "5. Séparer prototype, pilote et mise en production dans le devis",
        body: "Un prototype teste une idée. Un pilote confronte la solution à des utilisateurs et données représentatifs. La production ajoute notamment les droits, le suivi, les sauvegardes et le support. Demandez un livrable et une condition d’arrêt pour chaque étape.",
      },
      {
        title: "6. Préparer la sortie dès le début du projet",
        body: "Faites préciser la remise du code ou des workflows, la propriété des comptes et la documentation. Demandez comment changer de prestataire et exporter les données. Les conditions d’accès et de reprise doivent être écrites, même si la maintenance est optionnelle.",
      },
    ],
    risks: [
      "Démonstration uniquement sur des exemples choisis par le vendeur.",
      "Logo client sans description du travail réellement réalisé.",
      "Tarif attractif qui exclut les connecteurs, la recette ou le support.",
      "Absence de personne responsable après la livraison.",
    ],
    questions: [
      "Qui réalise la mission et quelle mission comparable cette équipe a-t-elle livrée ?",
      "Quel résultat déclenche la validation du pilote ?",
      "Qui voit les données, où transitent-elles et combien de temps sont-elles conservées ?",
      "Quel est le coût total sur douze mois, y compris notre travail interne ?",
      "Comment récupérer les comptes, les workflows et les données si nous arrêtons ?",
    ],
    faqs: [
      {
        question: "Combien d’agences IA faut-il comparer ?",
        answer:
          "Deux ou trois candidats adaptés au besoin permettent une comparaison approfondie. Le point essentiel est de leur soumettre le même brief et d’obtenir des réponses documentées.",
      },
      {
        question:
          "Une identité vérifiée garantit-elle la qualité d’une agence ?",
        answer:
          "Non. Le contrôle d’identité relie la fiche à une entreprise réelle. Les compétences, les références et la qualité de livraison demandent des vérifications distinctes.",
      },
      {
        question: "Faut-il payer un prototype avant de choisir ?",
        answer:
          "Ce peut être un test utile si le périmètre, les livrables et la condition d’arrêt sont explicites. Il ne remplace pas les vérifications de sécurité, de maintenance et d’intégration.",
      },
      {
        question: "Quels documents demander avant de signer ?",
        answer:
          "Un devis détaillé, une description des flux de données, les critères de recette, les responsabilités de maintenance et les conditions de réversibilité.",
      },
    ],
    relatedPages: [
      {
        label: "Comparer les agences IA",
        href: "/agences-ia",
      },
      {
        label: "Décrire mon projet IA",
        href: "/deposer-un-projet-ia",
      },
      {
        label: "Préparer un cahier des charges",
        href: "/guides/cahier-des-charges-projet-ia",
      },
      {
        label: "Calculer le coût total d’un projet IA",
        href: "/guides/combien-coute-projet-ia",
      },
    ],
    relatedProviders: ["betomorrow", "creme-de-code", "noxcod"],
  },
  {
    slug: "combien-coute-projet-ia",
    title: "Combien coûte un projet IA en entreprise ?",
    metaTitle: "Prix d’un projet IA : calcul du budget et exemple sur 12 mois",
    metaDescription:
      "Calculez le coût d’un projet IA : cadrage, données, intégration, licences et maintenance. Exemple de budget sur 12 mois et grille pour comparer les devis.",
    h1: "Combien coûte un projet IA en entreprise ?",
    updatedAt: "2026-09-21",
    intro:
      "Le nom de la solution ne suffit pas à donner son prix. Un chatbot de démonstration et un assistant relié à vos documents confidentiels n’ont pas le même périmètre. Pour obtenir un budget utile, chiffrez la construction, l’exploitation et le temps de vos équipes.",
    summary:
      "Budget sur 12 mois = prestation initiale + préparation interne + 12 × coûts mensuels + réserve explicitement choisie. Les montants de l’exemple ci-dessous sont des hypothèses de calcul, pas des tarifs observés ni une moyenne du marché.",
    sections: [
      {
        title: "Avant de demander un prix : un périmètre commun",
        body: "Pour comparer les devis, utilisez un tableau avec cinq colonnes : livrable ; quantité ou volume ; inclus dans le prix initial ; coût récurrent ; responsable après livraison. Faites expliciter les exclusions et demandez ce qui change si le volume double. Le montant d’une offre isolée ne permet pas de déduire un prix moyen du marché.",
      },
      {
        title: "Les six postes à demander dans chaque devis",
        body: "Demandez un montant et un périmètre pour chaque poste. Une ligne non chiffrée ne doit pas être considérée comme gratuite.",
        bullets: [
          "Cadrage : processus, faisabilité, choix de solution et critères de recette.",
          "Données : collecte, nettoyage, classement et autorisations.",
          "Réalisation : interfaces, connecteurs, workflows et logique IA.",
          "Validation : cas de test, erreurs, sécurité et formation des utilisateurs.",
          "Exploitation : modèles, licences, hébergement et supervision.",
          "Maintenance : incidents, évolutions des API, support et mises à jour.",
        ],
      },
      {
        title: "Exemple chiffré : un pilote à 17 020 € sur douze mois",
        body: "Exemple pédagogique, hors taxes : imaginons une prestation initiale de 8 000 €, huit jours internes valorisés à 400 € et 300 € par mois d’exploitation et de maintenance. Le sous-total atteint 14 800 €. Une réserve choisie de 15 %, soit 2 220 €, porte le total à 17 020 €. Ces hypothèses servent uniquement à montrer le calcul ; demandez un devis pour votre périmètre.",
      },
      {
        title: "Ce qui fait varier le prix d’un assistant ou d’un agent",
        body: "La qualité des données, les connecteurs et les exigences de contrôle peuvent peser davantage que le coût du modèle. Un agent qui écrit dans vos outils demande aussi de définir ses autorisations et de gérer les actions incorrectes.",
        bullets: [
          "Documents propres et centralisés ou fichiers dispersés à préparer.",
          "Lecture seule ou modification de données dans un CRM ou un ERP.",
          "Un outil et une équipe ou plusieurs systèmes et plusieurs rôles.",
          "Faible volume prévisible ou pics d’usage à absorber.",
          "Support aux heures ouvrées ou disponibilité renforcée.",
        ],
      },
      {
        title: "Comparer forfait, temps passé et abonnement",
        body: "Un forfait doit décrire précisément ce qu’il inclut et comment sont traitées les demandes supplémentaires. Au temps passé, demandez les taux, les profils, une estimation et un plafond d’engagement. Pour un abonnement, vérifiez les limites d’usage, le support inclus et les conditions de sortie.",
      },
      {
        title: "Estimer le gain avec des hypothèses prudentes",
        body: "Mesurez le temps réellement récupéré après contrôle humain. Exemple hypothétique : 40 heures gagnées par mois valorisées à 30 € représentent 1 200 € de capacité libérée. Ce n’est une économie de trésorerie que si une dépense diminue réellement. Comparez ensuite ce gain aux coûts récurrents et à l’investissement initial.",
      },
      {
        title: "Réduire le risque avec un périmètre limité",
        body: "Commencez par un processus et un responsable métier. Mesurez la situation initiale, imposez une validation humaine adaptée et décidez après le pilote si les résultats justifient l’étape suivante. Réduire le périmètre est plus utile que supprimer les tests ou oublier la maintenance.",
      },
    ],
    budgetRows: [
      {
        label: "Prestation initiale",
        budget: "8 000 €",
        complexity: "Hypothèse",
        notes: "Cadrage, réalisation et recette inclus dans cet exemple.",
      },
      {
        label: "Temps interne",
        budget: "3 200 €",
        complexity: "8 jours × 400 €",
        notes:
          "Valorisation du temps, à distinguer d’un décaissement supplémentaire.",
      },
      {
        label: "Exploitation et maintenance",
        budget: "3 600 € / an",
        complexity: "12 × 300 €",
        notes:
          "Hypothèse à remplacer par les licences, usages et support du devis.",
      },
      {
        label: "Réserve choisie de 15 %",
        budget: "2 220 €",
        complexity: "15 % × 14 800 €",
        notes: "Hypothèse de prudence, pas une norme du marché.",
      },
      {
        label: "Total de l’exemple sur 12 mois",
        budget: "17 020 € HT",
        complexity: "Coût économique",
        notes: "Illustration arithmétique, pas une offre commerciale.",
      },
    ],
    risks: [
      "Confondre coût économique et sortie de trésorerie.",
      "Présenter une capacité de travail libérée comme une économie déjà réalisée.",
      "Oublier la préparation des données ou les abonnements.",
      "Comparer un prototype à une solution maintenue en production.",
    ],
    questions: [
      "Quels postes sont exclus du prix initial ?",
      "Comment évolue le coût si le volume double ?",
      "Quels comptes et licences seront à notre nom ?",
      "Quel plafond peut-on fixer au pilote ?",
      "Que coûte l’arrêt et l’export des données ?",
    ],
    faqs: [
      {
        question: "Quel est le prix moyen d’un projet IA ?",
        answer:
          "Nous ne disposons pas d’un échantillon de devis comparable permettant de donner une moyenne fiable. Le coût dépend du périmètre, des données, des intégrations et des exigences d’exploitation.",
      },
      {
        question: "Peut-on commencer avec moins de 5 000 € ?",
        answer:
          "Un périmètre limité peut être étudié avec ce plafond, mais ce montant ne garantit aucun livrable précis. Faites chiffrer une première étape et distinguez-la d’une mise en production complète.",
      },
      {
        question:
          "Les montants du tableau sont-ils des tarifs de prestataires ?",
        answer:
          "Non. Ce sont des hypothèses pédagogiques pour illustrer un budget sur douze mois. Ils doivent être remplacés par les montants de vos devis et vos coûts internes.",
      },
      {
        question: "Que faut-il prévoir après la livraison ?",
        answer:
          "Les licences et consommations, l’hébergement, la supervision, le support et les évolutions des outils connectés. Demandez qui prend en charge chaque poste et selon quelles limites.",
      },
    ],
    relatedPages: [
      {
        label: "Comparer les agences IA",
        href: "/agences-ia",
      },
      {
        label: "Décrire mon projet IA",
        href: "/deposer-un-projet-ia",
      },
      {
        label: "Préparer un cahier des charges",
        href: "/guides/cahier-des-charges-projet-ia",
      },
      {
        label: "Choisir une agence et comparer les devis",
        href: "/guides/comment-choisir-agence-ia",
      },
    ],
    relatedProviders: ["bienfait", "eurelis", "eleven-labs"],
  },
  {
    slug: "agence-ia-ou-consultant-ia",
    title: "Agence IA ou consultant IA : que choisir ?",
    metaTitle:
      "Agence IA ou consultant IA : choisir selon budget et complexité",
    metaDescription:
      "Comparatif B2B entre agence IA, consultant IA et intégrateur pour sélectionner le bon prestataire selon le projet.",
    h1: "Agence IA ou consultant IA : que choisir ?",
    intro:
      "Le bon choix dépend moins du titre du prestataire que du niveau de complexité : cadrage, formation, automatisation simple, intégration SI ou déploiement multi-équipes.",
    summary:
      "Un consultant convient souvent au cadrage et aux premiers usages. Une agence ou un intégrateur devient préférable quand plusieurs expertises, connecteurs ou garanties de maintenance sont nécessaires.",
    sections: [
      {
        title: "Quand choisir un consultant IA",
        body: "Pour clarifier une stratégie, former une direction, auditer les processus ou préparer un cahier des charges sans engager trop tôt un gros projet.",
      },
      {
        title: "Quand choisir une agence IA",
        body: "Pour livrer un workflow, un chatbot, un agent interne ou une automatisation nécessitant design de solution, développement, tests et accompagnement.",
      },
      {
        title: "Quand choisir un intégrateur",
        body: "Pour connecter l'IA à un SI existant, gérer des droits, des API, de la sécurité, des environnements et une maintenance structurée.",
      },
    ],
    budgetRows: [
      {
        label: "Consultant IA",
        budget: "5 000 à 20 000 €",
        complexity: "Cadrage à moyen",
        notes: "Souple, rapide, dépend fortement du profil.",
      },
      {
        label: "Agence IA",
        budget: "10 000 à 60 000 €",
        complexity: "Moyen à élevé",
        notes: "Plusieurs compétences et capacité de production.",
      },
      {
        label: "Intégrateur IA",
        budget: "20 000 à 100 000 €+",
        complexity: "Élevé",
        notes: "Adapté aux contraintes SI et ETI.",
      },
    ],
    risks: [
      "choisir une agence pour un simple cadrage",
      "choisir un solo pour une intégration critique",
      "ne pas prévoir la conduite du changement",
    ],
    questions: [
      "Qui porte la responsabilité technique ?",
      "Quelles compétences sont nécessaires ?",
      "Le projet touche-t-il au SI ?",
      "Combien d'équipes seront utilisatrices ?",
    ],
    faqs: [
      {
        question: "Un consultant IA peut-il livrer une automatisation ?",
        answer:
          "Oui si le périmètre est maîtrisé. Pour un système critique ou multi-outils, une équipe structurée peut être plus adaptée.",
      },
      {
        question: "Une agence IA est-elle toujours plus chère ?",
        answer:
          "Pas toujours, mais elle porte souvent plus de coordination et de production. Il faut comparer les livrables.",
      },
      {
        question: "Peut-on combiner consultant et intégrateur ?",
        answer:
          "Oui. Un consultant peut cadrer le besoin puis aider à sélectionner un intégrateur.",
      },
      {
        question: "Comment éviter le mauvais choix ?",
        answer:
          "Décrire le projet, les contraintes, le budget et demander une sélection cohérente plutôt qu'un annuaire trop large.",
      },
    ],
    relatedPages: [
      ...commonRelated,
      { label: "Consultants IA", href: "/consultants-ia" },
      { label: "Intégrateurs IA", href: "/integrateurs-ia" },
    ],
    relatedProviders: [
      "atelier-ia-conseil",
      "hexa-automatisation",
      "automatech-b2b",
    ],
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
      {
        title: "Questions sur le besoin",
        body: "Demandez au prestataire de reformuler le problème, les utilisateurs, le résultat attendu et les limites du périmètre.",
      },
      {
        title: "Questions sur les données",
        body: "Faites préciser les sources, droits d'accès, hébergement, anonymisation, conservation et suppression.",
      },
      {
        title: "Questions sur la livraison",
        body: "Clarifiez les jalons, tests, documentation, formation, transfert de compétence et support.",
      },
      {
        title: "Questions sur le modèle économique",
        body: "Comparez forfait, régie, maintenance, licences logicielles et coûts récurrents.",
      },
    ],
    questions: [
      "Quel problème métier pensez-vous résoudre ?",
      "Quelles données sont nécessaires ?",
      "Quels risques voyez-vous dans notre demande ?",
      "Comment testez-vous la qualité des réponses ?",
      "Que se passe-t-il si le modèle IA change ?",
      "Quels coûts récurrents faut-il prévoir ?",
      "Quels livrables aurons-nous en fin de mission ?",
      "Qui sera responsable de la maintenance ?",
    ],
    risks: [
      "réponse trop commerciale",
      "absence de questions côté prestataire",
      "délais irréalistes",
      "promesse d'autonomie totale sans contrôle",
    ],
    faqs: [
      {
        question: "Un bon prestataire doit-il challenger le brief ?",
        answer:
          "Oui. Un prestataire sérieux signale les risques, les dépendances et les zones floues.",
      },
      {
        question: "Faut-il demander des références ?",
        answer:
          "Oui, mais les références doivent être comparables au type de projet envisagé.",
      },
      {
        question: "Que faire si les réponses sont trop techniques ?",
        answer: "Demandez une reformulation métier et des livrables concrets.",
      },
      {
        question: "Comment comparer deux réponses ?",
        answer:
          "Comparez périmètre, hypothèses, risques, maintenance, planning et critères de succès, pas seulement le tarif.",
      },
    ],
    relatedPages: [
      ...commonRelated,
      {
        label: "Comment choisir une agence IA",
        href: "/guides/comment-choisir-agence-ia",
      },
      {
        label: "Cahier des charges IA",
        href: "/guides/cahier-des-charges-projet-ia",
      },
    ],
    relatedProviders: [
      "atelier-ia-conseil",
      "integria-solutions",
      "rag-conseil",
    ],
  },
];

export function getGuideBySlug(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
