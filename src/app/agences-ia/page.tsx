import { ProviderTypePage } from "@/components/ProviderTypePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Agences IA - Sélectionner une agence IA pour entreprise",
  description: "Page MVP pour filtrer les agences IA capables d'accompagner des PME et ETI sur des projets concrets.",
  path: "/agences-ia"
});

export default function AgenciesPage() {
  return <ProviderTypePage type="Agence IA" title="Agences IA" description="Sélectionner une agence IA pour automatisation, agents, RAG, support ou intégration métier." path="/agences-ia" />;
}
