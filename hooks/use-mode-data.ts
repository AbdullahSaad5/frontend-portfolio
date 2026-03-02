import { useMemo } from "react";
import { usePortfolioMode } from "@/context/portfolio-mode";
import { getPortfolioData } from "@/data/portfolio";

export function useModeData() {
  const { mode } = usePortfolioMode();
  return useMemo(() => getPortfolioData(mode), [mode]);
}
