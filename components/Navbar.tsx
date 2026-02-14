import Link from "next/link";
import { Gift } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm dark:border-slate-800 dark:bg-slate-900/95 dark:supports-[backdrop-filter]:bg-slate-900/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-xl text-gray-900 hover:text-amber-600 transition-colors dark:text-gray-100 dark:hover:text-amber-400"
        >
          <Gift className="h-8 w-8 text-amber-500 dark:text-amber-400" />
          GiftGenius
        </Link>
      </div>
    </header>
  );
}
