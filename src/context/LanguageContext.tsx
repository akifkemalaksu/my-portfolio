"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Lang = "tr" | "en";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "tr",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("tr");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-lang") as Lang;
    if (saved === "tr" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("portfolio-lang", l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
