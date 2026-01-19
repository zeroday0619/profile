"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

type Language = "ko" | "en";

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  t: (ko: string, en: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("ko");

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "ko" ? "en" : "ko";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  const t = (ko: string, en: string) => (language === "ko" ? ko : en);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
