"use client";

import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const experimentsEn = [
  {
    title: "Claude Code",
    description: "Exploring AI-assisted development workflows",
    status: "live" as const,
    tags: ["AI", "Developer Tools"],
  },
  {
    title: "Codex",
    description: "OpenAI's code generation in practice",
    status: "experiment" as const,
    tags: ["AI", "Code Generation"],
  },
  {
    title: "Cursor",
    description: "AI-native code editor experiments",
    status: "live" as const,
    tags: ["AI", "IDE"],
  },
  {
    title: "MCP Protocol",
    description: "Model Context Protocol integration tests",
    status: "experiment" as const,
    tags: ["AI", "Protocol"],
  },
  {
    title: "RAG Pipeline",
    description: "Retrieval-augmented generation for enterprise docs",
    status: "live" as const,
    tags: ["AI", "Knowledge Base"],
  },
  {
    title: "Workflow Engine",
    description: "Visual workflow builder with AI nodes",
    status: "experiment" as const,
    tags: ["AI", "Automation"],
  },
  {
    title: "Prompt Library",
    description: "Collection of production-tested prompts",
    status: "live" as const,
    tags: ["AI", "Prompts"],
  },
  {
    title: "Tool Calling",
    description: "Function calling patterns and best practices",
    status: "experiment" as const,
    tags: ["AI", "Agents"],
  },
];

const experimentsZh = [
  {
    title: "Claude Code",
    description: "探索 AI 辅助开发工作流",
    status: "live" as const,
    tags: ["AI", "开发者工具"],
  },
  {
    title: "Codex",
    description: "OpenAI 代码生成实践",
    status: "experiment" as const,
    tags: ["AI", "代码生成"],
  },
  {
    title: "Cursor",
    description: "AI 原生代码编辑器实验",
    status: "live" as const,
    tags: ["AI", "IDE"],
  },
  {
    title: "MCP Protocol",
    description: "Model Context Protocol 集成测试",
    status: "experiment" as const,
    tags: ["AI", "协议"],
  },
  {
    title: "RAG Pipeline",
    description: "企业文档的检索增强生成",
    status: "live" as const,
    tags: ["AI", "知识库"],
  },
  {
    title: "Workflow Engine",
    description: "带 AI 节点的可视化工作流构建器",
    status: "experiment" as const,
    tags: ["AI", "自动化"],
  },
  {
    title: "Prompt Library",
    description: "经过生产验证的 Prompt 集合",
    status: "live" as const,
    tags: ["AI", "Prompts"],
  },
  {
    title: "Tool Calling",
    description: "函数调用模式与最佳实践",
    status: "experiment" as const,
    tags: ["AI", "Agent"],
  },
];

const statusColors = {
  live: "bg-green-500/10 text-green-700 dark:text-green-400",
  experiment: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400",
  archived: "bg-muted/50 text-muted",
};

export default function PlaygroundPage() {
  const { locale, t } = useLanguage();
  const experiments = locale === "zh" ? experimentsZh : experimentsEn;

  return (
    <section className="pt-24 pb-24">
      <Container>
        <FadeIn>
          <div className="mb-12 max-w-2xl">
            <h1 className="text-4xl font-normal tracking-tight text-foreground">
              {t.playground.title}
            </h1>
            <p className="mt-4 text-lg text-muted">
              {t.playground.description}
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {experiments.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.05}>
              <div className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-medium text-foreground">
                    {item.title}
                  </h3>
                  {item.status === "live" && (
                    <ExternalLink
                      size={14}
                      className="text-muted opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  )}
                </div>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
                <div className="mt-4 flex items-center gap-2">
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusColors[item.status]}`}
                  >
                    {t.playground[item.status]}
                  </span>
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-muted/50 px-2.5 py-0.5 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
