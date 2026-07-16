"use client";

import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { motion } from "framer-motion";

const experimentsEn = [
  {
    title: "Meowup",
    description: "A stand-up timer that helps you track daily stand-ups with style",
    status: "live" as const,
    tags: ["Productivity", "Timer"],
    url: "https://zerozlw.github.io/meowup/",
    github: "https://github.com/zerozlw/meowup",
    rotate: { x: -4, y: 8, z: -6 },
    yOffset: 14,
    accent: "#8b5cf6",
    accentLight: "#ede9fe",
    accentDark: "#1e1b4b",
  },
  {
    title: "Arti",
    description: "Discover the connection between your personality and art",
    status: "building" as const,
    tags: ["AI", "Personality", "Art"],
    rotate: { x: 6, y: -5, z: 4 },
    yOffset: 4,
    accent: "#3b82f6",
    accentLight: "#dbeafe",
    accentDark: "#172554",
  },
  {
    title: "Claude Code",
    description: "Exploring AI-assisted development workflows",
    status: "live" as const,
    tags: ["AI", "Developer Tools"],
    rotate: { x: -2, y: -7, z: -3 },
    yOffset: 20,
    accent: "#f59e0b",
    accentLight: "#fef3c7",
    accentDark: "#451a03",
  },
  {
    title: "MCP Protocol",
    description: "Model Context Protocol integration tests",
    status: "experiment" as const,
    tags: ["AI", "Protocol"],
    rotate: { x: 5, y: 4, z: 5 },
    yOffset: 8,
    accent: "#10b981",
    accentLight: "#d1fae5",
    accentDark: "#022c22",
  },
  {
    title: "Prompt Library",
    description: "Collection of production-tested prompts",
    status: "live" as const,
    tags: ["AI", "Prompts"],
    rotate: { x: -5, y: 6, z: -4 },
    yOffset: 16,
    accent: "#f43f5e",
    accentLight: "#ffe4e6",
    accentDark: "#4c0519",
  },
];

const experimentsZh = [
  {
    title: "Meowup",
    description: "一个站立计时器，帮你用有趣的方式追踪每日站会",
    status: "live" as const,
    tags: ["效率工具", "计时器"],
    url: "https://zerozlw.github.io/meowup/",
    github: "https://github.com/zerozlw/meowup",
    rotate: { x: -4, y: 8, z: -6 },
    yOffset: 14,
    accent: "#8b5cf6",
    accentLight: "#ede9fe",
    accentDark: "#1e1b4b",
  },
  {
    title: "Arti",
    description: "发现你的性格与艺术之间的关联",
    status: "building" as const,
    tags: ["AI", "性格", "艺术"],
    rotate: { x: 6, y: -5, z: 4 },
    yOffset: 4,
    accent: "#3b82f6",
    accentLight: "#dbeafe",
    accentDark: "#172554",
  },
  {
    title: "Claude Code",
    description: "探索 AI 辅助开发工作流",
    status: "live" as const,
    tags: ["AI", "开发者工具"],
    rotate: { x: -2, y: -7, z: -3 },
    yOffset: 20,
    accent: "#f59e0b",
    accentLight: "#fef3c7",
    accentDark: "#451a03",
  },
  {
    title: "MCP Protocol",
    description: "Model Context Protocol 集成测试",
    status: "experiment" as const,
    tags: ["AI", "协议"],
    rotate: { x: 5, y: 4, z: 5 },
    yOffset: 8,
    accent: "#10b981",
    accentLight: "#d1fae5",
    accentDark: "#022c22",
  },
  {
    title: "Prompt Library",
    description: "经过生产验证的 Prompt 集合",
    status: "live" as const,
    tags: ["AI", "Prompts"],
    rotate: { x: -5, y: 6, z: -4 },
    yOffset: 16,
    accent: "#f43f5e",
    accentLight: "#ffe4e6",
    accentDark: "#4c0519",
  },
];

const statusColors = {
  live: "bg-green-500/10 text-green-700 dark:text-green-400",
  experiment: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400",
  building: "bg-blue-500/10 text-blue-700 dark:text-blue-400",
  archived: "bg-muted/50 text-muted",
};

