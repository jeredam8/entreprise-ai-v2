/** Notes éditoriales sourcées, indépendantes de l’export Supabase des identités. */
export type ProviderResearch = { fit: string; offer: string; evidence: string; question: string; source: string };
export const researchDate = "2026-09-09";
export const providerResearch: Record<string, ProviderResearch> = {
  "betomorrow": {
    "fit": "RAG documentaire et développement de produits IA",
    "offer": "BeTomorrow présente des assistants fondés sur des documents internes et un accompagnement allant de l’expérimentation au suivi en production. Son offre cite plusieurs familles de modèles, dont GPT, Mistral, Claude et Gemini.",
    "evidence": "L’agence présente un agent donnant accès aux documents du plan local d’urbanisme de Bordeaux Métropole, ainsi qu’une analyse des retours utilisateurs de Toilet Finder. Ces réalisations sont décrites par le prestataire ; nous n’en avons pas audité les résultats.",
    "question": "Demander une démonstration sur vos documents, avec contrôle des droits et mesure des réponses incorrectes.",
    "source": "https://www.betomorrow.com/nos-expertises/agence-product-development/IA"
  },
  "creme-de-code": {
    "fit": "Automatisation des outils métier et assistants documentaires",
    "offer": "Crème de Code décrit des chatbots alimentés par les documents de l’entreprise, des agents vocaux et des automatisations. Les intégrations citées comprennent Outlook, HubSpot, Pipedrive, Salesforce, Notion et Google Drive.",
    "evidence": "Le site présente des démonstrations de ses solutions. Une démonstration ne suffit pas à établir une mission client comparable : demander le périmètre réellement livré et une référence vérifiable.",
    "question": "Faire préciser quels connecteurs sont inclus, qui valide les actions et comment reprendre la main après une erreur.",
    "source": "https://cremedecode.fr/"
  },
  "eurelis": {
    "fit": "Agents IA intégrés au système d’information",
    "offer": "Eurelis présente une Agent Factory associant création d’agents, supervision et recherche documentaire hybride. L’offre décrit des contrôles d’accès, une connexion SSO et plusieurs options de déploiement, dont le cloud privé et les environnements internes.",
    "evidence": "La page consultée détaille une offre technique. Elle ne suffit pas à confirmer une référence de mission équivalente à votre projet ; demander une architecture et un retour d’expérience documentés.",
    "question": "Vérifier les droits au niveau de chaque document, les journaux d’action et les responsabilités de maintenance.",
    "source": "https://www.eurelis.com/agence-integrateur-ia/"
  },
  "eleven-labs": {
    "fit": "Agents connectés aux applications de l’entreprise",
    "offer": "Eleven Labs propose des agents sur mesure connectés aux CRM, ERP et autres applications internes. Les usages présentés couvrent notamment les documents et les fonctions RH, juridique ou marketing.",
    "evidence": "La page décrit des usages et affiche des références commerciales. Cela ne permet pas d’attribuer à chaque entreprise citée une mission d’agent IA : demander une référence précisément liée à votre besoin.",
    "question": "Demander les API nécessaires, le périmètre des actions autorisées et les tests avant toute écriture dans le SI.",
    "source": "https://eleven-labs.com/data-ia/agent-ia/"
  },
  "noxcod": {
    "fit": "Agents IA et automatisations avec des outils no-code",
    "offer": "Noxcod décrit des agents construits avec des outils tels que n8n et Make, et des interfaces avec Bubble, FlutterFlow ou WeWeb. L’agence cite plusieurs fournisseurs de modèles et des modèles ouverts.",
    "evidence": "L’agence présente ses propres produits : Tala, un agent vocal connecté à une base de connaissances et à Google Calendar, et NoxClaw, un assistant privé via Telegram. Ce sont des produits présentés par l’agence, pas des missions client auditées.",
    "question": "Comparer les coûts des licences et de l’usage, puis vérifier la propriété des workflows et leur reprise par votre équipe.",
    "source": "https://www.noxcod.com/agence/agent-ia"
  },
  "bienfait": {
    "fit": "Préparation des données et automatisation des opérations",
    "offer": "Bienfait met en avant la centralisation des données, les outils métier et les automatisations avant l’ajout d’assistants IA. Le site cite notamment Airtable, HubSpot, Salesforce et Softr parmi ses intégrations.",
    "evidence": "Le prestataire annonce un cadrage préalable, une première version au forfait et une maintenance optionnelle. Ces modalités commerciales doivent être confirmées dans le devis ; elles ne donnent pas un prix pour votre projet.",
    "question": "Distinguer le chantier de structuration des données de la partie IA et chiffrer séparément l’exploitation après livraison.",
    "source": "https://www.bienfait.co/"
  }
};
