"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { useLanguage } from "@/lib/language-context";

const featuredProjects = [
  {
    slug: "enterprise-ai-agent",
    titleEn: "Enterprise AI Agent",
    titleZh: "企业 AI Agent",
    descriptionEn: "An AI agent that automates complex enterprise workflows",
    descriptionZh: "自动化复杂企业工作流的 AI Agent",
    image: "/images/projects/arch-en.svg",
  },
  {
    slug: "nl-query",
    titleEn: "Natural Language Query",
    titleZh: "自然语言查询",
    descriptionEn: "Ask questions in plain English, get answers from your data",
    descriptionZh: "用自然语言提问，从数据中获取答案",
    image: "/images/projects/flow-en.svg",
  },
  {
    slug: "knowledge-expert",
    titleEn: "Knowledge Expert",
    titleZh: "知识专家",
    descriptionEn: "AI-powered knowledge base for engineering teams",
    descriptionZh: "面向工程团队的 AI 知识库",
    image: "/images/projects/idp-agent-promo.jpg",
  },
];

export function FeaturedProjects() {
  const { locale, t } = useLanguage();

  return (
    <section className="py-24">
      <Container>
        <SectionHeader title={t.home.selectedWork} />

        <div className="grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.1}>
              <Link href={`/projects/${project.slug}`} className="group block">
                <div className="overflow-hidden rounded-xl border border-border bg-white/70 transition-all duration-300 hover:shadow-lg hover:bg-white/90">
                  <div className="relative aspect-video overflow-hidden bg-white/50">
                    <Image
                      src={project.image}
                      alt={locale === "zh" ? project.titleZh : project.titleEn}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-foreground">
                      {locale === "zh" ? project.titleZh : project.titleEn}
                    </h3>
                    <p className="mt-2 text-sm text-muted">
                      {locale === "zh"
                        ? project.descriptionZh
                        : project.descriptionEn}
                    </p>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
