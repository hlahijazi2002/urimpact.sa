"use client";
import { motion } from "framer-motion";
import { useLang } from "../context/LangContext";
import { content } from "../data/content";

export default function Frameworks() {
  const { lang, t } = useLang();
  const f = content.frameworks;
  const isAr = lang === "ar";

  return (
    <section id="frameworks" className="relative py-32 bg-[#050D0A] overflow-hidden">
      {/* Left glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#00C2FF]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div className={isAr ? "text-right order-2 lg:order-1" : ""}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex items-center gap-3 mb-6 ${isAr ? "flex-row-reverse justify-end" : ""}`}
            >
              <span className="w-8 h-px bg-[#00C2FF]" />
              <span className="text-[#00C2FF] text-sm font-semibold uppercase tracking-widest">{t(f.sectionLabel)}</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight"
            >
              {t(f.headline)}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-white/60 text-lg leading-relaxed"
            >
              {t(f.body)}
            </motion.p>
          </div>

          {/* Right: Framework badges */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`grid grid-cols-4 gap-3 ${isAr ? "order-1 lg:order-2" : ""}`}
          >
            {f.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ scale: 1.05, borderColor: "rgba(0,194,255,0.5)" }}
                className="aspect-square flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 hover:bg-[#00C2FF]/10 transition-all duration-300 cursor-default group"
              >
                <span className="text-white/70 font-bold text-xs text-center px-2 group-hover:text-white transition-colors">
                  {item}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
