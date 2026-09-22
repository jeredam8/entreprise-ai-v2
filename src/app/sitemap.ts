import { providerResearch, researchDate } from "@/data/providerResearch";
import { useCaseProviders } from "@/data/editorialLinks";
import type { MetadataRoute } from "next";
import { providers } from "@/data/providers";
import { guides } from "@/data/guides";
import { useCases } from "@/data/useCases";
import { buyerNeedsUpdatedAt } from "@/data/buyerNeeds";
import { absoluteUrl, getAllRoutes } from "@/lib/routes";

/** Date de dernière vérification de l'annuaire : c'est ce qui change réellement
 *  sur le site. Figer une date en dur (l'ancienne valeur restait au 30/05/2026)
 *  signalait un site à l'arrêt même après une mise à jour du contenu. */
const derniereVerification =
  providers
    .map((provider) => provider.verifiedAt)
    .filter((date): date is string => Boolean(date))
    .sort()
    .pop() ?? "2026-05-30";

export default function sitemap(): MetadataRoute.Sitemap {
  const annuaire = new Date(derniereVerification);
  const editorial = new Date("2026-05-30");

  return getAllRoutes().map((route) => {
    const estFiche = route.startsWith("/prestataires-ia/");
    const estAnnuaire =
      route === "/" || route === "/prestataires-ia" || route.startsWith("/villes");

    const refreshed = route === "/agences-ia" || route === "/guides/comment-choisir-agence-ia" || route === "/guides/combien-coute-projet-ia" || Boolean(providerResearch[route.replace("/prestataires-ia/", "")]) || Boolean(useCaseProviders[route.replace("/cas-usages/", "")]);
    const page = route.startsWith("/guides/")
      ? guides.find((page) => route === `/guides/${page.slug}`)
      : useCases.find((page) => route === `/cas-usages/${page.slug}`);
    const hubDate = ["/", "/guides", "/cas-usages"].includes(route) ? buyerNeedsUpdatedAt : undefined;
    const previousDate = refreshed ? new Date(researchDate) : estFiche || estAnnuaire ? annuaire : editorial;
    const contentDate = page?.updatedAt ?? hubDate;
    return {
      url: absoluteUrl(route),
      // Les pages nourries par l'annuaire portent sa date de vérification ;
      // les pages éditoriales gardent leur date de publication.
      lastModified: contentDate ? new Date(Math.max(previousDate.getTime(), new Date(contentDate).getTime())) : previousDate,
      changeFrequency: estAnnuaire ? "weekly" : "monthly",
      priority:
        route === "/"
          ? 1
          : route === "/prestataires-ia"
            ? 0.9
            : estFiche
              ? 0.7
              : route.includes("/guides/") ||
                  route.includes("/cas-usages/") ||
                  route.includes("/secteurs/")
                ? 0.8
                : 0.6
    };
  });
}
