import { ProviderTypePage } from "@/components/ProviderTypePage";
import { providers } from "@/data/providers";
import { buildMetadata } from "@/lib/seo";

const n = providers.filter((p) => p.type === "Intégrateur IA").length;

export const metadata = buildMetadata({
  title: `Intégrateurs IA en France : ${n} intégrateurs IA vérifiés`,
  description: `${n} intégrateurs IA en France vérifiés au répertoire Sirene : connexion de l'IA aux CRM, ERP, API et SI. Spécialités, budgets de départ et villes. Aucune position vendue.`,
  path: "/integrateurs-ia"
});

export default function IntegratorsPage() {
  return <ProviderTypePage type="Intégrateur IA" title="Intégrateurs IA" description="Identifier un intégrateur IA lorsque le projet touche au SI, aux API, aux droits d'accès ou à la maintenance." path="/integrateurs-ia" />;
}
