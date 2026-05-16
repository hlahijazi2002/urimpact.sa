"use client";
import { motion } from "framer-motion";
import { useLang } from "../context/LangContext";
import { content } from "../data/content";

export default function SatelliteComparison() {
  const { lang, t } = useLang();
  const s = content.satelliteComparison;
  const isAr = lang === "ar";

  return (
    <section className="relative py-14 md:py-20 lg:py-26 overflow-hidden bg-[#030A07]">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#00E5A0]/4 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-center mb-16 ${isAr ? "text-right" : ""}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00E5A0]/20 bg-[#00E5A0]/5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5A0]" />
            <span className="text-[#00E5A0] text-xs font-semibold uppercase tracking-widest">
              {t(s.sectionLabel)}
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white">
            {t(s.headline)}
          </h2>
        </motion.div>

        <div className={`grid lg:grid-cols-2 gap-8`}>
          {/* Traditional — Red-tinted */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-red-500/15 bg-red-500/3 p-8"
          >
            <div className={`flex items-center gap-3 mb-8`}>
              <div className="w-8 h-8 rounded-lg bg-red-500/15 flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#f87171"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M15 9l-6 6M9 9l6 6" />
                </svg>
              </div>
              <h3 className={`text-white/70 font-bold text-base`}>
                {t(s.traditional.title)}
              </h3>
            </div>
            <div className="space-y-4">
              {s.traditional.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex gap-4 p-4 rounded-xl border border-red-500/10 bg-red-500/5`}
                >
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white/70 font-semibold text-sm mb-1">
                      {t(item.title)}
                    </p>
                    <p className="text-white/35 text-xs leading-relaxed">
                      {t(item.desc)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Automated — Green-tinted */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-[#00E5A0]/20 bg-[#00E5A0]/3 p-8"
          >
            <div className={`flex items-center gap-3 mb-4`}>
              <div className="w-8 h-8 rounded-lg bg-[#00E5A0]/15 flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#00E5A0"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12l3 3 5-5" />
                </svg>
              </div>
              <h3 className={`text-white font-bold text-base`}>
                {t(s.automated.title)}
              </h3>
            </div>
            <p className={`text-white/45 text-sm leading-relaxed mb-7`}>
              {t(s.automated.body)}
            </p>
            <div className="space-y-4">
              {s.automated.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.1 }}
                  className={`flex gap-4 p-4 rounded-xl border border-[#00E5A0]/12 bg-[#00E5A0]/5 hover:bg-[#00E5A0]/8 transition-colors `}
                >
                  <div className="w-10 h-10 rounded-lg bg-[#00E5A0]/10 flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">
                      {t(item.title)}
                    </p>
                    <p className="text-white/40 text-xs leading-relaxed">
                      {t(item.desc)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
