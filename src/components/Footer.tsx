"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] py-8 px-4 bg-zinc-950/80">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-mint-400" />
          <span>© {currentYear} {portfolioData.profile.name}. All rights reserved.</span>
        </div>

        <div className="flex items-center gap-4 text-[11px] text-zinc-400">
          <span>Built with precision, performance and uncompromising quality.</span>
        </div>
      </div>
    </footer>
  );
}
