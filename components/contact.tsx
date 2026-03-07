"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, Clock, CheckCircle, Download, Github, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Magnetic } from "@/components/ui/magnetic";
import { contactInfo } from "@/data/portfolio";
import { useModeData } from "@/hooks/use-mode-data";

const contactIcons = [MapPin, Clock, CheckCircle];

function LiveClock() {
  const [time, setTime] = useState({ pk: "", us: "" });

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const pk = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Karachi",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      const us = now.toLocaleTimeString("en-US", {
        timeZone: "America/New_York",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setTime({ pk, us });
    };
    update();
    const interval = setInterval(update, 30000);
    return () => clearInterval(interval);
  }, []);

  if (!time.pk) return null;

  return (
    <div className="flex gap-6 justify-center flex-wrap">
      <div className="glass rounded-2xl px-5 py-3 text-center min-w-[140px]">
        <div className="text-[11px] text-muted-darker uppercase tracking-[2px] font-mono mb-1">
          🇵🇰 Pakistan
        </div>
        <div className="text-lg font-mono font-bold text-primary tabular-nums">
          {time.pk}
        </div>
      </div>
      <div className="glass rounded-2xl px-5 py-3 text-center min-w-[140px]">
        <div className="text-[11px] text-muted-darker uppercase tracking-[2px] font-mono mb-1">
          🇺🇸 New York
        </div>
        <div className="text-lg font-mono font-bold text-light tabular-nums">
          {time.us}
        </div>
      </div>
    </div>
  );
}

export function Contact() {
  const { contactIntro, resumePath } = useModeData();

  return (
    <section id="contact" className="py-[120px] px-6 md:px-10 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none contact-grid-bg" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 80%, rgba(249,115,22,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-[700px] mx-auto text-center relative z-[2]">
        <Section variant="blur">
          <div className="section-label font-mono text-xs tracking-[4px] uppercase text-primary mb-4 flex items-center gap-3 justify-center">
            Get In Touch
          </div>
          <h2 className="font-display text-5xl max-md:text-3xl font-bold leading-[1.15] mb-5">
            Let&apos;s build something
            <br />
            <span className="text-primary italic">
              amazing together
              <motion.span
                className="inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
              />
            </span>
          </h2>
        </Section>

        <Section delay={0.15} variant="blur">
          <p className="text-muted text-base leading-[1.8] mb-10 max-w-[520px] mx-auto">
            {contactIntro}
          </p>
        </Section>

        {/* Live timezone clock */}
        <Section delay={0.2}>
          <div className="mb-10">
            <LiveClock />
          </div>
        </Section>

        {/* CTA Buttons */}
        <Section delay={0.25}>
          <div className="flex gap-4 justify-center flex-wrap mb-8">
            <Magnetic strength={0.2}>
              <a href="mailto:eishakamran313@gmail.com" className="no-underline">
                <button className="cta-btn inline-flex items-center gap-2.5 px-9 py-4 bg-gradient-to-br from-primary to-primary-dark text-white border-none rounded-full text-[15px] font-semibold cursor-pointer tracking-[0.5px] transition-all duration-[400ms] hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(249,115,22,0.3)]">
                  <Mail size={18} />
                  Send Me an Email
                  <ArrowRight size={14} />
                </button>
              </a>
            </Magnetic>
          </div>
        </Section>

        {/* Social links */}
        <Section delay={0.3}>
          <div className="flex gap-3 justify-center flex-wrap mb-12">
            <Magnetic strength={0.15}>
              <a
                href="https://www.linkedin.com/in/eisha313"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline"
              >
                <motion.div
                  className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-muted-dark hover:text-primary hover:border-primary/30 transition-all duration-300 cursor-pointer"
                  whileHover={{ y: -3, scale: 1.1 }}
                >
                  <Linkedin size={20} />
                </motion.div>
              </a>
            </Magnetic>
            <Magnetic strength={0.15}>
              <a href="https://github.com/Eisha313" target="_blank" rel="noopener noreferrer" className="no-underline">
                <motion.div
                  className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-muted-dark hover:text-primary hover:border-primary/30 transition-all duration-300 cursor-pointer"
                  whileHover={{ y: -3, scale: 1.1 }}
                >
                  <Github size={20} />
                </motion.div>
              </a>
            </Magnetic>
            <Magnetic strength={0.15}>
              <a href="mailto:eishakamran313@gmail.com" className="no-underline">
                <motion.div
                  className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-muted-dark hover:text-primary hover:border-primary/30 transition-all duration-300 cursor-pointer"
                  whileHover={{ y: -3, scale: 1.1 }}
                >
                  <Mail size={20} />
                </motion.div>
              </a>
            </Magnetic>
            <Magnetic strength={0.15}>
              <a href={resumePath} download className="no-underline">
                <motion.div
                  className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-muted-dark hover:text-primary hover:border-primary/30 transition-all duration-300 cursor-pointer"
                  whileHover={{ y: -3, scale: 1.1 }}
                >
                  <Download size={20} />
                </motion.div>
              </a>
            </Magnetic>
          </div>
        </Section>

        {/* Contact info */}
        <Section delay={0.35}>
          <div className="flex justify-center gap-10 flex-wrap pt-8 border-t border-dark-card">
            {contactInfo.map((item, i) => {
              const Icon = contactIcons[i];
              return (
                <div key={i} className="text-center">
                  <div className="mb-1.5 flex justify-center">
                    <Icon className="text-primary" size={20} />
                  </div>
                  <div className="text-[11px] text-muted-darker uppercase tracking-[2px] font-mono mb-1">
                    {item.label}
                  </div>
                  <div className="text-sm font-medium text-light-muted">
                    {item.value}
                  </div>
                </div>
              );
            })}
          </div>
        </Section>
      </div>
    </section>
  );
}
