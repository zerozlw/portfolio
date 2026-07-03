"use client";

import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { useLanguage } from "@/lib/language-context";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="flex min-h-[85vh] items-center">
      <Container>
        <div className="max-w-3xl">
          <FadeIn>
            <h1 className="text-5xl font-normal tracking-tight text-foreground sm:text-6xl">
              {t.home.name}
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-6 text-lg text-muted">
              {t.home.roleLine}
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="mt-2 text-lg text-muted">
              {t.home.expLine}
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-6 text-2xl font-normal leading-relaxed text-foreground sm:text-3xl">
              {t.home.tagline}
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-10">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
              >
                {t.home.viewProjects}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
