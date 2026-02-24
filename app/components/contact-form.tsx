"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Notification from "./notification"
import { sendContactEmail } from "../actions/email"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [notification, setNotification] = useState<{
    show: boolean
    type: "success" | "error"
    message: string
  }>({
    show: false,
    type: "success",
    message: "",
  })

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    try {
      const result = await sendContactEmail(formData)
      if (result.success) {
        // Track conversión en GA4
        if (typeof window !== "undefined" && typeof window.gtag !== "undefined") {
          window.gtag("event", "formulario_contacto", {
            event_category: "conversion",
            event_label: "contacto",
          })
        }
        // Track conversión en Meta Pixel
        if (typeof window !== "undefined" && typeof window.fbq !== "undefined") {
          window.fbq("track", "Lead")
        }

        setNotification({
          show: true,
          type: "success",
          message: result.message,
        })
        // Limpiar el formulario
        const form = document.getElementById("contactForm") as HTMLFormElement
        form.reset()
      } else {
        setNotification({
          show: true,
          type: "error",
          message: result.message,
        })
      }
    } catch (error) {
      setNotification({
        show: true,
        type: "error",
        message: "Error al enviar el mensaje. Por favor, intenta nuevamente.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <form id="contactForm" action={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="nombre" className="text-gray-700">
              Nombre
            </Label>
            <Input id="nombre" name="nombre" placeholder="Tu nombre" className="w-full" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700">
              Email
            </Label>
            <Input id="email" name="email" type="email" placeholder="tu@email.com" className="w-full" required />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="empresa" className="text-gray-700">
            Empresa
          </Label>
          <Input id="empresa" name="empresa" placeholder="Nombre de tu empresa" className="w-full" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="mensaje" className="text-gray-700">
            Mensaje
          </Label>
          <Textarea
            id="mensaje"
            name="mensaje"
            placeholder="¿En qué podemos ayudarte?"
            className="w-full min-h-[120px]"
            required
          />
        </div>
        <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Enviar mensaje"}
          <Send className="ml-2 h-4 w-4" />
        </Button>
      </form>

      {notification.show && (
        <Notification
          type={notification.type}
          message={notification.message}
          onClose={() => setNotification({ ...notification, show: false })}
        />
      )}
    </>
  )
}
