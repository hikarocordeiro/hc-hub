"use client";

import { useState } from "react";
import { TurnstileWidget } from "@/components/contact/TurnstileWidget";
import { useTranslations } from "@/hooks/useTranslations";

const initialForm = {
  name: "",
  email: "",
  company: "",
  message: "",
  consent: false,
};

type Errors = Partial<Record<keyof typeof initialForm | "captcha", string>>;

const isEmailValid = (value: string) => /.+@.+\..+/.test(value);

export const ContactForm = () => {
  const { copy } = useTranslations();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [captchaToken, setCaptchaToken] = useState("");
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  const validate = () => {
    const nextErrors: Errors = {};
    if (!form.name.trim()) {
      nextErrors.name = copy.contact.errors.required;
    }
    if (!form.email.trim()) {
      nextErrors.email = copy.contact.errors.required;
    } else if (!isEmailValid(form.email)) {
      nextErrors.email = copy.contact.errors.invalidEmail;
    }
    if (!form.message.trim()) {
      nextErrors.message = copy.contact.errors.required;
    }
    if (!form.consent) {
      nextErrors.consent = copy.contact.errors.required;
    }
    if (!captchaToken) {
      nextErrors.captcha = copy.contact.captchaMissing;
    }
    return nextErrors;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    setStatus("submitting");
    setErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          message: form.message,
          lgpdConsent: form.consent,
          captchaToken,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setForm({ ...initialForm });
        setCaptchaToken("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Failed to submit contact form", error);
      setStatus("error");
    }
  };

  const handleChange = (field: keyof typeof initialForm, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    if (field === "consent") {
      setErrors((prev) => ({ ...prev, consent: undefined }));
    }
  };

  const isSubmitting = status === "submitting";
  const canSubmit =
    form.name.trim() &&
    form.email.trim() &&
    form.message.trim() &&
    form.consent &&
    !!captchaToken &&
    !isSubmitting;

  return (
    <form className="glass flex flex-col gap-5 p-6 text-slate-100" onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="name" className="font-semibold">
          {copy.contact.fields.name}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 p-3 text-white placeholder:text-slate-400 focus:border-sky-300 focus:outline-none"
          value={form.name}
          onChange={(event) => handleChange("name", event.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          required
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-rose-300" role="alert">
            {errors.name}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="email" className="font-semibold">
          {copy.contact.fields.email}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 p-3 text-white placeholder:text-slate-400 focus:border-sky-300 focus:outline-none"
          value={form.email}
          onChange={(event) => handleChange("email", event.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          required
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-rose-300" role="alert">
            {errors.email}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="company" className="font-semibold">
          {copy.contact.fields.company}
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 p-3 text-white placeholder:text-slate-400 focus:border-sky-300 focus:outline-none"
          value={form.company}
          onChange={(event) => handleChange("company", event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="message" className="font-semibold">
          {copy.contact.fields.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 p-3 text-white placeholder:text-slate-400 focus:border-sky-300 focus:outline-none"
          value={form.message}
          onChange={(event) => handleChange("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          required
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-rose-300" role="alert">
            {errors.message}
          </p>
        )}
      </div>
      <div className="flex gap-3">
        <input
          id="consent"
          type="checkbox"
          className="mt-1"
          checked={form.consent}
          onChange={(event) => handleChange("consent", event.target.checked)}
          required
        />
        <div>
          <label htmlFor="consent" className="font-semibold">
            {copy.contact.fields.consent}
          </label>
          <p className="text-sm text-slate-400">{copy.contact.fields.consentDescription}</p>
          {errors.consent && (
            <p className="mt-1 text-sm text-rose-300" role="alert">
              {errors.consent}
            </p>
          )}
        </div>
      </div>
      <div>
        <p className="text-sm font-medium">CAPTCHA</p>
        {siteKey ? (
          <TurnstileWidget siteKey={siteKey} onVerify={setCaptchaToken} />
        ) : (
          <p className="mt-2 text-sm text-rose-300">
            Configure NEXT_PUBLIC_TURNSTILE_SITE_KEY para habilitar o CAPTCHA.
          </p>
        )}
        {errors.captcha && (
          <p className="mt-1 text-sm text-rose-300" role="alert">
            {errors.captcha}
          </p>
        )}
      </div>
      <button type="submit" className="btn-primary" disabled={!canSubmit}>
        {isSubmitting ? "..." : copy.contact.fields.submit}
      </button>
      <div className="text-sm text-slate-300" aria-live="polite" role="status">
        {status === "success" && copy.contact.submitted}
        {status === "error" && copy.contact.serverError}
      </div>
    </form>
  );
};
