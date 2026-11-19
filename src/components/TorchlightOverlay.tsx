"use client";

import React, { useEffect, useRef } from "react";

export function TorchlightOverlay({
  color = "rgba(0, 229, 153, 0.05)",
  secondary = "rgba(0, 210, 180, 0.015)",
  radius = 180,
}: {
  color?: string;
  secondary?: string;
  radius?: number;
}) {
  const torchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = torchRef.current;
    if (!el) return;

    let mouseX = -2000;
    let mouseY = -2000;
    let currentX = -2000;
    let currentY = -2000;
    let isMoving = false;

    const updatePosition = () => {
      currentX += (mouseX - currentX) * 0.28;
      currentY += (mouseY - currentY) * 0.28;

      el.style.setProperty("--torch-x", `${currentX.toFixed(1)}px`);
      el.style.setProperty("--torch-y", `${currentY.toFixed(1)}px`);

      if (Math.abs(mouseX - currentX) > 0.5 || Math.abs(mouseY - currentY) > 0.5) {
        requestAnimationFrame(updatePosition);
      } else {
        isMoving = false;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      el.style.opacity = "1";
      if (!isMoving) {
        isMoving = true;
        requestAnimationFrame(updatePosition);
      }
    };

    const handleMouseLeave = () => {
      el.style.opacity = "0";
    };

    const handleMouseEnter = () => {
      el.style.opacity = "1";
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <div
      ref={torchRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-20 transition-opacity duration-300 hidden md:block"
      style={{
        opacity: 0,
        background: `radial-gradient(${radius}px circle at var(--torch-x, -2000px) var(--torch-y, -2000px), ${color} 0%, ${secondary} 40%, transparent 70%)`,
      }}
    />
  );
}
