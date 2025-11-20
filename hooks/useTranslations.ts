"use client";

import { translations } from "@/lib/translations";
import { useLanguage } from "@/components/language/LanguageProvider";

export const useTranslations = () => {
  const { locale } = useLanguage();
  return { copy: translations[locale], locale };
};
