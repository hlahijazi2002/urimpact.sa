"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLang } from "../context/LangContext";

type TabId =
  | "dashboard"
  | "ghg"
  | "decarb"
  | "esg"
  | "gap"
  | "business"
  | "supply";

interface Tab {
  id: TabId;
  label: { en: string; ar: string };
  desc: { en: string; ar: string };
  icon: React.ReactNode;
}

const tabs: Tab[] = [
  {
    id: "dashboard",
    label: { en: "Overview", ar: "نظرة عامة" },
    desc: {
      en: "Executive ESG & emissions dashboard",
      ar: "لوحة ESG والانبعاثات التنفيذية",
    },
    icon: (
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    id: "ghg",
    label: { en: "GHG Module", ar: "وحدة الغازات الدفيئة" },
    desc: {
      en: "Scope 1, 2 & 3 emissions tracking",
      ar: "تتبع انبعاثات النطاق 1 و2 و3",
    },
    icon: (
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M2 20h20M6 20V10l6-6 6 6v10" />
      </svg>
    ),
  },
  {
    id: "decarb",
    label: { en: "Net Zero Roadmap", ar: "خارطة صفر الكربون" },
    desc: {
      en: "Decarbonization planning & initiatives",
      ar: "تخطيط إزالة الكربون والمبادرات",
    },
    icon: (
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    id: "esg",
    label: { en: "ESG Scorecard", ar: "بطاقة ESG" },
    desc: {
      en: "Environmental, social & governance KPIs",
      ar: "مؤشرات الأداء البيئية والاجتماعية والحوكمة",
    },
    icon: (
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    id: "gap",
    label: { en: "Gap Analysis", ar: "تحليل الفجوات" },
    desc: {
      en: "Compliance gaps & improvement priorities",
      ar: "فجوات الامتثال وأولويات التحسين",
    },
    icon: (
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    id: "business",
    label: { en: "Business Sustainability", ar: "استدامة الأعمال" },
    desc: {
      en: "Strategic sustainability performance metrics",
      ar: "مقاييس الأداء الاستراتيجي للاستدامة",
    },
    icon: (
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
  },
  {
    id: "supply",
    label: { en: "Supply Chain", ar: "سلسلة التوريد" },
    desc: {
      en: "Supplier sustainability tracker",
      ar: "تتبع استدامة الموردين",
    },
    icon: (
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function DashboardShowcase() {
  const { lang, t } = useLang();
  const isAr = lang === "ar";
  const [active, setActive] = useState<TabId>("dashboard");
  const activeTab = tabs.find((tb) => tb.id === active) as Tab;

  return (
    <section
      id="showcase"
      className="relative py-8 md:py-14 lg:py-16overflow-hidden bg-[#030A07]"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#00E5A0]/4 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00C2FF]/4 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,229,160,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,160,1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`mb-12 ${isAr ? "text-right" : ""}`}
        >
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00E5A0]/20 bg-[#00E5A0]/5 mb-5 ${
              isAr ? "flex-row-reverse" : ""
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5A0] animate-pulse" />
            <span className="text-[#00E5A0] text-xs font-semibold uppercase tracking-widest">
              {isAr ? "المنصة الحية" : "Live Platform"}
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            {isAr
              ? "تصوّر الاستدامة في الوقت الفعلي"
              : "Visualize Sustainability in Real Time"}
          </h2>

          <p
            className={`text-white/45 text-lg max-w-2xl ${
              isAr ? "mr-0 ml-auto" : ""
            }`}
          >
            {isAr
              ? "استكشف لوحات تحكم URIMPACT — من تتبع انبعاثات الكربون إلى خطط إزالة الكربون وتقييم الموردين وتحليل الفجوات."
              : "Explore URIMPACT's dashboards — from carbon emissions and decarbonization roadmaps to gap analysis and supplier assessments."}
          </p>
        </motion.div>

        {/* Tab bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-3"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 ${
                active === tab.id
                  ? "bg-gradient-to-r from-[#00E5A0] to-[#00C2FF] text-[#050D0A] shadow-[0_0_20px_rgba(0,229,160,0.3)]"
                  : "border border-white/10 bg-white/[0.03] text-white/50 hover:text-white hover:border-white/25"
              }`}
            >
              {tab.icon}
              <span>{t(tab.label)}</span>
            </button>
          ))}
        </motion.div>

        {/* Active tab description */}
        <p className="text-white/35 text-sm mb-5 transition-all duration-300">
          {t(activeTab.desc)}
        </p>

        {/* Screenshot window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(0,229,160,0.08)]"
        >
          {/* Browser chrome */}
          <div
            className={`flex items-center gap-3 px-5 py-3 bg-[#0D1F18] border-b border-white/[0.08] ${
              isAr ? "flex-row-reverse" : ""
            }`}
          >
            <div className={`flex gap-1.5 ${isAr ? "flex-row-reverse" : ""}`}>
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <div className="w-3 h-3 rounded-full bg-[#28C840]" />
            </div>

            <div className="flex-1 flex justify-center">
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-white/5 border border-white/[0.08] text-white/30 text-xs max-w-xs w-full justify-center">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                app.urimpact.sa/{active}
              </div>
            </div>

            <div
              className={`flex items-center gap-1.5 ${
                isAr ? "flex-row-reverse" : ""
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#00E5A0] animate-pulse" />
              <span className="text-[#00E5A0] text-[10px] font-bold tracking-widest">
                LIVE
              </span>
            </div>
          </div>

          {/* Screenshot area */}
          <div className="relative bg-[#F5F8F7] overflow-hidden h-[560px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={`/dash-${active}.png`}
                  alt={`URIMPACT ${t(activeTab.label)} dashboard`}
                  fill
                  className="object-cover object-top"
                  priority={active === "dashboard"}
                  sizes="(max-width: 1280px) 100vw, 1200px"
                />
              </motion.div>
            </AnimatePresence>

            {/* Mobile tap-to-expand — hidden on md+ */}
            <a
              href={`/dash-${active}.png`}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-10 flex md:hidden items-start justify-end p-4"
              aria-label={
                isAr ? "اضغط لعرض الصورة كاملة" : "Tap to view full image"
              }
            >
              {/* Subtle corner gradient — top right now */}
              <div className="absolute top-0 right-0 w-36 h-28 bg-gradient-to-bl from-black/25 to-transparent pointer-events-none" />
              {/* Hint badge */}
              <div
                className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/40 backdrop-blur-sm border border-white/15 text-white/75 text-[11px] font-medium ${
                  isAr ? "flex-row-reverse" : ""
                }`}
              >
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
                {isAr ? "اضغط للعرض" : "Tap to view"}
              </div>
            </a>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030A07]/80 to-transparent pointer-events-none z-10" />

            {/* CTA button */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
              <a
                href="/demo"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#00E5A0] to-[#00C2FF] text-[#050D0A] font-bold text-sm shadow-[0_4px_24px_rgba(0,229,160,0.4)] hover:shadow-[0_4px_32px_rgba(0,229,160,0.6)] transition-shadow"
              >
                {isAr ? "احجز عرضك التجريبي الآن" : "Get Full Platform Access"}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className={isAr ? "rotate-180" : ""}
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
