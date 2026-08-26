"use client";

import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";

type Language = "ko" | "en";

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  t: (ko: string, en: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANGUAGE_STORAGE_KEY = "language";
const LANGUAGE_CHANGE_EVENT = "language-change";
let currentLanguage: Language = "ko";

const getLanguageSnapshot = (): Language => {
  try {
    currentLanguage =
      window.localStorage.getItem(LANGUAGE_STORAGE_KEY) === "en" ? "en" : "ko";
  } catch {
    // The in-memory value keeps language switching usable when storage is unavailable.
  }

  return currentLanguage;
};

const getServerLanguageSnapshot = (): Language => "ko";

const subscribeToLanguage = (onStoreChange: () => void) => {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(LANGUAGE_CHANGE_EVENT, onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(LANGUAGE_CHANGE_EVENT, onStoreChange);
  };
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const language = useSyncExternalStore(
    subscribeToLanguage,
    getLanguageSnapshot,
    getServerLanguageSnapshot
  );

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    const newLang = language === "ko" ? "en" : "ko";
    currentLanguage = newLang;
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, newLang);
    } catch {
      // The provider state remains authoritative when storage is unavailable.
    }
    window.dispatchEvent(new Event(LANGUAGE_CHANGE_EVENT));
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
