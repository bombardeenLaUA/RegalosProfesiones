"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import type { Product } from "@/lib/data";

const PRODUCTS_PER_PAGE = 12;

interface ProductGridProps {
  products: Product[];
  listName: string;
}

export default function ProductGrid({ products, listName }: ProductGridProps) {
  const [visibleCount, setVisibleCount] = useState(PRODUCTS_PER_PAGE);
  const [openTooltipId, setOpenTooltipId] = useState<string | null>(null);
  const visibleProducts = products.slice(0, visibleCount);
  const hasMore = visibleCount < products.length;
  const totalRemaining = products.length - visibleCount;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + PRODUCTS_PER_PAGE, products.length));
  };

  const handleTooltipToggle = (productId: string) => {
    setOpenTooltipId((prev) => (prev === productId ? null : productId));
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visibleProducts.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            listName={listName}
            index={index}
            isTooltipOpen={openTooltipId === product.id}
            onTooltipToggle={handleTooltipToggle}
          />
        ))}
      </div>

      {/* Botón Cargar más */}
      {hasMore && (
        <div className="mt-16 flex justify-center">
          <button
            type="button"
            onClick={handleLoadMore}
            className="rounded-xl border-2 border-amber-400 bg-white px-8 py-4 font-semibold text-amber-600 transition-all hover:bg-amber-50 hover:border-amber-500"
          >
            Cargar más productos ({Math.min(PRODUCTS_PER_PAGE, totalRemaining)} más)
          </button>
        </div>
      )}
    </section>
  );
}
