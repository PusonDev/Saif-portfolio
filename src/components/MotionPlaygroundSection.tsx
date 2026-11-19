"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Activity, RotateCcw, Cpu } from "lucide-react";

export function MotionPlaygroundSection() {
  const [easingType, setEasingType] = useState<"cinema" | "snappy" | "smooth">("cinema");
  const [playTrigger, setPlayTrigger] = useState(0);
  const [activePhrase, setActivePhrase] = useState(0);

  const PHRASES = [
    { main: "RHYTHM IN", accent: "motion." },
    { main: "TIMING CREATES", accent: "meaning." },
    { main: "EASING SHAPES", accent: "retention." },
  ];

  const easingConfigs = {
    cinema: {
      name: "Cinema Weighted Ease",
      curve: "[0.16, 1, 0.3, 1]",
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
      desc: "Filmic, weighted entry that settles smoothly without mechanical stiffness.",
    },
    snappy: {
      name: "Snappy UI Spring",
      curve: "stiffness: 240, damping: 16",
      transition: { type: "spring", stiffness: 240, damping: 16 },
      desc: "Energetic bounce designed for high-impact social hooks and mobile feeds.",
    },
    smooth: {
      name: "Smooth Editorial Flow",
      curve: "[0.25, 0.1, 0.25, 1]",
      transition: { duration: 0.75, ease: [0.25, 0.1, 0.25, 1] },
      desc: "Calm, continuous velocity curve ideal for brand sequences and titles.",
    },
  };

  const handleReplay = () => {
    setPlayTrigger((prev) => prev + 1);
  };

  return (
    <section id="playground" className="py-20 sm:py-28 px-5 sm:px-8 max-w-5xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-6 border-b border-border-subtle">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-accent">
            <Activity className="w-3.5 h-3.5" />
            <span>03 / Easing Lab</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink-primary">
            Interactive Graph Editor <span className="font-serif italic font-normal">easing.</span>
          </h2>
        </div>

        <span className="text-xs font-mono uppercase tracking-wider text-ink-muted">
          GPU-Accelerated Kinetic Curves · 60 FPS
        </span>
      </div>

      {/* Playground Stage Card */}
      <div className="luxury-card rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-border-subtle bg-surface-1 shadow-2xl relative overflow-hidden">
        <div className="specular-top-light" />

        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-border-subtle">
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-mono uppercase tracking-wider text-ink-muted">
              Select Curve:
            </span>
            <div className="flex rounded-xl bg-surface-2 p-1 border border-border-subtle">
              {(["cinema", "snappy", "smooth"] as const).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => {
                    setEasingType(type);
                    setPlayTrigger((prev) => prev + 1);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                    easingType === type
                      ? "bg-accent text-zinc-950 font-semibold shadow-xs"
                      : "text-ink-muted hover:text-ink-primary"
                  }`}
                >
                  {type === "cinema" ? "Cinema Ease" : type === "snappy" ? "Snappy Spring" : "Smooth Editorial"}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                setActivePhrase((prev) => (prev + 1) % PHRASES.length);
                setPlayTrigger((prev) => prev + 1);
              }}
              className="px-3.5 py-1.5 rounded-lg border border-border-subtle bg-surface-2 text-xs font-mono uppercase tracking-wider text-ink-secondary hover:text-ink-primary transition-colors cursor-pointer"
            >
              Next Phrase
            </button>

            <button
              type="button"
              onClick={handleReplay}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cta-bg text-cta-text text-xs font-mono uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer font-medium shadow-xs"
            >
              <RotateCcw className="w-3.5 h-3.5 text-accent" />
              <span>Trigger Curve</span>
            </button>
          </div>
        </div>

        {/* Visual Animation Stage */}
        <div className="relative min-h-[220px] sm:min-h-[260px] rounded-xl bg-surface-2/60 border border-border-subtle flex flex-col items-center justify-center p-8 overflow-hidden select-none">
          {/* Subtle Grid Stage */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border-subtle)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-subtle)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 pointer-events-none" />

          {/* Masked Animated Kinetic Text */}
          <div className="overflow-hidden relative z-10 text-center">
            <motion.div
              key={`${playTrigger}-${easingType}-${activePhrase}`}
              initial={{ y: 75, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={easingConfigs[easingType].transition}
              className="space-y-1"
            >
              <div className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink-primary">
                {PHRASES[activePhrase].main}{" "}
                <span className="font-serif italic font-normal text-accent">
                  {PHRASES[activePhrase].accent}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Timeline Playhead Simulation */}
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-ink-muted">
            <span className="text-accent">00:00:12:08</span>
            <span>Graph Editor: {easingConfigs[easingType].curve}</span>
            <span>60.00 FPS</span>
          </div>
        </div>

        {/* Easing Explainer Footer */}
        <div className="mt-6 pt-4 border-t border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2 text-ink-secondary">
            <Cpu className="w-3.5 h-3.5 text-accent" />
            <span className="font-medium text-ink-primary">{easingConfigs[easingType].name}:</span>
            <span className="text-ink-muted">{easingConfigs[easingType].desc}</span>
          </div>

          <div className="text-[11px] text-accent uppercase tracking-wider">
            Curve: {easingConfigs[easingType].curve}
          </div>
        </div>
      </div>
    </section>
  );
}
