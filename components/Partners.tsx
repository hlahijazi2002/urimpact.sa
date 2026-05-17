"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLang } from "../context/LangContext";
import { content } from "../data/content";

export default function Partners() {
  const { lang, t } = useLang();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isAr = mounted && lang === "ar";
  const p = content.partners;
  const tripled = [...p.items, ...p.items, ...p.items];

  return (
    <section
      className="relative py-8 md:py-14 lg:py-16overflow-hidden dark:bg-[#050D0A] bg-gray-50"
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 dark:opacity-[0.02] opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,229,160,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,160,1) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00E5A0]/20 bg-[#00E5A0]/5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5A0]" />
            <span className="text-[#00E5A0] text-xs font-semibold uppercase tracking-widest">
              {t(p.sectionLabel)}
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-black dark:text-white text-gray-900 mb-3">
            {t(p.headline)}
          </h2>
          <p className="dark:text-white/40 text-gray-500 text-base max-w-xl mx-auto">
            {t({
              en: "Trusted by leading universities, government bodies, and research institutions across Saudi Arabia.",
              ar: "موثوق به من قِبَل الجامعات الرائدة والجهات الحكومية ومراكز البحث في المملكة العربية السعودية.",
            })}
          </p>
        </motion.div>

        <div className="relative overflow-hidden" dir="ltr">
          <div className="absolute left-0 top-0 bottom-0 w-24 lg:w-40 dark:bg-gradient-to-r dark:from-[#050D0A] bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 lg:w-40 dark:bg-gradient-to-l dark:from-[#050D0A] bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-5 py-3"
            style={{ width: "max-content" }}
            animate={{ x: ["0%", `-${100 / 3}%`] }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          >
            {tripled.map((partner, i) => (
              <div
                key={i}
                className="group bg-white flex-shrink-0 w-60 h-28 flex items-center justify-center px-3 rounded-2xl border border-gray-200/60 dark:border-white/10 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-16 max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<span style="color:#1A2E2B;font-size:11px;font-weight:700;text-align:center;line-height:1.4">${partner.name}</span>`;
                    }
                  }}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 grid md:grid-cols-3 gap-4 "
        >
          {[
            {
              val: "9+",
              label: { en: "Official Partners", ar: "شريك رسمي" },
              icon: "🤝",
            },
            {
              val: "5+",
              label: { en: "Government Bodies", ar: "جهة حكومية" },
              icon: "🏛️",
            },
            {
              val: "4+",
              label: { en: "Universities", ar: "جامعة" },
              icon: "🎓",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex md:flex-col items-center justify-around md:justify-center py-6 rounded-2xl border dark:border-white/6 border-gray-200 dark:bg-white/2 bg-white hover:border-[#00E5A0]/30 dark:hover:border-[#00E5A0]/20 shadow-sm dark:shadow-none transition-colors duration-300"
            >
              <span className="text-2xl mb-2">{stat.icon}</span>
              <span className="text-3xl font-black dark:text-white text-gray-900 mb-1">
                {stat.val}
              </span>
              <span className="dark:text-white/40 text-gray-500 text-xs font-medium">
                {t(stat.label)}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
