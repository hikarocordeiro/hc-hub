"use client";

import { useTranslations } from "@/hooks/useTranslations";

export default function TermsPage() {
  const { copy } = useTranslations();
  const { legal } = copy;

  return (
    <article className="glass space-y-8 p-8 text-slate-100 md:p-12">
      <div className="space-y-3">
        <p className="pill inline-block">{legal.updatedAt}</p>
        <h1 className="text-4xl font-bold text-white md:text-5xl">{legal.termsTitle}</h1>
        <div className="space-y-1 text-sm text-slate-400">
          <p><strong>Domain:</strong> {legal.domain}</p>
          <p><strong>Controller:</strong> {legal.controller}</p>
          <p><strong>Contact:</strong> {legal.email}</p>
        </div>
      </div>

      <div className="space-y-8">
        {legal.termsSections.map((section, index) => (
          <section key={index} className="space-y-3">
            <h2 className="text-xl font-bold text-white">{section.title}</h2>
            <div className="space-y-3 text-sm leading-relaxed text-slate-300">
              {section.content.map((paragraph, pIndex) => (
                <p key={pIndex}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
