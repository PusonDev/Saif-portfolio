"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";
import { Layers, ArrowUpRight, CheckCircle2, Instagram, Play } from "lucide-react";

export function ProjectsSection() {
  const { projects, profile } = portfolioData;

  return (
    <section id="works" className="py-20 px-4 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div className="flex flex-col gap-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-mint-400">
            <Layers className="w-3.5 h-3.5" />
            <span>Featured Motion Works</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Motion Graphics & Visual Storytelling
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl">
            Clean transitions, dynamic typography and narrative pacing designed for digital screens.
          </p>
        </div>

        <a
          href={profile.instagram}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 border border-white/10 hover:border-mint-400/40 text-xs font-mono text-zinc-300 hover:text-white transition-all w-fit"
        >
          <Instagram className="w-3.5 h-3.5 text-mint-400" />
          <span>Follow {profile.instagramHandle}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative rounded-2xl bg-zinc-900/60 border border-white/[0.08] p-6 flex flex-col justify-between specular-edge glow-card hover:border-mint-400/30 transition-all duration-300"
          >
            <div className="space-y-4">
              {/* Category & Status */}
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                  {project.category}
                </span>
                <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-mint-400/10 text-mint-400 text-[10px] font-mono">
                  <Play className="w-2.5 h-2.5 fill-current" />
                  Motion
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-mint-400 transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-zinc-400 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="pt-6 space-y-4">
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-zinc-800 text-zinc-300 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Metric & CTA link */}
              <div className="flex items-center justify-between pt-2 border-t border-white/[0.06]">
                {project.metrics ? (
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-mint-400">
                    <CheckCircle2 className="w-3 h-3" />
                    {project.metrics}
                  </span>
                ) : (
                  <span className="text-[11px] font-mono text-zinc-400">Production Ready</span>
                )}

                <a
                  href={project.demoUrl || profile.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded-lg bg-white/5 text-zinc-400 group-hover:text-mint-400 group-hover:bg-mint-400/10 transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
