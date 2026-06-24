export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FullFoto",
    url: "https://fullfoto.com",
    logo: "https://fullfoto.com/logo-nuevo-blanco.png",
    description:
      "Plataforma SaaS líder en venta de fotografías con reconocimiento facial IA. La comisión más baja del mercado (7%), implementación en 48 hs y usada por +50 empresas y +500 fotógrafos en Latinoamérica.",
    email: "info@fullfoto.com",
    telephone: "+5491178279790",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AR",
    },
    sameAs: [
      "https://www.instagram.com/fullfoto.app/",
      "https://www.linkedin.com/company/fullfoto/",
    ],
    foundingDate: "2020",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 2,
      maxValue: 10,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "FullFoto",
    url: "https://fullfoto.com",
    description:
      "Plataforma de venta de fotografías con reconocimiento facial IA, pagos online y galerías personalizadas.",
    inLanguage: "es-AR",
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function SoftwareApplicationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "FullFoto",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://fullfoto.com",
    description:
      "Plataforma SaaS líder para la venta de fotografías en parques acuáticos, centros de esquí y eventos deportivos. Cada fotógrafo o empresa obtiene su propia página web de venta 100% personalizada con dominio propio, logo y colores propios, sin marca de FullFoto visible para el comprador. Reconocimiento facial IA para que los clientes encuentren sus fotos al instante, pagos online con MercadoPago/PayPal/Pix y la comisión más baja del mercado (7% vs 15-30% de la competencia). Servidor LAN para locales sin internet. +10M fotos subidas, +50 empresas confían en FullFoto.",
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "0",
      highPrice: "17",
      priceCurrency: "USD",
      offerCount: 3,
      offers: [
        {
          "@type": "Offer",
          name: "Plan Free",
          price: "0",
          priceCurrency: "USD",
          description: "Plan gratuito sin costo mensual. Comisión del 10% por venta. Ideal para fotógrafos que están comenzando.",
        },
        {
          "@type": "Offer",
          name: "Plan Pro",
          price: "17",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "17",
            priceCurrency: "USD",
            billingDuration: "P1M",
          },
          description: "Plan profesional a $17 USD/mes con la comisión más baja del mercado (7%). Marca de agua personalizada, equipos de hasta 10 fotógrafos y soporte prioritario.",
        },
        {
          "@type": "Offer",
          name: "Plan Enterprise",
          price: "0",
          priceCurrency: "USD",
          description: "Plan empresarial con precio y comisión personalizados. Ideal para centros de ski, parques acuáticos y grandes atracciones. Servidor LAN, facturación automática y múltiples locales.",
        },
      ],
    },
    // aggregateRating removido temporalmente: Google puede penalizar reviews schema
    // self-reported sin source verificable. Reactivar cuando haya reviews públicas
    // en G2/Capterra/Trustpilot con URL linkeable.
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

interface FAQItem {
  question: string
  answer: string
}

export function FAQPageJsonLd({ faqs }: { faqs: FAQItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

interface CaseStudyJsonLdProps {
  title: string
  description: string
  url: string
  image: string
  datePublished: string
  clientName: string
  clientUrl?: string
}

export function CaseStudyJsonLd({
  title,
  description,
  url,
  image,
  datePublished,
  clientName,
  clientUrl,
}: CaseStudyJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: `https://fullfoto.com${image}`,
    datePublished,
    author: {
      "@type": "Organization",
      name: "FullFoto",
      url: "https://fullfoto.com",
    },
    publisher: {
      "@type": "Organization",
      name: "FullFoto",
      logo: {
        "@type": "ImageObject",
        url: "https://fullfoto.com/logo-nuevo-blanco.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://fullfoto.com${url}`,
    },
    about: {
      "@type": "Organization",
      name: clientName,
      ...(clientUrl ? { url: clientUrl } : {}),
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://fullfoto.com${item.url}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
