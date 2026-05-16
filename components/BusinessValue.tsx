"use client";
import { motion } from "framer-motion";
import { useLang } from "../context/LangContext";
import { content } from "../data/content";

export default function BusinessValue() {
  const { lang, t } = useLang();
  const bv = content.businessValue;
  const isAr = lang === "ar";

  return (
    <section
      className="relative py-14 md:py-20 lg:py-26 bg-[#030A07] overflow-hidden"
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* Big text BG */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <span className="text-[20vw] font-black text-white/[0.02] leading-none select-none whitespace-nowrap">
          IMPACT
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-10 lg:mb-20 ${isAr ? "text-right" : ""}`}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex items-center gap-3  mb-6 ${isAr ? "flex-row-reverse justify-end" : "justify-center"}`}
          >
            <span className="w-8 h-px bg-[#00E5A0]" />
            <span className="text-[#00E5A0] text-sm font-semibold uppercase tracking-widest">
              {t(bv.sectionLabel)}
            </span>
            <span className="w-8 h-px bg-[#00E5A0]" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-black text-white"
          >
            {t(bv.headline)}
          </motion.h2>
        </div>

        {/* Metrics */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {bv.metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative flex flex-col items-center text-center p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent hover:border-[#00E5A0]/40 transition-all duration-300 overflow-hidden `}
            >
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E5A0]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {metric.icon}
              </div>
              <div className="text-4xl font-black text-[#00E5A0] mb-2 leading-none">
                {metric.value}
              </div>
              <div className="text-white/50 text-sm leading-tight">
                {t(metric.label)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
