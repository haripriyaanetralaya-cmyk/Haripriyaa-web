import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { mr } from "./translations";

export type Lang = "en" | "mr";

type Ctx = { lang: Lang; setLang: (lang: Lang) => void; t: (text: string) => string };

const LanguageContext = createContext<Ctx>({ lang: "en", setLang: () => {}, t: (text) => text });

const STORAGE_KEY = "hn-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "mr" || stored === "en") setLangState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "mr" ? "mr" : "en";
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable */
    }
  }, []);

  const t = useCallback((text: string) => (lang === "mr" ? (mr[text] ?? text) : text), [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  return useContext(LanguageContext);
}
