"use client";

import { useLanguage } from "@/lib/language-context";

export function LanguageToggle() {
  const { locale, toggleLanguage, t } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex h-8 items-center rounded-md px-2 text-sm text-muted transition-colors hover:text-foreground"
      aria-label={t.theme.toggle}
    >
      {locale === "en" ? "中文" : "EN"}
    </button>
  );
}
