"use client";

import React from "react";
import { ArrowUpRight, Sparkles, Code2, Rocket, Trophy } from "lucide-react";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-3.5 h-3.5" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-3.5 h-3.5" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
    </svg>
  );
}

export function SideProjectsGrid() {
  const projects = [
    {
      name: "Vibe Decoder",
      category: "Human Context AI",
      stage: "Interactive Prototype",
      description: "Decodes tone, personality, culture and relationship dynamics before helping you respond.",
      evidence: "Human Context Layer Built",
      accent: "border-purple-500/40 text-purple-400 bg-purple-500/10",
      github: "https://github.com/terencela",
    },
    {
      name: "Engineering Office OS",
      category: "Enterprise AI",
      stage: "System Design",
      description: "Connects project history, structural decisions, and expertise across engineering offices.",
      evidence: "Vertical RAG & Knowledge Graph",
      accent: "border-blue-500/40 text-blue-400 bg-blue-500/10",
      github: "https://github.com/terencela",
    },
    {
      name: "AirCompanion",
      category: "Aviation AI",
      stage: "Venture Prototype",
      description: "Contextual AI guiding airport passengers before, during and after travel.",
      evidence: "Tested @ Zurich Airport Context",
      accent: "border-cyan-500/40 text-cyan-400 bg-cyan-500/10",
      github: "https://github.com/terencela",
    },
    {
      name: "Rehearse AI",
      category: "Simulation & Roleplay",
      stage: "Working Prototype",
      description: "Practice complex enterprise sales calls & negotiations with realistic AI feedback.",
      evidence: "Interactive Audio Roleplay",
      accent: "border-rose-500/40 text-rose-400 bg-rose-500/10",
      github: "https://github.com/terencela",
    },
    {
      name: "Privacy Layer",
      category: "AI Infrastructure",
      stage: "Swiss nDSG Architecture",
      description: "Control layer for using frontier AI with sensitive enterprise data without raw storage.",
      evidence: "In-Memory PII Masking",
      accent: "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
      github: "https://github.com/terencela",
    },
    {
      name: "GTM AI Studio",
      category: "Growth & Sales Automation",
      stage: "Built & Tested",
      description: "Researches markets, sharpens positioning, and turns insights into automated outbound.",
      evidence: "$1M+ Revenue Generated",
      accent: "border-lime-500/40 text-lime-400 bg-lime-500/10",
      github: "https://github.com/terencela",
    },
  ];

  return (
    <div className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl font-sans my-10 p-6 md:p-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-1">
            <Trophy className="w-4 h-4" />
            <span>RESOURCEFULNESS & RAPID EXECUTION</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight font-sans">
            Relevant Side Projects & Systems Built
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/terencela"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 hover:border-zinc-500 text-xs font-mono text-zinc-300 hover:text-white transition-all"
          >
            <GithubIcon />
            <span>github.com/terencela</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-500" />
          </a>

          <a
            href="https://www.linkedin.com/in/terencela"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 hover:border-zinc-500 text-xs font-mono text-zinc-300 hover:text-white transition-all"
          >
            <LinkedinIcon />
            <span>LinkedIn Profile</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-500" />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((p, idx) => (
          <div
            key={idx}
            className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between space-y-4 group"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className={`px-2 py-0.5 rounded text-[10px] font-mono border ${p.accent}`}>
                  {p.category}
                </span>
                <span className="text-[10px] font-mono text-zinc-500">{p.stage}</span>
              </div>
              <h4 className="text-lg font-bold text-white font-sans group-hover:text-emerald-300 transition-colors">
                {p.name}
              </h4>
              <p className="text-xs text-zinc-400 font-sans mt-2 leading-relaxed">
                {p.description}
              </p>
            </div>

            <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono">
              <span className="text-zinc-500">Proof:</span>
              <span className="text-zinc-300 font-medium">{p.evidence}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
