import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { MDXContent } from "@/components/writing/MDXContent";
import { ArticleHeader } from "@/components/writing/ArticleHeader";
import { getArticleBySlug, getArticleSlugs, getArticleContent } from "@/lib/writing";

export async function generateStaticParams() {
  const slugs = getArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const content = getArticleContent(slug);

  return (
    <article className="pt-24 pb-24">
      <Container className="mb-16">
        <div className="mx-auto max-w-3xl">
          <ArticleHeader article={article} />
        </div>
      </Container>

      <Container>
        <div className="mx-auto max-w-3xl">
          <MDXContent source={content} />
        </div>
      </Container>
    </article>
  );
}
