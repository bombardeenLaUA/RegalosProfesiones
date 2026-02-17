"use client";

import Link from "next/link";
import { Gift } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-gray-200 bg-gray-50 mt-auto dark:border-slate-800 dark:bg-slate-900/80">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg text-gray-900 dark:text-gray-100">
              <Gift className="h-6 w-6 text-amber-500 dark:text-amber-400" />
              GiftGenius
            </Link>
            <p className="mt-4 text-sm text-gray-600 max-w-md dark:text-gray-300">
              {t("footer-description")}
            </p>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">{t("legal")}</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/legal/aviso-legal"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors dark:text-gray-300 dark:hover:text-gray-100"
                >
                  {t("aviso-legal")}
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/politica-privacidad"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors dark:text-gray-300 dark:hover:text-gray-100"
                >
                  {t("politica-privacidad")}
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/politica-privacidad#cookies"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors dark:text-gray-300 dark:hover:text-gray-100"
                >
                  {t("politica-cookies")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Categorías rápidas */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">{t("categorias")}</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/regalos/programadores"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors dark:text-gray-300 dark:hover:text-gray-100"
                >
                  {t("regalos-programadores")}
                </Link>
              </li>
              <li>
                <Link
                  href="/regalos/gamers"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors dark:text-gray-300 dark:hover:text-gray-100"
                >
                  {t("regalos-gamers")}
                </Link>
              </li>
              <li>
                <Link
                  href="/regalos/profesores"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors dark:text-gray-300 dark:hover:text-gray-100"
                >
                  {t("regalos-profesores")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 dark:border-slate-700">
          <p className="text-center text-xs text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} GiftGenius. {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
