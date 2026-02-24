import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Home, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-indigo-50 rounded-full blur-3xl opacity-60"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-2xl mx-auto">
        {/* Logo */}
        <Link href="/" className="inline-block mb-12">
          <Image
            src="/logo-nuevo-blanco.png"
            alt="FullFoto"
            width={140}
            height={46}
            className="h-12 w-auto brightness-0"
          />
        </Link>

        {/* 404 number */}
        <div className="text-8xl md:text-9xl font-bold bg-gradient-to-br from-blue-500 to-indigo-600 bg-clip-text text-transparent mb-6">
          404
        </div>

        {/* Message */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Página no encontrada
        </h1>
        <p className="text-gray-500 text-lg mb-10 leading-relaxed max-w-md mx-auto">
          Lo sentimos, la página que buscás no existe o fue movida. Te invitamos a volver al inicio.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-6 text-base rounded-xl shadow-lg shadow-blue-200/50 transition-all hover:shadow-xl hover:-translate-y-0.5"
            asChild
          >
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Ir al inicio
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-gray-200 text-gray-700 hover:bg-gray-100 px-8 py-6 text-base rounded-xl transition-all"
            asChild
          >
            <Link href="/precios">
              Ver planes
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        {/* Help links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-400 mb-4">¿Necesitás ayuda?</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/agendar-demo" className="text-sm text-blue-600 hover:text-blue-700 transition-colors">
              Agendar demo
            </Link>
            <Link href="/#contacto" className="text-sm text-blue-600 hover:text-blue-700 transition-colors">
              Contacto
            </Link>
            <Link href="/precios" className="text-sm text-blue-600 hover:text-blue-700 transition-colors">
              Precios
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
