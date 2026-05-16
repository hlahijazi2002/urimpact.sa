"use client";
import { motion } from "framer-motion";
import { useLang } from "../context/LangContext";
import { content } from "../data/content";

// Each framework gets its own color identity
const FRAMEWORK_STYLES: Record<
  string,
  { bg: string; border: string; text: string; dot: string; abbr: string }
> = {
  GRI: {
    bg: "bg-[#1B4332]/60",
    border: "border-[#2D6A4F]/50",
    text: "text-[#52B788]",
    dot: "bg-[#52B788]",
    abbr: "Global Reporting Initiative",
  },
  SASB: {
    bg: "bg-[#1A3A5C]/60",
    border: "border-[#2563EB]/40",
    text: "text-[#60A5FA]",
    dot: "bg-[#60A5FA]",
    abbr: "Sustainability Accounting",
  },
  TCFD: {
    bg: "bg-[#312E81]/60",
    border: "border-[#6D28D9]/40",
    text: "text-[#A78BFA]",
    dot: "bg-[#A78BFA]",
    abbr: "Climate Financial Disclosures",
  },
  "IFRS S1/S2": {
    bg: "bg-[#7C2D12]/60",
    border: "border-[#EA580C]/40",
    text: "text-[#FB923C]",
    dot: "bg-[#FB923C]",
    abbr: "International Financial Reporting",
  },
  CSRD: {
    bg: "bg-[#14532D]/60",
    border: "border-[#16A34A]/40",
    text: "text-[#4ADE80]",
    dot: "bg-[#4ADE80]",
    abbr: "Corporate Sustainability Reporting",
  },
  "GHG Protocol": {
    bg: "bg-[#164E63]/60",
    border: "border-[#0891B2]/40",
    text: "text-[#22D3EE]",
    dot: "bg-[#22D3EE]",
    abbr: "Greenhouse Gas Protocol",
  },
  CDP: {
    bg: "bg-[#1E3A5F]/60",
    border: "border-[#2980B9]/40",
    text: "text-[#5BA4E5]",
    dot: "bg-[#5BA4E5]",
    abbr: "Carbon Disclosure Project",
  },
  "UN SDGs": {
    bg: "bg-[#4A1942]/60",
    border: "border-[#9333EA]/40",
    text: "text-[#E879F9]",
    dot: "bg-[#E879F9]",
    abbr: "Sustainable Development Goals",
  },
};

export default function Frameworks() {
  const { lang, t } = useLang();
  const f = content.frameworks;
  const isAr = lang === "ar";

  return (
    <section
      id="frameworks"
      className="relative py-12 md:py-16 lg:py-26 bg-[#050D0A] overflow-hidden"
    >
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#00C2FF]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex items-center gap-3 mb-6 ${isAr ? "flex-row-reverse justify-end" : ""}`}
            >
              <span className="w-8 h-px bg-[#00C2FF]" />
              <span className="text-[#00C2FF] text-sm font-semibold uppercase tracking-widest">
                {t(f.sectionLabel)}
              </span>
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
              className="text-white/60 text-lg leading-relaxed mb-8"
            >
              {t(f.body)}
            </motion.p>

            {/* Compliance note */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#00C2FF]/20 bg-[#00C2FF]/5 ${isAr ? "flex-row-reverse" : ""}`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C2FF] animate-pulse" />
              <span className="text-[#00C2FF] text-xs font-semibold">
                {isAr
                  ? "متوافق مع ٨ أطر دولية"
                  : "Aligned with 8 global frameworks"}
              </span>
            </motion.div>
          </div>

          {/* Right: colored framework badges */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`grid grid-cols-2 gap-3 ${isAr ? "lg:order-2" : ""}`}
          >
            {f.items.map((item, i) => {
              const style = FRAMEWORK_STYLES[item] ?? {
                bg: "bg-white/5",
                border: "border-white/10",
                text: "text-white/70",
                dot: "bg-white/40",
                abbr: "",
              };
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.85, y: 12 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  whileHover={{ scale: 1.03, y: -2 }}
                  className={`relative flex flex-col justify-between p-4 rounded-2xl border ${style.bg} ${style.border} cursor-default group overflow-hidden transition-all duration-300`}
                >
                  {/* Glow on hover */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${style.bg} blur-sm`}
                  />

                  <div className="relative z-10">
                    {/* Top row: dot + name */}
                    <div
                      className={`flex items-center gap-2 mb-2 ${isAr ? "flex-row-reverse" : ""}`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full flex-shrink-0 ${style.dot}`}
                      />
                      <span
                        className={`font-black text-base tracking-tight ${style.text}`}
                      >
                        {item}
                      </span>
                    </div>
                    {/* Full name */}
                    <p className="text-white/35 text-[10px] leading-snug font-medium">
                      {style.abbr}
                    </p>
                  </div>

                  {/* Bottom: "Aligned" badge */}
                  <div
                    className={`relative z-10 mt-3 flex ${isAr ? "justify-end" : "justify-start"}`}
                  >
                    <span
                      className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border ${style.border} ${style.text} bg-black/20`}
                    >
                      {isAr ? "متوافق" : "Aligned"}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
