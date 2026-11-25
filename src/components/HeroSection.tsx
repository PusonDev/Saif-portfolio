"use client";

import React, { useState } from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import { ArrowUpRight, Copy, Check, MessageCircle, Download } from "lucide-react";

export function HeroSection() {
  const { profile } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const MONO_LOGOS = [
    {
      name: "Adobe After Effects",
      label: "After Effects",
      svg: (
        <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
          <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm6.2 12.8l-.8-2.6H6.6l-.8 2.6H4.2l3.4-9.6h1.8l3.4 9.6H10.2zm-1.3-4.2l-1.3-4.2-1.3 4.2h2.6zm9.9 1.4h-4.8c.1 1.1.7 1.6 1.8 1.6.7 0 1.3-.2 1.8-.6l.7 1.1c-.7.6-1.6.8-2.7.8-2.1 0-3.3-1.3-3.3-3.5 0-2.2 1.3-3.6 3.2-3.6 1.9 0 3.3 1.4 3.3 3.6v.6zm-1.6-1.2c0-.9-.6-1.5-1.6-1.5-1 0-1.6.6-1.7 1.5h3.3z" />
        </svg>
      ),
    },
    {
      name: "Adobe Illustrator",
      label: "Illustrator",
      svg: (
        <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
          <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm6.5 12.8l-.8-2.7H6.9l-.8 2.7H4.5l3.5-9.6h1.8l3.5 9.6h-1.8zm-1.3-4.2l-1.4-4.2-1.4 4.2h2.8zm5.7-5.4h1.7v9.6h-1.7V6.2zm.8-2.2c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z" />
        </svg>
      ),
    },
    {
      name: "Adobe Photoshop",
      label: "Photoshop",
      svg: (
        <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
          <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm5.2 6.5c1.4 0 2.4.7 2.4 2.1 0 1.5-1 2.2-2.5 2.2h-1.4v2.9H6V6.2h3.2zm-.3 3c.6 0 1-.3 1-.9 0-.6-.4-.9-1-.9h-1.5v1.8h1.5zm8.9 1.4c-.4-.4-1-.6-1.8-.8-.6-.2-.9-.3-.9-.6 0-.3.3-.5.8-.5.6 0 1.2.2 1.6.6l.8-1.2c-.6-.5-1.4-.7-2.3-.7-1.4 0-2.4.8-2.4 2 0 1.1.7 1.6 1.8 1.9.7.2 1 .3 1 .7 0 .4-.4.6-.9.6-.8 0-1.4-.3-1.9-.8l-.8 1.2c.7.6 1.6.9 2.6.9 1.6 0 2.6-.8 2.6-2.1 0-1.1-.6-1.7-1.8-1.9z" />
        </svg>
      ),
    },
    {
      name: "Adobe Media Encoder",
      label: "Media Encoder",
      svg: (
        <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
          <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm6.5 12.8V6.2H8.7l-2.2 6.5-2.2-6.5H2.5v9.6h1.8v-6.3l1.8 5.4h1.5l1.8-5.4v6.3h1.1zm8.5 0h-4.8c.1 1.1.7 1.6 1.8 1.6.7 0 1.3-.2 1.8-.6l.7 1.1c-.7.6-1.6.8-2.7.8-2.1 0-3.3-1.3-3.3-3.5 0-2.2 1.3-3.6 3.2-3.6 1.9 0 3.3 1.4 3.3 3.6v.6zm-1.6-1.2c0-.9-.6-1.5-1.6-1.5-1 0-1.6.6-1.7 1.5h3.3z" />
        </svg>
      ),
    },
    {
      name: "Instagram Reels",
      label: "Instagram Reels",
      svg: (
        <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "YouTube Shorts",
      label: "YouTube Shorts",
      svg: (
        <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-4 px-4 sm:px-8 max-w-5xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 items-center">
        {/* Left Column: Core Narrative (6 Cols on Desktop) */}
        <div className="lg:col-span-6 flex flex-col items-start gap-4 sm:gap-5">
          {/* Status Eyebrow */}
          <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded-full border border-border-subtle bg-surface-1 text-ink-secondary text-xs">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-ink-primary font-medium">
              {profile.availabilityText}
            </span>
            <span className="text-ink-muted/40 hidden sm:inline">·</span>
            <span className="text-ink-muted text-[10px] sm:text-[11px] hidden sm:inline">
              Uttara, Dhaka
            </span>
          </div>

          {/* Single Semantic <h1> Law */}
          <div className="space-y-1">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink-primary leading-[1.1]">
              MD Saifuddin — <br />
              Clean, high-retention{" "}
              <span className="font-serif italic font-normal text-ink-primary">
                motion.
              </span>
            </h1>
          </div>

          {/* Concise Non-Repetitive Pitch */}
          <p className="text-sm sm:text-base text-ink-secondary leading-relaxed max-w-xl font-normal">
            Crafting high-retention motion graphics, kinetic typography and digital product sequences in After Effects for SaaS products, gaming brands and content creators.
          </p>

          {/* High-Acceptance Action Row (Mobile Optimized) */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-2.5 pt-1 w-full">
            {/* Primary CTA */}
            <a
              href={profile.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider bg-cta-bg text-cta-text hover:opacity-90 transition-opacity font-medium shadow-xs cursor-pointer text-center"
            >
              <span>Watch Reels {profile.instagramHandle}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Quick Action Pills Row */}
            <div className="grid grid-cols-3 sm:flex sm:items-center gap-1.5 sm:gap-2 w-full sm:w-auto">
              <a
                href={profile.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-2 rounded-full text-[10px] sm:text-xs font-mono uppercase tracking-wider border border-border-subtle bg-surface-1 hover:bg-surface-hover text-ink-primary transition-colors cursor-pointer text-center"
              >
                <MessageCircle className="w-3 h-3 text-accent shrink-0" />
                <span className="truncate">WA</span>
              </a>

              <button
                onClick={handleCopyEmail}
                type="button"
                className="inline-flex items-center justify-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-2 rounded-full text-[10px] sm:text-xs font-mono uppercase tracking-wider border border-border-subtle bg-surface-1 hover:bg-surface-hover text-ink-primary transition-colors cursor-pointer text-center"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-accent shrink-0" />
                    <span className="text-accent font-medium truncate">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 text-ink-muted shrink-0" />
                    <span className="truncate">Email</span>
                  </>
                )}
              </button>

              <a
                href={profile.resumePdfUrl}
                download="MD-SAIFUDDIN-Resume.pdf"
                className="inline-flex items-center justify-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-2 rounded-full text-[10px] sm:text-xs font-mono uppercase tracking-wider border border-border-subtle bg-surface-1 hover:bg-surface-hover text-ink-secondary hover:text-ink-primary transition-colors text-center"
              >
                <Download className="w-3 h-3 text-accent shrink-0" />
                <span className="truncate">CV ↓</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Seamless Studio Portrait Frame (6 Cols on Desktop) */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end w-full">
          <div className="w-full max-w-[340px] sm:max-w-lg lg:max-w-none relative group overflow-hidden rounded-2xl border border-border-subtle bg-surface-1 shadow-lg shadow-black/[0.03] dark:shadow-none">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={profile.avatar}
                alt={`${profile.fullName} — Motion Designer`}
                width={1024}
                height={768}
                priority
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 560px"
              />
              {/* Seamless Canvas Vignette Fade */}
              <div className="portrait-vignette" />
              <div className="specular-top-light" />
            </div>

            {/* Editorial Caption Strip */}
            <div className="px-3.5 sm:px-4 py-2 border-t border-border-subtle bg-surface-2/80 flex items-center justify-between text-[10px] sm:text-[11px] font-mono tracking-wider uppercase text-ink-muted">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-ink-primary font-medium">{profile.fullName}</span>
              </div>
              <span className="text-ink-secondary">Motion Designer · Uttara, Dhaka</span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MOTION PRODUCTION SUITE — SEAMLESS OPEN STRIP (RIGHT-TO-LEFT)
          Zero side borders, strictly aligned to container margin, blended into bg
          ========================================================================= */}
      <div className="mt-8 sm:mt-11 select-none w-full">
        {/* Sleek Corner Label Above the Strip */}
        <div className="flex items-center justify-between px-1 mb-2.5 text-[10px] font-mono uppercase tracking-widest text-ink-muted">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-ink-primary font-medium">Motion Production Suite</span>
          </div>
          <span className="text-[9px] text-ink-muted hidden xs:inline">Right-to-Left · Hover to Pause</span>
        </div>

        {/* Seamless Open Strip: No side borders, smoothly blended into bg */}
        <div className="relative w-full overflow-hidden border-y border-border-subtle py-3 sm:py-3.5 bg-transparent group/marquee">
          {/* Left & Right Smooth Edge Fade Masks that blend into canvas on both sides */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 z-10 bg-gradient-to-r from-canvas via-canvas/90 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 z-10 bg-gradient-to-l from-canvas via-canvas/90 to-transparent" />

          {/* Continuous Infinite Marquee Track (Right to Left across 100% width) */}
          <div className="flex animate-marquee-rtl group-hover/marquee:[animation-play-state:paused] items-center gap-8 sm:gap-12 w-max">
            {/* Primary Group */}
            <div className="flex items-center gap-8 sm:gap-12 shrink-0">
              {MONO_LOGOS.map((item, idx) => (
                <div
                  key={`suite-a-${idx}`}
                  className="flex items-center gap-2 text-ink-secondary hover:text-ink-primary transition-colors cursor-pointer group/item shrink-0"
                >
                  <div className="text-ink-muted group-hover/item:text-accent group-hover/item:scale-110 transition-all duration-200">
                    {item.svg}
                  </div>
                  <span className="text-xs font-mono tracking-wider uppercase text-ink-secondary group-hover/item:text-ink-primary transition-colors whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Seamless Duplicate Group for Infinite Loop */}
            <div className="flex items-center gap-8 sm:gap-12 shrink-0" aria-hidden="true">
              {MONO_LOGOS.map((item, idx) => (
                <div
                  key={`suite-b-${idx}`}
                  className="flex items-center gap-2 text-ink-secondary hover:text-ink-primary transition-colors cursor-pointer group/item shrink-0"
                >
                  <div className="text-ink-muted group-hover/item:text-accent group-hover/item:scale-110 transition-all duration-200">
                    {item.svg}
                  </div>
                  <span className="text-xs font-mono tracking-wider uppercase text-ink-secondary group-hover/item:text-ink-primary transition-colors whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
