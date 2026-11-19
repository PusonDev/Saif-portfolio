"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";
import { History, Globe, Heart } from "lucide-react";

export function ExperienceSection() {
  const { experience, education, capabilities } = portfolioData;

  return (
    <section id="experience" className="py-20 sm:py-28 px-5 sm:px-8 max-w-5xl mx-auto w-full">
      {/* Section Header */}
      <div className="mb-12 pb-6 border-b border-border-subtle">
        <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-accent mb-1.5">
          <History className="w-3.5 h-3.5" />
          <span>Curriculum & Capabilities</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink-primary">
          Editorial background & motion credentials.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
        {/* Left Column: Experience & Education Timeline (7 Cols) */}
        <div className="lg:col-span-7 space-y-12">
          {/* Work Experience */}
          <div className="space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-ink-muted border-b border-border-subtle pb-2">
              Production Experience
            </h3>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <h4 className="text-base font-bold text-ink-primary">
                    {experience.role}
                  </h4>
                  <p className="text-xs font-mono text-accent">
                    {experience.company} ({experience.handle})
                  </p>
                </div>
                <span className="font-mono text-[11px] text-ink-muted">
                  {experience.period}
                </span>
              </div>

              <ul className="space-y-2.5 pt-1">
                {experience.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-secondary leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/70 shrink-0 mt-2" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Education & Training */}
          <div className="space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-ink-muted border-b border-border-subtle pb-2">
              Education & Training
            </h3>

            <div className="space-y-6">
              {education.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-baseline justify-between">
                    <h4 className="text-sm font-semibold text-ink-primary">
                      {item.title}
                    </h4>
                    <span className="font-mono text-[11px] text-ink-muted">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-ink-secondary">
                    {item.institution}
                  </p>
                  <p className="text-xs text-ink-muted leading-relaxed pt-0.5">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Craft Index (5 Cols) */}
        <div className="lg:col-span-5 space-y-8 lg:border-l lg:border-border-subtle lg:pl-10">
          {/* Row 1: Primary Creative Suite */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-ink-muted">
              Primary Creative Suite
            </h3>
            <div className="flex flex-col gap-2">
              {capabilities.primarySuite.map((tool) => (
                <div
                  key={tool}
                  className="px-3.5 py-2 rounded-xl border border-border-subtle bg-surface-1 flex items-center justify-between text-xs font-medium text-ink-primary"
                >
                  <span>{tool}</span>
                  <span className="font-mono text-[10px] text-accent uppercase tracking-wider">
                    Official
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Core Competencies */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-ink-muted">
              Core Competencies
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {capabilities.competencies.map((comp) => (
                <span
                  key={comp}
                  className="px-2.5 py-1 rounded-md text-[11px] font-mono border border-border-subtle bg-surface-2 text-ink-secondary"
                >
                  {comp}
                </span>
              ))}
            </div>
          </div>

          {/* Row 3: Personal Profile */}
          <div className="space-y-4 pt-2 border-t border-border-subtle">
            {/* Languages */}
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-ink-muted">
                <Globe className="w-3.5 h-3.5 text-accent" />
                <span>Languages</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {capabilities.languages.map((lang) => (
                  <span key={lang} className="text-xs text-ink-secondary">
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-ink-muted">
                <Heart className="w-3.5 h-3.5 text-accent" />
                <span>Interests</span>
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-ink-secondary">
                {capabilities.interests.map((interest) => (
                  <span key={interest}>
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
