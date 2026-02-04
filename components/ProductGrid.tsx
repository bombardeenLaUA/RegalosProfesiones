"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import AmazonCtaButton from "./AmazonCtaButton";
import type { Product } from "@/lib/data";

const PRODUCTS_PER_PAGE = 12;

interface ProductGridProps {
  products: Product[];
  slug: string;
  displayName: string;
}

export default function ProductGrid({ products, slug, displayName }: ProductGridProps) {
  const [visibleCount, setVisibleCount] = useState(PRODUCTS_PER_PAGE);
  const visibleProducts = products.slice(0, visibleCount);
  const hasMore = visibleCount < products.length;
  const totalRemaining = products.length - visibleCount;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + PRODUCTS_PER_PAGE, products.length));
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* CTA Principal Amazon - Deep Linking */}
      <div className="mt-16 flex flex-col items-center gap-8">
        <div className="flex w-full flex-col items-center gap-4">
          <p className="text-center text-sm font-medium text-gray-500">
            ¿No encuentras lo que buscas? Explora miles de opciones más
          </p>
          <AmazonCtaButton slug={slug} displayName={displayName} variant="grid" />
        </div>

        {/* Botón Cargar más */}
        {hasMore && (
          <button
            type="button"
            onClick={handleLoadMore}
            className="rounded-xl border-2 border-amber-400 bg-white px-8 py-4 font-semibold text-amber-600 transition-all hover:bg-amber-50 hover:border-amber-500"
          >
            Cargar más productos ({Math.min(PRODUCTS_PER_PAGE, totalRemaining)} más)
          </button>
        )}
      </div>
    </section>
  );
}
