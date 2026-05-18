"use client";
import { motion } from "framer-motion";
import { useLang } from "../context/LangContext";
import { content } from "../data/content";

export default function CTA() {
  const { lang, t } = useLang();
  const c = content.cta;
  const isAr = lang === "ar";

  return (
    <section
      id="contact"
      className="relative py-10 md:py-14 lg:py-16 overflow-hidden bg-[#050D0A]"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00E5A0]/10 via-[#050D0A] to-[#00C2FF]/10" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,229,160,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,160,1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00E5A0]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#00E5A0]/30" />
            <span className="text-[#00E5A0] text-sm font-semibold uppercase tracking-widest">
              Net Zero
            </span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#00E5A0]/30" />
          </div>

          <h2
            className={`text-4xl lg:text-6xl font-black text-white mb-6 leading-tight ${isAr ? "text-right" : ""}`}
          >
            {t(c.headline)}
          </h2>
          <p
            className={`text-white/50 text-lg mb-12 max-w-2xl mx-auto ${isAr ? "text-right" : ""}`}
          >
            {t(c.sub)}
          </p>

          <div className={`flex gap-4 justify-center flex-wrap`}>
            <motion.a
              href="/demo"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 rounded-xl bg-gradient-to-r from-[#00E5A0] to-[#00C2FF] text-[#050D0A] font-bold text-lg hover:shadow-[0_0_60px_rgba(0,229,160,0.5)] transition-shadow"
            >
              {t(c.btn1)}
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 rounded-xl border border-white/20 text-white font-medium text-lg hover:bg-white/5 hover:border-white/40 transition-all"
            >
              {t(c.btn2)}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
