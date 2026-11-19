"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";
import { Compass, GraduationCap, Award, Sparkles, CheckCircle2 } from "lucide-react";

export function AboutCraftSection() {
  const { profile, education, capabilities } = portfolioData;

  const metrics = [
    { label: "Keyframe Discipline", value: "100%", sub: "Handcrafted Easing" },
    { label: "First Cut Review", value: "< 24h", sub: "Rapid Turnaround" },
    { label: "Master Formats", value: "9:16 + 16:9", sub: "Reels & Widescreen" },
    { label: "Primary Suite", value: "AE · AI · PS", sub: "Adobe Production" },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 px-5 sm:px-8 max-w-5xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-6 border-b border-border-subtle">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-accent">
            <Compass className="w-3.5 h-3.5" />
            <span>03 / Background & Philosophy</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink-primary">
            Dedicated motion craft built on visual <span className="font-serif italic font-normal">restraint.</span>
          </h2>
        </div>

        <span className="text-xs font-mono uppercase tracking-wider text-ink-muted">
          Based in Uttara, Dhaka · Active Worldwide
        </span>
      </div>

      {/* 4-Metric Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {metrics.map((m, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="editorial-card rounded-xl p-5 flex flex-col justify-between border border-border-subtle bg-surface-1"
          >
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-3" />
            <span className="text-[11px] font-mono uppercase tracking-wider text-ink-muted">
              {m.label}
            </span>
            <div className="my-2">
              <span className="font-sans font-bold text-2xl sm:text-3xl tracking-tight text-ink-primary">
                {m.value}
              </span>
            </div>
            <span className="text-[11px] font-mono text-accent">
              {m.sub}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Two-Column Narrative & Verified Credentials */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Creative Philosophy */}
        <div className="lg:col-span-7 space-y-6">
          <div className="editorial-card rounded-2xl p-6 sm:p-8 border border-border-subtle bg-surface-1 space-y-4">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <h3 className="text-lg sm:text-xl font-bold text-ink-primary tracking-tight">
              Focusing on narrative timing over decorative noise.
            </h3>
            <p className="text-sm sm:text-base text-ink-secondary leading-relaxed font-normal">
              Great motion design is not about piling on flashy presets. It is about understanding the human eye, editorial pacing and typography hierarchy. Every keyframe curve I draw in After Effects serves the message—guiding attention smoothly across the screen without visual clutter.
            </p>
            <p className="text-sm sm:text-base text-ink-secondary leading-relaxed font-normal">
              Operating under my creative handle <span className="text-accent font-medium">{profile.instagramHandle}</span>, I produce high-retention short-form motion and kinetic typography assets for modern digital brands, creators and tech founders.
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              {capabilities.competencies.map((comp, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-surface-2 border border-border-subtle text-ink-primary"
                >
                  <CheckCircle2 className="w-3 h-3 text-accent" />
                  <span>{comp}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Verified Education & Language Proficiency */}
        <div className="lg:col-span-5 space-y-4">
          <div className="editorial-card rounded-2xl p-6 border border-border-subtle bg-surface-1 space-y-4">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-ink-primary">
              <GraduationCap className="w-4 h-4 text-accent" />
              <span>Verified Education</span>
            </div>

            <div className="space-y-4">
              {education.map((item, idx) => (
                <div key={idx} className="pb-3 border-b border-border-subtle last:border-0 last:pb-0">
                  <div className="flex items-center justify-between text-xs font-mono mb-1">
                    <span className="font-medium text-ink-primary">{item.institution}</span>
                    <span className="text-accent">{item.year}</span>
                  </div>
                  <div className="text-xs font-semibold text-ink-secondary mb-1">
                    {item.title}
                  </div>
                  <p className="text-[12px] text-ink-muted leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages & Communication */}
          <div className="editorial-card rounded-xl p-4 border border-border-subtle bg-surface-1 flex items-center justify-between text-xs font-mono">
            <span className="text-ink-muted uppercase tracking-wider">Communication:</span>
            <span className="text-ink-primary font-medium">Bangla (Native) · English (Working Proficiency)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
