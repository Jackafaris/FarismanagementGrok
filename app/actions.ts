"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendInterestEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const interestedProperty = formData.get("interestedProperty") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !interestedProperty) {
    return { success: false, error: "Please fill out all required fields." };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Farismanagement <onboarding@resend.dev>", // Works for testing. For production, verify your domain at resend.com/domains
      to: ["shirinefaris@gmail.com"],
      subject: `Interest in ${interestedProperty} - ${name}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h1 style="font-size: 24px; margin-bottom: 24px; color: #000;">New Property Interest</h1>
          
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
          <p><strong>Interested In:</strong> ${interestedProperty}</p>
          
          ${message ? `
            <div style="margin-top: 16px;">
              <strong>Message:</strong>
              <p style="white-space: pre-wrap; background: #f5f5f5; padding: 16px; border-radius: 6px; margin-top: 8px;">${message}</p>
            </div>
          ` : ""}
          
          <hr style="margin: 32px 0; border: none; border-top: 1px solid #eee;" />
          <p style="color: #666; font-size: 14px;">Sent from the Farismanagement website.</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false, error: "Failed to send inquiry. Please try again or email us directly." };
    }

    return { success: true };
  } catch (err) {
    console.error(err);
    return { success: false, error: "Something went wrong. Please try again." };
  }
}
