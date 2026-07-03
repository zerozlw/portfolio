"use client";

import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";
import type { Article } from "@/types";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const { locale } = useLanguage();

  return (
    <Link href={`/writing/${article.slug}`} className="group block">
      <article className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg">
        <div className="flex items-center gap-3 text-sm text-muted">
          <time dateTime={article.date}>{formatDate(article.date)}</time>
          <span>·</span>
          <span>{article.readingTime}</span>
        </div>
        <h3 className="mt-3 text-lg font-medium text-foreground transition-colors group-hover:text-muted">
          {locale === "zh" ? article.titleZh : article.title}
        </h3>
        <p className="mt-2 text-sm text-muted">
          {locale === "zh" ? article.descriptionZh : article.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {(locale === "zh" ? article.tagsZh : article.tags).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-muted/50 px-3 py-1 text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </Link>
  );
}
