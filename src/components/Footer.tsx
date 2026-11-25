"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { ExternalLink, Copy, Check, MessageCircle, Instagram } from "lucide-react";

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
    <footer className="border-t border-border-subtle bg-canvas py-6 px-4 sm:px-8 mt-auto select-none">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-ink-muted">
        {/* Left: Copyright & Location */}
        <div className="flex items-center gap-2">
          <span>© {currentYear} {profile.fullName}</span>
          <span className="text-ink-muted/40">·</span>
          <span>Uttara, Dhaka, Bangladesh</span>
        </div>

        {/* Center: Direct Quick Actions */}
        <div className="flex items-center gap-3">
          <a
            href={profile.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent transition-colors inline-flex items-center gap-1"
          >
            <MessageCircle className="w-3 h-3 text-accent" />
            <span>WhatsApp</span>
          </a>

          <span className="text-ink-muted/40">·</span>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="hover:text-accent transition-colors inline-flex items-center gap-1 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-accent" />
                <span className="text-accent font-medium">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3 text-ink-muted" />
                <span>Email</span>
              </>
            )}
          </button>

          <span className="text-ink-muted/40">·</span>

          <a
            href={profile.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent transition-colors inline-flex items-center gap-1"
          >
            <Instagram className="w-3 h-3 text-accent" />
            <span>Instagram</span>
          </a>
        </div>

        {/* Right: Mandatory Universal Return Gateway Links */}
        <div className="flex items-center gap-3 flex-wrap justify-center">
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

          <span className="text-ink-muted/40">·</span>

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
    </footer>
  );
}
