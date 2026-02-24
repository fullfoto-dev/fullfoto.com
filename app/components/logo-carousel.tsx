"use client"

import Image from "next/image"

const clients = [
  { src: "/clients/lago-hermoso.png", alt: "Lago Hermoso", w: 160 },
  { src: "/clients/b-side.png", alt: "B-Side", w: 160 },
  { src: "/clients/patagonia-splash.png", alt: "Patagonia Splash", w: 180 },
  { src: "/clients/las-lenas.png", alt: "Las Leñas", w: 160 },
  { src: "/clients/termas-marinas.png", alt: "Termas Marinas Park", w: 180 },
  { src: "/clients/fotosoldeu.png", alt: "Foto Soldeu", w: 140 },
  { src: "/clients/interleague.png", alt: "Interleague", w: 160 },
  { src: "/clients/aquopolis.png", alt: "Aquopolis", w: 160 },
  { src: "/clients/cerromartial.png", alt: "Cerro Martial", w: 160 },
  { src: "/clients/infinitowaterpark.png", alt: "Infinito Water Park", w: 170 },
]

// Each logo slot = image width area (192px) + padding (48px) = 240px per slot
// 10 logos × 240px = 2400px per set
const SLOT_WIDTH = 240
const SET_WIDTH = clients.length * SLOT_WIDTH

function LogoSet({ prefix }: { prefix: string }) {
  return (
    <>
      {clients.map((client, i) => (
        <div
          key={`${prefix}-${i}`}
          className="flex-shrink-0 flex items-center justify-center h-44 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
          style={{ width: `${SLOT_WIDTH}px` }}
          aria-hidden={prefix !== "a"}
        >
          <Image
            src={client.src}
            alt={client.alt}
            width={client.w}
            height={160}
            className="object-contain"
            style={{ maxHeight: "160px" }}
          />
        </div>
      ))}
    </>
  )
}

export default function LogoCarousel() {
  return (
    <div
      className="group relative overflow-hidden"
      aria-label="Logos de clientes"
    >
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white to-transparent"></div>
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white to-transparent"></div>

      {/* Scrolling track — two identical sets side by side */}
      <div
        className="flex group-hover:[animation-play-state:paused]"
        style={{
          width: `${SET_WIDTH * 2}px`,
          animation: `marquee 19s linear infinite`,
        }}
      >
        <LogoSet prefix="a" />
        <LogoSet prefix="b" />
      </div>
    </div>
  )
}
