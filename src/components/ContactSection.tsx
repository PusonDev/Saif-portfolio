"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";
import { Mail, Copy, Check, MessageCircle, ArrowUpRight, Instagram, Phone } from "lucide-react";

export function ContactSection() {
  const { profile } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-5 sm:px-8 max-w-5xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="editorial-card rounded-3xl p-8 sm:p-14 text-center flex flex-col items-center gap-6 shadow-xl relative overflow-hidden"
      >
        {/* Subtle accent corner accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-subtle bg-surface-2 text-ink-secondary text-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="font-mono text-[11px] uppercase tracking-wider">
            Start a Conversation
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink-primary max-w-2xl leading-[1.12]">
          Have a concept ready to{" "}
          <span className="font-serif italic font-normal text-ink-primary">
            move?
          </span>
        </h2>

        <p className="text-sm sm:text-base text-ink-secondary max-w-lg leading-relaxed font-normal">
          Open for freelance motion graphics, kinetic typography and short-form video commissions.
        </p>

        {/* 3 Working Contact Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-3 w-full">
          {/* Email Mailto & Instant Copy Button */}
          <div className="inline-flex items-center rounded-full border border-border-subtle bg-surface-2 p-1">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono text-ink-primary hover:text-accent transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-accent" />
              <span>{profile.email}</span>
            </a>

            <button
              onClick={handleCopyEmail}
              type="button"
              aria-label="Copy email address"
              className="px-3 py-1.5 rounded-full text-xs font-mono bg-surface-1 hover:bg-border-subtle text-ink-primary transition-colors flex items-center gap-1.5"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-accent" />
                  <span className="text-accent text-[11px]">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 text-ink-muted" />
                  <span className="text-[11px]">Copy</span>
                </>
              )}
            </button>
          </div>

          {/* WhatsApp Action */}
          <a
            href={profile.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider bg-cta-bg text-cta-text hover:opacity-90 transition-opacity font-medium"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp: {profile.phone}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Instagram Action */}
          <a
            href={profile.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider border border-border-subtle bg-surface-2 hover:border-border-strong text-ink-primary transition-colors"
          >
            <Instagram className="w-3.5 h-3.5 text-accent" />
            <span>Instagram {profile.instagramHandle}</span>
            <ArrowUpRight className="w-3 h-3 text-ink-muted" />
          </a>

          {/* Tel Link */}
          <a
            href={profile.phoneTel}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider border border-border-subtle bg-surface-2 hover:border-border-strong text-ink-secondary hover:text-ink-primary transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-accent" />
            <span>Call: {profile.phone}</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
