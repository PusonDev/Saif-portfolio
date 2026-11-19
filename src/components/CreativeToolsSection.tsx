"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Cpu, Terminal, Wrench, Check } from "lucide-react";

export function CreativeToolsSection() {
  const { creativeTools } = portfolioData;

  return (
    <section id="tools" className="py-20 sm:py-28 px-5 sm:px-8 max-w-5xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-6 border-b border-border-subtle">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-accent">
            <Cpu className="w-3.5 h-3.5" />
            <span>11 / Production Suite</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink-primary">
            Mastery of the Adobe Creative <span className="font-serif italic font-normal">Cloud.</span>
          </h2>
        </div>

        <span className="text-xs font-mono uppercase tracking-wider text-ink-muted">
          Battle-Tested Motion & Design Software
        </span>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {creativeTools.map((tool, idx) => (
          <div
            key={idx}
            className="editorial-card rounded-2xl p-6 sm:p-8 border border-border-subtle bg-surface-1 flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Top Specular Highlight */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent absolute top-0 left-0" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-accent uppercase tracking-wider font-medium">
                  {tool.role}
                </span>
                <span className="text-xs font-mono text-ink-muted">
                  0{idx + 1}
                </span>
              </div>

              <h3 className="text-xl font-bold text-ink-primary tracking-tight">
                {tool.name}
              </h3>

              <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed font-normal">
                {tool.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-border-subtle flex flex-wrap gap-2">
              {tool.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono bg-surface-2 text-ink-muted border border-border-subtle"
                >
                  <Check className="w-3 h-3 text-accent" />
                  <span>{tag}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
