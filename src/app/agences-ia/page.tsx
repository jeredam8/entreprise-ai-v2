import { ProviderTypePage } from "@/components/ProviderTypePage";
import { providers } from "@/data/providers";
import { buildMetadata } from "@/lib/seo";

const n = providers.filter((p) => p.type === "Agence IA").length;

export const metadata = buildMetadata({
  title: `Agences IA en France : ${n} agences à comparer`,
  description: `${n} agences IA en France vérifiées au répertoire Sirene : automatisation, agents, RAG, chatbots. Comparez les spécialités et les points à vérifier avant un devis.`,
  path: "/agences-ia"
});

export default function AgenciesPage() {
  return <ProviderTypePage type="Agence IA" title="Agences IA" description="Sélectionner une agence IA pour automatisation, agents, RAG, support ou intégration métier." path="/agences-ia" />;
}
