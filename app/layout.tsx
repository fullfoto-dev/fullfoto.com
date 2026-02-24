import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollToSection from "./components/scroll-to-section"
import { OrganizationJsonLd, WebSiteJsonLd } from "./components/json-ld"

const inter = Inter({ subsets: ["latin"] })

const GA_ID = process.env.NEXT_PUBLIC_GA_ID
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID

export const metadata: Metadata = {
  metadataBase: new URL("https://fullfoto.com"),
  title: {
    default: "FullFoto — Plataforma de venta de fotografías con IA",
    template: "%s | FullFoto",
  },
  description:
    "Plataforma SaaS para venta de fotos con reconocimiento facial IA, pagos online y galerías personalizadas. Usada por +50 empresas y +500 fotógrafos en Argentina y Latinoamérica.",
  keywords: [
    "venta de fotos online",
    "plataforma fotográfica",
    "reconocimiento facial fotos",
    "venta de fotografías",
    "software para fotógrafos",
    "galería de fotos online",
    "FullFoto",
    "fotos parques acuáticos",
    "fotos centros de esquí",
    "fotos eventos deportivos",
  ],
  authors: [{ name: "FullFoto" }],
  creator: "FullFoto",
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "FullFoto",
    title: "FullFoto — Plataforma de venta de fotografías con IA",
    description:
      "Venta de fotos con reconocimiento facial, pagos online y galerías personalizadas. +50 empresas confían en nosotros.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FullFoto — Plataforma de venta de fotografías",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FullFoto — Plataforma de venta de fotografías con IA",
    description:
      "Venta de fotos con reconocimiento facial, pagos online y galerías personalizadas.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", type: "image/png" },
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "/",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-AR">
      <head>
        {/* Google Analytics 4 */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}

        {/* Meta Pixel */}
        {META_PIXEL_ID && (
          <>
            <Script id="meta-pixel" strategy="afterInteractive">
              {`
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${META_PIXEL_ID}');
                fbq('track', 'PageView');
              `}
            </Script>
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>
          </>
        )}
      </head>
      <body className={inter.className}>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <ScrollToSection />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
