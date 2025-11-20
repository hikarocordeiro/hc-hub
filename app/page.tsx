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
    <div className="space-y-16">
      <section className="hero-shell">
        <div className="hero-content space-y-8 text-white">
          <div className="space-y-4">
            <span className="pill inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4" />
              {copy.hero.pill}
            </span>
            <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl text-white">
              {copy.hero.title}
            </h1>
            <p className="text-lg sm:text-xl max-w-xl leading-relaxed" style={{color: '#cbd5e1'}}>
              {copy.hero.description}
            </p>
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
          <div className="hero-visual-card space-y-4">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.2em] font-medium" style={{color: '#9ca3af'}}>
                  {locale === "pt" ? "Plataforma" : "Platform"}
                </p>
                <h3 className="text-2xl font-bold text-white">
                  {locale === "pt" ? "HC Hub" : "HC Hub"}
                </h3>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full" style={{background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)'}}>
                <span className="w-2 h-2 rounded-full" style={{background: '#10b981', boxShadow: '0 0 8px rgba(16, 185, 129, 0.6)'}} />
                <span className="text-xs font-semibold" style={{color: '#10b981'}}>
                  {locale === "pt" ? "Ativo" : "Active"}
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{color: '#cbd5e1'}}>
              {locale === "pt"
                ? "Ecossistema integrado de aplicações web para gestão, automação e monitoramento de processos profissionais."
                : "Integrated ecosystem of web applications for professional process management, automation, and monitoring."}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="hero-stat-card">
              <Server className="h-5 w-5 mb-2" style={{color: '#38bdf8'}} />
              <p className="text-2xl font-bold text-white">1</p>
              <p className="text-xs" style={{color: '#9ca3af'}}>
                {locale === "pt" ? "Aplicação" : "Application"}
              </p>
            </div>
            <div className="hero-stat-card">
              <ShieldCheck className="h-5 w-5 mb-2" style={{color: '#38bdf8'}} />
              <p className="text-2xl font-bold text-white">HTTPS</p>
              <p className="text-xs" style={{color: '#9ca3af'}}>
                {locale === "pt" ? "Seguro" : "Secure"}
              </p>
            </div>
            <div className="hero-stat-card">
              <Sparkles className="h-5 w-5 mb-2" style={{color: '#38bdf8'}} />
              <p className="text-2xl font-bold text-white">24/7</p>
              <p className="text-xs" style={{color: '#9ca3af'}}>
                {locale === "pt" ? "Disponível" : "Available"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {primaryApp && (
        <section className="space-y-5 rounded-3xl border p-10 text-white" style={{borderColor: 'var(--border-subtle)', background: 'var(--color-bg-elevated)'}}>
          <p className="pill inline-flex items-center gap-2">
            <Server className="h-4 w-4" />
            {primaryApp.badge}
          </p>
          <h2 className="text-4xl font-bold text-white">{primaryApp.title}</h2>
          <p className="text-lg leading-relaxed" style={{color: '#cbd5e1'}}>{primaryApp.description}</p>
          <div className="divider" />
          <Link
            href={primaryApp.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-lg font-semibold hover:text-white transition-colors"
            style={{color: '#38bdf8'}}
          >
            {copy.apps.cardCta}
            <ArrowUpRight className="h-5 w-5" />
          </Link>
        </section>
      )}

      <section className="grid gap-6 md:grid-cols-3">
        {highlights.map(({ icon: Icon, title, text }) => (
          <div key={title} className="grid-card space-y-3">
            <div className="flex items-center gap-3">
              <Icon className="h-7 w-7 text-sky-400 shrink-0" />
              <h3 className="text-xl font-semibold text-white">{title}</h3>
            </div>
            <p className="text-sm leading-relaxed" style={{color: '#9ca3af'}}>{text}</p>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border p-10 text-center text-white" style={{borderColor: 'var(--border-subtle)', background: 'var(--color-bg-elevated)'}}>
        <p className="pill inline-flex items-center justify-center gap-2">
          <ShieldCheck className="h-4 w-4" />
          {copy.contact.pill}
        </p>
        <h2 className="mt-6 text-4xl font-bold text-white">{copy.contact.title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed" style={{color: '#cbd5e1'}}>
          {copy.contact.description}
        </p>
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
