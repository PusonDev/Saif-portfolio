"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, CheckCircle2, Globe, Heart } from "lucide-react";

export function ExperienceSection() {
  const { experience, education, languages, interests } = portfolioData;

  return (
    <section id="experience" className="py-20 px-4 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Experience Column */}
        <div className="space-y-6">
          <div className="flex flex-col gap-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-mint-400">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Production Track</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Work Experience
            </h2>
          </div>

          <div className="space-y-4">
            {experience.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl bg-zinc-900/60 border border-white/[0.08] p-6 space-y-4 specular-edge glow-card"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 border-b border-white/[0.06]">
                  <div>
                    <h3 className="font-semibold text-base text-zinc-100">
                      {item.role}
                    </h3>
                    <p className="text-xs font-mono text-mint-400">
                      {item.company}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-zinc-400 bg-white/5 px-2.5 py-1 rounded-md w-fit">
                    {item.period}
                  </span>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed">
                  {item.description}
                </p>

                <ul className="space-y-2 pt-1">
                  {item.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2 text-xs text-zinc-400 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-mint-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education & Background Column */}
        <div className="space-y-6">
          <div className="flex flex-col gap-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-mint-400">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Academic & Training</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Education & Background
            </h2>
          </div>

          <div className="space-y-4">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl bg-zinc-900/60 border border-white/[0.08] p-6 space-y-2 specular-edge glow-card"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-sm text-zinc-100">
                    {edu.title}
                  </h3>
                  <span className="text-xs font-mono text-mint-400 bg-mint-400/10 px-2 py-0.5 rounded">
                    {edu.year}
                  </span>
                </div>
                <p className="text-xs font-mono text-zinc-400">
                  {edu.institution}
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {edu.details}
                </p>
              </motion.div>
            ))}

            {/* Languages & Interests */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="rounded-2xl bg-zinc-900/40 border border-white/[0.06] p-4 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-300">
                  <Globe className="w-3.5 h-3.5 text-mint-400" />
                  <span>Languages</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {languages.map((lang) => (
                    <span key={lang} className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-zinc-900/40 border border-white/[0.06] p-4 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-300">
                  <Heart className="w-3.5 h-3.5 text-mint-400" />
                  <span>Interests</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {interests.map((interest) => (
                    <span key={interest} className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
