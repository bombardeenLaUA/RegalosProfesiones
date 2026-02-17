"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "giftgenius-language";

// Static UI strings dictionary
const translations: Record<Language, Record<string, string>> = {
  es: {
    "ver-en-amazon": "Ver en Amazon",
    "top-ventas": "Top Ventas",
    "mejor-valorado": "Mejor Valorado",
    "calidad-precio": "Calidad/Precio",
    "oferta": "Oferta",
    "hero-title": "Encuentra el Regalo Perfecto por Profesión",
    "hero-subtitle": "Hemos seleccionado lo que funciona para cada profesión. Ideas que aciertan, sin relleno.",
    "hero-search-placeholder": "Buscar por profesión o hobby...",
    "hero-explore": "Explorar",
    "professions-available": "Profesiones Disponibles",
    "choose-profession": "Elige profesión y mira qué encaja",
    "selection-by-profession": "Selección por profesión, hecha a mano",
    "no-results": "No encontramos categorías que coincidan con tu búsqueda.",
    "ver-ideas": "Ver ideas",
    "por-que-regalo": "Por qué es un buen regalo",
    "ir-a-amazon": "Ir a Amazon",
    "precio-nota": "Nota:",
    "precio-text": "Los precios mostrados son el precio base de cada producto y no reflejan los descuentos activos. A su vez, este precio base no se verá afectado por los posibles cambios de precio por parte de Amazon. Las etiquetas de Top Ventas y Calidad/Precio hacen caso a los precios base, sin descuentos. Los precios de envío no se tienen en cuenta. Haz clic en los productos para ver el precio final en Amazon; los precios varían a menudo.",
    "ideas-regalo": "Ideas de Regalos Originales para",
    "top-ventas-valorados": "Top ventas y mejor valorados del momento. Selección hecha a mano para ahorrarte el trabajo.",
    "ver-mas-opciones": "¿Prefieres ver más opciones? Accede al catálogo completo en Amazon",
    "afiliados-text": "Participamos en el Programa de Afiliados de Amazon. Algunos enlaces nos generan una comisión sin coste adicional para ti.",
    "por-que-regalo-a": "¿Por qué hacer un regalo a un",
    "volver-categorias": "← Volver a todas las categorías",
    "footer-description": "Ideas de regalo por profesión, elegidas a mano. Sin algoritmos, con criterio real.",
    "legal": "Legal",
    "aviso-legal": "Aviso Legal",
    "politica-privacidad": "Política de Privacidad",
    "politica-cookies": "Política de Cookies",
    "categorias": "Categorías",
    "regalos-programadores": "Regalos Programadores",
    "regalos-gamers": "Regalos Gamers",
    "regalos-profesores": "Regalos Profesores",
    "copyright": "Todos los derechos reservados. Como Afiliado de Amazon, obtenemos ingresos por las compras adscritas.",
  },
  en: {
    "ver-en-amazon": "Check Price on Amazon",
    "top-ventas": "Best Seller",
    "mejor-valorado": "Top Rated",
    "calidad-precio": "Best Value",
    "oferta": "Deal",
    "hero-title": "Find the Perfect Gift for Any Profession",
    "hero-subtitle": "Curated lists of useful tools. No clichés, just what they actually need.",
    "hero-search-placeholder": "Search by profession or hobby...",
    "hero-explore": "Explore",
    "professions-available": "Professions Available",
    "choose-profession": "Choose a profession and see what fits",
    "selection-by-profession": "Hand-picked selection by profession",
    "no-results": "No categories match your search.",
    "ver-ideas": "View ideas",
    "por-que-regalo": "Why this is a great gift",
    "ir-a-amazon": "Go to Amazon",
    "precio-nota": "Note:",
    "precio-text": "Prices shown are base prices and do not reflect active discounts. Base prices are not affected by Amazon's price changes. Best Seller and Best Value badges are based on base prices, without discounts. Shipping costs are not included. Click products to see final price on Amazon; prices change frequently.",
    "ideas-regalo": "Original Gift Ideas for",
    "top-ventas-valorados": "Top sellers and highest rated right now. Hand-picked selection to save you the work.",
    "ver-mas-opciones": "Want more options? Browse the full catalog on Amazon",
    "afiliados-text": "We participate in Amazon's Affiliate Program. Some links generate a commission for us at no extra cost to you.",
    "por-que-regalo-a": "Why give a gift to a",
    "volver-categorias": "← Back to all categories",
    "footer-description": "Gift ideas by profession, hand-picked. No algorithms, real judgment.",
    "legal": "Legal",
    "aviso-legal": "Legal Notice",
    "politica-privacidad": "Privacy Policy",
    "politica-cookies": "Cookie Policy",
    "categorias": "Categories",
    "regalos-programadores": "Gifts for Programmers",
    "regalos-gamers": "Gifts for Gamers",
    "regalos-profesores": "Gifts for Teachers",
    "copyright": "All rights reserved. As an Amazon Affiliate, we earn from qualifying purchases.",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("es");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (stored === "es" || stored === "en") {
      setLanguageState(stored);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
