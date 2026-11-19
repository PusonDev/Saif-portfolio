"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";
import { z } from "zod";
import { Sliders, HelpCircle, ChevronDown, MessageCircle, Send, Copy, Check, ShieldCheck, AlertCircle } from "lucide-react";

// Strict Zod Validation Schema
const ScopingSchema = z.object({
  projectType: z.enum([
    "UI Motion / SaaS Animation",
    "Logo Animation",
    "Kinetic Typography",
    "Gaming / Promo Reel",
    "Transitions & Motion Package",
  ]),
  format: z.enum(["9:16 Vertical", "16:9 Widescreen", "Both (9:16 + 16:9)"]),
  timeline: z.enum(["Rush 48-Hours", "1 – 2 Weeks", "Monthly Retainer"]),
  clientName: z.string().trim().min(2, "Name must be at least 2 characters").max(80, "Name too long"),
  contactHandle: z.string().trim().min(3, "Please provide a valid email or WhatsApp number").max(100),
  projectBrief: z.string().trim().max(1000, "Brief must be under 1000 characters").optional(),
  honeypot: z.string().max(0, "Spam detected"),
});

export function ProjectInquirySection() {
  const { profile, faqs } = portfolioData;

  // Form State
  const [projectType, setProjectType] = useState<
    "UI Motion / SaaS Animation" | "Logo Animation" | "Kinetic Typography" | "Gaming / Promo Reel" | "Transitions & Motion Package"
  >("UI Motion / SaaS Animation");
  const [format, setFormat] = useState<"9:16 Vertical" | "16:9 Widescreen" | "Both (9:16 + 16:9)">("Both (9:16 + 16:9)");
  const [timeline, setTimeline] = useState<"Rush 48-Hours" | "1 – 2 Weeks" | "Monthly Retainer">("1 – 2 Weeks");
  const [clientName, setClientName] = useState("");
  const [contactHandle, setContactHandle] = useState("");
  const [projectBrief, setProjectBrief] = useState("");
  const [honeypot, setHoneypot] = useState(""); // Bot trap

  const [validationError, setValidationError] = useState<string | null>(null);
  const [rateLimitCooldown, setRateLimitCooldown] = useState(false);
  const [copied, setCopied] = useState(false);

  // Accordion State (Single open at a time)
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const PROJECT_TYPES = [
    "UI Motion / SaaS Animation",
    "Logo Animation",
    "Kinetic Typography",
    "Gaming / Promo Reel",
    "Transitions & Motion Package",
  ] as const;

  const FORMATS = [
    "9:16 Vertical",
    "16:9 Widescreen",
    "Both (9:16 + 16:9)",
  ] as const;

  const TIMELINES = [
    "Rush 48-Hours",
    "1 – 2 Weeks",
    "Monthly Retainer",
  ] as const;

  // Sanitize text inputs against XSS and injection
  const sanitizeText = (input: string) => {
    return input.replace(/<[^>]*>?/gm, "").trim();
  };

  const validateAndGenerateBrief = () => {
    setValidationError(null);

    // Rate Limit check
    if (rateLimitCooldown) {
      setValidationError("Please wait a moment before sending another request.");
      return null;
    }

    const sanitizedName = sanitizeText(clientName);
    const sanitizedContact = sanitizeText(contactHandle);
    const sanitizedBrief = sanitizeText(projectBrief);

    const validation = ScopingSchema.safeParse({
      projectType,
      format,
      timeline,
      clientName: sanitizedName,
      contactHandle: sanitizedContact,
      projectBrief: sanitizedBrief,
      honeypot,
    });

    if (!validation.success) {
      const issue = validation.error.issues[0];
      setValidationError(issue ? issue.message : "Please fill in your name and contact details.");
      return null;
    }

    // Set 5-second cooldown
    setRateLimitCooldown(true);
    setTimeout(() => setRateLimitCooldown(false), 5000);

    return `Hello Saif, I would like to scope a motion project:
- Name: ${sanitizedName}
- Contact: ${sanitizedContact}
- Type: ${projectType}
- Format: ${format}
- Timeline: ${timeline}
- Brief: ${sanitizedBrief || "Looking for clean kinetic motion graphics"}`;
  };

  const handleWhatsAppSend = () => {
    const brief = validateAndGenerateBrief();
    if (!brief) return;
    const url = `https://wa.me/8801876422288?text=${encodeURIComponent(brief)}`;
    window.open(url, "_blank");
  };

  const handleEmailSend = () => {
    const brief = validateAndGenerateBrief();
    if (!brief) return;
    const subject = encodeURIComponent(`Motion Project Scope — ${projectType}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${encodeURIComponent(brief)}`;
  };

  const handleCopyBrief = () => {
    const brief = validateAndGenerateBrief();
    if (!brief) return;
    navigator.clipboard.writeText(brief);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  // Schema.org FAQPage JSON-LD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <section id="contact" className="py-20 sm:py-28 px-5 sm:px-8 max-w-5xl mx-auto w-full">
      {/* Schema.org FAQPage structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 pb-6 border-b border-border-subtle">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-accent">
            <Sliders className="w-3.5 h-3.5" />
            <span>06 / Project Scoper & FAQs</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink-primary">
            Scope your project & review direct <span className="font-serif italic font-normal">terms.</span>
          </h2>
        </div>

        <span className="text-xs font-mono uppercase tracking-wider text-ink-muted">
          Direct Project Brief · Quick Answers
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* =========================================================================
            LEFT COLUMN: Direct Interactive Scoping Widget (7 Cols)
            ========================================================================= */}
        <div className="lg:col-span-7">
          <div className="luxury-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border-subtle bg-surface-1 shadow-2xl relative overflow-hidden space-y-6">
            <div className="specular-top-light" />

            <div className="flex items-center justify-between pb-3 border-b border-border-subtle text-xs font-mono">
              <span className="text-accent uppercase tracking-wider font-semibold">Motion Project Scoper</span>
              <span className="text-ink-muted">Direct to Saifuddin</span>
            </div>

            {/* Error Banner */}
            {validationError && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-xs font-mono text-red-400 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                <span>{validationError}</span>
              </div>
            )}

            {/* Step 1: Project Type */}
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-wider text-ink-muted">
                1. Select Motion Type:
              </label>
              <div className="flex flex-wrap gap-2">
                {PROJECT_TYPES.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setProjectType(t)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-200 border cursor-pointer ${
                      projectType === t
                        ? "bg-accent text-zinc-950 font-semibold border-accent shadow-xs"
                        : "bg-surface-2 border-border-subtle text-ink-secondary hover:text-ink-primary hover:border-border-strong"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Format Output */}
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-wider text-ink-muted">
                2. Target Aspect Ratio:
              </label>
              <div className="flex flex-wrap gap-2">
                {FORMATS.map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setFormat(f)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-200 border cursor-pointer ${
                      format === f
                        ? "bg-accent text-zinc-950 font-semibold border-accent shadow-xs"
                        : "bg-surface-2 border-border-subtle text-ink-secondary hover:text-ink-primary hover:border-border-strong"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Target Timeline */}
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-wider text-ink-muted">
                3. Production Timeline:
              </label>
              <div className="flex flex-wrap gap-2">
                {TIMELINES.map((tm) => (
                  <button
                    key={tm}
                    type="button"
                    onClick={() => setTimeline(tm)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-200 border cursor-pointer ${
                      timeline === tm
                        ? "bg-accent text-zinc-950 font-semibold border-accent shadow-xs"
                        : "bg-surface-2 border-border-subtle text-ink-secondary hover:text-ink-primary hover:border-border-strong"
                    }`}
                  >
                    {tm}
                  </button>
                ))}
              </div>
            </div>

            {/* Honeypot Bot Trap (Hidden from real users) */}
            <input
              type="text"
              name="website_url_trap"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              className="opacity-0 absolute -z-10 w-0 h-0 pointer-events-none"
              aria-hidden="true"
            />

            {/* Step 4: Client Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-ink-muted">
                  Your Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Alex Vance"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-surface-2 border border-border-subtle text-sm text-ink-primary placeholder:text-ink-muted focus:outline-hidden focus:border-accent"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-ink-muted">
                  WhatsApp or Email *
                </label>
                <input
                  type="text"
                  placeholder="e.g. +1 555... or name@co.com"
                  value={contactHandle}
                  onChange={(e) => setContactHandle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-surface-2 border border-border-subtle text-sm text-ink-primary placeholder:text-ink-muted focus:outline-hidden focus:border-accent"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase tracking-wider text-ink-muted">
                Brief Scope Note (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Mention script length, visual references or project goals..."
                value={projectBrief}
                onChange={(e) => setProjectBrief(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-surface-2 border border-border-subtle text-sm text-ink-primary placeholder:text-ink-muted focus:outline-hidden focus:border-accent resize-none"
              />
            </div>

            {/* Action Buttons */}
            <div className="pt-2 space-y-2.5">
              <button
                type="button"
                onClick={handleWhatsAppSend}
                className="w-full py-3 px-4 rounded-xl bg-cta-bg text-cta-text hover:opacity-90 text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 font-semibold cursor-pointer shadow-sm transition-opacity"
              >
                <MessageCircle className="w-4 h-4 text-accent" />
                <span>Send Scope via WhatsApp</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={handleEmailSend}
                  className="py-2.5 px-3 rounded-xl bg-surface-2 border border-border-subtle hover:border-border-strong text-xs font-mono uppercase tracking-wider text-ink-primary flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                >
                  <Send className="w-3.5 h-3.5 text-accent" />
                  <span>Send Email</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyBrief}
                  className="py-2.5 px-3 rounded-xl bg-surface-2 border border-border-subtle hover:border-border-strong text-xs font-mono uppercase tracking-wider text-ink-primary flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-accent" />
                      <span className="text-accent font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-ink-muted" />
                      <span>Copy Brief</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            RIGHT COLUMN: Concise 4-Item Single-Accordion FAQ (5 Cols)
            ========================================================================= */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-ink-muted pb-2">
            <HelpCircle className="w-4 h-4 text-accent" />
            <span>Frequently Asked Questions</span>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`luxury-card rounded-2xl border transition-all duration-200 overflow-hidden relative ${
                    isOpen
                      ? "border-accent/80 bg-surface-1 shadow-md"
                      : "border-border-subtle bg-surface-1 hover:border-border-strong"
                  }`}
                >
                  <div className="specular-top-light" />

                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full p-5 text-left flex items-center justify-between gap-3 cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-mono text-accent">
                        0{idx + 1}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-ink-primary tracking-tight">
                        {faq.question}
                      </span>
                    </div>

                    <div
                      className={`w-6 h-6 rounded-full bg-surface-2 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-accent" : "text-ink-muted"
                      }`}
                    >
                      <ChevronDown className="w-3.5 h-3.5" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-ink-secondary leading-relaxed border-t border-border-subtle/50 font-normal">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Direct WhatsApp Pill */}
          <div className="p-4 rounded-xl bg-surface-1 border border-border-subtle flex items-center justify-between text-xs font-mono">
            <span className="text-ink-muted">Have a specific launch date?</span>
            <a
              href={profile.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="text-accent hover:underline inline-flex items-center gap-1 font-medium"
            >
              <span>Chat Direct ↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
