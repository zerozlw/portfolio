"use client";

import { useLanguage } from "@/lib/language-context";
import { useState, useRef } from "react";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleEnter = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timerRef.current = setTimeout(() => setOpen(false), 150);
  };

  const handleSelect = (lang: "en" | "zh") => {
    setLocale(lang);
    setOpen(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        className="flex h-8 items-center rounded-md px-2.5 text-sm text-muted transition-colors hover:text-foreground"
        aria-label="Toggle language"
      >
        {locale === "zh" ? "语言" : "Language"}
        <svg
          className={`ml-1 h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className={`absolute right-0 top-full mt-1 w-32 overflow-hidden rounded-lg border border-border bg-background shadow-lg transition-all duration-150 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-1 pointer-events-none"
        }`}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <button
          onClick={() => handleSelect("zh")}
          className={`flex w-full items-center px-3 py-2 text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 ${
            locale === "zh" ? "text-foreground font-medium" : "text-muted"
          }`}
        >
          中文
          {locale === "zh" && (
            <svg className="ml-auto h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </button>
        <button
          onClick={() => handleSelect("en")}
          className={`flex w-full items-center px-3 py-2 text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 ${
            locale === "en" ? "text-foreground font-medium" : "text-muted"
          }`}
        >
          English
          {locale === "en" && (
            <svg className="ml-auto h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
