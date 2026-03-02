"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export type PortfolioMode = "pm" | "ai";

interface PortfolioModeContextValue {
  mode: PortfolioMode;
}

const PortfolioModeContext = createContext<PortfolioModeContextValue>({ mode: "pm" });

const STORAGE_KEY = "portfolio-mode";

function resolveMode(paramValue: string | null): PortfolioMode {
  if (paramValue === "ai" || paramValue === "pm") return paramValue;
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "ai" || stored === "pm") return stored;
  }
  return "pm";
}

export function PortfolioModeProvider({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const [mode, setMode] = useState<PortfolioMode>("pm");

  useEffect(() => {
    const resolved = resolveMode(searchParams.get("mode"));
    setMode(resolved);
    localStorage.setItem(STORAGE_KEY, resolved);
  }, [searchParams]);

  return (
    <PortfolioModeContext.Provider value={{ mode }}>
      {children}
    </PortfolioModeContext.Provider>
  );
}

export function usePortfolioMode() {
  return useContext(PortfolioModeContext);
}
