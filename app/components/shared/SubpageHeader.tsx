"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, MapPin } from "lucide-react";

interface SubpageHeaderProps {
  companyName: string;
  roleTitle: string;
  accentColor: string; // e.g. "#10a37f" for OpenAI, "#d97706" for Anthropic, "#4285f4" for Google, "#00a1e0" for Salesforce
  badgeText?: string;
}

export function SubpageHeader({
  companyName,
  roleTitle,
  accentColor,
  badgeText = "ZURICH CANDIDATE DOSSIER",
}: SubpageHeaderProps) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/80 border-b border-white/10 px-4 md:px-8 py-3.5 flex items-center justify-between text-sm">
      <div className="flex items-center gap-3">
        <Link
          href="/"
          className="font-mono font-bold tracking-widest text-xs text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5"
        >
          <span>TERENCE LA</span>
          <span className="text-zinc-600">/</span>
        </Link>
        <div
          className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wider flex items-center gap-1.5 border"
          style={{
            backgroundColor: `${accentColor}15`,
            borderColor: `${accentColor}40`,
            color: accentColor,
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ backgroundColor: accentColor }}
          />
          {companyName.toUpperCase()} · {roleTitle}
        </div>
      </div>

      <div className="hidden sm:flex items-center gap-4 text-xs font-mono text-zinc-400">
        <div className="flex items-center gap-1 text-zinc-300">
          <MapPin className="w-3.5 h-3.5 text-zinc-400" />
          <span>Zurich, Switzerland</span>
        </div>
        <div className="flex items-center gap-1 text-emerald-400">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>nDSG & Swiss Compliant</span>
        </div>
        <a
          href="https://www.linkedin.com/in/terencela"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-zinc-800 hover:bg-zinc-700 text-white font-sans font-medium transition-all border border-zinc-700 hover:border-zinc-500"
        >
          <span>LinkedIn</span>
          <ArrowUpRight className="w-3 h-3 text-zinc-400" />
        </a>
      </div>
    </header>
  );
}
