"use client";

import React, { useState } from "react";
import {
  Lock,
  BarChart3,
  FileCode2,
  Users,
} from "lucide-react";
import type { AdoptionPillar, AdoptionUseCase } from "@/app/lib/dossier-config";

const pillarIcons = [BarChart3, Lock, FileCode2, Users];

interface EnterpriseAdoptionToolkitProps {
  title: string;
  subtitle: string;
  adoptionPillars: AdoptionPillar[];
  useCases: AdoptionUseCase[];
  accentColor?: string;
}

export function EnterpriseAdoptionToolkit({
  title,
  subtitle,
  adoptionPillars,
  useCases,
  accentColor = "#10a37f",
}: EnterpriseAdoptionToolkitProps) {
  const [activeTab, setActiveTab] = useState<"framework" | "case_analysis">("framework");

  return (
    <div className="my-10 w-full overflow-hidden rounded-3xl border border-zinc-800 bg-[#080d18]/90 shadow-[0_24px_80px_rgba(2,6,23,0.65)]">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800 bg-[#0a0f1d] px-6 py-4">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <span
              className="rounded-full border px-2.5 py-0.5 text-[10px] uppercase tracking-[0.14em]"
              style={{
                borderColor: `${accentColor}66`,
                color: accentColor,
                backgroundColor: `${accentColor}14`,
              }}
            >
              Method
            </span>
          </div>
          <p className="mt-0.5 text-xs text-zinc-400">{subtitle}</p>
        </div>

        <div className="flex rounded-xl border border-zinc-800 bg-[#040912] p-1 text-xs">
          <button
            onClick={() => setActiveTab("framework")}
            className={`px-3 py-1.5 rounded-md transition-all ${
              activeTab === "framework"
                ? "text-[#05070d] font-semibold"
                : "text-zinc-400 hover:text-white"
            }`}
            style={activeTab === "framework" ? { backgroundColor: accentColor } : undefined}
          >
            Core patterns
          </button>
          <button
            onClick={() => setActiveTab("case_analysis")}
            className={`px-3 py-1.5 rounded-md transition-all ${
              activeTab === "case_analysis"
                ? "text-[#05070d] font-semibold"
                : "text-zinc-400 hover:text-white"
            }`}
            style={activeTab === "case_analysis" ? { backgroundColor: accentColor } : undefined}
          >
            DACH scenarios
          </button>
        </div>
      </div>

      <div className="bg-[#070b15] p-6 md:p-8">
        {activeTab === "framework" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {adoptionPillars.map((pillar, index) => {
              const Icon = pillarIcons[index % pillarIcons.length];
              return (
                <div
                  key={pillar.title}
                  className="space-y-3 rounded-2xl border border-zinc-800 bg-[#0a0f1d]/85 p-5 transition-colors hover:border-zinc-700"
                >
                  <div className="flex items-center gap-2.5 text-sm font-semibold">
                    <Icon className="w-4 h-4" />
                    <span style={{ color: accentColor }}>{pillar.title}</span>
                  </div>
                  <p className="text-xs leading-relaxed text-zinc-400">{pillar.desc}</p>
                  <div className="space-y-1 border-t border-zinc-800 pt-2 text-[11px] text-zinc-400">
                    <span className="block font-medium" style={{ color: accentColor }}>
                      My proof
                    </span>
                    <span>{pillar.howTerenceSolves}</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="space-y-4">
            <div className="mb-2 text-xs uppercase tracking-[0.18em] text-zinc-500">
              Where accounts get stuck
            </div>
            {useCases.map((uc) => (
              <div
                key={uc.industry}
                className="space-y-2 rounded-2xl border border-zinc-800 bg-[#0a0f1d]/85 p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-white">{uc.industry}</span>
                  <span
                    className="rounded-full border px-2.5 py-0.5 text-[11px]"
                    style={{
                      borderColor: `${accentColor}66`,
                      color: accentColor,
                      backgroundColor: `${accentColor}14`,
                    }}
                  >
                    {uc.adoptionImpact}
                  </span>
                </div>
                <div className="text-xs text-zinc-400">
                  <strong className="text-zinc-300">Blocker:</strong> {uc.friction}
                </div>
                <div className="text-xs text-zinc-300">
                  <strong style={{ color: accentColor }}>How I unblock:</strong> {uc.solution}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
