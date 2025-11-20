"use client";

import { Boxes } from "lucide-react";
import { AppCard } from "@/components/apps/AppCard";
import { getAppCopy } from "@/data/apps";
import { useTranslations } from "@/hooks/useTranslations";

export default function AppsPage() {
  const { copy, locale } = useTranslations();
  const list = getAppCopy(locale);

  return (
    <div className="space-y-12">
      <header className="animate-fadeUp">
        <div className="mb-8">
          <p className="pill mb-4 inline-flex items-center gap-2">
            <Boxes className="h-4 w-4" />
            {copy.apps.pillLabel}
          </p>
          <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
            {copy.apps.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">
            {copy.apps.description}
          </p>
        </div>
        <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-br from-slate-900/60 to-slate-900/40 p-6 backdrop-blur-sm md:p-8">
          <p className="leading-relaxed text-slate-400">
            {copy.apps.subtitle}
          </p>
        </div>
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
