"use client";
import Image from "next/image";
import { useLang } from "../context/LangContext";
import { content } from "../data/content";
import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { lang, t } = useLang();
  const { theme, toggleTheme } = useTheme();
  const f = content.footer;
  const isAr = lang === "ar";
  const isDark = theme === "dark";

  const columns = [
    { data: f.platform },
    { data: f.solutions },
    { data: f.resources },
    { data: f.company },
  ];

  return (
    <footer
      className="relative bg-[#030A07] border-t border-white/5 pt-20 pb-10 overflow-hidden"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div
          className={`grid grid-cols-2 lg:grid-cols-5 gap-10 mb-16 ${isAr ? "direction-rtl" : ""}`}
        >
          {/* Brand col */}
          <div
            className={`col-span-2 lg:col-span-1 ${isAr ? "text-right" : ""}`}
          >
            <div className="mb-4">
              <Image
                src={isDark ? "/logo-dark.png" : "/logo-light.png"}
                alt="URIMPACT"
                width={130}
                height={30}
                className="object-contain h-8 w-auto"
              />
            </div>
            <p className="text-white/30 text-sm leading-relaxed">
              {lang === "ar"
                ? "منصة ذكاء الاستدامة للشركات في الشرق الأوسط "
                : "Sustainability intelligence platform for enterprises across the Middle East"}
            </p>
          </div>

          {/* Link columns */}
          {columns.map(({ data }, i) => (
            <div key={i} className={isAr ? "text-right" : ""}>
              <h4 className="text-white font-semibold text-sm mb-4">
                {t(data.label)}
              </h4>
              <ul className="space-y-2.5">
                {data.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href="#"
                      className="text-white/30 text-sm hover:text-[#00E5A0] transition-colors duration-200"
                    >
                      {t(link)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div
          className={`py-10 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6 ${isAr ? "flex-row-reverse" : ""}`}
        >
          <p
            className={`text-white/40 text-sm font-medium ${isAr ? "text-right" : ""}`}
          >
            {t(f.newsletter.label)}
          </p>
          <div
            className={`flex items-center gap-2 w-full sm:w-auto ${isAr ? "flex-row-reverse" : ""}`}
          >
            <input
              type="email"
              placeholder={t(f.newsletter.placeholder)}
              className={`flex-1 sm:w-64 px-4 py-2.5 rounded-lg bg-white/4 border border-white/10 text-white text-sm placeholder-white/20 outline-none focus:border-[#00E5A0]/40 transition-colors ${isAr ? "text-right" : ""}`}
            />
            <button className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#00E5A0] to-[#00C2FF] text-[#050D0A] font-semibold text-sm hover:shadow-[0_0_20px_rgba(0,229,160,0.3)] transition-shadow shrink-0">
              {t(f.newsletter.btn)}
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className={`pt-6 border-t border-white/5 ${isAr ? "direction-rtl" : ""}`}
        >
          {/* Legal links */}
          <div
            className={`flex flex-wrap gap-x-5 gap-y-2 mb-5 ${isAr ? "justify-end" : ""}`}
          >
            <span className="text-white/20 text-xs font-medium">Legal</span>
            {f.legal.map((link, i) => (
              <a
                key={i}
                href="#"
                className="text-white/30 text-xs hover:text-[#00E5A0] transition-colors"
              >
                {t(link)}
              </a>
            ))}
          </div>

          <div
            className={`flex flex-col sm:flex-row items-center justify-between gap-4 ${isAr ? "flex-row-reverse" : ""}`}
          >
            <span className="text-white/20 text-sm">{t(f.copyright)}</span>

            {/* Social icons */}
            <div
              className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}
            >
              {/* LinkedIn */}
              <a
                href={f.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-white/10 bg-white/3 flex items-center justify-center text-white/40 hover:text-[#00E5A0] hover:border-[#00E5A0]/30 transition-all"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                href={f.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-white/10 bg-white/3 flex items-center justify-center text-white/40 hover:text-[#00E5A0] hover:border-[#00E5A0]/30 transition-all"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.554 4.118 1.523 5.847L.057 23.882l6.204-1.437A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.659-.5-5.189-1.375l-.371-.22-3.843.89.934-3.758-.242-.385A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
              </a>
              {/* Email */}
              <a
                href={f.social.email}
                className="w-9 h-9 rounded-lg border border-white/10 bg-white/3 flex items-center justify-center text-white/40 hover:text-[#00E5A0] hover:border-[#00E5A0]/30 transition-all"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>

              {/* Framework badges */}
              {["GRI", "IFRS", "ISO 14064"].map((badge) => (
                <span
                  key={badge}
                  className="hidden sm:block text-[10px] text-white/20 px-2.5 py-1 rounded-full border border-white/10"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
