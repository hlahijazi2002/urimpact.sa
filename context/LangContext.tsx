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

export function LangProvider({
  children,
  initialLang,
}: {
  children: React.ReactNode;
  initialLang: Lang;
}) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    setLangState(initialLang);
  }, [initialLang]);

  const setLang = (l: Lang) => {
    setLangState(l);
  };

  const t = (obj: { en: string; ar: string }) => obj[lang];

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
