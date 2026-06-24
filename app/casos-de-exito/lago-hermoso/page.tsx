import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ChevronRight,
  ChevronLeft,
  Mail,
  Phone,
  Sparkles,
  TrendingUp,
  Server,
  Hammer,
  ExternalLink,
  Quote,
  MapPin,
  Calendar,
  Building2,
  CheckCircle2,
  Mountain,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/app/components/navbar"
import { BreadcrumbJsonLd, CaseStudyJsonLd } from "@/app/components/json-ld"

const CASE = {
  title: "Caso Lago Hermoso 2025: +100% en ventas de fotos con FullFoto",
  description:
    "B-Side, partner audiovisual de Lago Hermoso, duplicó las ventas de fotos en la temporada 2025 de ski con la plataforma, hardware y diseño de local de FullFoto.",
  url: "/casos-de-exito/lago-hermoso",
  image: "/cases/lago-hermoso/1.webp",
  datePublished: "2025-09-30",
  clientName: "B-Side (operador audiovisual de Lago Hermoso)",
  clientUrl: "https://lagohermoso.fullfoto.com/",
}

export const metadata: Metadata = {
  title: "Caso Lago Hermoso 2025: +100% ventas con FullFoto",
  description: CASE.description,
  alternates: { canonical: CASE.url },
}

export default function LagoHermosoCase() {
  return (
    <main className="flex min-h-screen flex-col">
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", url: "/" },
          { name: "Casos de éxito", url: "/casos-de-exito" },
          { name: "Lago Hermoso", url: CASE.url },
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
                <Mountain className="h-3 w-3" />
                Centro de ski boutique
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white rounded-full px-3 py-1 text-xs font-medium border border-white/20">
                <MapPin className="h-3 w-3" />
                Neuquén, Argentina
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white rounded-full px-3 py-1 text-xs font-medium border border-white/20">
                <Calendar className="h-3 w-3" />
                Temporada 2025
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-[1.15]">
              Lago Hermoso 2025:{" "}
              <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                +100% en ventas de fotos
              </span>{" "}
              con FullFoto
            </h1>

            <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed max-w-3xl">
              FullFoto acompañó al centro de ski boutique Lago Hermoso y a su partner audiovisual B-Side no solo con la plataforma, sino también con el equipamiento y el diseño del local de venta. El resultado: 100% más ventas que la temporada anterior.
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
                src="/cases/lago-hermoso/1.webp"
                alt="Entrada al centro de ski Lago Hermoso en Neuquén con arco de astas nevado"
                fill
                className="object-cover object-top"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">El centro</h2>
            <div className="space-y-5 text-gray-600 text-base md:text-lg leading-relaxed">
              <p>
                <strong className="text-gray-900">Lago Hermoso</strong> es un centro de ski boutique ubicado en la provincia de Neuquén, parte de la Patagonia argentina. A diferencia de los centros masivos, su propuesta es de menor escala con foco en experiencia premium, lo que vuelve crítico que cada visitante se lleve sus fotos como recuerdo del paso por el lugar.
              </p>
              <p>
                <strong className="text-gray-900">B-Side</strong> es el operador audiovisual que ganó la concesión de venta de fotos para la temporada 2025. Es un partner con experiencia en operaciones de fotografía deportiva y turística que ya trabaja en Cerro Catedral, La Hoya y Chapelco.
              </p>
              <p>
                El desafío para 2025 era claro: superar significativamente las ventas de la temporada anterior, montando una operación de cero en un local nuevo, con un equipo de fotógrafos que tenía que estar produciendo desde el primer día de la temporada.
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
                Plataforma + equipamiento + diseño del local
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                FullFoto no entregó solo el software: armó la operación de venta de punta a punta junto con B-Side.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 w-fit mb-6 shadow-lg shadow-blue-200/50">
                  <Server className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Plataforma + servidores LAN</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Web de venta con dominio propio (lagohermoso.fullfoto.com) y servidores locales para carga de fotos sin depender de la conexión a internet, crítica en zonas de montaña.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300">
                <div className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl p-4 w-fit mb-6 shadow-lg shadow-violet-200/50">
                  <Hammer className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Equipamiento del local</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  FullFoto proveyó el hardware completo del punto de venta: pantallas, monitores, equipos de procesamiento e impresión integrados a la plataforma.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-4 w-fit mb-6 shadow-lg shadow-emerald-200/50">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Diseño del local</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Diseño del espacio físico de venta optimizado para el flujo de visitantes del centro, con foco en convertir el paso por el local en venta cerrada.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-white rounded-2xl p-8 border border-gray-100">
              <h3 className="text-lg font-semibold mb-5 text-gray-900">Qué incluyó la implementación</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  "Plataforma de venta con branding propio (lagohermoso.fullfoto.com)",
                  "Servidores LAN para carga de fotos sin internet",
                  "Hardware completo del punto de venta",
                  "Diseño del local de venta",
                  "Reconocimiento facial para que los esquiadores encuentren sus fotos",
                  "Pagos online y dashboard de métricas en tiempo real",
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
                  src="/cases/lago-hermoso/2.webp"
                  alt="Local de venta diseñado por FullFoto en Lago Hermoso"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/cases/lago-hermoso/3.webp"
                  alt="Centro de ski Lago Hermoso temporada 2025"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/cases/lago-hermoso/4.webp"
                  alt="Equipamiento FullFoto en local de Lago Hermoso"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/cases/lago-hermoso/5.webp"
                  alt="Centro de ski boutique Lago Hermoso en Neuquén"
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
              &ldquo;El equipo de FullFoto más que nuestro proveedor es nuestro partner tecnológico. Nos acompañan hace años en todos nuestros proyectos: Cerro Catedral, La Hoya, Lago Hermoso y ahora también Chapelco.&rdquo;
            </blockquote>
            <div className="text-blue-200">
              <p className="font-semibold">Diego Ferreyra</p>
              <p className="text-sm text-blue-300/80">Socio de B-Side</p>
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
              Visitá la web de venta de B-Side en Lago Hermoso, construida sobre FullFoto.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-200 text-blue-700 hover:bg-blue-50"
              asChild
            >
              <a href="https://lagohermoso.fullfoto.com/" target="_blank" rel="noopener">
                lagohermoso.fullfoto.com
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
                ¿Operás un centro de ski o atracción de montaña?
              </h2>
              <p className="text-lg text-blue-200 mb-10 leading-relaxed">
                Te mostramos cómo FullFoto puede armar la operación de venta de fotos en tu centro, con plataforma, hardware y diseño del local.
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
