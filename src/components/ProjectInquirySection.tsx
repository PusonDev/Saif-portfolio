"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";
import { Send, MessageCircle, Copy, Check, Sparkles, Sliders } from "lucide-react";

export function ProjectInquirySection() {
  const { profile } = portfolioData;

  const [projectType, setProjectType] = useState("Kinetic Typography");
  const [timeline, setTimeline] = useState("1 – 2 Weeks");
  const [budgetTier, setBudgetTier] = useState("Standard ($250 – $500)");
  const [clientName, setClientName] = useState("");
  const [contactHandle, setContactHandle] = useState("");
  const [projectNote, setProjectNote] = useState("");
  const [copied, setCopied] = useState(false);

  const PROJECT_TYPES = [
    "Kinetic Typography",
    "Social Reels (9:16)",
    "Motion Graphics",
    "Full Video Edit",
  ];

  const TIMELINES = [
    "Rush 48-Hours",
    "1 – 2 Weeks",
    "Monthly Retainer",
  ];

  const BUDGETS = [
    "Starter ($150 – $250)",
    "Standard ($250 – $500)",
    "Custom Scope",
  ];

  const generateBriefText = () => {
    return `Hi Saif, I would like to scope a motion design project:
- Name: ${clientName || "Not provided"}
- Contact: ${contactHandle || "Not provided"}
- Project Type: ${projectType}
- Target Timeline: ${timeline}
- Budget Tier: ${budgetTier}
- Brief Scope: ${projectNote || "Looking for clean kinetic motion graphics"}`;
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(generateBriefText());
    window.open(`https://wa.me/8801876422288?text=${text}`, "_blank");
  };

  const handleEmailSend = () => {
    const subject = encodeURIComponent(`Motion Project Inquiry — ${projectType}`);
    const body = encodeURIComponent(generateBriefText());
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const handleCopyBrief = () => {
    navigator.clipboard.writeText(generateBriefText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="inquiry" className="py-20 sm:py-28 px-5 sm:px-8 max-w-5xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-6 border-b border-border-subtle">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-accent">
            <Sliders className="w-3.5 h-3.5" />
            <span>04 / Interactive Scoping</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink-primary">
            Scope your motion project in <span className="font-serif italic font-normal">seconds.</span>
          </h2>
        </div>

        <span className="text-xs font-mono uppercase tracking-wider text-ink-muted">
          Fast WhatsApp & Email Scoping · Zero Spam
        </span>
      </div>

      {/* Scoping Card Container */}
      <div className="editorial-card rounded-2xl p-6 sm:p-10 border border-border-subtle bg-surface-1 shadow-xl">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Toggles */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Project Type */}
            <div className="space-y-2.5">
              <label className="text-xs font-mono uppercase tracking-wider text-ink-muted">
                1. Select Motion Type:
              </label>
              <div className="flex flex-wrap gap-2">
                {PROJECT_TYPES.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setProjectType(type)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-200 border cursor-pointer ${
                      projectType === type
                        ? "bg-accent text-white border-accent shadow-sm"
                        : "bg-surface-2 border-border-subtle text-ink-secondary hover:text-ink-primary hover:border-border-strong"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Target Timeline */}
            <div className="space-y-2.5">
              <label className="text-xs font-mono uppercase tracking-wider text-ink-muted">
                2. Target Timeline:
              </label>
              <div className="flex flex-wrap gap-2">
                {TIMELINES.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setTimeline(time)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-200 border cursor-pointer ${
                      timeline === time
                        ? "bg-accent text-white border-accent shadow-sm"
                        : "bg-surface-2 border-border-subtle text-ink-secondary hover:text-ink-primary hover:border-border-strong"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Budget Tier */}
            <div className="space-y-2.5">
              <label className="text-xs font-mono uppercase tracking-wider text-ink-muted">
                3. Budget Estimate:
              </label>
              <div className="flex flex-wrap gap-2">
                {BUDGETS.map((tier) => (
                  <button
                    key={tier}
                    type="button"
                    onClick={() => setBudgetTier(tier)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-200 border cursor-pointer ${
                      budgetTier === tier
                        ? "bg-accent text-white border-accent shadow-sm"
                        : "bg-surface-2 border-border-subtle text-ink-secondary hover:text-ink-primary hover:border-border-strong"
                    }`}
                  >
                    {tier}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Simple Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-ink-muted">
                  Your Name:
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
                  Email or WhatsApp:
                </label>
                <input
                  type="text"
                  placeholder="e.g. alex@studio.com"
                  value={contactHandle}
                  onChange={(e) => setContactHandle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-surface-2 border border-border-subtle text-sm text-ink-primary placeholder:text-ink-muted focus:outline-hidden focus:border-accent"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase tracking-wider text-ink-muted">
                Brief Scope Note (Optional):
              </label>
              <textarea
                rows={2}
                placeholder="Share your video concept, references or goals..."
                value={projectNote}
                onChange={(e) => setProjectNote(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-surface-2 border border-border-subtle text-sm text-ink-primary placeholder:text-ink-muted focus:outline-hidden focus:border-accent resize-none"
              />
            </div>
          </div>

          {/* Right Column: Dynamic Live Brief Summary & Instant Actions */}
          <div className="lg:col-span-5 bg-surface-2 rounded-2xl p-6 border border-border-subtle flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-border-subtle text-xs font-mono">
                <span className="text-accent uppercase tracking-wider font-medium">Live Brief Preview</span>
                <span className="text-ink-muted">0% AI Slop Guaranteed</span>
              </div>

              <div className="space-y-2 text-xs font-mono text-ink-secondary">
                <div className="flex justify-between">
                  <span className="text-ink-muted">Type:</span>
                  <span className="text-ink-primary font-medium">{projectType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-muted">Timeline:</span>
                  <span className="text-ink-primary font-medium">{timeline}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-muted">Budget:</span>
                  <span className="text-ink-primary font-medium">{budgetTier}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-muted">Name:</span>
                  <span className="text-ink-primary font-medium">{clientName || "—"}</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-surface-1 border border-border-subtle text-[11px] font-mono text-ink-muted leading-relaxed">
                Direct routing to Saifuddin via WhatsApp or Email. No middlemen or agency commission markups.
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5">
              <button
                type="button"
                onClick={handleWhatsAppSend}
                className="w-full py-3 px-4 rounded-xl bg-accent text-white hover:opacity-95 text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 font-medium cursor-pointer shadow-sm transition-opacity"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send Brief via WhatsApp</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={handleEmailSend}
                  className="py-2.5 px-3 rounded-xl bg-surface-1 border border-border-subtle hover:border-border-strong text-xs font-mono uppercase tracking-wider text-ink-primary flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                >
                  <Send className="w-3.5 h-3.5 text-accent" />
                  <span>Send Email</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyBrief}
                  className="py-2.5 px-3 rounded-xl bg-surface-1 border border-border-subtle hover:border-border-strong text-xs font-mono uppercase tracking-wider text-ink-primary flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
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
      </div>
    </section>
  );
}
