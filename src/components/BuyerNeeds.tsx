import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buyerNeeds } from "@/data/buyerNeeds";

export function BuyerNeeds() {
  return (
    <section className="section" aria-labelledby="buyer-needs-title">
      <div className="section-heading">
        <h2 id="buyer-needs-title">Quelle décision devez-vous prendre ?</h2>
        <p>Partez de votre besoin pour cadrer le projet et comparer les bons profils.</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {buyerNeeds.map((need) => (
          <Link key={need.href} href={need.href} className="group flex flex-col rounded-md border border-line bg-white p-6 transition hover:border-forest">
            <h3 className="text-xl font-semibold text-ink">{need.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-6 text-muted">{need.description}</p>
            <span className="mt-5 flex items-center gap-2 text-sm font-semibold text-forest">Préparer ma décision <ArrowRight size={16} aria-hidden="true" /></span>
          </Link>
        ))}
      </div>
    </section>
  );
}
