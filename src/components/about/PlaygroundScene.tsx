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
    color: "#8B5CF6",
    emoji: "📸",
    x: 8,
    y: 25,
    z: 0,
    width: 120,
    height: 160,
    shape: "tower" as const,
  },
  {
    id: "fairy-castle",
    name: "Fairy Castle",
    nameZh: "童话城堡",
    hobby: "Reading",
    hobbyZh: "阅读",
    description: "每本书是一扇门，通往新世界。",
    descriptionZh: "Every book is a door to a new world.",
    color: "#3B82F6",
    emoji: "📚",
    x: 35,
    y: 15,
    z: 20,
    width: 140,
    height: 180,
    shape: "castle" as const,
  },
  {
    id: "roller-coaster",
    name: "Roller Coaster",
    nameZh: "过山车",
    hobby: "Design",
    hobbyZh: "设计",
    description: "在约束中寻找刺激，起承转合。",
    descriptionZh: "Finding thrills within constraints.",
    color: "#F59E0B",
    emoji: "🎮",
    x: 60,
    y: 35,
    z: 10,
    width: 130,
    height: 100,
    shape: "wave" as const,
  },
  {
    id: "botanical-garden",
    name: "Botanical Garden",
    nameZh: "植物园",
    hobby: "Plant Care",
    hobbyZh: "养绿植",
    description: "需要耐心，每天浇水，慢慢生长。",
    descriptionZh: "Patience, daily watering, slow growth.",
    color: "#10B981",
    emoji: "🌿",
    x: 78,
    y: 40,
    z: 30,
    width: 100,
    height: 110,
    shape: "dome" as const,
  },
  {
    id: "art-pavilion",
    name: "Art Pavilion",
    nameZh: "画亭",
    hobby: "Painting",
    hobbyZh: "绘画",
    description: "自由挥洒色彩的创意空间。",
    descriptionZh: "A creative space to freely splash colors.",
    color: "#F43F5E",
    emoji: "🎨",
    x: 50,
    y: 55,
    z: 5,
    width: 80,
    height: 90,
    shape: "pavilion" as const,
  },
];

