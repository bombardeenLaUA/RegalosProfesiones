"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Trophy, Star, Zap, TrendingUp, ThumbsUp } from "lucide-react";
import type { Product } from "@/lib/data";

const BADGE_ICONS: Record<string, React.ElementType> = {
  trophy: Trophy,
  star: Star,
  trending: TrendingUp,
  thumbs: ThumbsUp,
  default: Zap,
};

function getBadgeIcon(badge: string): React.ElementType {
  const lower = badge.toLowerCase();
  if (lower.includes("ventas") || lower.includes("top")) return BADGE_ICONS.trophy;
  if (lower.includes("valorados") || lower.includes("calidad")) return BADGE_ICONS.star;
  return BADGE_ICONS.default;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-200/80">
      <div className="relative aspect-square overflow-hidden bg-white p-4">
        {product.badge && (
          <div className="absolute left-0 top-0 z-10 flex items-center gap-1 rounded-br-lg bg-yellow-400 px-2 py-1">
            {(() => {
              const IconComponent = getBadgeIcon(product.badge);
              return <IconComponent className="h-3.5 w-3.5 text-gray-900" />;
            })()}
            <span className="text-xs font-bold text-gray-900">{product.badge}</span>
          </div>
        )}
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
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h2 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-amber-700">
          {product.title}
        </h2>
        <p className="mt-2 text-2xl font-bold text-amber-600">{product.price}</p>
        <div className="mt-auto pt-6">
          <a
            href={product.amazonLink}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-4 font-semibold text-gray-900 shadow-md transition-all hover:bg-amber-500 hover:shadow-lg"
          >
            Ver en Amazon
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </div>
    </article>
  );
}
