"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Clock3 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import {
  dossierLoomChapterItem,
  dossierLoomChapterStagger,
  dossierLoomVideo,
} from "@/app/lib/motion";
import { useDossierTheme } from "@/app/lib/dossier-theme";

interface LoomVideoFrameProps {
  companyName: string;
  roleTitle: string;
  loomUrl?: string;
  videoTitle?: string;
  accentColor?: string;
  showChapters?: boolean;
  chapters?: Array<{
    time: string;
    title: string;
    desc: string;
  }>;
}

export function LoomVideoFrame({
  companyName,
  roleTitle,
  loomUrl,
  videoTitle = `Why I am the right fit for ${companyName}`,
  accentColor = "#10a37f",
  showChapters = true,
  chapters,
}: LoomVideoFrameProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);
  const reduceMotion = useReducedMotion();
  const { theme } = useDossierTheme();
  const isDark = theme === "dark";

  const defaultChapters = [
    {
      time: "0:00",
      title: "The unconventional fit",
      desc: "AI Lead at Zurich Airport. I create apps and ship them inside the company.",
    },
    {
      time: "0:25",
      title: "Swiss AI deployment",
      desc: "32M+ passengers/year. nDSG and ops constraints from day one.",
    },
    {
      time: "0:55",
      title: "Day 1 value for Zurich",
      desc: "Evals, handoffs, and what I'd do in week one on a Zurich account.",
    },
  ];
  const chapterItems = chapters ?? defaultChapters;

  if (!showChapters) {
    return (
      <div className="dossier-loom-panel overflow-hidden">
        <motion.div
          className={`relative ${isDark ? "bg-[#101116]" : "bg-[#f5f5f2]"}`}
          {...(reduceMotion ? {} : dossierLoomVideo)}
        >
          {loomUrl && isPlaying ? (
            <div className="relative mx-auto w-full max-w-[900px]">
              <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
                <iframe
                  src={loomUrl}
                  className="absolute inset-0 h-full w-full border-0"
                  allowFullScreen
                  title={videoTitle}
                />
              </div>
            </div>
          ) : (
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16 / 9", maxHeight: "480px" }}>
              <Image
                src="/images/terence-la-profile.png"
                alt="Terence La"
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className={`dossier-profile-photo object-cover object-[center_18%] ${isDark ? "opacity-58" : "opacity-70"}`}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: isDark
                    ? `linear-gradient(165deg, rgba(10,11,15,0.12) 0%, rgba(10,11,15,0.74) 68%), radial-gradient(circle at 20% 15%, ${accentColor}22, transparent 52%)`
                    : `linear-gradient(165deg, rgba(250,250,248,0.35) 0%, rgba(250,250,248,0.88) 68%), radial-gradient(circle at 20% 15%, ${accentColor}18, transparent 52%)`,
                }}
              />
              <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-8">
                <div className="flex items-center gap-3 text-xs font-medium" style={{ color: accentColor }}>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock3 className="h-3.5 w-3.5" />
                    90 seconds
                  </span>
                </div>
                <div className="py-6">
                  <h4 className="max-w-lg text-xl font-semibold tracking-tight text-[var(--dossier-ink)] md:text-2xl">
                    {videoTitle}
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  className="dossier-pressable inline-flex h-14 w-14 items-center justify-center rounded-full md:h-16 md:w-16"
                  style={{
                    backgroundColor: accentColor,
                    color: "#1a1a1a",
                    boxShadow: `0 14px 48px ${accentColor}44`,
                  }}
                  aria-label="Play video pitch"
                >
                  <Play className="h-6 w-6 translate-x-0.5 fill-current md:h-7 md:w-7" />
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="dossier-loom-panel overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div
          className={`relative min-h-[300px] border-b border-[var(--dossier-line-strong)] lg:col-span-7 lg:min-h-[400px] lg:border-b-0 lg:border-r ${
            isDark ? "bg-[#101116]" : "bg-[#f5f5f2]"
          }`}
          {...(reduceMotion ? {} : dossierLoomVideo)}
        >
          {loomUrl && isPlaying ? (
            <iframe
              src={loomUrl}
              className="absolute inset-0 h-full w-full border-0"
              allowFullScreen
              title={videoTitle}
            />
          ) : (
            <div className="relative h-full min-h-[300px] w-full overflow-hidden lg:min-h-[400px]">
              <Image
                src="/images/terence-la-profile.png"
                alt="Terence La"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className={`dossier-profile-photo object-cover object-[center_18%] ${isDark ? "opacity-58" : "opacity-70"}`}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: isDark
                    ? `linear-gradient(165deg, rgba(10,11,15,0.12) 0%, rgba(10,11,15,0.74) 68%), radial-gradient(circle at 20% 15%, ${accentColor}22, transparent 52%)`
                    : `linear-gradient(165deg, rgba(250,250,248,0.35) 0%, rgba(250,250,248,0.88) 68%), radial-gradient(circle at 20% 15%, ${accentColor}18, transparent 52%)`,
                }}
              />
              <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-8">
                <div className="flex items-center gap-3 text-xs font-medium" style={{ color: accentColor }}>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock3 className="h-3.5 w-3.5" />
                    90 seconds
                  </span>
                </div>
                <div className="py-6">
                  <h4 className="max-w-lg text-xl font-semibold tracking-tight text-[var(--dossier-ink)] md:text-2xl">
                    {videoTitle}
                  </h4>
                  <p className="mt-2 text-sm text-[var(--dossier-body)]">
                    Overview for the {roleTitle} role in Zurich.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  className="dossier-pressable inline-flex h-14 w-14 items-center justify-center rounded-full md:h-16 md:w-16"
                  style={{
                    backgroundColor: accentColor,
                    color: "#1a1a1a",
                    boxShadow: `0 14px 48px ${accentColor}44`,
                  }}
                  aria-label="Play video pitch"
                >
                  <Play className="h-6 w-6 translate-x-0.5 fill-current md:h-7 md:w-7" />
                </button>
              </div>
            </div>
          )}
        </motion.div>

        <div
          className={`flex flex-col justify-center p-6 lg:col-span-5 lg:p-8 ${
            isDark ? "bg-[#0f1014]" : "bg-[#faf8f4]"
          }`}
        >
          <p className="mb-4 text-sm text-[var(--dossier-muted)]">Video chapters</p>
          <motion.div
            className="space-y-2"
            variants={reduceMotion ? undefined : dossierLoomChapterStagger}
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {chapterItems.map((ch, idx) => (
              <motion.button
                key={ch.title}
                type="button"
                variants={reduceMotion ? undefined : dossierLoomChapterItem}
                onClick={() => {
                  setActiveChapter(idx);
                  setIsPlaying(true);
                }}
                className={`dossier-pressable w-full border px-4 py-3.5 text-left transition-colors ${
                  activeChapter === idx
                    ? isDark
                      ? "border-[#2e313a] bg-[#1b1d25] shadow-sm"
                      : "border-[var(--dossier-line-strong)] bg-white shadow-sm"
                    : isDark
                      ? "border-transparent bg-transparent hover:bg-[#171920]"
                      : "border-[var(--dossier-line)] bg-white/40 hover:bg-white/80"
                }`}
                style={
                  activeChapter === idx
                    ? { borderLeftColor: accentColor, borderLeftWidth: 3 }
                    : undefined
                }
              >
                <div className="mb-1 flex items-baseline gap-3 text-xs">
                  <span style={{ color: accentColor }}>{ch.time}</span>
                  <span className="font-medium text-[var(--dossier-ink)]">{ch.title}</span>
                </div>
                <p className="text-xs leading-relaxed text-[var(--dossier-muted)]">{ch.desc}</p>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