function RideShape({ ride, isActive }: { ride: (typeof rides)[number]; isActive: boolean }) {
  const baseStyle = "absolute rounded-xl transition-all duration-500";
  const glow = isActive ? `shadow-[0_20px_60px_-10px_${ride.color}66]` : "";

  if (ride.shape === "tower") {
    return (
      <div className={`${baseStyle} ${glow}`} style={{ width: ride.width, height: ride.height }}>
        {/* Main body */}
        <div className="absolute inset-0 rounded-xl" style={{ background: `linear-gradient(180deg, ${ride.color}40, ${ride.color}20)` }} />
        {/* Windows */}
        <div className="absolute left-3 right-3 top-4 grid grid-cols-3 gap-1.5">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-4 rounded-sm" style={{ background: `${ride.color}30` }} />
          ))}
        </div>
        {/* Top ring */}
        <div className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 rounded-full" style={{ background: `${ride.color}50` }} />
        {/* Cabins */}
        <div className="absolute -top-1 left-1/2 flex -translate-x-1/2 gap-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-3 w-3 rounded-sm" style={{ background: ride.color }} />
          ))}
        </div>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-2xl">{ride.emoji}</div>
      </div>
    );
  }

  if (ride.shape === "castle") {
    return (
      <div className={`${baseStyle} ${glow}`} style={{ width: ride.width, height: ride.height }}>
        {/* Main tower */}
        <div className="absolute inset-x-4 bottom-0 top-8 rounded-t-lg" style={{ background: `linear-gradient(180deg, ${ride.color}35, ${ride.color}15)` }} />
        {/* Side towers */}
        <div className="absolute bottom-0 left-0 top-14 w-8 rounded-t-md" style={{ background: `${ride.color}25` }} />
        <div className="absolute bottom-0 right-0 top-14 w-8 rounded-t-md" style={{ background: `${ride.color}25` }} />
        {/* Roof peaks */}
        <div className="absolute left-1/2 top-0 h-0 w-0 -translate-x-1/2" style={{ borderLeft: "28px solid transparent", borderRight: "28px solid transparent", borderBottom: `24px solid ${ride.color}60` }} />
        {/* Windows */}
        <div className="absolute left-1/2 top-12 flex -translate-x-1/2 gap-2">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-5 w-4 rounded-t-full" style={{ background: `${ride.color}30` }} />
          ))}
        </div>
        {/* Door */}
        <div className="absolute bottom-0 left-1/2 h-8 w-6 -translate-x-1/2 rounded-t-full" style={{ background: `${ride.color}60` }} />
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-2xl">{ride.emoji}</div>
      </div>
    );
  }

  if (ride.shape === "wave") {
    return (
      <div className={`${baseStyle} ${glow}`} style={{ width: ride.width, height: ride.height }}>
        {/* Track wave */}
        <svg viewBox="0 0 130 100" className="absolute inset-0 h-full w-full">
          <path d="M10,80 Q35,20 65,40 Q95,60 120,20" fill="none" stroke={ride.color} strokeWidth="4" strokeLinecap="round" opacity="0.5" />
          <path d="M10,80 Q35,20 65,40 Q95,60 120,20" fill="none" stroke={ride.color} strokeWidth="2" strokeDasharray="4 6" opacity="0.3" />
          {/* Supports */}
          {[30, 65, 100].map((x) => (
            <line key={x} x1={x} y1="80" x2={x} y2={40} stroke={ride.color} strokeWidth="2" opacity="0.3" />
          ))}
          {/* Cart */}
          <rect x="58" y="32" width="14" height="8" rx="3" fill={ride.color} opacity="0.7" />
        </svg>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-2xl">{ride.emoji}</div>
      </div>
    );
  }

  if (ride.shape === "dome") {
    return (
      <div className={`${baseStyle} ${glow}`} style={{ width: ride.width, height: ride.height }}>
        {/* Dome */}
        <div className="absolute inset-x-2 top-0 h-16 rounded-t-full" style={{ background: `${ride.color}35` }} />
        {/* Body */}
        <div className="absolute inset-x-0 bottom-0 top-12 rounded-b-xl" style={{ background: `${ride.color}20` }} />
        {/* Plants */}
        <div className="absolute bottom-4 left-3 flex gap-1">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="rounded-full" style={{ width: 12 + i * 2, height: 12 + i * 2, background: `${ride.color}${40 + i * 10}` }} />
          ))}
        </div>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-2xl">{ride.emoji}</div>
      </div>
    );
  }

  // pavilion
  return (
    <div className={`${baseStyle} ${glow}`} style={{ width: ride.width, height: ride.height }}>
      {/* Roof */}
      <div className="absolute inset-x-0 top-0 h-10 rounded-t-lg" style={{ background: `${ride.color}45` }} />
      {/* Walls */}
      <div className="absolute inset-x-2 bottom-0 top-8 rounded-b-lg" style={{ background: `${ride.color}20` }} />
      {/* Canvas */}
      <div className="absolute left-1/2 top-12 h-8 w-10 -translate-x-1/2 rounded-sm bg-white/50" />
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-2xl">{ride.emoji}</div>
    </div>
  );
}

function RideTooltip({ ride, locale }: { ride: (typeof rides)[number]; locale: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className="absolute left-1/2 z-50 w-52 -translate-x-1/2 -translate-y-full rounded-2xl border border-gray-100 bg-white p-4 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] dark:border-gray-700 dark:bg-gray-800"
      style={{ pointerEvents: "none", top: "-20px" }}
    >
      <div className="mb-1 flex items-center gap-2">
        <span className="text-lg">{ride.emoji}</span>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: ride.color }}>
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
      <div className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rotate-45 bg-white shadow dark:bg-gray-800" />
    </motion.div>
  );
}

