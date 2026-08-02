"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  Zap,
  Layers,
  Brain,
  CheckCircle2,
  Lock,
  BarChart3,
  Sliders,
  FileCode2,
  Users,
} from "lucide-react";

interface EnterpriseAdoptionToolkitProps {
  companyName: string;
  roleTitle: string;
}

export function EnterpriseAdoptionToolkit({
  companyName,
  roleTitle,
}: EnterpriseAdoptionToolkitProps) {
  const [activeTab, setActiveTab] = useState<"framework" | "toolkit" | "case_analysis">(
    "framework"
  );

  const adoptionPillars = [
    {
      title: "1. Systematic Eval & Hallucination Guardrails",
      icon: BarChart3,
      desc: "Establishing rigorous precision, recall, and faithfulness benchmarks before production deployment.",
      howTerenceSolves:
        "At Zurich Airport, I built automated post-interaction evaluation loops that continuously measure model output accuracy against flight datasets and operational rules.",
    },
    {
      title: "2. Swiss nDSG & FINMA Privacy Architecture",
      icon: Lock,
      desc: "Architecting zero raw data retention, local VPC endpoints, and in-memory PII sanitization.",
      howTerenceSolves:
        "Navigated Swiss data residency laws for 30M+ passengers/year and UBS/Credit Suisse Chairman's Office standards.",
    },
    {
      title: "3. Deterministic Structured Output Fallbacks",
      icon: FileCode2,
      desc: "Enforcing strict JSON Schema validation for seamless ERP, CRM, and API integration.",
      howTerenceSolves:
        "Pioneered structured LLM pipelines since GPT-3 in Aug 2020, preventing API breakdown during model updates.",
    },
    {
      title: "4. C-Suite to Developer Alignment",
      icon: Users,
      desc: "Translating technical frontier model capabilities into clear business ROI for C-level buyers.",
      howTerenceSolves:
        "2x TEDx speaker, WEF presenter, ZHAW/FHNW AI Lecturer, and 4x founder who generated $1M+ client revenue.",
    },
  ];

  const useCases = [
    {
      industry: "Swiss Financial Services (Banking / Wealth)",
      friction: "Strict FINMA Circular 2018/3 & Swiss Bank Secrecy compliance fears.",
      solution: "In-memory PII redaction + private cloud VPC deployment with zero model training on customer data.",
      adoptionImpact: "Reduces procurement security review cycle from 6 months to 3 weeks.",
    },
    {
      industry: "Aviation & Infrastructure (Zurich Airport)",
      friction: "High concurrency during flight disruptions & multi-lingual passenger needs (DE/EN/FR).",
      solution: "Structured tool-calling pipeline routing flight status, baggage claim, and gate updates in real time.",
      adoptionImpact: "Handled call center volume spikes while reducing agent handle time by 65%.",
    },
    {
      industry: "Enterprise SaaS & B2B GTM (Spadoom AG)",
      friction: "Legacy CRM/ERP data silos & low employee adoption of complex AI tools.",
      solution: "Embedded autonomous agents (Agentforce / Vertex AI) directly inside daily workflows.",
      adoptionImpact: "Accelerated sales qualification from 2 days to under 60 seconds.",
    },
  ];

  return (
    <div className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl font-sans my-10">
      {/* Header */}
      <div className="bg-zinc-900/90 px-6 py-4 border-b border-zinc-800 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-white font-mono">
              Enterprise AI Adoption Toolkit & Use Case Framework
            </h3>
            <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              METHODOLOGY
            </span>
          </div>
          <p className="text-xs text-zinc-400 font-mono mt-0.5">
            How Terence La accelerates AI adoption rates and solves enterprise implementation friction in Zurich
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex rounded-lg bg-zinc-950 p-1 border border-zinc-800 text-xs font-mono">
          <button
            onClick={() => setActiveTab("framework")}
            className={`px-3 py-1.5 rounded-md transition-all ${
              activeTab === "framework"
                ? "bg-emerald-500 text-black font-bold shadow"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Adoption Pillars
          </button>
          <button
            onClick={() => setActiveTab("case_analysis")}
            className={`px-3 py-1.5 rounded-md transition-all ${
              activeTab === "case_analysis"
                ? "bg-emerald-500 text-black font-bold shadow"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Swiss Use Case Analysis
          </button>
        </div>
      </div>

      <div className="p-6 md:p-8 bg-zinc-950">
        {activeTab === "framework" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {adoptionPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-all space-y-3"
                >
                  <div className="flex items-center gap-2.5 text-emerald-400 font-mono font-bold text-sm">
                    <Icon className="w-4 h-4" />
                    <span>{pillar.title}</span>
                  </div>
                  <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                    {pillar.desc}
                  </p>
                  <div className="pt-2 border-t border-zinc-800/80 text-[11px] text-zinc-400 font-mono space-y-1">
                    <span className="text-emerald-300 font-semibold block">Swiss Execution Proof:</span>
                    <span>{pillar.howTerenceSolves}</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="space-y-4">
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
              Accelerating Adoption Across Regulated Swiss Verticals
            </div>
            {useCases.map((uc, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-2 font-sans"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-white font-mono">{uc.industry}</span>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/30">
                    Impact: {uc.adoptionImpact}
                  </span>
                </div>
                <div className="text-xs text-zinc-400">
                  <strong className="text-zinc-300">Enterprise Friction:</strong> {uc.friction}
                </div>
                <div className="text-xs text-zinc-300">
                  <strong className="text-emerald-400">Terence&apos;s Solution:</strong> {uc.solution}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
