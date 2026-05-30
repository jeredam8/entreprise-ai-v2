import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const requiredFiles = [
  "README.md",
  "docs/brief-positionnement.md",
  "docs/business-model.md",
  "docs/strategie-seo.md",
  "docs/strategie-llm-optimization.md",
  "docs/lancement-beta-2026-05-30.md",
  "docs/roadmap-marketing.md",
  "docs/barometre-prestataires-ia.md",
  "docs/backlog-produit.md",
  "public/llms.txt",
  "src/app/page.tsx",
  "src/app/deposer-un-projet-ia/page.tsx",
  "src/app/referencer-mon-agence-ia/page.tsx",
  "src/app/prestataires-ia/page.tsx",
  "src/app/guides/[slug]/page.tsx",
  "src/app/cas-usages/[slug]/page.tsx",
  "src/app/secteurs/[slug]/page.tsx",
  "src/app/villes/[slug]/page.tsx",
  "src/app/glossaire/page.tsx",
  "src/app/sitemap.ts",
  "src/app/robots.ts",
  "src/data/providers.ts",
  "src/data/useCases.ts",
  "src/data/sectors.ts",
  "src/data/guides.ts",
  "src/data/cities.ts",
  "src/data/faqs.ts"
];

const missing = requiredFiles.filter((file) => !fs.existsSync(path.join(root, file)));

if (missing.length > 0) {
  console.error("MVP incomplet. Fichiers manquants :");
  for (const file of missing) {
    console.error(`- ${file}`);
  }
  process.exit(1);
}

const providers = fs.readFileSync(path.join(root, "src/data/providers.ts"), "utf8");
const providerCount = (providers.match(/slug:/g) || []).length;

if (providerCount < 8) {
  console.error(`MVP incomplet. Prestataires exemples detectes : ${providerCount}, minimum attendu : 8.`);
  process.exit(1);
}

console.log("Verification V2 beta OK : fichiers structurants presents et base prestataires interne suffisante.");
