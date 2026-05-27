# Entreprise.ai V2.1

MVP local de marketplace B2B pour aider les PME et ETI à clarifier un projet IA et recevoir une shortlist manuelle de prestataires adaptés.

Le projet est volontairement séparé du site existant `07-dev/entreprise-ai`. Aucun déploiement n'est prévu dans ce dossier.

## Statut de publication

Ce dépôt est publié pour revue et analyse externe du MVP V2.1. Il ne constitue pas encore le site public officiel d'Entreprise.ai.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Données locales TypeScript
- API routes locales pour enregistrer des soumissions de développement

## Lancer en local

```bash
npm install
npm run dev
```

Puis ouvrir `http://localhost:3000`.

## Vérifications

```bash
npm run verify:mvp
npm run lint
npm run build
```

## Structure

- `src/app/` : routes App Router.
- `src/components/` : composants réutilisables.
- `src/data/` : données prestataires, guides, cas d'usage, secteurs, villes, FAQ et glossaire.
- `src/lib/` : SEO, routes, JSON-LD et utilitaires.
- `docs/` : base stratégique long terme.
- `public/llms.txt` : fichier LLM optimization.
- `.local-submissions/` : créé en local si les formulaires sont soumis, non versionné.

## Ajouter un prestataire

Modifier `src/data/providers.ts` et ajouter un objet avec :

- `slug`
- `name`
- `type`
- `city`
- `intervention`
- `remote`
- `minBudget`
- `specialties`
- `sectors`
- `stacks`
- `description`
- `verificationLevel`

Pour le MVP, tout prestataire fictif doit rester marqué `Exemple MVP`.

## Ajouter une page secteur

Ajouter une entrée dans `src/data/sectors.ts` avec `slug`, metadata, `h1`, introduction, résumé, exemples, budgets, risques, questions, FAQ et prestataires associés. La route dynamique `/secteurs/[slug]` la publie automatiquement.

## Ajouter une page cas d'usage

Ajouter une entrée dans `src/data/useCases.ts`. La route `/cas-usages/[slug]` génère la page avec résumé rapide, exemples, budget, risques, FAQ et maillage.

## Limites du MVP

- Pas de vraie base de données.
- Pas d'authentification.
- Pas de Stripe.
- Pas de CRM.
- Pas d'email transactionnel.
- Pas d'avis clients réels.
- Prestataires fictifs clairement signalés comme exemples.

## Prochaines étapes

- Remplacer les prestataires exemples par des fiches vérifiées.
- Connecter un stockage de leads.
- Ajouter un dashboard admin.
- Créer les premiers templates téléchargeables.
- Ajouter une méthode de vérification des prestataires.
- Connecter analytics et Search Console avant tout lancement public.
