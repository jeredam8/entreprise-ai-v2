import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteAnalytics } from "@/components/SiteAnalytics";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { organizationJsonLd, websiteJsonLd } from "@/lib/structuredData";
import { baseUrl } from "@/lib/routes";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Entreprise.ai - Prestataires IA pour PME et ETI",
    template: "%s | Entreprise.ai",
  },
  description:
    "Plateforme française pour aider les PME et ETI à sélectionner un prestataire IA adapté à leur projet.",
  openGraph: {
    siteName: "Entreprise.ai",
    locale: "fr_FR",
    type: "website",
  },
  // Propriété Search Console « https://entreprise.ai » (compte jertpl8@gmail.com),
  // créée le 26/07/2026. Ne pas retirer : la validation serait perdue.
  verification: {
    google: "5f4stuYEE85Ebzm5f_f796MkYVjWCsht7r227dtUleE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <a href="#contenu" className="skip-link">
          Aller au contenu
        </a>
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
        {/* Vercel mesure les pages vues ; SiteAnalytics retire les paramètres des URL. */}
        <SiteAnalytics />
      </body>
    </html>
  );
}
