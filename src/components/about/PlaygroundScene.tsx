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
    lightColor: "#EDE9FE",
    emoji: "📸",
    icon: "🎡",
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
    lightColor: "#DBEAFE",
    emoji: "📚",
    icon: "🏰",
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
    lightColor: "#FEF3C7",
    emoji: "🎮",
    icon: "🎢",
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
    lightColor: "#D1FAE5",
    emoji: "🌿",
    icon: "🏡",
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
    lightColor: "#FFE4E6",
    emoji: "🎨",
    icon: "🎨",
  },
];

function RideCard({
  ride,
  index,
  isActive,
  onEnter,
  onLeave,
  locale,
}: {
  ride: (typeof rides)[number];
  index: number;
  isActive: boolean;
  onEnter: () => void;
  onLeave: () => void;
  locale: string;
}) {
  // Slightly different rotation for each card to look scattered
  const rotations = [
    { x: -2, y: 3, z: -1.5 },
    { x: 1, y: -2, z: 1 },
    { x: -1, y: 4, z: -2 },
    { x: 2, y: -1, z: 1.5 },
    { x: -1.5, y: 2, z: -1 },
  ];
  const rot = rotations[index % rotations.length];

  return (
    <motion.div
      className="group relative cursor-pointer"
      style={{ perspective: "800px" }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <motion.div
        className="relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] dark:border-gray-700 dark:bg-gray-800"
        style={{
          transformStyle: "preserve-3d",
          width: "100%",
          height: "280px",
        }}
        initial={{
          rotateX: rot.x,
          rotateY: rot.y,
          rotateZ: rot.z,
          y: index % 2 === 0 ? 8 : 0,
        }}
        whileHover={{
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
          y: -12,
          scale: 1.04,
          boxShadow: `0 25px 50px -12px ${ride.color}30`,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {/* Color top strip */}
        <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${ride.color}, ${ride.color}aa)` }} />

        {/* Icon area */}
        <div className="relative flex h-32 items-center justify-center overflow-hidden" style={{ background: `linear-gradient(135deg, ${ride.lightColor}, white)` }}>
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle, ${ride.color} 1px, transparent 1px)`, backgroundSize: "20px 20px" }} />

          {/* Main icon */}
          <motion.div
            className="relative z-10 text-6xl"
            whileHover={{ scale: 1.15, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            {ride.icon}
          </motion.div>

          {/* Floating emoji */}
          <div className="absolute right-4 top-4 text-lg opacity-30">{ride.emoji}</div>
          <div className="absolute bottom-4 left-4 text-sm opacity-20">{ride.emoji}</div>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="mb-1 flex items-center gap-1.5">
            <span className="inline-block h-2 w-2 rounded-full" style={{ background: ride.color }} />
            <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: ride.color }}>
              {locale === "zh" ? ride.hobbyZh : ride.hobby}
            </span>
          </div>
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
            {locale === "zh" ? ride.nameZh : ride.name}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
            {locale === "zh" ? ride.descriptionZh : ride.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function PlaygroundScene({ locale }: { locale: string }) {
  return (
    <div className="relative">
      {/* Ground accent */}
      <div className="absolute -bottom-6 left-[5%] right-[5%] h-8 rounded-2xl bg-gradient-to-r from-green-200/40 via-blue-200/30 to-pink-200/40 blur-xl" />

      {/* Cards grid */}
      <div className="relative grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
        {rides.map((ride, i) => (
          <RideCard
            key={ride.id}
            ride={ride}
            index={i}
            isActive={false}
            onEnter={() => {}}
            onLeave={() => {}}
            locale={locale}
          />
        ))}
      </div>

      {/* Label */}
      <div className="mt-8 text-center text-[11px] font-medium tracking-[0.15em] text-gray-400 dark:text-gray-500">
        {locale === "zh" ? "ZOE 的游乐场" : "ZOE'S PLAYGROUND"}
      </div>
    </div>
  );
}
