import Link from "next/link";
import { Gift } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-xl text-gray-900 hover:text-amber-600 transition-colors"
        >
          <Gift className="h-8 w-8 text-amber-500" />
          GiftGenius
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Inicio
          </Link>
          <Link
            href="/regalos/arquitectos"
            className="hidden sm:inline text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Categorías
          </Link>
        </nav>
      </div>
    </header>
  );
}
