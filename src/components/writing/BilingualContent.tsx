"use client";

import { useLanguage } from "@/lib/language-context";

interface LangSectionProps {
  children: React.ReactNode;
}

export function En({ children }: LangSectionProps) {
  const { locale } = useLanguage();
  return (
    <div style={{ display: locale === "en" ? "block" : "none" }}>
      {children}
    </div>
  );
}

export function Zh({ children }: LangSectionProps) {
  const { locale } = useLanguage();
  return (
    <div style={{ display: locale === "zh" ? "block" : "none" }}>
      {children}
    </div>
  );
}
