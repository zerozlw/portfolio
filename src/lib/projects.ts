import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Project } from "@/types";

const projectsDirectory = path.join(process.cwd(), "src/content/projects");

export function getAllProjects(): Project[] {
  const files = fs.readdirSync(projectsDirectory);

  const projects = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const filePath = path.join(projectsDirectory, file);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || "",
        titleZh: data.titleZh || data.title || "",
        description: data.description || "",
        descriptionZh: data.descriptionZh || data.description || "",
        date: data.date || "",
        image: data.image || "/images/projects/default.png",
        tags: data.tags || [],
        tagsZh: data.tagsZh || data.tags || [],
        featured: data.featured || false,
        order: data.order || 99,
      };
    });

  return projects.sort((a, b) => a.order - b.order);
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects()
    .filter((p) => p.featured)
    .slice(0, 3);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((p) => p.slug === slug);
}

export function getProjectSlugs(): string[] {
  return getAllProjects().map((p) => p.slug);
}

export function getProjectContent(slug: string): string {
  const filePath = path.join(projectsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content } = matter(fileContents);
  return content;
}
