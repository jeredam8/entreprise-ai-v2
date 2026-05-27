import type { Metadata } from "next";
import { absoluteUrl, baseUrl } from "@/lib/routes";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
};

export function buildMetadata({ title, description, path, type = "website" }: MetadataInput): Metadata {
  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    alternates: {
      canonical: absoluteUrl(path)
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: "Entreprise.ai",
      locale: "fr_FR",
      type
    }
  };
}
