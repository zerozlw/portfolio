"use client";

import Link from "next/link";
import Image from "next/image";
import { formatDateShort } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { locale } = useLanguage();

  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className="overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-lg">
        <div className="relative aspect-video overflow-hidden bg-muted">
          <Image
            src={project.image}
            alt={locale === "zh" ? project.titleZh : project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-medium text-foreground">
              {locale === "zh" ? project.titleZh : project.title}
            </h3>
            <span className="text-xs text-muted">
              {formatDateShort(project.date)}
            </span>
          </div>
          <p className="mt-2 text-sm text-muted">
            {locale === "zh" ? project.descriptionZh : project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {(locale === "zh" ? project.tagsZh : project.tags).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-black/5 dark:bg-white/10 px-3 py-1 text-xs text-black/40 dark:text-white/40"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
