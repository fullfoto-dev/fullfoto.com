"use client"

import { useState } from "react"
import { Calendar, Clock, Building, User, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import Notification from "./notification"
import { sendDemoEmail } from "../actions/email"

export default function DemoForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedHora, setSelectedHora] = useState<string>("")
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
    // Añadir la hora seleccionada al FormData
    if (selectedHora) {
      formData.set("hora", selectedHora)
    }

    setIsSubmitting(true)
    try {
      const result = await sendDemoEmail(formData)
      if (result.success) {
        // Track conversión en GA4
        if (typeof window !== "undefined" && typeof window.gtag !== "undefined") {
          window.gtag("event", "agendar_demo", {
            event_category: "conversion",
            event_label: formData.get("planInteres") || "unknown",
          })
        }
        // Track conversión en Meta Pixel
        if (typeof window !== "undefined" && typeof window.fbq !== "undefined") {
          window.fbq("track", "Schedule")
        }

        setNotification({
          show: true,
          type: "success",
          message: result.message,
        })
        // Limpiar el formulario
        const form = document.getElementById("demoForm") as HTMLFormElement
        form.reset()
        setSelectedHora("")
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
        message: "Error al enviar la solicitud. Por favor, intenta nuevamente.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <form id="demoForm" action={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="nombre" className="text-gray-700">
              Nombre completo <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input id="nombre" name="nombre" placeholder="Tu nombre" className="pl-10" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700">
              Email <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input id="email" name="email" type="email" placeholder="tu@email.com" className="pl-10" required />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="telefono" className="text-gray-700">
              Teléfono <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input id="telefono" name="telefono" placeholder="+54 9 XXX XXXXXXX" className="pl-10" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="empresa" className="text-gray-700">
              Empresa
            </Label>
            <div className="relative">
              <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input id="empresa" name="empresa" placeholder="Nombre de tu empresa" className="pl-10" />
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <Label className="text-gray-700">
            Plan de interés <span className="text-red-500">*</span>
          </Label>
          <RadioGroup name="planInteres" defaultValue="free" className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-2 border border-gray-200 rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
              <RadioGroupItem value="free" id="free" />
              <Label htmlFor="free" className="cursor-pointer">
                Free
              </Label>
            </div>
            <div className="flex items-center space-x-2 border border-gray-200 rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
              <RadioGroupItem value="pro" id="pro" />
              <Label htmlFor="pro" className="cursor-pointer">
                Pro
              </Label>
            </div>
            <div className="flex items-center space-x-2 border border-gray-200 rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
              <RadioGroupItem value="enterprise" id="enterprise" />
              <Label htmlFor="enterprise" className="cursor-pointer">
                Enterprise
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="fecha" className="text-gray-700">
              Fecha preferida <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input id="fecha" name="fecha" type="date" className="pl-10" required />
            </div>
            <p className="text-xs text-gray-400">Orientativo — confirmaremos por WhatsApp</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="hora" className="text-gray-700">
              Hora preferida <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <Clock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Select name="hora" value={selectedHora} onValueChange={setSelectedHora} required>
                <SelectTrigger className="pl-10">
                  <SelectValue placeholder="Selecciona una hora" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="09:00">09:00 AM</SelectItem>
                  <SelectItem value="10:00">10:00 AM</SelectItem>
                  <SelectItem value="11:00">11:00 AM</SelectItem>
                  <SelectItem value="12:00">12:00 PM</SelectItem>
                  <SelectItem value="13:00">01:00 PM</SelectItem>
                  <SelectItem value="14:00">02:00 PM</SelectItem>
                  <SelectItem value="15:00">03:00 PM</SelectItem>
                  <SelectItem value="16:00">04:00 PM</SelectItem>
                  <SelectItem value="17:00">05:00 PM</SelectItem>
                  <SelectItem value="18:00">06:00 PM</SelectItem>
                  <SelectItem value="19:00">07:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <p className="text-xs text-gray-400">Orientativo — confirmaremos por WhatsApp</p>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="mensaje" className="text-gray-700">
            Mensaje o consulta específica
          </Label>
          <Textarea
            id="mensaje"
            name="mensaje"
            placeholder="Cuéntanos más sobre tu negocio o cualquier consulta específica que tengas"
            className="min-h-[100px]"
          />
        </div>

        {/* WhatsApp confirmation notice */}
        <div className="flex items-start gap-3 bg-green-50 border border-green-100 rounded-xl p-4">
          <svg viewBox="0 0 24 24" className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <p className="text-sm text-green-800 leading-relaxed">
            <strong>Esto no es una reserva definitiva.</strong> Te contactaremos por WhatsApp para coordinar y confirmar el día y horario de tu demo.
          </p>
        </div>

        <Button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-6 text-lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando solicitud..." : "Enviar solicitud de demo"}
        </Button>

        <p className="text-sm text-gray-500 text-center">
          Al enviar este formulario, aceptas nuestra{" "}
          <Link href="/privacidad" className="underline hover:text-gray-700">política de privacidad</Link>{" "}
          y{" "}
          <Link href="/terminos" className="underline hover:text-gray-700">términos de servicio</Link>.
        </p>
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
