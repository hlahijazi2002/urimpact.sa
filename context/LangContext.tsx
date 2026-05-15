"use client";
import React, { createContext, useContext, useState } from "react";
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
  const [lang, setLang] = useState<Lang>("en");
  const t = (obj: { en: string; ar: string }) => obj[lang];
  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      <div dir={lang === "ar" ? "rtl" : "ltr"} lang={lang}>
        {children}
      </div>
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
