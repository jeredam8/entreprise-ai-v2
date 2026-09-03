import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { providers } from "@/data/providers";
import { buildMetadata } from "@/lib/seo";
import { ageStats, budgetStats, byCity, byType, formatDateFr, formatEuro, lastVerification, sizeStats } from "@/lib/stats";

const total = providers.length;
const types = byType();
const villes = byCity();
const budgets = budgetStats();
const tailles = sizeStats();
const ages = ageStats();
const verif = formatDateFr(lastVerification());

export const metadata = buildMetadata({
  title: `Baromètre 2026 des prestataires IA en France : ${total} vérifiés`,
  description: `${total} prestataires IA vérifiés au répertoire Sirene : répartition par type, ville, taille, ancienneté et budgets de départ. Chiffres de l'annuaire au ${verif}.`,
  path: "/barometre-prestataires-ia",
  type: "article"
});

function pct(n: number, d: number) {
  return d ? `${Math.round((100 * n) / d)} %` : "";
}

export default function BarometrePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Dataset",
          name: "Baromètre des prestataires IA en France (Entreprise.ai)",
          description: `Répartition de ${total} prestataires IA français vérifiés au répertoire Sirene, par type, ville, taille et budget de départ.`,
          dateModified: lastVerification() ?? undefined,
          creator: { "@type": "Organization", name: "Entreprise.ai", url: "https://entreprise.ai" },
          license: "https://creativecommons.org/licenses/by/4.0/",
          url: "https://entreprise.ai/barometre-prestataires-ia"
        }}
      />
      <div className="page-shell">
        <Breadcrumbs items={[{ label: "Baromètre des prestataires IA", href: "/barometre-prestataires-ia" }]} />
        <div className="mt-8 max-w-4xl">
          <h1 className="text-4xl font-semibold tracking-normal text-ink md:text-5xl">
            Baromètre 2026 des prestataires IA en France
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted">
            Ce que dit l'annuaire, chiffres sortis de la base : {total} agences, consultants, intégrateurs,
            formateurs et cabinets data, chacun rattaché à une entreprise réelle vérifiée au répertoire Sirene.
            Dernier contrôle le {verif}. Les chiffres se recalculent à chaque mise à jour de l'annuaire, et
            un seul chiffre existe par mesure sur tout le site.
          </p>
        </div>
      </div>

      <section className="section pt-0">
        <div className="grid gap-5 md:grid-cols-3">
          <Chiffre valeur={String(total)} label="prestataires IA vérifiés" />
          <Chiffre valeur={budgets.known ? formatEuro(budgets.median) : "n. c."} label={`budget de départ médian (${budgets.known} fiches le publient)`} />
          <Chiffre valeur={ages.known ? pct(ages.since2023, ages.known) : "n. c."} label="des structures créées depuis 2023" />
        </div>
      </section>

      <section className="section pt-0">
        <div className="section-heading">
          <h2>Par type de prestataire</h2>
          <p>Le type est déduit de l'offre mise en avant par le prestataire, pas de son code d'activité.</p>
        </div>
        <Tableau lignes={types.map((t) => [t.path ? <Link key={t.type} href={t.path} className="font-semibold text-forest">{t.type}</Link> : t.type, String(t.count), pct(t.count, total)])} entetes={["Type", "Fiches", "Part"]} />
      </section>

      <section className="section pt-0">
        <div className="section-heading">
          <h2>Par ville</h2>
          <p>Bassin d'emploi du siège. La plupart des prestataires interviennent aussi à distance.</p>
        </div>
        <Tableau lignes={villes.map((v) => [v.slug ? <Link key={v.city} href={`/villes/${v.slug}`} className="font-semibold text-forest">{v.city}</Link> : v.city, String(v.count), pct(v.count, total)])} entetes={["Ville", "Fiches", "Part"]} />
      </section>

      <section className="section pt-0">
        <div className="section-heading">
          <h2>Taille des structures</h2>
          <p>Tranche d'effectif du répertoire Sirene, ou déclarée par le prestataire quand la fiche a été revendiquée.</p>
        </div>
        <Tableau lignes={tailles.map((t) => [t.size, String(t.count), pct(t.count, total)])} entetes={["Effectif", "Fiches", "Part"]} />
      </section>

      <section className="section pt-0">
        <div className="section-heading">
          <h2>Budgets de départ</h2>
          <p>Seuls les prestataires qui publient un budget minimum sont comptés. Un budget absent n'est pas un budget bas.</p>
        </div>
        <p className="text-base leading-7 text-muted">
          {budgets.known
            ? `${budgets.known} fiches sur ${total} publient un budget de départ : de ${formatEuro(budgets.min)} à ${formatEuro(budgets.max)}, médiane ${formatEuro(budgets.median)}.`
            : "Aucune fiche ne publie encore de budget de départ."}
        </p>
      </section>

      <section className="section pt-0">
        <div className="section-heading">
          <h2>Comment lire ces chiffres</h2>
        </div>
        <p className="max-w-3xl text-base leading-7 text-muted">
          L'annuaire n'est pas un recensement exhaustif : il compte les prestataires dont l'identité légale et l'offre IA
          ont été vérifiées, selon la <Link href="/methodologie" className="font-semibold text-forest">méthodologie</Link>.
          Les fiches proviennent de sources publiques et des demandes de référencement reçues. Un prestataire absent peut{" "}
          <Link href="/referencer-un-prestataire-ia" className="font-semibold text-forest">demander sa fiche</Link>, gratuitement.
          Reprise des chiffres libre avec la mention « Source : Entreprise.ai, baromètre des prestataires IA, {verif} ».
        </p>
      </section>
    </>
  );
}

function Chiffre({ valeur, label }: { valeur: string; label: string }) {
  return (
    <div className="rounded-md border border-line bg-white p-6">
      <p className="text-3xl font-semibold text-ink">{valeur}</p>
      <p className="mt-2 text-sm leading-6 text-muted">{label}</p>
    </div>
  );
}

function Tableau({ lignes, entetes }: { lignes: React.ReactNode[][]; entetes: string[] }) {
  return (
    <div className="overflow-x-auto rounded-md border border-line bg-white">
      <table className="w-full text-left text-sm">
        <thead className="bg-soft text-xs uppercase tracking-wide text-muted">
          <tr>{entetes.map((e) => <th key={e} className="px-4 py-3">{e}</th>)}</tr>
        </thead>
        <tbody>
          {lignes.map((l, i) => (
            <tr key={i} className="border-t border-line">
              {l.map((c, j) => <td key={j} className="px-4 py-3 text-ink">{c}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
