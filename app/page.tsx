import Link from "next/link";
import { Search, ArrowRight, Palette, Gamepad2, Heart, Code, GraduationCap } from "lucide-react";
import { NICHE_DATA } from "@/lib/data";

const NICHE_ICONS: Record<string, React.ElementType> = {
  arquitectos: Palette,
  gamers: Gamepad2,
  enfermeros: Heart,
  programadores: Code,
  profesores: GraduationCap,
};

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-100/50 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              ¿No sabes qué regalar?
            </h1>
            <p className="mt-6 text-lg text-gray-600 sm:text-xl">
              Descubre ideas de regalos originales y perfectos para cada profesión y hobby. Guías curadas para que aciertes siempre.
            </p>

            {/* Buscador visual (placeholder) */}
            <div className="mt-10 flex justify-center">
              <div className="flex w-full max-w-xl items-center gap-3 rounded-2xl border-2 border-gray-200 bg-white px-5 py-4 shadow-lg shadow-gray-200/50 transition-all hover:border-amber-300 hover:shadow-xl hover:shadow-amber-100/30 focus-within:border-amber-400 focus-within:ring-4 focus-within:ring-amber-100">
                <Search className="h-6 w-6 flex-shrink-0 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar por profesión o hobby..."
                  className="flex-1 bg-transparent text-gray-900 placeholder:text-gray-400 outline-none"
                  readOnly
                />
                <span className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-medium text-white">
                  Explorar
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Categorías */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Categorías populares
        </h2>
        <p className="mt-2 text-gray-600">
          Elige una categoría y descubre nuestras recomendaciones
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {NICHE_DATA.map((niche) => {
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
                  Regalos para {niche.title.replace("Los Mejores Regalos para ", "")}
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
          })}
        </div>
      </section>

      {/* CTA secundario */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Miles de ideas esperándote
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Cada guía está pensada para ayudarte a encontrar el regalo perfecto. Productos seleccionados, precios actualizados y enlaces directos.
          </p>
          <Link
            href="/regalos/programadores"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3 font-semibold text-white shadow-lg shadow-amber-200 transition-all hover:bg-amber-600 hover:shadow-xl hover:shadow-amber-300/50"
          >
            Empezar a explorar
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
