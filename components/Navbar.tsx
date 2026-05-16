"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../context/LangContext";
import { useTheme } from "../context/ThemeContext";
import { content } from "../data/content";
import Image from "next/image";

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isAr = lang === "ar";
  const n = content.nav;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navLinks = [
    { label: n.platform, href: "/#platform" },
    { label: n.solutions, href: "/#solutions" },
    { label: n.frameworks, href: "/#frameworks" },
    { label: n.resources, href: "/#resources" },
    { label: n.about, href: "/#about" },
    { label: n.contact, href: "/#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 overflow-hidden ${
        scrolled
          ? "dark:bg-[#050D0A]/95 bg-white/95 backdrop-blur-xl border-b dark:border-[#00E5A0]/10 border-gray-200/80 shadow-[0_4px_40px_rgba(0,229,160,0.05)] dark:shadow-[0_4px_40px_rgba(0,229,160,0.05)]"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4"
        dir={isAr ? "rtl" : "ltr"}
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group flex-shrink-0">
          <div className="relative">
            <Image src="/logo.png" alt={"Logo"} height={25} width={25} />
          </div>
          <span className="dark:text-white text-gray-900 font-bold text-xl tracking-tight whitespace-nowrap">
            UR<span className="text-[#00E5A0]">IMPACT</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`px-3 py-2 text-sm dark:text-white/60 text-gray-500 dark:hover:text-white hover:text-gray-900 transition-colors duration-200 rounded-lg dark:hover:bg-white/5 hover:bg-gray-100 whitespace-nowrap ${isAr ? "font-medium" : ""}`}
              >
                {t(link.label)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Language Switcher */}
          <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg border dark:border-white/10 border-gray-200 dark:bg-white/5 bg-gray-50 dark:hover:bg-white/10 hover:bg-gray-100 dark:text-white/70 text-gray-600 dark:hover:text-white hover:text-gray-900 text-sm font-medium transition-all duration-200 whitespace-nowrap"
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            {t(n.langSwitch)}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="hidden lg:flex items-center justify-center w-9 h-9 rounded-lg border dark:border-white/10 border-gray-200 dark:bg-white/5 bg-gray-50 dark:text-white/60 text-gray-500 dark:hover:text-white hover:text-gray-900 dark:hover:border-white/20 hover:border-gray-300 transition-all duration-200 flex-shrink-0"
          >
            {theme === "dark" ? (
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Demo CTA */}
          <a
            href="/demo"
            className="hidden lg:flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#00E5A0] to-[#00C2FF] text-[#050D0A] font-semibold text-sm hover:shadow-[0_0_24px_rgba(0,229,160,0.4)] transition-all duration-300 hover:scale-[1.02] whitespace-nowrap flex-shrink-0"
          >
            {t(n.demo)}
          </a>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 dark:text-white/70 text-gray-600 dark:hover:text-white hover:text-gray-900 flex-shrink-0"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-current transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-200 ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[9px]" : ""}`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden dark:bg-[#050D0A]/98 bg-white/98 backdrop-blur-xl border-t dark:border-white/5 border-gray-100 overflow-hidden"
          >
            <div
              className="px-6 py-5 flex flex-col gap-1"
              dir={isAr ? "rtl" : "ltr"}
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`w-full py-3 dark:text-white/70 text-gray-600 dark:hover:text-white hover:text-gray-900 border-b dark:border-white/5 border-gray-100 text-sm transition-colors`}
                >
                  {t(link.label)}
                </a>
              ))}
              {/* Mobile theme toggle */}
              <button
                onClick={toggleTheme}
                className="w-full py-3 dark:text-white/70 text-gray-600 dark:hover:text-white hover:text-gray-900 border-b dark:border-white/5 border-gray-100 text-sm transition-colors flex items-center gap-2"
              >
                {theme === "dark" ? "☀️" : "🌙"}
                <span>
                  {theme === "dark"
                    ? isAr
                      ? "الوضع الفاتح"
                      : "Light Mode"
                    : isAr
                      ? "الوضع الداكن"
                      : "Dark Mode"}
                </span>
              </button>
              <a
                href="/demo"
                className="mt-3 w-full text-center py-3 rounded-lg bg-gradient-to-r from-[#00E5A0] to-[#00C2FF] text-[#050D0A] font-semibold text-sm"
                onClick={() => setMenuOpen(false)}
              >
                {t(n.demo)}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
