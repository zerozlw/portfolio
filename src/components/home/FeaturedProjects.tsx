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
    titleZh: "可复用的企业级 AI Agent",
    descriptionEn: "What if enterprise platforms had their own brain?",
    descriptionZh: "如何让企业平台拥有一个自己的大脑？",
    image: "/images/projects/idp-agent-architecture.png",
  },
  {
    slug: "dvp-management",
    titleEn: "Change Impact Analysis Engine",
    titleZh: "自动化变更影响分析引擎",
    descriptionEn: "What if we turned the human analysis engine into a reusable one?",
    descriptionZh: "如果把人脑这台分析引擎通用化，会怎样？",
    image: "/images/projects/dvp-hero.jpg",
  },
  {
    slug: "monica-ai",
    titleEn: "User Research Reduces Churn",
    titleZh: "从一封卸载问卷到流失率砍半",
    descriptionEn: "User research-driven product optimization that halved the churn rate.",
    descriptionZh: "从一封卸载问卷出发，通过用户研究将流失率砍半。",
    image: "/images/projects/monica-hero.png",
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
                <div className="overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-lg min-w-0">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      alt={locale === "zh" ? project.titleZh : project.titleEn}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 overflow-hidden min-w-0">
                    <h3 className="text-lg font-medium text-foreground whitespace-nowrap overflow-hidden text-ellipsis max-w-full min-w-0 block">
                      {locale === "zh" ? project.titleZh : project.titleEn}
                    </h3>
                    {locale === "zh" ? (
                      <p className="mt-2 text-sm text-muted whitespace-nowrap overflow-hidden text-ellipsis">
                        {project.descriptionZh}
                      </p>
                    ) : (
                      <p className="mt-2 text-sm text-muted line-clamp-2">
                        {project.descriptionEn}
                      </p>
                    )}
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
