import { notFound } from "next/navigation";
import { CaseStudyLayout } from "@/components/projects/CaseStudyLayout";
import { MDXContent } from "@/components/writing/MDXContent";
import { getProjectBySlug, getProjectSlugs, getProjectContent } from "@/lib/projects";

export async function generateStaticParams() {
  const slugs = getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const content = getProjectContent(slug);

  return (
    <CaseStudyLayout project={project}>
      <MDXContent source={content} />
    </CaseStudyLayout>
  );
}
