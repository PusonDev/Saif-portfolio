"use client";

import React from "react";

const MOTION_SUITE = [
  {
    name: "Adobe After Effects",
    label: "After Effects",
    svg: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm6.2 12.8l-.8-2.6H6.6l-.8 2.6H4.2l3.4-9.6h1.8l3.4 9.6H10.2zm-1.3-4.2l-1.3-4.2-1.3 4.2h2.6zm9.9 1.4h-4.8c.1 1.1.7 1.6 1.8 1.6.7 0 1.3-.2 1.8-.6l.7 1.1c-.7.6-1.6.8-2.7.8-2.1 0-3.3-1.3-3.3-3.5 0-2.2 1.3-3.6 3.2-3.6 1.9 0 3.3 1.4 3.3 3.6v.6zm-1.6-1.2c0-.9-.6-1.5-1.6-1.5-1 0-1.6.6-1.7 1.5h3.3z" />
      </svg>
    ),
  },
  {
    name: "Adobe Illustrator",
    label: "Illustrator",
    svg: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm6.5 12.8l-.8-2.7H6.9l-.8 2.7H4.5l3.5-9.6h1.8l3.5 9.6h-1.8zm-1.3-4.2l-1.4-4.2-1.4 4.2h2.8zm5.7-5.4h1.7v9.6h-1.7V6.2zm.8-2.2c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z" />
      </svg>
    ),
  },
  {
    name: "Adobe Photoshop",
    label: "Photoshop",
    svg: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm5.2 6.5c1.4 0 2.4.7 2.4 2.1 0 1.5-1 2.2-2.5 2.2h-1.4v2.9H6V6.2h3.2zm-.3 3c.6 0 1-.3 1-.9 0-.6-.4-.9-1-.9h-1.5v1.8h1.5zm8.9 1.4c-.4-.4-1-.6-1.8-.8-.6-.2-.9-.3-.9-.6 0-.3.3-.5.8-.5.6 0 1.2.2 1.6.6l.8-1.2c-.6-.5-1.4-.7-2.3-.7-1.4 0-2.4.8-2.4 2 0 1.1.7 1.6 1.8 1.9.7.2 1 .3 1 .7 0 .4-.4.6-.9.6-.8 0-1.4-.3-1.9-.8l-.8 1.2c.7.6 1.6.9 2.6.9 1.6 0 2.6-.8 2.6-2.1 0-1.1-.6-1.7-1.8-1.9z" />
      </svg>
    ),
  },
  {
    name: "Instagram Reels",
    label: "Instagram Reels",
    svg: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "YouTube Shorts",
    label: "YouTube Shorts",
    svg: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "Apple ProRes",
    label: "Apple ProRes",
    svg: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.4c.64-.78 1.08-1.87.96-2.96-.93.04-2.07.62-2.73 1.4-.58.67-1.09 1.76-.95 2.82 1.04.08 2.08-.48 2.72-1.26z" />
      </svg>
    ),
  },
];

export function MotionSuiteMarquee() {
  return (
    <section className="relative py-12 border-y border-border-subtle bg-surface-1/40 overflow-hidden select-none">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 mb-6 text-center">
        <p className="text-[11px] font-mono uppercase tracking-widest text-ink-muted">
          Motion Suite · Production Standards · Multi-Platform Delivery
        </p>
      </div>

      {/* Marquee Track Container with Gradient Edge Masks */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left Edge Mask */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-36 z-10 bg-gradient-to-r from-canvas to-transparent" />

        {/* Right Edge Mask */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-36 z-10 bg-gradient-to-l from-canvas to-transparent" />

        {/* Infinite Moving Row */}
        <div className="flex shrink-0 animate-marquee items-center gap-10 sm:gap-16 pr-10 sm:pr-16">
          {[...MOTION_SUITE, ...MOTION_SUITE].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 text-ink-secondary hover:text-ink-primary transition-colors duration-200 cursor-default group"
            >
              <div className="w-8 h-8 rounded-lg bg-surface-2 flex items-center justify-center text-ink-muted group-hover:text-accent group-hover:scale-105 transition-all duration-200 border border-border-subtle">
                {item.svg}
              </div>
              <span className="text-xs font-mono tracking-wider uppercase text-ink-muted group-hover:text-ink-primary transition-colors">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Duplicate Track for Smooth Infinite Flow */}
        <div
          aria-hidden="true"
          className="flex shrink-0 animate-marquee items-center gap-10 sm:gap-16 pr-10 sm:pr-16"
        >
          {[...MOTION_SUITE, ...MOTION_SUITE].map((item, idx) => (
            <div
              key={`dup-${idx}`}
              className="flex items-center gap-3 text-ink-secondary hover:text-ink-primary transition-colors duration-200 cursor-default group"
            >
              <div className="w-8 h-8 rounded-lg bg-surface-2 flex items-center justify-center text-ink-muted group-hover:text-accent group-hover:scale-105 transition-all duration-200 border border-border-subtle">
                {item.svg}
              </div>
              <span className="text-xs font-mono tracking-wider uppercase text-ink-muted group-hover:text-ink-primary transition-colors">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
