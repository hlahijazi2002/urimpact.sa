"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../context/LangContext";
import { content } from "../data/content";
import { Icon } from "../data/icons";
import type { IconName } from "../data/icons";

const TAB_ICONS: Record<string, IconName> = {
  csr: "nbs-module",
  esg: "esg-module",
  mrv: "decarb-rec",
};

export default function Services() {
  const { lang, t } = useLang();
  const s = content.services;
  const isAr = lang === "ar";
  const [activeTab, setActiveTab] = useState(s.tabs[0].id);

  const active = s.tabs.find((tab) => tab.id === activeTab) ?? s.tabs[0];

  return (
    <section
      id="solutions"
      className="relative py-10 md:py-14 lg:py-16  overflow-hidden bg-[#050D0A]"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00E5A0]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#00C2FF]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`mb-14`}
        >
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00E5A0]/20 bg-[#00E5A0]/5 mb-5 ${isAr ? "flex-row-reverse" : ""}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5A0]" />
            <span className="text-[#00E5A0] text-xs font-semibold uppercase tracking-widest">
              {t(s.sectionLabel)}
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
            {t(s.headline)}
          </h2>
        </motion.div>

        {/* Tab bar */}
        <div className={`flex flex-wrap gap-2 mb-10`}>
          {s.tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-[#00E5A0] to-[#00C2FF] text-[#050D0A] shadow-[0_0_24px_rgba(0,229,160,0.3)]"
                  : "border border-white/10 bg-white/3 text-white/50 hover:text-white hover:border-white/20"
              }`}
            >
              <Icon
                name={TAB_ICONS[tab.id]}
                size={18}
                color={activeTab === tab.id ? "#050D0A" : "#00E5A0"}
              />
              <span>{t(tab.title)}</span>
            </button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={`grid lg:grid-cols-2 gap-10 items-start`}>
              <div>
                <div className="inline-flex items-center gap-2 mb-4 text-[#00E5A0] text-sm font-semibold">
                  <Icon name={TAB_ICONS[active.id]} size={24} color="#00E5A0" />
                  <span className="uppercase tracking-widest">
                    {t(active.title)}
                  </span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-black text-white mb-5 leading-tight">
                  {t(active.headline)}
                </h3>
                <p className="text-white/50 text-base leading-relaxed mb-8">
                  {t(active.body)}
                </p>

                <ul className="space-y-3">
                  {active.features.map((feat, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: isAr ? 16 : -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07 }}
                      className={`flex items-center gap-3`}
                    >
                      <div className="w-5 h-5 rounded-full bg-[#00E5A0]/15 border border-[#00E5A0]/30 flex items-center justify-center flex-shrink-0">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <path
                            d="M2 6l3 3 5-5"
                            stroke="#00E5A0"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-white/70 text-sm">{t(feat)}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Right: visual card */}
              <div className="relative rounded-2xl border border-white/8 bg-[#0A1A14]/60 overflow-hidden p-8">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#00E5A0]/40 to-transparent" />
                {activeTab === "csr" && <CSRMockup isAr={isAr} />}
                {activeTab === "esg" && <ESGMockup isAr={isAr} />}
                {activeTab === "mrv" && <MRVMockup isAr={isAr} />}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function CSRMockup({ isAr }: { isAr: boolean }) {
  return (
    <div className={isAr ? "text-right" : ""}>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-[#39D353]/15 border border-[#39D353]/25 flex items-center justify-center">
          <Icon name="nbs-module" size={22} color="#39D353" />
        </div>
        <div>
          <p className="text-white text-xs font-bold uppercase tracking-wider">
            PROJECT AMAZONIA REFORESTATION
          </p>
          <div className="flex gap-2 mt-1">
            <span className="text-[10px] bg-[#00E5A0]/15 text-[#00E5A0] px-2 py-0.5 rounded-full font-medium">
              Verified
            </span>
            <span className="text-[10px] bg-[#39D353]/15 text-[#39D353] px-2 py-0.5 rounded-full font-medium">
              Active
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 mb-6">
        {[
          { val: "12,450", label: "Trees Detected" },
          { val: "98.2%", label: "Survival Rate" },
          { val: "15%", label: "Canopy Growth" },
        ].map((s, i) => (
          <div
            key={i}
            className="rounded-xl bg-white/3 border border-white/8 p-3 text-center"
          >
            <p className="text-[#00E5A0] text-lg font-black">{s.val}</p>
            <p className="text-white/30 text-[10px] mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[
          {
            icon: "realtime" as IconName,
            label: "Satellite Verified",
            color: "#00E5A0",
          },
          {
            icon: "emission-map" as IconName,
            label: "GPS Tracked",
            color: "#39D353",
          },
          {
            icon: "nbs-module" as IconName,
            label: "Carbon Sequestered",
            color: "#00C2FF",
          },
          {
            icon: "transparent" as IconName,
            label: "Audit Ready",
            color: "#00E5A0",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/8 bg-white/3"
          >
            <Icon name={item.icon} size={14} color={item.color} />
            <span className="text-white/60 text-xs">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ESGMockup({ isAr }: { isAr: boolean }) {
  const metrics = [
    { label: "Scope 1", val: "1,240 tCO₂e", color: "#00E5A0" },
    { label: "Scope 2", val: "890 tCO₂e", color: "#00C2FF" },
    { label: "Scope 3", val: "3,120 tCO₂e", color: "#7B61FF" },
  ];
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <p className="text-white/60 text-xs uppercase tracking-wider font-medium">
          Emissions Dashboard
        </p>
        <span className="text-[10px] bg-[#00E5A0]/15 text-[#00E5A0] px-2.5 py-1 rounded-full">
          Real-time
        </span>
      </div>
      <div className="space-y-3">
        {metrics.map((m, i) => (
          <div
            key={i}
            className={`flex items-center justify-between p-3 rounded-xl border border-white/8 bg-white/3 ${isAr ? "flex-row-reverse" : ""}`}
          >
            <div
              className={`flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}
            >
              <div
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: m.color }}
              />
              <span className="text-white/60 text-xs font-medium">
                {m.label}
              </span>
            </div>
            <span className="text-white text-xs font-black">{m.val}</span>
          </div>
        ))}
      </div>
      <div className="mt-6 p-3 rounded-xl bg-[#00E5A0]/8 border border-[#00E5A0]/15 flex items-center gap-3">
        <Icon name="decarb-rec" size={20} color="#00E5A0" />
        <div>
          <p className="text-[#00E5A0] text-xs font-bold">
            GRI & IFRS S1/S2 Compliant
          </p>
          <p className="text-white/30 text-[10px]">
            Report ready for stakeholders
          </p>
        </div>
      </div>
    </div>
  );
}

