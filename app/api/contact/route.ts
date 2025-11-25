import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY;
const MAILTRAP_API_TOKEN = process.env.MAILTRAP_API_TOKEN;
const MAILTRAP_FROM_EMAIL = process.env.MAILTRAP_FROM_EMAIL || "noreply@hc-hub.com";
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "hello@hc-hub.com";

export async function POST(req: NextRequest) {
  const { name, email, company, message, termsConsent, captchaToken } = await req.json();

  if (!name || !email || !message || !termsConsent) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  if (!captchaToken) {
    return NextResponse.json({ error: "Missing CAPTCHA token" }, { status: 400 });
  }

  if (!TURNSTILE_SECRET_KEY) {
    return NextResponse.json({ error: "TURNSTILE_SECRET_KEY not configured" }, { status: 500 });
  }

  // Validate CAPTCHA token
  const captchaResponse = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `secret=${encodeURIComponent(TURNSTILE_SECRET_KEY)}&response=${encodeURIComponent(captchaToken)}`,
  });

  const captchaResult = await captchaResponse.json();
  if (!captchaResult.success) {
    return NextResponse.json({ error: "CAPTCHA validation failed" }, { status: 400 });
  }

  if (!MAILTRAP_API_TOKEN) {
    return NextResponse.json({ error: "MAILTRAP_API_TOKEN not configured" }, { status: 500 });
  }

  try {
    // Configure Mailtrap SMTP transport
    const transport = nodemailer.createTransport({
      host: "live.smtp.mailtrap.io",
      port: 587,
      auth: {
        user: "api",
        pass: MAILTRAP_API_TOKEN,
      },
    });

    // Prepare email content
    const companyText = company ? `\nEmpresa: ${company}` : "";
    const emailContent = `
Nova mensagem de contato do HC Hub

Nome: ${name}
E-mail: ${email}${companyText}

Mensagem:
${message}

---
Consentimento: Usuário aceitou os Termos de Uso e Política de Privacidade
Origem: hc-hub.com
    `.trim();

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #0ea5e9; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f8f9fa; padding: 20px; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #0ea5e9; }
    .message-box { background: white; padding: 15px; border-left: 4px solid #0ea5e9; margin: 15px 0; }
    .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin: 0;">Nova Mensagem de Contato</h2>
      <p style="margin: 5px 0 0 0; opacity: 0.9;">HC Hub - hc-hub.com</p>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">Nome:</span> ${name}
      </div>
      <div class="field">
        <span class="label">E-mail:</span> <a href="mailto:${email}">${email}</a>
      </div>
      ${company ? `<div class="field"><span class="label">Empresa:</span> ${company}</div>` : ""}
      <div class="message-box">
        <div class="label">Mensagem:</div>
        <p>${message.replace(/\n/g, "<br>")}</p>
      </div>
      <div class="footer">
        <p>✓ Usuário aceitou os Termos de Uso e Política de Privacidade</p>
        <p>Origem: hc-hub.com | Data: ${new Date().toLocaleString("pt-BR")}</p>
      </div>
    </div>
  </div>
</body>
</html>
    `.trim();

    // Send email
    await transport.sendMail({
      from: MAILTRAP_FROM_EMAIL,
      to: CONTACT_EMAIL,
      subject: `[HC Hub] Nova mensagem de ${name}`,
      text: emailContent,
      html: htmlContent,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send email via Mailtrap:", error);
    return NextResponse.json({ error: "Unable to send message" }, { status: 500 });
  }
}
