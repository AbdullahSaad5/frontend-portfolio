"use client";

import Marquee from "react-fast-marquee";
import { Star } from "lucide-react";
import { useModeData } from "@/hooks/use-mode-data";

export function StatsMarquee() {
  const { marqueeItems } = useModeData();

  return (
    <div className="py-10 border-t border-b border-dark-card">
      <Marquee speed={40} gradient={false} autoFill>
        {marqueeItems.map((text, i) => (
          <div key={i} className="flex items-center gap-20 px-10">
            <span className="whitespace-nowrap font-medium uppercase text-[15px] text-muted-darkest tracking-[2px]">
              {text}
            </span>
            <Star className="text-primary" size={10} fill="currentColor" />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
