"use client";

import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { useLanguage } from "@/lib/language-context";
import { PlaygroundScene } from "@/components/about/PlaygroundScene";

export default function AboutPage() {
  const { t, locale } = useLanguage();

  return (
    <section className="pt-28 pb-32">
      <Container>
        {/* Hero */}
        <FadeIn>
          <div className="mb-12 max-w-2xl">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground">
              {locale === "zh" ? "关于我" : "About Me"}
            </h1>
            <p className="mt-4 text-lg text-muted">
              {locale === "zh"
                ? "工作之余，我在游乐场里培养自己的爱好。"
                : "Outside of work, I cultivate my interests in a playground of my own."}
            </p>
          </div>
        </FadeIn>

        {/* Playground Scene */}
        <FadeIn delay={0.1}>
          <PlaygroundScene locale={locale} />
        </FadeIn>

        {/* Philosophy */}
        <FadeIn delay={0.2}>
          <div className="mt-16 max-w-[42rem]">
            <h2 className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted/60 flex items-center gap-2.5">
              <span className="inline-block w-[3px] h-[0.75em] bg-[#a78bfa] rounded-sm opacity-50" />
              {t.about.philosophy}
            </h2>
            <ul className="space-y-3">
              {t.about.philosophyItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-muted/40" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {/* Currently */}
        <FadeIn delay={0.3}>
          <div className="mt-16 max-w-[42rem]">
            <h2 className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted/60 flex items-center gap-2.5">
              <span className="inline-block w-[3px] h-[0.75em] bg-[#a78bfa] rounded-sm opacity-50" />
              {t.about.currently}
            </h2>
            <ul className="space-y-3">
              {t.about.currentlyItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-muted/40" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {/* Connect */}
        <FadeIn delay={0.4}>
          <div className="mt-16 max-w-[42rem]">
            <h2 className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted/60 flex items-center gap-2.5">
              <span className="inline-block w-[3px] h-[0.75em] bg-[#a78bfa] rounded-sm opacity-50" />
              {t.about.connect}
            </h2>
            <a
              href="mailto:zooonz@agent.qq.com"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              zooonz@agent.qq.com
            </a>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
