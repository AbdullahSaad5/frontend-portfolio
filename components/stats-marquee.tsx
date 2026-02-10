"use client";

import { marqueeItems } from "@/data/portfolio";

export function StatsMarquee() {
  return (
    <div className="overflow-hidden py-10 border-t border-b border-dark-card">
      <div className="flex animate-[marquee_30s_linear_infinite] w-max">
        {[0, 1].map((dupeIdx) => (
          <div key={dupeIdx} className="flex gap-20 pr-20 items-center">
            {marqueeItems.map((text, i) => (
              <span
                key={i}
                className={`whitespace-nowrap font-medium uppercase ${
                  text === "★"
                    ? "text-[10px] text-primary"
                    : "text-[15px] text-muted-darkest tracking-[2px]"
                }`}
              >
                {text}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
