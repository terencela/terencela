"use client";

import React from "react";
import { X, CheckCircle2, ShieldCheck, Mail } from "lucide-react";

interface InterviewTeaserModalProps {
  isOpen: boolean;
  onClose: () => void;
  companyName: string;
  roleTitle: string;
  blueprintItems: string[];
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
    </svg>
  );
}

export function InterviewTeaserModal({
  isOpen,
  onClose,
  companyName,
  roleTitle,
  blueprintItems,
}: InterviewTeaserModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-2xl p-6 md:p-8 shadow-2xl overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">
          <ShieldCheck className="w-4 h-4" />
          <span>Gated Candidate Brief</span>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold font-sans text-white tracking-tight mb-2">
          The First Step: {companyName} {roleTitle}
        </h3>

        <p className="text-sm text-zinc-400 font-sans leading-relaxed mb-6">
          Here is a teaser of what I will bring to {companyName} in Zurich from Day 1. If this aligns with your team&apos;s goals, let&apos;s schedule a 20-minute conversation.
        </p>

        <div className="space-y-3 mb-8">
          <p className="text-xs font-mono uppercase tracking-wider text-zinc-500">
            Initial 60-Day Strategic Focus:
          </p>
          {blueprintItems.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
              <span className="text-xs text-zinc-300 font-mono leading-relaxed">{item}</span>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/40 via-zinc-900 to-zinc-900 border border-emerald-800/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-sm font-bold text-white">Ready for the deep dive?</div>
            <div className="text-xs text-zinc-400">Direct access to Terence La (Zurich, CH)</div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href="https://www.linkedin.com/in/terencela"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs transition-all flex items-center gap-2 shadow-lg shadow-emerald-950"
            >
              <LinkedInIcon />
              <span>Connect on LinkedIn</span>
            </a>
            <a
              href="mailto:terencela93@gmail.com?subject=Interview%20Invitation%20-%20Terence%20La"
              className="px-3 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-medium text-xs transition-all border border-zinc-700 flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4 text-zinc-400" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
