"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";
import { LayoutGrid, Type, Video, PenTool, MonitorPlay, ArrowUpRight } from "lucide-react";

export function ServicesBentoSection() {
  const { capabilities, profile } = portfolioData;

  const iconMap: Record<string, React.ReactNode> = {
    "01": <Type className="w-5 h-5 text-accent" />,
    "02": <Video className="w-5 h-5 text-accent" />,
    "03": <PenTool className="w-5 h-5 text-accent" />,
    "04": <MonitorPlay className="w-5 h-5 text-accent" />,
  };

  return (
    <section id="services" className="py-20 sm:py-28 px-5 sm:px-8 max-w-5xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 pb-6 border-b border-border-subtle">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-accent">
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>04 / Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink-primary">
            Consolidated motion disciplines & production <span className="font-serif italic font-normal">standards.</span>
          </h2>
        </div>

        <span className="text-xs font-mono uppercase tracking-wider text-ink-muted">
          4 Core Disciplines · Zero Repetition
        </span>
      </div>

      {/* 4-Card Luxury Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {capabilities.map((cap, idx) => (
          <motion.div
            key={cap.index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.12 }}
            transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="luxury-card rounded-2xl p-6 sm:p-8 border border-border-subtle bg-surface-1 flex flex-col justify-between group relative overflow-hidden shadow-lg"
          >
            {/* 1px Top Specular Edge Light */}
            <div className="specular-top-light" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-surface-2 border border-border-subtle flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                  {iconMap[cap.index]}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-accent uppercase tracking-wider font-medium">
                    {cap.highlight}
                  </span>
                  <span className="font-mono text-xs text-ink-muted">
                    /{cap.index}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-ink-primary tracking-tight group-hover:text-accent transition-colors">
                  {cap.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-ink-secondary leading-relaxed font-normal">
                  {cap.description}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border-subtle flex items-center justify-between">
              <div className="flex items-center gap-2">
                {cap.tools.map((t, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-surface-2 text-ink-muted border border-border-subtle"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={profile.instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`View samples for ${cap.title}`}
                className="w-7 h-7 rounded-full bg-surface-2 flex items-center justify-center text-ink-muted group-hover:text-zinc-950 group-hover:bg-accent transition-all cursor-pointer"
              >
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
