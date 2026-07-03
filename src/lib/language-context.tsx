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

  const toggleLanguage = useCallback(() => {
    // Find headings only within the CURRENT language container
    const currentContainer = document.querySelector(
      `[data-lang="${locale}"]`
    );
    if (!currentContainer) return;

    const headings = Array.from(
      currentContainer.querySelectorAll("h2, h3")
    );

    const viewportCenter = window.scrollY + window.innerHeight / 2;
    let closestIndex = 0;
    let minDistance = Infinity;

    headings.forEach((h, i) => {
      const rect = h.getBoundingClientRect();
      const headingCenter = window.scrollY + rect.top + rect.height / 2;
      const distance = Math.abs(headingCenter - viewportCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = i;
      }
    });

    // Switch language
    const next = locale === "en" ? "zh" : "en";
    setLocale(next);
    localStorage.setItem("locale", next);

    // After render, find the same-indexed heading in the NEW language container
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const newContainer = document.querySelector(`[data-lang="${next}"]`);
        if (!newContainer) return;

        const newHeadings = Array.from(
          newContainer.querySelectorAll("h2, h3")
        );

        if (newHeadings[closestIndex]) {
          const rect = newHeadings[closestIndex].getBoundingClientRect();
          const targetY = window.scrollY + rect.top - 80;
          window.scrollTo({ top: targetY, behavior: "instant" });
        }
      });
    });
  }, [locale]);

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
