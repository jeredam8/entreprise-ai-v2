import { ProviderTypePage } from "@/components/ProviderTypePage";
import { providers } from "@/data/providers";
import { buildMetadata } from "@/lib/seo";

const n = providers.filter((p) => p.type === "Formateur IA").length;

export const metadata = buildMetadata({
  title: `Formateurs IA en France : ${n} formateurs IA vérifiés`,
  description: `${n} formateurs IA en France vérifiés au répertoire Sirene : acculturation des directions et équipes métier. Spécialités, budgets et villes. Aucune position vendue.`,
  path: "/formations-ia"
});

export default function TrainingsPage() {
  return <ProviderTypePage type="Formateur IA" title="Formations IA" description="Trouver un prestataire de formation IA pour acculturer une direction, des managers ou des équipes métier." path="/formations-ia" />;
}
