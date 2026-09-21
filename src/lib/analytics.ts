/** Aggregate counts only: controlled categories and public slugs, never visitor content or IDs. */
export function event(
  name: string,
  properties: Record<string, string | number | boolean> = {},
) {
  if (typeof window === "undefined") return;
  const payload = {
    event: name,
    page: window.location.pathname,
    kind: properties.kind || "",
    provider: properties.provider || "",
    outcome:
      typeof properties.results === "number"
        ? properties.results === 0
          ? "empty"
          : "results"
        : "",
  };
  try {
    void fetch("/api/evenement", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true,
    }).catch(() => {});
  } catch {
    /* Measurement never interrupts a conversion. */
  }
}
