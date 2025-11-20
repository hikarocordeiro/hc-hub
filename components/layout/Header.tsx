"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShieldCheck, ArrowUpRight } from "lucide-react";
import { LanguageToggle } from "@/components/language/LanguageToggle";
import { useTranslations } from "@/hooks/useTranslations";
import type { TranslationSchema } from "@/lib/translations";

const navOrder: Array<{ key: keyof TranslationSchema["navigation"]; href: string }> = [
  { key: "home", href: "/" },
  { key: "apps", href: "/apps" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
];

export const Header = () => {
  const pathname = usePathname();
  const { copy } = useTranslations();
  const nav = copy.navigation;

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[rgba(2,6,23,0.9)] backdrop-blur-xl">
      <div className="flex w-full items-center justify-between px-6 py-4 sm:px-10">
        <Link href="/" className="flex items-center gap-2 text-base font-semibold tracking-tight text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-primary">
            <ShieldCheck className="h-5 w-5" />
          </span>
          HC Hub
        </Link>
        <nav className="hidden gap-6 text-sm font-medium md:flex">
          {navOrder.map(({ key, href }) => (
            <Link
              key={key}
              href={href}
              className={
                pathname === href
                  ? "text-white"
                  : "text-muted hover:text-white"
              }
            >
              {nav[key]}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <Link href="/contact" className="btn-primary hidden text-sm md:inline-flex">
            {nav.contact}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
};
