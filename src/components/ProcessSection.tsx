"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";
import { ShieldCheck, GraduationCap, CheckCircle2, Award, Briefcase } from "lucide-react";

export function ProcessSection() {
  const { processCadence, credentials } = portfolioData;

  return (
    <section id="process" className="py-20 sm:py-28 px-5 sm:px-8 max-w-5xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 pb-6 border-b border-border-subtle">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-accent">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>05 / Execution & Trust</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink-primary">
            Verified credentials, 4-step cadence & client <span className="font-serif italic font-normal">guarantees.</span>
          </h2>
        </div>

        <span className="text-xs font-mono uppercase tracking-wider text-ink-muted">
          Milestone College · British Council Trained
        </span>
      </div>

      {/* 2-Column Executive Trust Block */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: 4-Step Execution Cadence (6 Cols) */}
        <div className="lg:col-span-6 space-y-4">
          <div className="luxury-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border-subtle bg-surface-1 shadow-xl relative overflow-hidden">
            <div className="specular-top-light" />

            <div className="flex items-center justify-between pb-4 mb-4 border-b border-border-subtle">
              <span className="text-xs font-mono uppercase tracking-wider text-ink-primary font-medium">
                4-Step Execution Cadence
              </span>
              <span className="text-[10px] font-mono text-accent uppercase tracking-widest">
                End-to-End
              </span>
            </div>

            <div className="space-y-6">
              {processCadence.map((step) => (
                <div key={step.step} className="flex items-start gap-4 group">
                  <div className="w-8 h-8 rounded-xl bg-surface-2 border border-border-subtle flex items-center justify-center font-mono text-xs font-semibold text-accent shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                    {step.step}
                  </div>

                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="font-semibold text-ink-primary text-sm">{step.title}</span>
                      <span className="text-[10px] text-ink-muted">{step.tools}</span>
                    </div>

                    <p className="text-xs text-ink-secondary leading-relaxed font-normal">
                      {step.description}
                    </p>

                    <div className="text-[10px] font-mono text-accent pt-1">
                      Deliverable: {step.deliverable}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Verified Credentials & Client Guarantees (6 Cols) */}
        <div className="lg:col-span-6 space-y-6">
          {/* Credentials Card */}
          <div className="luxury-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border-subtle bg-surface-1 shadow-xl relative overflow-hidden space-y-5">
            <div className="specular-top-light" />

            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-ink-primary pb-3 border-b border-border-subtle">
              <Briefcase className="w-4 h-4 text-accent" />
              <span>Verified Experience & Education</span>
            </div>

            {/* Experience */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-ink-primary font-semibold text-sm">{credentials.experience.role}</span>
                <span className="text-accent">{credentials.experience.period}</span>
              </div>
              <p className="text-xs font-mono text-ink-muted">
                Personal Motion Studio: {credentials.experience.handle}
              </p>
              <ul className="space-y-1.5 text-xs text-ink-secondary font-normal pt-1">
                {credentials.experience.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Education Divider */}
            <div className="pt-3 border-t border-border-subtle space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-ink-muted uppercase tracking-wider">
                <GraduationCap className="w-3.5 h-3.5 text-accent" />
                <span>Formal Education</span>
              </div>

              <div className="space-y-3">
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

            {/* Languages */}
            <div className="pt-3 border-t border-border-subtle flex items-center justify-between text-xs font-mono">
              <span className="text-ink-muted uppercase tracking-wider">Languages:</span>
              <span className="text-ink-primary font-medium">{credentials.languages}</span>
            </div>
          </div>

          {/* 4 Client Acceptance Guarantees */}
          <div className="luxury-card rounded-2xl p-6 border border-border-subtle bg-surface-1 shadow-md relative overflow-hidden">
            <div className="specular-top-light" />

            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent mb-4">
              <Award className="w-4 h-4" />
              <span>4 Client Acceptance Guarantees</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {credentials.guarantees.map((g, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs font-sans text-ink-secondary">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                  <span>{g}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
