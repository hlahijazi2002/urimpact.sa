"use client";
import { motion } from "framer-motion";
import { useLang } from "../context/LangContext";
import { content } from "../data/content";
import Image from "next/image";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

function DashboardMockup({ isAr }: { isAr: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-lg mx-auto"
      dir="ltr"
    >
      {/* Glow */}
      <div className="absolute -inset-8 bg-gradient-to-br from-[#00E5A0]/20 via-transparent to-[#00C2FF]/20 rounded-3xl blur-2xl" />

      {/* Card */}
      <div className="relative bg-[#0A1A14]/90 backdrop-blur-xl border border-[#00E5A0]/20 rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.5)]">
        {/* Chrome bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#0D2018]">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/60" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <span className="w-3 h-3 rounded-full bg-[#00E5A0]/60" />
          </div>
          <span className="text-white/30 text-xs font-mono ml-2">
            app.urimpact.sa
          </span>
          <span className="ml-auto flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5A0] animate-pulse" />
            <span className="text-[#00E5A0] text-[10px] font-bold">LIVE</span>
          </span>
        </div>

        <div>
          <Image
            src="/dash-hero.webp"
            alt="dashboard"
            width={550}
            height={600}
            sizes="(max-width: 768px) 100vw, 550px"
          />
        </div>
      </div>

      {/* Floating left */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute -left-8 top-1/4 bg-[#0D2018] border border-[#00E5A0]/30 rounded-xl px-3 py-2 shadow-xl"
      >
        <div className="text-[#00E5A0] text-xs font-semibold">↓ CO₂</div>
        <div className="text-white text-sm font-bold">
          45K {isAr ? "طن" : "tons"}
        </div>
      </motion.div>

      {/* Floating right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.7, duration: 0.5 }}
        className="absolute -right-6 bottom-1/4 bg-[#0D2018] border border-[#00C2FF]/30 rounded-xl px-3 py-2 shadow-xl"
      >
        <div className="text-[#00C2FF] text-xs font-semibold">IFRS S2</div>
        <div className="text-white text-xs">{isAr ? "جاهز ✓" : "Ready ✓"}</div>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const { lang, t } = useLang();
  const h = content.hero;
  const isAr = lang === "ar";

  return (
    <section
      className="relative  flex items-center overflow-hidden pt-10 lg:pt-12"
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#050D0A]">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,229,160,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,160,1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00E5A0]/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00C2FF]/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#00E5A0]/4 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container-main py-14 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left Content */}
        <div className={`space-y-8 ${isAr ? "text-right" : ""}`}>
          {/* Badge */}
          <motion.div {...fadeUp(0.1)}>
            <span
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00E5A0]/30 bg-[#00E5A0]/10 text-[#00E5A0] text-sm font-medium ${isAr ? "flex-row-reverse" : ""}`}
            >
              <span className="w-2 h-2 rounded-full bg-[#00E5A0] animate-pulse" />
              {t(h.badge)}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div {...fadeUp(0.2)} className="space-y-2">
            <h1 className="text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
              <span
                className={`block text-[#00E5A0] ${isAr ? "text-white" : ""}`}
              >
                {t(h.headline1)}
              </span>
              <span className="block">{t(h.headline2)}</span>
              <span
                className={`block relative ${isAr ? "text-[#00E5A0]" : ""}`}
              >
                {t(h.headline3)}
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            {...fadeUp(0.3)}
            className="text-white/60 text-lg leading-relaxed max-w-xl"
          >
            {t(h.subheadline)}
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.4)} className={`flex gap-4 flex-wrap`}>
            <a
              href="/demo"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#00E5A0] to-[#00C2FF] text-[#050D0A] font-bold text-base hover:shadow-[0_0_40px_rgba(0,229,160,0.4)] transition-all duration-300 hover:scale-[1.02]"
            >
              {t(h.cta1)}
            </a>
            <a
              href="/#platform"
              className="px-8 py-4 rounded-xl border border-white/20 text-white font-medium text-base hover:bg-white/5 hover:border-white/40 transition-all duration-300"
            >
              {t(h.cta2)}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div {...fadeUp(0.5)} className={`flex gap-8 pt-4 `}>
            {h.stats.map((stat, i) => (
              <div key={i} className={`space-y-1 `}>
                <div className="text-3xl font-black text-[#00E5A0]">
                  {stat.value}
                </div>
                <div className="text-white/40 text-xs">{t(stat.label)}</div>
              </div>
            ))}
          </motion.div>

          {/* Trust Strip */}
          <motion.div {...fadeUp(0.6)} className={`flex flex-wrap gap-3 pt-2`}>
            {h.trustItems.map((item, i) => (
              <span
                key={i}
                className="text-xs text-white/40 px-3 py-1 rounded-full border border-white/10 hover:border-[#00E5A0]/30 hover:text-white/60 transition-all duration-200"
              >
                {t(item)}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right Visual */}
        <div>
          <DashboardMockup isAr={isAr} />
        </div>
      </div>
    </section>
  );
}
