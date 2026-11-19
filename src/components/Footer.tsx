"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { MessageCircle, Mail, Instagram, ArrowUpRight, Copy, Check, ExternalLink } from "lucide-react";

export function Footer() {
  const { profile } = portfolioData;
  const currentYear = new Date().getFullYear();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <footer className="border-t border-border-subtle bg-canvas pt-16 pb-12 px-5 sm:px-8 mt-auto select-none">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Closing Conversion Card */}
        <div className="luxury-card rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-border-strong bg-surface-1 shadow-2xl relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-8 text-center sm:text-left">
          <div className="specular-top-light" />

          <div className="space-y-2 max-w-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-ink-primary tracking-tight">
              Ready to give your content kinetic <span className="font-serif italic font-normal text-accent">life?</span>
            </h3>
            <p className="text-xs sm:text-sm text-ink-secondary font-normal">
              Direct collaboration with MD Saifuddin. Fast turnaround, transparent scope and organized project files.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 w-full sm:w-auto shrink-0">
            <a
              href={profile.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-cta-bg text-cta-text text-xs font-mono uppercase tracking-wider font-semibold flex items-center gap-1.5 hover:opacity-90 transition-opacity shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5 text-accent" />
              <span>WhatsApp Direct</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="px-4 py-2.5 rounded-full border border-border-subtle bg-surface-2 hover:border-border-strong text-xs font-mono uppercase tracking-wider text-ink-primary flex items-center gap-1.5 transition-colors cursor-pointer"
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

            <a
              href={profile.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-full border border-border-subtle bg-surface-2 hover:border-border-strong text-xs font-mono uppercase tracking-wider text-ink-secondary hover:text-ink-primary flex items-center gap-1.5 transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-accent" />
              <span>Instagram ↗</span>
            </a>
          </div>
        </div>

        {/* Bottom Attribution & Universal Return Gateway to zenvq.com */}
        <div className="pt-6 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-ink-muted">
          <div>
            © {currentYear} {profile.fullName} — Uttara, Dhaka, Bangladesh
          </div>

          {/* Mandatory Universal Return Gateway Links */}
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a
              href="https://templates.zenvq.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-ink-primary transition-colors notranslate inline-flex items-center gap-1"
              translate="no"
            >
              <span>Templates Hub</span>
              <ExternalLink className="w-3 h-3 text-accent" />
            </a>

            <span className="text-border-strong">·</span>

            <a
              href="https://zenvq.com"
              target="_blank"
              rel="noreferrer"
              className="text-ink-secondary hover:text-ink-primary transition-colors notranslate inline-flex items-center gap-1 font-medium"
              translate="no"
            >
              <span>Part of ZenVQ Ecosystem</span>
              <ExternalLink className="w-3 h-3 text-accent" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
