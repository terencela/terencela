"use client";

import React, { useState } from "react";
import { SubpageHeader } from "@/app/components/shared/SubpageHeader";
import { CareerProofBanner } from "@/app/components/shared/CareerProofBanner";
import { LoomVideoFrame } from "@/app/components/shared/LoomVideoFrame";
import { ProductionEvalWorkbench } from "@/app/components/openai/ProductionEvalWorkbench";
import { EnterpriseAdoptionToolkit } from "@/app/components/shared/EnterpriseAdoptionToolkit";
import { SideProjectsGrid } from "@/app/components/shared/SideProjectsGrid";
import { InterviewTeaserModal } from "@/app/components/shared/InterviewTeaserModal";
import { LinkedInCTA } from "@/app/components/shared/LinkedInCTA";
import { ArrowUpRight, Cpu, ShieldCheck, Zap, Terminal, Code2 } from "lucide-react";

export default function OpenAIPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const blueprintItems = [
    "Assess Tier-1 Swiss enterprise model deployment pipelines for latency, cost, and nDSG data residency compliance.",
    "Build full-stack production prototypes using Python, TypeScript, and OpenAI Structured Outputs.",
    "Establish automated evaluation loops (precision, recall, faithfulness) to convert customer field feedback into model improvements.",
  ];

  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-emerald-500 selection:text-black">
      <SubpageHeader
        companyName="OpenAI"
        roleTitle="Forward Deployed Engineer (Zurich)"
        accentColor="#10a37f"
      />

      {/* SECTION 1: Hero & Strategic Candidate Pitch */}
      <section className="relative pt-16 pb-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-6">
          <Terminal className="w-3.5 h-3.5" />
          <span>Zurich FDE Candidate Dossier</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white max-w-5xl leading-[1.05] mb-6">
          Deploying OpenAI Frontier Models in Regulated Swiss Enterprise Production.
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-3xl font-sans leading-relaxed mb-8">
          I am Terence La: Senior Manager AI at Zurich Airport (30M+ passengers/year), 4x Founder, Forbes 30u30 alumni, and pioneer LLM engineer who has been building with GPT-3 since August 2020. I bridge frontier AI research with real-world Swiss enterprise execution under strict nDSG and FINMA constraints.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm transition-all flex items-center gap-2 shadow-lg shadow-emerald-950/50 hover:scale-[1.02]"
          >
            <span>Open 60-Day FDE Execution Blueprint</span>
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

      {/* SECTION 2: Loom Video Pitch & Interactive Demonstration */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto space-y-8">
        <LoomVideoFrame
          companyName="OpenAI"
          roleTitle="Forward Deployed Engineer (Zurich)"
        />

        <div className="space-y-4 pt-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-1 flex items-center gap-2">
                <Code2 className="w-4 h-4" /> SHOW DON&apos;T TELL DEMO #1
              </div>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white font-sans">
                Production Model Eval & Deployment Workbench
              </h2>
            </div>
            <p className="text-xs md:text-sm text-zinc-400 max-w-md font-mono">
              Test model selection, latency, cost, accuracy trade-offs, and Swiss nDSG data guardrails in real time.
            </p>
          </div>

          <ProductionEvalWorkbench />
        </div>
      </section>

      {/* SECTION 3: Enterprise AI Adoption Toolkit & Resourceful Side Projects */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto space-y-8">
        {/* Storytelling Arc */}
        <div className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
              STORYTELLING & FIT
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mt-2 font-sans">
              Why an Unconventional AI Lead & 4x Founder is OpenAI&apos;s Ideal Zurich FDE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-zinc-300 leading-relaxed font-sans">
            <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-3">
              <div className="text-emerald-400 font-mono font-bold text-base flex items-center gap-2">
                <Cpu className="w-4 h-4" /> 1. Deep Technical Pioneer
              </div>
              <p>
                I built my first LLM application using GPT-3 in August 2020: long before ChatGPT. Winning 19+ hackathon and business awards (including 3rd Prize overall at HackZurich out of 1,600 techies), I write production-grade code across Python, TypeScript, and full-stack systems.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-3">
              <div className="text-emerald-400 font-mono font-bold text-base flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> 2. Swiss Regulated Field Proof
              </div>
              <p>
                At Zurich Airport, I lead AI strategy and execution for 30M+ passengers/year. I architected and deployed our AI call center under strict Swiss nDSG privacy rules, zero raw storage constraints, and strict SLA requirements.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-3">
              <div className="text-emerald-400 font-mono font-bold text-base flex items-center gap-2">
                <Zap className="w-4 h-4" /> 3. Customer & C-Suite Alignment
              </div>
              <p>
                As a 4x tech founder, M.A. HSG graduate, 2x TEDx speaker, and WEF presenter, I move effortlessly between engineering codebases and executive boardrooms. I don&apos;t just write code; I drive production adoption and align model roadmaps with business impact.
              </p>
            </div>
          </div>
        </div>

        <EnterpriseAdoptionToolkit
          companyName="OpenAI"
          roleTitle="Forward Deployed Engineer (Zurich)"
        />

        <SideProjectsGrid />

        <LinkedInCTA companyName="OpenAI" roleTitle="Forward Deployed Engineer (Zurich)" />
      </section>

      {/* Teaser Modal */}
      <InterviewTeaserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        companyName="OpenAI"
        roleTitle="Forward Deployed Engineer (Zurich)"
        blueprintItems={blueprintItems}
      />
    </main>
  );
}
