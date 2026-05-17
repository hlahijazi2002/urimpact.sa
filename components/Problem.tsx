"use client";
import { motion } from "framer-motion";
import { useLang } from "../context/LangContext";
import { content } from "../data/content";

export default function Problem() {
  const { lang, t } = useLang();
  const p = content.problem;
  const isAr = lang === "ar";

  return (
    <section
      className="relative py-8 md:py-14 lg:py-16overflow-hidden bg-[#050D0A]"
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* Subtle separator line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-[#00E5A0]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`flex items-center gap-3 mb-8 ${isAr ? "flex-row-reverse justify-end" : ""}`}
        >
          <span className="w-8 h-px bg-[#00E5A0]" />
          <span className="text-[#00E5A0] text-sm font-semibold uppercase tracking-widest">
            {t(p.sectionLabel)}
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-5 md:gap-10 items-start mb-10 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={isAr ? "text-right" : ""}
          >
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              {t(p.headline)}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className={`space-y-4 ${isAr ? "text-right" : ""}`}
          >
            <p className="text-white/60 text-lg leading-relaxed">{t(p.body)}</p>
            <p className="text-[#00E5A0] font-medium">{t(p.transition)}</p>
          </motion.div>
        </div>

        {/* Problem Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {p.cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 rounded-2xl p-6 hover:border-[#00E5A0]/30 transition-all duration-300 overflow-hidden ${isAr ? "text-right" : ""}`}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00E5A0]/0 to-[#00E5A0]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="text-3xl mb-4">{card.icon}</div>
                <h3 className="text-white font-bold text-base mb-2">
                  {t(card.title)}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {t(card.desc)}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#00E5A0]/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