function MRVMockup({ isAr }: { isAr: boolean }) {
  const standards = ["Verra VCS", "Gold Standard", "Plan Vivo"];
  return (
    <div>
      <p className="text-white/60 text-xs uppercase tracking-wider font-medium mb-5">
        MRV Compliance Status
      </p>
      <div className="space-y-3 mb-6">
        {standards.map((std, i) => (
          <div
            key={i}
            className={`flex items-center justify-between p-3 rounded-xl border border-white/8 bg-white/3 ${isAr ? "flex-row-reverse" : ""}`}
          >
            <div
              className={`flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}
            >
              <div className="w-2 h-2 rounded-full bg-[#00E5A0]" />
              <span className="text-white/70 text-sm">{std}</span>
            </div>
            <span className="text-[10px] bg-[#00E5A0]/15 text-[#00E5A0] px-2 py-0.5 rounded-full font-bold">
              Aligned
            </span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3">
        {[
          {
            icon: "transparent" as IconName,
            label: "Q3 2024 Report",
            status: "Generated",
          },
          {
            icon: "benchmark" as IconName,
            label: "Additionality",
            status: "Verified",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="rounded-xl border border-white/8 bg-white/3 p-3"
          >
            <div className="mb-2">
              <Icon name={item.icon} size={20} color="#00E5A0" />
            </div>
            <p className="text-white/60 text-xs mb-0.5">{item.label}</p>
            <p className="text-[#00E5A0] text-xs font-bold">{item.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
