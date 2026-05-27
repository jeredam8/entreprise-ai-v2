import type { MetadataRoute } from "next";
import { absoluteUrl, getAllRoutes } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  return getAllRoutes().map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date("2026-05-26"),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.includes("/guides/") || route.includes("/cas-usages/") || route.includes("/secteurs/") ? 0.8 : 0.6
  }));
}
