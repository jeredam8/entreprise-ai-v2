import Link from "next/link";
import { ArrowRight } from "lucide-react";

type HubItem = {
  title: string;
  href: string;
  description: string;
};

export function HubGrid({ items }: { items: HubItem[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Link key={item.href} href={item.href} className="group rounded-md border border-line bg-white p-5 transition hover:border-forest">
          <h2 className="flex items-center justify-between gap-4 text-lg font-semibold text-ink">
            {item.title}
            <ArrowRight className="h-4 w-4 text-forest transition group-hover:translate-x-1" aria-hidden="true" />
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
        </Link>
      ))}
    </div>
  );
}
