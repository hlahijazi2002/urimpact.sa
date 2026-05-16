"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import type { Lang } from "../data/content";

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (obj: { en: string; ar: string }) => string;
}

const LangContext = createContext<LangContextType>({
  lang: "en",
  setLang: () => {},
  t: (obj) => obj.en,
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // Persist language choice
  useEffect(() => {
    const saved = localStorage.getItem("urimpact-lang") as Lang | null;
    if (saved) setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("urimpact-lang", l);
    // Update document dir for proper RTL layout
    document.documentElement.setAttribute("dir", l === "ar" ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", l);
  };

  useEffect(() => {
    // Apply dir on initial load
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  const t = (obj: { en: string; ar: string }) => obj[lang];

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
