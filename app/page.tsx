"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Search, ArrowRight, Palette, Gamepad2, Heart, Code, GraduationCap, ChefHat, BookOpen, Scale, Camera, Plane, Brain } from "lucide-react";
import { NICHE_DATA } from "@/lib/data";

const NICHE_ICONS: Record<string, React.ElementType> = {
  arquitectos: Palette,
  gamers: Gamepad2,
  enfermeros: Heart,
  programadores: Code,
  profesores: GraduationCap,
  cocineros: ChefHat,
  opositores: BookOpen,
  abogados: Scale,
  fotografos: Camera,
  viajeros: Plane,
  psicologos: Brain,
};

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const resultsRef = useRef<HTMLElement>(null);

  const filteredNiches = NICHE_DATA.filter(
    (niche) =>
      niche.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      niche.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const scrollToResults = () => {
    resultsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-100/50 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Encuentra el Regalo Perfecto por Profesión
            </h1>
            <p className="mt-6 text-lg text-gray-600 sm:text-xl">
              Hemos seleccionado lo que funciona para cada profesión. Ideas que aciertan, sin relleno.
            </p>

            {/* Buscador funcional */}
            <div className="mt-10 flex justify-center">
              <div className="flex w-full max-w-xl items-center gap-3 rounded-2xl border-2 border-gray-200 bg-white px-5 py-4 shadow-lg shadow-gray-200/50 transition-all hover:border-amber-300 hover:shadow-xl hover:shadow-amber-100/30 focus-within:border-amber-400 focus-within:ring-4 focus-within:ring-amber-100">
                <Search className="h-6 w-6 flex-shrink-0 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar por profesión o hobby..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 bg-transparent text-gray-900 placeholder:text-gray-400 outline-none"
                />
                <button
                  type="button"
                  onClick={scrollToResults}
                  className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-amber-600"
                >
                  Explorar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Categorías */}
      <section
        ref={resultsRef}
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="flex justify-center">
          <span
            className="inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-medium text-orange-700 animate-[fadeIn_0.5s_ease-out_both]"
          >
            11 Profesiones Disponibles
          </span>
        </div>
        <h2 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl">
          Elige profesión y mira qué encaja
        </h2>
        <p className="mt-2 text-gray-600">
          Selección por profesión, hecha a mano
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {filteredNiches.length === 0 ? (
            <p className="col-span-full text-center text-gray-500">
              No encontramos categorías que coincidan con tu búsqueda.
            </p>
          ) : (
            filteredNiches.map((niche) => {
              const IconComponent = NICHE_ICONS[niche.slug] || Palette;
              return (
                <Link
                  key={niche.slug}
                  href={`/regalos/${niche.slug}`}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-xl hover:shadow-amber-100/20"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-100 text-amber-600 transition-colors group-hover:bg-amber-500 group-hover:text-white">
                    <IconComponent className="h-7 w-7" />
                  </div>
                  <h3 className="mt-4 font-semibold text-gray-900 group-hover:text-amber-700">
                    {niche.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-gray-500">
                    {niche.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-amber-600 group-hover:gap-2">
                    Ver ideas
                    <ArrowRight className="h-4 w-4 transition-all" />
                  </span>
                </Link>
              );
            })
          )}
        </div>
      </section>
    </div>
  );
}
