import Link from "next/link";

export const metadata = {
  title: "Aviso Legal | GiftGenius",
  description: "Aviso legal y condiciones de uso del sitio GiftGenius.",
};

export default function AvisoLegalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Aviso Legal</h1>
        <p className="mt-2 text-sm text-gray-500">Última actualización: {new Date().toLocaleDateString("es-ES")}</p>

        <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-900">1. Identificación del titular</h2>
            <p>
              El presente sitio web es operado por GiftGenius. Este aviso legal regula el acceso y uso de los contenidos y servicios ofrecidos a través del mismo.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">2. Programa de Afiliados Amazon</h2>
            <p>
              GiftGenius participa en el Programa de Afiliados de Amazon EU, un programa de publicidad para afiliados diseñado para ofrecer a sitios web un modo de obtener comisiones por publicidad, mediante la inclusión de enlaces a Amazon.es y sitios afiliados.
            </p>
            <p>
              Como Afiliado de Amazon, obtenemos ingresos por las compras adscritas que cumplan los requisitos aplicables. Los precios y disponibilidad de los productos pueden variar. No somos responsables del contenido de los sitios enlazados.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">3. Propiedad intelectual</h2>
            <p>
              Todo el contenido de este sitio (textos, diseño, estructura y selección de productos) está protegido por derechos de propiedad intelectual. Queda prohibida la reproducción total o parcial sin autorización expresa.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">4. Limitación de responsabilidad</h2>
            <p>
              La información ofrecida tiene carácter orientativo. No nos responsabilizamos de los productos o servicios adquiridos a través de los enlaces de afiliados. Las transacciones se realizan directamente con los comercios enlazados.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">5. Contacto</h2>
            <p>
              Para cualquier duda o consulta relacionada con esta web, puedes contactarnos en:{" "}
              <a
                href="mailto:contactogiftgenius@gmail.com"
                className="text-amber-600 font-medium hover:text-amber-700 hover:underline"
              >
                contactogiftgenius@gmail.com
              </a>
            </p>
          </section>
        </div>

        <Link
          href="/"
          className="mt-12 inline-flex items-center text-amber-600 font-medium hover:text-amber-700"
        >
          ← Volver al inicio
        </Link>
      </div>
    </div>
  );
}
