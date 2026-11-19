"use client";

import React from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";
import { ArrowRight, Instagram, MapPin, Film, Sparkles, Phone, Mail } from "lucide-react";

export function HeroSection() {
  const { profile } = portfolioData;

  return (
    <section id="overview" className="relative pt-36 pb-20 px-4 max-w-5xl mx-auto">
      {/* Background ambient glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-mint-400/[0.07] rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-start gap-8"
      >
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-white/10 text-xs text-zinc-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-mint-400" />
          </span>
          <span className="font-mono text-[11px] tracking-wide uppercase text-zinc-300">
            {profile.availability}
          </span>
          <span className="text-zinc-600">|</span>
          <span className="flex items-center gap-1 text-[11px] text-zinc-400">
            <MapPin className="w-3 h-3 text-zinc-500" />
            {profile.location}
          </span>
        </div>

        {/* Profile Card & Intro Header */}
        <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-8 w-full">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-mint-400/10 border border-mint-400/20 text-mint-400 font-mono text-xs uppercase tracking-wider">
              <Film className="w-3.5 h-3.5" />
              <span>{profile.role}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.08]">
              {profile.fullName}
            </h1>

            <p className="text-lg sm:text-xl text-zinc-300 font-medium leading-relaxed">
              {profile.headline}
            </p>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              {profile.bio}
            </p>
          </div>

          {/* Profile Photo with Specular Edge */}
          <div className="relative group shrink-0">
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-mint-400/50 transition-colors shadow-2xl glow-card">
              <Image
                src={profile.avatar}
                alt={profile.fullName}
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 768px) 144px, 176px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Subtle glow border */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-mint-400/20 to-cyan-400/20 blur-md -z-10 group-hover:opacity-100 opacity-60 transition-opacity" />
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href={profile.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-mint-400 text-zinc-950 font-semibold text-sm hover:bg-mint-500 transition-colors shadow-lg shadow-mint-400/20"
          >
            <Instagram className="w-4 h-4" />
            <span>View Instagram Portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 text-zinc-300 font-medium text-sm border border-white/10 hover:border-white/20 hover:text-white transition-all"
          >
            <Mail className="w-4 h-4 text-mint-400" />
            <span>{profile.email}</span>
          </a>

          <a
            href={`tel:${profile.phone.replace(/\s+/g, '')}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900/60 text-zinc-400 font-mono text-xs border border-white/10 hover:text-zinc-200 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{profile.phone}</span>
          </a>
        </div>

        {/* Metrics Grid */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6">
          {profile.stats.map((stat, idx) => (
            <div
              key={idx}
              className="relative rounded-xl bg-zinc-900/60 border border-white/[0.08] p-4 flex flex-col gap-1 specular-edge glow-card"
            >
              <span className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-white">
                {stat.value}
              </span>
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
