"use client";

import { useLanguage } from "@/lib/language-context";

interface LangSectionProps {
  children: React.ReactNode;
}

export function En({ children }: LangSectionProps) {
  const { locale } = useLanguage();
  if (locale !== "en") return null;
  return <>{children}</>;
}

export function Zh({ children }: LangSectionProps) {
  const { locale } = useLanguage();
  if (locale !== "zh") return null;
  return <>{children}</>;
}
