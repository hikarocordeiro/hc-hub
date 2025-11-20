"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Locale, locales } from "@/lib/translations";

const STORAGE_KEY = "hc-hub-locale";

const LanguageContext = createContext<{
  locale: Locale;
  setLocale: (value: Locale) => void;
}>({
  locale: "pt",
  setLocale: () => undefined,
});

type Props = {
  initialLocale: Locale;
  children: React.ReactNode;
};

export const LanguageProvider = ({ initialLocale, children }: Props) => {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === "undefined") {
      return initialLocale;
    }
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && locales.includes(stored as Locale)) {
      return stored as Locale;
    }
    return initialLocale;
  });

  const setLocale = useCallback((value: Locale) => {
    setLocaleState(value);
    window.localStorage.setItem(STORAGE_KEY, value);
    const expiryDays = 180;
    const expires = new Date();
    expires.setDate(expires.getDate() + expiryDays);
    document.cookie = `${STORAGE_KEY}=${value}; path=/; expires=${expires.toUTCString()}`;
  }, []);

  const value = useMemo(() => ({ locale, setLocale }), [locale, setLocale]);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
};
