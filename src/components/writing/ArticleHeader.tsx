"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { formatDate } from "@/lib/utils";
import type { Article } from "@/types";

interface ArticleHeaderProps {
  article: Article;
}

export function ArticleHeader({ article }: ArticleHeaderProps) {
  const { locale, t } = useLanguage();

  return (
    <>
      <Link
        href="/writing"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
      >
        <ArrowLeft size={14} />
        {t.writing.allWriting}
      </Link>

      <div className="flex items-center gap-3 text-sm text-muted">
        <time dateTime={article.date}>{formatDate(article.date)}</time>
        <span>·</span>
        <span>{article.readingTime}</span>
      </div>
      <h1 className="mt-4 text-4xl font-normal tracking-tight text-foreground sm:text-5xl">
        {locale === "zh" ? article.titleZh : article.title}
      </h1>
      <p className="mt-4 text-xl text-muted">
        {locale === "zh" ? article.descriptionZh : article.description}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {(locale === "zh" ? article.tagsZh : article.tags).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-muted/50 px-3 py-1 text-xs text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  );
}
