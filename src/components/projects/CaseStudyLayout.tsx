"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { FadeInSection } from "@/components/shared/FadeInSection";
import { TableOfContents } from "@/components/projects/TableOfContents";
import { formatDate } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";
import type { Project } from "@/types";

interface CaseStudyLayoutProps {
  project: Project;
  children: React.ReactNode;
}

export function CaseStudyLayout({ project, children }: CaseStudyLayoutProps) {
  const { locale, t } = useLanguage();

  return (
    <article className="pt-28 pb-32">
      {/* Back navigation */}
      <Container>
        <Link
          href="/projects"
          className="mb-12 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft size={14} />
          {t.projects.backToProjects}
        </Link>
      </Container>

      {/* Hero */}
      <Container className="mb-20">
        <div className="max-w-[42rem]">
          <FadeIn>
            <time dateTime={project.date} className="text-sm text-muted">
              {formatDate(project.date)}
            </time>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl leading-tight">
              {locale === "zh" ? project.titleZh : project.title}
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-5 text-lg text-muted leading-relaxed">
              {locale === "zh" ? project.descriptionZh : project.description}
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-6 flex flex-wrap gap-2">
              {(locale === "zh" ? project.tagsZh : project.tags).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-card border border-border px-3 py-1 text-xs text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </Container>

      {/* Hero Image */}
      <Container className="mb-20">
        <FadeIn delay={0.2}>
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-muted">
            <Image
              src={project.image}
              alt={locale === "zh" ? project.titleZh : project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </FadeIn>
      </Container>

      {/* Content */}
      <Container>
        <FadeInSection>
          <div className="mx-auto max-w-[42rem] prose prose-neutral dark:prose-invert prose-headings:font-semibold prose-headings:tracking-tight prose-p:text-muted prose-li:text-muted prose-strong:text-foreground prose-a:text-foreground prose-pre:bg-muted/50 prose-pre:border prose-pre:border-border">
            {children}
          </div>
        </FadeInSection>
      </Container>

      {/* Table of Contents - right side, desktop only */}
      <TableOfContents />
    </article>
  );
}
