"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Clock3 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT } from "@/app/lib/motion";

interface LoomVideoFrameProps {
  companyName: string;
  roleTitle: string;
  loomUrl?: string;
  videoTitle?: string;
  accentColor?: string;
}

export function LoomVideoFrame({
  companyName,
  roleTitle,
  loomUrl,
  videoTitle = `Why I am the right fit for ${companyName}`,
  accentColor = "#10a37f",
}: LoomVideoFrameProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);
  const reduceMotion = useReducedMotion();

  const chapters = [
    {
      time: "0:00",
      title: "The unconventional fit",
      desc: "Senior Manager AI at Zurich Airport with founder-level build speed.",
    },
    {
      time: "0:25",
      title: "Swiss AI deployment",
      desc: "30M passengers/year under strict data constraints.",
    },
    {
      time: "0:55",
      title: "Day 1 value for Zurich",
      desc: "Structured evals, adoption velocity, implementation gaps closed.",
    },
  ];

  return (
    <motion.div
      className="dossier-loom-panel overflow-hidden"
      initial={reduceMotion ? false : { opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: EASE_OUT }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="relative min-h-[300px] border-b border-[var(--dossier-line-strong)] bg-[#f5f5f2] lg:col-span-7 lg:min-h-[400px] lg:border-b-0 lg:border-r">
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
                className="object-cover object-top opacity-80"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(165deg, rgba(250,250,248,0.15), rgba(250,250,248,0.92) 72%), radial-gradient(circle at 20% 15%, ${accentColor}22, transparent 50%)`,
                }}
              />

              <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-8">
                <div className="flex items-center gap-3 text-xs text-[var(--dossier-muted)]">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock3 className="h-3.5 w-3.5" style={{ color: accentColor }} />
                    90 seconds
                  </span>
                </div>

                <div className="py-6">
                  <h4 className="max-w-lg text-xl font-semibold tracking-tight text-[var(--dossier-ink)] md:text-2xl">
                    {videoTitle}
                  </h4>
                  <p className="mt-2 text-sm text-[var(--dossier-body)]">
                    A direct pitch for the {roleTitle} role in Zurich.
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
        </div>

        <div className="flex flex-col justify-center bg-[#faf8f4] p-6 lg:col-span-5 lg:p-8">
          <p className="mb-4 text-sm text-[var(--dossier-muted)]">Video chapters</p>
          <div className="space-y-2">
            {chapters.map((ch, idx) => (
              <button
                key={ch.title}
                type="button"
                onClick={() => {
                  setActiveChapter(idx);
                  setIsPlaying(true);
                }}
                className={`dossier-pressable w-full border px-4 py-3.5 text-left transition-colors ${
                  activeChapter === idx
                    ? "border-[var(--dossier-line-strong)] bg-white"
                    : "border-transparent bg-transparent hover:bg-white/70"
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
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
