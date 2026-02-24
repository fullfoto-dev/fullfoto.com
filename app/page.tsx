import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ChevronRight,
  BarChart3,
  Users,
  Brain,
  CreditCard,
  Globe,
  Filter,
  Smartphone,
  Server,
  Clock,
  CheckCircle2,
  Mail,
  Phone,
  Sparkles,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/app/components/navbar"
import ContactForm from "@/app/components/contact-form"
import LogoCarousel from "@/app/components/logo-carousel"
import { SoftwareApplicationJsonLd } from "@/app/components/json-ld"

export const metadata: Metadata = {
  title: "FullFoto — Plataforma de venta de fotografías con reconocimiento facial IA",
  description:
    "Vendé fotos en parques acuáticos, centros de esquí y eventos deportivos. Reconocimiento facial IA, pagos online, galerías personalizadas. +50 empresas ya confían en FullFoto.",
  alternates: { canonical: "/" },
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <SoftwareApplicationJsonLd />

      <Navbar />

      {/* ═══════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-image.jpg"
            alt="Fotógrafo capturando a un snowboarder en acción"
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center pt-20">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
            Potenciá tus <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              ventas de fotos
            </span>
            <br />
            sin complicaciones
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl leading-relaxed">
            Plataforma inteligente que mejora y automatiza la venta de fotos en parques, centros de esquí, eventos
            deportivos o cualquier experiencia que merezca ser recordada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-400 text-white px-10 py-7 text-base rounded-xl shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5"
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
              <Link href="#beneficios">Conocer más</Link>
            </Button>
          </div>

          <div className="mt-auto">
            <p className="text-white/60 text-sm mb-4">Plataforma utilizada por:</p>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="rounded-full px-4 py-2 text-white/80 backdrop-blur-sm bg-white/10 border border-white/10 text-sm">Parques de nieve</div>
              <div className="rounded-full px-4 py-2 text-white/80 backdrop-blur-sm bg-white/10 border border-white/10 text-sm">Eventos deportivos</div>
              <div className="rounded-full px-4 py-2 text-white/80 backdrop-blur-sm bg-white/10 border border-white/10 text-sm">Parques temáticos</div>
              <div className="rounded-full px-4 py-2 text-white/80 backdrop-blur-sm bg-white/10 border border-white/10 text-sm">Fotógrafos independientes</div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent z-10"></div>
      </section>

      {/* ═══════════════════════════════════════════════
          BENEFICIOS
      ═══════════════════════════════════════════════ */}
      <section id="beneficios" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4" />
              Beneficios
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Beneficios Clave</h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              FullFoto simplifica y potencia la manera en que vendes tus fotografías
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: BarChart3, title: "Aumento de Ingresos", desc: "Monetizá más momentos. Tus fotos llegan a más clientes, en más lugares, sin perder oportunidades de venta.", gradient: "from-blue-500 to-blue-600", shadow: "shadow-blue-200/50" },
              { icon: Server, title: "Gestión Eficiente", desc: "Centralizá todo en una sola plataforma. Olvidate del caos de carpetas, pen drives o correos perdidos.", gradient: "from-violet-500 to-purple-600", shadow: "shadow-violet-200/50" },
              { icon: Clock, title: "Análisis en Tiempo Real", desc: "Medí qué vende, cuándo y quién. Mejorá tu operación cada día con métricas clave.", gradient: "from-emerald-500 to-teal-600", shadow: "shadow-emerald-200/50" },
              { icon: Users, title: "Adaptabilidad", desc: "Trabajás solo o con un equipo grande, FullFoto se adapta. Incluso con múltiples puntos de venta físicos.", gradient: "from-amber-500 to-orange-600", shadow: "shadow-amber-200/50" },
              { icon: Brain, title: "Innovación Tecnológica", desc: "Filtros inteligentes por rostro, número o color de ropa. La IA hace el trabajo pesado por vos.", gradient: "from-pink-500 to-rose-600", shadow: "shadow-pink-200/50" },
              { icon: Globe, title: "Conectividad", desc: "Integración total. Cuando un PH toma sus fotos, automáticamente están disponibles en todos los locales y en la web para compra desde casa.", gradient: "from-cyan-500 to-blue-600", shadow: "shadow-cyan-200/50" },
            ].map((item, i) => (
              <div key={i} className="group bg-white rounded-2xl p-7 border border-gray-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300">
                <div className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-4 w-fit mb-6 shadow-lg ${item.shadow} group-hover:scale-105 transition-transform`}>
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CARACTERÍSTICAS
      ═══════════════════════════════════════════════ */}
      <section id="caracteristicas" className="py-24 bg-white relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl -translate-x-1/3 opacity-60"></div>
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-indigo-50 rounded-full blur-3xl translate-x-1/3 opacity-60"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4" />
              Plataforma
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Características Destacadas</h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              Una plataforma completa, diseñada para maximizar tu eficiencia y tus ventas
            </p>
          </div>

          {/* 2 columns: bento 2x2 left + image right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left — 2x2 bento grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Smartphone, title: "Multidispositivo", desc: "Compatible con móvil y desktop para gestionar tus ventas desde cualquier lugar.", gradient: "from-blue-500 to-blue-600", shadow: "shadow-blue-200/50" },
                { icon: Brain, title: "Reconocimiento IA", desc: "Detección facial y de números para facilitar la búsqueda de fotos a tus clientes.", gradient: "from-violet-500 to-purple-600", shadow: "shadow-violet-200/50" },
                { icon: Filter, title: "Filtros Inteligentes", desc: "Galerías organizadas por fecha, rostro, número o lugar para una experiencia óptima.", gradient: "from-emerald-500 to-teal-600", shadow: "shadow-emerald-200/50" },
                { icon: CreditCard, title: "Múltiples Pagos", desc: "Integración con MercadoPago, PayPal, Pix y más métodos para facilitar la compra.", gradient: "from-amber-500 to-orange-600", shadow: "shadow-amber-200/50" },
              ].map((item, i) => (
                <div key={i} className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300">
                  <div className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-4 w-fit mb-5 shadow-lg ${item.shadow} group-hover:scale-105 transition-transform`}>
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-base font-semibold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Right — device image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-300/50">
                <Image
                  src="/fullfoto-dispositivos.png"
                  alt="FullFoto en múltiples dispositivos - móvil, tablet y desktop"
                  width={700}
                  height={500}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent"></div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-blue-50 rounded-full -z-10 blur-2xl"></div>
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-purple-50 rounded-full -z-10 blur-xl"></div>
            </div>
          </div>

          {/* Bottom row: full-width extra features + pricing CTA */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-lg font-semibold mb-5 text-gray-900">Más funcionalidades que te encantarán</h3>
              <ul className="grid gap-4">
                {["Entrega de fotos automática y segura", "Estadísticas exportables en CSV", "Dominio propio personalizable", "Soporte en múltiples idiomas y monedas"].map((text, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Modelo de negocio transparente</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                Sin gastos ocultos, sin sorpresas. Facturación automática incluida (compatible con AFIP Argentina).
              </p>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white w-full rounded-xl py-5 shadow-lg shadow-blue-200/50" asChild>
                <Link href="/precios">Ver planes de precios</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          ESTADÍSTICAS
      ═══════════════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "+10M", label: "Fotos subidas" },
              { value: "+35k", label: "Usuarios registrados" },
              { value: "+500", label: "PHs activos" },
              { value: "+50k", label: "Ventas cerradas" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-b from-white to-blue-200 bg-clip-text text-transparent">{stat.value}</div>
                <p className="text-blue-300 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CONFÍAN EN NOSOTROS
      ═══════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Confían en nosotros</h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              +50 empresas y fotógrafos de primer nivel, entre ellos:
            </p>
          </div>
        </div>

        <LogoCarousel />
      </section>

      {/* ═══════════════════════════════════════════════
          CTA + CONTACTO
      ═══════════════════════════════════════════════ */}
      <section id="contacto" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    ¿Querés llevar tus ventas de fotos al siguiente nivel?
                  </h2>
                  <p className="text-lg text-blue-200 mb-10 leading-relaxed">
                    Contáctanos para una demo o más información sobre cómo FullFoto puede transformar tu negocio
                    fotográfico.
                  </p>
                  <div className="hidden lg:block space-y-5">
                    {["Soporte técnico personalizado", "Implementación en menos de 48 horas", "Capacitación gratuita para tu equipo"].map((text, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="bg-white/10 p-2.5 rounded-full">
                          <CheckCircle2 className="h-5 w-5 text-blue-300" />
                        </div>
                        <p className="text-white/90 text-sm">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-2xl shadow-black/10">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Contactanos</h3>
                  <ContactForm />
                </div>
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
