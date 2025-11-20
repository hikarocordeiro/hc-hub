"use client";

import { useTranslations } from "@/hooks/useTranslations";

export default function PrivacyPage() {
  const { copy } = useTranslations();
  const { legal } = copy;

  return (
    <article className="glass space-y-5 p-8 text-slate-100">
      <div>
        <p className="pill inline-block">{legal.updatedAt}</p>
        <h1 className="mt-4 text-3xl font-semibold text-white">{legal.privacyTitle}</h1>
      </div>
      <div className="space-y-4 text-sm text-slate-300">
        {legal.privacyContent.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