export function PlaygroundScene({ locale }: { locale: string }) {
  const [active, setActive] = useState<string | null>(null);
  const activeRide = rides.find((r) => r.id === active);

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-gray-200/60 bg-gradient-to-br from-gray-50 to-gray-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] dark:from-gray-800 dark:to-gray-900">
      {/* 3D Scene Container */}
      <div
        className="relative mx-auto overflow-visible"
        style={{
          width: "100%",
          height: "480px",
          perspective: "1200px",
          perspectiveOrigin: "50% 40%",
        }}
      >
        {/* Ground plane */}
        <div
          className="absolute"
          style={{
            width: "80%",
            height: "40%",
            bottom: "5%",
            left: "10%",
            background: "linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 50%, #6EE7B7 100%)",
            transform: "rotateX(60deg) rotateZ(-5deg)",
            borderRadius: "20px",
            boxShadow: "0 20px 60px -20px rgba(16,185,129,0.3)",
          }}
        />

        {/* Rides */}
        {rides.map((ride) => {
          const isActive = active === ride.id;
          return (
            <motion.div
              key={ride.id}
              className="absolute cursor-pointer"
              style={{
                left: `${ride.x}%`,
                bottom: `${ride.y}%`,
                zIndex: isActive ? 50 : ride.z,
              }}
              initial={false}
              animate={{
                y: isActive ? -15 : 0,
                scale: isActive ? 1.08 : 1,
                rotateY: isActive ? 0 : -3,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onMouseEnter={() => setActive(ride.id)}
              onMouseLeave={() => setActive(null)}
            >
              {/* Tooltip */}
              <AnimatePresence>
                {isActive && (
                  <RideTooltip ride={ride} locale={locale} />
                )}
              </AnimatePresence>

              {/* Shape */}
              <RideShape ride={ride} isActive={isActive} />
            </motion.div>
          );
        })}

        {/* Decorative trees */}
        {[
          { x: 3, y: 15, size: 40 },
          { x: 92, y: 20, size: 35 },
          { x: 20, y: 8, size: 30 },
        ].map((tree, i) => (
          <div
            key={i}
            className="absolute"
            style={{ left: `${tree.x}%`, bottom: `${tree.y}%` }}
          >
            <div className="relative" style={{ width: tree.size, height: tree.size * 1.2 }}>
              <div className="absolute bottom-0 left-1/2 h-1/3 w-2 -translate-x-1/2 rounded-sm bg-amber-800/40" />
              <div className="absolute bottom-1/4 left-1/2 h-2/3 w-full -translate-x-1/2 rounded-full bg-green-400/50" />
              <div className="absolute bottom-1/3 left-[30%] h-1/2 w-2/3 -translate-x-1/2 rounded-full bg-green-500/40" />
            </div>
          </div>
        ))}

        {/* Lamp posts */}
        {[
          { x: 25, y: 12 },
          { x: 70, y: 18 },
        ].map((lamp, i) => (
          <div key={i} className="absolute" style={{ left: `${lamp.x}%`, bottom: `${lamp.y}%` }}>
            <div className="relative">
              <div className="h-16 w-1 rounded-sm bg-amber-900/30" />
              <div className="absolute -top-1 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-amber-300 shadow-[0_0_12px_4px_rgba(252,211,77,0.3)]" />
            </div>
          </div>
        ))}

        {/* Balloons */}
        {[
          { x: 15, y: 65, color: "#F472B6" },
          { x: 18, y: 70, color: "#FBBF24" },
          { x: 13, y: 68, color: "#C084FC" },
        ].map((b, i) => (
          <div key={i} className="absolute" style={{ left: `${b.x}%`, bottom: `${b.y}%` }}>
            <div className="relative">
              <div className="h-8 w-px bg-gray-300/50" />
              <div className="absolute -top-2 left-1/2 h-4 w-3 -translate-x-1/2 rounded-full" style={{ background: `${b.color}88` }} />
            </div>
          </div>
        ))}

        {/* Banner */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[11px] font-medium tracking-[0.15em] text-gray-400 dark:text-gray-500">
          {locale === "zh" ? "ZOE 的游乐场" : "ZOE'S PLAYGROUND"}
        </div>
      </div>
    </div>
  );
}
