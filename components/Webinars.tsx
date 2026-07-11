"use client";
import { motion } from "framer-motion";
import { useLang } from "../context/LangContext";
import { content } from "../data/content";

export default function Webinars() {
  const { t } = useLang();
  const c = content.webinars;

  return (
    <section
      id="webinars"
      className="relative py-10 md:py-14 lg:py-16 overflow-hidden bg-[#050D0A]"
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

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
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
          <p className="text-white/50 text-md max-w-2xl mx-auto">{t(c.sub2)}</p>
        </motion.div>
      </div>
    </section>
  );
}
