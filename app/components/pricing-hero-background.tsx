"use client"

import Image from "next/image"
import { useState } from "react"

export default function PricingHeroBackground() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="absolute inset-0 z-0">
      {/* Gradiente de respaldo mientras carga */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-900 transition-opacity duration-500 ${
          isLoaded ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Imagen optimizada */}
      <Image
        src="/pricing-bg.webp"
        alt="Paisaje montañoso con lago"
        fill
        className={`object-cover transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        priority
        quality={75}
        onLoad={() => setIsLoaded(true)}
        sizes="100vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/60"></div>
    </div>
  )
}
