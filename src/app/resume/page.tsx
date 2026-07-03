"use client";

import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { Download } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const experiences = [
  {
    roleEn: "AI Product Manager",
    roleZh: "AI 产品经理",
    company: "Xiaomi EV",
    period: "2023 — Present",
    descriptionEn:
      "Leading AI product development for enterprise engineering workflows. Built AI agents, natural language query systems, and knowledge management platforms.",
    descriptionZh:
      "主导企业工程工作流的 AI 产品开发。构建了 AI Agent、自然语言查询系统和知识管理平台。",
  },
  {
    roleEn: "Product Manager",
    roleZh: "产品经理",
    company: "Xiaomi",
    period: "2021 — 2023",
    descriptionEn:
      "Managed product lifecycle for internal developer tools and platform services.",
    descriptionZh:
      "负责内部开发者工具和平台服务的产品全生命周期管理。",
  },
];

const skillsEn = [
  "AI Product Strategy",
  "Workflow Design",
  "LLM Application Development",
  "Developer Tools",
  "Enterprise Architecture",
  "User Research",
  "Data Analysis",
  "Technical Documentation",
];

const skillsZh = [
  "AI 产品策略",
  "工作流设计",
  "LLM 应用开发",
  "开发者工具",
  "企业架构",
  "用户研究",
  "数据分析",
  "技术文档",
];

export default function ResumePage() {
  const { locale, t } = useLanguage();
  const skills = locale === "zh" ? skillsZh : skillsEn;

  return (
    <section className="pt-24 pb-24">
      <Container>
        <FadeIn>
          <div className="mb-12 max-w-2xl">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-4xl font-normal tracking-tight text-foreground">
                  {t.resume.title}
                </h1>
                <p className="mt-4 text-lg text-muted">
                  {t.resume.description}
                </p>
              </div>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted transition-colors hover:text-foreground"
              >
                <Download size={14} />
                {t.resume.downloadPdf}
              </a>
            </div>
          </div>
        </FadeIn>

        <div className="mx-auto max-w-3xl">
          {/* Experience */}
          <FadeIn>
            <section className="mb-16">
              <h2 className="mb-8 text-xl font-normal text-foreground">
                {t.resume.experience}
              </h2>
              <div className="space-y-8">
                {experiences.map((exp) => (
                  <div key={exp.roleEn} className="border-l-2 border-border pl-6">
                    <div className="flex items-baseline justify-between">
                      <h3 className="text-lg font-medium text-foreground">
                        {locale === "zh" ? exp.roleZh : exp.roleEn}
                      </h3>
                      <span className="text-sm text-muted">{exp.period}</span>
                    </div>
                    <p className="mt-1 text-sm text-muted">{exp.company}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {locale === "zh" ? exp.descriptionZh : exp.descriptionEn}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* Skills */}
          <FadeIn delay={0.1}>
            <section>
              <h2 className="mb-8 text-xl font-normal text-foreground">
                {t.resume.coreSkills}
              </h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border px-4 py-2 text-sm text-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
