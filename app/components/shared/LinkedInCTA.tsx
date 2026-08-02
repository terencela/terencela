"use client";

import React from "react";
import { Mail, ArrowUpRight, MessageSquare } from "lucide-react";

interface LinkedInCTAProps {
  companyName: string;
  roleTitle: string;
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
    </svg>
  );
}

export function LinkedInCTA({ companyName, roleTitle }: LinkedInCTAProps) {
  return (
    <section className="w-full py-16 px-4 md:px-8 border-t border-zinc-800/80 bg-zinc-950">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-4">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Next Step · Zurich Interview</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Let&apos;s talk about building {companyName}&apos;s Zurich footprint.
        </h2>

        <p className="text-base text-zinc-400 max-w-2xl mx-auto mb-8 font-sans leading-relaxed">
          I am currently in Zurich and actively speaking with teams for the {roleTitle} position. Connect with me on LinkedIn or send an email to discuss technical architecture, enterprise execution, and GTM strategy.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/terencela"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm transition-all flex items-center gap-2 shadow-lg shadow-emerald-950/50 hover:scale-[1.02]"
          >
            <LinkedInIcon />
            <span>Connect on LinkedIn</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href="mailto:terencela93@gmail.com?subject=Terence%20La%20-%20"
            className="px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-sm transition-all border border-zinc-700 hover:border-zinc-500 flex items-center gap-2"
          >
            <Mail className="w-4 h-4 text-zinc-400" />
            <span>terencela93@gmail.com</span>
          </a>
        </div>

        <div className="mt-8 text-xs font-mono text-zinc-500 flex items-center justify-center gap-3">
          <span>Swiss Citizen</span>
          <span>·</span>
          <span>Based in Zurich</span>
          <span>·</span>
          <span>Notice Period: Immediate / Flexible</span>
        </div>
      </div>
    </section>
  );
}
