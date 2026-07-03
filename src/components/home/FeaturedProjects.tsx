"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { useLanguage } from "@/lib/language-context";
import { getAllProjects } from "@/lib/projects";

export function FeaturedProjects() {
  const { locale, t } = useLanguage();
  const projects = getAllProjects().filter((p) => p.featured).slice(0, 3);

  return (
    <section className="py-24">
      <Container>
        <SectionHeader title={t.home.selectedWork} />

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.1}>
              <Link href={`/projects/${project.slug}`} className="group block">
                <div className="overflow-hidden rounded-xl border border-border bg-white/70 transition-all duration-300 hover:shadow-lg hover:bg-white/90">
                  <div className="relative aspect-video overflow-hidden bg-white/50">
                    <Image
                      src={project.image}
                      alt={locale === "zh" ? project.titleZh : project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-foreground">
                      {locale === "zh" ? project.titleZh : project.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted">
                      {locale === "zh"
                        ? project.descriptionZh
                        : project.description}
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
