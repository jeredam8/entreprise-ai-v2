"use client";

import { BrandMark } from "@/components/BrandMark";
import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";
import { useState } from "react";

const nav = [
  { label: "Annuaire", href: "/prestataires-ia" },
  { label: "Entreprises", href: "/deposer-un-projet-ia" },
  { label: "Prestataires", href: "/referencer-un-prestataire-ia" },
  { label: "Guides", href: "/guides" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/96 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Entreprise.ai accueil"
        >
          <BrandMark />
          <span className="text-lg font-semibold tracking-normal text-ink">
            Entreprise.ai
          </span>
        </Link>
        <nav
          className="hidden items-center gap-5 lg:flex"
          aria-label="Navigation principale"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/deposer-un-projet-ia"
            className="btn-primary hidden sm:inline-flex"
          >
            Parler de mon projet
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-ink lg:hidden"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-controls="navigation-mobile"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
      {open ? (
        <nav
          id="navigation-mobile"
          className="border-t border-line bg-white px-5 py-4 lg:hidden"
          aria-label="Navigation mobile"
        >
          <div className="mx-auto grid max-w-7xl gap-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-2 text-sm font-medium text-ink hover:bg-soft"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/deposer-un-projet-ia"
              className="btn-primary justify-center"
              onClick={() => setOpen(false)}
            >
              Parler de mon projet
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
