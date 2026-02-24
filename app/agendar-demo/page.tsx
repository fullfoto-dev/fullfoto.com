import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, CheckCircle2, Mail, Phone, Sparkles, HelpCircle, Clock, Video, Users, MessageCircle } from "lucide-react"

import Navbar from "@/app/components/navbar"
import DemoForm from "@/app/components/demo-form"
import { FAQPageJsonLd, BreadcrumbJsonLd } from "@/app/components/json-ld"

export const metadata: Metadata = {
  title: "Agendar Demo Gratuita",
  description:
    "Agenda una demostración personalizada de FullFoto. Descubrí cómo nuestra plataforma puede transformar tu negocio fotográfico. Sin compromiso.",
  alternates: { canonical: "/agendar-demo" },
}

export default function AgendarDemoPage() {
  const demoFaqs = [
    {
      question: "¿Cuánto dura la demo?",
      answer: "Nuestras demos suelen durar entre 30 y 45 minutos, dependiendo de tus necesidades y preguntas.",
    },
    {
      question: "¿Necesito preparar algo?",
      answer: "No es necesario, pero si tienes preguntas específicas o casos de uso, es útil tenerlos a mano.",
    },
    {
      question: "¿Cómo se realiza la demo?",
      answer: "A través de una videollamada donde compartiremos pantalla para mostrarte la plataforma en funcionamiento.",
    },
    {
      question: "¿Puedo invitar a mi equipo?",
      answer: "¡Por supuesto! Recomendamos que participen todas las personas involucradas en la toma de decisiones.",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      <FAQPageJsonLd faqs={demoFaqs} />
      <BreadcrumbJsonLd items={[{ name: "Inicio", url: "/" }, { name: "Agendar Demo", url: "/agendar-demo" }]} />

      {/* Navbar */}
      <Navbar demoText="Demo gratuita" />

      {/* ═══════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════ */}
      <section className="relative pt-36 pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/pricing-bg.png" alt="Paisaje montañoso con lago" fill className="object-cover scale-105" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-900/60 to-blue-950/90"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white rounded-full px-4 py-1.5 text-sm font-medium mb-6 border border-white/20">
              <Sparkles className="h-4 w-4" />
              Sin compromiso
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight leading-[1.1]">
              Agenda una demo{" "}
              <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                personalizada
              </span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto leading-relaxed mb-8">
              Descubre cómo FullFoto puede transformar tu negocio fotográfico con una demostración a medida
            </p>
            <Link
              href="/"
              className="inline-flex items-center text-blue-200/80 hover:text-white transition-colors text-sm"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Volver al inicio
            </Link>
          </div>
        </div>
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent z-[2]"></div>
      </section>

      {/* ═══════════════════════════════════════════════
          FORM SECTION
      ═══════════════════════════════════════════════ */}
      <section className="py-16 bg-gray-50 -mt-12 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-5">
              {/* Left Column - Benefits */}
              <div className="md:col-span-2 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-8 lg:p-10 text-white relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"></div>

                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-8">¿Por qué agendar una demo?</h2>

                  <div className="space-y-6">
                    {[
                      {
                        icon: CheckCircle2,
                        title: "Personalizada",
                        desc: "Adaptada a las necesidades específicas de tu negocio fotográfico",
                      },
                      {
                        icon: Video,
                        title: "Interactiva",
                        desc: "Podrás hacer preguntas y ver la plataforma en acción",
                      },
                      {
                        icon: MessageCircle,
                        title: "Sin compromiso",
                        desc: "Conoce todas las funcionalidades sin ninguna obligación",
                      },
                      {
                        icon: Users,
                        title: "Asesoramiento",
                        desc: "Recibe consejos de expertos para maximizar tus ventas",
                      },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="bg-white/10 backdrop-blur-sm p-2.5 rounded-xl flex-shrink-0 border border-white/10">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                          <p className="text-blue-100/80 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 pt-6 border-t border-white/15">
                    <p className="text-blue-200/70 text-xs uppercase tracking-wider mb-4">Contacto directo</p>
                    <div className="space-y-3">
                      <a
                        href="mailto:info@fullfoto.com"
                        className="flex items-center gap-3 text-sm text-blue-100/90 hover:text-white transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                        info@fullfoto.com
                      </a>
                      <a
                        href="tel:+5493888538161"
                        className="flex items-center gap-3 text-sm text-blue-100/90 hover:text-white transition-colors"
                      >
                        <Phone className="h-4 w-4" />
                        +54 9 3888 538161
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="md:col-span-3 p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-blue-50 p-2 rounded-xl">
                    <Clock className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Completa tus datos</h2>
                    <p className="text-gray-500 text-sm">Te contactaremos por WhatsApp en menos de 24 hs</p>
                  </div>
                </div>
                <DemoForm />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Preguntas frecuentes sobre la demo</h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              Resolvemos tus dudas sobre cómo funciona nuestra demostración personalizada
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: "¿Cuánto dura la demo?",
                a: "Nuestras demos suelen durar entre 30 y 45 minutos, dependiendo de tus necesidades y preguntas.",
              },
              {
                q: "¿Necesito preparar algo?",
                a: "No es necesario, pero si tienes preguntas específicas o casos de uso, es útil tenerlos a mano.",
              },
              {
                q: "¿Cómo se realiza la demo?",
                a: "A través de una videollamada donde compartiremos pantalla para mostrarte la plataforma en funcionamiento.",
              },
              {
                q: "¿Puedo invitar a mi equipo?",
                a: "¡Por supuesto! Recomendamos que participen todas las personas involucradas en la toma de decisiones.",
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
