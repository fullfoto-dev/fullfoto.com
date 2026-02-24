"use server"

import nodemailer from "nodemailer"
import { z } from "zod"

// Esquema de validación para el formulario de contacto
const contactFormSchema = z.object({
  nombre: z.string().min(2, { message: "El nombre es requerido" }),
  email: z.string().email({ message: "Email inválido" }),
  empresa: z.string().optional(),
  mensaje: z.string().min(5, { message: "El mensaje es requerido" }),
})

// Esquema de validación para el formulario de demo
const demoFormSchema = z.object({
  nombre: z.string().min(2, { message: "El nombre es requerido" }),
  email: z.string().email({ message: "Email inválido" }),
  telefono: z.string().min(5, { message: "El teléfono es requerido" }),
  empresa: z.string().optional(),
  planInteres: z.enum(["free", "pro", "enterprise"]),
  fecha: z.string().min(1, { message: "La fecha es requerida" }),
  hora: z.string().min(1, { message: "La hora es requerida" }),
  mensaje: z.string().optional(),
})

// Configuración del transportador de email
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "gaspar.rodriguez93@gmail.com",
    pass: process.env.EMAIL_PASSWORD, // Esto debe configurarse como variable de entorno
  },
})

// Lista de destinatarios
const recipients = ["gaspar@fullfoto.com", "tate@fullfoto.com", "gaspar.rodriguez93@gmail.com"]

// Función para enviar email de contacto
export async function sendContactEmail(formData: FormData) {
  try {
    // Extraer y validar los datos del formulario
    const data = {
      nombre: formData.get("nombre") as string,
      email: formData.get("email") as string,
      empresa: formData.get("empresa") as string,
      mensaje: formData.get("mensaje") as string,
    }

    // Validar los datos
    const validatedData = contactFormSchema.parse(data)

    // Configurar el email
    const mailOptions = {
      from: "gaspar.rodriguez93@gmail.com",
      to: recipients.join(", "),
      subject: `Nuevo mensaje de contacto de ${validatedData.nombre}`,
      html: `
        <h1>Nuevo mensaje de contacto</h1>
        <p><strong>Nombre:</strong> ${validatedData.nombre}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Empresa:</strong> ${validatedData.empresa || "No especificada"}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${validatedData.mensaje}</p>
      `,
    }

    // Enviar el email
    await transporter.sendMail(mailOptions)

    return { success: true, message: "Mensaje enviado correctamente" }
  } catch (error) {
    console.error("Error al enviar el email de contacto:", error)
    if (error instanceof z.ZodError) {
      return { success: false, message: "Datos de formulario inválidos", errors: error.errors }
    }
    return { success: false, message: "Error al enviar el mensaje. Por favor, intenta nuevamente." }
  }
}

// Función para enviar email de solicitud de demo
export async function sendDemoEmail(formData: FormData) {
  try {
    // Extraer y validar los datos del formulario
    const data = {
      nombre: formData.get("nombre") as string,
      email: formData.get("email") as string,
      telefono: formData.get("telefono") as string,
      empresa: formData.get("empresa") as string,
      planInteres: formData.get("planInteres") as "free" | "pro" | "enterprise",
      fecha: formData.get("fecha") as string,
      hora: formData.get("hora") as string,
      mensaje: formData.get("mensaje") as string,
    }

    // Validar los datos
    const validatedData = demoFormSchema.parse(data)

    // Mapear el plan de interés a un texto más descriptivo
    const planInteresTexto = {
      free: "Plan Free",
      pro: "Plan Pro",
      enterprise: "Plan Enterprise",
    }[validatedData.planInteres]

    // Configurar el email
    const mailOptions = {
      from: "gaspar.rodriguez93@gmail.com",
      to: recipients.join(", "),
      subject: `Nueva solicitud de demo de ${validatedData.nombre}`,
      html: `
        <h1>Nueva solicitud de demo</h1>
        <p><strong>Nombre:</strong> ${validatedData.nombre}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Teléfono:</strong> ${validatedData.telefono}</p>
        <p><strong>Empresa:</strong> ${validatedData.empresa || "No especificada"}</p>
        <p><strong>Plan de interés:</strong> ${planInteresTexto}</p>
        <p><strong>Fecha preferida:</strong> ${validatedData.fecha}</p>
        <p><strong>Hora preferida:</strong> ${validatedData.hora}</p>
        <p><strong>Mensaje adicional:</strong></p>
        <p>${validatedData.mensaje || "No hay mensaje adicional"}</p>
      `,
    }

    // Enviar el email
    await transporter.sendMail(mailOptions)

    return { success: true, message: "¡Solicitud recibida! Te contactaremos por WhatsApp para confirmar día y horario de tu demo." }
  } catch (error) {
    console.error("Error al enviar el email de demo:", error)
    if (error instanceof z.ZodError) {
      return { success: false, message: "Datos de formulario inválidos", errors: error.errors }
    }
    return { success: false, message: "Error al enviar la solicitud. Por favor, intenta nuevamente." }
  }
}
