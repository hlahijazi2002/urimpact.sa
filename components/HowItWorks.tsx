"use client";
import { motion } from "framer-motion";
import { useLang } from "../context/LangContext";
import { content } from "../data/content";

export default function HowItWorks() {
  const { lang, t } = useLang();
  const h = content.howItWorks;
  const isAr = lang === "ar";

  return (
    <section className="relative py-14 md:py-20 lg:py-26 bg-[#030A07] overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(0,229,160,1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-20 ${isAr ? "text-right" : ""}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex items-center gap-3 mb-6 ${isAr ? "flex-row-reverse justify-end" : "justify-center"}`}
          >
            <span className="w-8 h-px bg-[#00E5A0]" />
            <span className="text-[#00E5A0] text-sm font-semibold uppercase tracking-widest">
              {t(h.sectionLabel)}
            </span>
            <span className="w-8 h-px bg-[#00E5A0]" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-black text-white"
          >
            {t(h.headline)}
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div
            className={`absolute top-16 ${isAr ? "right-0" : "left-0"} right-0 h-px bg-gradient-to-r from-transparent via-[#00E5A0]/30 to-transparent hidden lg:block`}
          />

          <div
            className={`grid lg:grid-cols-5 gap-8 ${isAr ? "direction-rtl" : ""}`}
          >
            {h.steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className={`relative group text-center ${isAr ? "text-right lg:text-right" : ""}`}
              >
                {/* Number bubble */}
                <div className="relative flex justify-center mb-6">
                  <div className="relative w-16 h-16 rounded-2xl bg-[#0A1A14] border border-[#00E5A0]/30 flex items-center justify-center group-hover:border-[#00E5A0]/60 transition-all duration-300 group-hover:shadow-[0_0_24px_rgba(0,229,160,0.2)]">
                    <span className="text-[#00E5A0] font-black text-lg">
                      {step.num}
                    </span>
                  </div>
                  {/* Arrow connector (desktop) */}
                  {i < h.steps.length - 1 && (
                    <div
                      className={`absolute top-1/2 ${isAr ? "left-0 -translate-x-full" : "right-0 translate-x-full"} -translate-y-1/2 hidden lg:flex items-center`}
                    >
                      <div className="w-8 h-px bg-[#00E5A0]/30" />
                      <div
                        className={`w-0 h-0 border-t-4 border-b-4 border-transparent ${isAr ? "border-r-4 border-r-[#00E5A0]/30 rotate-180" : "border-l-4 border-l-[#00E5A0]/30"}`}
                      />
                    </div>
                  )}
                </div>

                <h3 className="text-white font-bold text-lg mb-2">
                  {t(step.title)}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {t(step.desc)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
