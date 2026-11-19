"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { MessageCircle, Mail, Instagram, ArrowUpRight, Copy, Check, Sparkles, ExternalLink } from "lucide-react";

export function FinalCTASection() {
  const { profile } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-5 sm:px-8 max-w-5xl mx-auto w-full">
      <div className="editorial-card rounded-3xl p-8 sm:p-14 border border-border-strong bg-surface-1 shadow-2xl relative overflow-hidden text-center flex flex-col items-center space-y-8">
        {/* Top 1px Specular Highlight */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent absolute top-0 left-0" />

        {/* Ambient Top Glow */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 rounded-full bg-accent/15 blur-3xl" />

        {/* Section Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border-subtle bg-surface-2 text-xs font-mono uppercase tracking-wider text-accent">
          <Sparkles className="w-3.5 h-3.5" />
          <span>15 / Closing Conversion Gateway</span>
        </div>

        {/* Grand Headline */}
        <div className="space-y-3 max-w-2xl">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-ink-primary leading-[1.1]">
            Ready to elevate your motion <span className="font-serif italic font-normal">identity?</span>
          </h2>
          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed font-normal">
            Available for selected freelance motion graphics, kinetic typography and short-form video projects. Fast turnaround, transparent scope and clean project handover.
          </p>
        </div>

        {/* Triple Action Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 w-full max-w-lg">
          {/* Primary CTA */}
          <a
            href={profile.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-cta-bg text-cta-text text-xs font-mono uppercase tracking-wider font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-accent" />
            <span>Chat on WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Secondary CTA: Copy Email */}
          <button
            type="button"
            onClick={handleCopyEmail}
            className="w-full sm:w-auto px-5 py-3.5 rounded-full border border-border-subtle bg-surface-2 hover:border-border-strong text-xs font-mono uppercase tracking-wider text-ink-primary flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-accent" />
                <span className="text-accent font-medium">Email Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-ink-muted" />
                <span>Copy Email</span>
              </>
            )}
          </button>

          {/* Instagram Portfolio */}
          <a
            href={profile.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-5 py-3.5 rounded-full border border-border-subtle bg-surface-2 hover:border-border-strong text-xs font-mono uppercase tracking-wider text-ink-secondary hover:text-ink-primary flex items-center justify-center gap-2 transition-colors"
          >
            <Instagram className="w-3.5 h-3.5 text-accent" />
            <span>{profile.instagramHandle}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-ink-muted" />
          </a>
        </div>

        {/* Universal Return Gateway to zenvq.com as Mandated by page-content-guide */}
        <div className="pt-6 border-t border-border-subtle w-full max-w-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-ink-muted">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>Uttara, Dhaka, Bangladesh</span>
          </div>

          <a
            href="https://zenvq.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-ink-secondary hover:text-ink-primary transition-colors notranslate"
            translate="no"
          >
            <span>Part of the ZenVQ Ecosystem</span>
            <ExternalLink className="w-3 h-3 text-accent" />
          </a>
        </div>
      </div>
    </section>
  );
}
