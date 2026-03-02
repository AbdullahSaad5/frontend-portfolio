"use client";

import { Suspense } from "react";
import { PortfolioModeProvider } from "@/context/portfolio-mode";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <PortfolioModeProvider>{children}</PortfolioModeProvider>
    </Suspense>
  );
}
