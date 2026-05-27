import { notFound } from "next/navigation";
import { ContentPageRenderer } from "@/components/ContentPageRenderer";
import { JsonLd } from "@/components/JsonLd";
import { getGuideBySlug, guides } from "@/data/guides";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/routes";

type GuidePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return buildMetadata({
    title: guide.metaTitle,
    description: guide.metaDescription,
    path: `/guides/${guide.slug}`,
    type: "article"
  });
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: guide.h1,
          description: guide.metaDescription,
          inLanguage: "fr-FR",
          url: absoluteUrl(`/guides/${guide.slug}`),
          author: { "@type": "Organization", name: "Entreprise.ai" },
          publisher: { "@type": "Organization", name: "Entreprise.ai" }
        }}
      />
      <ContentPageRenderer page={guide} parent={{ label: "Guides", href: "/guides" }} variant="guide" />
    </>
  );
}
