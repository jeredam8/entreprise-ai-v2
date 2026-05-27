import { cities } from "@/data/cities";
import { guides } from "@/data/guides";
import { providers } from "@/data/providers";
import { sectors } from "@/data/sectors";
import { useCases } from "@/data/useCases";

export const baseUrl = "https://www.entreprise.ai";

export const mainRoutes = [
  "/",
  "/deposer-un-projet-ia",
  "/prestataires-ia",
  "/agences-ia",
  "/consultants-ia",
  "/integrateurs-ia",
  "/formations-ia",
  "/referencer-mon-agence-ia",
  "/comment-ca-marche",
  "/a-propos",
  "/contact",
  "/mentions-legales",
  "/confidentialite",
  "/guides",
  "/cas-usages",
  "/secteurs",
  "/villes",
  "/glossaire"
];

export function getAllRoutes() {
  return [
    ...mainRoutes,
    ...providers.map((provider) => `/prestataires-ia/${provider.slug}`),
    ...guides.map((guide) => `/guides/${guide.slug}`),
    ...useCases.map((useCase) => `/cas-usages/${useCase.slug}`),
    ...sectors.map((sector) => `/secteurs/${sector.slug}`),
    ...cities.map((city) => `/villes/${city.slug}`)
  ];
}

export function absoluteUrl(pathname: string) {
  return `${baseUrl}${pathname}`;
}
