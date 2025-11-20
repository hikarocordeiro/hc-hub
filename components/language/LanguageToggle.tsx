"use client";

import { locales, type Locale } from "@/lib/translations";
import { useLanguage } from "./LanguageProvider";

export const LanguageToggle = () => {
  const { locale, setLocale } = useLanguage();

  const handleClick = (value: Locale) => () => {
    setLocale(value);
  };

  return (
    <div className="flex items-center rounded-full border border-white/10 bg-white/5 p-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
      {locales.map((value) => (
        <button
          key={value}
          type="button"
          onClick={handleClick(value)}
          className={`rounded-full px-3 py-1 transition-colors ${
            locale === value ? "bg-white text-slate-900" : "text-slate-400"
          }`}
          aria-pressed={locale === value}
        >
          {value}
        </button>
      ))}
    </div>
  );
};
