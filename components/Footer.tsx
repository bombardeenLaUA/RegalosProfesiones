import Link from "next/link";
import { Gift } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 mt-auto dark:border-slate-800 dark:bg-slate-900/80">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 font-bold text-lg text-gray-900 dark:text-gray-100">
              <Gift className="h-6 w-6 text-amber-500 dark:text-amber-400" />
              GiftGenius
            </Link>
            <p className="mt-4 text-sm text-gray-600 max-w-md dark:text-gray-300">
              Ideas de regalo por profesión, elegidas a mano. Sin algoritmos, con criterio real.
            </p>
          </div>

          {/* Legal Links */}
          <div className="md:text-right md:flex md:flex-col md:items-end">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Legal</h3>
            <ul className="mt-4 space-y-3 md:items-end md:flex md:flex-col">
              <li>
                <Link
                  href="/legal/aviso-legal"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors dark:text-gray-300 dark:hover:text-gray-100"
                >
                  Aviso Legal
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/politica-privacidad"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors dark:text-gray-300 dark:hover:text-gray-100"
                >
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/politica-privacidad#cookies"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors dark:text-gray-300 dark:hover:text-gray-100"
                >
                  Política de Cookies
                </Link>
              </li>
              <li>
                <a
                  href="mailto:hola@giftgenius.es"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors dark:text-gray-300 dark:hover:text-gray-100"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 dark:border-slate-700">
          <p className="text-center text-xs text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} GiftGenius. Todos los derechos reservados. Como Afiliado de Amazon, obtenemos ingresos por las compras adscritas.
          </p>
        </div>
      </div>
    </footer>
  );
}
