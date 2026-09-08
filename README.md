# Entreprise.ai — site actif dans Codex

Annuaire de prestataires IA, offre de fiche complète à 149 € HT/an. La stratégie et l’état actuels se trouvent dans `../BUSINESS.md` et `../STATUS.md`. Les documents de `docs/` datés de mai sont historiques ; leurs limites « pas de base » et leur priorité au matching sont dépassées.

## Source et services

- Source unique : `/Users/jeremy_1/codex/businesses/entreprise-ai/site`.
- Historique Git conservé dans `~/.local/share/entreprise-ai/site.git`, relié par `.git` ; dépôt GitHub existant `jeredam8/entreprise-ai-v2`. Ne pas déployer la racine Codex.
- Vercel : `entreprise-ai`, `prj_ZXh6F3JjuhjgheI6wGlBD4JV47Ao`, équipe `team_5HmZlYbBVC3xEvrHZEGhYaRU`. `.vercel/project.json` conservé à l’identique.
- Domaine : https://entreprise.ai ; aucune bascule DNS requise pour cette migration locale.
- Next.js 16.2.6, React 18, TypeScript, Tailwind ; dépendances verrouillées par package-lock.json.

## Utilisation

```sh
npm ci --no-audit --no-fund
npm run dev
```

Contrôles depuis le dossier business : `python3 _outils/annuaire/check_annuaire.py` (base + build + SEO + MVP). Depuis `site/` : `npm run lint`. Le build est inclus dans le contrôle annuaire.

`src/data/providers.ts` est généré depuis Supabase par `../_outils/annuaire/export_site.py --go`. Ne pas l’éditer manuellement. Les outils utilisent les accès déjà fournis à Codex ou `~/.config/entreprise-ai/tools.env`, jamais Claude. La base doit être `cockpit-perso`, référence `yhozabfbkepsplokwvxh`.

## Déploiement

Depuis ce dossier seulement, après les contrôles : `vercel --prod --yes` avec l’authentification locale existante, ou `npx vercel --prod --yes` si la CLI n’est pas installée. Vérifier l’identité du projet liée avant publication. Aucun nouveau projet ni dépôt.

Variables serveur Vercel existantes : `SUPABASE_URL`, `SUPABASE_SERVICE_KEY`, `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`. Elles restent chez Vercel et ne sont pas exportées dans le dépôt. Les formulaires passent par `/api/formulaire`, puis `demandes_site` et la notification serveur existante ; Formspree reste un secours côté client. Ne pas envoyer de formulaire réel pendant les tests sans demande autorisant son effet.

La vérification Search Console présente dans layout.tsx et Vercel Analytics sont conservés. Rendu premium prévu au premier paiement, toujours non construit lors de la migration.
