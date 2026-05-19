"use client";
import { motion } from "framer-motion";
import { useLang } from "../context/LangContext";
import { content } from "../data/content";

const FRAMEWORK_STYLES: Record<
  string,
  {
    darkCard: string;
    lightCard: string;
    nameText: string;
    lightNameText: string;
    dot: string;
    lightDot: string;
    badge: string;
    lightBadge: string;
    abbr: string;
    abbrAr: string;
  }
> = {
  GRI: {
    darkCard:
      "dark:bg-[#1B4332]/60 dark:border-[#2D6A4F]/50 dark:hover:bg-[#1B4332]/80",
    lightCard: "bg-[#ECFDF5] border-[#6EE7B7]/60 hover:bg-[#D1FAE5]",
    nameText: "dark:text-[#52B788]",
    lightNameText: "text-[#065F46]",
    dot: "dark:bg-[#52B788]",
    lightDot: "bg-[#059669]",
    badge: "dark:border-[#2D6A4F]/50 dark:text-[#52B788]",
    lightBadge: "border-[#6EE7B7]/60 text-[#065F46]",
    abbr: "Global Reporting Initiative",
    abbrAr: "مبادرة التقارير العالمية",
  },
  SASB: {
    darkCard:
      "dark:bg-[#1A3A5C]/60 dark:border-[#2563EB]/40 dark:hover:bg-[#1A3A5C]/80",
    lightCard: "bg-[#EFF6FF] border-[#93C5FD]/60 hover:bg-[#DBEAFE]",
    nameText: "dark:text-[#60A5FA]",
    lightNameText: "text-[#1D4ED8]",
    dot: "dark:bg-[#60A5FA]",
    lightDot: "bg-[#2563EB]",
    badge: "dark:border-[#2563EB]/40 dark:text-[#60A5FA]",
    lightBadge: "border-[#93C5FD]/60 text-[#1D4ED8]",
    abbr: "Sustainability Accounting",
    abbrAr: "محاسبة الاستدامة",
  },
  TCFD: {
    darkCard:
      "dark:bg-[#312E81]/60 dark:border-[#6D28D9]/40 dark:hover:bg-[#312E81]/80",
    lightCard: "bg-[#F5F3FF] border-[#C4B5FD]/60 hover:bg-[#EDE9FE]",
    nameText: "dark:text-[#A78BFA]",
    lightNameText: "text-[#6D28D9]",
    dot: "dark:bg-[#A78BFA]",
    lightDot: "bg-[#7C3AED]",
    badge: "dark:border-[#6D28D9]/40 dark:text-[#A78BFA]",
    lightBadge: "border-[#C4B5FD]/60 text-[#6D28D9]",
    abbr: "Climate Financial Disclosures",
    abbrAr: "الإفصاحات المناخية المالية",
  },
  "IFRS S1/S2": {
    darkCard:
      "dark:bg-[#7C2D12]/60 dark:border-[#EA580C]/40 dark:hover:bg-[#7C2D12]/80",
    lightCard: "bg-[#FFF7ED] border-[#FDBA74]/60 hover:bg-[#FFEDD5]",
    nameText: "dark:text-[#FB923C]",
    lightNameText: "text-[#C2410C]",
    dot: "dark:bg-[#FB923C]",
    lightDot: "bg-[#EA580C]",
    badge: "dark:border-[#EA580C]/40 dark:text-[#FB923C]",
    lightBadge: "border-[#FDBA74]/60 text-[#C2410C]",
    abbr: "International Financial Reporting",
    abbrAr: "معايير التقارير المالية الدولية",
  },
  CSRD: {
    darkCard:
      "dark:bg-[#14532D]/60 dark:border-[#16A34A]/40 dark:hover:bg-[#14532D]/80",
    lightCard: "bg-[#F0FDF4] border-[#86EFAC]/60 hover:bg-[#DCFCE7]",
    nameText: "dark:text-[#4ADE80]",
    lightNameText: "text-[#15803D]",
    dot: "dark:bg-[#4ADE80]",
    lightDot: "bg-[#16A34A]",
    badge: "dark:border-[#16A34A]/40 dark:text-[#4ADE80]",
    lightBadge: "border-[#86EFAC]/60 text-[#15803D]",
    abbr: "Corporate Sustainability Reporting",
    abbrAr: "تقارير استدامة الشركات",
  },
  "GHG Protocol": {
    darkCard:
      "dark:bg-[#164E63]/60 dark:border-[#0891B2]/40 dark:hover:bg-[#164E63]/80",
    lightCard: "bg-[#ECFEFF] border-[#67E8F9]/60 hover:bg-[#CFFAFE]",
    nameText: "dark:text-[#22D3EE]",
    lightNameText: "text-[#0E7490]",
    dot: "dark:bg-[#22D3EE]",
    lightDot: "bg-[#0891B2]",
    badge: "dark:border-[#0891B2]/40 dark:text-[#22D3EE]",
    lightBadge: "border-[#67E8F9]/60 text-[#0E7490]",
    abbr: "Greenhouse Gas Protocol",
    abbrAr: "بروتوكول غازات الاحتباس الحراري",
  },
  CDP: {
    darkCard:
      "dark:bg-[#1E3A5F]/60 dark:border-[#2980B9]/40 dark:hover:bg-[#1E3A5F]/80",
    lightCard: "bg-[#EFF6FF] border-[#93C5FD]/60 hover:bg-[#DBEAFE]",
    nameText: "dark:text-[#5BA4E5]",
    lightNameText: "text-[#1E40AF]",
    dot: "dark:bg-[#5BA4E5]",
    lightDot: "bg-[#2563EB]",
    badge: "dark:border-[#2980B9]/40 dark:text-[#5BA4E5]",
    lightBadge: "border-[#93C5FD]/60 text-[#1E40AF]",
    abbr: "Carbon Disclosure Project",
    abbrAr: "مشروع الإفصاح عن الكربون",
  },
  "UN SDGs": {
    darkCard:
      "dark:bg-[#4A1942]/60 dark:border-[#9333EA]/40 dark:hover:bg-[#4A1942]/80",
    lightCard: "bg-[#FDF4FF] border-[#E879F9]/40 hover:bg-[#FAE8FF]",
    nameText: "dark:text-[#E879F9]",
    lightNameText: "text-[#7E22CE]",
    dot: "dark:bg-[#E879F9]",
    lightDot: "bg-[#9333EA]",
    badge: "dark:border-[#9333EA]/40 dark:text-[#E879F9]",
    lightBadge: "border-[#E879F9]/40 text-[#7E22CE]",
    abbr: "Sustainable Development Goals",
    abbrAr: "أهداف التنمية المستدامة",
  },
};

