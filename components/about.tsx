"use client";

import { Calendar, Rocket, Award, Globe, GraduationCap } from "lucide-react";
import { Section } from "@/components/ui/section";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { education } from "@/data/portfolio";
import { useModeData } from "@/hooks/use-mode-data";

const statIcons = [Calendar, Rocket, Award, Globe];

export function About() {
  const { stats, aboutHeading, aboutParagraphs } = useModeData();

  return (
    <section id="about" className="py-[120px] px-6 md:px-10 max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
        <div>
          <Section variant="fade-left">
            <div className="section-label font-mono text-xs tracking-[4px] uppercase text-primary mb-4 flex items-center gap-3">
              About Me
            </div>
            <h2 className="font-display text-[42px] max-md:text-3xl font-bold leading-[1.15] mb-6">
              {aboutHeading[0]}
              <br />
              <span className="text-primary italic">{aboutHeading[1]}</span>
            </h2>
          </Section>

          {aboutParagraphs.map((paragraph, i) => (
            <Section key={i} delay={0.15 + i * 0.1} variant="blur">
              <p className="text-muted leading-[1.85] text-[15px] mb-5">
                {paragraph}
              </p>
            </Section>
          ))}

          {/* Education card */}
          <Section delay={0.35}>
            <div className="bento-card p-6 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-primary/10 border border-primary/20">
                  <GraduationCap className="text-primary" size={18} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-light">{education.degree}</div>
                  <div className="text-xs text-muted-dark">{education.university} · {education.year}</div>
                </div>
              </div>
              <div className="flex gap-2 flex-wrap mt-3">
                {education.highlights.map((h, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center px-3 py-1.5 rounded-full text-[11px] font-mono tracking-[0.5px] border border-dark-border-subtle bg-dark-card/60 text-light-muted transition-all duration-300 hover:border-primary/30 hover:text-primary cursor-default"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </Section>

          <Section delay={0.4}>
            <div className="flex gap-3 flex-wrap">
              {["COMSATS University", "Computer Science", "Class of 2025"].map(
                (t, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center px-[18px] py-2 rounded-full text-xs font-mono tracking-[0.5px] border border-dark-border-subtle bg-dark-card/60 text-light-muted backdrop-blur-[10px] transition-all duration-300 hover:border-primary hover:text-primary hover:-translate-y-0.5 hover:bg-primary/5 cursor-default"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </Section>
        </div>

        <div>
          <Section delay={0.2} variant="fade-right">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => {
                const Icon = statIcons[i];
                return (
                  <div
                    key={`${stat.label}-${i}`}
                    className="stat-card h-full text-center p-7 md:p-8 rounded-2xl glass transition-all duration-[400ms] hover:border-primary/30 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(249,115,22,0.08)]"
                  >
                    <div className="mb-3 flex justify-center">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="text-primary" size={20} />
                      </div>
                    </div>
                    <div className="font-display text-[32px] font-bold text-light mb-1">
                      <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs text-muted-dark uppercase tracking-[1.5px] font-mono">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </Section>
        </div>
      </div>
    </section>
  );
}
