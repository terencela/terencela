"use client";

import React from "react";
import { X, CheckCircle2, ShieldCheck, Mail } from "lucide-react";

interface InterviewTeaserModalProps {
  isOpen: boolean;
  onClose: () => void;
  companyName: string;
  roleTitle: string;
  blueprintItems: string[];
  pitch: string;
  pitchSub: string;
  blueprintLabel?: string;
  accentColor?: string;
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
  pitch,
  pitchSub,
  blueprintLabel = "First 90 days",
  accentColor = "#10a37f",
}: InterviewTeaserModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-zinc-800 bg-[#070c16] p-6 text-left shadow-[0_28px_90px_rgba(0,0,0,0.7)] md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div
          className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.17em]"
          style={{ color: accentColor }}
        >
          <ShieldCheck className="w-4 h-4" />
          <span>Why me for {companyName}</span>
        </div>

        <h3 className="mb-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">
          {roleTitle}
        </h3>

        <p className="mb-3 text-sm leading-relaxed text-zinc-300">{pitch}</p>
        <p className="mb-6 text-sm leading-relaxed text-zinc-400">{pitchSub}</p>

        <div className="space-y-3 mb-8">
          <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">{blueprintLabel}</p>
          {blueprintItems.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-900/60 p-3">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: accentColor }} />
              <span className="text-xs leading-relaxed text-zinc-300">{item}</span>
            </div>
          ))}
        </div>

        <div
          className="flex flex-col items-center justify-between gap-4 rounded-2xl border bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-900 p-4 sm:flex-row"
          style={{ borderColor: `${accentColor}55` }}
        >
          <div>
            <div className="text-sm font-bold text-white">Ready for the deep dive?</div>
            <div className="text-xs text-zinc-400">Terence La · Zurich, Switzerland</div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href="https://www.linkedin.com/in/terencela"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold text-[#05070d] transition-transform duration-200 hover:-translate-y-0.5"
              style={{
                backgroundColor: accentColor,
                boxShadow: `0 10px 35px ${accentColor}45`,
              }}
            >
              <LinkedInIcon />
              <span>Connect on LinkedIn</span>
            </a>
            <a
              href={`mailto:terencela93@gmail.com?subject=Interview%20-%20Terence%20La%20-%20${encodeURIComponent(companyName)}`}
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
