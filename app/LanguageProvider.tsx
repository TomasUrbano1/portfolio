"use client";

import { createContext, useState } from "react";

interface LanguageContextType {
  lang: "en" | "es";
  setLang: React.Dispatch<React.SetStateAction<"en" | "es">>;
}

export const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
});

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<"en" | "es">("en");

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}
