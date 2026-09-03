// Contrôle SEO sur le HTML produit par `next build` (.next/server/app/**/*.html).
// Règles : un titre de 10 à 90 caractères suffixe « | Entreprise.ai » compris (avertissement au-delà de 70), unique ; une meta description de 50 à 170 caractères ;
// exactement un <h1> ; aucun mot de chantier (« MVP », « lorem », « TODO ») ; JSON-LD analysable.
// Échoue (code 1) à la première liste de violations : le build Vercel s'arrête alors avant de publier.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const racine = join(process.cwd(), ".next", "server", "app");
function fichiers(d) {
  return readdirSync(d).flatMap((n) => {
    const p = join(d, n);
    return statSync(p).isDirectory() ? fichiers(p) : p.endsWith(".html") ? [p] : [];
  });
}
const pages = fichiers(racine).filter((p) => !/_not-found|_global-error|referencer-mon-agence-ia|\/404\.html$|\/500\.html$/.test(p))
  .filter((p) => { const h = readFileSync(p, "utf8"); return !(h.length < 6000 && !/<h1[\s>]/i.test(h) && !/<main[\s>]/i.test(h)); }); // pages de redirection
const erreurs = [];
const avertissements = [];
const titres = new Map();
const decode = (s) => s.replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/&nbsp;/g, " ");
for (const p of pages) {
  const html = readFileSync(p, "utf8");
  const nom = relative(racine, p);
  const titre = decode((html.match(/<title[^>]*>([^<]*)<\/title>/i) || [])[1] || "").trim();
  const desc = decode((html.match(/<meta\s+name="description"\s+content="([^"]*)"/i) || html.match(/<meta\s+content="([^"]*)"\s+name="description"/i) || [])[1] || "").trim();
  const h1 = (html.match(/<h1[\s>]/gi) || []).length;
  if (titre.length < 10 || titre.length > 90) erreurs.push(`${nom} : titre de ${titre.length} caractères (10-90) « ${titre} »`);
  else if (titre.length > 70) avertissements.push(`${nom} : titre long (${titre.length})`);
  if (desc.length < 50 || desc.length > 170) erreurs.push(`${nom} : description de ${desc.length} caractères (50-170)`);
  if (h1 !== 1) erreurs.push(`${nom} : ${h1} balise(s) h1`);
  for (const mot of [/\bMVP\b/, /lorem ipsum/i, /\bTODO\b/]) if (mot.test(titre + " " + desc)) erreurs.push(`${nom} : mot de chantier dans le titre ou la description`);
  if (titres.has(titre)) erreurs.push(`${nom} : titre identique à ${titres.get(titre)}`); else titres.set(titre, nom);
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(m[1]); } catch { erreurs.push(`${nom} : JSON-LD invalide`); }
  }
}
if (!pages.length) { console.error("check-seo : aucune page HTML trouvée sous .next/server/app"); process.exit(1); }
if (erreurs.length) {
  console.error(`check-seo : ${erreurs.length} violation(s) sur ${pages.length} pages`);
  for (const e of erreurs.slice(0, 40)) console.error("  ✗ " + e);
  process.exit(1);
}
if (avertissements.length) console.log(`check-seo : ${avertissements.length} titre(s) au-delà de 70 caractères (tolérés, suffixe compris)`);
console.log(`check-seo OK : ${pages.length} pages, titres uniques, descriptions et h1 conformes, JSON-LD valides.`);
