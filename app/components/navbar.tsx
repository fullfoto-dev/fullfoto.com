"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Camera, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavbarProps {
  demoLink?: string
  demoText?: string
  /** "empresas" shows "Soy fotógrafo" link; "fotografos" shows "Empresas" link */
  variant?: "empresas" | "fotografos"
}

export default function Navbar({ demoLink = "/agendar-demo", demoText = "Demo gratuita", variant = "empresas" }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    // Añadir el evento de scroll
    window.addEventListener("scroll", handleScroll)

    // Comprobar el estado inicial
    handleScroll()

    // Limpiar el evento al desmontar
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        scrolled ? "bg-gray-900/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-nuevo-blanco.png"
              alt="FullFoto"
              width={120}
              height={40}
              className="h-12 w-auto transition-transform duration-300 hover:brightness-110"
            />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#beneficios" className="text-white/90 hover:text-white transition-colors">
              Beneficios
            </Link>
            <Link href="/#caracteristicas" className="text-white/90 hover:text-white transition-colors">
              Características
            </Link>
            <Link href="/precios" className="text-white/90 hover:text-white transition-colors">
              Precios
            </Link>
            <Link href="/#contacto" className="text-white/90 hover:text-white transition-colors">
              Contacto
            </Link>
          </div>
          <div className="flex items-center gap-3">
            {variant === "empresas" ? (
              <Link
                href="/fotografos"
                className="hidden md:inline-flex items-center gap-1.5 text-white/70 hover:text-white border border-white/20 hover:border-white/40 rounded-full px-3.5 py-1.5 text-sm transition-all duration-300 hover:bg-white/10"
              >
                <Camera className="h-3.5 w-3.5" />
                Soy fotógrafo
              </Link>
            ) : (
              <Link
                href="/"
                className="hidden md:inline-flex items-center gap-1.5 text-white/70 hover:text-white border border-white/20 hover:border-white/40 rounded-full px-3.5 py-1.5 text-sm transition-all duration-300 hover:bg-white/10"
              >
                <Building2 className="h-3.5 w-3.5" />
                Empresas
              </Link>
            )}
            <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md" asChild>
              <Link href={demoLink}>{demoText}</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
