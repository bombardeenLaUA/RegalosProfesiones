"use client";

import { Info } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function PriceDisclaimer() {
  const { t } = useLanguage();
  return (
    <div className="border-b border-blue-200 bg-blue-50/80 px-4 py-3 dark:border-slate-700 dark:bg-slate-800/60">
      <div className="mx-auto flex max-w-7xl items-center gap-3 sm:px-6 lg:px-8">
        <Info className="h-5 w-5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
        <p className="text-sm text-gray-800 dark:text-gray-200">
          <span className="font-semibold">{t("precio-nota")}</span> {t("precio-text")}
        </p>
      </div>
    </div>
  );
}
