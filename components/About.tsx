"use client";
import { motion } from "framer-motion";
import { useLang } from "../context/LangContext";
import { content } from "../data/content";
import { Icon } from "../data/icons";
import type { IconName } from "../data/icons";

export default function About() {
  const { lang, t } = useLang();
  const a = content.about;
  const isAr = lang === "ar";

  return (
    <section
      id="about"
      className="relative py-10 md:py-14 lg:py-16 bg-[#030A07] overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#00E5A0]/5 via-transparent to-[#00C2FF]/5 rounded-full blur-3xl" />
      <div className="relative z-10 container-main">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className={isAr ? "text-right" : ""}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex items-center gap-3 mb-6 ${isAr ? "flex-row-reverse justify-end" : ""}`}
            >
              <span className="w-8 h-px bg-[#00E5A0]" />
              <span className="text-[#00E5A0] text-sm font-semibold uppercase tracking-widest">
                {t(a.sectionLabel)}
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-black text-white mb-6"
            >
              {t(a.headline)}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-white/60 text-lg leading-relaxed"
            >
              {t(a.body)}
            </motion.p>
          </div>

          <div className="space-y-6">
            {[
              {
                data: a.mission,
                color: "#00E5A0",
                icon: "decarb-rec" as IconName,
              },
              {
                data: a.vision,
                color: "#00C2FF",
                icon: "emission-map" as IconName,
              },
            ].map(({ data, color, icon }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isAr ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`group p-8 rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300`}
              >
                <div className={`flex items-center gap-4 mb-4`}>
                  <Icon name={icon} size={24} color={color} />
                  <span
                    className="text-sm font-semibold uppercase tracking-widest"
                    style={{
                      color: color === "#00E5A0" ? "#007a4d" : "#0077a8",
                    }}
                  >
                    {t(data.label)}
                  </span>
                </div>
                <p className="text-white/70 leading-relaxed">{t(data.text)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
