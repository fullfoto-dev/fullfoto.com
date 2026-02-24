import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Check, CheckCircle2, ChevronRight, Mail, Phone, Minus, Sparkles, HelpCircle } from "lucide-react"
import PricingHeroBackground from "@/app/components/pricing-hero-background"

import { Button } from "@/components/ui/button"
import Navbar from "@/app/components/navbar"
import { FAQPageJsonLd, BreadcrumbJsonLd, SoftwareApplicationJsonLd } from "@/app/components/json-ld"

export const metadata: Metadata = {
  title: "Precios y Planes",
  description:
    "Planes desde $0/mes con solo 7% de comisión. Free, Pro y Enterprise para fotógrafos y empresas. Sin costos ocultos, la comisión más baja del mercado.",
  alternates: { canonical: "/precios" },
}

export default function PricingPage() {
  const pricingFaqs = [
    {
      question: "¿Cómo funciona el plan FREE?",
      answer: "El plan FREE no tiene costo mensual, solo comisión por venta. Si un mes no hay ventas no se abona absolutamente nada.",
    },
    {
      question: "¿Cómo funciona el plan PRO?",
      answer: "El plan PRO tiene una pequeña suscripción mensual que se absorbe con lo que se ahorra en la reducción de las comisiones. Rápidamente estarás pagando significativamente menos que en el plan Free.",
    },
    {
      question: "¿Puedo cambiar de plan en el futuro?",
      answer: "Sí, puedes actualizar o cambiar tu plan en cualquier momento según las necesidades de tu negocio sin penalizaciones.",
    },
    {
      question: "¿Qué incluye la implementación bonificada?",
      answer: "Configuración completa de tu cuenta, alta de usuarios, personalización de branding y soporte.",
    },
    {
      question: "¿Cómo se calculan las comisiones?",
      answer: "Las comisiones se aplican únicamente sobre las ventas exitosas realizadas a través de la plataforma. No hay comisiones por fotos no vendidas.",
    },
    {
      question: "¿El plan FREE tiene limitaciones de tiempo?",
      answer: "El plan FREE no tiene limitaciones de tiempo. Es perfecto para comenzar y probar la plataforma, pero si lo deseas, puedes continuar libre de suscripciones de por vida.",
    },
    {
      question: '¿Qué significa "la comisión más baja del mercado"?',
      answer: "Con el plan PRO pagas solo 7% de comisión por venta, significativamente menor que otras plataformas del mercado que cobran entre 15-30%.",
    },
    {
      question: "¿Para qué tipo de empresas es ideal el plan ENTERPRISE?",
      answer: "Este plan es ideal para centros de ski, parques de diversiones, parques acuáticos, estadios y todo tipo de atracciones donde se realicen venta de fotos.",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      <FAQPageJsonLd faqs={pricingFaqs} />
      <SoftwareApplicationJsonLd />
      <BreadcrumbJsonLd items={[{ name: "Inicio", url: "/" }, { name: "Precios", url: "/precios" }]} />

      {/* Navbar */}
      <Navbar />

      {/* ═══════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════ */}
      <section className="relative pt-36 pb-28 overflow-hidden">
        <PricingHeroBackground />
        {/* Extra gradient overlay for depth */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-blue-900/30 via-transparent to-blue-950/60"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white rounded-full px-4 py-1.5 text-sm font-medium mb-6 border border-white/20">
              <Sparkles className="h-4 w-4" />
              Precios transparentes
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight leading-[1.1]">
              Planes adaptados a{" "}
              <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                tus necesidades
              </span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto leading-relaxed">
              Desde fotógrafos independientes hasta empresas con múltiples locales. Encuentra el plan perfecto para tu
              negocio.
            </p>
          </div>
        </div>
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent z-[2]"></div>
      </section>

      {/* ═══════════════════════════════════════════════
          PRICING CARDS
      ═══════════════════════════════════════════════ */}
      <section className="py-16 bg-gray-50 -mt-12 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">

            {/* ─── Plan FREE ─── */}
            <div className="group bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1">
              <div className="p-8 pb-6">
                <div className="inline-flex items-center bg-gray-100 text-gray-600 rounded-full px-3 py-1 text-xs font-medium mb-5">
                  Para empezar
                </div>
                <h3 className="font-bold text-gray-900 text-3xl mb-4">FREE</h3>
                <div className="flex items-end gap-1 mb-2">
                  <span className="text-5xl font-bold text-gray-900">$0</span>
                  <span className="text-gray-500 mb-2 text-sm">USD/mes</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mt-4 mb-6">
                  Pensado para fotógrafos independientes que están comenzando y quieren crecer su negocio.
                </p>
                <Button
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-xl py-6 transition-all shadow-sm"
                  asChild
                >
                  <Link href="/agendar-demo">
                    Comenzar ahora
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <div className="text-center mt-4">
                  <span className="text-sm text-gray-500">
                    Comisión por venta: <strong className="text-gray-700">10%</strong>
                  </span>
                </div>
              </div>
              <div className="border-t border-gray-100 p-8 pt-6">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">Incluye</p>
                <ul className="space-y-3.5">
                  {[
                    "Almacenamiento ilimitado (1 año)",
                    "Hasta 15 álbums",
                    "Página web personalizada",
                    "Logo y branding",
                    "Pagos online integrados",
                    "Entrega automática de fotos",
                    "Reconocimiento facial y de número",
                    "Packs por cantidad",
                    "Cupones de descuento",
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{text}</span>
                    </li>
                  ))}
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">Limitaciones</p>
                    {[
                      "Marca de agua FullFoto",
                      "Branding FullFoto",
                      "Costo mínimo de implementación",
                    ].map((text, i) => (
                      <li key={i} className="flex items-start gap-3 mb-3.5">
                        <Minus className="h-4 w-4 text-gray-300 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-400 text-sm">{text}</span>
                      </li>
                    ))}
                  </div>
                </ul>
              </div>
            </div>

            {/* ─── Plan PRO ─── */}
            <div className="group relative bg-white rounded-3xl overflow-hidden border-2 border-blue-500 shadow-xl shadow-blue-100/50 hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-300 hover:-translate-y-1 z-10">
              {/* Badge */}
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center py-2 text-sm font-medium">
                ⭐ Plan más conveniente del mercado
              </div>
              <div className="p-8 pb-6 pt-14 bg-gradient-to-b from-blue-50/80 to-white">
                <div className="inline-flex items-center bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-xs font-medium mb-5">
                  Más popular
                </div>
                <h3 className="font-bold text-gray-900 text-3xl mb-4">PRO</h3>
                <div className="flex items-end gap-1 mb-2">
                  <span className="text-5xl font-bold text-gray-900">$17</span>
                  <span className="text-gray-500 mb-2 text-sm">USD/mes</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mt-4 mb-6">
                  Perfecto para fotógrafos con experiencia que quieren desbloquear su potencial y utilizar al 100% la
                  plataforma.
                </p>
                <Button
                  className="w-full bg-blue-500 hover:bg-blue-400 text-white rounded-xl py-6 shadow-lg shadow-blue-200/50 transition-all hover:shadow-xl hover:shadow-blue-200/70"
                  asChild
                >
                  <Link href="/agendar-demo">
                    Comenzar ahora
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <div className="text-center mt-4">
                  <span className="text-sm text-gray-500">
                    Comisión por venta: <strong className="text-gray-700">7%</strong>
                  </span>
                  <div className="inline-flex items-center bg-green-100 text-green-700 rounded-full px-3 py-1 text-xs font-medium mt-2">
                    La más baja del mercado
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-100 p-8 pt-6">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">Todo del Free, más</p>
                <ul className="space-y-3.5">
                  {[
                    "Almacenamiento ilimitado",
                    "Álbums ilimitados",
                    "Página web personalizada",
                    "Logo y branding",
                    "Pagos online integrados",
                    "Entrega automática de fotos",
                    "Reconocimiento facial y de número",
                    "Packs por cantidad",
                    "Cupones de descuento",
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{text}</span>
                    </li>
                  ))}
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-xs font-medium text-blue-500 uppercase tracking-wider mb-3">Exclusivo PRO</p>
                    {[
                      "Marca de agua personalizada",
                      "Equipos de hasta 10 fotógrafos",
                      "Dashboards y métricas grupales",
                      "Selección de fotos de regalo",
                      "Implementación bonificada",
                      "Soporte prioritario",
                    ].map((text, i) => (
                      <li key={i} className="flex items-start gap-3 bg-blue-50/80 p-3 rounded-xl mb-2">
                        <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-800 text-sm font-medium">{text}</span>
                      </li>
                    ))}
                  </div>
                </ul>
              </div>
            </div>

            {/* ─── Plan ENTERPRISE ─── */}
            <div className="group bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1">
              <div className="p-8 pb-6">
                <div className="inline-flex items-center bg-indigo-100 text-indigo-700 rounded-full px-3 py-1 text-xs font-medium mb-5">
                  Gran escala
                </div>
                <h3 className="font-bold text-gray-900 text-3xl mb-4">ENTERPRISE</h3>
                <div className="flex items-end gap-1 mb-2">
                  <span className="text-3xl font-bold text-gray-900">Plan Adaptado</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mt-4 mb-6">
                  Solución completa para empresas con (o sin) locales físicos y múltiples puntos de venta. Implementaciones a medida.
                </p>
                <Button
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-xl py-6 transition-all shadow-sm"
                  asChild
                >
                  <Link href="/#contacto">
                    Contactar con ventas
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <div className="text-center mt-4">
                  <span className="text-sm text-gray-500">
                    Comisión por venta: <strong className="text-gray-700">Personalizada</strong>
                  </span>
                </div>
              </div>
              <div className="border-t border-gray-100 p-8 pt-6">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">Todo del Pro, más</p>
                <ul className="space-y-3.5">
                  {[
                    "Almacenamiento ilimitado",
                    "Álbums ilimitados",
                    "Página personalizada",
                    "Logo y branding",
                    "Pagos online integrados",
                    "Entrega automática de fotos",
                    "Reconocimiento facial y de número",
                    "Packs por cantidad",
                    "Cupones de descuento",
                    "Marca de agua personalizada",
                    "Equipos ilimitados de fotógrafos",
                    "Dashboards y métricas grupales",
                    "Foto de regalo (Marketing)",
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{text}</span>
                    </li>
                  ))}
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-xs font-medium text-indigo-500 uppercase tracking-wider mb-3">Exclusivo Enterprise</p>
                    {[
                      "Servidor en local para carga de fotos instantánea (LAN)",
                      "Pagos tradicionales permitidos",
                      "Conexión con múltiples locales",
                      "Facturación automática (Solo Argentina)",
                      "Implementación bonificada",
                    ].map((text, i) => (
                      <li key={i} className="flex items-start gap-3 bg-indigo-50/80 p-3 rounded-xl mb-2">
                        <CheckCircle2 className="h-4 w-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-800 text-sm font-medium">{text}</span>
                      </li>
                    ))}
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
              <HelpCircle className="h-4 w-4" />
              FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Preguntas frecuentes</h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              Resolvemos tus dudas sobre nuestros planes y servicios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                q: "¿Cómo funciona el plan FREE?",
                a: "El plan FREE no tiene costo mensual, solo comisión por venta. Si un mes no hay ventas no se abona absolutamente nada.",
              },
              {
                q: "¿Cómo funciona el plan PRO?",
                a: "El plan PRO tiene una pequeña suscripción mensual que se absorbe con lo que se ahorra en la reducción de las comisiones. Rápidamente estarás pagando significativamente menos que en el plan Free.",
              },
              {
                q: "¿Puedo cambiar de plan en el futuro?",
                a: "Sí, puedes actualizar o cambiar tu plan en cualquier momento según las necesidades de tu negocio sin penalizaciones.",
              },
              {
                q: "¿Qué incluye la implementación bonificada?",
                a: "Configuración completa de tu cuenta, alta de usuarios, personalización de branding y soporte.",
              },
              {
                q: "¿Cómo se calculan las comisiones?",
                a: "Las comisiones se aplican únicamente sobre las ventas exitosas realizadas a través de la plataforma. No hay comisiones por fotos no vendidas.",
              },
              {
                q: "¿El plan FREE tiene limitaciones de tiempo?",
                a: "El plan FREE no tiene limitaciones de tiempo. Es perfecto para comenzar y probar la plataforma, pero si lo deseas, puedes continuar libre de suscripciones de por vida.",
              },
              {
                q: '¿Qué significa "la comisión más baja del mercado"?',
                a: "Con el plan PRO pagas solo 7% de comisión por venta, significativamente menor que otras plataformas del mercado que cobran entre 15-30%.",
              },
              {
                q: "¿Para qué tipo de empresas es ideal el plan ENTERPRISE?",
                a: "Este plan es ideal para centros de ski, parques de diversiones, parques acuáticos, estadios y todo tipo de atracciones donde se realicen venta de fotos.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-blue-100 hover:shadow-md hover:shadow-blue-50 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold mb-3 text-gray-900 group-hover:text-blue-700 transition-colors">
                  {item.q}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight">
                ¿Listo para potenciar tus ventas de fotos?
              </h2>
              <p className="text-lg text-blue-200 mb-10 leading-relaxed">
                Agenda una demo para conocer todas las funcionalidades
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-blue-900 hover:bg-blue-50 px-10 py-7 text-base rounded-xl shadow-lg shadow-black/10 transition-all hover:shadow-xl hover:-translate-y-0.5"
                  asChild
                >
                  <Link href="/agendar-demo">
                    Agendar demo
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white/30 hover:bg-white/10 px-10 py-7 text-base rounded-xl bg-transparent backdrop-blur-sm transition-all"
                  asChild
                >
                  <Link href="/#contacto">Contactar ventas</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════════ */}
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
            <p className="text-sm">© {new Date().getFullYear()} FullFoto. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
