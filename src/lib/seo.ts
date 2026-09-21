import type { Metadata } from "next";
import { absoluteUrl, baseUrl } from "@/lib/routes";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path,
  type = "website",
  noIndex = false,
}: MetadataInput): Metadata {
  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : undefined,
    alternates: {
      canonical: absoluteUrl(path),
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: "Entreprise.ai",
      locale: "fr_FR",
      type,
      images: [
        {
          url: absoluteUrl("/opengraph-image"),
          width: 1200,
          height: 630,
          alt: "Entreprise.ai — Trouvez le bon prestataire IA",
        },
      ],
    },
  };
}
