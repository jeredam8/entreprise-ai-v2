import Link from "next/link";

const columns = [
  {
    title: "Matching",
    links: [
      { label: "Déposer un projet", href: "/deposer-un-projet-ia" },
      { label: "Référencer un prestataire", href: "/referencer-un-prestataire-ia" },
      { label: "Comment ça marche", href: "/comment-ca-marche" },
      { label: "Types de prestataires", href: "/prestataires-ia" }
    ]
  },
  {
    title: "Catégories",
    links: [
      { label: "Agences IA", href: "/agences-ia" },
      { label: "Consultants IA", href: "/consultants-ia" },
      { label: "Intégrateurs IA", href: "/integrateurs-ia" },
      { label: "Formations IA", href: "/formations-ia" }
    ]
  },
  {
    title: "Contenus",
    links: [
      { label: "Guides", href: "/guides" },
      { label: "Cas d'usage", href: "/cas-usages" },
      { label: "Secteurs", href: "/secteurs" },
      { label: "Glossaire", href: "/glossaire" }
    ]
  },
  {
    title: "Informations",
    links: [
      { label: "À propos", href: "/a-propos" },
      { label: "Contact", href: "/contact" },
      { label: "Mentions légales", href: "/mentions-legales" },
      { label: "Confidentialité", href: "/confidentialite" }
    ]
  }
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 lg:grid-cols-[1.3fr_2fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-sm font-semibold text-ink">E</span>
            <span className="text-lg font-semibold">Entreprise.ai</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">
            Service de qualification et de matching humain pour aider les PME et ETI à clarifier leur besoin IA et recevoir une shortlist qualifiée.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="text-sm font-semibold text-white">{column.title}</h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="transition hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} TAC Digital EURL — Entreprise.ai.
      </div>
    </footer>
  );
}
