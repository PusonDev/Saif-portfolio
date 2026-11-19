"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { motion, AnimatePresence } from "framer-motion";
import { Sliders, ChevronDown } from "lucide-react";

export function ProcessSection() {
  const { process } = portfolioData;
  const [activeStep, setActiveStep] = useState<string>("01");

  return (
    <section id="process" className="py-20 sm:py-28 px-5 sm:px-8 max-w-5xl mx-auto w-full">
      {/* Section Header */}
      <div className="mb-12 pb-6 border-b border-border-subtle">
        <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-accent mb-1.5">
          <Sliders className="w-3.5 h-3.5" />
          <span>Workflow Methodology</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink-primary">
          End-to-end motion production pipeline.
        </h2>
        <p className="text-sm text-ink-secondary mt-2 max-w-xl">
          From the first storyboard sketch to keyframe curves and final platform delivery.
        </p>
      </div>

      {/* 4-Step Interactive Process Strip / Accordion */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {process.map((item) => {
          const isActive = activeStep === item.step;
          return (
            <motion.div
              key={item.step}
              onClick={() => setActiveStep(item.step)}
              className={`editorial-card rounded-2xl p-6 cursor-pointer flex flex-col justify-between transition-all duration-300 ${
                isActive
                  ? "border-accent/80 bg-surface-2 ring-1 ring-accent/30 shadow-md"
                  : "hover:border-border-strong opacity-85 hover:opacity-100"
              }`}
            >
              <div className="space-y-4">
                {/* Step index & tool badge */}
                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono text-sm tracking-wider font-semibold ${
                      isActive ? "text-accent" : "text-ink-muted"
                    }`}
                  >
                    {item.step}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-ink-muted bg-surface-1 px-2 py-0.5 rounded border border-border-subtle">
                    {item.tools}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-ink-primary tracking-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-ink-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Status Indicator */}
              <div className="pt-6 flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest text-ink-muted">
                  {isActive ? "Active Stage" : "Phase " + item.step}
                </span>
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isActive ? "bg-accent" : "bg-border-strong"
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
