"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";
import { LayoutGrid, Type, Video, PenTool, MonitorPlay, ArrowUpRight } from "lucide-react";

export function ServicesBentoSection() {
  const { capabilities, profile } = portfolioData;

  const iconMap: Record<string, React.ReactNode> = {
    "01": <MonitorPlay className="w-4 h-4 text-accent" />,
    "02": <Type className="w-4 h-4 text-accent" />,
    "03": <Video className="w-4 h-4 text-accent" />,
    "04": <PenTool className="w-4 h-4 text-accent" />,
  };

  return (
    <section id="services" className="py-10 sm:py-14 px-4 sm:px-8 max-w-5xl mx-auto w-full scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2.5 mb-5 sm:mb-7 pb-4 border-b border-border-subtle">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-accent">
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>04 / Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink-primary">
            Consolidated motion disciplines and production <span className="font-serif italic font-normal">standards.</span>
          </h2>
        </div>

        <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-ink-muted">
          After Effects · Illustrator · Photoshop · Media Encoder
        </span>
      </div>

      {/* 2x2 Open Swiss Hairline Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-6">
        {capabilities.map((cap, idx) => (
          <motion.div
            key={cap.index}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.06 }}
            transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl p-5 sm:p-7 border border-border-subtle bg-surface-1 hover:bg-surface-hover transition-colors flex flex-col justify-between group relative overflow-hidden"
          >
            {/* 1px Top Specular Edge Light */}
            <div className="specular-top-light" />

            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-lg bg-surface-2 border border-border-subtle flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
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
                <p className="mt-1.5 text-xs sm:text-sm text-ink-secondary leading-relaxed font-normal">
                  {cap.description}
                </p>
              </div>
            </div>

            <div className="mt-5 pt-3.5 border-t border-border-subtle flex items-center justify-between">
              <div className="flex items-center gap-2">
                {cap.tools.map((t, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-surface-2 text-ink-muted border border-border-subtle"
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
                className="w-7 h-7 rounded-full bg-surface-2 border border-border-subtle flex items-center justify-center text-ink-muted group-hover:text-zinc-950 group-hover:bg-accent transition-all cursor-pointer"
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
