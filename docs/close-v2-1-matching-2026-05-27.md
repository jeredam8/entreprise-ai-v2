# Close — Entreprise.ai V2.1 matching IA

Date : 27/05/2026

## Décision

Entreprise.ai V2.1 devient une marketplace de projets IA : une PME/ETI décrit son besoin, Entreprise.ai qualifie le projet, puis prépare une shortlist manuelle de 2 à 3 prestataires adaptés.

Le site ne doit plus vendre en priorité un annuaire public de prestataires. L'annuaire reste un actif possible plus tard, mais le produit central est le matching humain.

## État code

- Repo GitHub : `https://github.com/jeredam8/entreprise-ai-v2`
- Commit V2.1 : `add7ddb Reposition V2 around AI provider matching`
- Tag snapshot initial : `analysis-backup-2026-05-27`
- Pas de déploiement live effectué.
- Serveur local utilisé : `http://localhost:3002`

## Changements principaux

- Home : promesse de shortlist manuelle et matching IA.
- Navigation : priorité à dépôt de projet, méthode, guides, cas d'usage, secteurs, référencement prestataire.
- `/prestataires-ia` : page de comparaison des types de prestataires, plus annuaire MVP.
- `/deposer-un-projet-ia` : tunnel principal côté demande.
- `/comment-ca-marche` : processus qualification -> shortlist -> choix libre.
- `/referencer-mon-agence-ia` : tunnel supply pour opportunités qualifiées.
- Footer/CTA/microcopy : vocabulaire marketplace de projets IA.

## Vérifications

- `npm run lint` : OK.
- `npm run build` : OK.
- Routes locales clés : OK en HTTP 200.

## Prochaine session

1. Relire visuellement V2.1.
2. Cadrer l'offre beta : promesse, délai, livrable, critères de projet accepté.
3. Préparer migration live depuis l'ancien site.
4. Créer les pages "Méthode de matching" et "Modèle économique".
5. Décider le traitement des fiches prestataires existantes avant indexation publique.
