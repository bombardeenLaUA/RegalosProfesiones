import Link from "next/link";

export const metadata = {
  title: "Política de Privacidad | GiftGenius",
  description: "Política de privacidad y cookies de GiftGenius.",
};

export default function PoliticaPrivacidadPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Política de Privacidad</h1>
        <p className="mt-2 text-sm text-gray-500">Última actualización: {new Date().toLocaleDateString("es-ES")}</p>

        <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-900">1. Responsable del tratamiento</h2>
            <p>
              GiftGenius es el responsable del tratamiento de los datos personales que pueda recabar a través de este sitio web, en cumplimiento del Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica de Protección de Datos (LOPD).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">2. Datos que recogemos</h2>
            <p>
              Este sitio web puede recoger datos de navegación de forma automática (dirección IP, tipo de navegador, páginas visitadas) a través de cookies y tecnologías similares. No solicitamos datos personales identificativos para el uso básico del sitio.
            </p>
          </section>

          <section id="cookies">
            <h2 className="text-xl font-semibold text-gray-900">3. Política de Cookies</h2>
            <p>
              Utilizamos cookies propias y de terceros para mejorar tu experiencia, analizar el tráfico y mostrar publicidad relevante. Al usar enlaces de afiliados a Amazon u otros comercios, estos pueden establecer sus propias cookies al hacer clic.
            </p>
            <p>
              Puedes configurar tu navegador para rechazar cookies, aunque ello puede afectar a la funcionalidad del sitio. Las cookies de terceros (como las de Amazon) están sujetas a las políticas de privacidad de esos servicios.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">4. Finalidad y legitimación</h2>
            <p>
              Los datos se utilizan para el correcto funcionamiento del sitio, la mejora de los contenidos y, en su caso, la gestión del programa de afiliados. La base jurídica es el interés legítimo y, cuando aplique, tu consentimiento.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">5. Tus derechos</h2>
            <p>
              Tienes derecho a acceder, rectificar, suprimir, limitar y oponerte al tratamiento de tus datos. Para ejercer estos derechos o formular consultas, puedes contactarnos a través de los medios indicados en el Aviso Legal.
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
