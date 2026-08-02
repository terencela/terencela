"use client";

import React, { useState } from "react";
import {
  Lock,
  BarChart3,
  FileCode2,
  Users,
} from "lucide-react";

interface EnterpriseAdoptionToolkitProps {
  companyName: string;
  roleTitle: string;
  accentColor?: string;
}

export function EnterpriseAdoptionToolkit({
  companyName,
  roleTitle,
  accentColor = "#10a37f",
}: EnterpriseAdoptionToolkitProps) {
  const [activeTab, setActiveTab] = useState<"framework" | "case_analysis">("framework");

  const adoptionPillars = [
    {
      title: "Systematic eval and quality guardrails",
      icon: BarChart3,
      desc: "Set measurable precision, recall, and faithfulness targets before rollout.",
      howTerenceSolves:
        "Built post-interaction evaluation loops at Zurich Airport to measure output quality against operational ground truth.",
    },
    {
      title: "Swiss privacy architecture that ships",
      icon: Lock,
      desc: "Design data handling around least exposure, strong auditability, and local constraints.",
      howTerenceSolves:
        "Applied nDSG-conscious standards in high-volume environments with executive visibility.",
    },
    {
      title: "Structured output and fallback reliability",
      icon: FileCode2,
      desc: "Protect integrations with schema validation, fallback chains, and deterministic parsing.",
      howTerenceSolves:
        "Long-term production experience with structured LLM pipelines to avoid API regressions.",
    },
    {
      title: "C-suite to developer alignment",
      icon: Users,
      desc: "Translate technical options into business-impact decisions teams can commit to.",
      howTerenceSolves:
        "Founder and enterprise leadership background that connects architecture detail with executive outcomes.",
    },
  ];

  const useCases = [
    {
      industry: "Swiss Financial Services (Banking / Wealth)",
      friction: "High compliance friction and long procurement cycles.",
      solution:
        "In-memory sanitization, controlled access architecture, and explicit deployment governance.",
      adoptionImpact: "Shorter security review path and faster technical sign-off.",
    },
    {
      industry: "Aviation & Infrastructure (Zurich Airport)",
      friction: "High concurrency events with multilingual service pressure.",
      solution:
        "Structured tool-calling and routing for status, baggage, and gate operations in real time.",
      adoptionImpact: "Stable customer support behavior during disruption peaks.",
    },
    {
      industry: "Enterprise SaaS and B2B GTM",
      friction: "Siloed systems and low internal adoption.",
      solution: "Embed AI where teams already work instead of forcing new parallel interfaces.",
      adoptionImpact: "Lower onboarding friction and better early retention.",
    },
  ];

  return (
    <div className="my-10 w-full overflow-hidden rounded-3xl border border-zinc-800 bg-[#080d18]/90 shadow-[0_24px_80px_rgba(2,6,23,0.65)]">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800 bg-[#0a0f1d] px-6 py-4">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-white">
              Enterprise adoption toolkit
            </h3>
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
          <p className="mt-0.5 text-xs text-zinc-400">
            Framework for turning AI pilots into sustained enterprise usage for {companyName} ({roleTitle}).
          </p>
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
            Adoption Pillars
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
            Swiss Use Cases
          </button>
        </div>
      </div>

      <div className="bg-[#070b15] p-6 md:p-8">
        {activeTab === "framework" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {adoptionPillars.map((pillar) => {
              const Icon = pillar.icon;
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
                      Execution proof
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
              Adoption friction by vertical
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
                  <strong className="text-zinc-300">Friction:</strong> {uc.friction}
                </div>
                <div className="text-xs text-zinc-300">
                  <strong style={{ color: accentColor }}>Solution:</strong> {uc.solution}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
