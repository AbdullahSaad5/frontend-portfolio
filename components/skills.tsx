"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Target } from "lucide-react";
import { Section } from "@/components/ui/section";
import { skills, tools } from "@/data/portfolio";

function SkillBar({ skill, index, hoveredSkill, setHoveredSkill }: {
  skill: typeof skills[number];
  index: number;
  hoveredSkill: number | null;
  setHoveredSkill: (i: number | null) => void;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <Section delay={index * 0.08}>
      <div
        ref={ref}
        onMouseEnter={() => setHoveredSkill(index)}
        onMouseLeave={() => setHoveredSkill(null)}
        className="cursor-default transition-all duration-300"
      >
        <div className="flex justify-between mb-2">
          <span
            className="text-sm font-medium transition-colors duration-300"
            style={{ color: hoveredSkill === index ? skill.color : "#8BA3B8" }}
          >
            {skill.name}
          </span>
          <span
            className="font-mono text-[13px] transition-colors duration-300"
            style={{ color: hoveredSkill === index ? skill.color : "#3A5568" }}
          >
            {skill.level}%
          </span>
        </div>
        <div className="h-1.5 rounded-[3px] bg-dark-card overflow-hidden relative">
          <div
            className="h-full rounded-[3px] transition-[width] duration-[1.5s]"
            style={{
              width: inView ? `${skill.level}%` : "0%",
              background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})`,
              boxShadow: hoveredSkill === index ? `0 0 20px ${skill.color}40` : "none",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />
        </div>
      </div>
    </Section>
  );
}

export function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  return (
    <section id="skills" className="py-[120px] px-10">
      <div className="max-w-[1100px] mx-auto">
        <Section>
          <div className="text-center mb-16">
            <div className="section-label font-mono text-xs tracking-[4px] uppercase text-primary mb-4 flex items-center gap-3 justify-center">
              Skills & Tools
            </div>
            <h2 className="font-display text-[42px] font-bold">
              My <span className="text-primary italic">Arsenal</span>
            </h2>
          </div>
        </Section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Skill Bars */}
          <div>
            <Section>
              <h3 className="text-lg font-semibold mb-8 text-light-muted">
                Core Competencies
              </h3>
            </Section>
            <div className="flex flex-col gap-6">
              {skills.map((skill, i) => (
                <SkillBar
                  key={i}
                  skill={skill}
                  index={i}
                  hoveredSkill={hoveredSkill}
                  setHoveredSkill={setHoveredSkill}
                />
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <Section>
              <h3 className="text-lg font-semibold mb-8 text-light-muted">
                Tools & Technologies
              </h3>
            </Section>
            <Section delay={0.2}>
              <div className="flex flex-wrap gap-2.5">
                {tools.map((tool, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center px-[18px] py-2 rounded-full text-[13px] font-mono tracking-[0.5px] border border-dark-border-subtle bg-dark-card/60 text-light-muted backdrop-blur-[10px] transition-all duration-300 hover:border-primary hover:text-primary hover:-translate-y-0.5 hover:bg-primary/5 cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </Section>

            <Section delay={0.35}>
              <div className="mt-10 p-7 rounded-2xl bg-primary/4 border border-primary/10">
                <div className="flex items-center gap-2.5 mb-3">
                  <Target className="text-primary" size={20} />
                  <span className="font-semibold text-[15px]">
                    What I&apos;m Looking For
                  </span>
                </div>
                <p className="text-muted text-sm leading-[1.75]">
                  Remote TPM or engineering roles at early-to-mid-stage startups
                  (Seed → Series B) building in AI, SaaS, developer tools, or
                  automation. Open to both project management and hands-on coding
                  positions. I thrive in environments where I can learn, ship, and
                  make a real impact.
                </p>
              </div>
            </Section>
          </div>
        </div>
      </div>
    </section>
  );
}
