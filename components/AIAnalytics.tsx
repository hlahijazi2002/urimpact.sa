"use client";
import { motion } from "framer-motion";
import { useLang } from "../context/LangContext";
import { content } from "../data/content";
import { Icon } from "@/data/icons";

export default function AIAnalytics() {
  const { lang, t } = useLang();
  const ai = content.ai;
  const isAr = lang === "ar";

  return (
    <section className="relative py-10 md:py-14 lg:py-16 bg-[#030A07] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#7B61FF]/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7B61FF]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className={`text-center mb-20 ${isAr ? "text-right" : ""}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex items-center gap-3 mb-6 ${isAr ? "flex-row-reverse justify-end" : "justify-center"}`}
          >
            <span className="w-8 h-px bg-[#7B61FF]" />
            <span className="text-[#7B61FF] text-sm font-semibold uppercase tracking-widest">
              {t(ai.sectionLabel)}
            </span>
            <span className="w-8 h-px bg-[#7B61FF]" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-black text-white mb-6"
          >
            {t(ai.headline)}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-white/60 text-lg max-w-2xl  leading-relaxed ${isAr ? "text-right" : "mx-auto"}`}
          >
            {t(ai.body)}
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ai.features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent hover:border-[#7B61FF]/40 transition-all duration-300 overflow-hidden ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""} ${isAr ? "text-right" : ""}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#7B61FF]/0 to-[#7B61FF]/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                  <Icon name={feat.icon} size={24} />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  {t(feat.title)}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {t(feat.desc)}
                </p>
              </div>

              <div
                className={`absolute top-4 ${isAr ? "left-4" : "right-4"} text-white/10 font-black text-4xl`}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
