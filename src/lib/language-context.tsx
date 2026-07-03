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
    // Find the section heading closest to viewport center (only visible ones)
    const headings = Array.from(document.querySelectorAll("h2, h3")).filter(
      (el) => {
        const style = window.getComputedStyle(el);
        return style.display !== "none" && style.visibility !== "hidden";
      }
    );

    const viewportCenter = window.scrollY + window.innerHeight / 2;
    let closestHeading: Element | null = null;
    let minDistance = Infinity;

    headings.forEach((h) => {
      const rect = h.getBoundingClientRect();
      const headingCenter = window.scrollY + rect.top + rect.height / 2;
      const distance = Math.abs(headingCenter - viewportCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestHeading = h;
      }
    });

    // Find the index of this heading among all headings in its parent
    let headingIndex = -1;
    if (closestHeading) {
      const allHeadings = Array.from(
        closestHeading!.parentElement!.querySelectorAll("h2, h3")
      );
      headingIndex = allHeadings.indexOf(closestHeading!);
    }

    // Switch language
    const next = locale === "en" ? "zh" : "en";
    setLocale(next);
    localStorage.setItem("locale", next);

    // After render, scroll to the corresponding heading in the new language
    if (headingIndex >= 0) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const newHeadings = Array.from(
            document.querySelectorAll("h2, h3")
          ).filter((el) => {
            const style = window.getComputedStyle(el);
            return style.display !== "none" && style.visibility !== "hidden";
          });

          if (newHeadings[headingIndex]) {
            const rect = newHeadings[headingIndex].getBoundingClientRect();
            const targetY = window.scrollY + rect.top - 80; // 80px offset for navbar
            window.scrollTo({ top: targetY, behavior: "instant" });
          }
        });
      });
    }
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
