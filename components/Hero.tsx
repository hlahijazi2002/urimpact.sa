"use client";
import { motion } from "framer-motion";
import { useLang } from "../context/LangContext";
import { content } from "../data/content";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

// Animated dashboard mockup
function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-lg mx-auto"
    >
      {/* Glow behind */}
      <div className="absolute -inset-8 bg-gradient-to-br from-[#00E5A0]/20 via-transparent to-[#00C2FF]/20 rounded-3xl blur-2xl" />

      {/* Main card */}
      <div className="relative bg-[#0A1A14]/90 backdrop-blur-xl border border-[#00E5A0]/20 rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.5)]">
        {/* Card header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#0D2018]">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/60" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <span className="w-3 h-3 rounded-full bg-[#00E5A0]/60" />
          </div>
          <span className="text-white/30 text-xs font-mono ml-2">
            URIMPACT Dashboard
          </span>
        </div>

        <div className="p-5 space-y-4">
          {/* Scope bars */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-white/50 mb-1">
              <span>GHG Emissions Overview</span>
              <span className="text-[#00E5A0]">↓ 23% YoY</span>
            </div>
            {[
              { label: "Scope 1", val: 35, color: "#00E5A0" },
              { label: "Scope 2", val: 55, color: "#00C2FF" },
              { label: "Scope 3", val: 80, color: "#7B61FF" },
            ].map((s, i) => (
              <div key={s.label} className="flex items-center gap-3">
                <span className="text-xs text-white/40 w-14">{s.label}</span>
                <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${s.val}%` }}
                    transition={{
                      duration: 1,
                      delay: 0.8 + i * 0.15,
                      ease: "easeOut",
                    }}
                    className="h-full rounded-full"
                    style={{ background: s.color }}
                  />
                </div>
                <span className="text-xs text-white/40 w-8">{s.val}%</span>
              </div>
            ))}
          </div>

          {/* Stat row */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Net Zero", val: "2035", sub: "Target Year" },
              { label: "ESG Score", val: "84", sub: "+12 pts" },
              { label: "NBS Projects", val: "7", sub: "Active" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/5 rounded-xl p-3 text-center"
              >
                <div className="text-[#00E5A0] font-bold text-lg leading-none">
                  {stat.val}
                </div>
                <div className="text-white/30 text-[10px] mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>

          {/* Activity line */}
          <div className="bg-white/3 rounded-xl p-3">
            <div className="flex items-end gap-1 h-12">
              {[20, 35, 28, 42, 38, 55, 48, 60, 52, 70, 65, 80].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{
                    duration: 0.5,
                    delay: 1.2 + i * 0.05,
                    ease: "easeOut",
                  }}
                  className="flex-1 rounded-sm"
                  style={{
                    background: `rgba(0, 229, 160, ${0.2 + (h / 100) * 0.6})`,
                  }}
                />
              ))}
            </div>
            <div className="text-[10px] text-white/30 mt-2 text-center">
              Decarbonization Progress — 12 Month Trend
            </div>
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="absolute -left-8 top-1/4 bg-[#0D2018] border border-[#00E5A0]/30 rounded-xl px-3 py-2 shadow-xl"
      >
        <div className="text-[#00E5A0] text-xs font-semibold">↓ CO₂</div>
        <div className="text-white text-sm font-bold">45K tons</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.6, duration: 0.5 }}
        className="absolute -right-6 bottom-1/4 bg-[#0D2018] border border-[#00C2FF]/30 rounded-xl px-3 py-2 shadow-xl"
      >
        <div className="text-[#00C2FF] text-xs font-semibold">IFRS S2</div>
        <div className="text-white text-xs">Ready ✓</div>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const { lang, t } = useLang();
  const h = content.hero;
  const isAr = lang === "ar";

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#050D0A]">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,229,160,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,160,1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Radial glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00E5A0]/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00C2FF]/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00E5A0]/4 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left Content */}
        <div className={`space-y-8 ${isAr ? "text-right" : ""}`}>
          {/* Badge */}
          <motion.div {...fadeUp(0.1)}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00E5A0]/30 bg-[#00E5A0]/10 text-[#00E5A0] text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-[#00E5A0] animate-pulse" />
              {t(h.badge)}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div {...fadeUp(0.2)} className="space-y-2">
            <h1 className="text-6xl lg:text-7xl font-black tracking-tight leading-none text-white">
              <span className="block text-[#00E5A0]">{t(h.headline1)}</span>
              <span className="block">{t(h.headline2)}</span>
              <span className="block relative">
                {t(h.headline3)}
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#00E5A0] to-[#00C2FF] rounded-full" />
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            {...fadeUp(0.3)}
            className="text-white/60 text-lg leading-relaxed max-w-xl"
          >
            {t(h.subheadline)}
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUp(0.4)}
            className={`flex gap-4 ${isAr ? "flex-row-reverse" : ""} flex-wrap`}
          >
            <a
              href="/bodemo"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#00E5A0] to-[#00C2FF] text-[#050D0A] font-bold text-base hover:shadow-[0_0_40px_rgba(0,229,160,0.4)] transition-all duration-300 hover:scale-[1.02]"
            >
              {t(h.cta1)}
            </a>
            <a
              href="#platform"
              className="px-8 py-4 rounded-xl border border-white/20 text-white font-medium text-base hover:bg-white/5 hover:border-white/40 transition-all duration-300"
            >
              {t(h.cta2)}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            {...fadeUp(0.5)}
            className={`flex gap-8 pt-4 ${isAr ? "flex-row-reverse" : ""}`}
          >
            {h.stats.map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="text-3xl font-black text-[#00E5A0]">
                  {stat.value}
                </div>
                <div className="text-white/40 text-xs">{t(stat.label)}</div>
              </div>
            ))}
          </motion.div>

          {/* Trust Strip */}
          <motion.div
            {...fadeUp(0.6)}
            className={`flex flex-wrap gap-3 pt-2 ${isAr ? "flex-row-reverse" : ""}`}
          >
            {h.trustItems.map((item, i) => (
              <span
                key={i}
                className="text-xs text-white/40 px-3 py-1 rounded-full border border-white/10 hover:border-[#00E5A0]/30 hover:text-white/60 transition-all duration-200"
              >
                {t(item)}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right Visual */}
        <div className={isAr ? "order-first lg:order-last" : ""}>
          <DashboardMockup />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/20 text-xs">scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#00E5A0]/40 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
