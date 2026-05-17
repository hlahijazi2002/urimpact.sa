"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../context/LangContext";
import { content } from "../data/content";

export default function Platform() {
  const { lang, t } = useLang();
  const pl = content.platform;
  const isAr = lang === "ar";
  const [active, setActive] = useState(0);

  const activeModule = pl.modules[active];

  return (
    <section
      id="platform"
      className="relative py-8 md:py-14 lg:py-16bg-[#050D0A] overflow-hidden"
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* Background accent */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00E5A0]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`mb-16 ${isAr ? "text-right" : ""}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex items-center gap-3 mb-6 `}
          >
            <span className="w-8 h-px bg-[#00E5A0]" />
            <span className="text-[#00E5A0] text-sm font-semibold uppercase tracking-widest">
              {t(pl.sectionLabel)}
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-black text-white mb-6 max-w-2xl"
          >
            {t(pl.headline)}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-white/60 text-lg max-w-2xl leading-relaxed"
          >
            {t(pl.intro)}
          </motion.p>
        </div>

        {/* Tab Selector */}
        <div className={`flex flex-wrap gap-2 mb-12 `}>
          {pl.modules.map((mod, i) => (
            <motion.button
              key={mod.id}
              onClick={() => setActive(i)}
              whileTap={{ scale: 0.97 }}
              className={`flex items-center gap-3 px-5 py-3 rounded-xl border text-sm font-medium transition-all duration-300 ${
                active === i
                  ? "border-transparent text-[#050D0A] shadow-lg"
                  : "border-white/10 text-white/50 hover:text-white hover:border-white/20 bg-transparent"
              }`}
              style={
                active === i
                  ? {
                      background: `linear-gradient(135deg, ${mod.color}ee, ${mod.color}99)`,
                    }
                  : {}
              }
            >
              <span className="text-xl">{mod.icon}</span>
              {t(mod.title)}
            </motion.button>
          ))}
        </div>

        {/* Module Detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-10 items-center"
          >
            {/* Left: Detail */}
            <div className={`space-y-8`}>
              <div>
                <div
                  className="flex items-center gap-4 mb-4"
                  style={{ flexDirection: "row" }}
                >
                  <span
                    className="text-4xl w-14 h-14 flex items-center justify-center rounded-2xl"
                    style={{
                      background: `${activeModule.color}15`,
                      color: activeModule.color,
                    }}
                  >
                    {activeModule.icon}
                  </span>
                  <h3 className="text-3xl font-black text-white">
                    {t(activeModule.title)}
                  </h3>
                </div>
                <p className="text-white/60 text-base leading-relaxed">
                  {t(activeModule.desc)}
                </p>
              </div>

              <div className={`grid grid-cols-2 gap-3`}>
                {activeModule.features.map((feat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: isAr ? 10 : -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className={`flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 `}
                  >
                    <span
                      className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center"
                      style={{ background: `${activeModule.color}20` }}
                    >
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ background: activeModule.color }}
                      />
                    </span>
                    <span className="text-white/70 text-sm">{t(feat)}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Visual card */}
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-3xl blur-2xl opacity-20"
                style={{
                  background: `radial-gradient(circle, ${activeModule.color}, transparent)`,
                }}
              />
              <div className="relative bg-[#0A1A14]/80 border border-white/10 rounded-2xl p-8 overflow-hidden">
                <div
                  className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-20"
                  style={{ background: activeModule.color }}
                />
                <div className="relative z-10">
                  <div className="text-6xl mb-4 opacity-60">
                    {activeModule.icon}
                  </div>
                  <h4
                    className={`text-2xl font-bold text-white mb-3 `}
                    style={{ color: activeModule.color }}
                  >
                    {t(activeModule.title)}
                  </h4>
                  {/* Feature chips grid */}
                  <div className="mt-6 grid grid-cols-2 gap-2">
                    {activeModule.features.map((feat, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 bg-white/5"
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          style={{ flexShrink: 0 }}
                        >
                          <path
                            d="M20 6L9 17l-5-5"
                            stroke={activeModule.color}
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="text-white/60 text-xs leading-tight">
                          {t(feat)}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
