import { useState, useEffect } from "react";
import type { Language } from "./translations";

const STORAGE_KEY = "bk-language";

export function useLanguage() {
  const [language, setLanguageState] = useState<Language>("hu");
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Load from localStorage on mount
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (saved && ["hu", "en", "de"].includes(saved)) {
        setLanguageState(saved);
      }
      setIsHydrated(true);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, lang);
    }
  };

  return { language, setLanguage, isHydrated };
}
