"use client";

import React, { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";
import { ArrowUpRight, Film } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 transition-all duration-300">
      <nav
        className={`w-full max-w-5xl transition-all duration-300 rounded-2xl px-5 py-3 flex items-center justify-between border ${
          isScrolled
            ? "bg-zinc-950/85 backdrop-blur-xl border-white/[0.12] shadow-2xl"
            : "bg-zinc-900/40 backdrop-blur-md border-white/[0.06]"
        }`}
      >
        {/* Brand identity */}
        <a href="#overview" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-mint-400 group-hover:border-mint-400/50 transition-colors">
            <Film className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-tight text-zinc-100 group-hover:text-white transition-colors">
              {portfolioData.profile.fullName}
            </span>
            <span className="text-[10px] font-mono text-zinc-400 tracking-wider uppercase">
              {portfolioData.profile.role}
            </span>
          </div>
        </a>

        {/* Navigation links */}
        <div className="hidden md:flex items-center gap-6">
          {portfolioData.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Action button */}
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-white/5 hover:bg-mint-400/10 text-zinc-200 hover:text-mint-400 border border-white/10 hover:border-mint-400/30 transition-all duration-200"
        >
          <span>Get in Touch</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </nav>
    </header>
  );
}
