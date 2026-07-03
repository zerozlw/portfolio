"use client";

import { ProjectCard } from "@/components/projects/ProjectCard";
import { FadeIn } from "@/components/shared/FadeIn";
import { useLanguage } from "@/lib/language-context";
import type { Project } from "@/types";

interface ProjectsListProps {
  projects: Project[];
}

export function ProjectsList({ projects }: ProjectsListProps) {
  const { t } = useLanguage();

  return (
    <>
      <FadeIn>
        <div className="mb-12 max-w-2xl">
          <h1 className="text-4xl font-normal tracking-tight text-foreground">
            {t.projects.title}
          </h1>
          <p className="mt-4 text-lg text-muted">{t.projects.description}</p>
        </div>
      </FadeIn>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <FadeIn key={project.slug} delay={index * 0.05}>
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>
    </>
  );
}
