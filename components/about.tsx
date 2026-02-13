"use client";

import { Calendar, Rocket, Building2, Globe } from "lucide-react";
import { Section } from "@/components/ui/section";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { TiltCard } from "@/components/ui/tilt-card";
import { stats } from "@/data/portfolio";

const statIcons = [Calendar, Rocket, Building2, Globe];

export function About() {
  return (
    <section id="about" className="py-[120px] px-10 max-w-[1100px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div>
          <Section variant="fade-left">
            <div className="section-label font-mono text-xs tracking-[4px] uppercase text-primary mb-4 flex items-center gap-3">
              About Me
            </div>
            <h2 className="font-display text-[42px] font-bold leading-[1.15] mb-6">
              Building the future,
              <br />
              <span className="text-primary italic">one sprint at a time</span>
            </h2>
          </Section>

          <Section delay={0.15} variant="blur">
            <p className="text-muted leading-[1.85] text-[15px] mb-5">
              I&apos;m a Technical Project Manager with a Computer Science degree
              from COMSATS University Islamabad. Currently at Axiom Sol Inc, a
              US-based startup where I manage the delivery of AI automation and
              Agentic AI systems for clients across healthcare, finance,
              e-commerce, and more.
            </p>
          </Section>

          <Section delay={0.25} variant="blur">
            <p className="text-muted leading-[1.85] text-[15px] mb-8">
              What makes me different? I don&apos;t just manage timelines — I
              understand the architecture. With a CS background, I bridge the gap
              between business stakeholders and engineering teams, speaking both
              languages fluently. I&apos;ve been doing this fully remote, across
              timezones, since day one.
            </p>
          </Section>

          <Section delay={0.35}>
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
                  <TiltCard key={i}>
                    <div className="stat-card text-center p-8 rounded-2xl bg-gradient-to-br from-dark-card/80 to-dark-light/90 border border-dark-border transition-all duration-[400ms] hover:border-primary hover:-translate-y-1">
                      <div className="mb-3 flex justify-center">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <div className="font-display text-[32px] font-bold text-light mb-1">
                        <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                      </div>
                      <div className="text-xs text-muted-dark uppercase tracking-[1.5px] font-mono">
                        {stat.label}
                      </div>
                    </div>
                  </TiltCard>
                );
              })}
            </div>
          </Section>
        </div>
      </div>
    </section>
  );
}
