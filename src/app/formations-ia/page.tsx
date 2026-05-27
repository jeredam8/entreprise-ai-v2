import { ProviderTypePage } from "@/components/ProviderTypePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Formations IA - Former directions et équipes métier",
  description: "Prestataires de formation IA pour directions, managers et équipes métier en PME et ETI.",
  path: "/formations-ia"
});

export default function TrainingsPage() {
  return <ProviderTypePage type="Formateur IA" title="Formations IA" description="Trouver un prestataire de formation IA pour acculturer une direction, des managers ou des équipes métier." path="/formations-ia" />;
}
