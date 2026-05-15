import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, message } = await req.json();

    if (!email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const color = "#7C3AED"; // Branding principal
    const logoUrl = "https://TU-DOMINIO.com/logo.svg"; // Cambiar al deploy real

    const lightTemplate = `
      <div style="font-family: Arial, sans-serif; padding: 24px; background-color: #f7f7f7;">
        <div style="max-width: 600px; margin: auto; background: white; border-radius: 12px; padding: 32px; border: 1px solid #e5e5e5; color: #222;">
          
          <div style="text-align:center; margin-bottom: 24px;">
            <img src="${logoUrl}" width="48" height="48" alt="Logo" />
          </div>

          <h2 style="margin-top: 0; font-size: 24px; color: #111;">
            📩 New Contact Message
          </h2>

          <p style="font-size: 16px; color: #333; line-height: 1.6;">
            You received a new message from your portfolio contact form.
          </p>

          <div style="margin-top: 24px;">
            <p style="font-size: 14px; color: #666; margin-bottom: 4px;">Sender Email:</p>
            <p style="font-size: 16px; color: #111; font-weight: bold;">${email}</p>
          </div>

          <div style="margin-top: 24px;">
            <p style="font-size: 14px; color: #666; margin-bottom: 4px;">Message:</p>
            <div style="padding: 16px; background: #fafafa; border-radius: 8px; border: 1px solid #eee; font-size: 15px; color: #333; line-height: 1.6;">
              ${message}
            </div>
          </div>

          <p style="margin-top: 32px; font-size: 13px; color: #999; text-align: center;">
            This message was sent from your portfolio contact form.
          </p>

          <div style="margin-top: 24px; text-align:center; font-size:13px; color:#666;">
            <a href="https://linkedin.com/in/tomas-urbano" style="color:${color}; text-decoration:none;">LinkedIn</a> •
            <a href="https://github.com/TomasUrbano1" style="color:${color}; text-decoration:none;">GitHub</a> •
            <a href="mailto:toomas.urbano14@gmail.com" style="color:${color}; text-decoration:none;">Email</a>
          </div>
        </div>
      </div>
    `;

    const darkTemplate = `
      <div style="font-family: Arial, sans-serif; padding: 24px; background-color: #0b0b0b;">
        <div style="max-width: 600px; margin: auto; background: #111; border-radius: 12px; padding: 32px; border: 1px solid #222; color: #e5e5e5;">
          
          <div style="text-align:center; margin-bottom: 24px;">
            <img src="${logoUrl}" width="48" height="48" alt="Logo" />
          </div>

          <h2 style="margin-top: 0; font-size: 24px; color: #fff;">
            📩 New Contact Message
          </h2>

          <p style="font-size: 16px; color: #ccc; line-height: 1.6;">
            You received a new message from your portfolio contact form.
          </p>

          <div style="margin-top: 24px;">
            <p style="font-size: 14px; color: #aaa; margin-bottom: 4px;">Sender Email:</p>
            <p style="font-size: 16px; color: #fff; font-weight: bold;">${email}</p>
          </div>

          <div style="margin-top: 24px;">
            <p style="font-size: 14px; color: #aaa; margin-bottom: 4px;">Message:</p>
            <div style="padding: 16px; background: #1a1a1a; border-radius: 8px; border: 1px solid #333; font-size: 15px; color: #ddd; line-height: 1.6;">
              ${message}
            </div>
          </div>

          <p style="margin-top: 32px; font-size: 13px; color: #777; text-align: center;">
            This message was sent from your portfolio contact form.
          </p>

          <div style="margin-top: 24px; text-align:center; font-size:13px; color:#999;">
            <a href="https://linkedin.com/in/tomas-urbano" style="color:${color}; text-decoration:none;">LinkedIn</a> •
            <a href="https://github.com/TomasUrbano1" style="color:${color}; text-decoration:none;">GitHub</a> •
            <a href="mailto:toomas.urbano14@gmail.com" style="color:${color}; text-decoration:none;">Email</a>
          </div>
        </div>
      </div>
    `;

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "toomas.urbano14@gmail.com",
      subject: "New message from your portfolio",
      html: darkTemplate,
      text: "New message from your portfolio",
      react: undefined,
      headers: {
        "X-Light-HTML": lightTemplate,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
