"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { Product } from "@/lib/data";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-200/80">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
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
            className="object-cover transition-transform duration-300 group-hover:scale-105"
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
