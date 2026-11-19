"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { GitBranch, CheckCircle2 } from "lucide-react";

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState<string>("01");

  const PHASES = [
    {
      step: "01",
      title: "Concept & Narrative Blueprint",
      description: "Analyzing your script, pacing, audience goals and visual style direction before setting a single keyframe.",
      tools: "Visual Direction",
      deliverable: "Style Direction & Notes",
    },
    {
      step: "02",
      title: "Vector & Typography Prep",
      description: "Building crisp vector assets, typography hierarchy and layered artboards in Illustrator ready for After Effects.",
      tools: "Illustrator · Photoshop",
      deliverable: "Layered AI Comps",
    },
    {
      step: "03",
      title: "Keyframe Choreography",
      description: "Handcrafting motion curves in the Graph Editor with custom easing, camera transitions and kinetic text flow.",
      tools: "After Effects",
      deliverable: "Full Motion Sequence",
    },
    {
      step: "04",
      title: "Visual Polish & Audio Sync",
      description: "Synchronizing visual impacts precisely with voiceover narration and subtle tactile UI haptic sound effects.",
      tools: "Timing & Sync",
      deliverable: "First Cut Preview",
    },
    {
      step: "05",
      title: "Multi-Platform Delivery",
      description: "Rendering high-bitrate, color-accurate ProRes and lightweight web MP4 masters in 9:16 vertical and 16:9 widescreen.",
      tools: "Media Encoder",
      deliverable: "Final Masters + .AEP",
    },
  ];

  return (
    <section id="process" className="py-20 sm:py-28 px-5 sm:px-8 max-w-5xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-6 border-b border-border-subtle">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-accent">
            <GitBranch className="w-3.5 h-3.5" />
            <span>10 / Production Roadmap</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink-primary">
            5-phase motion execution <span className="font-serif italic font-normal">roadmap.</span>
          </h2>
        </div>

        <span className="text-xs font-mono uppercase tracking-wider text-ink-muted">
          From Storyboard to Multi-Platform Master
        </span>
      </div>

      {/* 5-Step Process Timeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {PHASES.map((item) => {
          const isActive = activeStep === item.step;
          return (
            <motion.div
              key={item.step}
              onClick={() => setActiveStep(item.step)}
              className={`editorial-card rounded-2xl p-5 cursor-pointer flex flex-col justify-between transition-all duration-300 relative overflow-hidden border ${
                isActive
                  ? "border-accent bg-surface-2 shadow-lg"
                  : "border-border-subtle bg-surface-1 hover:border-border-strong"
              }`}
            >
              {/* Top Specular Highlight */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent absolute top-0 left-0" />

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono text-sm tracking-wider font-semibold ${
                      isActive ? "text-accent" : "text-ink-muted"
                    }`}
                  >
                    /{item.step}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-ink-muted bg-surface-2 px-2 py-0.5 rounded border border-border-subtle">
                    {item.tools}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-ink-primary tracking-tight">
                  {item.title}
                </h3>

                <p className="text-xs text-ink-secondary leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-border-subtle flex items-center justify-between text-[10px] font-mono">
                <span className="text-ink-muted truncate max-w-[120px]">{item.deliverable}</span>
                <span
                  className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                    isActive ? "bg-accent animate-pulse" : "bg-border-strong"
                  }`}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
