"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const rides = [
  {
    id: "ferris-wheel",
    name: "Ferris Wheel",
    nameZh: "摩天轮",
    hobby: "Photography",
    hobbyZh: "摄影",
    description: "缓慢上升，俯瞰世界，发现不同角度。",
    descriptionZh: "Slowly rising to see the world from different angles.",
    color: "#8b5cf6",
    emoji: "📸",
  },
  {
    id: "art-pavilion",
    name: "Art Pavilion",
    nameZh: "画亭",
    hobby: "Painting",
    hobbyZh: "绘画",
    description: "自由挥洒色彩的创意空间。",
    descriptionZh: "A creative space to freely splash colors.",
    color: "#f43f5e",
    emoji: "🎨",
  },
  {
    id: "roller-coaster",
    name: "Roller Coaster",
    nameZh: "过山车",
    hobby: "Design",
    hobbyZh: "设计",
    description: "在约束中寻找刺激，起承转合。",
    descriptionZh: "Finding thrills within constraints.",
    color: "#f59e0b",
    emoji: "🎮",
  },
  {
    id: "botanical-garden",
    name: "Botanical Garden",
    nameZh: "植物园",
    hobby: "Plant Care",
    hobbyZh: "养绿植",
    description: "需要耐心，每天浇水，慢慢生长。",
    descriptionZh: "Patience, daily watering, slow growth.",
    color: "#10b981",
    emoji: "🌿",
  },
  {
    id: "fairy-castle",
    name: "Fairy Castle",
    nameZh: "童话城堡",
    hobby: "Reading",
    hobbyZh: "阅读",
    description: "每本书是一扇门，通往新世界。",
    descriptionZh: "Every book is a door to a new world.",
    color: "#3b82f6",
    emoji: "📚",
  },
];

function RideInfo({ ride, locale }: { ride: (typeof rides)[number]; locale: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="absolute -top-2 left-1/2 z-30 w-56 -translate-x-1/2 -translate-y-full rounded-xl border border-border bg-white p-4 shadow-xl dark:bg-gray-900"
      style={{ pointerEvents: "none" }}
    >
      <div className="mb-2 flex items-center gap-2">
        <span className="text-xl">{ride.emoji}</span>
        <div>
          <p className="text-xs font-semibold" style={{ color: ride.color }}>
            {locale === "zh" ? ride.hobbyZh : ride.hobby}
          </p>
          <p className="text-sm font-bold text-foreground">
            {locale === "zh" ? ride.nameZh : ride.name}
          </p>
        </div>
      </div>
      <p className="text-xs leading-relaxed text-muted">
        {locale === "zh" ? ride.descriptionZh : ride.description}
      </p>
      {/* Arrow */}
      <div className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rotate-45 border-r border-b border-border bg-white dark:bg-gray-900" />
    </motion.div>
  );
}

