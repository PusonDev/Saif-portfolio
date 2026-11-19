"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";
import { LayoutGrid, Type, Video, PenTool, Sparkles, Palette, MonitorPlay, ArrowUpRight } from "lucide-react";

export function ServicesBentoSection() {
  const { services, profile } = portfolioData;

  const iconMap: Record<string, React.ReactNode> = {
    "01": <Type className="w-5 h-5 text-accent" />,
    "02": <Video className="w-5 h-5 text-accent" />,
    "03": <PenTool className="w-5 h-5 text-accent" />,
    "04": <Sparkles className="w-5 h-5 text-accent" />,
    "05": <Palette className="w-5 h-5 text-accent" />,
    "06": <MonitorPlay className="w-5 h-5 text-accent" />,
  };

  return (
    <section id="services" className="py-20 sm:py-28 px-5 sm:px-8 max-w-5xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-6 border-b border-border-subtle">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-accent">
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>05 / Motion Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink-primary">
            End-to-end motion disciplines built with <span className="font-serif italic font-normal">precision.</span>
          </h2>
        </div>

        <span className="text-xs font-mono uppercase tracking-wider text-ink-muted">
          Adobe Creative Suite · Handcrafted Keyframes
        </span>
      </div>

      {/* Bento Grid (2 cols on tablet, 3 cols on desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <motion.div
            key={service.index}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className={`editorial-card rounded-2xl p-6 border border-border-subtle bg-surface-1 flex flex-col justify-between group relative overflow-hidden ${
              idx === 0 || idx === 1 ? "md:col-span-1" : ""
            }`}
          >
            {/* 1px Top Specular Highlight */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent absolute top-0 left-0" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-surface-2 border border-border-subtle flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                  {iconMap[service.index]}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-accent uppercase tracking-wider">
                    {service.highlight}
                  </span>
                  <span className="font-mono text-xs text-ink-muted">
                    /{service.index}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-ink-primary tracking-tight group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-ink-secondary leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border-subtle flex items-center justify-between">
              <div className="flex items-center gap-2">
                {service.tools.map((t, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md bg-surface-2 text-ink-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={profile.instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`View samples for ${service.title}`}
                className="w-7 h-7 rounded-full bg-surface-2 flex items-center justify-center text-ink-muted group-hover:text-ink-primary group-hover:bg-accent group-hover:text-white transition-all"
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
