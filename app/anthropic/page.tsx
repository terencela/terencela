"use client";

import React, { useState } from "react";
import { SubpageHeader } from "@/app/components/shared/SubpageHeader";
import { CareerProofBanner } from "@/app/components/shared/CareerProofBanner";
import { LoomVideoFrame } from "@/app/components/shared/LoomVideoFrame";
import { ClaudeEnterpriseSandbox } from "@/app/components/anthropic/ClaudeEnterpriseSandbox";
import { EnterpriseAdoptionToolkit } from "@/app/components/shared/EnterpriseAdoptionToolkit";
import { SideProjectsGrid } from "@/app/components/shared/SideProjectsGrid";
import { InterviewTeaserModal } from "@/app/components/shared/InterviewTeaserModal";
import { LinkedInCTA } from "@/app/components/shared/LinkedInCTA";
import { ArrowUpRight, Brain, Globe, Building2, Lock } from "lucide-react";

export default function AnthropicPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const blueprintItems = [
    "Conduct deep technical discovery with Swiss C-suite, IT, and legal compliance leaders across banking, aviation, and pharma.",
    "Architect FINMA-compliant and nDSG-validated Claude for Work and Claude API integration patterns.",
    "Develop custom prompt evaluations and benchmark suites that prove Claude's superiority over legacy LLM deployments.",
  ];

  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-amber-500 selection:text-black">
      <SubpageHeader
        companyName="Anthropic"
        roleTitle="Applied AI Architect, Industries (Zurich)"
        accentColor="#d97706"
      />

      {/* SECTION 1: Hero & Candidate Pitch */}
      <section className="relative pt-16 pb-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-widest mb-6">
          <Brain className="w-3.5 h-3.5" />
          <span>Zurich Applied Architect Candidate Dossier</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white max-w-5xl leading-[1.05] mb-6">
          Architecting Safe, High-Impact Claude Deployments for Swiss Enterprise.
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-3xl font-sans leading-relaxed mb-8">
          I am Terence La: Senior Manager AI at Zurich Airport (30M+ passengers/year), 4x Founder, Forbes 30u30 alumni, and Lecturer at ZHAW & FHNW (CAS AI Management). Natively fluent in Swiss German, High German, English, and Cantonese, I guide Swiss enterprise leaders from initial technical evaluation to production rollout of Claude.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm transition-all flex items-center gap-2 shadow-lg shadow-amber-950/50 hover:scale-[1.02]"
          >
            <span>Open 60-Day Claude Integration Blueprint</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <a
            href="https://www.linkedin.com/in/terencela"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-sm transition-all border border-zinc-800 hover:border-zinc-700 flex items-center gap-2"
          >
            <span>LinkedIn Profile</span>
            <ArrowUpRight className="w-4 h-4 text-zinc-500" />
          </a>
        </div>

        <CareerProofBanner />
      </section>

      {/* SECTION 2: Loom Video & Interactive Demo */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto space-y-8">
        <LoomVideoFrame
          companyName="Anthropic"
          roleTitle="Applied AI Architect, Industries (Zurich)"
        />

        <div className="space-y-4 pt-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-1 flex items-center gap-2">
                <Brain className="w-4 h-4" /> SHOW DON&apos;T TELL DEMO #2
              </div>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white font-sans">
                Swiss Enterprise Claude Architecture Sandbox
              </h2>
            </div>
            <p className="text-xs md:text-sm text-zinc-400 max-w-md font-mono">
              Interactive pre-sales sandbox demonstrating FINMA compliance, multi-lingual Swiss DACH support, and prompt evaluation benchmarks.
            </p>
          </div>

          <ClaudeEnterpriseSandbox />
        </div>
      </section>

      {/* SECTION 3: Adoption Framework, Side Projects & Contact */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto space-y-8">
        <div className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
              PRE-SALES & ARCHITECTURE FIT
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mt-2 font-sans">
              The Pre-Sales Architect Who Speaks C-Suite, Developer, and Compliance Natively
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-zinc-300 leading-relaxed font-sans">
            <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-3">
              <div className="text-amber-400 font-mono font-bold text-base flex items-center gap-2">
                <Globe className="w-4 h-4" /> 1. Native DACH Fluency
              </div>
              <p>
                Native Swiss German, High German, and English, with working proficiency in French. As a lecturer at ZHAW & FHNW teaching CAS AI Management & Strategy, I regularly educate Swiss executives on AI architecture, safety, and business transformation.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-3">
              <div className="text-amber-400 font-mono font-bold text-base flex items-center gap-2">
                <Lock className="w-4 h-4" /> 2. Swiss Regulatory & FINMA Depth
              </div>
              <p>
                Having worked management support at the Chairman&apos;s Office of UBS/Credit Suisse and led Interim CAIO initiatives, I understand Swiss Banking Secrecy, nDSG, and EU AI Act constraints inside out.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-3">
              <div className="text-amber-400 font-mono font-bold text-base flex items-center gap-2">
                <Building2 className="w-4 h-4" /> 3. Proven Pre-Sales & Keynote Speaker
              </div>
              <p>
                Over 30 public speaking engagements including World Economic Forum, SAP Innovation Breakfast, and 2 TEDx talks. I build deep trust with enterprise technical teams and C-suite stakeholders quickly.
              </p>
            </div>
          </div>
        </div>

        <EnterpriseAdoptionToolkit
          companyName="Anthropic"
          roleTitle="Applied AI Architect, Industries (Zurich)"
        />

        <SideProjectsGrid />

        <LinkedInCTA companyName="Anthropic" roleTitle="Applied AI Architect, Industries (Zurich)" />
      </section>

      {/* Teaser Modal */}
      <InterviewTeaserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        companyName="Anthropic"
        roleTitle="Applied AI Architect, Industries (Zurich)"
        blueprintItems={blueprintItems}
      />
    </main>
  );
}
