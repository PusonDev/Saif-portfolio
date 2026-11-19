"use client";

import React, { useState, useEffect, useRef } from "react";
import { Sun, Moon, Globe, ChevronDown, Check } from "lucide-react";

export interface LanguageItem {
  code: string;
  name: string;
  native: string;
  region: string;
  dir: "ltr" | "rtl";
  badge: string;
}

export const ZENVQ_LANGUAGES: LanguageItem[] = [
  // 1. Core Primary Hubs
  { code: "en", name: "English", native: "English", region: "Global / US / UK", dir: "ltr", badge: "EN" },
  { code: "bn", name: "Bengali", native: "বাংলা", region: "Bangladesh Hub", dir: "ltr", badge: "বাং" },
  { code: "ar", name: "Arabic", native: "العربية", region: "UAE / KSA / GCC", dir: "rtl", badge: "ع" },

  // 2. High-Ticket European & Western Enterprise Markets
  { code: "de", name: "German", native: "Deutsch", region: "Germany / DACH", dir: "ltr", badge: "DE" },
  { code: "fr", name: "French", native: "Français", region: "France / EU", dir: "ltr", badge: "FR" },
  { code: "es", name: "Spanish", native: "Español", region: "Americas / Spain", dir: "ltr", badge: "ES" },
  { code: "it", name: "Italian", native: "Italiano", region: "Italy / EU Luxury", dir: "ltr", badge: "IT" },
  { code: "nl", name: "Dutch", native: "Nederlands", region: "Netherlands Tech", dir: "ltr", badge: "NL" },
  { code: "pt", name: "Portuguese", native: "Português", region: "EU / Brazil", dir: "ltr", badge: "PT" },

  // 3. Premier East Asian Technology & Design Markets
  { code: "ja", name: "Japanese", native: "日本語", region: "Japan Tech & Design", dir: "ltr", badge: "日" },
  { code: "zh-CN", name: "Chinese", native: "简体中文", region: "Asia Pacific", dir: "ltr", badge: "中" },

  // 4. Regional South Asian & GCC Diaspora Markets
  { code: "ur", name: "Urdu", native: "اردو", region: "South Asia / GCC", dir: "rtl", badge: "ار" },
  { code: "hi", name: "Hindi", native: "हिन्दी", region: "South Asia", dir: "ltr", badge: "हि" },
];

interface ZenVQLanguageDockProps {
  variant?: "header" | "mobile" | "standalone";
  className?: string;
  dropDirection?: "down" | "up";
}

