"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("saif-portfolio-theme") as "dark" | "light" | null;
    if (stored) {
      setTheme(stored);
      document.documentElement.classList.remove("dark", "light");
      document.documentElement.classList.add(stored);
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(nextTheme);
    localStorage.setItem("saif-portfolio-theme", nextTheme);
  };

  if (!mounted) {
    return (
      <div className="w-8 h-8 rounded-full border border-border-subtle bg-surface-1 flex items-center justify-center opacity-0" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label="Toggle Cinema Dark / Swiss Light theme"
      className="w-8 h-8 rounded-full border border-border-subtle bg-surface-1 hover:border-border-strong text-ink-secondary hover:text-ink-primary flex items-center justify-center transition-colors duration-200"
    >
      {theme === "dark" ? (
        <Sun className="w-3.5 h-3.5" />
      ) : (
        <Moon className="w-3.5 h-3.5" />
      )}
    </button>
  );
}
