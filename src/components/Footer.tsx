"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle py-10 px-5 sm:px-8 mt-auto bg-canvas">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-ink-muted">
        <div>
          © {currentYear} {portfolioData.profile.fullName} — {portfolioData.profile.location}
        </div>

        <div className="flex items-center gap-2">
          <span>Part of</span>
          <a
            href="https://zenvq.com"
            target="_blank"
            rel="noreferrer"
            className="text-ink-secondary hover:text-ink-primary transition-colors underline underline-offset-4"
          >
            ZenVQ Network
          </a>
        </div>
      </div>
    </footer>
  );
}
