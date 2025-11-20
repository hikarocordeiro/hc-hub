"use client";

import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Server, Sparkles } from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";
import { getAppCopy } from "@/data/apps";
import { AppCard } from "@/components/apps/AppCard";

export default function HomePage() {
  const { copy, locale } = useTranslations();
  const appCards = getAppCopy(locale);
  const primaryApp = appCards[0];

  const heroFeatures =
    locale === "pt"
      ? [
          { icon: ShieldCheck, label: "Segurança e confiabilidade" },
          { icon: Server, label: "Infraestrutura dedicada" },
          { icon: Sparkles, label: "Atualizações constantes" },
        ]
      : [
          { icon: ShieldCheck, label: "Security and reliability" },
          { icon: Server, label: "Dedicated infrastructure" },
          { icon: Sparkles, label: "Continuous updates" },
        ];

  const highlights =
    locale === "pt"
      ? [
          {
            icon: ShieldCheck,
            title: "Confiabilidade",
            text: "Aplicações desenvolvidas com foco em estabilidade e segurança.",
          },
          {
            icon: Server,
            title: "Infraestrutura moderna",
            text: "Tecnologia atualizada para garantir performance e disponibilidade.",
          },
          {
            icon: Sparkles,
            title: "Experiência simplificada",
            text: "Interfaces limpas e intuitivas que facilitam o trabalho do dia a dia.",
          },
        ]
      : [
          {
            icon: ShieldCheck,
            title: "Reliability",
            text: "Applications built with focus on stability and security.",
          },
          {
            icon: Server,
            title: "Modern infrastructure",
            text: "Updated technology to ensure performance and availability.",
          },
          {
            icon: Sparkles,
            title: "Simplified experience",
            text: "Clean and intuitive interfaces that make daily work easier.",
          },
        ];

  return (
    <div className="space-y-12">
      <section className="hero-shell">
        <div className="hero-content space-y-6 text-white">
          <div className="space-y-3">
            <span className="pill inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4" />
              {copy.hero.pill}
            </span>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">{copy.hero.title}</h1>
            <p className="text-lg text-slate-200 sm:text-xl max-w-xl">{copy.hero.description}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/apps" className="btn-primary" aria-label={copy.hero.primaryCta}>
              {copy.hero.primaryCta}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/contact" className="btn-secondary" aria-label={copy.hero.secondaryCta}>
              {copy.hero.secondaryCta}
            </Link>
          </div>
        </div>
        <div className="hero-visual" aria-label={locale === "pt" ? "Destaques da plataforma" : "Platform highlights"}>
          <div className="hero-feature-grid">
            {heroFeatures.map(({ icon: Icon, label }) => (
              <div key={label} className="hero-feature-card">
                <Icon className="h-6 w-6 text-sky-200" aria-hidden="true" />
                <p className="text-sm font-medium text-white">{label}</p>
              </div>
            ))}
          </div>
          <div className="hero-visual-card">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-300">
                {locale === "pt" ? "Nossa abordagem" : "Our approach"}
              </p>
              <h3 className="text-lg font-semibold text-white">
                {locale === "pt"
                  ? "Tecnologia que funciona"
                  : "Technology that works"}
              </h3>
            </div>
            <p className="text-sm text-slate-300">
              {locale === "pt"
                ? "Desenvolvemos cada aplicação pensando em usabilidade, performance e resultados reais para nossos usuários."
                : "We develop each application with focus on usability, performance, and real results for our users."}
            </p>
          </div>
        </div>
      </section>

      {primaryApp && (
        <section className="space-y-5 rounded-3xl border border-white/10 p-8 text-white">
          <p className="pill inline-flex items-center gap-2">
            <Server className="h-4 w-4" />
            {primaryApp.badge}
          </p>
          <h2 className="text-3xl font-semibold">{primaryApp.title}</h2>
          <p className="text-lg text-slate-200">{primaryApp.description}</p>
          <div className="divider" />
          <Link
            href={primaryApp.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-lg font-semibold text-sky-200 hover:text-white"
          >
            {copy.apps.cardCta}
            <ArrowUpRight className="h-5 w-5" />
          </Link>
        </section>
      )}

      <section className="grid gap-4 md:grid-cols-3">
        {highlights.map(({ icon: Icon, title, text }) => (
          <div key={title} className="grid-card space-y-2">
            <Icon className="h-6 w-6 text-sky-200" />
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="text-sm text-slate-400">{text}</p>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-white/10 p-8 text-center text-white">
        <p className="pill inline-flex items-center justify-center gap-2">
          <ShieldCheck className="h-4 w-4" />
          {copy.contact.pill}
        </p>
        <h2 className="mt-4 text-3xl font-semibold">{copy.contact.title}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-300">{copy.contact.description}</p>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link href="/contact" className="btn-primary">
            {copy.contact.fields.submit}
          </Link>
          <Link href="/about" className="btn-secondary">
            {copy.navigation.about}
          </Link>
        </div>
      </section>
    </div>
  );
}
