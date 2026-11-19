"use client";

import React, { useEffect, useState } from "react";

export function PrecisionCursor() {
  const [mounted, setMounted] = useState(false);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    // Only run on fine-pointer devices (desktop)
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    setMounted(true);

    const updateThemeState = () => {
      const isLight = document.documentElement.classList.contains("light");
      setTheme(isLight ? "light" : "dark");
    };

    updateThemeState();

    const observer = new MutationObserver(updateThemeState);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target && (target.closest("button") || target.closest("a") || target.closest("[role='button']"))) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (!mounted || !isVisible) return null;

  const isDark = theme === "dark";

  return (
    <div
      aria-hidden="true"
      className="precision-cursor pointer-events-none fixed top-0 left-0 z-50 transform-gpu transition-opacity duration-150"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
      }}
    >
      {/* Outer Halo / Soft Bloom */}
      <div
        className="absolute -top-3.5 -left-3.5 rounded-full transition-all duration-150 ease-out"
        style={{
          width: isHovering ? "28px" : "18px",
          height: isHovering ? "28px" : "18px",
          transform: isHovering ? "translate(-5px, -5px)" : "translate(0, 0)",
          backgroundColor: isDark ? "rgba(0, 229, 153, 0.18)" : "rgba(0, 0, 0, 0.08)",
          border: isDark ? "1px solid rgba(0, 229, 153, 0.35)" : "1px solid rgba(0, 0, 0, 0.15)",
        }}
      />

      {/* Center Core Dot */}
      <div
        className="absolute -top-1 -left-1 w-2 h-2 rounded-full transition-transform duration-100 ease-out"
        style={{
          backgroundColor: isDark ? "#FFFFFF" : "#000000",
          boxShadow: isDark ? "0 0 8px rgba(0, 229, 153, 0.6)" : "0 0 4px rgba(0, 0, 0, 0.3)",
        }}
      />
    </div>
  );
}
