"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import type { Product } from "@/lib/data";

interface ProductGridProps {
  products: Product[];
  listName: string;
}

// Parsea precios en formato español (ej: "32,99€" o "1.028,00€") a número
const parsePrice = (priceStr: string): number => {
  if (!priceStr) return 0;
  const cleanStr = priceStr.replace(/[€\s]/g, "").replace(/\./g, "").replace(/,/g, ".");
  const value = parseFloat(cleanStr);
  return Number.isNaN(value) ? 0 : value;
};

type PriceFilter = "all" | "under20" | "20to50" | "over50";
type SortState = 0 | 1 | 2; // 0: default, 1: asc, 2: desc

export default function ProductGrid({ products, listName }: ProductGridProps) {
  const [activeFilter, setActiveFilter] = useState<PriceFilter>("all");
  const [sortState, setSortState] = useState<SortState>(0);
  const [openTooltipId, setOpenTooltipId] = useState<string | null>(null);

  const handleTooltipToggle = (productId: string) => {
    setOpenTooltipId((prev) => (prev === productId ? null : productId));
  };

  const handleSortToggle = () => {
    setSortState((prev) => ((prev + 1) % 3) as SortState);
  };

  const getSortLabel = (state: SortState): string => {
    switch (state) {
      case 1:
        return "Ordenar: Menor Precio ↑";
      case 2:
        return "Ordenar: Mayor Precio ↓";
      default:
        return "Ordenar: Por defecto (Etiquetas primero)";
    }
  };

  const productsWithPrice = products.map((product) => ({
    ...product,
    _priceValue: parsePrice(product.price),
  }));

  const filteredProducts = productsWithPrice.filter((product) => {
    const price = product._priceValue;
    switch (activeFilter) {
      case "under20":
        return price < 20;
      case "20to50":
        return price >= 20 && price <= 50;
      case "over50":
        return price > 50;
      default:
        return true;
    }
  });

  const displayedProducts = (() => {
    if (sortState === 0) {
      return filteredProducts;
    }

    const sorted = [...filteredProducts].sort((a, b) => a._priceValue - b._priceValue);
    return sortState === 1 ? sorted : sorted.reverse();
  })();

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Controles de filtrado y ordenación */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveFilter("all")}
            className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors sm:text-sm ${
              activeFilter === "all"
                ? "border-amber-500 bg-amber-500 text-white dark:border-amber-400 dark:bg-amber-500"
                : "border-gray-300 bg-white text-gray-600 hover:border-amber-400 hover:text-amber-700 dark:border-slate-600 dark:bg-slate-800 dark:text-gray-200 dark:hover:border-amber-400 dark:hover:text-amber-200"
            }`}
          >
            Todos
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("under20")}
            className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors sm:text-sm ${
              activeFilter === "under20"
                ? "border-amber-500 bg-amber-500 text-white dark:border-amber-400 dark:bg-amber-500"
                : "border-gray-300 bg-white text-gray-600 hover:border-amber-400 hover:text-amber-700 dark:border-slate-600 dark:bg-slate-800 dark:text-gray-200 dark:hover:border-amber-400 dark:hover:text-amber-200"
            }`}
          >
            Detallito (&lt; 20€)
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("20to50")}
            className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors sm:text-sm ${
              activeFilter === "20to50"
                ? "border-amber-500 bg-amber-500 text-white dark:border-amber-400 dark:bg-amber-500"
                : "border-gray-300 bg-white text-gray-600 hover:border-amber-400 hover:text-amber-700 dark:border-slate-600 dark:bg-slate-800 dark:text-gray-200 dark:hover:border-amber-400 dark:hover:text-amber-200"
            }`}
          >
            Buen Regalo (20€ - 50€)
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("over50")}
            className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors sm:text-sm ${
              activeFilter === "over50"
                ? "border-amber-500 bg-amber-500 text-white dark:border-amber-400 dark:bg-amber-500"
                : "border-gray-300 bg-white text-gray-600 hover:border-amber-400 hover:text-amber-700 dark:border-slate-600 dark:bg-slate-800 dark:text-gray-200 dark:hover:border-amber-400 dark:hover:text-amber-200"
            }`}
          >
            Impresionar (&gt; 50€)
          </button>
        </div>

        <button
          type="button"
          onClick={handleSortToggle}
          className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-4 py-2 text-xs font-medium text-gray-700 shadow-sm transition-colors hover:border-amber-400 hover:bg-amber-50 hover:text-amber-700 dark:border-slate-600 dark:bg-slate-800 dark:text-gray-200 dark:hover:border-amber-400 dark:hover:bg-slate-700 dark:hover:text-amber-200 sm:text-sm"
        >
          {getSortLabel(sortState)}
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {displayedProducts.map((product, index) => (
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
    </section>
  );
}
