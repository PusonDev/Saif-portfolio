"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";
import { ArrowUpRight, Smartphone, Layers, Film } from "lucide-react";

export function WorksSection() {
  const { profile } = portfolioData;

  const [kineticPlay, setKineticPlay] = useState(0);

  const KINETIC_PHRASES = ["EASING", "HIERARCHY", "RETENTION", "STORY"];

  return (
    <section id="works" className="py-10 sm:py-14 px-4 sm:px-8 max-w-5xl mx-auto w-full scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2.5 mb-5 sm:mb-7 pb-4 border-b border-white/[0.05]">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-accent">
            <Film className="w-3.5 h-3.5" />
            <span>02 / Motion Showcase</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink-primary">
            3D multi-device motion <span className="font-serif italic font-normal">gallery.</span>
          </h2>
        </div>

        <a
          href={profile.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-ink-secondary hover:text-ink-primary transition-colors"
        >
          <span>Instagram Archive ({profile.instagramHandle})</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
        </a>
      </div>

      <div className="space-y-5 sm:space-y-6">
        {/* =========================================================================
            ITEM 1: 3D Widescreen Studio Display Frame (16:9) — Kinetic Typography
            ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.99 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.12 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-white/[0.05] bg-white/[0.015] hover:bg-white/[0.025] transition-colors relative overflow-hidden group perspective-stage"
        >
          <div className="specular-top-light" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-5 space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs text-accent uppercase tracking-widest">
                  01 /
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/[0.03] text-ink-muted border border-white/[0.06]">
                  Widescreen 16:9
                </span>
              </div>

              <h3 className="text-lg sm:text-2xl font-bold text-ink-primary tracking-tight">
                Kinetic Typography and SaaS Interface Pacing
              </h3>

              <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed font-normal">
                Engineered product walkthroughs and dynamic text choreography in After Effects using weighted Bezier curves.
              </p>

              <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                {["After Effects", "UI Motion", "SaaS Walkthrough"].map((t, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-white/[0.03] text-ink-muted border border-white/[0.06]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="pt-1 sm:pt-2">
                <a
                  href={profile.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-accent hover:underline underline-offset-4"
                >
                  <span>Watch Sequence on Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right: Authentic 3D Widescreen Studio Display */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="w-full max-w-lg rounded-xl border border-white/[0.08] bg-[#0B0B0E] p-2 sm:p-2.5 shadow-2xl transition-transform duration-700 group-hover:rotate-x-2 group-hover:scale-[1.02]">
                {/* Hardware Bezel Header */}
                <div className="flex items-center justify-between px-2.5 sm:px-3 py-1 sm:py-1.5 border-b border-white/[0.06] text-[10px] font-mono text-ink-muted">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-red-500/80" />
                    <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-yellow-500/80" />
                    <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-ink-secondary font-medium truncate max-w-[150px] sm:max-w-none">Kinetic_Master_16x9.aep</span>
                  <span className="text-accent shrink-0">60 FPS</span>
                </div>

                {/* 16:9 Display Canvas (Mobile Optimized Spacing) */}
                <div
                  onClick={() => setKineticPlay((prev) => prev + 1)}
                  className="relative aspect-[16/9] min-h-[170px] w-full rounded-lg bg-zinc-950 flex flex-col items-center justify-between overflow-hidden cursor-pointer select-none p-3 sm:p-5"
                >
                  {/* Subtle Grid Canvas */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />

                  {/* Top indicator on canvas */}
                  <div className="w-full flex justify-end">
                    <span className="text-[9px] font-mono text-zinc-500 uppercase">Interactive Preview</span>
                  </div>

                  {/* Masked Kinetic Words */}
                  <div className="relative z-10 text-center my-auto py-1">
                    <motion.div
                      key={kineticPlay}
                      initial={{ y: 25, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight"
                    >
                      CHOREOGRAPHED{" "}
                      <span className="font-serif italic font-normal text-accent">
                        {KINETIC_PHRASES[kineticPlay % KINETIC_PHRASES.length]}
                      </span>
                    </motion.div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mt-1">
                      Click to Cycle Keyframe Curve
                    </p>
                  </div>

                  {/* Timeline Scrub Simulation */}
                  <div className="w-full flex items-center justify-between text-[9px] font-mono text-zinc-500 border-t border-white/5 pt-1 mt-auto">
                    <span className="text-accent">00:00:04:12</span>
                    <span className="hidden sm:inline">Interpolation: Bezier [0.16, 1, 0.3, 1]</span>
                    <span>1080p Master</span>
                  </div>
                </div>

                {/* Hardware Stand Neck */}
                <div className="w-14 sm:w-16 h-1.5 sm:h-2 mx-auto bg-zinc-800 rounded-b border-t-0 border border-zinc-700/50 mt-0.5" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================================================================
            ITEM 2 & 3: 3D Mobile Smartphone (9:16) + 3D Layered Comp Frame
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Card 2: 3D Mobile Smartphone Frame (9:16) */}
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.99 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.12 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-white/[0.05] bg-white/[0.015] hover:bg-white/[0.025] transition-colors relative overflow-hidden group flex flex-col justify-between"
          >
            <div className="specular-top-light" />

            <div className="space-y-2.5 mb-3 sm:mb-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-accent uppercase tracking-widest">
                  02 /
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/[0.03] text-ink-muted border border-white/[0.06] flex items-center gap-1">
                  <Smartphone className="w-3 h-3 text-accent" />
                  <span>Vertical 9:16</span>
                </span>
              </div>

              <h3 className="text-base sm:text-xl font-bold text-ink-primary tracking-tight">
                High-Retention Promotional Reels
              </h3>

              <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed font-normal">
                Paced 9:16 visual hooks structured to hold audience attention on Instagram Reels, Shorts and gaming channels.
              </p>
            </div>

            {/* Realistic 3D Smartphone Frame (9:16) */}
            <div className="flex justify-center my-3">
              <div className="w-38 sm:w-46 rounded-[22px] sm:rounded-[26px] border-[2.5px] border-zinc-700/80 bg-black p-1.5 sm:p-2 shadow-2xl relative transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-1">
                {/* Dynamic Camera Island */}
                <div className="w-12 sm:w-14 h-2.5 sm:h-3 bg-zinc-900 rounded-full mx-auto mb-1.5 flex items-center justify-end pr-1.5">
                  <span className="w-1 h-1 rounded-full bg-zinc-800" />
                </div>

                {/* 9:16 Screen Area */}
                <div className="relative aspect-[9/16] w-full rounded-[15px] sm:rounded-[18px] bg-zinc-950 overflow-hidden flex flex-col justify-between p-3 border border-white/5">
                  <div className="flex justify-between items-center text-[9px] font-mono text-zinc-400">
                    <span className="text-accent font-semibold">REEL 01</span>
                    <span>0:03 HOOK</span>
                  </div>

                  <div className="text-center space-y-1">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-accent">
                      FIRST 3 SECONDS
                    </div>
                    <div className="text-sm sm:text-base font-bold text-white tracking-tight leading-tight">
                      HOLD VISUAL <br />
                      <span className="font-serif italic text-accent">ATTENTION.</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-accent w-2/3 rounded-full animate-pulse" />
                    </div>
                    <div className="flex justify-between text-[8px] font-mono text-zinc-500">
                      <span>9:16 MASTER</span>
                      <span>@motion.bysaif</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3.5 pt-3 border-t border-white/[0.05] flex items-center justify-between">
              <span className="text-[11px] sm:text-xs font-mono text-ink-muted">After Effects · Vertical Hook</span>
              <a
                href={profile.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono uppercase tracking-wider text-accent inline-flex items-center gap-1 hover:underline"
              >
                <span>Reels ↗</span>
              </a>
            </div>
          </motion.div>

          {/* Card 3: 3D Layered Comp Studio Frame */}
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.99 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.12 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-white/[0.05] bg-white/[0.015] hover:bg-white/[0.025] transition-colors relative overflow-hidden group flex flex-col justify-between"
          >
            <div className="specular-top-light" />

            <div className="space-y-2.5 mb-3 sm:mb-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-accent uppercase tracking-widest">
                  03 /
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/[0.03] text-ink-muted border border-white/[0.06] flex items-center gap-1">
                  <Layers className="w-3 h-3 text-accent" />
                  <span>Layered Comp</span>
                </span>
              </div>

              <h3 className="text-base sm:text-xl font-bold text-ink-primary tracking-tight">
                Vector Staging and Clean Logo Reveals
              </h3>

              <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed font-normal">
                Multi-layer Illustrator and Photoshop artboards prepared for crisp vector animation, smooth mattes and Media Encoder exports.
              </p>
            </div>

            {/* 3D Stacked Layered Artboard Visual */}
            <div className="flex justify-center items-center my-3">
              <div className="relative w-full max-w-[240px] sm:max-w-[260px] h-38 sm:h-44 preserve-3d transition-transform duration-700 group-hover:rotate-y-3 group-hover:scale-105">
                {/* Layer 3 (Back) */}
                <div className="absolute inset-x-3 sm:inset-x-4 top-0 h-28 sm:h-32 rounded-xl border border-zinc-700/40 bg-zinc-900/60 p-2.5 sm:p-3 transform -translate-y-2 scale-95 shadow-md">
                  <div className="flex justify-between text-[8px] sm:text-[9px] font-mono text-zinc-500">
                    <span>LAYER 03: COLOR MATTE</span>
                    <span>PS COLOR</span>
                  </div>
                </div>

                {/* Layer 2 (Middle) */}
                <div className="absolute inset-x-1.5 sm:inset-x-2 top-2.5 sm:top-3 h-28 sm:h-32 rounded-xl border border-zinc-700/60 bg-zinc-900/80 p-2.5 sm:p-3 transform translate-y-0 scale-98 shadow-lg">
                  <div className="flex justify-between text-[8px] sm:text-[9px] font-mono text-zinc-400">
                    <span>LAYER 02: VECTOR PATHS</span>
                    <span>AI VECTORS</span>
                  </div>
                </div>

                {/* Layer 1 (Front Active) */}
                <div className="absolute inset-x-0 top-5 sm:top-6 h-28 sm:h-32 rounded-xl border border-accent/40 bg-zinc-950 p-3 transform translate-y-2 shadow-2xl flex flex-col justify-between">
                  <div className="flex justify-between text-[9px] sm:text-[10px] font-mono text-accent">
                    <span>LAYER 01: CAMERA TRANSITION</span>
                    <span>AE COMP</span>
                  </div>

                  <div className="text-center font-mono text-[11px] sm:text-xs text-white">
                    ZERO PIXELATION · 100% VECTOR
                  </div>

                  <div className="flex justify-between text-[8px] sm:text-[9px] font-mono text-zinc-500 border-t border-white/5 pt-1">
                    <span>ALPHA MATTE</span>
                    <span>GRAPH EDITOR EASING</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3.5 pt-3 border-t border-white/[0.05] flex items-center justify-between">
              <span className="text-[11px] sm:text-xs font-mono text-ink-muted">Illustrator · Photoshop Staging</span>
              <a
                href={profile.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono uppercase tracking-wider text-accent inline-flex items-center gap-1 hover:underline"
              >
                <span>Artwork ↗</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
