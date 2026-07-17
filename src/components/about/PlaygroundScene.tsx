"use client";

import { motion } from "framer-motion";

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
    emoji: "🎨",
    icon: "🎨",
  },
];

export function PlaygroundScene({ locale }: { locale: string }) {
  return (
    <div className="relative overflow-hidden rounded-3xl">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-300 to-amber-300 opacity-80 dark:opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-tl from-blue-400/60 via-transparent to-green-300/40" />

      {/* Floating color blobs */}
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-purple-500/30 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-pink-500/30 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400/20 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 p-8 sm:p-10">
        {/* Title */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-white drop-shadow-md">
            {locale === "zh" ? "我的游乐场" : "My Playground"}
          </h2>
          <p className="mt-1 text-sm text-white/70">
            {locale === "zh" ? "工作之余，每个爱好都是一座小乐园" : "Each hobby is a little land of its own"}
          </p>
        </div>

        {/* Glassmorphism cards grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {rides.map((ride, i) => (
            <motion.div
              key={ride.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group cursor-pointer"
            >
              <div
                className="relative overflow-hidden rounded-2xl p-5 transition-all duration-300"
                style={{
                  background: "rgba(255, 255, 255, 0.15)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.25)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                }}
              >
                {/* Icon */}
                <div className="mb-4 flex h-16 items-center justify-center">
                  <span className="text-5xl drop-shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    {ride.icon}
                  </span>
                </div>

                {/* Hobby tag */}
                <div className="mb-1.5 flex items-center gap-1.5">
                  <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: ride.color }} />
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-white/60">
                    {locale === "zh" ? ride.hobbyZh : ride.hobby}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-base font-bold text-white drop-shadow-sm">
                  {locale === "zh" ? ride.nameZh : ride.name}
                </h3>

                {/* Description */}
                <p className="mt-1.5 text-xs leading-relaxed text-white/60">
                  {locale === "zh" ? ride.descriptionZh : ride.description}
                </p>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle at 50% 30%, ${ride.color}30, transparent 70%)`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom label */}
        <div className="mt-8 text-center text-[11px] font-medium tracking-[0.15em] text-white/40">
          {locale === "zh" ? "ZOE 的游乐场" : "ZOE'S PLAYGROUND"}
        </div>
      </div>
    </div>
  );
}
