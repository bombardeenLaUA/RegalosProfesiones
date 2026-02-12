"use client";

import type { Product } from "@/lib/data";

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

/** Parsea precio en formato español (ej: "32,99€") a número para GA4 */
function parsePriceToNumber(priceStr: string): number | null {
  const cleaned = priceStr
    .replace(/[€\s]/g, "")
    .replace(/\./g, "")
    .replace(",", ".");
  const num = parseFloat(cleaned);
  return isNaN(num) ? null : num;
}

function safeGtag(...args: Parameters<NonNullable<Window["gtag"]>>) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag(...args);
  }
}

/**
 * Dispara view_item_list cuando el usuario ve la lista de productos de una profesión.
 */
export function trackProfessionView(nicheSlug: string, nicheTitle: string) {
  safeGtag("event", "view_item_list", {
    item_list_id: nicheSlug,
    item_list_name: nicheTitle,
    item_list_category: "Regalos por profesión",
  });
}

/**
 * Dispara select_item cuando el usuario hace clic en un producto (enlace a Amazon).
 */
export function trackProductClick(product: Product, listName: string) {
  const price = parsePriceToNumber(product.price);

  safeGtag("event", "select_item", {
    item_list_id: listName.toLowerCase().replace(/\s+/g, "-"),
    item_list_name: listName,
    items: [
      {
        item_id: product.id,
        item_name: product.title,
        item_brand: "Amazon",
        item_category: "Regalos",
        price: price ?? 0,
        quantity: 1,
        affiliation: "Amazon",
        currency: "EUR",
      },
    ],
  });
}

/**
 * Dispara share cuando el usuario comparte o copia el enlace.
 */
export function trackShare(method: string, contentType: string) {
  safeGtag("event", "share", {
    method,
    content_type: contentType,
  });
}
