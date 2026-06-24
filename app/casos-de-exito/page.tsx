import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ChevronRight,
  Mail,
  Phone,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Building2,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/app/components/navbar"
import { BreadcrumbJsonLd } from "@/app/components/json-ld"

export const metadata: Metadata = {
  title: "Casos de éxito: empresas que venden fotos con FullFoto",
  description:
    "Historias reales de empresas y operadores audiovisuales que potenciaron su venta de fotos con FullFoto. Infinito Water Park, Lago Hermoso y más casos en Argentina y Latinoamérica.",
  alternates: { canonical: "/casos-de-exito" },
}

const cases = [
  {
    slug: "infinito-water-park",
    client: "Infinito Water Park",
    operator: "Foton",
    sector: "Parque acuático",
    location: "Córdoba, Argentina",
    year: "2026",
    headline:
      "Venta automatizada en el parque acuático más grande de Argentina",
    summary:
      "Foton operó la concesión audiovisual de Infinito Water Park (US$40M de inversión, 12.500 visitantes simultáneos) usando la plataforma de FullFoto, servidores LAN propietarios e impresión automática.",
    metric: "+10 fotógrafos",
    metricLabel: "operando en simultáneo",
    image: "/cases/infinito/1.webp",
  },
  {
    slug: "lago-hermoso",
    client: "Lago Hermoso",
    operator: "B-Side",
    sector: "Centro de ski",
    location: "Neuquén, Argentina",
    year: "2025",
    headline: "+100% en ventas vs temporada anterior",
    summary:
      "B-Side, partner audiovisual de Lago Hermoso, duplicó las ventas de fotos en la temporada 2025 con la plataforma, equipamiento y diseño de local de FullFoto.",
    metric: "+100%",
    metricLabel: "en ventas vs 2024",
    image: "/cases/lago-hermoso/1.webp",
  },
]

export default function CasosDeExitoPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", url: "/" },
          { name: "Casos de éxito", url: "/casos-de-exito" },
        ]}
      />

      <Navbar />

      {/* HERO */}
      <section className="relative pt-36 pb-20 bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"></div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white rounded-full px-4 py-1.5 text-sm font-medium mb-6 border border-white/20">
              <Sparkles className="h-4 w-4" />
              Casos de éxito
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight leading-[1.1]">
              Empresas que escalaron su venta de fotos con{" "}
              <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                FullFoto
              </span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto leading-relaxed">
              Parques acuáticos, centros de esquí y operadores audiovisuales que automatizaron sus ventas y multiplicaron sus ingresos.
            </p>
          </div>
        </div>
      </section>

      {/* CASES GRID */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {cases.map((c) => (
              <Link
                key={c.slug}
                href={`/casos-de-exito/${c.slug}`}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl hover:shadow-blue-100/50 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={c.image}
                    alt={`${c.client} — caso de éxito FullFoto`}
                    fill
                    className={`object-cover group-hover:scale-105 transition-transform duration-500 ${
                      c.slug === "lago-hermoso" ? "object-top" : ""
                    }`}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 flex-wrap">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-900 rounded-full px-3 py-1 text-xs font-medium">
                      {c.sector}
                    </span>
                    <span className="bg-white/90 backdrop-blur-sm text-gray-900 rounded-full px-3 py-1 text-xs font-medium">
                      {c.location}
                    </span>
                    <span className="bg-white/90 backdrop-blur-sm text-gray-900 rounded-full px-3 py-1 text-xs font-medium">
                      Temporada {c.year}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Building2 className="h-4 w-4" />
                    <span>
                      Cliente: <strong className="text-gray-900">{c.client}</strong>
                    </span>
                    <span className="text-gray-300">|</span>
                    <span>
                      Operador: <strong className="text-gray-900">{c.operator}</strong>
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {c.headline}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{c.summary}</p>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-50 rounded-xl p-2">
                        <TrendingUp className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-blue-600">{c.metric}</div>
                        <div className="text-xs text-gray-500">{c.metricLabel}</div>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 text-blue-600 font-medium text-sm group-hover:gap-2 transition-all">
                      Leer caso
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
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
                ¿Querés sumar tu empresa a estos casos?
              </h2>
              <p className="text-lg text-blue-200 mb-10 leading-relaxed">
                Agendá una demo y te mostramos cómo FullFoto puede operar la venta de fotos en tu parque, centro de ski o evento.
              </p>
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-blue-50 px-10 py-7 text-base rounded-xl shadow-xl shadow-black/10 transition-all hover:-translate-y-0.5"
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
