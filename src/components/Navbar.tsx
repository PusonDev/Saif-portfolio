"use client";

import React, { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";
import { ZenVQLanguageDock } from "./ZenVQLanguageDock";
import { Menu, X, ArrowUpRight, Download, ExternalLink } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.replace(/^#/, "");
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-3 sm:px-6 pt-2.5 sm:pt-3 transition-all duration-300">
      <nav
        className={`w-full max-w-5xl h-12 sm:h-14 transition-all duration-300 rounded-full px-3.5 sm:px-6 flex items-center justify-between border ${
          isScrolled
            ? "bg-canvas/90 backdrop-blur-xl border-border-strong shadow-lg"
            : "bg-surface-1/90 backdrop-blur-md border-border-subtle"
        }`}
      >
        {/* Brand Wordmark + Universal Return Gateway */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              if (window.location.hash) {
                history.replaceState(null, "", window.location.pathname);
              }
            }}
            className="flex items-baseline gap-1.5 group notranslate cursor-pointer"
            translate="no"
          >
            <span className="font-serif text-lg sm:text-2xl tracking-tight text-ink-primary">
              Saif<span className="text-accent">.</span>
            </span>
            <span className="hidden sm:inline-block font-mono text-[11px] text-ink-muted uppercase tracking-wider">
              {portfolioData.profile.role}
            </span>
          </a>

          {/* Quiet Universal Return Gateway to zenvq.com */}
          <a
            href="https://zenvq.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Return to ZenVQ parent network"
            className="hidden md:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider text-ink-muted hover:text-ink-primary bg-surface-2 border border-border-subtle transition-colors notranslate"
            translate="no"
          >
            <span>← zenvq.com</span>
          </a>
        </div>

        {/* Center Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-5 lg:gap-7">
          {portfolioData.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-xs font-mono tracking-wider text-ink-secondary hover:text-ink-primary transition-colors duration-200 uppercase cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right Action Controls */}
        <div
          dir="ltr"
          data-zenvq-nav-anchor="true"
          className="flex items-center gap-1.5 sm:gap-2.5"
        >
          {/* Unified Language & Theme Dock */}
          <ZenVQLanguageDock variant="header" />

          {/* Resume PDF Download */}
          <a
            href={portfolioData.profile.resumePdfUrl}
            download="MD-SAIFUDDIN-Resume.pdf"
            className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider border border-border-subtle bg-surface-2 hover:border-border-strong text-ink-secondary hover:text-ink-primary transition-colors font-medium"
          >
            <Download className="w-3 h-3 text-accent" />
            <span>CV</span>
          </a>

          {/* Start Project CTA */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="hidden sm:inline-flex items-center gap-1 px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider bg-cta-bg text-cta-text hover:opacity-90 transition-opacity duration-200 font-medium shadow-sm shrink-0 cursor-pointer"
          >
            <span>Start Project</span>
            <ArrowUpRight className="w-3 h-3 shrink-0" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            aria-label="Toggle mobile navigation menu"
            className="md:hidden w-8 h-8 rounded-full border border-border-subtle bg-surface-2 flex items-center justify-center text-ink-primary cursor-pointer shrink-0"
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
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-mono tracking-wider text-ink-secondary hover:text-ink-primary uppercase py-1 border-b border-border-subtle/50 cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="py-2.5 px-4 rounded-xl bg-cta-bg text-cta-text text-xs font-mono uppercase tracking-wider font-medium flex items-center justify-center gap-1.5 shadow-sm"
            >
              <span>Start Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
            </a>

            <a
              href={portfolioData.profile.resumePdfUrl}
              download="MD-SAIFUDDIN-Resume.pdf"
              className="py-2.5 px-4 rounded-xl border border-border-subtle bg-surface-2 text-xs font-mono uppercase tracking-wider text-ink-primary flex items-center justify-center gap-2"
            >
              <Download className="w-3.5 h-3.5 text-accent" />
              <span>Download Resume PDF</span>
            </a>

            <a
              href="https://zenvq.com"
              target="_blank"
              rel="noreferrer"
              className="py-2 text-xs font-mono uppercase tracking-wider text-ink-muted text-center notranslate"
              translate="no"
            >
              Part of ZenVQ Ecosystem ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
