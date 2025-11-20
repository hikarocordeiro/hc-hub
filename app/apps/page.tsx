"use client";

import { Boxes } from "lucide-react";
import { AppCard } from "@/components/apps/AppCard";
import { getAppCopy } from "@/data/apps";
import { useTranslations } from "@/hooks/useTranslations";

export default function AppsPage() {
  const { copy, locale } = useTranslations();
  const list = getAppCopy(locale);

  return (
    <div className="space-y-8">
      <header className="hero-grid rounded-3xl border border-white/10 p-8 text-center text-white shadow-2xl">
        <p className="pill inline-flex items-center justify-center gap-2">
          <Boxes className="h-4 w-4" />
          {copy.apps.subtitle}
        </p>
        <h1 className="mt-4 text-4xl font-semibold">{copy.apps.title}</h1>
        <p className="mx-auto mt-3 max-w-3xl text-lg text-slate-200">{copy.about.intro}</p>
      </header>
      <div className="grid gap-4 lg:grid-cols-2">
        {list.map((app) => (
          <AppCard
            key={app.id}
            title={app.title}
            description={app.description}
            badge={app.badge}
            url={app.url}
            actionLabel={copy.apps.cardCta}
          />
        ))}
      </div>
    </div>
  );
}
