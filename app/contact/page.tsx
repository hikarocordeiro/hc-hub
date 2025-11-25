"use client";

import { Mail, Shield, Clock3 } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { useTranslations } from "@/hooks/useTranslations";

export default function ContactPage() {
  const { copy } = useTranslations();

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

        <ContactForm />
      </div>
    </div>
  );
}
