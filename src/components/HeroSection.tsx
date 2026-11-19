"use client";

import React, { useState } from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";
import { ArrowUpRight, Copy, Check, MessageCircle } from "lucide-react";

export function HeroSection() {
  const { profile } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="overview" className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 px-5 sm:px-8 max-w-5xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column (7 Cols on Desktop) */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          {/* Availability Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full border border-border-subtle bg-surface-1 text-ink-secondary text-xs">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-[11px] uppercase tracking-wider text-ink-primary">
              {profile.availabilityText}
            </span>
            <span className="text-ink-muted hidden sm:inline">•</span>
            <span className="text-ink-muted text-[11px] hidden sm:inline">
              {profile.location}
            </span>
          </div>

          {/* Sculpted Kinetic Headline (h1) */}
          <div className="space-y-1">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink-primary leading-[1.08]"
            >
              MD Saifuddin — <br />
              Crafting clean, modern{" "}
              <span className="font-serif italic font-normal text-ink-primary">
                motion.
              </span>
            </motion.h1>
          </div>

          {/* Single Concise Bio Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-ink-secondary leading-relaxed max-w-xl font-normal"
          >
            {profile.bio}
          </motion.p>

          {/* Clean Action Row */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-2.5 pt-2 w-full"
          >
            {/* Primary CTA */}
            <a
              href={profile.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider bg-cta-bg text-cta-text hover:opacity-90 transition-opacity font-medium shadow-sm"
            >
              <span>Watch Reels {profile.instagramHandle}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Secondary CTA: Copy Email */}
            <button
              onClick={handleCopyEmail}
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider border border-border-subtle bg-surface-1 hover:border-border-strong text-ink-primary transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-accent" />
                  <span className="text-accent font-medium">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-ink-muted" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            {/* WhatsApp Link */}
            <a
              href={profile.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider border border-border-subtle bg-surface-1 hover:border-border-strong text-ink-secondary hover:text-ink-primary transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-accent" />
              <span>WhatsApp</span>
              <ArrowUpRight className="w-3 h-3 text-ink-muted" />
            </a>
          </motion.div>
        </div>

        {/* Right Column: Tailored Editorial Portrait (5 Cols on Desktop) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="w-full max-w-xs sm:max-w-sm editorial-portrait-frame rounded-2xl shadow-xl">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface-2">
              <Image
                src={profile.avatar}
                alt={profile.fullName}
                fill
                priority
                className="object-cover object-top grayscale-[15%] contrast-[105%]"
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 360px"
              />
            </div>

            {/* Editorial Caption Strip */}
            <div className="px-4 py-3 border-t border-border-subtle bg-surface-1 flex items-center justify-between text-[11px] font-mono tracking-wider uppercase text-ink-muted">
              <span className="text-ink-primary font-medium">{profile.fullName}</span>
              <span>{profile.role}</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Quiet Metadata Divider Strip */}
      <div className="mt-16 sm:mt-24 pt-8 border-t border-border-subtle grid grid-cols-2 sm:grid-cols-4 gap-6">
        {profile.metadataItems.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-ink-muted">
              {item.label}
            </span>
            <span className="text-xs sm:text-sm font-medium text-ink-primary">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
