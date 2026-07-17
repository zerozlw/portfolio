"use client";

import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

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
    image: "/images/projects/meowup-stand.png",
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
    image: "/images/projects/meowup-stand.png",
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
  const cardRef = useRef<HTMLDivElement>(null);

  // Magnetic mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const magneticX = useSpring(useTransform(mouseX, [-150, 150], [-12, 12]), springConfig);
  const magneticY = useSpring(useTransform(mouseY, [-150, 150], [-12, 12]), springConfig);

  // 3D tilt based on mouse
  const rotateYSpring = useSpring(useTransform(mouseX, [-150, 150], [-12, 12]), springConfig);
  const rotateXSpring = useSpring(useTransform(mouseY, [-150, 150], [10, -10]), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);

    // Update CSS custom properties for light reflection
    const percentX = ((e.clientX - rect.left) / rect.width) * 100;
    const percentY = ((e.clientY - rect.top) / rect.height) * 100;
    cardRef.current?.style.setProperty("--mouse-x", `${percentX}%`);
    cardRef.current?.style.setProperty("--mouse-y", `${percentY}%`);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className="group relative shrink-0 cursor-pointer"
      style={{
        width: "280px",
        height: "360px",
        zIndex: index,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => {
        if ("url" in item && item.url) {
          window.open(item.url, "_blank");
        } else if ("github" in item && item.github) {
          window.open(item.github, "_blank");
        }
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
      {/* Card body — solid, premium, with magnetic offset */}
      <motion.div
        className="relative h-full w-full rounded-2xl overflow-hidden"
        style={{
          x: magneticX,
          y: magneticY,
          rotateX: rotateXSpring,
          rotateY: rotateYSpring,
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

        {/* Material texture — subtle grain */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "128px 128px",
          }}
        />

        {/* Light reflection — follows mouse */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${item.accent}25, transparent 40%)`,
          }}
        />

        {/* Metallic edge highlight */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col p-7" style={{ pointerEvents: "auto" }}>
          <div className="flex items-start justify-between">
            <h3
              className="text-xl font-bold tracking-tight"
              style={{
                color: item.accentDark,
                textShadow: `0 1px 0 rgba(255,255,255,0.8), 0 -0.5px 0 rgba(0,0,0,0.05)`,
              }}
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

          {/* Cat illustration — appears on hover */}
          {"image" in item && item.image && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-90 pointer-events-none">
              <img
                src={item.image}
                alt={item.title}
                className="h-24 w-24 object-contain drop-shadow-lg transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-translate-y-1"
              />
            </div>
          )}

          <p
              className="mt-2 flex-1 text-sm leading-relaxed"
              style={{ color: "#6b7280", textShadow: `0 1px 0 rgba(255,255,255,0.6)` }}
            >
            {item.description}
          </p>

          <div>
            <div className="mb-4 flex flex-wrap gap-1.5">
              <span
                className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
                style={{
                  backgroundColor: `${item.accent}18`,
                  color: item.accent,
                  boxShadow: `inset 0 1px 0 rgba(255,255,255,0.6)`,
                }}
              >
                {statusLabel}
              </span>
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border px-2.5 py-0.5 text-xs font-medium"
                  style={{
                    borderColor: `${item.accent}25`,
                    color: `${item.accentDark}99`,
                    boxShadow: `inset 0 1px 0 rgba(255,255,255,0.6)`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

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
