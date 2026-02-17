"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { getNicheBySlug } from "@/lib/data";
import AmazonCtaButton from "@/components/AmazonCtaButton";
import ProductGrid from "@/components/ProductGrid";
import ProfessionViewTracker from "@/components/ProfessionViewTracker";
import ShareIcon from "@/components/ShareIcon";
import { useLanguage } from "@/context/LanguageContext";

function getNicheDisplayName(title: string, titleEn?: string, language: "es" | "en" = "es"): string {
  const displayTitle = language === "en" && titleEn ? titleEn : title;
  if (language === "en") {
    return displayTitle.replace("Gifts for ", "");
  }
  return displayTitle.replace("Regalos para ", "");
}

interface RegalosPageClientProps {
  slug: string;
}

export default function RegalosPageClient({ slug }: RegalosPageClientProps) {
  const { language, t } = useLanguage();
  const niche = getNicheBySlug(slug);

  if (!niche) {
    notFound();
  }

  const displayTitle = language === "en" && niche.title_en ? niche.title_en : niche.title;
  const displayDescription = language === "en" && niche.description_en ? niche.description_en : niche.description;
  const displayContent = language === "en" && niche.content_en ? niche.content_en : niche.content;
  const displaySingularName = language === "en" && niche.singularName_en ? niche.singularName_en : niche.singularName;
  const displayName = getNicheDisplayName(niche.title, niche.title_en, language);

  return (
    <div className="min-h-screen">
      <ProfessionViewTracker slug={slug} title={niche.title} />
      
      {/* Header con H1 y CTA Principal */}
      <header className="bg-gradient-to-b from-amber-50/80 to-white py-16 dark:from-slate-900 dark:to-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-row flex-wrap items-center gap-3 sm:gap-4">
            <h1 className="min-w-0 flex-1 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-gray-100">
              {niche.products.length} {t("ideas-regalo")} {displayName}
            </h1>
            <ShareIcon slug={slug} displayName={displayName} />
          </div>
          <p className="mt-6 max-w-3xl text-lg text-gray-600 leading-relaxed dark:text-gray-300">
            {t("top-ventas-valorados")}
          </p>
          {/* CTA Hero */}
          <div className="mt-10 flex flex-col items-center">
            <p className="mb-4 text-center text-gray-600 dark:text-gray-300">
              {t("ver-mas-opciones")}
            </p>
            <AmazonCtaButton slug={slug} displayName={displayName} variant="hero" />
          </div>
        </div>
      </header>

      {/* Aviso de afiliados */}
      <p className="mx-auto max-w-7xl px-4 pt-4 pb-2 text-center text-sm italic text-gray-500 sm:px-6 lg:px-8 dark:text-gray-400">
        {t("afiliados-text")}
      </p>

      {/* Grid de Productos con Cargar más y CTA */}
      <ProductGrid products={niche.products} listName={displayTitle} />

      {/* Sección SEO: Contenido personalizado por nicho */}
      <section className="border-t border-gray-200 bg-gray-50 py-16 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {t("por-que-regalo-a")} {displaySingularName}?
          </h2>
          <div className="mt-6 space-y-4 text-gray-600 leading-relaxed dark:text-gray-300">
            {displayContent ? (
              displayContent.split(/\n\n+/).map((paragraph, i) => (
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
                {language === "en" 
                  ? `A gift for an ${displaySingularName} that fits what they do says more than a thousand words.`
                  : `Un regalo para un ${displaySingularName} que encaje con lo que hace dice más que mil palabras.`}
              </p>
            )}
          </div>
          <Link
            href="/"
            className="mt-8 inline-flex items-center text-amber-600 font-medium hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300"
          >
            {t("volver-categorias")}
          </Link>
        </div>
      </section>
    </div>
  );
}