export function ZenVQLanguageDock({
  variant = "header",
  className = "",
  dropDirection = "down",
}: ZenVQLanguageDockProps) {
  const [currentCode, setCurrentCode] = useState<string>("en");
  const [isOpen, setIsOpen] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);
  const dockRef = useRef<HTMLDivElement>(null);

  // Sync theme with documentElement and localStorage
  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("saif-portfolio-theme") as "dark" | "light" | null;
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.remove("dark", "light");
      document.documentElement.classList.add(storedTheme);
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(nextTheme);
    localStorage.setItem("saif-portfolio-theme", nextTheme);
  };

  const setThemeExplicit = (targetTheme: "dark" | "light") => {
    setTheme(targetTheme);
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(targetTheme);
    localStorage.setItem("saif-portfolio-theme", targetTheme);
  };

  // Helper to match browser locale
  const matchSupportedLanguage = (localeStr: string): string | null => {
    if (!localeStr || typeof localeStr !== "string") return null;
    const clean = localeStr.toLowerCase().trim();
    if (clean.startsWith("bn")) return "bn";
    if (clean.startsWith("ar")) return "ar";
    if (clean.startsWith("de")) return "de";
    if (clean.startsWith("fr")) return "fr";
    if (clean.startsWith("es")) return "es";
    if (clean.startsWith("it")) return "it";
    if (clean.startsWith("nl")) return "nl";
    if (clean.startsWith("pt")) return "pt";
    if (clean.startsWith("ja")) return "ja";
    if (clean.startsWith("zh")) return "zh-CN";
    if (clean.startsWith("ur")) return "ur";
    if (clean.startsWith("hi")) return "hi";
    if (clean.startsWith("en")) return "en";
    return null;
  };

  const detectClientLanguage = (): string => {
    try {
      if (typeof window !== "undefined") {
        if (window.location && window.location.search) {
          const params = new URLSearchParams(window.location.search);
          const urlLang = params.get("lang");
          if (urlLang) {
            const matched = matchSupportedLanguage(urlLang);
            if (matched) return matched;
          }
        }
        const saved = localStorage.getItem("zenvq_live_lang");
        if (saved && ZENVQ_LANGUAGES.some((l) => l.code === saved)) {
          return saved;
        }
        const candidates: string[] = [];
        if (Array.isArray(navigator.languages)) {
          candidates.push(...navigator.languages);
        }
        if (navigator.language) candidates.push(navigator.language);
        try {
          const intlLocale = Intl.DateTimeFormat().resolvedOptions().locale;
          if (intlLocale) candidates.push(intlLocale);
        } catch {}
        for (const cand of candidates) {
          const matched = matchSupportedLanguage(cand);
          if (matched) return matched;
        }
      }
    } catch {}
    return "en";
  };

  // Sync active language on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const translator = (window as unknown as {
        ZenVQTranslate?: { getCurrentLanguage?: () => string };
      }).ZenVQTranslate;

      let initial = "en";
      if (translator && typeof translator.getCurrentLanguage === "function") {
        initial = translator.getCurrentLanguage();
      } else {
        initial = detectClientLanguage();
      }
      setCurrentCode(initial);

      const handleLangChange = (e: Event) => {
        const customEvent = e as CustomEvent<{ lang: string }>;
        if (customEvent.detail && customEvent.detail.lang) {
          setCurrentCode(customEvent.detail.lang);
          setIsTranslating(false);
        }
      };

      window.addEventListener("zenvq-lang-changed", handleLangChange);
      return () => window.removeEventListener("zenvq-lang-changed", handleLangChange);
    }
  }, []);

  // Handle outside clicks and keyboard escape
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dockRef.current && !dockRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const selectLanguage = async (targetCode: string) => {
    if (targetCode === currentCode) {
      setIsOpen(false);
      return;
    }

    setIsTranslating(true);
    setIsOpen(false);

    try {
      if (typeof window !== "undefined") {
        localStorage.setItem("zenvq_live_lang", targetCode);
        const translator = (window as unknown as {
          ZenVQTranslate?: { setLanguage: (code: string) => Promise<boolean> };
        }).ZenVQTranslate;

        if (translator && typeof translator.setLanguage === "function") {
          await translator.setLanguage(targetCode);
        } else {
          setCurrentCode(targetCode);
        }
      }
    } catch (err) {
      console.warn("Language transition error:", err);
    } finally {
      setIsTranslating(false);
    }
  };

  const activeMeta = ZENVQ_LANGUAGES.find((l) => l.code === currentCode) || ZENVQ_LANGUAGES[0];

  return (
    <div
      ref={dockRef}
      data-zenvq-dock="true"
      data-zenvq-stable="true"
      translate="no"
      dir="ltr"
      style={{ direction: "ltr", unicodeBidi: "isolate" }}
      className={`notranslate relative inline-block text-left select-none ${className}`}
    >
      {/* 
        ========================================================================
        UNIFIED DUAL-FEATURE CAPSULE BUTTON (Language Selector + Theme Toggle)
        Brings both features together into one cohesive, perfectly themed control.
        ========================================================================
      */}
      <div
        className="inline-flex items-center rounded-full border border-border-subtle bg-surface-1 p-0.5 shadow-sm hover:border-border-strong transition-colors"
      >
        {/* Left Sub-Control: Language Trigger */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          aria-expanded={isOpen}
          aria-haspopup="true"
          aria-label="Select translation language"
          className="inline-flex items-center gap-1.5 pl-2.5 pr-1.5 py-1 rounded-full text-xs font-mono transition-colors cursor-pointer hover:bg-surface-2"
        >
          {isTranslating ? (
            <span className="h-2 w-2 rounded-full bg-accent animate-ping shrink-0" />
          ) : (
            <Globe className="w-3.5 h-3.5 text-accent shrink-0" />
          )}

          {/* Primary Language Name — Strictly Semantic Color (Ink Primary) */}
          <span className="font-sans font-medium text-xs text-ink-primary">
            {activeMeta.name}
          </span>

          {/* Badge Label — Subtle Semantic Color (Ink Muted) */}
          <span className="text-[10px] font-mono uppercase tracking-wider text-ink-muted hidden sm:inline">
            ({activeMeta.badge})
          </span>

          <ChevronDown
            className={`w-3 h-3 text-ink-muted transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* 1px Hairline Divider Between Features */}
        <div className="w-px h-3.5 bg-border-subtle mx-0.5 shrink-0" />

        {/* Right Sub-Control: Theme Toggle */}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle Cinema Dark / Swiss Light theme"
          className="w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-ink-secondary hover:text-ink-primary hover:bg-surface-2 transition-colors cursor-pointer"
        >
          {mounted && theme === "dark" ? (
            <Sun className="w-3.5 h-3.5" />
          ) : (
            <Moon className="w-3.5 h-3.5" />
          )}
        </button>
      </div>

      {/* 
        ========================================================================
        POPOVER PALETTE: Both Theme Mode Control + 13 Market Languages
        ========================================================================
      */}
      {isOpen && (
        <div
          data-zenvq-stable="true"
          dir="ltr"
          style={{ direction: "ltr", unicodeBidi: "isolate" }}
          className={`notranslate absolute ${
            dropDirection === "up"
              ? "bottom-full mb-2.5 right-0 w-72 sm:w-80 max-w-[calc(100vw-1.5rem)]"
              : "top-full mt-2.5 right-0 w-72 sm:w-80 max-w-[calc(100vw-1.5rem)]"
          } rounded-2xl border border-border-strong bg-surface-1/95 p-3 z-50 animate-in fade-in zoom-in-95 duration-150 backdrop-blur-2xl shadow-2xl text-ink-primary`}
        >
          {/* Section 1: Quick Theme Mode Switcher Strip */}
          <div className="pb-2.5 mb-2.5 border-b border-border-subtle flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase tracking-wider text-ink-muted">
              Display Theme
            </span>
            <div className="inline-flex rounded-lg border border-border-subtle bg-surface-2 p-0.5 text-xs font-mono">
              <button
                type="button"
                onClick={() => setThemeExplicit("dark")}
                className={`px-2 py-0.5 rounded-md flex items-center gap-1 transition-colors ${
                  theme === "dark"
                    ? "bg-surface-1 text-ink-primary shadow-xs font-medium"
                    : "text-ink-muted hover:text-ink-primary"
                }`}
              >
                <Sun className="w-3 h-3" />
                <span>Dark</span>
              </button>
              <button
                type="button"
                onClick={() => setThemeExplicit("light")}
                className={`px-2 py-0.5 rounded-md flex items-center gap-1 transition-colors ${
                  theme === "light"
                    ? "bg-surface-1 text-ink-primary shadow-xs font-medium"
                    : "text-ink-muted hover:text-ink-primary"
                }`}
              >
                <Moon className="w-3 h-3" />
                <span>Light</span>
              </button>
            </div>
          </div>

          {/* Section 2: Header of Language List */}
          <div className="px-1 pb-1.5 flex items-center justify-between text-[11px] font-mono text-ink-muted">
            <span className="uppercase tracking-wider">Live DOM Translator</span>
            <span className="text-accent text-[10px] font-semibold bg-surface-2 px-1.5 py-0.5 rounded border border-border-subtle">
              13 Languages
            </span>
          </div>

          {/* Grid of Languages */}
          <div className="max-h-72 overflow-y-auto space-y-1 pr-1">
            {ZENVQ_LANGUAGES.map((lang) => {
              const isSelected = lang.code === currentCode;
              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => selectLanguage(lang.code)}
                  className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-left text-xs transition-all cursor-pointer ${
                    isSelected
                      ? "bg-surface-2 text-ink-primary font-semibold border border-border-strong shadow-xs"
                      : "text-ink-secondary hover:text-ink-primary hover:bg-surface-2 border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span
                      className={`font-mono text-[11px] w-6 shrink-0 font-semibold ${
                        isSelected ? "text-accent" : "text-ink-muted"
                      }`}
                    >
                      {lang.badge}
                    </span>
                    <div className="min-w-0">
                      <div className="font-sans font-medium flex items-center gap-1.5 text-ink-primary">
                        <span>{lang.native}</span>
                        {lang.native !== lang.name && (
                          <span className="text-[10px] text-ink-muted font-normal">
                            ({lang.name})
                          </span>
                        )}
                      </div>
                      <div className="text-[10px] font-mono text-ink-muted truncate">
                        {lang.region}
                      </div>
                    </div>
                  </div>

                  {isSelected && (
                    <Check className="w-3.5 h-3.5 text-accent shrink-0 ml-2" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default ZenVQLanguageDock;
