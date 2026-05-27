import { ProviderTypePage } from "@/components/ProviderTypePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Consultants IA - Cadrage, audit et accompagnement PME",
  description: "Consultants IA pour cadrer, prioriser, former et aider une PME ou ETI à sélectionner le bon projet IA.",
  path: "/consultants-ia"
});

export default function ConsultantsPage() {
  return <ProviderTypePage type="Consultant IA" title="Consultants IA" description="Comparer des consultants IA pour audit, cadrage projet, formation et gouvernance des usages." path="/consultants-ia" />;
}
