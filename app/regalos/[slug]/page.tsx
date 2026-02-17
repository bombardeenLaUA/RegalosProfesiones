import { getNicheBySlug, getAllSlugs } from "@/lib/data";
import type { Product } from "@/lib/data";
import RegalosPageClient from "./RegalosPageClient";

/** Parsea precio en formato español (ej: "32,99€" o "1.028,00€") a número para Schema.org */
function parsePriceToNumber(priceStr: string): number | null {
  const cleaned = priceStr.replace(/[€\s]/g, "").replace(/\./g, "").replace(",", ".");
  const num = parseFloat(cleaned);
  return isNaN(num) ? null : num;
}

function buildItemListSchema(
  nicheTitle: string,
  slug: string,
  products: Product[],
  baseUrl: string
) {
  const listUrl = `${baseUrl}/regalos/${slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: nicheTitle,
    url: listUrl,
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => {
      const priceNum = parsePriceToNumber(product.price);
      const listItem: Record<string, unknown> = {
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          name: product.title,
          image: product.imageUrl,
          url: product.amazonLink,
          ...(priceNum != null && {
            offers: {
              "@type": "Offer",
              price: priceNum,
              priceCurrency: "EUR",
            },
          }),
        },
      };
      return listItem;
    }),
  };
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

function getNicheDisplayName(title: string): string {
  return title.replace("Regalos para ", "");
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const niche = getNicheBySlug(slug);
  if (!niche) return { title: "No encontrado" };

  const professionName = getNicheDisplayName(niche.title);
  const productCount = niche.products.length;
  const pageTitle = `Los ${productCount} Mejores Regalos para ${professionName} (2026)`;

  return {
    title: pageTitle,
    description: niche.description,
    alternates: {
      canonical: `/regalos/${slug}`,
    },
    openGraph: {
      title: pageTitle,
      description: niche.description,
    },
  };
}

export default async function RegalosPage({ params }: PageProps) {
  const { slug } = await params;
  const niche = getNicheBySlug(slug);

  if (!niche) {
    return null;
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://giftgenius.es";
  const itemListSchema = buildItemListSchema(niche.title, slug, niche.products, baseUrl);

  return (
    <>
      {/* Schema Markup JSON-LD para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <RegalosPageClient slug={slug} />
    </>
  );
}
