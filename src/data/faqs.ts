import type { FaqItem } from "@/data/types";

export const projectFaqs: FaqItem[] = [
  {
    question: "Entreprise.ai réalise-t-il les missions IA directement ?",
    answer:
      "Non. Le rôle prévu est de qualifier le besoin, puis d'orienter l'entreprise vers 2 à 3 prestataires IA adaptés. La mission est ensuite discutée directement entre l'entreprise et les prestataires."
  },
  {
    question: "Le dépôt de projet est-il payant pour l'entreprise ?",
    answer:
      "Dans le modèle MVP, le dépôt de projet est gratuit côté entreprise. Une offre de cadrage payant pourra être ajoutée plus tard pour les projets complexes."
  },
  {
    question: "Les prestataires du MVP sont-ils réels ?",
    answer:
      "Non. Les prestataires affichés dans cette version locale sont des exemples clairement marqués comme tels. Ils servent à tester l'annuaire, les filtres et les fiches."
  },
  {
    question: "Quel budget faut-il prévoir pour un projet IA B2B ?",
    answer:
      "Un budget inférieur à 5 000 € limite souvent le champ d'action. Pour un projet concret en PME ou ETI, une première enveloppe de 5 000 € à 10 000 € est un seuil plus réaliste, et les intégrations peuvent dépasser 25 000 €."
  }
];

export const providerFaqs: FaqItem[] = [
  {
    question: "Le référencement prestataire est-il payant au lancement ?",
    answer:
      "Le scénario MVP prévoit un référencement gratuit ou quasi gratuit pour constituer une base qualifiée, avec une commission au succès si une mission est signée."
  },
  {
    question: "Un prestataire sponsorisé sera-t-il mieux classé ?",
    answer:
      "Non par défaut. La V2 doit séparer clairement l'éditorial, la vérification, la sponsorisation et les recommandations de shortlist."
  },
  {
    question: "Quels prestataires sont recherchés ?",
    answer:
      "Agences IA, consultants IA, intégrateurs, cabinets data, formateurs et experts automatisation capables d'intervenir sur des projets concrets de PME et ETI."
  }
];
