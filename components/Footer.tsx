import Link from "next/link";
import { Gift } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg text-gray-900">
              <Gift className="h-6 w-6 text-amber-500" />
              GiftGenius
            </Link>
            <p className="mt-4 text-sm text-gray-600 max-w-md">
              Ideas de regalo por profesión, elegidas a mano. Sin algoritmos, con criterio real.
            </p>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/legal/aviso-legal"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Aviso Legal
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/politica-privacidad"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/politica-privacidad#cookies"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Categorías rápidas */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Categorías</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/regalos/programadores"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Regalos Programadores
                </Link>
              </li>
              <li>
                <Link
                  href="/regalos/gamers"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Regalos Gamers
                </Link>
              </li>
              <li>
                <Link
                  href="/regalos/profesores"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Regalos Profesores
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-center text-xs text-gray-500">
            © {new Date().getFullYear()} GiftGenius. Todos los derechos reservados. Como Afiliado de Amazon, obtenemos ingresos por las compras adscritas.
          </p>
        </div>
      </div>
    </footer>
  );
}
