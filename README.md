# Entreprise.ai V2 beta

Site V2 d'Entreprise.ai : qualification de projets IA et matching humain. Une PME ou ETI décrit son besoin, Entreprise.ai qualifie le projet puis prépare une shortlist manuelle de 2 à 3 prestataires adaptés.

Le projet est volontairement séparé de l'ancien site `07-dev/entreprise-ai`.

## Statut de publication

Ce dépôt est l'axe principal V2 après abandon du site V1.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Données locales TypeScript
- Formulaires connectés à Formspree

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

Les fiches prestataires fictives restent hors sitemap et noindex. Le lancement public met en avant le dépôt de projet, l'étude des profils prestataires et les contenus de cadrage.

## Ajouter une page secteur

Ajouter une entrée dans `src/data/sectors.ts` avec `slug`, metadata, `h1`, introduction, résumé, exemples, budgets, risques, questions, FAQ et prestataires associés. La route dynamique `/secteurs/[slug]` la publie automatiquement.

## Ajouter une page cas d'usage

Ajouter une entrée dans `src/data/useCases.ts`. La route `/cas-usages/[slug]` génère la page avec résumé rapide, exemples, budget, risques, FAQ et maillage.

## Limites de la beta

- Pas de vraie base de données.
- Pas d'authentification.
- Pas de Stripe.
- Pas de CRM.
- Pas d'avis clients réels.
- Prestataires réels à intégrer uniquement après vérification.

## Prochaines étapes

- Construire la base de prestataires vérifiés hors surface publique.
- Connecter un stockage de leads.
- Ajouter un dashboard admin.
- Ajouter une méthode publique courte de qualification et de matching.
- Connecter analytics et Search Console avant tout lancement public.
