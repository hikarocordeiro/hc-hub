import { NextRequest, NextResponse } from "next/server";

const CONTACT_ENDPOINT = process.env.CONTACT_ENDPOINT;
const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY;

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

  // Validate CAPTCHA token before forwarding to contact@hc-hub.com (Stripe readiness requirement)
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

  if (!CONTACT_ENDPOINT) {
    return NextResponse.json({ error: "CONTACT_ENDPOINT not configured" }, { status: 500 });
  }

  try {
    const trapMailResponse = await fetch(CONTACT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        company,
        message,
        termsConsent,
        to: "contact@hc-hub.com",
        source: "hc-hub.com",
      }),
    });

    if (!trapMailResponse.ok) {
      console.error("TrapMail response", await trapMailResponse.text());
      return NextResponse.json({ error: "Unable to send message" }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to reach TrapMail endpoint", error);
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}
