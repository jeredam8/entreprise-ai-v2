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
      "Pendant la beta de lancement, le dépôt de projet est gratuit côté entreprise. Une offre de cadrage payant pourra être ajoutée plus tard pour les projets complexes."
  },
  {
    question: "Les prestataires sont-ils affichés publiquement ?",
    answer:
      "Non au lancement. Entreprise.ai privilégie une shortlist manuelle plutôt qu'un annuaire public de fiches prestataires. Les profils réels seront intégrés uniquement après vérification."
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
      "Le référencement est gratuit au lancement pour constituer un réseau qualifié, avec une logique future de commission au succès si une mission est signée."
  },
  {
    question: "Les shortlists sont-elles influencées par un paiement prestataire ?",
    answer:
      "Non. Pendant la beta, aucune mise en avant payante n'est utilisée pour construire les shortlists. Le premier critère reste l'adéquation entre le projet et la capacité réelle du prestataire."
  },
  {
    question: "Quels prestataires sont recherchés ?",
    answer:
      "Agences IA, consultants IA, intégrateurs, cabinets data, formateurs et experts automatisation capables d'intervenir sur des projets concrets de PME et ETI."
  }
];
