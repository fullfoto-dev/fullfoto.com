import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import {
  ChevronRight,
  Camera,
  Globe,
  Brain,
  CreditCard,
  BarChart3,
  CheckCircle2,
  Star,
  Clock,
  Upload,
  Share2,
  Banknote,
  Sparkles,
  TrendingUp,
  ArrowRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/app/components/navbar"
import { BreadcrumbJsonLd } from "@/app/components/json-ld"

export const metadata: Metadata = {
  title: "FullFoto para Fotógrafos — Tu web de fotos profesional",
  description:
    "Creá tu web de venta de fotos 100% personalizada. Reconocimiento facial, pagos online y dashboard de ventas. +500 fotógrafos ya usan FullFoto.",
  alternates: { canonical: "/fotografos" },
}

export default function FotografosPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <BreadcrumbJsonLd items={[{ name: "Inicio", url: "/" }, { name: "Fotógrafos", url: "/fotografos" }]} />

      <Navbar
        demoLink="/agendar-demo?plan=fotografo"
        demoText="Agendá tu demo"
        variant="fotografos"
      />

      {/* ═══════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-fotografos.png"
            alt="Fotógrafo profesional en acción"
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center pt-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 mb-8">
            <Camera className="h-4 w-4 text-blue-300" />
            <span className="text-white/90 text-sm font-medium">Fotógrafos independientes y equipos</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
            Dejá de regalar fotos.
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Empezá a vender.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl leading-relaxed">
            Creá tu web de venta de fotos 100% propia y personalizada. Tus clientes se buscan
            con su cara o su número y pagan online de forma automática.
          </p>

          <Button
            size="lg"
            className="bg-blue-500 hover:bg-blue-400 text-white px-10 py-7 text-base rounded-xl shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5"
            asChild
          >
            <Link href="/agendar-demo?plan=fotografo">
              Agendá una demo de 20 min
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>

          <p className="text-gray-500 text-sm mt-6">
            +500 fotógrafos ya venden con FullFoto
          </p>
        </div>

        {/* Gradient fade at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent z-10"></div>
      </section>

      {/* ═══════════════════════════════════════════════
          PROBLEMA → SOLUCIÓN (gráficas mejoradas)
      ═══════════════════════════════════════════════ */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Si vendés fotos por WhatsApp, estás perdiendo plata y tiempo
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              Buscar las fotos de cada persona, ponerle marca de agua, mandar por WhatsApp, cobrar por transferencia, perseguir pagos...
              suena familiar? Con FullFoto automatizás todo eso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 max-w-4xl mx-auto">
            {/* Conversión */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-blue-50 rounded-lg p-2">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Más conversión de ventas</h3>
              </div>

              {/* Bar chart visual */}
              <div className="flex items-end gap-6 mb-6 px-4">
                <div className="flex-1 flex flex-col items-center">
                  <span className="text-sm font-bold text-red-500 mb-2">3%</span>
                  <div className="w-full bg-gradient-to-t from-red-400 to-red-300 rounded-t-lg h-12 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:100%_8px]"></div>
                  </div>
                  <div className="w-full h-[2px] bg-gray-200"></div>
                  <p className="text-xs text-gray-400 mt-2 font-medium">Manual</p>
                </div>

                <div className="flex-1 flex flex-col items-center">
                  <span className="text-sm font-bold text-blue-600 mb-2">18%</span>
                  <div className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg h-[4.5rem] relative overflow-hidden shadow-md shadow-blue-200">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:100%_8px]"></div>
                  </div>
                  <div className="w-full h-[2px] bg-blue-200"></div>
                  <p className="text-xs text-gray-400 mt-2 font-medium">FullFoto</p>
                </div>
              </div>

              {/* Callout */}
              <div className="bg-blue-50 rounded-xl px-4 py-3 flex items-center gap-3">
                <div className="bg-blue-100 rounded-full p-1.5 flex-shrink-0">
                  <ArrowRight className="h-3.5 w-3.5 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-blue-800">6x más ventas con la misma cantidad de fotos</p>
              </div>
            </div>

            {/* Tiempo */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-blue-50 rounded-lg p-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Menos tiempo de gestión</h3>
              </div>

              {/* Donut/ring comparison */}
              <div className="flex items-center justify-around mb-6 px-2">
                {/* Before */}
                <div className="flex flex-col items-center">
                  <div className="relative w-24 h-24 mb-3">
                    <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="#fee2e2" strokeWidth="12" />
                      <circle cx="50" cy="50" r="40" fill="none" stroke="#ef4444" strokeWidth="12"
                        strokeDasharray="251.3" strokeDashoffset="0" strokeLinecap="round" />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-red-500">100%</span>
                  </div>
                  <p className="text-xs text-gray-400 font-medium">Manual</p>
                </div>

                {/* Arrow */}
                <div className="flex flex-col items-center gap-1">
                  <ArrowRight className="h-5 w-5 text-gray-300" />
                </div>

                {/* After */}
                <div className="flex flex-col items-center">
                  <div className="relative w-24 h-24 mb-3">
                    <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="#dbeafe" strokeWidth="12" />
                      <circle cx="50" cy="50" r="40" fill="none" stroke="#3b82f6" strokeWidth="12"
                        strokeDasharray="251.3" strokeDashoffset="226.2" strokeLinecap="round" />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-blue-600">10%</span>
                  </div>
                  <p className="text-xs text-gray-400 font-medium">FullFoto</p>
                </div>
              </div>

              {/* Callout */}
              <div className="bg-blue-50 rounded-xl px-4 py-3 flex items-center gap-3">
                <div className="bg-blue-100 rounded-full p-1.5 flex-shrink-0">
                  <ArrowRight className="h-3.5 w-3.5 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-blue-800">Ahorrá el 90% del tiempo en marcas de agua, envíos y cobros</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FEATURES
      ═══════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4" />
              Funcionalidades
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Todo lo que necesitás para vender fotos online
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="group bg-white rounded-2xl p-7 border border-gray-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 w-fit mb-6 shadow-lg shadow-blue-200/50 group-hover:shadow-blue-300/50 transition-shadow">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Tu web con tu marca</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Web 100% personalizada con tu logo, fondo, datos y dominio propio. Profesional desde el día uno.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-white rounded-2xl p-7 border border-gray-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300">
              <div className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl p-4 w-fit mb-6 shadow-lg shadow-violet-200/50 group-hover:shadow-violet-300/50 transition-shadow">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Búsqueda inteligente con IA</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Reconocimiento facial y de números (dorsales, gafetes). Tus clientes se buscan solos en segundos. No más scrollear entre miles de fotos.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-white rounded-2xl p-7 border border-gray-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-4 w-fit mb-6 shadow-lg shadow-emerald-200/50 group-hover:shadow-emerald-300/50 transition-shadow">
                <CreditCard className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Pagos integrados</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                MercadoPago, tarjeta, transferencia y los pagos locales de tu país. Tus clientes pagan online y vos cobrás automático.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group bg-white rounded-2xl p-7 border border-gray-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300">
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-4 w-fit mb-6 shadow-lg shadow-amber-200/50 group-hover:shadow-amber-300/50 transition-shadow">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Dashboard de ventas</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Sabé cuánto vendés, qué fotos se venden más y cuánto facturás. Todo en tiempo real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CÓMO FUNCIONA
      ═══════════════════════════════════════════════ */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Así de simple
            </h2>
            <p className="text-lg text-gray-500">De sacar fotos a cobrar, en 3 pasos</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connector line (desktop only) */}
              <div className="hidden md:block absolute top-14 left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200"></div>

              {/* Step 1 */}
              <div className="relative flex flex-col items-center text-center">
                <div className="bg-white rounded-2xl w-28 h-28 flex items-center justify-center shadow-lg shadow-gray-200/50 border border-gray-100 mb-6 relative z-10">
                  <Upload className="h-10 w-10 text-blue-500" />
                </div>
                <div className="bg-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mb-4">1</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Subí tus fotos</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Arrastrá tus fotos a la plataforma. FullFoto las organiza automáticamente.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col items-center text-center">
                <div className="bg-white rounded-2xl w-28 h-28 flex items-center justify-center shadow-lg shadow-gray-200/50 border border-gray-100 mb-6 relative z-10">
                  <Share2 className="h-10 w-10 text-blue-500" />
                </div>
                <div className="bg-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mb-4">2</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Compartí el link</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Mandá el link de tu web a tus clientes. La IA los encuentra por su cara o número de dorsal en segundos.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col items-center text-center">
                <div className="bg-white rounded-2xl w-28 h-28 flex items-center justify-center shadow-lg shadow-gray-200/50 border border-gray-100 mb-6 relative z-10">
                  <Banknote className="h-10 w-10 text-blue-500" />
                </div>
                <div className="bg-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mb-4">3</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Cobrá automático</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Tus clientes pagan online. Vos recibís la plata sin hacer nada más.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SOCIAL PROOF (números)
      ═══════════════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-b from-white to-blue-200 bg-clip-text text-transparent">+500</div>
              <p className="text-blue-300 text-sm">Fotógrafos activos</p>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-b from-white to-blue-200 bg-clip-text text-transparent">+10M</div>
              <p className="text-blue-300 text-sm">Fotos subidas</p>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-b from-white to-blue-200 bg-clip-text text-transparent">+50k</div>
              <p className="text-blue-300 text-sm">Ventas cerradas</p>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-b from-white to-blue-200 bg-clip-text text-transparent">7%</div>
              <p className="text-blue-300 text-sm">Comisión más baja del mercado</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          PLANES
      ═══════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Planes a tu medida. Vos marcás el ritmo.
            </h2>
            <p className="text-lg text-gray-500">Sin compromiso. Escalá cuando quieras.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Free */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Free</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-5xl font-bold text-gray-900">$0</span>
                <span className="text-gray-400">/mes</span>
              </div>
              <p className="text-gray-400 text-sm mb-8">10% comisión por venta</p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  <span className="text-gray-600">Hasta 15 álbumes</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  <span className="text-gray-600">Reconocimiento facial</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  <span className="text-gray-600">Pagos online integrados</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  <span className="text-gray-600">Branding de FullFoto</span>
                </li>
              </ul>

              <Button
                className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-xl py-6"
                asChild
              >
                <Link href="/agendar-demo?plan=free">Agendar demo</Link>
              </Button>
            </div>

            {/* Pro */}
            <div className="bg-gradient-to-b from-blue-50 to-white border-2 border-blue-200 rounded-2xl p-8 relative hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg shadow-blue-200">
                <Star className="h-3 w-3" /> Más popular
              </div>

              <h3 className="text-2xl font-bold mb-2 text-gray-900">Pro</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-5xl font-bold text-gray-900">$17</span>
                <span className="text-gray-400"> USD/mes</span>
              </div>
              <p className="text-gray-400 text-sm mb-8">7% comisión por venta (la más baja)</p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  <span className="text-gray-600">Álbumes ilimitados</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  <span className="text-gray-600">Tu marca y dominio propio</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  <span className="text-gray-600">Hasta 10 fotógrafos</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  <span className="text-gray-600">Dashboard grupal</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  <span className="text-gray-600">Soporte prioritario</span>
                </li>
              </ul>

              <Button
                className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-xl py-6 shadow-lg shadow-blue-200/50"
                asChild
              >
                <Link href="/agendar-demo?plan=pro">Agendá tu demo</Link>
              </Button>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/precios"
              className="inline-flex items-center text-sm text-gray-500 hover:text-blue-600 transition-colors font-medium group"
            >
              Ver todos los planes en detalle
              <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CTA FINAL
      ═══════════════════════════════════════════════ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Agendá una demo de 20 minutos
              </h2>
              <p className="text-lg text-blue-200 mb-10 leading-relaxed">
                Te mostramos cómo quedaría tu web con tus fotos. Sin compromiso.
              </p>
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-blue-50 px-10 py-7 text-base rounded-xl shadow-xl shadow-black/10 transition-all hover:-translate-y-0.5"
                asChild
              >
                <Link href="/agendar-demo?plan=fotografo">
                  Agendar demo gratuita
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <p className="text-blue-300/70 text-sm mt-6">
                +500 fotógrafos ya venden con FullFoto
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════════ */}
      <footer className="py-8 bg-gray-900 text-gray-400">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link href="/">
              <Image src="/logo-nuevo-blanco.png" alt="FullFoto" width={120} height={40} className="h-10 w-auto" />
            </Link>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/terminos" className="hover:text-white transition-colors text-sm">Términos</Link>
              <Link href="/privacidad" className="hover:text-white transition-colors text-sm">Privacidad</Link>
              <Link href="/#contacto" className="hover:text-white transition-colors text-sm">Contacto</Link>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-800 text-center">
            <p className="text-sm">
              © {new Date().getFullYear()} FullFoto. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
