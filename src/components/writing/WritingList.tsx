"use client";

import { ArticleCard } from "@/components/writing/ArticleCard";
import { FadeIn } from "@/components/shared/FadeIn";
import { useLanguage } from "@/lib/language-context";
import type { Article } from "@/types";

interface WritingListProps {
  articles: Article[];
}

export function WritingList({ articles }: WritingListProps) {
  const { t } = useLanguage();

  return (
    <>
      <FadeIn>
        <div className="mb-12 max-w-2xl">
          <h1 className="text-4xl font-normal tracking-tight text-foreground">
            {t.writing.title}
          </h1>
          <p className="mt-4 text-lg text-muted">{t.writing.description}</p>
        </div>
      </FadeIn>

      <div className="grid gap-4 md:grid-cols-2">
        {articles.map((article, index) => (
          <FadeIn key={article.slug} delay={index * 0.05}>
            <ArticleCard article={article} />
          </FadeIn>
        ))}
      </div>
    </>
  );
}
