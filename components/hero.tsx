"use client";

import { useState, useEffect } from "react";
import { Section } from "@/components/ui/section";
import { heroHighlights } from "@/data/portfolio";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-10 pt-[120px] pb-20"
    >
      <div className="max-w-[900px] text-center relative z-[2]">
        <Section>
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/8 border border-primary/15 text-[13px] text-primary mb-8 font-mono tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-[pulse-ring_2s_infinite]" />
            Open to remote opportunities
          </div>
        </Section>

        <Section delay={0.1}>
          <h1 className="font-display text-[72px] max-md:text-4xl font-bold leading-[1.08] mb-6 tracking-[-1px]">
            <span className="text-muted font-normal italic text-[0.6em] block mb-2">
              Hi, I&apos;m
            </span>
            Eisha Kamran
            <span className="text-primary">.</span>
          </h1>
        </Section>

        <Section delay={0.2}>
          <p className="text-xl max-md:text-base text-muted leading-[1.7] max-w-[620px] mx-auto mb-10 font-light">
            Technical Project Manager building{" "}
            <span className="text-light font-medium">
              AI & automation systems
            </span>{" "}
            for US clients. Bridging timezones, shipping products, and turning
            complex problems into elegant solutions — all remotely from Pakistan.
          </p>
        </Section>

        <Section delay={0.3}>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              className="cta-btn inline-flex items-center gap-2.5 px-9 py-4 bg-gradient-to-br from-primary to-primary-dark text-white border-none rounded-full text-[15px] font-semibold cursor-pointer tracking-[0.5px] transition-all duration-[400ms] hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(249,115,22,0.3)]"
              onClick={() => scrollTo("contact")}
            >
              Let&apos;s Work Together
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <button
              className="inline-flex items-center gap-2.5 px-9 py-[15px] bg-transparent text-light border-[1.5px] border-dark-border-light rounded-full text-[15px] font-medium cursor-pointer tracking-[0.5px] transition-all duration-[400ms] hover:border-primary hover:text-primary hover:-translate-y-0.5"
              onClick={() => scrollTo("experience")}
            >
              View My Work
            </button>
          </div>
        </Section>

        <Section delay={0.5}>
          <div className="flex justify-center gap-12 mt-16 flex-wrap">
            {heroHighlights.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3.5 opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <span className="text-[28px]">{item.icon}</span>
                <div className="text-left">
                  <div className="text-sm font-semibold text-light">
                    {item.label}
                  </div>
                  <div className="text-xs text-muted-dark">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-500"
        style={{ opacity: scrollY > 100 ? 0 : 0.5 }}
      >
        <span className="text-[11px] tracking-[3px] uppercase text-muted-dark font-mono">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-muted-dark to-transparent" />
      </div>
    </section>
  );
}
