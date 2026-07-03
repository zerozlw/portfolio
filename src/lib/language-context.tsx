"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { translations, type Locale, type Translations } from "@/lib/i18n";

interface LanguageContextType {
  locale: Locale;
  t: Translations;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved && (saved === "en" || saved === "zh")) {
      setLocale(saved);
    }
  }, []);

  const toggleLanguage = () => {
    const scrollY = window.scrollY;
    const next = locale === "en" ? "zh" : "en";
    document.documentElement.style.scrollBehavior = "auto";
    setLocale(next);
    localStorage.setItem("locale", next);
    requestAnimationFrame(() => {
      window.scrollTo(0, scrollY);
      requestAnimationFrame(() => {
        document.documentElement.style.scrollBehavior = "";
      });
    });
  };

  const t = translations[locale];

  return (
    <LanguageContext.Provider value={{ locale, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
