"use client";

import { Section } from "@/components/ui/section";
import { contactInfo } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="py-[120px] px-10 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 80%, rgba(249,115,22,0.05) 0%, transparent 60%)",
        }}
      />
      <div className="max-w-[700px] mx-auto text-center relative z-[2]">
        <Section>
          <div className="section-label font-mono text-xs tracking-[4px] uppercase text-primary mb-4 flex items-center gap-3 justify-center">
            Get In Touch
          </div>
          <h2 className="font-display text-5xl font-bold leading-[1.15] mb-5">
            Let&apos;s build something
            <br />
            <span className="text-primary italic">amazing together</span>
          </h2>
        </Section>

        <Section delay={0.15}>
          <p className="text-muted text-base leading-[1.8] mb-10 max-w-[520px] mx-auto">
            Whether you&apos;re a startup founder looking for a TPM who
            understands engineering, or a team lead seeking someone who can hit
            the ground running remotely — I&apos;d love to chat.
          </p>
        </Section>

        <Section delay={0.25}>
          <div className="flex gap-4 justify-center flex-wrap mb-12">
            <a href="mailto:eisha@axiomsolinc.com" className="decoration-none">
              <button className="cta-btn inline-flex items-center gap-2.5 px-9 py-4 bg-gradient-to-br from-primary to-primary-dark text-white border-none rounded-full text-[15px] font-semibold cursor-pointer tracking-[0.5px] transition-all duration-[400ms] hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(249,115,22,0.3)]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Send Me an Email
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/eisha-kamran"
              target="_blank"
              rel="noopener noreferrer"
              className="decoration-none"
            >
              <button className="inline-flex items-center gap-2.5 px-9 py-[15px] bg-transparent text-light border-[1.5px] border-dark-border-light rounded-full text-[15px] font-medium cursor-pointer tracking-[0.5px] transition-all duration-[400ms] hover:border-primary hover:text-primary hover:-translate-y-0.5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn Profile
              </button>
            </a>
          </div>
        </Section>

        <Section delay={0.35}>
          <div className="flex justify-center gap-10 flex-wrap pt-8 border-t border-dark-card">
            {contactInfo.map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-xl mb-1.5">{item.icon}</div>
                <div className="text-[11px] text-muted-darker uppercase tracking-[2px] font-mono mb-1">
                  {item.label}
                </div>
                <div className="text-sm font-medium text-light-muted">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </section>
  );
}
