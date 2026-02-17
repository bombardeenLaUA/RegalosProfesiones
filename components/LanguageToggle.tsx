"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => setLanguage("es")}
        className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
          language === "es"
            ? "bg-amber-500 text-white dark:bg-amber-500 dark:text-white"
            : "bg-gray-200 text-gray-600 hover:bg-gray-300 dark:bg-slate-700 dark:text-gray-300 dark:hover:bg-slate-600"
        }`}
        aria-label="Switch to Spanish"
      >
        ES
      </button>
      <span className="text-gray-400 dark:text-gray-500">|</span>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
          language === "en"
            ? "bg-amber-500 text-white dark:bg-amber-500 dark:text-white"
            : "bg-gray-200 text-gray-600 hover:bg-gray-300 dark:bg-slate-700 dark:text-gray-300 dark:hover:bg-slate-600"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
}