function PlaygroundCard({
  item,
  index,
  locale,
  statusLabel,
  total,
}: {
  item: (typeof experimentsEn)[number];
  index: number;
  locale: string;
  statusLabel: string;
  total: number;
}) {
  return (
    <motion.div
      className="group relative shrink-0 cursor-pointer"
      style={{
        width: "280px",
        height: "360px",
        zIndex: index,
        transformStyle: "preserve-3d",
      }}
      initial={{
        y: item.yOffset,
        rotateX: item.rotate.x,
        rotateY: item.rotate.y,
        rotateZ: item.rotate.z,
      }}
      animate={{
        y: [item.yOffset, item.yOffset - 5, item.yOffset],
        rotateX: [item.rotate.x, item.rotate.x + 1.5, item.rotate.x],
        rotateY: [item.rotate.y, item.rotate.y - 1, item.rotate.y],
        rotateZ: [item.rotate.z, item.rotate.z + 0.8, item.rotate.z],
      }}
      whileHover={{
        y: -30,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1.06,
        zIndex: 50,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 22,
        y: { duration: 3 + index * 0.6, repeat: Infinity, ease: "easeInOut" },
        rotateX: { duration: 4 + index * 0.7, repeat: Infinity, ease: "easeInOut" },
        rotateY: { duration: 3.5 + index * 0.5, repeat: Infinity, ease: "easeInOut" },
        rotateZ: { duration: 3.2 + index * 0.4, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      {/* Card body — solid, premium */}
      <div
        className="relative h-full w-full rounded-2xl overflow-hidden"
        style={{
          background: `linear-gradient(145deg, ${item.accentLight}, #ffffff)`,
          boxShadow: `
            0 1px 2px rgba(0,0,0,0.04),
            0 4px 8px rgba(0,0,0,0.04),
            0 8px 16px rgba(0,0,0,0.04),
            0 16px 32px rgba(0,0,0,0.06),
            0 32px 64px rgba(0,0,0,0.08),
            inset 0 1px 0 rgba(255,255,255,0.8)
          `,
        }}
      >
        {/* Top color strip — the "thickness" edge */}
        <div
          className="absolute top-0 left-0 h-1.5 w-full"
          style={{
            background: `linear-gradient(90deg, ${item.accent}, ${item.accent}cc)`,
          }}
        />

        {/* Subtle inner glow on hover */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(ellipse at 30% 20%, ${item.accent}15, transparent 70%)`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col p-7">
          <div className="flex items-start justify-between">
            <h3
              className="text-xl font-bold tracking-tight"
              style={{ color: item.accentDark }}
            >
              {item.title}
            </h3>
            {item.status === "live" && (
              <ExternalLink
                size={16}
                className="mt-1 opacity-0 transition-opacity group-hover:opacity-100"
                style={{ color: item.accent }}
              />
            )}
          </div>

          <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-500">
            {item.description}
          </p>

          <div>
            <div className="mb-4 flex flex-wrap gap-1.5">
              <span
                className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
                style={{
                  backgroundColor: `${item.accent}18`,
                  color: item.accent,
                }}
              >
                {statusLabel}
              </span>
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border px-2.5 py-0.5 text-xs font-medium text-gray-400"
                  style={{ borderColor: `${item.accent}25` }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {"url" in item && item.url && (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                style={{ color: item.accent }}
                onClick={(e) => e.stopPropagation()}
              >
                {locale === "zh" ? "在线体验" : "Try it live"}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            )}
            {"github" in item && item.github && (
              <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1.5 block text-sm text-gray-400 transition-colors hover:text-gray-600"
                onClick={(e) => e.stopPropagation()}
              >
                GitHub →
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Card edge / thickness illusion */}
      <div
        className="absolute -bottom-1 left-1 right-1 h-3 rounded-b-2xl"
        style={{
          background: `linear-gradient(180deg, ${item.accent}20, ${item.accent}08)`,
          filter: "blur(2px)",
          zIndex: -1,
        }}
      />
    </motion.div>
  );
}

export default function PlaygroundPage() {
  const { locale, t } = useLanguage();
  const experiments = locale === "zh" ? experimentsZh : experimentsEn;

  return (
    <section className="pt-24 pb-24 overflow-hidden">
      <Container>
        <FadeIn>
          <div className="mb-16 max-w-2xl">
            <h1 className="text-4xl font-normal tracking-tight text-foreground">
              {t.playground.title}
            </h1>
            <p className="mt-4 text-lg text-muted">
              {t.playground.description}
            </p>
          </div>
        </FadeIn>
      </Container>

      {/* Horizontal scrolling card stack */}
      <FadeIn delay={0.15}>
        <div className="relative flex justify-center px-6">
          <div className="flex items-end gap-0" style={{ perspective: "1000px", transformStyle: "preserve-3d" }}>
            {experiments.map((item, index) => (
              <motion.div
                key={item.title}
                className="-ml-16 first:ml-0 relative"
                style={{ zIndex: index }}
                whileHover={{ zIndex: 50 }}
              >
                <PlaygroundCard
                  item={item}
                  index={index}
                  locale={locale}
                  statusLabel={t.playground[item.status]}
                  total={experiments.length}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
