"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";
import { Cpu, Check } from "lucide-react";

export function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 px-4 max-w-5xl mx-auto">
      <div className="flex flex-col gap-2 mb-10">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-mint-400">
          <Cpu className="w-3.5 h-3.5" />
          <span>Technical Stack</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          Capabilities & Core Technologies
        </h2>
        <p className="text-sm text-zinc-400 max-w-xl">
          Modern tools, battle-tested runtimes and architectures used to build high-grade applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {skills.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl bg-zinc-900/60 border border-white/[0.08] p-6 flex flex-col gap-4 specular-edge glow-card"
          >
            <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-200 border-b border-white/[0.06] pb-3">
              {category.title}
            </h3>

            <div className="flex flex-col gap-2.5">
              {category.skills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-2.5 text-xs text-zinc-300"
                >
                  <div className="w-4 h-4 rounded-full bg-mint-400/10 border border-mint-400/30 flex items-center justify-center text-mint-400">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
