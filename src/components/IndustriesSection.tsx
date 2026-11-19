"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Globe2, Cpu, Play, Briefcase, ShoppingBag, BookOpen } from "lucide-react";

export function IndustriesSection() {
  const { industries } = portfolioData;

  const iconMap: Record<string, React.ReactNode> = {
    Cpu: <Cpu className="w-5 h-5 text-accent" />,
    Play: <Play className="w-5 h-5 text-accent" />,
    Briefcase: <Briefcase className="w-5 h-5 text-accent" />,
    ShoppingBag: <ShoppingBag className="w-5 h-5 text-accent" />,
    BookOpen: <BookOpen className="w-5 h-5 text-accent" />,
  };

  return (
    <section id="industries" className="py-20 sm:py-28 px-5 sm:px-8 max-w-5xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-6 border-b border-border-subtle">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-accent">
            <Globe2 className="w-3.5 h-3.5" />
            <span>12 / Niches & Sectors</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink-primary">
            Tailored motion solutions for modern <span className="font-serif italic font-normal">industries.</span>
          </h2>
        </div>

        <span className="text-xs font-mono uppercase tracking-wider text-ink-muted">
          High-Ticket SaaS · Creators · DTC · Agencies
        </span>
      </div>

      {/* Industries Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((ind, idx) => (
          <div
            key={ind.index}
            className={`editorial-card rounded-2xl p-6 border border-border-subtle bg-surface-1 flex flex-col justify-between relative overflow-hidden group ${
              idx === 0 || idx === 1 ? "md:col-span-1" : ""
            }`}
          >
            {/* Top Specular Highlight */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent absolute top-0 left-0" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-surface-2 border border-border-subtle flex items-center justify-center">
                  {iconMap[ind.icon]}
                </div>
                <span className="font-mono text-xs text-ink-muted">
                  /{ind.index}
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-ink-primary tracking-tight">
                  {ind.title}
                </h3>
                <p className="mt-2 text-xs text-ink-secondary leading-relaxed font-normal">
                  {ind.description}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-border-subtle flex items-center justify-between text-[11px] font-mono text-ink-muted">
              <span>Production Target</span>
              <span className="text-accent uppercase">High Retention</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
