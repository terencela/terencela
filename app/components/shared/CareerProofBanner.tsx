"use client";

import React from "react";
import { Award, Cpu, Globe, Building2, Sparkles, Trophy } from "lucide-react";

export function CareerProofBanner() {
  const proofs = [
    {
      icon: Building2,
      stat: "30M+",
      label: "Passengers/Year AI System",
      sub: "AI Lead @ Zurich Airport",
    },
    {
      icon: Cpu,
      stat: "Aug 2020",
      label: "LLM Pioneer",
      sub: "Building with GPT-3 since v1",
    },
    {
      icon: Trophy,
      stat: "19+",
      label: "Hackathon & Tech Awards",
      sub: "3rd @ HackZurich · Bain 1st",
    },
    {
      icon: Award,
      stat: "Top 30",
      label: "Forbes 30 under 30",
      sub: "Swiss Citizen · M.A. HSG",
    },
    {
      icon: Sparkles,
      stat: "2x TEDx",
      label: "Keynote Speaker",
      sub: "WEF Speaker · 2M+ Views",
    },
    {
      icon: Globe,
      stat: "4 Languages",
      label: "Native CH-DE, EN, Canto",
      sub: "Intermediate FR & Mandarin",
    },
  ];

  return (
    <div className="w-full bg-zinc-950/80 border-y border-zinc-800/80 my-10 py-6 px-4 md:px-8 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <p className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
          VERIFIED TRACK RECORD & CREDENTIALS
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {proofs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all hover:bg-zinc-900/90 group"
              >
                <div className="flex items-center gap-2 text-zinc-400 group-hover:text-white transition-colors mb-1.5">
                  <Icon className="w-4 h-4 text-emerald-400" />
                  <span className="text-[10px] font-mono tracking-wider uppercase text-zinc-400">
                    {item.label}
                  </span>
                </div>
                <div className="text-xl md:text-2xl font-bold font-mono tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                  {item.stat}
                </div>
                <div className="text-[11px] text-zinc-500 font-sans mt-0.5 truncate">
                  {item.sub}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
