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
    accent: "#8B5CF6",
    emoji: "📸",
    size: "lg" as const,
  },
  {
    id: "fairy-castle",
    name: "Fairy Castle",
    nameZh: "童话城堡",
    hobby: "Reading",
    hobbyZh: "阅读",
    description: "每本书是一扇门，通往新世界。",
    descriptionZh: "Every book is a door to a new world.",
    accent: "#3B82F6",
    emoji: "📚",
    size: "lg" as const,
  },
  {
    id: "roller-coaster",
    name: "Roller Coaster",
    nameZh: "过山车",
    hobby: "Design",
    hobbyZh: "设计",
    description: "在约束中寻找刺激，起承转合。",
    descriptionZh: "Finding thrills within constraints.",
    accent: "#F59E0B",
    emoji: "🎮",
    size: "md" as const,
  },
  {
    id: "botanical-garden",
    name: "Botanical Garden",
    nameZh: "植物园",
    hobby: "Plant Care",
    hobbyZh: "养绿植",
    description: "需要耐心，每天浇水，慢慢生长。",
    descriptionZh: "Patience, daily watering, slow growth.",
    accent: "#10B981",
    emoji: "🌿",
    size: "md" as const,
  },
  {
    id: "art-pavilion",
    name: "Art Pavilion",
    nameZh: "画亭",
    hobby: "Painting",
    hobbyZh: "绘画",
    description: "自由挥洒色彩的创意空间。",
    descriptionZh: "A creative space to freely splash colors.",
    accent: "#F43F5E",
    emoji: "🎨",
    size: "sm" as const,
  },
];

function RideInfo({ ride, locale }: { ride: (typeof rides)[number]; locale: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute -top-2 left-1/2 z-30 w-52 -translate-x-1/2 -translate-y-full rounded-2xl bg-white p-4 shadow-[0_8px_30px_rgba(0,0,0,0.12)] dark:bg-gray-800"
      style={{ pointerEvents: "none" }}
    >
      <div className="mb-2 flex items-center gap-2">
        <span className="text-lg">{ride.emoji}</span>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: ride.accent }}>
            {locale === "zh" ? ride.hobbyZh : ride.hobby}
          </p>
          <p className="text-sm font-bold text-gray-800 dark:text-gray-100">
            {locale === "zh" ? ride.nameZh : ride.name}
          </p>
        </div>
      </div>
      <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">
        {locale === "zh" ? ride.descriptionZh : ride.description}
      </p>
      <div className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rotate-45 bg-white shadow-[4px_4px_8px_rgba(0,0,0,0.06)] dark:bg-gray-800" />
    </motion.div>
  );
}

