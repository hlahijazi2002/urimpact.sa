"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const trustItems = [
  "GRI Aligned",
  "IFRS S1 & S2 Ready",
  "GHG Protocol Compatible",
  "ISO 14064 Aligned",
  "Saudi Vision 2030 Focused",
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

/* ── Inline Dashboard Mockup ── */
function DashboardMockup() {
  const scopeData = [
    { label: "Scope 1", value: 2840, unit: "tCO₂e", pct: 28, color: "#10b981" },
    { label: "Scope 2", value: 4120, unit: "tCO₂e", pct: 41, color: "#2dd4bf" },
    { label: "Scope 3", value: 3180, unit: "tCO₂e", pct: 31, color: "#6ee7b7" },
  ];

  const roadmapItems = [
    { year: "2024", label: "Baseline Set", done: true },
    { year: "2026", label: "-30% Target", done: true },
    { year: "2028", label: "-60% Target", done: false },
    { year: "2030", label: "Net Zero", done: false },
  ];

  return (
    <div className="relative w-full max-w-[580px] mx-auto">
      {/* Outer glow */}
      <div className="absolute -inset-4 bg-emerald-500/5 rounded-3xl blur-2xl" />
      <div className="absolute -inset-1 bg-gradient-to-br from-emerald-500/20 via-transparent to-teal-500/10 rounded-2xl blur-sm" />

      {/* Main panel */}
      <div className="relative glass-card rounded-2xl overflow-hidden border border-emerald-500/20">
        {/* Header bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-emerald-900/40 bg-charcoal-800/50">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
            </div>
            <span className="text-[10px] text-[#4a6a57] font-mono ml-2">
              URIMPACT · ESG Dashboard
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 dot-pulse" />
            <span className="text-[10px] text-emerald-400 font-mono">LIVE</span>
          </div>
        </div>

        {/* Dashboard body */}
        <div className="p-4 space-y-4">
          {/* Top KPI row */}
          <div className="grid grid-cols-3 gap-3">
            {[
              {
                label: "Total Emissions",
                value: "10.14k",
                unit: "tCO₂e",
                change: "-12%",
              },
              {
                label: "ESG Score",
                value: "84.2",
                unit: "/100",
                change: "+6.1",
              },
              {
                label: "NBS Offset",
                value: "1.8k",
                unit: "tCO₂e",
                change: "+22%",
              },
            ].map((kpi) => (
              <div
                key={kpi.label}
                className="bg-charcoal-700/60 rounded-xl p-3 border border-emerald-900/30"
              >
                <p className="text-[9px] text-[#4a6a57] font-mono uppercase tracking-wider mb-1">
                  {kpi.label}
                </p>
                <p className="text-lg font-display font-semibold text-white leading-none">
                  {kpi.value}
                  <span className="text-[10px] text-[#4a6a57] ml-1">
                    {kpi.unit}
                  </span>
                </p>
                <p className="text-[10px] text-emerald-400 mt-1 font-mono">
                  {kpi.change} YoY
                </p>
              </div>
            ))}
          </div>

          {/* Scope breakdown */}
          <div className="bg-charcoal-700/40 rounded-xl p-3 border border-emerald-900/20">
            <p className="text-[10px] text-[#4a6a57] font-mono uppercase tracking-wider mb-3">
              GHG Scope Breakdown
            </p>
            <div className="space-y-2.5">
              {scopeData.map((scope) => (
                <div key={scope.label} className="flex items-center gap-2">
                  <span className="text-[10px] text-[#8fa899] w-14 shrink-0 font-mono">
                    {scope.label}
                  </span>
                  <div className="flex-1 h-2 bg-charcoal-600/60 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${scope.pct}%` }}
                      transition={{
                        duration: 1.2,
                        delay: 0.8,
                        ease: "easeOut",
                      }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: scope.color }}
                    />
                  </div>
                  <span
                    className="text-[10px] font-mono w-12 text-right shrink-0"
                    style={{ color: scope.color }}
                  >
                    {scope.pct}%
                  </span>
                  <span className="text-[10px] text-[#4a6a57] font-mono w-16 text-right shrink-0">
                    {scope.value.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>

            {/* Stacked bar */}
            <div className="flex h-2 rounded-full overflow-hidden mt-3 gap-0.5">
              {scopeData.map((s) => (
                <motion.div
                  key={s.label}
                  initial={{ flex: 0 }}
                  animate={{ flex: s.pct }}
                  transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                  style={{ backgroundColor: s.color }}
                />
              ))}
            </div>
          </div>

          {/* Net Zero Roadmap */}
          <div className="bg-charcoal-700/40 rounded-xl p-3 border border-emerald-900/20">
            <p className="text-[10px] text-[#4a6a57] font-mono uppercase tracking-wider mb-3">
              Net Zero Roadmap
            </p>
            <div className="flex items-center justify-between relative">
              {/* Line */}
              <div className="absolute top-3 left-4 right-4 h-0.5 bg-charcoal-600/60" />
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "50%" }}
                transition={{ duration: 1.5, delay: 1.2 }}
                className="absolute top-3 left-4 h-0.5 bg-emerald-500"
              />

              {roadmapItems.map((item, i) => (
                <div
                  key={item.year}
                  className="relative flex flex-col items-center gap-1"
                >
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center z-10 ${
                      item.done
                        ? "bg-emerald-500 border-emerald-500"
                        : "bg-charcoal-800 border-charcoal-600"
                    }`}
                  >
                    {item.done && (
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                      >
                        <path
                          d="M2 5l2.5 2.5L8 3"
                          stroke="#0a0f0d"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </div>
                  <p className="text-[9px] font-mono text-emerald-400">
                    {item.year}
                  </p>
                  <p
                    className={`text-[8px] text-center max-w-[48px] ${
                      item.done ? "text-[#8fa899]" : "text-[#3a5a47]"
                    }`}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ESG Scorecard mini */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Environmental", score: 88, color: "#10b981" },
              { label: "Social", score: 76, color: "#2dd4bf" },
              { label: "Governance", score: 91, color: "#6ee7b7" },
            ].map((pillar) => (
              <div
                key={pillar.label}
                className="bg-charcoal-700/40 rounded-xl p-2.5 border border-emerald-900/20 text-center"
              >
                <p className="text-[8px] text-[#4a6a57] font-mono mb-1">
                  {pillar.label}
                </p>
                <p
                  className="text-base font-display font-semibold"
                  style={{ color: pillar.color }}
                >
                  {pillar.score}
                </p>
                <div className="h-1 bg-charcoal-600/60 rounded-full mt-1.5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${pillar.score}%` }}
                    transition={{ duration: 1, delay: 1.4 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: pillar.color, opacity: 0.7 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scan line effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
          <motion.div
            animate={{ y: ["−100%", "400%"] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
              repeatDelay: 3,
            }}
            className="w-full h-8 bg-gradient-to-b from-transparent via-emerald-400/4 to-transparent"
          />
        </div>
      </div>

      {/* Floating badges */}
      <motion.div
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-4 top-1/4 glass-card rounded-xl px-3 py-2 border border-emerald-500/20 shadow-lg"
      >
        <p className="text-[9px] text-[#4a6a57] font-mono">AI INSIGHT</p>
        <p className="text-[11px] text-emerald-300 font-medium mt-0.5">
          Reduce HVAC emissions by 18%
        </p>
      </motion.div>

      <motion.div
        animate={{ y: [4, -4, 4] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute -right-4 top-1/2 glass-card rounded-xl px-3 py-2 border border-emerald-500/20 shadow-lg"
      >
        <p className="text-[9px] text-[#4a6a57] font-mono">COMPLIANCE</p>
        <p className="text-[11px] text-emerald-300 font-medium mt-0.5">
          IFRS S2 ✓ Ready
        </p>
      </motion.div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-60" />
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            {/* Badge */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariant}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="badge-emerald">
                AI-Powered Sustainability Platform
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={0.1}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariant}
              className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
            >
              <span className="text-white">Measure</span>
              <span className="text-emerald-900/60 mx-3">·</span>
              <br className="hidden sm:block" />
              <span className="gradient-text">Manage</span>
              <span className="text-emerald-900/60 mx-3">·</span>
              <br className="hidden sm:block" />
              <span className="text-white">Mitigate</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              custom={0.25}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariant}
              className="text-[#7a9e8a] text-lg leading-relaxed mb-8 max-w-lg"
            >
              URIMPACT enables organizations to measure GHG emissions, manage
              ESG performance, automate sustainability reporting, and accelerate
              decarbonization through AI-driven insights and Nature-Based
              Solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              custom={0.4}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariant}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link
                href="#demo"
                className="group flex items-center gap-2 px-7 py-4 bg-emerald-500 hover:bg-emerald-400 text-[#0a0f0d] font-semibold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-emerald-500/25 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span className="w-2 h-2 rounded-full bg-[#0a0f0d]/40 dot-pulse" />
                Request Demo
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </Link>

              <Link
                href="#platform"
                className="flex items-center gap-2 px-7 py-4 border border-emerald-700/50 text-emerald-300 hover:border-emerald-500 hover:text-emerald-200 hover:bg-emerald-500/5 rounded-xl font-medium transition-all duration-200"
              >
                Explore Platform
              </Link>
            </motion.div>

            {/* Trust Strip */}
            <motion.div
              custom={0.55}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariant}
            >
              <p className="text-[11px] text-[#3d5a47] font-mono uppercase tracking-wider mb-3">
                Aligned With Global Standards
              </p>
              <div className="flex flex-wrap gap-2">
                {trustItems.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-[11px] font-mono text-[#4a6a57] border border-[#1c3a28] rounded-lg bg-charcoal-800/40 hover:border-emerald-700/50 hover:text-emerald-400 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <DashboardMockup />
          </motion.div>
        </div>

        {/* Bottom scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] text-[#3d5a47] font-mono uppercase tracking-wider">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border border-[#1c3a28] flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-emerald-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
