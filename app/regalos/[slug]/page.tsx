import { notFound } from "next/navigation";
import Link from "next/link";
import { getNicheBySlug, getAllSlugs } from "@/lib/data";
import type { Product } from "@/lib/data";
import AmazonCtaButton from "@/components/AmazonCtaButton";
import ProductGrid from "@/components/ProductGrid";
import ProfessionViewTracker from "@/components/ProfessionViewTracker";
import ShareIcon from "@/components/ShareIcon";

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
  params: { slug: string };
}

function getNicheDisplayName(title: string): string {
  return title.replace("Regalos para ", "");
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = params;
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
  const { slug } = params;
  const niche = getNicheBySlug(slug);

  if (!niche) {
    notFound();
  }

  const displayName = getNicheDisplayName(niche.title);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://giftgenius.es";
  const itemListSchema = buildItemListSchema(niche.title, slug, niche.products, baseUrl);

  return (
    <div className="min-h-screen">
      <ProfessionViewTracker slug={slug} title={niche.title} />
      {/* Schema Markup JSON-LD para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      {/* Header con H1 y CTA Principal */}
      <header className="bg-gradient-to-b from-amber-50/80 to-white py-16 dark:from-slate-900 dark:to-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-row flex-wrap items-center gap-3 sm:gap-4">
            <h1 className="min-w-0 flex-1 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-gray-100">
              {niche.products.length} Ideas de Regalos Originales para {displayName}
            </h1>
            <ShareIcon slug={slug} displayName={displayName} />
          </div>
          <p className="mt-6 max-w-3xl text-lg text-gray-600 leading-relaxed dark:text-gray-300">
            Top ventas y mejor valorados del momento. Selección hecha a mano para ahorrarte el trabajo.
          </p>
          {/* CTA Hero */}
          <div className="mt-10 flex flex-col items-center">
            <p className="mb-4 text-center text-gray-600 dark:text-gray-300">
              ¿Prefieres ver más opciones? Accede al catálogo completo en Amazon
            </p>
            <AmazonCtaButton slug={slug} displayName={displayName} variant="hero" />
          </div>
        </div>
      </header>

      {/* Aviso de afiliados */}
      <p className="mx-auto max-w-7xl px-4 pt-4 pb-2 text-center text-sm italic text-gray-500 sm:px-6 lg:px-8 dark:text-gray-400">
        Participamos en el Programa de Afiliados de Amazon. Algunos enlaces nos generan una comisión sin coste adicional para ti.
      </p>

      {/* Grid de Productos con Cargar más y CTA */}
      <ProductGrid products={niche.products} listName={niche.title} />

      {/* Sección SEO: Contenido personalizado por nicho */}
      <section className="border-t border-gray-200 bg-gray-50 py-16 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            ¿Por qué hacer un regalo a un {niche.singularName}?
          </h2>
          <div className="mt-6 space-y-4 text-gray-600 leading-relaxed dark:text-gray-300">
            {niche.content ? (
              niche.content.split(/\n\n+/).map((paragraph, i) => (
                <p key={i}>
                  {paragraph.split(/(\*\*.*?\*\*)/g).map((part, j) =>
                    part.startsWith("**") && part.endsWith("**") ? (
                      <strong key={j} className="font-semibold text-gray-800 dark:text-gray-200">
                        {part.slice(2, -2)}
                      </strong>
                    ) : (
                      part
                    )
                  )}
                </p>
              ))
            ) : (
              <p>
                Un regalo para un {niche.singularName} que encaje con lo que hace dice más que mil palabras.
              </p>
            )}
          </div>
          <Link
            href="/"
            className="mt-8 inline-flex items-center text-amber-600 font-medium hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300"
          >
            ← Volver a todas las categorías
          </Link>
        </div>
      </section>
    </div>
  );
}
