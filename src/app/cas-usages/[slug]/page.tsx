import { notFound } from "next/navigation";
import { ContentPageRenderer } from "@/components/ContentPageRenderer";
import { JsonLd } from "@/components/JsonLd";
import { getUseCaseBySlug, useCases } from "@/data/useCases";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/routes";

type UseCasePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return useCases.map((useCase) => ({ slug: useCase.slug }));
}

export async function generateMetadata({ params }: UseCasePageProps) {
  const { slug } = await params;
  const useCase = getUseCaseBySlug(slug);
  if (!useCase) return {};
  return buildMetadata({
    title: useCase.metaTitle,
    description: useCase.metaDescription,
    path: `/cas-usages/${useCase.slug}`
  });
}

export default async function UseCasePage({ params }: UseCasePageProps) {
  const { slug } = await params;
  const useCase = getUseCaseBySlug(slug);
  if (!useCase) notFound();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: useCase.h1,
          description: useCase.metaDescription,
          url: absoluteUrl(`/cas-usages/${useCase.slug}`),
          provider: { "@type": "Organization", name: "Entreprise.ai" },
          areaServed: "France"
        }}
      />
      <ContentPageRenderer page={useCase} parent={{ label: "Cas d'usage", href: "/cas-usages" }} variant="useCase" />
    </>
  );
}
