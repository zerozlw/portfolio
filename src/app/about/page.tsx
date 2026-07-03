"use client";

import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { useLanguage } from "@/lib/language-context";

const interestsEn = [
  "AI Agent",
  "Workflow Automation",
  "Knowledge Base",
  "Developer Tools",
  "LLM Applications",
  "Product Strategy",
];

const interestsZh = [
  "AI Agent",
  "工作流自动化",
  "知识库",
  "开发者工具",
  "LLM 应用",
  "产品策略",
];

export default function AboutPage() {
  const { locale, t } = useLanguage();
  const interests = locale === "zh" ? interestsZh : interestsEn;

  return (
    <section className="pt-24 pb-24">
      <Container>
        <div className="mx-auto max-w-2xl">
          <FadeIn>
            <h1 className="text-4xl font-normal tracking-tight text-foreground">
              {t.about.title}
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-12 space-y-6 text-lg leading-relaxed text-muted">
              <p>{t.about.greeting}</p>
              <p>{t.about.intro1}</p>
              <p>{t.about.intro2}</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-16">
              <h2 className="mb-6 text-xl font-normal text-foreground">
                {t.about.interests}
              </h2>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-full border border-border px-4 py-2 text-sm text-muted"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-16">
              <h2 className="mb-6 text-xl font-normal text-foreground">
                {t.about.learning}
              </h2>
              <ul className="space-y-3 text-muted">
                {t.about.learningItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
