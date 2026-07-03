import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { WritingList } from "@/components/writing/WritingList";
import { getAllArticles } from "@/lib/writing";

export const metadata: Metadata = {
  title: "Writing",
  description: "Thoughts on AI products, workflow design, and developer tools.",
};

export default function WritingPage() {
  const articles = getAllArticles();

  return (
    <section className="pt-24 pb-24">
      <Container>
        <WritingList articles={articles} />
      </Container>
    </section>
  );
}
