"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

/** Nube SVG (visible en modo día) */
function CloudIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 56 18"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M54.2 10.4a5.6 5.6 0 0 0-4.2-1.8 6.1 6.1 0 0 0-1.2-.1 6 6 0 0 0-5.8-4.4 6 6 0 0 0-5.8 4.4 5.6 5.6 0 0 0-4.2 1.8 5.6 5.6 0 0 0-1.8 4.1 5.6 5.6 0 0 0 1.8 4.1 5.6 5.6 0 0 0 4.2 1.8h22.4a5.6 5.6 0 0 0 4.2-1.8 5.6 5.6 0 0 0 1.8-4.1 5.6 5.6 0 0 0-1.8-4.1zm-30-4.5a4.5 4.5 0 0 0-3.4 1.5 4.5 4.5 0 0 0-1.4 3.3 4.5 4.5 0 0 0 1.4 3.3 4.5 4.5 0 0 0 3.4 1.5h28a4.5 4.5 0 0 0 3.4-1.5 4.5 4.5 0 0 0 1.4-3.3 4.5 4.5 0 0 0-1.4-3.3 4.5 4.5 0 0 0-3.4-1.5H24.2z" />
    </svg>
  );
}

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";
  const toggle = () => setTheme(isDark ? "light" : "dark");

  if (!mounted) {
    return (
      <div className="flex items-center gap-2" aria-hidden>
        <span className="min-w-[5.5rem] text-sm text-transparent" aria-hidden>
          Modo Claro
        </span>
        <div className="h-8 w-14 shrink-0 rounded-[30px] bg-zinc-800" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-600 dark:text-gray-400">
        {isDark ? "Modo Oscuro" : "Modo Claro"}
      </span>
      <button
      type="button"
      onClick={toggle}
      className="switch text-[17px] relative inline-block h-8 w-14 rounded-[30px] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 dark:focus-visible:ring-offset-white"
      aria-label={isDark ? "Activar modo claro" : "Activar modo oscuro"}
    >
      <span
        className={`slider absolute inset-0 cursor-pointer overflow-hidden rounded-[30px] transition-colors duration-400 ${
          isDark ? "bg-slate-900" : "bg-amber-500"
        }`}
      >
        {/* Sol / Luna (círculo) */}
        <span
          className={`absolute left-[0.3em] bottom-[0.3em] h-[1.4em] w-[1.4em] rounded-full transition-all duration-400 ease-[cubic-bezier(0.81,-0.04,0.38,1.5)] ${
            isDark
              ? "translate-x-0 bg-transparent shadow-[inset_8px_-4px_0_0_#fff]"
              : "translate-x-[1.5em] bg-[#ffcf48] shadow-none"
          }`}
          style={{ fontSize: "1em" }}
        />
        {/* Estrellas (solo en modo noche) - 4px como en el diseño */}
        <span
          className={`absolute rounded-full bg-white transition-opacity duration-400 ${
            isDark ? "opacity-100" : "opacity-0"
          }`}
          style={{ width: 4, height: 4, left: "2.5em", top: "0.5em" }}
        />
        <span
          className={`absolute rounded-full bg-white transition-opacity duration-400 ${
            isDark ? "opacity-100" : "opacity-0"
          }`}
          style={{ width: 4, height: 4, left: "2.2em", top: "1.2em" }}
        />
        <span
          className={`absolute rounded-full bg-white transition-opacity duration-400 ${
            isDark ? "opacity-100" : "opacity-0"
          }`}
          style={{ width: 4, height: 4, left: "3em", top: "0.9em" }}
        />
        {/* Nubes (solo en modo día) */}
        <span
          className={`absolute bottom-[-1.6em] left-[-1.1em] w-[3.5em] fill-white text-white transition-opacity duration-400 ${
            isDark ? "opacity-0" : "opacity-100"
          }`}
          style={{ fontSize: "1em" }}
        >
          <CloudIcon className="h-auto w-full" />
        </span>
      </span>
    </button>
    </div>
  );
}
