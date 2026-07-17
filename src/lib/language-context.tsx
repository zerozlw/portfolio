"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { translations, type Locale, type Translations } from "@/lib/i18n";

interface LanguageContextType {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

function detectLocale(): Locale {
  // 1. Check localStorage first
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved && (saved === "en" || saved === "zh")) {
      return saved;
    }
  }

  // 2. Check browser language
  if (typeof navigator !== "undefined") {
    const lang = navigator.language.toLowerCase();
    if (lang.startsWith("zh")) {
      return "zh";
    }
  }

  // 3. Default to English
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLocaleState(detectLocale());
    setMounted(true);
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
  }, []);

  const t = translations[locale];

  // Prevent hydration mismatch by rendering children only after mount
  if (!mounted) {
    return (
      <LanguageContext.Provider value={{ locale: "en", t: translations.en, setLocale }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ locale, t, setLocale }}>
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
