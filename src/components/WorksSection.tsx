"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";
import { ArrowUpRight, Play, Layers, Sparkles, Monitor, Smartphone, Film } from "lucide-react";

export function WorksSection() {
  const { works, profile } = portfolioData;

  const [kineticPlay, setKineticPlay] = useState(0);

  const KINETIC_PHRASES = ["EASING", "HIERARCHY", "RETENTION", "STORY"];

  return (
    <section id="works" className="py-20 sm:py-28 px-5 sm:px-8 max-w-5xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 pb-6 border-b border-border-subtle">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-accent">
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

      <div className="space-y-12">
        {/* =========================================================================
            ITEM 1: 3D Widescreen Studio Display Frame (16:9) — Kinetic Typography
            ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 35, rotateX: 6, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.12 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="luxury-card rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-border-subtle bg-surface-1 shadow-2xl relative overflow-hidden group perspective-stage"
        >
          <div className="specular-top-light" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs text-accent uppercase tracking-widest">
                  01 /
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-surface-2 text-ink-muted border border-border-subtle">
                  Widescreen 16:9
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-ink-primary tracking-tight">
                Kinetic Typography & Brand Storytelling
              </h3>

              <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed font-normal">
                Expressive text choreography, weighted cubic-bezier easing curves and clean narrative hierarchy engineered in After Effects.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {["After Effects", "Kinetic Timing", "Graph Editor"].map((t, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-surface-2 text-ink-muted border border-border-subtle"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href={profile.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent hover:underline underline-offset-4"
                >
                  <span>Watch Sequence on Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right: Authentic 3D Widescreen Studio Display */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="w-full max-w-lg rounded-xl border border-border-strong bg-[#0B0B0E] p-2.5 shadow-2xl transition-transform duration-700 group-hover:rotate-x-2 group-hover:scale-[1.02]">
                {/* Hardware Bezel Header */}
                <div className="flex items-center justify-between px-3 py-1.5 border-b border-border-subtle text-[10px] font-mono text-ink-muted">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500/80" />
                    <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                    <span className="w-2 h-2 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-ink-secondary font-medium">Kinetic_Master_16x9.aep</span>
                  <span className="text-accent">60 FPS</span>
                </div>

                {/* 16:9 Display Canvas */}
                <div
                  onClick={() => setKineticPlay((prev) => prev + 1)}
                  className="relative aspect-[16/9] w-full rounded-lg bg-zinc-950 flex flex-col items-center justify-center overflow-hidden cursor-pointer select-none p-6"
                >
                  {/* Subtle Grid Canvas */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />

                  {/* Masked Kinetic Words */}
                  <div className="relative z-10 text-center space-y-1">
                    <motion.div
                      key={kineticPlay}
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                      className="text-2xl sm:text-4xl font-bold tracking-tight text-white"
                    >
                      CHOREOGRAPHED{" "}
                      <span className="font-serif italic font-normal text-accent">
                        {KINETIC_PHRASES[kineticPlay % KINETIC_PHRASES.length]}
                      </span>
                    </motion.div>
                    <p className="text-[11px] font-mono uppercase tracking-widest text-zinc-500">
                      Click to Cycle Kinetic Keyframe Curve
                    </p>
                  </div>

                  {/* Timeline Scrub Simulation */}
                  <div className="absolute bottom-2 left-4 right-4 flex items-center justify-between text-[9px] font-mono text-zinc-500 border-t border-white/5 pt-1">
                    <span className="text-accent">00:00:04:12</span>
                    <span>Interpolation: Bezier [0.16, 1, 0.3, 1]</span>
                    <span>1080p Master</span>
                  </div>
                </div>

                {/* Hardware Stand Neck */}
                <div className="w-16 h-2.5 mx-auto bg-zinc-800 rounded-b border-t-0 border border-zinc-700/50 mt-0.5" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================================================================
            ITEM 2 & 3: 3D Mobile Smartphone (9:16) + 3D Layered Comp Frame
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 2: 3D Mobile Smartphone Frame (9:16) */}
          <motion.div
            initial={{ opacity: 0, y: 35, rotateX: 6, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.12 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="luxury-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border-subtle bg-surface-1 shadow-2xl relative overflow-hidden group flex flex-col justify-between"
          >
            <div className="specular-top-light" />

            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-accent uppercase tracking-widest">
                  02 /
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-surface-2 text-ink-muted border border-border-subtle flex items-center gap-1">
                  <Smartphone className="w-3 h-3 text-accent" />
                  <span>Vertical 9:16</span>
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-ink-primary tracking-tight">
                High-Retention Social Reels
              </h3>

              <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed font-normal">
                Vertical motion graphics engineered to hold viewer attention during the critical first 3 seconds on Instagram Reels and YouTube Shorts.
              </p>
            </div>

            {/* Realistic 3D Smartphone Frame (9:16) */}
            <div className="flex justify-center my-4">
              <div className="w-48 sm:w-52 rounded-[28px] border-[3px] border-zinc-700/80 bg-black p-2 shadow-2xl relative transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-1">
                {/* Dynamic Camera Island */}
                <div className="w-16 h-3.5 bg-zinc-900 rounded-full mx-auto mb-2 flex items-center justify-end pr-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                </div>

                {/* 9:16 Screen Area */}
                <div className="relative aspect-[9/16] w-full rounded-[20px] bg-zinc-950 overflow-hidden flex flex-col justify-between p-3.5 border border-white/5">
                  <div className="flex justify-between items-center text-[9px] font-mono text-zinc-400">
                    <span className="text-accent font-semibold">REEL 01</span>
                    <span>0:03 HOOK</span>
                  </div>

                  <div className="text-center space-y-1">
                    <div className="text-xs font-mono uppercase tracking-widest text-accent">
                      FIRST 3 SECONDS
                    </div>
                    <div className="text-lg font-bold text-white tracking-tight leading-tight">
                      HOLD VISUAL <br />
                      <span className="font-serif italic text-accent">ATTENTION.</span>
                    </div>
                  </div>

                  <div className="space-y-1.5">
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

            <div className="mt-4 pt-4 border-t border-border-subtle flex items-center justify-between">
              <span className="text-xs font-mono text-ink-muted">After Effects · Illustrator</span>
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
            initial={{ opacity: 0, y: 35, rotateX: 6, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.12 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="luxury-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border-subtle bg-surface-1 shadow-2xl relative overflow-hidden group flex flex-col justify-between"
          >
            <div className="specular-top-light" />

            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-accent uppercase tracking-widest">
                  03 /
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-surface-2 text-ink-muted border border-border-subtle flex items-center gap-1">
                  <Layers className="w-3 h-3 text-accent" />
                  <span>Layered Comp</span>
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-ink-primary tracking-tight">
                Vector Staging & Transitions
              </h3>

              <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed font-normal">
                Custom layered vector artwork prepared from scratch in Illustrator and Photoshop, animated with clean camera moves and alpha reveals.
              </p>
            </div>

            {/* 3D Stacked Layered Artboard Visual */}
            <div className="flex justify-center items-center my-6">
              <div className="relative w-full max-w-[280px] h-48 preserve-3d transition-transform duration-700 group-hover:rotate-y-3 group-hover:scale-105">
                {/* Layer 3 (Back) */}
                <div className="absolute inset-x-4 top-0 h-36 rounded-xl border border-zinc-700/40 bg-zinc-900/60 p-3 transform -translate-y-2 scale-95 shadow-md">
                  <div className="flex justify-between text-[9px] font-mono text-zinc-500">
                    <span>LAYER 03: COLOR MATTE</span>
                    <span>PS COLOR</span>
                  </div>
                </div>

                {/* Layer 2 (Middle) */}
                <div className="absolute inset-x-2 top-4 h-36 rounded-xl border border-zinc-700/60 bg-zinc-900/80 p-3 transform translate-y-0 scale-98 shadow-lg">
                  <div className="flex justify-between text-[9px] font-mono text-zinc-400">
                    <span>LAYER 02: VECTOR PATHS</span>
                    <span>AI VECTORS</span>
                  </div>
                </div>

                {/* Layer 1 (Front Active) */}
                <div className="absolute inset-x-0 top-8 h-36 rounded-xl border border-accent/40 bg-zinc-950 p-4 transform translate-y-2 shadow-2xl flex flex-col justify-between">
                  <div className="flex justify-between text-[10px] font-mono text-accent">
                    <span>LAYER 01: CAMERA TRANSITION</span>
                    <span>AE COMP</span>
                  </div>

                  <div className="text-center font-mono text-xs text-white">
                    ZERO PIXELATION · 100% VECTOR
                  </div>

                  <div className="flex justify-between text-[9px] font-mono text-zinc-500 border-t border-white/5 pt-1">
                    <span>ALPHA MATTE</span>
                    <span>GRAPH EDITOR EASING</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-border-subtle flex items-center justify-between">
              <span className="text-xs font-mono text-ink-muted">Illustrator · Photoshop · AE</span>
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
