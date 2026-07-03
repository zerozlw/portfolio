import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { Article } from "@/types";

const writingDirectory = path.join(process.cwd(), "src/content/writing");

export function getAllArticles(): Article[] {
  const files = fs.readdirSync(writingDirectory);

  const articles = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const filePath = path.join(writingDirectory, file);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);
      const stats = readingTime(content);

      return {
        slug,
        title: data.title || "",
        titleZh: data.titleZh || data.title || "",
        description: data.description || "",
        descriptionZh: data.descriptionZh || data.description || "",
        date: data.date || "",
        tags: data.tags || [],
        tagsZh: data.tagsZh || data.tags || [],
        readingTime: stats.text.replace("min read", "min"),
      };
    });

  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getAllArticles().find((a) => a.slug === slug);
}

export function getArticleSlugs(): string[] {
  return getAllArticles().map((a) => a.slug);
}

export function getArticleContent(slug: string): string {
  const filePath = path.join(writingDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content } = matter(fileContents);
  return content;
}
