"use client";

import { Star } from "lucide-react";
import { Section } from "@/components/ui/section";
import { TiltCard } from "@/components/ui/tilt-card";
import { experiences } from "@/data/portfolio";

export function Experience() {
  return (
    <section
      id="experience"
      className="py-[100px] px-6 md:px-10 relative"
    >
      {/* Subtle gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, rgba(10,18,25,0.5) 0%, transparent 50%, rgba(10,18,25,0.3) 100%)",
        }}
      />

      <div className="max-w-[1100px] mx-auto relative z-[1]">
        <Section variant="blur">
          <div className="text-center mb-16">
            <div className="section-label font-mono text-xs tracking-[4px] uppercase text-primary mb-4 flex items-center gap-3 justify-center">
              Experience
            </div>
            <h2 className="font-display text-[42px] max-md:text-3xl font-bold">
              Where I&apos;ve Made{" "}
              <span className="text-primary italic">Impact</span>
            </h2>
          </div>
        </Section>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[27px] top-0 bottom-0 w-[1.5px] hidden md:block">
            <div className="h-full w-full bg-gradient-to-b from-primary via-primary/20 to-transparent" />
          </div>

          {experiences.map((exp, idx) => (
            <Section key={idx} delay={0.15} variant="scale">
              <TiltCard tiltAmount={4}>
                <div className="flex gap-8 p-8 md:p-12 rounded-[20px] bento-card relative overflow-hidden group transition-all duration-[400ms] hover:shadow-[0_20px_60px_rgba(249,115,22,0.08)] md:ml-14">
                  {/* Timeline dot - positioned at the left edge on desktop */}
                  <div className="hidden md:block absolute -left-[calc(56px+7px)] top-10">
                    <div className="timeline-dot w-3.5 h-3.5 rounded-full border-2 border-primary bg-dark relative z-[2]" />
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between items-start flex-wrap gap-3 mb-2">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold mb-1 group-hover:text-primary transition-colors duration-300">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-primary text-[15px] font-medium">
                          {exp.company}{" "}
                          <span className="text-muted-darkest">·</span>{" "}
                          <span className="text-muted-dark font-normal">
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      <span className="font-mono text-[13px] text-muted-dark px-4 py-1.5 rounded-full glass">
                        {exp.period}
                      </span>
                    </div>

                    <div className="flex gap-2 mb-6 mt-4 flex-wrap">
                      {exp.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-[11px] px-3.5 py-[5px] rounded-full bg-primary/8 text-primary font-medium tracking-[0.5px] font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <ul className="list-none flex flex-col gap-3.5">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="flex gap-3.5 items-start text-light-muted text-sm leading-[1.7]"
                        >
                          <span className="text-primary text-[8px] mt-[7px] shrink-0">
                            ●
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TiltCard>
            </Section>
          ))}
        </div>
      </div>
    </section>
  );
}
