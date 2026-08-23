import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { content, type Lang } from "@/content/site";

const LangContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (typeof content)["en"];
}>({ lang: "en", setLang: () => {}, t: content.en });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("lang");
    if (stored === "tr" || stored === "en") setLang(stored);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t: content[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
