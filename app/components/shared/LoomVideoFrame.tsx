"use client";

import React, { useState } from "react";
import { Play, Sparkles, Clock, CheckCircle2, Volume2, ShieldCheck, Video } from "lucide-react";

interface LoomVideoFrameProps {
  companyName: string;
  roleTitle: string;
  loomUrl?: string; // e.g. "https://www.loom.com/embed/..."
  videoTitle?: string;
}

export function LoomVideoFrame({
  companyName,
  roleTitle,
  loomUrl,
  videoTitle = `Why Terence La is the Ideal Fit for ${companyName} (${roleTitle})`,
}: LoomVideoFrameProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);

  const chapters = [
    {
      time: "0:00 - 0:25",
      title: "The Unconventional Fit",
      desc: "Senior Manager AI @ Zurich Airport + 4x Founder bridging code, strategy & C-suite trust.",
    },
    {
      time: "0:25 - 0:55",
      title: "Show Don't Tell: Swiss AI Deployment",
      desc: "Architecting AI voice & call centers for 30M+ passengers under strict Swiss nDSG data laws.",
    },
    {
      time: "0:55 - 1:30",
      title: "Day 1 Value for Zurich",
      desc: "How I accelerate adoption rates, run structured evals, and close enterprise technical gaps.",
    },
  ];

  return (
    <div className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl font-sans my-8">
      {/* Top Video Bar */}
      <div className="bg-zinc-900/90 px-5 py-3.5 border-b border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-400">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping inline-block" />
          <span className="text-white font-bold flex items-center gap-1.5">
            <Video className="w-3.5 h-3.5 text-emerald-400" />
            90-SECOND VIDEO PITCH
          </span>
        </div>
        <div className="flex items-center gap-3 text-zinc-500 text-[11px]">
          <span>Loom Pitch ID: ZRH-{companyName.toUpperCase()}-2026</span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline text-emerald-400">Zurich, CH</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Video Player Column (7 cols) */}
        <div className="lg:col-span-7 bg-black relative min-h-[320px] md:min-h-[400px] flex items-center justify-center border-b lg:border-b-0 lg:border-r border-zinc-800 group">
          {loomUrl && isPlaying ? (
            <iframe
              src={loomUrl}
              className="w-full h-full absolute inset-0 border-0"
              allowFullScreen
              title={videoTitle}
            />
          ) : (
            <div className="relative w-full h-full p-8 flex flex-col justify-between bg-gradient-to-br from-zinc-900 via-black to-zinc-950">
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-radial-at-c from-emerald-500/10 via-transparent to-transparent pointer-events-none" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full bg-zinc-800/80 border border-zinc-700 text-zinc-300 text-[10px] font-mono flex items-center gap-1">
                  <Clock className="w-3 h-3 text-emerald-400" /> 1 MIN 30 SEC
                </span>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono">
                  EXECUTIVE BRIEF
                </span>
              </div>

              {/* Center Play CTA */}
              <div className="relative z-10 my-auto text-center py-8">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black flex items-center justify-center mx-auto transition-transform duration-300 hover:scale-110 shadow-2xl shadow-emerald-500/30 group-hover:shadow-emerald-500/50"
                  aria-label="Play video pitch"
                >
                  <Play className="w-7 h-7 md:w-9 md:h-9 fill-current translate-x-0.5" />
                </button>
                <h4 className="text-lg md:text-xl font-bold text-white mt-4 font-sans tracking-tight">
                  {videoTitle}
                </h4>
                <p className="text-xs text-zinc-400 font-mono mt-1">
                  Click to watch Terence&apos;s direct video intro for the {roleTitle} position
                </p>
              </div>

              <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-zinc-500 border-t border-zinc-800/80 pt-3">
                <span className="flex items-center gap-1">
                  <Volume2 className="w-3.5 h-3.5 text-zinc-400" /> HD Audio & Subtitles
                </span>
                <span className="text-zinc-400">Terence La (Senior Manager AI @ ZRH)</span>
              </div>
            </div>
          )}
        </div>

        {/* Interactive Chapters & Context Column (5 cols) */}
        <div className="lg:col-span-5 p-6 bg-zinc-950 flex flex-col justify-between space-y-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3 flex items-center justify-between">
              <span>Video Chapter Index</span>
              <span className="text-emerald-400 text-[10px]">3 Key Moments</span>
            </div>

            <div className="space-y-3">
              {chapters.map((ch, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveChapter(idx);
                    setIsPlaying(true);
                  }}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                    activeChapter === idx
                      ? "bg-zinc-900 border-emerald-500/50 shadow-md"
                      : "bg-zinc-900/40 border-zinc-800 hover:border-zinc-700"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono mb-1">
                    <span className="text-emerald-400 font-bold">{ch.time}</span>
                    <span className="text-zinc-500 text-[10px]">Chapter 0{idx + 1}</span>
                  </div>
                  <div className="text-sm font-bold text-white font-sans">{ch.title}</div>
                  <p className="text-xs text-zinc-400 font-sans mt-1 leading-relaxed">
                    {ch.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 font-mono space-y-1.5">
            <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Direct Swiss Market Context</span>
            </div>
            <p className="text-[11px] text-zinc-400 font-sans leading-relaxed">
              &quot;I created this video specifically to address why my polymath engineering + GTM background solves {companyName}&apos;s Swiss enterprise adoption challenges.&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
