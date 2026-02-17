"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ExternalLink, Trophy, Star, Gem, Info } from "lucide-react";
import type { Product } from "@/lib/data";
import { trackProductClick } from "@/hooks/use-analytics";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useLanguage } from "@/context/LanguageContext";

// Elimina emojis del texto para mostrar solo el texto limpio con icono Lucide
function getCleanBadgeText(badge: string): string {
  return badge
    .replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, "")
    .replace(/\s+/g, " ")
    .trim() || badge;
}

type BadgeVariant = "ventas" | "valorado" | "calidad-precio";

function getBadgeConfig(badge: string, language: "es" | "en" = "es"): { icon: React.ElementType; variant: BadgeVariant; cleanText: string } | null {
  const lower = badge.toLowerCase();
  const cleanText = getCleanBadgeText(badge);
  // Prioridad: Calidad/Precio (ofertas) > Ventas > Valorado
  if (lower.includes("calidad") || lower.includes("value")) {
    return { icon: Gem, variant: "calidad-precio", cleanText: language === "en" ? "Best Value" : cleanText };
  }
  if (lower.includes("ventas") || lower.includes("seller")) {
    return { icon: Trophy, variant: "ventas", cleanText: language === "en" ? "Best Seller" : cleanText };
  }
  if (lower.includes("valorado") || lower.includes("rated")) {
    return { icon: Star, variant: "valorado", cleanText: language === "en" ? "Top Rated" : cleanText };
  }
  return null; // Solo estas 3 categorías existen visualmente
}

const BADGE_STYLES: Record<BadgeVariant, string> = {
  ventas: "bg-green-500 text-white",
  valorado: "bg-yellow-400 text-gray-900",
  "calidad-precio": "bg-blue-500 text-white",
};

function getTooltipPosition(index: number, isDesktop: boolean): "top" | "left" | "right" {
  if (!isDesktop) return "top";
  const col = index % 4;
  if (col === 0) return "left";  // Columna izquierda: tooltip a la izquierda de la tarjeta
  if (col === 3) return "right"; // Columna derecha: tooltip a la derecha de la tarjeta
  return "top";                   // Columnas centrales: tooltip arriba
}

interface ProductCardProps {
  product: Product;
  listName: string;
  index: number;
  isTooltipOpen: boolean;
  onTooltipToggle: (productId: string) => void;
}

