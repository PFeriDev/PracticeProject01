// lib/resend.ts
"use server";
import { Resend } from "resend";

// Kérjük, győződj meg róla, hogy a környezeti változót betöltötte a Next.js
const resend = new Resend(process.env.RESEND_API_KEY!);

export const sendEmail = async (formData: { name: string; email: string; phone: string; message: string }) => {
  try {
    const emailResponse = await resend.emails.send({
      from: "PersonalPortfolio <info@resend.dev>", // Cseréld ki a valós email címedre
      to: "pemmer.ferenc@gmail.com", // A címzett email címe
      subject: `Lead from ${formData.name}`,
      text: formData.message,
      html: `<p>Name: ${formData.name}</p><p>Email: ${formData.email}</p><p>Phone: ${formData.phone}</p><p>Message: ${formData.message}</p>`,
    });

    console.log("Email sent:", emailResponse);
    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, message: "Error sending email." };
  }
};
