"use client";
import { motion } from "framer-motion";
import { useLang } from "../context/LangContext";
import { content } from "../data/content";

export default function Partners() {
  const { t } = useLang();
  const p = content.partners;

  // Duplicate for infinite marquee
  const doubled = [...p.items, ...p.items];

  return (
    <section className="relative py-20 overflow-hidden bg-[#030A07] border-y border-white/5">
      {/* subtle top gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#030A07] via-transparent to-[#030A07] z-10 pointer-events-none" />

      <div className="relative z-0 max-w-7xl mx-auto px-6 mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00E5A0]/20 bg-[#00E5A0]/5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5A0]" />
            <span className="text-[#00E5A0] text-xs font-semibold uppercase tracking-widest">
              {t(p.sectionLabel)}
            </span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-white">
            {t(p.headline)}
          </h2>
        </motion.div>
      </div>

      {/* Marquee track */}
      <div className="relative overflow-hidden">
        {/* Left/right fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030A07] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030A07] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-8 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 28,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {doubled.map((partner, i) => (
            <div
              key={i}
              className="flex-shrink-0 h-20 w-44 flex items-center justify-center px-6 rounded-xl border border-white/6 bg-white/3 hover:border-[#00E5A0]/20 hover:bg-white/5 transition-all duration-300 group"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-10 max-w-full object-contain opacity-40 group-hover:opacity-80 transition-opacity duration-300 filter brightness-0 invert"
                onError={(e) => {
                  // Fallback to text if logo fails
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `<span class="text-white/40 text-xs font-medium text-center leading-tight">${partner.name}</span>`;
                  }
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
