"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../context/LangContext";
import { content } from "../data/content";

const VIDEOS = [
  {
    id: "esg-saudi-2026",
    videoId: "nlpmnNUZFDs",
    title: {
      en: "Understanding ESG in Saudi Arabia",
      ar: "فهم معايير ESG في السعودية",
    },
    desc: {
      en: "What every executive needs to know",
      ar: "ما يحتاج كل مدير تنفيذي معرفته",
    },
    date: "June 18, 2026",
  },
];

export default function Webinars() {
  const { lang, t } = useLang();
  const c = content.webinars;
  const isAr = lang === "ar";
  const [active, setActive] = useState<string | null>(null);

  return (
    <section
      id="webinars"
      className="relative py-10 md:py-14 lg:py-16 overflow-hidden bg-[#050D0A] scroll-mt-24"
      dir={isAr ? "rtl" : "ltr"}
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

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl lg:text-3xl font-black text-white mb-6 leading-tight">
            {t(c.headline)}
          </h2>

          <p className="text-lg lg:text-xl font-bold text-[#00E5A0] mb-2.5">
            {t(c.sub1)}
          </p>
          <p className="text-white/50 text-md max-w-2xl mx-auto mb-10">
            {t(c.sub2)}
          </p>
        </motion.div>

        {/* Video library grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {VIDEOS.map((v, i) => (
            <motion.button
              key={v.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => setActive(v.videoId)}
              className={`group relative w-full sm:w-96 rounded-xl overflow-hidden border border-white/10 bg-white/3 hover:border-white/25 transition-colors ${isAr ? "text-right" : "text-left"}`}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={`https://img.youtube.com/vi/${v.videoId}/hqdefault.jpg`}
                  alt={t(v.title)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg
                      className="w-4 h-4 text-[#050D0A] ml-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7L8 5z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-3">
                <h3 className="text-sm font-semibold text-white leading-snug mb-1">
                  {t(v.title)}
                </h3>
                <p className="text-xs text-white/50 leading-snug">
                  {t(v.desc)}
                </p>
                <span
                  className={`inline-flex mt-3 items-center gap-1 text-[10px] text-white/50  py-1 bg-white/5 border border-white/10 px-1.5 rounded-full`}
                >
                  <svg
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 7v5l3 3"
                    />
                  </svg>
                  <span className={` ${isAr ? "mt-1" : ""} `}>{v.date}</span>
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal player */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl aspect-video rounded-2xl overflow-hidden border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActive(null)}
                className="absolute -top-10 right-0 text-white/70 hover:text-white"
                aria-label="Close"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${active}?autoplay=1&rel=0`}
                title="Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
