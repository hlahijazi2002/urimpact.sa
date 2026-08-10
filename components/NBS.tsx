"use client";
import { motion } from "framer-motion";
import { useLang } from "../context/LangContext";
import { content } from "../data/content";
import { Icon } from "../data/icons";

export default function NBS() {
  const { lang, t } = useLang();
  const n = content.nbs;
  const isAr = lang === "ar";

  return (
    <section
      id="nbs"
      className="relative py-10 md:py-14 lg:py-16 overflow-hidden bg-[#050D0A]"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#050D0A] via-[#0A1A0D]/80 to-[#050D0A]" />
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="200" cy="400" rx="300" ry="200" fill="#00E5A0" />
          <ellipse cx="1200" cy="300" rx="250" ry="180" fill="#39D353" />
          <ellipse cx="700" cy="700" rx="400" ry="150" fill="#00C2FF" />
        </svg>
        <div className="absolute inset-0 backdrop-blur-3xl" />
      </div>

      <div className="relative z-10 container-main">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`relative`}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {[1, 0.75, 0.5, 0.25].map((scale, i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                  transition={{
                    duration: 20 + i * 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 m-auto rounded-full border border-[#00E5A0]/20"
                  style={{
                    width: `${scale * 100}%`,
                    height: `${scale * 100}%`,
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              ))}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-gradient-to-br from-[#00E5A0] to-[#39D353] flex items-center justify-center shadow-[0_0_60px_rgba(0,229,160,0.4)]">
                <Icon name="leaf" size={40} className="text-[#050D0A]" />
              </div>
              {(["tree", "water-drop", "sun", "globe"] as const).map(
                (icon, i) => {
                  const angle = (i / 4) * 2 * Math.PI;
                  const r = 42;
                  const x = 50 + r * Math.cos(angle);
                  const y = 50 + r * Math.sin(angle);
                  return (
                    <div
                      key={i}
                      className="absolute w-12 h-12 rounded-full bg-[#0A1A14] border border-[#00E5A0]/30 flex items-center justify-center shadow-lg"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <Icon name={icon} size={20} className="text-[#00E5A0]" />
                    </div>
                  );
                },
              )}
            </div>
          </motion.div>

          <div className={isAr ? "text-right order-1" : ""}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex items-center gap-3 mb-6 ${isAr ? "flex-row-reverse justify-end" : ""}`}
            >
              <span className="w-8 h-px bg-[#00E5A0]" />
              <span className="text-[#00E5A0] text-sm font-semibold uppercase tracking-widest">
                {t(n.sectionLabel)}
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight"
            >
              {t(n.headline)}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-white/60 text-lg leading-relaxed mb-10"
            >
              {t(n.body)}
            </motion.p>

            <div className="space-y-3">
              {n.highlights.map((hl, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isAr ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className={`flex items-center gap-4 p-4 rounded-xl border border-[#39D353]/20 bg-[#39D353]/5 hover:bg-[#39D353]/10 transition-colors`}
                >
                  <div className="w-2 h-2 rounded-full bg-[#39D353] flex-shrink-0" />
                  <span className="text-white font-medium">{t(hl)}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
