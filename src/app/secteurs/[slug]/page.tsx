import { notFound } from "next/navigation";
import { ContentPageRenderer } from "@/components/ContentPageRenderer";
import { JsonLd } from "@/components/JsonLd";
import { getSectorBySlug, sectors } from "@/data/sectors";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/routes";

type SectorPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return sectors.map((sector) => ({ slug: sector.slug }));
}

export async function generateMetadata({ params }: SectorPageProps) {
  const { slug } = await params;
  const sector = getSectorBySlug(slug);
  if (!sector) return {};
  return buildMetadata({
    title: sector.metaTitle,
    description: sector.metaDescription,
    path: `/secteurs/${sector.slug}`
  });
}

export default async function SectorPage({ params }: SectorPageProps) {
  const { slug } = await params;
  const sector = getSectorBySlug(slug);
  if (!sector) notFound();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: sector.h1,
          description: sector.metaDescription,
          url: absoluteUrl(`/secteurs/${sector.slug}`),
          inLanguage: "fr-FR"
        }}
      />
      <ContentPageRenderer page={sector} parent={{ label: "Secteurs", href: "/secteurs" }} variant="sector" />
    </>
  );
}
