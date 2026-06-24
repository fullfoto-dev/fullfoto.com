import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ChevronRight,
  ChevronLeft,
  Mail,
  Phone,
  Sparkles,
  Users,
  Server,
  Printer,
  ExternalLink,
  Quote,
  MapPin,
  Calendar,
  Building2,
  CheckCircle2,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/app/components/navbar"
import { BreadcrumbJsonLd, CaseStudyJsonLd } from "@/app/components/json-ld"

const CASE = {
  title: "Caso Infinito Water Park: venta automatizada en el parque acuático más grande de Argentina",
  description:
    "Foton, operador audiovisual de Infinito Water Park (US$40M, 12.500 visitantes simultáneos), automatizó la venta de fotos con la plataforma, servidores LAN y módulos de impresión automática de FullFoto.",
  url: "/casos-de-exito/infinito-water-park",
  image: "/cases/infinito/1.webp",
  datePublished: "2026-01-15",
  clientName: "Foton (operador audiovisual de Infinito Water Park)",
  clientUrl: "https://foton.fullfoto.com/",
}

export const metadata: Metadata = {
  title: "Caso Infinito Water Park: venta automatizada con FullFoto",
  description: CASE.description,
  alternates: { canonical: CASE.url },
}

export default function InfinitoWaterParkCase() {
  return (
    <main className="flex min-h-screen flex-col">
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", url: "/" },
          { name: "Casos de éxito", url: "/casos-de-exito" },
          { name: "Infinito Water Park", url: CASE.url },
        ]}
      />
      <CaseStudyJsonLd {...CASE} />

      <Navbar />

      {/* HERO */}
      <section className="relative pt-32 pb-12 bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/casos-de-exito"
              className="inline-flex items-center text-blue-200/80 hover:text-white transition-colors text-sm mb-8"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Volver a casos de éxito
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white rounded-full px-3 py-1 text-xs font-medium border border-white/20">
                <Building2 className="h-3 w-3" />
                Parque acuático
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white rounded-full px-3 py-1 text-xs font-medium border border-white/20">
                <MapPin className="h-3 w-3" />
                Córdoba, Argentina
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white rounded-full px-3 py-1 text-xs font-medium border border-white/20">
                <Calendar className="h-3 w-3" />
                Temporada 2026
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-[1.15]">
              Infinito Water Park: cómo FullFoto operó la venta de fotos del{" "}
              <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                parque acuático más grande de Argentina
              </span>
            </h1>

            <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed max-w-3xl">
              Infinito Water Park, una inversión de USD 40 millones con capacidad para 12.500 visitantes simultáneos, abrió sus puertas en enero de 2026. Foton, la empresa audiovisual concesionaria, eligió FullFoto para automatizar toda la operación de venta de fotos.
            </p>
          </div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="bg-gradient-to-b from-blue-950 to-gray-50 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl shadow-blue-950/30">
              <Image
                src="/cases/infinito/1.webp"
                alt="Toboganes de Infinito Water Park, parque acuático más grande de Argentina"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTEXTO */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              El contexto
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">El parque</h2>
            <div className="space-y-5 text-gray-600 text-base md:text-lg leading-relaxed">
              <p>
                <strong className="text-gray-900">Infinito Water Park</strong> es el parque acuático más grande de Argentina, ubicado en Córdoba sobre la Avenida Circunvalación. Forma parte del proyecto Infinito Open, un desarrollo integral de 36 hectáreas que apunta a consolidar un nuevo polo turístico y de entretenimiento.
              </p>
              <p>
                Con una inversión total de <strong className="text-gray-900">USD 40 millones</strong>, el parque cuenta con más de 50 atracciones, 30 toboganes y una piscina de olas artificiales con capacidad para 3,5 millones de litros que genera olas de hasta 1,8 metros. La capacidad operativa permite recibir hasta <strong className="text-gray-900">12.500 visitantes en simultáneo</strong>, con proyecciones de 450.000 personas para la temporada de verano.
              </p>
              <p>
                <Link href="https://foton.fullfoto.com/" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium inline-flex items-center gap-1">
                  Foton <ExternalLink className="h-3.5 w-3.5" />
                </Link>{" "}
                ganó la concesión audiovisual del parque y debía resolver un desafío operativo grande desde el día uno: cubrir un parque enorme con múltiples atracciones simultáneas, vender las fotos sin generar colas y gestionar un equipo de fotógrafos coordinado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUCIÓN */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
                <Sparkles className="h-4 w-4" />
                La solución
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Plataforma + hardware + impresión automática
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                FullFoto entregó una solución integral pensada para la operación física de un parque acuático de gran escala.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 w-fit mb-6 shadow-lg shadow-blue-200/50">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Gestión de +10 fotógrafos</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Dashboard centralizado para coordinar el equipo, asignar atracciones, ver carga de fotos en tiempo real y exportar métricas individuales por fotógrafo.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300">
                <div className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl p-4 w-fit mb-6 shadow-lg shadow-violet-200/50">
                  <Server className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Servidores LAN propietarios</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Hardware específico de FullFoto que permite cargar y procesar fotos al instante sin depender de la conexión a internet, crítico en una operación de alto volumen donde la latencia mata la venta.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-4 w-fit mb-6 shadow-lg shadow-emerald-200/50">
                  <Printer className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Impresión automática</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Módulo de tecnología propietaria que dispara la impresión de fotografías físicas al instante de la compra, sin intervención manual del personal.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-white rounded-2xl p-8 border border-gray-100">
              <h3 className="text-lg font-semibold mb-5 text-gray-900">Qué incluyó la implementación</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  "Plataforma de venta con dominio propio (foton.fullfoto.com)",
                  "Reconocimiento facial para que los visitantes encuentren sus fotos al instante",
                  "Pagos online con MercadoPago y métodos locales",
                  "Servidores LAN para carga sin internet",
                  "Módulo de impresión automática en local",
                  "Dashboard grupal con métricas por fotógrafo y por atracción",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/cases/infinito/2.webp"
                  alt="Operación FullFoto en Infinito Water Park"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/cases/infinito/3.webp"
                  alt="Foton operando la venta de fotos en Infinito Water Park"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"></div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Quote className="h-12 w-12 text-blue-300/50 mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8">
              &ldquo;Hace varios años que utilizamos FullFoto en todos los proyectos que desarrollamos. Además de tener un gran impacto en las ventas, nos permite tener control total sobre cada métrica del negocio.&rdquo;
            </blockquote>
            <div className="text-blue-200">
              <p className="font-semibold">Martín</p>
              <p className="text-sm text-blue-300/80">Socio de Foton</p>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE STORE */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 border border-gray-100 text-center">
            <h3 className="text-xl font-bold mb-3 text-gray-900">Conocé el store en vivo</h3>
            <p className="text-gray-500 text-sm mb-6">
              Visitá la web de venta de Foton en Infinito Water Park, construida sobre FullFoto.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-200 text-blue-700 hover:bg-blue-50"
              asChild
            >
              <a href="https://foton.fullfoto.com/" target="_blank" rel="noopener">
                foton.fullfoto.com
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden max-w-5xl mx-auto">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                ¿Operás un parque acuático o atracción similar?
              </h2>
              <p className="text-lg text-blue-200 mb-10 leading-relaxed">
                Te mostramos cómo FullFoto puede operar la venta de fotos en tu parque, con hardware propio y soporte de implementación.
              </p>
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-blue-50 px-10 py-7 text-base rounded-xl shadow-xl shadow-black/10"
                asChild
              >
                <Link href="/agendar-demo">
                  Agendar demo
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-gray-900 text-gray-400">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link href="/">
                <Image src="/logo-nuevo-blanco.png" alt="FullFoto" width={120} height={40} className="h-12 w-auto" />
              </Link>
            </div>
            <div className="flex gap-8">
              <Link href="/casos-de-exito" className="hover:text-white transition-colors text-sm">Casos</Link>
              <Link href="/terminos" className="hover:text-white transition-colors text-sm">Términos</Link>
              <Link href="/privacidad" className="hover:text-white transition-colors text-sm">Privacidad</Link>
              <Link href="/#contacto" className="hover:text-white transition-colors text-sm">Contacto</Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4">
              <a href="mailto:info@fullfoto.com" className="flex items-center gap-2 hover:text-white transition-colors text-sm">
                <Mail className="h-4 w-4" />
                info@fullfoto.com
              </a>
              <a href="tel:+5491178279790" className="flex items-center gap-2 hover:text-white transition-colors text-sm">
                <Phone className="h-4 w-4" />
                +54 9 11 7827-9790
              </a>
            </div>
            <p className="text-sm">© {new Date().getFullYear()} FullFoto. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
