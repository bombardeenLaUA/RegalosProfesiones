import { notFound } from "next/navigation";
import Link from "next/link";
import { getNicheBySlug, getAllSlugs } from "@/lib/data";
import AmazonCtaButton from "@/components/AmazonCtaButton";
import ProductGrid from "@/components/ProductGrid";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = params;
  const niche = getNicheBySlug(slug);
  if (!niche) return { title: "No encontrado" };
  return {
    title: niche.title,
    description: niche.description,
    openGraph: {
      title: niche.title,
      description: niche.description,
    },
  };
}

function getNicheDisplayName(title: string): string {
  return title.replace("Los Mejores Regalos para ", "");
}

export default async function RegalosPage({ params }: PageProps) {
  const { slug } = params;
  const niche = getNicheBySlug(slug);

  if (!niche) {
    notFound();
  }

  const displayName = getNicheDisplayName(niche.title);

  return (
    <div className="min-h-screen">
      {/* Header con H1 y CTA Principal */}
      <header className="bg-gradient-to-b from-amber-50/80 to-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            {niche.products.length} Ideas de Regalos Originales para {displayName}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-600 leading-relaxed">
            {niche.description} Hemos seleccionado cuidadosamente productos que cualquier {displayName.toLowerCase()} valorará. Desde lo práctico hasta lo sorprendente, aquí tienes nuestra lista de los mejores regalos.
          </p>
          {/* CTA Hero - Deep Linking */}
          <div className="mt-10 flex flex-col items-center">
            <p className="mb-4 text-center text-gray-600">
              ¿No encuentras lo que buscas? Explora miles de opciones más
            </p>
            <AmazonCtaButton slug={slug} displayName={displayName} variant="hero" />
          </div>
        </div>
      </header>

      {/* Grid de Productos con Cargar más y CTA */}
      <ProductGrid products={niche.products} />

      {/* Sección SEO: Contenido personalizado por nicho */}
      <section className="border-t border-gray-200 bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">
            ¿Por qué hacer un regalo a un {displayName}?
          </h2>
          <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
            {niche.content ? (
              niche.content.split(/\n\n+/).map((paragraph, i) => (
                <p key={i}>
                  {paragraph.split(/(\*\*.*?\*\*)/g).map((part, j) =>
                    part.startsWith("**") && part.endsWith("**") ? (
                      <strong key={j} className="font-semibold text-gray-800">
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
                Regalar a un {displayName.toLowerCase()} es una forma excelente de reconocer su dedicación y pasión. Un regalo bien elegido demuestra que has pensado en sus intereses.
              </p>
            )}
          </div>
          <Link
            href="/"
            className="mt-8 inline-flex items-center text-amber-600 font-medium hover:text-amber-700"
          >
            ← Volver a todas las categorías
          </Link>
        </div>
      </section>
    </div>
  );
}
