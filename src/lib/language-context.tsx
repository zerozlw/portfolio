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
    const next = locale === "en" ? "zh" : "en";

    try {
      // Find closest heading in current language container
      const container = document.querySelector(`[data-lang="${locale}"]`);
      if (container) {
        const headings = Array.from(container.querySelectorAll("h2, h3"));
        const center = window.scrollY + window.innerHeight / 2;
        let idx = 0;
        let best = Infinity;

        headings.forEach((h, i) => {
          const r = h.getBoundingClientRect();
          const d = Math.abs(window.scrollY + r.top + r.height / 2 - center);
          if (d < best) {
            best = d;
            idx = i;
          }
        });

        setLocale(next);
        localStorage.setItem("locale", next);

        // Scroll to same section in new language
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            const newContainer = document.querySelector(`[data-lang="${next}"]`);
            if (newContainer) {
              const newHeadings = Array.from(
                newContainer.querySelectorAll("h2, h3")
              );
              if (newHeadings[idx]) {
                const r = newHeadings[idx].getBoundingClientRect();
                window.scrollTo(0, window.scrollY + r.top - 80);
              }
            }
          });
        });
        return;
      }
    } catch (e) {
      // fallback
    }

    setLocale(next);
    localStorage.setItem("locale", next);
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
