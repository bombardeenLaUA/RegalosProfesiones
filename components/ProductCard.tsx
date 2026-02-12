"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ExternalLink, Trophy, Star, Gem, Info } from "lucide-react";
import type { Product } from "@/lib/data";
import { trackProductClick } from "@/hooks/use-analytics";
import { useMediaQuery } from "@/hooks/use-media-query";

// Elimina emojis del texto para mostrar solo el texto limpio con icono Lucide
function getCleanBadgeText(badge: string): string {
  return badge
    .replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, "")
    .replace(/\s+/g, " ")
    .trim() || badge;
}

type BadgeVariant = "ventas" | "valorado" | "calidad-precio";

function getBadgeConfig(badge: string): { icon: React.ElementType; variant: BadgeVariant; cleanText: string } | null {
  const lower = badge.toLowerCase();
  const cleanText = getCleanBadgeText(badge);
  // Prioridad: Calidad/Precio (ofertas) > Ventas > Valorado
  if (lower.includes("calidad")) {
    return { icon: Gem, variant: "calidad-precio", cleanText };
  }
  if (lower.includes("ventas")) return { icon: Trophy, variant: "ventas", cleanText };
  if (lower.includes("valorado")) return { icon: Star, variant: "valorado", cleanText };
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
  const handleProductClick = () => trackProductClick(product, listName);
  const [imageError, setImageError] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const position = getTooltipPosition(index, isDesktop);
  const hasGiftReason = Boolean(product.giftReason);

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
    top:
      "left-0 right-0 bottom-[110%] lg:left-1/2 lg:right-auto lg:-translate-x-1/2",
    left:
      "left-0 right-0 bottom-[110%] lg:right-[105%] lg:left-auto lg:top-1/2 lg:bottom-auto lg:-translate-y-1/2",
    right:
      "left-0 right-0 bottom-[110%] lg:left-[105%] lg:right-auto lg:top-1/2 lg:bottom-auto lg:-translate-y-1/2",
  };

  const arrowClasses = {
    top: "left-1/2 top-full -translate-x-1/2 h-0 w-0 border-[6px] border-transparent border-t-white",
    left:
      "top-1/2 -right-2 z-[-1] h-2 w-2 -translate-y-1/2 rotate-45 border-r border-t border-gray-200 bg-white",
    right:
      "top-1/2 -left-2 z-[-1] h-2 w-2 -translate-y-1/2 rotate-45 border-l border-b border-gray-200 bg-white",
  };

  return (
    <article
      className={`group relative flex flex-col overflow-visible rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-200/80 ${isTooltipOpen ? "z-[100]" : "z-0"}`}
    >
      <div className="relative aspect-square overflow-hidden bg-white p-4">
        {product.badges && product.badges.length > 0 && (
          <div className="absolute left-0 top-0 z-10 flex flex-col gap-1">
            {product.badges
              .map((badge) => {
                const config = getBadgeConfig(badge);
                if (!config) return null;
                const { icon: IconComponent, variant, cleanText } = config;
                return (
                  <div
                    key={badge}
                    className={`flex items-center gap-1 rounded-br-lg px-2 py-1 ${BADGE_STYLES[variant]}`}
                  >
                    <IconComponent className="h-3.5 w-3.5 shrink-0" />
                    <span className="text-xs font-bold">{cleanText}</span>
                  </div>
                );
              })
              .filter(Boolean)}
          </div>
        )}
        <a
          href={product.amazonLink}
          target="_blank"
          rel="noopener noreferrer nofollow sponsored"
          className="relative block h-full w-full"
          onClick={handleProductClick}
        >
          {imageError ? (
            <div
              className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-amber-100 via-orange-50 to-amber-100 p-4 text-center"
              role="img"
              aria-label={product.title}
            >
              <span className="line-clamp-4 text-sm font-medium text-gray-700">
                {product.title}
              </span>
              <span className="mt-2 text-xs text-gray-500">GiftGenius</span>
            </div>
          ) : (
            <Image
              src={product.imageUrl}
              alt={product.title}
              fill
              unoptimized
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              onError={() => setImageError(true)}
            />
          )}
        </a>
      </div>
      <div ref={tooltipRef} className="relative flex flex-1 flex-col p-6">
        <h2 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-amber-700">
          <a
            href={product.amazonLink}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            className="block text-inherit no-underline hover:text-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 rounded"
            onClick={handleProductClick}
          >
            {product.title}
          </a>
        </h2>
        <div className="mt-2 flex items-center justify-between gap-2">
          <p className="text-2xl font-bold text-amber-600">{product.price}</p>
          {hasGiftReason && (
            <div className="shrink-0">
              <button
                type="button"
                onClick={handleInfoClick}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-300 text-white transition-colors hover:bg-gray-400"
                aria-label="Por qué es un buen regalo"
              >
                <Info className="h-4 w-4" />
              </button>
              {isTooltipOpen && (
                <div
                  className={`absolute z-50 isolate w-full overflow-visible rounded-lg border border-gray-200 bg-white px-4 py-3 shadow-2xl animate-[fadeIn_0.15s_ease-out_both] lg:w-64 ${tooltipPositionClasses[position]}`}
                >
                  <p className="text-sm leading-relaxed text-gray-700">{product.giftReason}</p>
                  <div
                    className={`absolute ${arrowClasses[position]}`}
                    aria-hidden
                  />
                </div>
              )}
            </div>
          )}
        </div>
        <div className="mt-auto pt-6">
          <a
            href={product.amazonLink}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-4 font-semibold text-gray-900 shadow-md transition-all hover:bg-amber-500 hover:shadow-lg"
            onClick={handleProductClick}
          >
            Ver en Amazon
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </div>
    </article>
  );
}
