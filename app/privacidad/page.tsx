import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Shield, Mail, Phone } from "lucide-react"

import Navbar from "@/app/components/navbar"

export const metadata = {
  title: "Política de Privacidad – FullFoto",
  description: "Política de Privacidad de la plataforma FullFoto. Cómo recopilamos, utilizamos y protegemos tu información.",
}

export default function PrivacidadPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white rounded-full px-4 py-1.5 text-sm font-medium mb-6 border border-white/20">
              <Shield className="h-4 w-4" />
              Legal
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight leading-[1.1]">
              Política de Privacidad
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Última actualización: 01/01/2026
            </p>
            <Link
              href="/"
              className="inline-flex items-center text-gray-400 hover:text-white transition-colors text-sm"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Volver al inicio
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-[2]"></div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-gray prose-lg">

            <p>
              En FullFoto valoramos la privacidad y la protección de los datos personales de nuestros usuarios, clientes y visitantes. Esta Política de Privacidad explica de forma clara cómo recopilamos, utilizamos y protegemos la información cuando se utiliza nuestra plataforma y nuestros servicios.
            </p>
            <p>
              Al acceder o utilizar FullFoto, aceptás las prácticas descriptas en esta Política.
            </p>

            <h2>1. Información que recopilamos</h2>
            <p>
              FullFoto puede recopilar distintos tipos de información, según el uso que se haga de la plataforma:
            </p>
            <ul>
              <li>Datos de identificación y contacto (nombre, correo electrónico, datos de la empresa).</li>
              <li>Información de facturación y pagos (procesada a través de terceros).</li>
              <li>Fotografías e imágenes cargadas por nuestros clientes.</li>
              <li>Información técnica básica (dirección IP, tipo de navegador, dispositivo).</li>
              <li>Datos de uso de la plataforma (acciones realizadas, estadísticas, logs).</li>
            </ul>
            <p>
              FullFoto <strong>no solicita datos personales innecesarios</strong> para la prestación del servicio.
            </p>

            <h2>2. Uso de imágenes y reconocimiento facial</h2>
            <p>
              Algunos servicios de FullFoto incluyen herramientas de <strong>organización y búsqueda de imágenes</strong>, que pueden utilizar tecnologías automatizadas (como reconocimiento facial o de patrones visuales) para facilitar la experiencia del usuario.
            </p>
            <ul>
              <li>Estas herramientas se utilizan <strong>únicamente con fines funcionales</strong> dentro de la plataforma.</li>
              <li>FullFoto <strong>no comercializa ni cede datos biométricos</strong> a terceros.</li>
              <li>El cliente que utiliza FullFoto es responsable de contar con los consentimientos necesarios de las personas fotografiadas, cuando así lo requiera la legislación aplicable.</li>
            </ul>

            <h2>3. Finalidad del tratamiento de los datos</h2>
            <p>La información recopilada se utiliza para:</p>
            <ul>
              <li>Prestar y mejorar nuestros servicios.</li>
              <li>Permitir la carga, gestión, venta y entrega de fotografías.</li>
              <li>Procesar pagos y generar reportes.</li>
              <li>Brindar soporte técnico y atención al cliente.</li>
              <li>Cumplir obligaciones legales o contractuales.</li>
            </ul>
            <p>
              FullFoto <strong>no utiliza los datos con fines distintos</strong> a los relacionados con la prestación del servicio.
            </p>

            <h2>4. Compartición de información con terceros</h2>
            <p>
              FullFoto puede compartir información <strong>solo cuando sea necesario</strong> para operar la plataforma, por ejemplo con:
            </p>
            <ul>
              <li>Proveedores de infraestructura tecnológica y hosting.</li>
              <li>Pasarelas de pago y servicios de facturación.</li>
              <li>Herramientas de análisis y seguridad.</li>
            </ul>
            <p>
              Estos terceros acceden a la información únicamente para cumplir su función y bajo obligaciones de confidencialidad.
            </p>

            <h2>5. Seguridad de la información</h2>
            <p>
              Adoptamos medidas técnicas y organizativas razonables para proteger la información contra accesos no autorizados, pérdida, uso indebido o divulgación.
            </p>
            <p>
              Si bien ningún sistema es completamente infalible, FullFoto trabaja activamente para mantener estándares adecuados de seguridad y disponibilidad.
            </p>

            <h2>6. Conservación de los datos</h2>
            <p>
              La información se conserva <strong>solo durante el tiempo necesario</strong> para cumplir con las finalidades del servicio o mientras exista una relación contractual vigente.
            </p>
            <p>
              Una vez finalizada la relación, los datos podrán ser eliminados de acuerdo con nuestras políticas internas y plazos operativos.
            </p>

            <h2>7. Derechos de los usuarios</h2>
            <p>Los usuarios pueden, según corresponda:</p>
            <ul>
              <li>Solicitar acceso a sus datos.</li>
              <li>Solicitar la corrección o actualización de información.</li>
              <li>Solicitar la eliminación de datos cuando sea legalmente procedente.</li>
            </ul>
            <p>
              Las solicitudes pueden realizarse escribiendo a: <a href="mailto:info@fullfoto.com">info@fullfoto.com</a>.
            </p>

            <h2>8. Legislación aplicable</h2>
            <p>
              Esta Política se rige por las leyes de la República Argentina y normas aplicables en materia de protección de datos personales. En casos de usuarios o clientes de otros países, podrán aplicarse regulaciones adicionales según corresponda.
            </p>

            <h2>9. Cambios en esta Política</h2>
            <p>
              FullFoto podrá actualizar esta Política de Privacidad cuando sea necesario. Las modificaciones serán publicadas en nuestro sitio web y entrarán en vigencia desde su publicación.
            </p>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-gray-400">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link href="/">
                <Image src="/logo-nuevo-blanco.png" alt="FullFoto" width={120} height={40} className="h-12 w-auto" />
              </Link>
            </div>
            <div className="flex gap-8">
              <Link href="/terminos" className="hover:text-white transition-colors text-sm">
                Términos
              </Link>
              <Link href="/privacidad" className="hover:text-white transition-colors text-sm">
                Privacidad
              </Link>
              <Link href="/#contacto" className="hover:text-white transition-colors text-sm">
                Contacto
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4">
              <a href="mailto:info@fullfoto.com" className="flex items-center gap-2 hover:text-white transition-colors text-sm">
                <Mail className="h-4 w-4" />
                info@fullfoto.com
              </a>
              <a href="tel:+5493888538161" className="flex items-center gap-2 hover:text-white transition-colors text-sm">
                <Phone className="h-4 w-4" />
                +54 9 3888 538161
              </a>
            </div>
            <p className="text-sm">&copy; {new Date().getFullYear()} FullFoto. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
