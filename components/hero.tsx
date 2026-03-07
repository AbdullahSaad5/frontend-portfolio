"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Flag, Globe, Zap, ChevronDown, Download } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Magnetic } from "@/components/ui/magnetic";
import { useModeData } from "@/hooks/use-mode-data";

const highlightIcons = [Flag, Globe, Zap];

export function Hero() {
  const { heroRoles, heroSubtitle, heroHighlights, resumePath } = useModeData();
  const [scrollY, setScrollY] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const { scrollYProgress } = useScroll();
  const titleY = useTransform(scrollYProgress, [0, 0.3], [0, -60]);
  const subtitleY = useTransform(scrollYProgress, [0, 0.3], [0, -30]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reset typewriter when roles change (mode switch)
  useEffect(() => {
    setRoleIndex(0);
    setDisplayText("");
    setIsDeleting(false);
  }, [heroRoles]);

  // Typewriter effect
  useEffect(() => {
    const currentRole = heroRoles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % heroRoles.length);
    } else if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
      }, 30);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      }, 60);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, heroRoles]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-6 md:px-10 pt-[120px] pb-20 overflow-hidden"
    >
      {/* Gradient mesh background */}
      <motion.div className="absolute inset-0 z-0" style={{ opacity: bgOpacity }}>
        <div
          className="absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full animate-[float_8s_ease-in-out_infinite]"
          style={{
            background: "radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full animate-[float_10s_ease-in-out_infinite_2s]"
          style={{
            background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-[50%] left-[60%] w-[300px] h-[300px] rounded-full animate-[float_12s_ease-in-out_infinite_4s]"
          style={{
            background: "radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)",
          }}
        />
      </motion.div>

      <div className="max-w-[900px] text-center relative z-[2]">
        {/* Availability badge */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass text-[13px] text-primary mb-8 font-mono tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
            </span>
            Open to remote opportunities
          </div>
        </motion.div>

        {/* Title */}
        <motion.div style={{ y: titleY }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7 }}
          >
            <h1 className="font-display text-[72px] max-md:text-[40px] font-bold leading-[1.08] mb-6 tracking-[-1px]">
              <span className="text-muted font-normal italic text-[0.6em] block mb-2">
                Hi, I&apos;m
              </span>
              <motion.span
                className="inline-flex flex-wrap justify-center gap-x-4 gradient-text-hero"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                Eisha Kamran
              </motion.span>
              <span className="text-primary">.</span>
            </h1>
          </motion.div>
        </motion.div>

        {/* Typewriter role */}
        <motion.div style={{ y: subtitleY }}>
          <Section delay={0.2} variant="blur">
            <div className="flex items-center justify-center gap-1 mb-6 font-mono text-lg max-md:text-base">
              <span className="text-muted">{">"}</span>
              <span className="text-primary-light font-medium">{displayText}</span>
              <motion.span
                className="inline-block w-[2px] h-[1.1em] bg-primary"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
              />
            </div>
          </Section>

          <Section delay={0.25} variant="blur">
            <p
              className="text-xl max-md:text-base text-muted leading-[1.7] max-w-[620px] mx-auto mb-10 font-light [&_strong]:text-light [&_strong]:font-medium"
              dangerouslySetInnerHTML={{ __html: heroSubtitle }}
            />
          </Section>
        </motion.div>

        <Section delay={0.3} variant="blur">
          <div className="flex gap-4 justify-center flex-wrap">
            <Magnetic strength={0.2}>
              <button
                className="cta-btn inline-flex items-center gap-2.5 px-9 py-4 bg-gradient-to-br from-primary to-primary-dark text-white border-none rounded-full text-[15px] font-semibold cursor-pointer tracking-[0.5px] transition-all duration-[400ms] hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(249,115,22,0.3)]"
                onClick={() => scrollTo("contact")}
              >
                Let&apos;s Work Together
                <ArrowRight size={16} strokeWidth={2.5} />
              </button>
            </Magnetic>
            <Magnetic strength={0.15}>
              <button
                className="inline-flex items-center gap-2.5 px-9 py-[15px] glass text-light rounded-full text-[15px] font-medium cursor-pointer tracking-[0.5px] transition-all duration-[400ms] hover:border-primary hover:text-primary hover:-translate-y-0.5"
                onClick={() => scrollTo("projects")}
              >
                View My Work
              </button>
            </Magnetic>
            <Magnetic strength={0.15}>
              <a href={resumePath} download className="no-underline">
                <button className="inline-flex items-center gap-2.5 px-7 py-[15px] bg-transparent text-muted rounded-full text-[14px] font-medium cursor-pointer tracking-[0.5px] transition-all duration-[400ms] hover:text-primary hover:-translate-y-0.5 border border-transparent hover:border-dark-border-light">
                  <Download size={15} />
                  Resume
                </button>
              </a>
            </Magnetic>
          </div>
        </Section>

        <Section delay={0.5}>
          <div className="flex justify-center gap-12 mt-16 flex-wrap max-md:gap-6">
            {heroHighlights.map((item, i) => {
              const Icon = highlightIcons[i];
              return (
                <motion.div
                  key={i}
                  className="flex items-center gap-3.5 opacity-60 hover:opacity-100 transition-all duration-300"
                  whileHover={{ y: -2 }}
                >
                  <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
                    <Icon className="text-primary" size={20} />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-semibold text-light">
                      {item.label}
                    </div>
                    <div className="text-xs text-muted-dark">{item.sub}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Section>
      </div>

      {/* Animated scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-500"
        style={{ opacity: scrollY > 100 ? 0 : 0.5 }}
      >
        <span className="text-[11px] tracking-[3px] uppercase text-muted-dark font-mono">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-muted-dark" />
        </motion.div>
      </div>
    </section>
  );
}