export default function Frameworks() {
  const { lang, t } = useLang();
  const f = content.frameworks;
  const isAr = lang === "ar";

  return (
    <section
      id="frameworks"
      className="relative py-10 md:py-14 lg:py-16 bg-[#050D0A] overflow-hidden"
    >
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-full bg-[#00C2FF]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
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
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#00C2FF]/20 bg-[#00C2FF]/5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C2FF] animate-pulse" />
              <span className="text-[#00C2FF] text-xs font-semibold">
                {isAr
                  ? "متوافق مع ٨ معايير دولية"
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
                darkCard:
                  "dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10",
                lightCard: "bg-gray-50 border-gray-200 hover:bg-gray-100",
                nameText: "dark:text-white/70",
                lightNameText: "text-gray-600",
                dot: "dark:bg-white/40",
                lightDot: "bg-gray-400",
                badge: "dark:border-white/10 dark:text-white/70",
                lightBadge: "border-gray-200 text-gray-500",
                abbr: "",
                abbrAr: "",
              };
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.85, y: 12 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  whileHover={{ scale: 1.03, y: -2 }}
                  className={`
                    relative flex flex-col justify-between p-4 rounded-2xl border
                    cursor-default group overflow-hidden transition-all duration-300
                    ${style.darkCard} ${style.lightCard}
                  `}
                >
                  <div className="relative z-10">
                    {/* Top row: dot + name */}
                    <div
                      className={`flex items-center gap-2 mb-2 ${isAr ? "flex-row-reverse" : ""}`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full flex-shrink-0 ${style.dot} ${style.lightDot}`}
                      />
                      <span
                        className={`font-black text-base tracking-tight ${style.nameText} ${style.lightNameText}`}
                      >
                        {item}
                      </span>
                    </div>
                    {/* Full name */}
                    <p
                      className={`text-[10px] leading-snug font-medium dark:text-white/35 text-gray-400 ${isAr ? "text-right" : "text-left"}`}
                    >
                      {isAr ? style.abbrAr : style.abbr}
                    </p>
                  </div>

                  {/* Bottom: "Aligned" badge */}
                  <div
                    className={`relative z-10 mt-3 flex ${isAr ? "justify-end" : "justify-start"}`}
                  >
                    <span
                      className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border bg-black/5 dark:bg-black/10 ${style.badge} ${style.lightBadge}`}
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
