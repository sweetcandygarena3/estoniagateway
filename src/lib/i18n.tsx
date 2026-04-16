import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "en" | "bn";

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (en: string, bn: string) => string;
}

const LangContext = createContext<LangContextType>({
  lang: "en",
  setLang: () => {},
  t: (en) => en,
});

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem("lang");
    return saved === "bn" ? "bn" : "en";
  });

  const changeLang = (l: Lang) => {
    setLang(l);
    localStorage.setItem("lang", l);
  };

  const t = (en: string, bn: string) => (lang === "bn" ? bn : en);

  return (
    <LangContext.Provider value={{ lang, setLang: changeLang, t }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);
