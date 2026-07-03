"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/layout/Container";
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
    <article className="pt-24 pb-24">
      {/* Back navigation */}
      <Container>
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft size={14} />
          {t.projects.backToProjects}
        </Link>
      </Container>

      {/* Hero */}
      <Container className="mb-16">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 text-sm text-muted">
            <time dateTime={project.date}>{formatDate(project.date)}</time>
          </div>
          <h1 className="mt-4 text-5xl font-normal tracking-tight text-foreground sm:text-6xl">
            {locale === "zh" ? project.titleZh : project.title}
          </h1>
          <p className="mt-4 text-xl text-muted">
            {locale === "zh" ? project.descriptionZh : project.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {(locale === "zh" ? project.tagsZh : project.tags).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-muted/50 px-3 py-1 text-xs text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Container>

      {/* Hero Image */}
      <Container className="mb-16">
        <div className="relative aspect-video overflow-hidden rounded-xl bg-muted">
          <Image
            src={project.image}
            alt={locale === "zh" ? project.titleZh : project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </Container>

      {/* Content */}
      <Container>
        <div className="mx-auto max-w-3xl prose prose-neutral dark:prose-invert prose-headings:font-normal prose-headings:tracking-tight prose-p:text-muted prose-li:text-muted prose-strong:text-foreground prose-a:text-foreground prose-pre:bg-muted/50 prose-pre:border prose-pre:border-border">
          {children}
        </div>
      </Container>
    </article>
  );
}
