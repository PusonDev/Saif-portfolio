"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Scale, Check, X, Sparkles } from "lucide-react";

export function ComparisonMatrixSection() {
  const { comparison } = portfolioData;

  return (
    <section id="comparison" className="py-20 sm:py-28 px-5 sm:px-8 max-w-5xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-6 border-b border-border-subtle">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-accent">
            <Scale className="w-3.5 h-3.5" />
            <span>08 / Craftsmanship Benchmark</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink-primary">
            Dedicated motion craft vs generic <span className="font-serif italic font-normal">shortcuts.</span>
          </h2>
        </div>

        <span className="text-xs font-mono uppercase tracking-wider text-ink-muted">
          100% Handcrafted Keyframes · Zero AI Slop
        </span>
      </div>

      {/* Comparison Table Card */}
      <div className="editorial-card rounded-2xl border border-border-subtle bg-surface-1 overflow-hidden shadow-xl">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b border-border-subtle bg-surface-2/40 text-xs font-mono uppercase tracking-wider">
                <th className="py-4 px-6 text-ink-muted font-normal w-1/4">
                  {comparison.headers[0]}
                </th>
                <th className="py-4 px-6 text-accent font-semibold w-1/4 bg-surface-2/60 border-x border-border-subtle">
                  {comparison.headers[1]}
                </th>
                <th className="py-4 px-6 text-ink-muted font-normal w-1/4">
                  {comparison.headers[2]}
                </th>
                <th className="py-4 px-6 text-ink-muted font-normal w-1/4">
                  {comparison.headers[3]}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-subtle text-xs sm:text-sm font-sans">
              {comparison.rows.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-surface-2/30 transition-colors group"
                >
                  {/* Feature Label */}
                  <td className="py-4 px-6 font-mono text-xs uppercase tracking-wider text-ink-primary">
                    {row.feature}
                  </td>

                  {/* Saif (Active Column with Accent Glow Border) */}
                  <td className="py-4 px-6 bg-surface-2/40 border-x border-border-subtle text-ink-primary font-medium">
                    <div className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5 text-accent">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{row.saif}</span>
                    </div>
                  </td>

                  {/* Pre-made Templates */}
                  <td className="py-4 px-6 text-ink-secondary">
                    <div className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-surface-2 flex items-center justify-center shrink-0 mt-0.5 text-ink-muted">
                        <X className="w-3 h-3" />
                      </div>
                      <span>{row.templates}</span>
                    </div>
                  </td>

                  {/* Marketplace Freelancers */}
                  <td className="py-4 px-6 text-ink-secondary">
                    <div className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-surface-2 flex items-center justify-center shrink-0 mt-0.5 text-ink-muted">
                        <X className="w-3 h-3" />
                      </div>
                      <span>{row.freelancers}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Note */}
        <div className="p-4 px-6 border-t border-border-subtle bg-surface-2/20 flex items-center justify-between text-[11px] font-mono text-ink-muted">
          <span>Quality Standard: Adobe After Effects · Graph Editor Easing</span>
          <span className="text-accent uppercase tracking-wider">No AI Hallucinations</span>
        </div>
      </div>
    </section>
  );
}
