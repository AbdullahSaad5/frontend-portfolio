"use client";

import { Section } from "@/components/ui/section";
import { experiences } from "@/data/portfolio";

export function Experience() {
  return (
    <section
      id="experience"
      className="py-[100px] px-10"
      style={{
        background:
          "linear-gradient(180deg, rgba(10,18,25,0.5) 0%, transparent 100%)",
      }}
    >
      <div className="max-w-[1100px] mx-auto">
        <Section>
          <div className="text-center mb-16">
            <div className="section-label font-mono text-xs tracking-[4px] uppercase text-primary mb-4 flex items-center gap-3 justify-center">
              Experience
            </div>
            <h2 className="font-display text-[42px] font-bold">
              Where I&apos;ve Made{" "}
              <span className="text-primary italic">Impact</span>
            </h2>
          </div>
        </Section>

        {experiences.map((exp, idx) => (
          <Section key={idx} delay={0.15}>
            <div className="flex gap-8 p-12 rounded-[20px] bg-gradient-to-br from-dark-card/60 to-dark-light/80 border border-dark-border relative overflow-hidden transition-all duration-[400ms] hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(249,115,22,0.08)]">
              <div className="timeline-dot w-3.5 h-3.5 rounded-full border-2 border-primary bg-dark relative z-[2] shrink-0 mt-1.5" />
              <div className="flex-1">
                <div className="flex justify-between items-start flex-wrap gap-3 mb-2">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-primary text-[15px] font-medium">
                      {exp.company}{" "}
                      <span className="text-muted-darkest">·</span>{" "}
                      <span className="text-muted-dark font-normal">
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-[13px] text-muted-dark px-4 py-1.5 rounded-full border border-dark-border bg-dark/50">
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
          </Section>
        ))}

        {/* Testimonial */}
        <Section delay={0.2}>
          <div className="testimonial-card relative p-10 rounded-[20px] bg-gradient-to-br from-dark-card/60 to-dark-light/80 border border-dark-border overflow-hidden mt-10">
            <p className="text-light-muted leading-[1.9] text-base italic relative z-[2] mb-6">
              I cannot say enough good things about Axiom. The team knows their
              stuff — they ask the right questions and take the time to really get
              to know our entire business. They&apos;re extremely transparent with
              pricing and timeline, and really try to give realistic expectations.
              We view them as a true partner, not just a vendor.
              <span className="text-primary font-semibold not-italic">
                {" "}
                Special shout out to Eisha
              </span>
              , but the whole team really rocks!
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-dark-border-light to-dark-border text-base font-bold text-primary">
                ★
              </div>
              <div>
                <div className="text-sm font-semibold">
                  Verified Client Review
                </div>
                <div className="text-xs text-muted-dark">
                  via axiomsolinc.com
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </section>
  );
}