export function PlaygroundScene({ locale }: { locale: string }) {
  const [active, setActive] = useState<string | null>(null);
  const activeRide = rides.find((r) => r.id === active);

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-gray-200/60 bg-gradient-to-br from-[#F0FDF4] via-[#EFF6FF] to-[#FDF2F8] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)]">
      <svg viewBox="0 0 900 520" className="w-full" style={{ maxHeight: "520px" }}>
        <defs>
          <filter id="sh" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000" floodOpacity="0.07" />
          </filter>
          <filter id="sh-lg" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="3" dy="6" stdDeviation="5" floodColor="#000" floodOpacity="0.1" />
          </filter>
        </defs>

        {/* ===== GROUND — multi-layer isometric ===== */}
        {/* Back layer */}
        <path d="M50,400 L450,470 L850,400 L450,330 Z" fill="#D1FAE5" />
        {/* Middle layer */}
        <path d="M80,410 L450,475 L820,410 L450,345 Z" fill="#A7F3D0" />
        {/* Front face left */}
        <path d="M80,410 L450,475 L450,495 L80,430 Z" fill="#6EE7B7" />
        {/* Front face right */}
        <path d="M450,475 L820,410 L820,430 L450,495 Z" fill="#34D399" />
        {/* Top surface highlight */}
        <path d="M120,405 L450,468 L780,405 L450,342 Z" fill="#D1FAE5" opacity="0.5" />

        {/* ===== PATHS — connecting rides ===== */}
        <path d="M160,410 Q250,395 340,405 Q430,415 520,400" stroke="#FDE68A" strokeWidth="6" fill="none" opacity="0.5" strokeLinecap="round" />
        <path d="M340,405 Q400,390 460,395 Q520,400 580,390" stroke="#FDE68A" strokeWidth="5" fill="none" opacity="0.4" strokeLinecap="round" />
        <path d="M520,400 Q600,385 680,395 Q740,400 790,390" stroke="#FDE68A" strokeWidth="5" fill="none" opacity="0.4" strokeLinecap="round" />

        {/* ===== 1. FERRIS WHEEL — main, large, left ===== */}
        <g
          className="cursor-pointer"
          filter={active === "ferris-wheel" ? "url(#sh-lg)" : "url(#sh)"}
          onMouseEnter={() => setActive("ferris-wheel")}
          onMouseLeave={() => setActive(null)}
          style={{ transition: "filter 0.3s" }}
          transform="translate(180, 155)"
        >
          {/* Base platform on ground */}
          <path d="M-35,185 L0,200 L35,185 L0,170 Z" fill="#C4B5FD" />
          <path d="M-35,185 L0,200 L0,208 L-35,193 Z" fill="#A78BFA" />
          <path d="M0,200 L35,185 L35,193 L0,208 Z" fill="#8B5CF6" />
          {/* Support legs */}
          <line x1="-20" y1="180" x2="-30" y2="195" stroke="#A78BFA" strokeWidth="4" strokeLinecap="round" />
          <line x1="20" y1="180" x2="30" y2="195" stroke="#A78BFA" strokeWidth="4" strokeLinecap="round" />
          {/* Wheel */}
          <circle cx="0" cy="80" r="70" fill="none" stroke="#DDD6FE" strokeWidth="6" />
          <circle cx="0" cy="80" r="62" fill="none" stroke="#EDE9FE" strokeWidth="2" />
          <circle cx="0" cy="80" r="7" fill="#A78BFA" />
          {/* Spokes */}
          {[0, 45, 90, 135].map((a) => (
            <line key={a} x1={Math.cos((a * Math.PI) / 180) * 62} y1={80 + Math.sin((a * Math.PI) / 180) * 62} x2={-Math.cos((a * Math.PI) / 180) * 62} y2={80 - Math.sin((a * Math.PI) / 180) * 62} stroke="#DDD6FE" strokeWidth="1.5" />
          ))}
          {/* Cabins */}
          {[0, 60, 120, 180, 240, 300].map((a) => {
            const cx = Math.cos((a * Math.PI) / 180) * 65
            const cy = 80 + Math.sin((a * Math.PI) / 180) * 65
            return (
              <g key={a}>
                <rect x={cx - 8} y={cy - 6} width="16" height="12" rx="4" fill="#EDE9FE" stroke="#C4B5FD" strokeWidth="1.5" />
                <rect x={cx - 5} y={cy - 3} width="10" height="5" rx="2" fill="#DDD6FE" opacity="0.6" />
              </g>
            )
          })}
        </g>

        {/* ===== 2. FAIRY CASTLE — main, large, center-left ===== */}
        <g
          className="cursor-pointer"
          filter={active === "fairy-castle" ? "url(#sh-lg)" : "url(#sh)"}
          onMouseEnter={() => setActive("fairy-castle")}
          onMouseLeave={() => setActive(null)}
          style={{ transition: "filter 0.3s" }}
          transform="translate(380, 140)"
        >
          {/* Ground platform */}
          <path d="M-50,195 L0,215 L50,195 L0,175 Z" fill="#BAE6FD" />
          <path d="M-50,195 L0,215 L0,223 L-50,203 Z" fill="#7DD3FC" />
          <path d="M0,215 L50,195 L50,203 L0,223 Z" fill="#38BDF8" />
          {/* Main tower */}
          <rect x="-28" y="50" width="56" height="125" rx="3" fill="#BAE6FD" stroke="#7DD3FC" strokeWidth="1.5" />
          {/* Side towers */}
          <rect x="-50" y="75" width="30" height="100" rx="2" fill="#E0F2FE" stroke="#7DD3FC" strokeWidth="1" />
          <rect x="20" y="75" width="30" height="100" rx="2" fill="#E0F2FE" stroke="#7DD3FC" strokeWidth="1" />
          {/* Roofs */}
          <polygon points="-28,50 0,18 28,50" fill="#3B82F6" />
          <polygon points="-50,75 -35,42 -20,75" fill="#60A5FA" />
          <polygon points="20,75 35,42 50,75" fill="#60A5FA" />
          {/* Flags */}
          <line x1="0" y1="18" x2="0" y2="2" stroke="#3B82F6" strokeWidth="1.5" />
          <polygon points="0,2 14,7 0,12" fill="#F43F5E" />
          <line x1="-35" y1="42" x2="-35" y2="30" stroke="#60A5FA" strokeWidth="1" />
          <polygon points="-35,30 -26,34 -35,38" fill="#FBBF24" />
          {/* Windows */}
          <rect x="-14" y="68" width="12" height="16" rx="6" fill="#DBEAFE" />
          <rect x="2" y="68" width="12" height="16" rx="6" fill="#DBEAFE" />
          <rect x="-14" y="100" width="12" height="16" rx="6" fill="#DBEAFE" />
          <rect x="2" y="100" width="12" height="16" rx="6" fill="#DBEAFE" />
          {/* Door */}
          <rect x="-9" y="140" width="18" height="35" rx="9" fill="#1E40AF" />
          <circle cx="5" cy="158" r="2" fill="#FBBF24" />
        </g>

        {/* ===== 3. ROLLER COASTER — secondary, center ===== */}
        <g
          className="cursor-pointer"
          filter={active === "roller-coaster" ? "url(#sh-lg)" : "url(#sh)"}
          onMouseEnter={() => setActive("roller-coaster")}
          onMouseLeave={() => setActive(null)}
          style={{ transition: "filter 0.3s" }}
          transform="translate(560, 195)"
        >
          {/* Ground platform */}
          <path d="M-50,155 L0,175 L70,155 L20,135 Z" fill="#FEF3C7" />
          <path d="M-50,155 L0,175 L0,182 L-50,162 Z" fill="#FDE68A" />
          <path d="M0,175 L70,155 L70,162 L0,182 Z" fill="#FCD34D" />
          {/* Track */}
          <path d="M-40,150 C-20,70 20,90 40,50 C60,10 75,30 90,70 L90,150" fill="none" stroke="#FDE68A" strokeWidth="5" strokeLinecap="round" />
          <path d="M-40,150 C-20,70 20,90 40,50 C60,10 75,30 90,70 L90,150" fill="none" stroke="#FEF3C7" strokeWidth="2" strokeDasharray="4 6" />
          {/* Supports */}
          {[-20, 15, 50, 80].map((x) => {
            const y = 150 - Math.max(0, 80 - Math.abs(x - 25) * 1.1)
            return (
              <g key={x}>
                <rect x={x - 3} y={y} width="6" height={150 - y} rx="2" fill="#D97706" />
                <rect x={x - 4} y={y} width="8" height="4" rx="2" fill="#F59E0B" />
              </g>
            )
          })}
          {/* Cart */}
          <rect x="-3" y="45" width="16" height="10" rx="4" fill="#FBBF24" stroke="#F59E0B" strokeWidth="1.5" />
          <circle cx="1" cy="58" r="3" fill="#78350F" />
          <circle cx="10" cy="58" r="3" fill="#78350F" />
        </g>

        {/* ===== 4. BOTANICAL GARDEN — secondary, right ===== */}
        <g
          className="cursor-pointer"
          filter={active === "botanical-garden" ? "url(#sh-lg)" : "url(#sh)"}
          onMouseEnter={() => setActive("botanical-garden")}
          onMouseLeave={() => setActive(null)}
          style={{ transition: "filter 0.3s" }}
          transform="translate(730, 260)"
        >
          {/* Ground platform */}
          <path d="M-40,100 L0,118 L40,100 L0,82 Z" fill="#D1FAE5" />
          <path d="M-40,100 L0,118 L0,125 L-40,107 Z" fill="#6EE7B7" />
          <path d="M0,118 L40,100 L40,107 L0,125 Z" fill="#34D399" />
          {/* Dome */}
          <ellipse cx="0" cy="60" rx="38" ry="35" fill="#A7F3D0" stroke="#6EE7B7" strokeWidth="2" />
          <ellipse cx="0" cy="60" rx="38" ry="35" fill="none" stroke="#34D399" strokeWidth="1" opacity="0.4" />
          {/* Structure lines */}
          <line x1="-38" y1="60" x2="38" y2="60" stroke="#6EE7B7" strokeWidth="0.8" opacity="0.5" />
          <line x1="0" y1="25" x2="0" y2="95" stroke="#6EE7B7" strokeWidth="0.8" opacity="0.5" />
          {/* Plants */}
          <circle cx="-14" cy="65" r="10" fill="#34D399" opacity="0.7" />
          <circle cx="10" cy="62" r="8" fill="#6EE7B7" opacity="0.7" />
          <circle cx="-2" cy="52" r="7" fill="#A7F3D0" opacity="0.8" />
          <circle cx="18" cy="68" r="7" fill="#34D399" opacity="0.6" />
          {/* Flowers */}
          <circle cx="-8" cy="45" r="2.5" fill="#F472B6" />
          <circle cx="12" cy="47" r="2" fill="#FBBF24" />
          <circle cx="3" cy="42" r="1.8" fill="#C084FC" />
          {/* Door */}
          <rect x="-6" y="80" width="12" height="15" rx="6" fill="#059669" />
        </g>

        {/* ===== 5. ART PAVILION — small, right-back ===== */}
        <g
          className="cursor-pointer"
          filter={active === "art-pavilion" ? "url(#sh-lg)" : "url(#sh)"}
          onMouseEnter={() => setActive("art-pavilion")}
          onMouseLeave={() => setActive(null)}
          style={{ transition: "filter 0.3s" }}
          transform="translate(640, 210)"
        >
          {/* Ground platform */}
          <path d="M-30,100 L0,112 L30,100 L0,88 Z" fill="#FECDD3" />
          <path d="M-30,100 L0,112 L0,118 L-30,106 Z" fill="#FDA4AF" />
          <path d="M0,112 L30,100 L30,106 L0,118 Z" fill="#FB7185" />
          {/* Walls */}
          <path d="M-30,100 L-30,50 L0,35 L0,85 Z" fill="#FEE2E2" />
          <path d="M30,100 L30,50 L0,35 L0,85 Z" fill="#FECDD3" />
          {/* Roof */}
          <polygon points="-33,52 L0,28 L33,52" fill="#FDA4AF" />
          <polygon points="-33,52 L0,62 L33,52" fill="#FB7185" />
          {/* Window */}
          <rect x="-25" y="62" width="14" height="18" rx="2" fill="#FFF1F2" stroke="#FECDD3" strokeWidth="1" />
          {/* Canvas */}
          <rect x="-8" y="58" width="20" height="16" rx="2" fill="white" stroke="#FECDD3" strokeWidth="1.5" />
          <circle cx="-2" cy="64" r="3" fill="#F43F5E" opacity="0.5" />
          <circle cx="6" cy="62" r="2.5" fill="#FBBF24" opacity="0.5" />
          <circle cx="8" cy="68" r="2" fill="#8B5CF6" opacity="0.4" />
          {/* Door */}
          <rect x="-6" y="88" width="12" height="14" rx="6" fill="#BE123C" />
        </g>

        {/* ===== DECORATIONS ===== */}

        {/* Fences along front edge */}
        {[120, 180, 240, 300, 360, 420, 480, 540, 600, 660, 720, 780].map((x) => {
          const y = 415 + Math.sin((x - 100) * 0.008) * 8
          return (
            <g key={x}>
              <rect x={x - 1.5} y={y - 12} width="3" height="14" rx="1" fill="#D97706" opacity="0.4" />
              {x < 780 && (
                <line x1={x} y1={y - 6} x2={x + 60} y2={y - 6 + Math.sin(((x + 60) - 100) * 0.008) * 8 - y + 6} stroke="#D97706" strokeWidth="1.5" opacity="0.3" />
              )}
            </g>
          )
        })}

        {/* Trees */}
        <g transform="translate(70, 340)">
          <rect x="-3" y="0" width="6" height="22" rx="2" fill="#A16207" />
          <circle cx="0" cy="-8" r="16" fill="#4ADE80" />
          <circle cx="-7" cy="-2" r="10" fill="#22C55E" />
          <circle cx="7" cy="-4" r="12" fill="#86EFAC" />
        </g>
        <g transform="translate(840, 350)">
          <rect x="-3" y="0" width="6" height="18" rx="2" fill="#A16207" />
          <circle cx="0" cy="-6" r="13" fill="#4ADE80" />
          <circle cx="-5" cy="0" r="9" fill="#22C55E" />
        </g>
        <g transform="translate(450, 320)">
          <rect x="-2" y="0" width="4" height="14" rx="1.5" fill="#A16207" />
          <circle cx="0" cy="-5" r="10" fill="#86EFAC" />
          <circle cx="-4" cy="0" r="7" fill="#4ADE80" />
        </g>

        {/* Lamp posts */}
        <g transform="translate(280, 390)">
          <rect x="-2" y="0" width="4" height="30" rx="2" fill="#78350F" />
          <circle cx="0" cy="-3" r="5" fill="#FDE68A" opacity="0.9" />
          <circle cx="0" cy="-3" r="2.5" fill="#FEF3C7" />
        </g>
        <g transform="translate(500, 385)">
          <rect x="-2" y="0" width="4" height="28" rx="2" fill="#78350F" />
          <circle cx="0" cy="-3" r="5" fill="#FDE68A" opacity="0.9" />
          <circle cx="0" cy="-3" r="2.5" fill="#FEF3C7" />
        </g>

        {/* Balloons */}
        <g transform="translate(130, 300)">
          <line x1="0" y1="0" x2="0" y2="25" stroke="#D1D5DB" strokeWidth="0.8" />
          <ellipse cx="0" cy="-5" rx="6" ry="8" fill="#F472B6" opacity="0.7" />
        </g>
        <g transform="translate(140, 290)">
          <line x1="0" y1="0" x2="0" y2="30" stroke="#D1D5DB" strokeWidth="0.8" />
          <ellipse cx="0" cy="-5" rx="6" ry="8" fill="#FBBF24" opacity="0.7" />
        </g>
        <g transform="translate(135, 295)">
          <line x1="0" y1="0" x2="0" y2="28" stroke="#D1D5DB" strokeWidth="0.8" />
          <ellipse cx="0" cy="-5" rx="6" ry="8" fill="#C084FC" opacity="0.7" />
        </g>

        {/* Scattered flowers */}
        <circle cx="200" cy="420" r="2.5" fill="#F472B6" opacity="0.5" />
        <circle cx="350" cy="430" r="2" fill="#FBBF24" opacity="0.4" />
        <circle cx="480" cy="425" r="2.5" fill="#C084FC" opacity="0.4" />
        <circle cx="620" cy="418" r="2" fill="#F472B6" opacity="0.5" />
        <circle cx="760" cy="415" r="2.5" fill="#34D399" opacity="0.4" />

        {/* Bench */}
        <g transform="translate(320, 405)">
          <rect x="-12" y="0" width="24" height="3" rx="1.5" fill="#92400E" />
          <rect x="-10" y="3" width="3" height="6" rx="1" fill="#78350F" />
          <rect x="7" y="3" width="3" height="6" rx="1" fill="#78350F" />
        </g>

        {/* Banner */}
        <text x="450" y="510" textAnchor="middle" fill="#9CA3AF" fontSize="12" fontWeight="500" fontFamily="system-ui" letterSpacing="0.08em">
          {locale === "zh" ? "ZOE 的游乐场" : "ZOE'S PLAYGROUND"}
        </text>
      </svg>

      {/* Tooltip */}
      <AnimatePresence>
        {activeRide && (
          <div className="absolute" style={{ left: getTooltipPos(activeRide.id).x, top: getTooltipPos(activeRide.id).y }}>
            <RideInfo ride={activeRide} locale={locale} />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function getTooltipPos(id: string) {
  const map: Record<string, { x: string; y: string }> = {
    "ferris-wheel": { x: "18%", y: "22%" },
    "fairy-castle": { x: "40%", y: "18%" },
    "roller-coaster": { x: "60%", y: "28%" },
    "botanical-garden": { x: "80%", y: "38%" },
    "art-pavilion": { x: "70%", y: "30%" },
  };
  return map[id] || { x: "50%", y: "50%" };
}
