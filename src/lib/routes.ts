import { cities } from "@/data/cities";
import { providers } from "@/data/providers";
import { guides } from "@/data/guides";
import { sectors } from "@/data/sectors";
import { useCases } from "@/data/useCases";

export const baseUrl = "https://entreprise.ai";

export const mainRoutes = [
  "/",
  "/deposer-un-projet-ia",
  "/prestataires-ia",
  "/methodologie",
  "/agences-ia",
  "/consultants-ia",
  "/integrateurs-ia",
  "/formations-ia",
  "/referencer-un-prestataire-ia",
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
    ...guides.map((guide) => `/guides/${guide.slug}`),
    ...useCases.map((useCase) => `/cas-usages/${useCase.slug}`),
    ...sectors.map((sector) => `/secteurs/${sector.slug}`),
    ...cities.map((city) => `/villes/${city.slug}`),
    ...providers.map((provider) => `/prestataires-ia/${provider.slug}`)
  ];
}

export function absoluteUrl(pathname: string) {
  return `${baseUrl}${pathname}`;
}
