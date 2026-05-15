"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../context/LangContext";
import { content } from "../data/content";

export default function CaseStudies() {
  const { lang, t } = useLang();
  const cs = content.caseStudies;
  const isAr = lang === "ar";
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-32 bg-[#050D0A] overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className={`mb-16 ${isAr ? "text-right" : ""}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex items-center gap-3 mb-6 ${isAr ? "flex-row-reverse justify-end" : ""}`}
          >
            <span className="w-8 h-px bg-[#00E5A0]" />
            <span className="text-[#00E5A0] text-sm font-semibold uppercase tracking-widest">
              {t(cs.sectionLabel)}
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-black text-white"
          >
            {t(cs.headline)}
          </motion.h2>
        </div>

        <div
          className={`flex gap-2 mb-10 flex-wrap ${isAr ? "flex-row-reverse" : ""}`}
        >
          {cs.cases.map((c, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium border transition-all duration-300 ${
                active === i
                  ? "bg-[#00E5A0] text-[#050D0A] border-transparent"
                  : "border-white/10 text-white/50 hover:text-white hover:border-white/20"
              }`}
            >
              {t(c.industry)}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-3 gap-6"
          >
            <div
              className={`p-8 rounded-2xl border border-white/10 bg-white/[0.03] ${isAr ? "text-right" : ""}`}
            >
              <div className="text-[#00E5A0] text-xs font-semibold uppercase tracking-widest mb-4">
                {lang === "ar" ? "التحدي" : "The Challenge"}
              </div>
              <p className="text-white/70 leading-relaxed">
                {t(cs.cases[active].challenge)}
              </p>
            </div>

            <div
              className={`p-8 rounded-2xl border border-[#00C2FF]/20 bg-[#00C2FF]/5 ${isAr ? "text-right" : ""}`}
            >
              <div className="text-[#00C2FF] text-xs font-semibold uppercase tracking-widest mb-4">
                {lang === "ar" ? "الحل" : "The Solution"}
              </div>
              <p className="text-white/70 leading-relaxed">
                {t(cs.cases[active].solution)}
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-[#00E5A0]/20 bg-[#00E5A0]/5">
              <div
                className={`text-[#00E5A0] text-xs font-semibold uppercase tracking-widest mb-6 ${isAr ? "text-right" : ""}`}
              >
                {lang === "ar" ? "النتائج" : "The Results"}
              </div>
              <div className="space-y-6">
                {[cs.cases[active].stat1, cs.cases[active].stat2].map(
                  (stat, i) => (
                    <div key={i} className={isAr ? "text-right" : ""}>
                      <div className="text-4xl font-black text-[#00E5A0] leading-none">
                        {stat.value}
                      </div>
                      <div className="text-white/50 text-sm mt-1">
                        {t(stat.label)}
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={`mt-8 text-white/30 text-xs ${isAr ? "text-right" : ""}`}
        >
          {lang === "ar"
            ? "* تعتمد هذه النتائج على مبادرات تجريبية ومحاكاة حالات الاستخدام"
            : "* These outcomes are based on pilot initiatives and use-case simulations"}
        </motion.p>
      </div>
    </section>
  );
}
