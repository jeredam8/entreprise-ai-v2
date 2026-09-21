"use client";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/next";
export function SiteAnalytics() {
  useEffect(() => {
    try {
      const q = new URLSearchParams(window.location.search);
      const a = Object.fromEntries(
        ["utm_source", "utm_medium", "utm_campaign"].map((k) => [
          k,
          (q.get(k) || "").slice(0, 100),
        ]),
      );
      if (Object.values(a).some(Boolean))
        sessionStorage.setItem("entreprise-ai-attribution", JSON.stringify(a));
    } catch {}
  }, []);
  return (
    <Analytics
      beforeSend={(event) => {
        const u = new URL(event.url);
        u.search = "";
        u.hash = "";
        return { ...event, url: u.toString() };
      }}
    />
  );
}
