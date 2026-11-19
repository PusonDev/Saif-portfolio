"use client";

import React, { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";
import { ZenVQLanguageDock } from "./ZenVQLanguageDock";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-3.5 sm:pt-4 transition-all duration-300">
      <nav
        className={`w-full max-w-5xl transition-all duration-300 rounded-full px-5 py-2.5 sm:py-3 flex items-center justify-between border ${
          isScrolled
            ? "bg-canvas/90 backdrop-blur-xl border-border-strong shadow-lg"
            : "bg-surface-1/60 backdrop-blur-md border-border-subtle"
        }`}
      >
        {/* Brand Wordmark */}
        <a href="#overview" className="flex items-baseline gap-2 group notranslate" translate="no">
          <span className="font-serif text-xl sm:text-2xl tracking-tight text-ink-primary">
            Saif<span className="text-accent">.</span>
          </span>
          <span className="hidden sm:inline-block font-mono text-[11px] text-ink-muted uppercase tracking-wider">
            {portfolioData.profile.role}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-7">
          {portfolioData.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-mono tracking-wider text-ink-secondary hover:text-ink-primary transition-colors duration-200 uppercase"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right Action Controls (Hard-Locked to LTR with data-zenvq-nav-anchor) */}
        <div
          dir="ltr"
          data-zenvq-nav-anchor="true"
          className="flex items-center gap-2 sm:gap-2.5"
        >
          {/* Unified Dual-Feature Control: Language Selector + Theme Toggle Combined */}
          <ZenVQLanguageDock variant="header" />

          {/* Contact Action */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider bg-cta-bg text-cta-text hover:opacity-90 transition-opacity duration-200 font-medium"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            aria-label="Toggle mobile navigation menu"
            className="md:hidden w-8 h-8 rounded-full border border-border-subtle bg-surface-1 flex items-center justify-center text-ink-primary"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Slide-down Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-20 left-4 right-4 z-40 rounded-2xl border border-border-strong bg-canvas/95 backdrop-blur-2xl p-6 shadow-2xl flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            {portfolioData.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-mono tracking-wider text-ink-secondary hover:text-ink-primary uppercase py-1 border-b border-border-subtle/50"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div
            dir="ltr"
            data-zenvq-nav-anchor="true"
            className="pt-2 border-t border-border-subtle/50 flex items-center justify-between"
          >
            <span className="text-xs font-mono text-ink-muted uppercase">Preferences</span>
            <ZenVQLanguageDock variant="mobile" />
          </div>

          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider bg-cta-bg text-cta-text font-medium"
          >
            Initiate Contact
          </a>
        </div>
      )}
    </header>
  );
}
