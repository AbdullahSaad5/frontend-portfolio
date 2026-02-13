"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, Clock, CheckCircle } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Magnetic } from "@/components/ui/magnetic";
import { contactInfo } from "@/data/portfolio";

const contactIcons = [MapPin, Clock, CheckCircle];

export function Contact() {
  return (
    <section id="contact" className="py-[120px] px-10 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 pointer-events-none contact-grid-bg" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 80%, rgba(249,115,22,0.05) 0%, transparent 60%)",
        }}
      />
      <div className="max-w-[700px] mx-auto text-center relative z-[2]">
        <Section variant="blur">
          <div className="section-label font-mono text-xs tracking-[4px] uppercase text-primary mb-4 flex items-center gap-3 justify-center">
            Get In Touch
          </div>
          <h2 className="font-display text-5xl font-bold leading-[1.15] mb-5">
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
            Whether you&apos;re a startup founder looking for a TPM who
            understands engineering, or a team lead seeking someone who can hit
            the ground running remotely — I&apos;d love to chat.
          </p>
        </Section>

        <Section delay={0.25}>
          <div className="flex gap-4 justify-center flex-wrap mb-12">
            <Magnetic strength={0.2}>
              <a href="mailto:eisha@axiomsolinc.com" className="decoration-none">
                <button className="cta-btn inline-flex items-center gap-2.5 px-9 py-4 bg-gradient-to-br from-primary to-primary-dark text-white border-none rounded-full text-[15px] font-semibold cursor-pointer tracking-[0.5px] transition-all duration-[400ms] hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(249,115,22,0.3)]">
                  <Mail size={18} />
                  Send Me an Email
                </button>
              </a>
            </Magnetic>
            <Magnetic strength={0.15}>
              <a
                href="https://www.linkedin.com/in/eisha-kamran"
                target="_blank"
                rel="noopener noreferrer"
                className="decoration-none"
              >
                <button className="inline-flex items-center gap-2.5 px-9 py-[15px] bg-transparent text-light border-[1.5px] border-dark-border-light rounded-full text-[15px] font-medium cursor-pointer tracking-[0.5px] transition-all duration-[400ms] hover:border-primary hover:text-primary hover:-translate-y-0.5">
                  <Linkedin size={18} />
                  LinkedIn Profile
                </button>
              </a>
            </Magnetic>
          </div>
        </Section>

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
