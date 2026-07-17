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
    color: "#C4B5FD",
    accent: "#8B5CF6",
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
    color: "#FECDD3",
    accent: "#F43F5E",
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
    color: "#FDE68A",
    accent: "#F59E0B",
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
    color: "#A7F3D0",
    accent: "#10B981",
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
    color: "#BAE6FD",
    accent: "#3B82F6",
    emoji: "📚",
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
    <div className="relative w-full overflow-hidden rounded-3xl border border-gray-200/60 bg-gradient-to-br from-[#F0FDF4] via-[#EFF6FF] to-[#FDF2F8] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] dark:from-gray-800 dark:via-gray-850 dark:to-gray-800">
      <svg viewBox="0 0 800 480" className="w-full" style={{ maxHeight: "480px" }}>
        <defs>
          {/* Monument Valley style shadows */}
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="3" dy="5" stdDeviation="4" floodColor="#000" floodOpacity="0.08" />
          </filter>
          <filter id="shadow-lg" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="4" dy="8" stdDeviation="6" floodColor="#000" floodOpacity="0.1" />
          </filter>
          <filter id="inner-glow">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
            <feOffset dx="0" dy="2" result="offsetBlur" />
            <feFlood floodColor="#fff" floodOpacity="0.3" result="color" />
            <feComposite in2="offsetBlur" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* === Ground Platform (isometric) === */}
        <g filter="url(#shadow)">
          {/* Main ground */}
          <path d="M100,380 L400,440 L700,380 L400,320 Z" fill="#D1FAE5" />
          <path d="M100,380 L400,440 L400,460 L100,400 Z" fill="#A7F3D0" />
          <path d="M400,440 L700,380 L700,400 L400,460 Z" fill="#6EE7B7" />
        </g>

        {/* Paths on ground */}
        <path d="M200,390 L350,420 L500,390 L600,410" stroke="#FDE68A" strokeWidth="4" fill="none" opacity="0.5" strokeLinecap="round" />
        <path d="M250,400 L400,430 L550,400" stroke="#FDE68A" strokeWidth="3" fill="none" opacity="0.3" strokeLinecap="round" />

        {/* === 1. Ferris Wheel (Photography) — left === */}
        <g
          className="cursor-pointer"
          filter={active === "ferris-wheel" ? "url(#shadow-lg)" : "url(#shadow)"}
          onMouseEnter={() => setActive("ferris-wheel")}
          onMouseLeave={() => setActive(null)}
          style={{ transition: "filter 0.3s" }}
          transform="translate(180, 200)"
        >
          {/* Base */}
          <path d="M-10,130 L0,120 L10,130 L0,140 Z" fill="#C4B5FD" />
          {/* Support legs */}
          <line x1="-8" y1="128" x2="-25" y2="140" stroke="#A78BFA" strokeWidth="3" strokeLinecap="round" />
          <line x1="8" y1="128" x2="25" y2="140" stroke="#A78BFA" strokeWidth="3" strokeLinecap="round" />
          {/* Wheel */}
          <circle cx="0" cy="60" r="55" fill="none" stroke="#C4B5FD" strokeWidth="5" />
          <circle cx="0" cy="60" r="50" fill="none" stroke="#DDD6FE" strokeWidth="2" />
          <circle cx="0" cy="60" r="6" fill="#A78BFA" />
          {/* Spokes */}
          {[0, 60, 120, 180, 240, 300].map((a) => (
            <line
              key={a}
              x1={Math.cos((a * Math.PI) / 180) * 50}
              y1={60 + Math.sin((a * Math.PI) / 180) * 50}
              x2={-Math.cos((a * Math.PI) / 180) * 50}
              y2={60 - Math.sin((a * Math.PI) / 180) * 50}
              stroke="#DDD6FE"
              strokeWidth="1.5"
            />
          ))}
          {/* Cabins — rounded rectangles */}
          {[0, 72, 144, 216, 288].map((a) => {
            const cx = Math.cos((a * Math.PI) / 180) * 52
            const cy = 60 + Math.sin((a * Math.PI) / 180) * 52
            return (
              <g key={a}>
                <rect x={cx - 7} y={cy - 5} width="14" height="10" rx="3" fill="#EDE9FE" stroke="#C4B5FD" strokeWidth="1.5" />
                <rect x={cx - 5} y={cy - 3} width="10" height="5" rx="1.5" fill="#DDD6FE" opacity="0.6" />
              </g>
            )
          })}
        </g>

        {/* === 2. Art Pavilion (Painting) — center-left === */}
        <g
          className="cursor-pointer"
          filter={active === "art-pavilion" ? "url(#shadow-lg)" : "url(#shadow)"}
          onMouseEnter={() => setActive("art-pavilion")}
          onMouseLeave={() => setActive(null)}
          style={{ transition: "filter 0.3s" }}
          transform="translate(350, 230)"
        >
          {/* Floor */}
          <path d="M-40,100 L0,120 L40,100 L0,80 Z" fill="#FECDD3" />
          {/* Walls */}
          <path d="M-40,100 L-40,40 L0,20 L0,80 Z" fill="#FEE2E2" />
          <path d="M40,100 L40,40 L0,20 L0,80 Z" fill="#FECDD3" />
          {/* Roof */}
          <path d="M-45,42 L0,15 L45,42 Z" fill="#FDA4AF" />
          <path d="M-45,42 L0,55 L45,42 Z" fill="#FB7185" />
          {/* Window on left wall */}
          <rect x="-35" y="55" width="18" height="22" rx="2" fill="#FFF1F2" stroke="#FECDD3" strokeWidth="1" />
          <line x1="-26" y1="55" x2="-26" y2="77" stroke="#FECDD3" strokeWidth="0.8" />
          {/* Canvas inside */}
          <rect x="-15" y="50" width="30" height="22" rx="2" fill="white" stroke="#FECDD3" strokeWidth="1.5" />
          <circle cx="-5" cy="58" r="4" fill="#F43F5E" opacity="0.5" />
          <circle cx="5" cy="55" r="3" fill="#FBBF24" opacity="0.5" />
          <circle cx="8" cy="63" r="3.5" fill="#8B5CF6" opacity="0.4" />
          {/* Door */}
          <rect x="-8" y="85" width="16" height="20" rx="8" fill="#BE123C" />
          <circle cx="5" cy="95" r="1.5" fill="#FBBF24" />
        </g>

        {/* === 3. Roller Coaster (Design) — center === */}
        <g
          className="cursor-pointer"
          filter={active === "roller-coaster" ? "url(#shadow-lg)" : "url(#shadow)"}
          onMouseEnter={() => setActive("roller-coaster")}
          onMouseLeave={() => setActive(null)}
          style={{ transition: "filter 0.3s" }}
          transform="translate(480, 180)"
        >
          {/* Track — isometric curve */}
          <path
            d="M-50,140 C-30,60 10,80 30,40 C50,0 70,20 90,60 L90,140"
            fill="none"
            stroke="#FDE68A"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M-50,140 C-30,60 10,80 30,40 C50,0 70,20 90,60 L90,140"
            fill="none"
            stroke="#FEF3C7"
            strokeWidth="2"
            strokeDasharray="4 6"
          />
          {/* Supports — geometric pillars */}
          {[-30, 10, 50, 80].map((x) => {
            const y = 140 - Math.max(0, 80 - Math.abs(x - 20) * 1.2)
            return (
              <g key={x}>
                <rect x={x - 3} y={y} width="6" height={140 - y} rx="2" fill="#D97706" />
                <rect x={x - 4} y={y} width="8" height="4" rx="2" fill="#F59E0B" />
              </g>
            )
          })}
          {/* Cart */}
          <rect x="-5" y="35" width="18" height="10" rx="4" fill="#FBBF24" stroke="#F59E0B" strokeWidth="1.5" />
          <circle cx="0" cy="48" r="3.5" fill="#92400E" />
          <circle cx="10" cy="48" r="3.5" fill="#92400E" />
          {/* Base platform */}
          <path d="M-55,140 L0,160 L95,140 L40,120 Z" fill="#FEF3C7" />
        </g>

        {/* === 4. Botanical Garden (Plant Care) — right-center === */}
        <g
          className="cursor-pointer"
          filter={active === "botanical-garden" ? "url(#shadow-lg)" : "url(#shadow)"}
          onMouseEnter={() => setActive("botanical-garden")}
          onMouseLeave={() => setActive(null)}
          style={{ transition: "filter 0.3s" }}
          transform="translate(620, 250)"
        >
          {/* Base */}
          <path d="M-50,90 L0,110 L50,90 L0,70 Z" fill="#D1FAE5" />
          {/* Greenhouse dome — geometric */}
          <ellipse cx="0" cy="50" rx="45" ry="40" fill="#A7F3D0" stroke="#6EE7B7" strokeWidth="2" />
          <ellipse cx="0" cy="50" rx="45" ry="40" fill="none" stroke="#34D399" strokeWidth="1" opacity="0.4" />
          {/* Structure lines */}
          <line x1="-45" y1="50" x2="45" y2="50" stroke="#6EE7B7" strokeWidth="0.8" opacity="0.5" />
          <line x1="0" y1="10" x2="0" y2="90" stroke="#6EE7B7" strokeWidth="0.8" opacity="0.5" />
          {/* Plants — geometric circles */}
          <circle cx="-18" cy="58" r="12" fill="#34D399" opacity="0.7" />
          <circle cx="12" cy="54" r="10" fill="#6EE7B7" opacity="0.7" />
          <circle cx="-3" cy="44" r="8" fill="#A7F3D0" opacity="0.8" />
          <circle cx="22" cy="62" r="9" fill="#34D399" opacity="0.6" />
          {/* Flowers — small circles */}
          <circle cx="-12" cy="38" r="3" fill="#F472B6" />
          <circle cx="16" cy="40" r="2.5" fill="#FBBF24" />
          <circle cx="3" cy="36" r="2" fill="#C084FC" />
          {/* Door */}
          <rect x="-8" y="72" width="16" height="18" rx="8" fill="#059669" />
        </g>

        {/* === 5. Fairy Castle (Reading) — far left-back === */}
        <g
          className="cursor-pointer"
          filter={active === "fairy-castle" ? "url(#shadow-lg)" : "url(#shadow)"}
          onMouseEnter={() => setActive("fairy-castle")}
          onMouseLeave={() => setActive(null)}
          style={{ transition: "filter 0.3s" }}
          transform="translate(220, 120)"
        >
          {/* Main tower */}
          <rect x="-25" y="30" width="50" height="90" rx="3" fill="#BAE6FD" stroke="#7DD3FC" strokeWidth="1.5" />
          {/* Side towers */}
          <rect x="-45" y="50" width="28" height="70" rx="2" fill="#E0F2FE" stroke="#7DD3FC" strokeWidth="1" />
          <rect x="17" y="50" width="28" height="70" rx="2" fill="#E0F2FE" stroke="#7DD3FC" strokeWidth="1" />
          {/* Roofs — triangles */}
          <polygon points="-25,30 0,5 25,30" fill="#3B82F6" />
          <polygon points="-45,50 -31,25 -17,50" fill="#60A5FA" />
          <polygon points="17,50 31,25 45,50" fill="#60A5FA" />
          {/* Flags */}
          <line x1="0" y1="5" x2="0" y2="-10" stroke="#3B82F6" strokeWidth="1.5" />
          <polygon points="0,-10 12,-6 0,-2" fill="#F43F5E" />
          {/* Windows — rounded */}
          <rect x="-12" y="48" width="10" height="14" rx="5" fill="#DBEAFE" />
          <rect x="2" y="48" width="10" height="14" rx="5" fill="#DBEAFE" />
          <rect x="-12" y="75" width="10" height="14" rx="5" fill="#DBEAFE" />
          <rect x="2" y="75" width="10" height="14" rx="5" fill="#DBEAFE" />
          {/* Door */}
          <rect x="-8" y="95" width="16" height="25" rx="8" fill="#1E40AF" />
          <circle cx="5" cy="108" r="1.5" fill="#FBBF24" />
          {/* Base wall */}
          <path d="M-55,115 L0,135 L55,115 L0,95 Z" fill="#93C5FD" />
        </g>

        {/* === Decorative elements === */}

        {/* Trees — geometric */}
        <g transform="translate(80, 320)">
          <rect x="-3" y="0" width="6" height="20" rx="2" fill="#A16207" />
          <circle cx="0" cy="-8" r="16" fill="#4ADE80" />
          <circle cx="-7" cy="-2" r="10" fill="#22C55E" />
          <circle cx="7" cy="-4" r="12" fill="#86EFAC" />
        </g>
        <g transform="translate(730, 330)">
          <rect x="-3" y="0" width="6" height="16" rx="2" fill="#A16207" />
          <circle cx="0" cy="-6" r="13" fill="#4ADE80" />
          <circle cx="-5" cy="0" r="9" fill="#22C55E" />
        </g>

        {/* Lamp posts — geometric */}
        <g transform="translate(300, 370)">
          <rect x="-2" y="0" width="4" height="35" rx="2" fill="#78350F" />
          <circle cx="0" cy="-3" r="6" fill="#FDE68A" opacity="0.9" />
          <circle cx="0" cy="-3" r="3" fill="#FEF3C7" />
        </g>
        <g transform="translate(520, 365)">
          <rect x="-2" y="0" width="4" height="30" rx="2" fill="#78350F" />
          <circle cx="0" cy="-3" r="6" fill="#FDE68A" opacity="0.9" />
          <circle cx="0" cy="-3" r="3" fill="#FEF3C7" />
        </g>

        {/* Flowers scattered */}
        <circle cx="150" cy="395" r="3" fill="#F472B6" opacity="0.6" />
        <circle cx="280" cy="405" r="2.5" fill="#FBBF24" opacity="0.5" />
        <circle cx="450" cy="415" r="3" fill="#C084FC" opacity="0.5" />
        <circle cx="580" cy="400" r="2" fill="#F472B6" opacity="0.6" />
        <circle cx="680" cy="395" r="2.5" fill="#34D399" opacity="0.5" />

        {/* Banner */}
        <text x="400" y="465" textAnchor="middle" fill="#6B7280" fontSize="13" fontWeight="500" fontFamily="system-ui" letterSpacing="0.05em">
          {locale === "zh" ? "Zoe 的游乐场" : "Zoe's Playground"}
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
    "ferris-wheel": { x: "22%", y: "30%" },
    "art-pavilion": { x: "42%", y: "38%" },
    "roller-coaster": { x: "58%", y: "22%" },
    "botanical-garden": { x: "76%", y: "38%" },
    "fairy-castle": { x: "26%", y: "15%" },
  };
  return positions[id] || { x: "50%", y: "50%" };
}
