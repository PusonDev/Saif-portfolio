"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Quote, Star, Award } from "lucide-react";

export function TestimonialsSection() {
  const { testimonials } = portfolioData;

  return (
    <section id="reviews" className="py-20 sm:py-28 px-5 sm:px-8 max-w-5xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-6 border-b border-border-subtle">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-accent">
            <Quote className="w-3.5 h-3.5" />
            <span>13 / Verified Feedback</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink-primary">
            What directors and creators say about <span className="font-serif italic font-normal">collaborating.</span>
          </h2>
        </div>

        <span className="text-xs font-mono uppercase tracking-wider text-ink-muted">
          5.0 / 5.0 Rating · Verified Creative Outcomes
        </span>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="editorial-card rounded-2xl p-6 sm:p-8 border border-border-subtle bg-surface-1 flex flex-col justify-between relative overflow-hidden group shadow-sm"
          >
            {/* Top Specular Highlight */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent absolute top-0 left-0" />

            <div className="space-y-4">
              {/* Stars & Tag */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-accent">
                  {[...Array(5)].map((_, sIdx) => (
                    <Star key={sIdx} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-ink-muted bg-surface-2 px-2 py-0.5 rounded border border-border-subtle">
                  {t.project}
                </span>
              </div>

              {/* Quote */}
              <p className="text-sm text-ink-secondary leading-relaxed font-normal">
                "{t.quote}"
              </p>
            </div>

            {/* Author Attribution */}
            <div className="mt-8 pt-4 border-t border-border-subtle flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-surface-2 border border-border-subtle flex items-center justify-center font-mono text-xs font-bold text-accent">
                {t.author.slice(0, 2).toUpperCase()}
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-ink-primary">{t.author}</span>
                <span className="text-[11px] font-mono text-ink-muted">
                  {t.role} · {t.company}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
