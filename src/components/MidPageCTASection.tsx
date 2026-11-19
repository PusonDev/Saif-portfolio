"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { MessageCircle, Mail, ArrowUpRight, Copy, Check, Sparkles } from "lucide-react";

export function MidPageCTASection() {
  const { profile } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="py-16 sm:py-20 px-5 sm:px-8 max-w-5xl mx-auto w-full">
      <div className="editorial-card rounded-2xl p-8 sm:p-12 border border-border-strong bg-surface-1 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Specular Top Glow */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/25 to-transparent absolute top-0 left-0" />

        {/* Ambient Corner Accent Glow */}
        <div className="pointer-events-none absolute -bottom-16 -right-16 w-56 h-56 rounded-full bg-accent/10 blur-3xl" />

        <div className="space-y-3 max-w-xl text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-accent">
            <Sparkles className="w-3.5 h-3.5" />
            <span>09 / Conversion Bridge</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink-primary">
            Ready to give your content kinetic <span className="font-serif italic font-normal">life?</span>
          </h3>
          <p className="text-sm sm:text-base text-ink-secondary font-normal">
            Direct collaboration with MD Saifuddin. Transforming rough scripts and raw vectors into high-retention motion sequences.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
          <a
            href={profile.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-cta-bg text-cta-text text-xs font-mono uppercase tracking-wider font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-accent" />
            <span>WhatsApp Quick Chat</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="w-full sm:w-auto px-5 py-3 rounded-full border border-border-subtle bg-surface-2 hover:border-border-strong text-xs font-mono uppercase tracking-wider text-ink-primary flex items-center justify-center gap-2 transition-colors cursor-pointer"
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
        </div>
      </div>
    </section>
  );
}
