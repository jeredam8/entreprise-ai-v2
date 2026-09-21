"use client";
import { useEffect, type ComponentProps } from "react";
import { event } from "@/lib/analytics";
export function TrackedLink({
  provider,
  ...props
}: ComponentProps<"a"> & { provider: string }) {
  return (
    <a {...props} onClick={() => event("provider_website", { provider })} />
  );
}
export function ProfileView({ slug }: { slug: string }) {
  useEffect(() => {
    event("provider_view", { provider: slug });
  }, [slug]);
  return null;
}
