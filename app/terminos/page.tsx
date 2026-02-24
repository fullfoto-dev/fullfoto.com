import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, FileText, Mail, Phone } from "lucide-react"

import Navbar from "@/app/components/navbar"

export const metadata = {
  title: "Términos y Condiciones – FullFoto",
  description: "Términos y Condiciones de Uso de la plataforma FullFoto.",
}

export default function TerminosPage() {
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
              <FileText className="h-4 w-4" />
              Legal
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight leading-[1.1]">
              Términos y Condiciones
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
              Los presentes Términos y Condiciones regulan el acceso y uso de la plataforma FullFoto y de los servicios ofrecidos a través de ella. Al utilizar FullFoto, el usuario acepta expresamente estos Términos.
            </p>

            <h2>1. Sobre FullFoto</h2>
            <p>
              FullFoto es una plataforma tecnológica que permite la <strong>gestión, comercialización y entrega digital de fotografías</strong>, actuando como proveedor de servicios digitales (SaaS).
            </p>
            <p>
              FullFoto <strong>no es una empresa de fotografía</strong>, ni participa en la producción del contenido visual cargado por los usuarios.
            </p>

            <h2>2. Usuarios y cuentas</h2>
            <p>
              Pueden utilizar FullFoto personas físicas o jurídicas que creen una cuenta o accedan a la plataforma de forma autorizada.
            </p>
            <p>El usuario es responsable de:</p>
            <ul>
              <li>Mantener la confidencialidad de sus credenciales.</li>
              <li>Toda actividad realizada desde su cuenta.</li>
              <li>Proporcionar información veraz y actualizada.</li>
            </ul>
            <p>
              FullFoto podrá suspender o cancelar cuentas que incumplan estos Términos.
            </p>

            <h2>3. Uso de la plataforma</h2>
            <p>
              El usuario se compromete a utilizar FullFoto de forma legal y conforme a su finalidad. Queda prohibido:
            </p>
            <ul>
              <li>Utilizar la plataforma para actividades ilícitas.</li>
              <li>Cargar contenido que infrinja derechos de terceros.</li>
              <li>Intentar acceder sin autorización a sistemas o datos.</li>
              <li>Alterar o interferir con el funcionamiento de la plataforma.</li>
            </ul>

            <h2>4. Contenido e imágenes</h2>
            <p>
              Todo el contenido cargado en FullFoto es responsabilidad exclusiva del usuario que lo sube. El usuario declara y garantiza que:
            </p>
            <ul>
              <li>Es titular de los derechos sobre las imágenes, o cuenta con autorización suficiente.</li>
              <li>Ha obtenido los consentimientos necesarios de las personas fotografiadas, cuando corresponda.</li>
              <li>El contenido no vulnera derechos de imagen, privacidad ni propiedad intelectual.</li>
            </ul>
            <p>
              FullFoto <strong>no revisa ni valida previamente</strong> el contenido cargado.
            </p>

            <h2>5. Venta de fotografías y pagos</h2>
            <p>Cuando se utilicen funcionalidades de venta:</p>
            <ul>
              <li>Los pagos son procesados por pasarelas externas.</li>
              <li>FullFoto no almacena datos completos de tarjetas de crédito.</li>
              <li>Las comisiones y condiciones comerciales se rigen por el plan contratado.</li>
            </ul>
            <p>
              FullFoto no es responsable por rechazos, demoras o fallas atribuibles a terceros proveedores de pago.
            </p>

            <h2>6. Disponibilidad del servicio</h2>
            <p>
              FullFoto realiza esfuerzos razonables para mantener la plataforma operativa y segura. Sin embargo:
            </p>
            <ul>
              <li>No garantiza disponibilidad ininterrumpida.</li>
              <li>Podrán realizarse tareas de mantenimiento.</li>
              <li>Pueden existir interrupciones por causas técnicas o de fuerza mayor.</li>
            </ul>

            <h2>7. Propiedad intelectual</h2>
            <p>
              La plataforma FullFoto, su software, diseño y marcas son propiedad de FullFoto.
            </p>
            <p>
              El uso de la plataforma <strong>no otorga derechos</strong> sobre su propiedad intelectual, más allá del uso autorizado del servicio.
            </p>

            <h2>8. Uso referencial y promocional</h2>
            <p>
              El usuario autoriza a FullFoto a mencionar su nombre comercial, marca, logotipo y a utilizar capturas generales de la plataforma con fines <strong>exclusivamente institucionales, comerciales o promocionales</strong>, tales como presentaciones, sitio web, redes sociales o materiales comerciales.
            </p>
            <p>
              Dicha autorización se limita a usos <strong>referenciales</strong>, y en ningún caso habilita a FullFoto a utilizar imágenes de personas identificables, fotografías sensibles o contenido privado del usuario sin autorización expresa.
            </p>
            <p>
              El usuario podrá solicitar por escrito que su marca o nombre comercial no sea utilizado con fines promocionales, sin que ello afecte la prestación del servicio.
            </p>

            <h2>9. Limitación de responsabilidad</h2>
            <p>FullFoto no será responsable por:</p>
            <ul>
              <li>Daños indirectos o pérdidas económicas.</li>
              <li>Uso indebido de la plataforma por parte del usuario.</li>
              <li>Contenido cargado por terceros.</li>
              <li>Hechos fuera de su control razonable.</li>
            </ul>
            <p>
              La responsabilidad total de FullFoto, de existir, se limitará al monto efectivamente abonado por el usuario en el período inmediato anterior.
            </p>

            <h2>10. Suspensión y terminación</h2>
            <p>
              FullFoto podrá suspender o dar de baja el acceso a la plataforma en caso de:
            </p>
            <ul>
              <li>Incumplimiento de estos Términos.</li>
              <li>Uso indebido o fraudulento.</li>
              <li>Requerimientos legales o judiciales.</li>
            </ul>
            <p>
              El usuario podrá dejar de utilizar la plataforma conforme a las condiciones de su plan.
            </p>

            <h2>11. Modificaciones</h2>
            <p>
              FullFoto podrá modificar estos Términos cuando sea necesario. Las versiones actualizadas serán publicadas en el sitio web y entrarán en vigencia desde su publicación.
            </p>

            <h2>12. Legislación aplicable y jurisdicción</h2>
            <p>
              Estos Términos se rigen por las leyes de la República Argentina. Cualquier controversia será sometida a los tribunales ordinarios de la ciudad de Rosario, Santa Fe.
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
