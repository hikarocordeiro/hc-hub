"use client";

import { Mail, Shield, Clock3 } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { useTranslations } from "@/hooks/useTranslations";

export default function ContactPage() {
  const { copy } = useTranslations();

  const info = [
    {
      icon: Mail,
      title: "contact@hc-hub.com",
      description: copy.contact.description,
    },
    {
      icon: Shield,
      title: "LGPD + Turnstile",
      description: copy.contact.fields.consentDescription,
    },
    {
      icon: Clock3,
      title: copy.contact.pill,
      description: copy.contact.submitted,
    },
  ];

  return (
    <div className="space-y-8">
      <header className="space-y-4">
        <p className="pill inline-flex items-center gap-2">
          <Shield className="h-4 w-4" />
          {copy.contact.pill}
        </p>
        <div className="space-y-3">
          <h1 className="text-4xl font-semibold text-white">{copy.contact.title}</h1>
          <p className="max-w-3xl text-lg text-slate-300">{copy.contact.description}</p>
        </div>
      </header>
      <div className="grid gap-6 lg:grid-cols-[1fr,1.1fr]">
        <div className="space-y-4">
          {info.map(({ icon: Icon, title, description }) => (
            <div key={title} className="grid-card flex gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sky-200">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-base font-semibold text-white">{title}</p>
                <p className="text-sm text-slate-400">{description}</p>
              </div>
            </div>
          ))}
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
