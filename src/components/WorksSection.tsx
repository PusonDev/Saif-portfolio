"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";
import { ArrowUpRight, Play, Film, Layers, Sparkles } from "lucide-react";

export function WorksSection() {
  const { works, profile } = portfolioData;
  const flagship = works.find((w) => w.isFlagship) || works[0];
  const supportingWorks = works.filter((w) => !w.isFlagship);

  const [activeWordIndex, setActiveWordIndex] = useState(0);

  const kineticWords = ["RHYTHM", "TIMING", "STORY", "MOTION"];

  return (
    <section id="works" className="py-20 sm:py-28 px-5 sm:px-8 max-w-5xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-6 border-b border-border-subtle">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-accent">
            <Film className="w-3.5 h-3.5" />
            <span>Selected Focus</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink-primary">
            Motion built for modern screens.
          </h2>
        </div>

        <a
          href={profile.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-ink-secondary hover:text-ink-primary transition-colors duration-200"
        >
          <span>Instagram Archive ({profile.instagramHandle})</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
        </a>
      </div>

      <div className="space-y-6">
        {/* Flagship Card: 01 Kinetic Typography & Narrative Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="editorial-card rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row gap-8 items-center justify-between group"
        >
          {/* Left Info Column */}
          <div className="lg:w-1/2 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-accent uppercase tracking-widest">
                  {flagship.index} /
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-ink-muted">
                  {flagship.category}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-ink-primary tracking-tight">
                {flagship.title}{" "}
                {flagship.italicTitle && (
                  <span className="font-serif italic font-normal text-ink-primary">
                    {flagship.italicTitle}
                  </span>
                )}
              </h3>

              <p className="text-sm text-ink-secondary leading-relaxed">
                {flagship.description}
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex flex-wrap gap-2">
                {flagship.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono border border-border-subtle bg-surface-2 text-ink-secondary"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <a
                href={flagship.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-ink-primary hover:text-accent transition-colors font-medium"
              >
                <span>Watch on Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
              </a>
            </div>
          </div>

          {/* Right: Interactive 16:9 Cinema Typographic Stage */}
          <div
            onMouseEnter={() => setActiveWordIndex((prev) => (prev + 1) % kineticWords.length)}
            className="lg:w-1/2 w-full aspect-[16/9] rounded-xl border border-border-subtle bg-surface-2 relative overflow-hidden flex flex-col items-center justify-center p-6 cursor-pointer select-none group/stage"
          >
            {/* Subtle timecode overlay */}
            <div className="absolute top-3 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-ink-muted tracking-widest uppercase">
              <span>TC 00:01:24:18</span>
              <span className="flex items-center gap-1.5 text-accent">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                REC 24FPS
              </span>
            </div>

            {/* Kinetic Typography Animation Stage */}
            <div className="relative text-center overflow-hidden py-2">
              <motion.div
                key={activeWordIndex}
                initial={{ y: 35, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -35, opacity: 0 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif italic text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ink-primary font-normal"
              >
                {kineticWords[activeWordIndex]}
              </motion.div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-ink-muted mt-2">
                Kinetic Choreography • Hover to Cycle
              </div>
            </div>

            {/* Bottom scrubber line */}
            <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2">
              <div className="h-0.5 flex-1 bg-border-subtle overflow-hidden rounded-full">
                <div className="h-full w-2/3 bg-accent/80 rounded-full" />
              </div>
              <span className="text-[9px] font-mono text-ink-muted">1080P</span>
            </div>
          </div>
        </motion.div>

        {/* 2 Supporting Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {supportingWorks.map((work, idx) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="editorial-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                {/* Header Strip */}
                <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider">
                  <span className="text-accent">{work.index} /</span>
                  <span className="text-ink-muted">{work.category}</span>
                </div>

                {/* Interactive Visual Stage */}
                {work.id === "social-reels" ? (
                  /* 9:16 Social Reel Frame Preview */
                  <div className="w-full h-44 rounded-xl border border-border-subtle bg-surface-2 relative overflow-hidden flex items-center justify-center p-4">
                    <div className="w-24 h-36 rounded-lg border border-border-strong bg-surface-1 flex flex-col justify-between p-2 shadow-md relative group-hover:scale-105 transition-transform duration-300">
                      <div className="flex items-center justify-between text-[8px] font-mono text-ink-muted">
                        <span>9:16</span>
                        <Play className="w-2.5 h-2.5 text-accent fill-current" />
                      </div>
                      <div className="space-y-1">
                        <div className="h-1.5 w-12 bg-accent/70 rounded-full" />
                        <div className="h-1 w-16 bg-ink-muted/40 rounded-full" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 text-[9px] font-mono text-ink-muted uppercase tracking-wider">
                      Vertical Social Pace
                    </div>
                  </div>
                ) : (
                  /* Split Frame Transition & VFX Preview */
                  <div className="w-full h-44 rounded-xl border border-border-subtle bg-surface-2 relative overflow-hidden flex items-center justify-center p-4">
                    <div className="w-48 h-28 rounded-lg border border-border-strong bg-surface-1 flex overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-300">
                      <div className="w-1/2 h-full bg-surface-2 border-r border-accent/40 flex items-center justify-center">
                        <span className="text-[10px] font-mono text-ink-muted">Raw</span>
                      </div>
                      <div className="w-1/2 h-full bg-surface-1 flex items-center justify-center">
                        <span className="text-[10px] font-mono text-accent">VFX</span>
                      </div>
                    </div>
                    <div className="absolute bottom-2 text-[9px] font-mono text-ink-muted uppercase tracking-wider">
                      Layered Compositing Flow
                    </div>
                  </div>
                )}

                {/* Title & Copy */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-ink-primary tracking-tight">
                    {work.title}{" "}
                    {work.italicTitle && (
                      <span className="font-serif italic font-normal text-ink-primary">
                        {work.italicTitle}
                      </span>
                    )}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                    {work.description}
                  </p>
                </div>
              </div>

              {/* Footer Row */}
              <div className="pt-4 border-t border-border-subtle flex flex-col gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {work.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-surface-2 text-ink-muted border border-border-subtle"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <a
                  href={work.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-ink-primary hover:text-accent transition-colors font-medium pt-1"
                >
                  <span>Watch on Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