export default function ProductCard({
  product,
  listName,
  index,
  isTooltipOpen,
  onTooltipToggle,
}: ProductCardProps) {
  const { language, t } = useLanguage();
  const handleProductClick = () => trackProductClick(product, listName);
  const [imageError, setImageError] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const position = getTooltipPosition(index, isDesktop);
  const hasGiftReason = Boolean(product.giftReason);
  
  const displayTitle = language === "en" && product.title_en ? product.title_en : product.title;
  const displayReason = language === "en" && product.giftReason_en ? product.giftReason_en : product.giftReason;

  useEffect(() => {
    if (!isTooltipOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (tooltipRef.current && !tooltipRef.current.contains(e.target as Node)) {
        onTooltipToggle(product.id);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isTooltipOpen, product.id, onTooltipToggle]);

  const handleInfoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onTooltipToggle(product.id);
  };

  const tooltipPositionClasses = {
    // Columnas centrales: globo centrado sobre el icono (left-1/2 -translate-x-1/2)
    top: "left-1/2 right-auto -translate-x-1/2 bottom-[110%]",
    // Primera columna: tooltip a la izquierda (no modificar)
    left:
      "left-0 right-0 bottom-[110%] lg:right-[105%] lg:left-auto lg:top-1/2 lg:bottom-auto lg:-translate-y-1/2",
    // Última columna: tooltip a la derecha (no modificar)
    right:
      "left-0 right-0 bottom-[110%] lg:left-[105%] lg:right-auto lg:top-1/2 lg:bottom-auto lg:-translate-y-1/2",
  };

  const arrowClasses = {
    // Flecha centrada bajo el globo en columnas centrales
    top: "left-1/2 -translate-x-1/2 top-full h-0 w-0 border-[6px] border-transparent border-t-white",
    left:
      "top-1/2 -right-1 z-[-1] h-2 w-2 -translate-y-1/2 rotate-45 border-r border-t border-gray-200 bg-white",
    right:
      "top-1/2 -left-1 z-[-1] h-2 w-2 -translate-y-1/2 rotate-45 border-l border-b border-gray-200 bg-white",
  };

  return (
    <article
      className={`group relative flex flex-col rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-200/80 dark:border-slate-700 dark:bg-slate-800 dark:hover:shadow-xl dark:shadow-slate-900/50 ${isTooltipOpen ? "z-[100]" : "z-0"}`}
    >
      {/* Enlace a Amazon que cubre toda la tarjeta; el botón de info queda fuera con pointer-events-auto */}
      <a
        href={product.amazonLink}
        target="_blank"
        rel="noopener noreferrer nofollow sponsored"
        className="absolute inset-0 z-0 rounded-2xl"
        aria-label={`${t("ir-a-amazon")}: ${displayTitle}`}
        onClick={handleProductClick}
      />
      <div className="relative z-10 flex flex-1 flex-col pointer-events-none">
        <div className="relative aspect-square overflow-hidden bg-white p-4 dark:bg-slate-800 pointer-events-none">
          {product.badges && product.badges.length > 0 && (
            <div className="absolute left-0 top-0 z-10 flex flex-col gap-1">
              {product.badges
                .map((badge, badgeIndex) => {
                  const config = getBadgeConfig(badge, language);
                  if (!config) return null;
                  const { icon: IconComponent, variant, cleanText } = config;
                  const isFirst = badgeIndex === 0;
                  return (
                    <div
                      key={badge}
                      className={`flex items-center gap-1 rounded-br-lg px-2 py-1 ${isFirst ? "rounded-tl-2xl" : ""} ${BADGE_STYLES[variant]}`}
                    >
                      <IconComponent className="h-3.5 w-3.5 shrink-0" />
                      <span className="text-xs font-bold">{cleanText}</span>
                    </div>
                  );
                })
                .filter(Boolean)}
            </div>
          )}
          {imageError ? (
            <div
              className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-amber-100 via-orange-50 to-amber-100 p-4 text-center dark:from-slate-700 dark:via-slate-800 dark:to-slate-700"
              role="img"
              aria-hidden
            >
              <span className="line-clamp-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                {displayTitle}
              </span>
              <span className="mt-2 text-xs text-gray-500 dark:text-gray-400">GiftGenius</span>
            </div>
          ) : (
            <Image
              src={product.imageUrl}
              alt={displayTitle}
              fill
              unoptimized
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              onError={() => setImageError(true)}
            />
          )}
        </div>
        <div className="relative flex flex-1 flex-col p-6 pointer-events-none">
          <h2 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-amber-700 dark:text-gray-100 dark:group-hover:text-amber-400">
            <span className="block">{displayTitle}</span>
          </h2>
          <div className="relative mt-2 flex items-center justify-between gap-2 pointer-events-none">
            <span className="text-2xl font-bold text-amber-600 dark:text-amber-400">
              {product.price}
            </span>
            {hasGiftReason && (
              <div ref={tooltipRef} className="relative z-50 shrink-0 pointer-events-auto">
                <button
                  type="button"
                  onClick={handleInfoClick}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-300 text-white transition-colors hover:bg-gray-400 dark:bg-slate-600 dark:hover:bg-slate-500"
                  aria-label={t("por-que-regalo")}
                >
                  <Info className="h-4 w-4" />
                </button>
                {isTooltipOpen && (
                  <div
                    className={`absolute z-50 isolate w-full overflow-visible rounded-lg border border-gray-200 bg-white px-4 py-3 shadow-2xl animate-[fadeIn_0.15s_ease-out_both] lg:w-64 dark:border-slate-600 dark:bg-slate-800 ${tooltipPositionClasses[position]}`}
                  >
                    <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">{displayReason}</p>
                    <div
                      className={`absolute ${arrowClasses[position]} ${position === "top" ? "dark:!border-t-slate-800" : "dark:border-slate-600 dark:bg-slate-800"}`}
                      aria-hidden
                    />
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="mt-auto pt-6 pointer-events-none">
            <span className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-4 font-semibold text-gray-900 shadow-md transition-all group-hover:bg-amber-500 dark:bg-amber-500 dark:hover:bg-amber-400">
              {t("ver-en-amazon")}
              <ExternalLink className="h-5 w-5" />
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
