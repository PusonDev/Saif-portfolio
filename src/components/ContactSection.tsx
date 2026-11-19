"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";
import { Mail, Copy, Check, MessageSquare, ArrowUpRight, Phone, Instagram, MapPin } from "lucide-react";

export function ContactSection() {
  const { profile } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 px-4 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-3xl bg-zinc-900/60 border border-white/[0.08] p-8 sm:p-12 relative overflow-hidden specular-edge glow-card"
      >
        <div className="relative z-10 max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-mint-400">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Initiate Collaboration</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Have a project in mind? Let&apos;s animate it.
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Available for motion graphics commissions, kinetic typography projects and creative video editing. Reach out directly to discuss creative briefs or collaborations.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            {/* Direct Email Action */}
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-mint-400 text-zinc-950 font-semibold text-sm hover:bg-mint-500 transition-colors shadow-lg shadow-mint-400/20"
            >
              <Mail className="w-4 h-4" />
              <span>Send Email</span>
            </a>

            {/* Quick Copy Email */}
            <button
              onClick={handleCopyEmail}
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-800 text-zinc-300 font-mono text-xs border border-white/10 hover:border-white/20 hover:text-white transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-mint-400" />
                  <span className="text-mint-400">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>{profile.email}</span>
                </>
              )}
            </button>

            {/* Instagram Portfolio */}
            <a
              href={profile.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-zinc-900 text-zinc-300 text-xs font-medium border border-white/10 hover:text-white hover:border-mint-400/30 transition-all"
            >
              <Instagram className="w-3.5 h-3.5 text-mint-400" />
              <span>{profile.instagramHandle}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Phone */}
            <a
              href={`tel:${profile.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-zinc-900 text-zinc-400 text-xs font-mono border border-white/10 hover:text-zinc-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{profile.phone}</span>
            </a>
          </div>

          <div className="pt-2 flex items-center gap-2 text-xs font-mono text-zinc-500">
            <MapPin className="w-3.5 h-3.5 text-zinc-400" />
            <span>Based in {profile.location}</span>
          </div>
        </div>

        {/* Subtle decorative glow */}
        <div className="absolute right-0 top-0 w-80 h-80 bg-mint-400/[0.04] rounded-full blur-3xl pointer-events-none" />
      </motion.div>
    </section>
  );
}
