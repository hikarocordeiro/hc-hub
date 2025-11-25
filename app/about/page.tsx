"use client";

import { Globe, Layers3, Lock } from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";

export default function AboutPage() {
  const { copy } = useTranslations();

  const highlights = [
    { icon: Globe, label: "hc-hub.com", text: copy.about.intro },
    { icon: Layers3, label: "Stack monitorado", text: copy.about.mission },
    { icon: Lock, label: "Segurança de dados", text: copy.about.detail },
  ];

  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <p className="pill inline-flex items-center gap-2">
          <Layers3 className="h-4 w-4" />
          {copy.about.title}
        </p>
        <h1 className="text-4xl font-semibold text-white">{copy.about.title}</h1>
        <p className="text-lg text-slate-300">
          HC Engenharia de Software Ltda é uma empresa dedicada a fornecer soluções
          inovadoras e de alta qualidade no campo da engenharia de software. Nossa missão
          é capacitar empresas e indivíduos com ferramentas tecnológicas que impulsionam
          a eficiência, segurança e crescimento sustentável.
        </p>
      </header>
      <div className="grid gap-4 md:grid-cols-3">
        {highlights.map(({ icon: Icon, label, text }) => (
          <div key={label} className="grid-card space-y-2">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-400">
              <Icon className="h-4 w-4" />
              {label}
            </div>
            <p className="text-sm text-slate-200">{text}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
