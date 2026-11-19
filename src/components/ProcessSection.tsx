"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { ShieldCheck, GraduationCap, CheckCircle2, Award, Briefcase } from "lucide-react";

export function ProcessSection() {
  const { processCadence, credentials } = portfolioData;

  return (
    <section id="process" className="py-10 sm:py-14 px-4 sm:px-8 max-w-5xl mx-auto w-full scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2.5 mb-5 sm:mb-7 pb-4 border-b border-white/[0.05]">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-accent">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>05 / Execution and Trust</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink-primary">
            Verified credentials, 4-step cadence and client <span className="font-serif italic font-normal">guarantees.</span>
          </h2>
        </div>

        <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-ink-muted">
          Milestone College · British Council Trained
        </span>
      </div>

      {/* 2-Column Executive Trust Block */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch">
        {/* Left Column: 4-Step Execution Cadence + Guarantees (6 Cols) */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-4 sm:space-y-5">
          <div className="rounded-2xl p-5 sm:p-7 border border-white/[0.05] bg-white/[0.015] relative overflow-hidden flex-1">
            <div className="specular-top-light" />

            <div className="flex items-center justify-between pb-3 mb-3 sm:mb-4 border-b border-white/[0.05]">
              <span className="text-xs font-mono uppercase tracking-wider text-ink-primary font-medium">
                4-Step Execution Cadence
              </span>
              <span className="text-[10px] font-mono text-accent uppercase tracking-widest">
                End-to-End
              </span>
            </div>

            <div className="space-y-3.5 sm:space-y-4">
              {processCadence.map((step) => (
                <div key={step.step} className="flex items-start gap-3 sm:gap-3.5 group">
                  <div className="w-7 h-7 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center font-mono text-xs font-semibold text-accent shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                    {step.step}
                  </div>

                  <div className="space-y-0.5 flex-1 min-w-0">
                    <div className="flex flex-col xs:flex-row xs:items-center justify-between text-xs font-mono gap-0.5 sm:gap-1">
                      <span className="font-semibold text-ink-primary text-xs sm:text-sm">{step.title}</span>
                      <span className="text-[10px] text-ink-muted shrink-0">{step.tools}</span>
                    </div>

                    <p className="text-xs text-ink-secondary leading-relaxed font-normal pt-0.5">
                      {step.description}
                    </p>

                    <div className="text-[10px] font-mono text-accent pt-0.5">
                      Deliverable: {step.deliverable}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4 Client Acceptance Guarantees */}
          <div className="rounded-2xl p-4 sm:p-6 border border-white/[0.05] bg-white/[0.015] relative overflow-hidden">
            <div className="specular-top-light" />

            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent mb-2.5 sm:mb-3">
              <Award className="w-4 h-4" />
              <span>4 Client Acceptance Guarantees</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
              {credentials.guarantees.map((g, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs font-sans text-ink-secondary">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                  <span>{g}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Verified Credentials & Education (6 Cols) */}
        <div className="lg:col-span-6">
          <div className="h-full rounded-2xl p-5 sm:p-7 border border-white/[0.05] bg-white/[0.015] relative overflow-hidden space-y-4 flex flex-col justify-between">
            <div className="specular-top-light" />

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-ink-primary pb-3 border-b border-white/[0.05]">
                <Briefcase className="w-4 h-4 text-accent" />
                <span>Verified Experience and Education</span>
              </div>

              {/* Experience */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-ink-primary font-semibold text-sm">{credentials.experience.role}</span>
                  <span className="text-accent">{credentials.experience.period}</span>
                </div>
                <p className="text-xs font-mono text-ink-muted">
                  Client & Creative Projects: {credentials.experience.handle}
                </p>
                <ul className="space-y-1 text-xs text-ink-secondary font-normal pt-1">
                  {credentials.experience.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Education */}
              <div className="pt-3 border-t border-white/[0.05] space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-mono text-ink-muted uppercase tracking-wider">
                  <GraduationCap className="w-3.5 h-3.5 text-accent" />
                  <span>Formal Education</span>
                </div>

                <div className="space-y-2">
                  {credentials.education.map((item, idx) => (
                    <div key={idx} className="flex items-start justify-between text-xs font-mono">
                      <div>
                        <div className="text-ink-primary font-medium">{item.institution}</div>
                        <div className="text-ink-muted text-[11px]">{item.title}</div>
                      </div>
                      <span className="text-accent">{item.year}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Meta Details */}
            <div className="space-y-2.5 pt-3 border-t border-white/[0.05]">
              {/* Languages (All 4 Verified) */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-mono">
                <span className="text-ink-muted uppercase tracking-wider shrink-0">Languages:</span>
                <span className="text-ink-primary font-medium text-right">{credentials.languages}</span>
              </div>

              {/* Professional Skills */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-mono">
                <span className="text-ink-muted uppercase tracking-wider shrink-0">Professional Skills:</span>
                <span className="text-ink-secondary text-[11px] sm:text-right">{credentials.strengths.join(" · ")}</span>
              </div>

              {/* Interests */}
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-ink-muted uppercase tracking-wider">Interests:</span>
                <span className="text-ink-secondary text-[11px]">{credentials.interests.join(" · ")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
