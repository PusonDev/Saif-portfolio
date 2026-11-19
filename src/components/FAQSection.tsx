"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { HelpCircle, ChevronDown } from "lucide-react";

export function FAQSection() {
  const { faqs } = portfolioData;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  // Generate Schema.org FAQPage JSON-LD Structured Data
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
    <section id="faqs" className="py-20 sm:py-28 px-5 sm:px-8 max-w-5xl mx-auto w-full">
      {/* Schema.org JSON-LD Script for SEO Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-6 border-b border-border-subtle">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-accent">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>14 / Questions & Answers</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink-primary">
            Frequently asked questions about motion <span className="font-serif italic font-normal">projects.</span>
          </h2>
        </div>

        <span className="text-xs font-mono uppercase tracking-wider text-ink-muted">
          Transparent Scope · Clean Handover
        </span>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`editorial-card rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? "border-accent/80 bg-surface-1 shadow-sm"
                  : "border-border-subtle bg-surface-1 hover:border-border-strong"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleAccordion(idx)}
                aria-expanded={isOpen}
                className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-accent">
                    0{idx + 1}
                  </span>
                  <span className="text-base font-semibold text-ink-primary tracking-tight">
                    {faq.question}
                  </span>
                </div>

                <div
                  className={`w-7 h-7 rounded-full bg-surface-2 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-accent" : "text-ink-muted"
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-1 text-sm text-ink-secondary leading-relaxed border-t border-border-subtle/50 font-normal">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
