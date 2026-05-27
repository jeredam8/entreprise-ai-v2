import { ProviderTypePage } from "@/components/ProviderTypePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Intégrateurs IA - Connecter l'IA aux outils métier",
  description: "Intégrateurs IA pour connecter agents, automatisations et RAG aux CRM, ERP, API et systèmes internes.",
  path: "/integrateurs-ia"
});

export default function IntegratorsPage() {
  return <ProviderTypePage type="Intégrateur IA" title="Intégrateurs IA" description="Identifier un intégrateur IA lorsque le projet touche au SI, aux API, aux droits d'accès ou à la maintenance." path="/integrateurs-ia" />;
}
