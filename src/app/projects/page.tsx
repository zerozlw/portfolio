import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ProjectsList } from "@/components/projects/ProjectsList";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected AI product case studies and projects.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <section className="pt-24 pb-24">
      <Container>
        <ProjectsList projects={projects} />
      </Container>
    </section>
  );
}