export function PlaygroundScene({ locale }: { locale: string }) {
  const [active, setActive] = useState<string | null>(null);
  const activeRide = rides.find((r) => r.id === active);

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-sky-100 to-green-50 dark:from-gray-800 dark:to-gray-900">
      {/* SVG Scene */}
      <svg
        viewBox="0 0 800 500"
        className="w-full"
        style={{ maxHeight: "500px" }}
      >
        {/* Sky gradient */}
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e0f2fe" />
            <stop offset="100%" stopColor="#dbeafe" />
          </linearGradient>
          <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#86efac" />
            <stop offset="100%" stopColor="#4ade80" />
          </linearGradient>
        </defs>

        {/* Sky */}
        <rect width="800" height="350" fill="url(#sky)" />

        {/* Clouds */}
        <g opacity="0.6">
          <ellipse cx="150" cy="60" rx="60" ry="20" fill="white" />
          <ellipse cx="180" cy="50" rx="40" ry="15" fill="white" />
          <ellipse cx="500" cy="80" rx="50" ry="18" fill="white" />
          <ellipse cx="520" cy="70" rx="35" ry="14" fill="white" />
          <ellipse cx="700" cy="50" rx="45" ry="16" fill="white" />
        </g>

        {/* Ground */}
        <path d="M0,350 Q200,330 400,340 Q600,350 800,335 L800,500 L0,500 Z" fill="url(#ground)" />

        {/* Paths */}
        <path d="M100,400 Q250,380 400,390 Q550,400 700,385" stroke="#d4a574" strokeWidth="8" fill="none" opacity="0.4" strokeLinecap="round" />
        <path d="M200,420 Q350,400 500,410 Q650,420 750,405" stroke="#d4a574" strokeWidth="5" fill="none" opacity="0.3" strokeLinecap="round" />

        {/* === Rides === */}

        {/* 1. Ferris Wheel ( Photography) — left side */}
        <g
          className="cursor-pointer transition-all duration-300"
          style={{ filter: active === "ferris-wheel" ? "drop-shadow(0 4px 12px rgba(139,92,246,0.4))" : "none" }}
          onMouseEnter={() => setActive("ferris-wheel")}
          onMouseLeave={() => setActive(null)}
          transform="translate(120, 180)"
        >
          {/* Base */}
          <rect x="-8" y="100" width="16" height="30" rx="3" fill="#6d28d9" />
          <rect x="-40" y="125" width="80" height="8" rx="4" fill="#7c3aed" />
          {/* Wheel structure */}
          <circle cx="0" cy="50" r="55" fill="none" stroke="#8b5cf6" strokeWidth="3" />
          <circle cx="0" cy="50" r="5" fill="#8b5cf6" />
          {/* Spokes */}
          {[0, 45, 90, 135].map((angle) => (
            <line
              key={angle}
              x1={Math.cos((angle * Math.PI) / 180) * 55}
              y1={50 + Math.sin((angle * Math.PI) / 180) * 55}
              x2={-Math.cos((angle * Math.PI) / 180) * 55}
              y2={50 - Math.sin((angle * Math.PI) / 180) * 55}
              stroke="#a78bfa"
              strokeWidth="1.5"
            />
          ))}
          {/* Cabins */}
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <rect
              key={angle}
              x={Math.cos((angle * Math.PI) / 180) * 55 - 8}
              y={50 + Math.sin((angle * Math.PI) / 180) * 55 - 6}
              width="16"
              height="12"
              rx="3"
              fill="#c4b5fd"
              stroke="#8b5cf6"
              strokeWidth="1"
            />
          ))}
        </g>

        {/* 2. Art Pavilion (Painting) — center-left */}
        <g
          className="cursor-pointer transition-all duration-300"
          style={{ filter: active === "art-pavilion" ? "drop-shadow(0 4px 12px rgba(244,63,94,0.4))" : "none" }}
          onMouseEnter={() => setActive("art-pavilion")}
          onMouseLeave={() => setActive(null)}
          transform="translate(320, 240)"
        >
          {/* Roof */}
          <polygon points="-45,0 0,-35 45,0" fill="#f43f5e" />
          <polygon points="-40,-5 0,-30 40,-5" fill="#fb7185" />
          {/* Pillars */}
          <rect x="-38" y="0" width="8" height="80" rx="2" fill="#fda4af" />
          <rect x="30" y="0" width="8" height="80" rx="2" fill="#fda4af" />
          {/* Floor */}
          <rect x="-45" y="75" width="90" height="10" rx="3" fill="#fecdd3" />
          {/* Canvas on wall */}
          <rect x="-25" y="15" width="50" height="35" rx="2" fill="white" stroke="#fda4af" strokeWidth="1.5" />
          {/* Paint splashes */}
          <circle cx="-10" cy="28" r="5" fill="#f43f5e" opacity="0.6" />
          <circle cx="5" cy="22" r="4" fill="#fb923c" opacity="0.5" />
          <circle cx="15" cy="32" r="3" fill="#a78bfa" opacity="0.5" />
          {/* Easel */}
          <line x1="-15" y1="55" x2="0" y2="50" stroke="#92400e" strokeWidth="2" />
          <line x1="15" y1="55" x2="0" y2="50" stroke="#92400e" strokeWidth="2" />
        </g>

        {/* 3. Roller Coaster (Design) — center */}
        <g
          className="cursor-pointer transition-all duration-300"
          style={{ filter: active === "roller-coaster" ? "drop-shadow(0 4px 12px rgba(245,158,11,0.4))" : "none" }}
          onMouseEnter={() => setActive("roller-coaster")}
          onMouseLeave={() => setActive(null)}
          transform="translate(500, 200)"
        >
          {/* Track */}
          <path
            d="M-60,120 Q-40,40 0,60 Q40,80 60,20 Q80,-20 100,30 L100,120"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M-60,120 Q-40,40 0,60 Q40,80 60,20 Q80,-20 100,30 L100,120"
            fill="none"
            stroke="#fbbf24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="4 6"
          />
          {/* Supports */}
          {[-40, 0, 40, 80].map((x) => (
            <line key={x} x1={x} y1={120} x2={x} y2={50 + Math.abs(x) * 0.3} stroke="#92400e" strokeWidth="2" />
          ))}
          {/* Cart */}
          <rect x="-5" y="50" width="20" height="12" rx="4" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="0" cy="65" r="4" fill="#78350f" />
          <circle cx="12" cy="65" r="4" fill="#78350f" />
          {/* Base */}
          <rect x="-65" y="118" width="170" height="6" rx="3" fill="#d97706" />
        </g>

        {/* 4. Botanical Garden (Plant Care) — right-center */}
        <g
          className="cursor-pointer transition-all duration-300"
          style={{ filter: active === "botanical-garden" ? "drop-shadow(0 4px 12px rgba(16,185,129,0.4))" : "none" }}
          onMouseEnter={() => setActive("botanical-garden")}
          onMouseLeave={() => setActive(null)}
          transform="translate(650, 250)"
        >
          {/* Greenhouse dome */}
          <ellipse cx="0" cy="50" rx="55" ry="45" fill="#d1fae5" stroke="#10b981" strokeWidth="2" />
          <ellipse cx="0" cy="50" rx="55" ry="45" fill="none" stroke="#6ee7b7" strokeWidth="1" strokeDasharray="3 5" />
          {/* Structure lines */}
          <line x1="-55" y1="50" x2="55" y2="50" stroke="#10b981" strokeWidth="1" opacity="0.5" />
          <line x1="0" y1="5" x2="0" y2="95" stroke="#10b981" strokeWidth="1" opacity="0.5" />
          {/* Plants inside */}
          <circle cx="-20" cy="60" r="12" fill="#34d399" opacity="0.7" />
          <circle cx="15" cy="55" r="10" fill="#6ee7b7" opacity="0.7" />
          <circle cx="-5" cy="45" r="8" fill="#a7f3d0" opacity="0.8" />
          <circle cx="25" cy="65" r="9" fill="#34d399" opacity="0.6" />
          {/* Flowers */}
          <circle cx="-15" cy="40" r="3" fill="#f472b6" />
          <circle cx="20" cy="42" r="2.5" fill="#fb923c" />
          <circle cx="5" cy="38" r="2" fill="#c084fc" />
          {/* Door */}
          <rect x="-10" y="75" width="20" height="20" rx="10" fill="#059669" />
        </g>

        {/* 5. Fairy Castle (Reading) — far right */}
        <g
          className="cursor-pointer transition-all duration-300"
          style={{ filter: active === "fairy-castle" ? "drop-shadow(0 4px 12px rgba(59,130,246,0.4))" : "none" }}
          onMouseEnter={() => setActive("fairy-castle")}
          onMouseLeave={() => setActive(null)}
          transform="translate(380, 130)"
        >
          {/* Main tower */}
          <rect x="-30" y="30" width="60" height="100" rx="4" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
          {/* Towers */}
          <rect x="-50" y="50" width="30" height="80" rx="3" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="1.5" />
          <rect x="20" y="50" width="30" height="80" rx="3" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="1.5" />
          {/* Roof */}
          <polygon points="-30,30 0,-10 30,30" fill="#3b82f6" />
          <polygon points="-50,50 -35,20 -20,50" fill="#60a5fa" />
          <polygon points="20,50 35,20 50,50" fill="#60a5fa" />
          {/* Flags */}
          <line x1="0" y1="-10" x2="0" y2="-25" stroke="#3b82f6" strokeWidth="1.5" />
          <polygon points="0,-25 15,-20 0,-15" fill="#f43f5e" />
          {/* Windows */}
          <rect x="-15" y="50" width="12" height="16" rx="6" fill="#93c5fd" />
          <rect x="3" y="50" width="12" height="16" rx="6" fill="#93c5fd" />
          <rect x="-15" y="80" width="12" height="16" rx="6" fill="#93c5fd" />
          <rect x="3" y="80" width="12" height="16" rx="6" fill="#93c5fd" />
          {/* Door */}
          <rect x="-10" y="100" width="20" height="30" rx="10" fill="#1e40af" />
          <circle cx="6" cy="115" r="2" fill="#fbbf24" />
          {/* Base wall */}
          <rect x="-60" y="125" width="120" height="10" rx="3" fill="#93c5fd" />
        </g>

        {/* Decorative elements */}
        {/* Trees */}
        <g transform="translate(50, 300)">
          <rect x="-3" y="0" width="6" height="20" rx="2" fill="#92400e" />
          <circle cx="0" cy="-8" r="18" fill="#22c55e" />
          <circle cx="-8" cy="-2" r="12" fill="#16a34a" />
          <circle cx="8" cy="-4" r="14" fill="#4ade80" />
        </g>
        <g transform="translate(750, 310)">
          <rect x="-3" y="0" width="6" height="18" rx="2" fill="#92400e" />
          <circle cx="0" cy="-6" r="15" fill="#22c55e" />
          <circle cx="-6" cy="0" r="10" fill="#16a34a" />
        </g>

        {/* Lamp posts */}
        <g transform="translate(250, 360)">
          <rect x="-2" y="0" width="4" height="40" rx="2" fill="#78350f" />
          <circle cx="0" cy="-3" r="6" fill="#fbbf24" opacity="0.8" />
          <circle cx="0" cy="-3" r="3" fill="#fef3c7" />
        </g>
        <g transform="translate(550, 355)">
          <rect x="-2" y="0" width="4" height="35" rx="2" fill="#78350f" />
          <circle cx="0" cy="-3" r="6" fill="#fbbf24" opacity="0.8" />
          <circle cx="0" cy="-3" r="3" fill="#fef3c7" />
        </g>

        {/* Banner */}
        <text x="400" y="470" textAnchor="middle" fill="#374151" fontSize="14" fontWeight="600" fontFamily="system-ui">
          {locale === "zh" ? "✨ Zoe 的游乐场 ✨" : "✨ Zoe's Playground ✨"}
        </text>
      </svg>

      {/* Tooltip overlay */}
      <AnimatePresence>
        {activeRide && (
          <div
            className="absolute"
            style={{
              left: getTooltipPosition(activeRide.id).x,
              top: getTooltipPosition(activeRide.id).y,
            }}
          >
            <RideInfo ride={activeRide} locale={locale} />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function getTooltipPosition(id: string) {
  const positions: Record<string, { x: string; y: string }> = {
    "ferris-wheel": { x: "15%", y: "25%" },
    "art-pavilion": { x: "35%", y: "35%" },
    "roller-coaster": { x: "58%", y: "20%" },
    "botanical-garden": { x: "78%", y: "35%" },
    "fairy-castle": { x: "45%", y: "10%" },
  };
  return positions[id] || { x: "50%", y: "50%" };
}
