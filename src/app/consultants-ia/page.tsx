import { ProviderTypePage } from "@/components/ProviderTypePage";
import { providers } from "@/data/providers";
import { buildMetadata } from "@/lib/seo";

const n = providers.filter((p) => p.type === "Consultant IA").length;

export const metadata = buildMetadata({
  title: `Consultants IA en France : ${n} consultants IA vérifiés`,
  description: `${n} consultants IA en France vérifiés au répertoire Sirene : audit, cadrage, feuille de route, formation. Spécialités, budgets de départ et villes. Aucune position vendue.`,
  path: "/consultants-ia"
});

export default function ConsultantsPage() {
  return <ProviderTypePage type="Consultant IA" title="Consultants IA" description="Comparer des consultants IA pour audit, cadrage projet, formation et gouvernance des usages." path="/consultants-ia" />;
}
