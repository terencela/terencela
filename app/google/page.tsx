"use client";

import React, { useState } from "react";
import { SubpageHeader } from "@/app/components/shared/SubpageHeader";
import { CareerProofBanner } from "@/app/components/shared/CareerProofBanner";
import { LoomVideoFrame } from "@/app/components/shared/LoomVideoFrame";
import { VertexGtmSimulator } from "@/app/components/google/VertexGtmSimulator";
import { EnterpriseAdoptionToolkit } from "@/app/components/shared/EnterpriseAdoptionToolkit";
import { SideProjectsGrid } from "@/app/components/shared/SideProjectsGrid";
import { InterviewTeaserModal } from "@/app/components/shared/InterviewTeaserModal";
import { LinkedInCTA } from "@/app/components/shared/LinkedInCTA";
import { ArrowUpRight, TrendingUp, Users, Target, Rocket } from "lucide-react";

export default function GooglePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const blueprintItems = [
    "Define a high-velocity 90-day GTM strategy targeting Zurich's top 100 digital native startups and enterprise accounts for Vertex AI.",
    "Empower sales & customer engineering teams to demonstrate Gemini 1.5 Pro's 2M token context and Vertex AI's enterprise model catalog.",
    "Build long-term CXO relationships across Swiss financial services, retail, and travel verticals.",
  ];

  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-blue-500 selection:text-black">
      <SubpageHeader
        companyName="Google"
        roleTitle="AI Sales Lead / GTM (Zurich)"
        accentColor="#4285f4"
      />

      {/* SECTION 1: Hero & Pitch */}
      <section className="relative pt-16 pb-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-widest mb-6">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>Zurich AI Sales Lead Candidate Dossier</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white max-w-5xl leading-[1.05] mb-6">
          Scaling Vertex AI & Gemini Across Swiss Startups and Enterprise.
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-3xl font-sans leading-relaxed mb-8">
          I am Terence La: Senior Manager AI at Zurich Airport, 4x Founder, Forbes 30u30 alumni, and GTM strategist who generated $1M+ additional revenue for 10 clients via automated sales funnels. I bring 10 years at the intersection of technology, sales automation, and Swiss enterprise leadership.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3.5 rounded-xl bg-blue-500 hover:bg-blue-400 text-black font-bold text-sm transition-all flex items-center gap-2 shadow-lg shadow-blue-950/50 hover:scale-[1.02]"
          >
            <span>Open 90-Day Ecosystem Playbook</span>
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

      {/* SECTION 2: Loom Video & GTM Simulator */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto space-y-8">
        <LoomVideoFrame
          companyName="Google"
          roleTitle="AI Sales Lead / GTM (Zurich)"
        />

        <div className="space-y-4 pt-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-1 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" /> SHOW DON&apos;T TELL DEMO #3
              </div>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white font-sans">
                Vertex AI Enterprise Deal & Pipeline Simulator
              </h2>
            </div>
            <p className="text-xs md:text-sm text-zinc-400 max-w-md font-mono">
              Simulate account targeting, pipeline modeling, competitive displacement, and CXO positioning for Google Cloud in Zurich.
            </p>
          </div>

          <VertexGtmSimulator />
        </div>
      </section>

      {/* SECTION 3: Adoption Toolkit, Side Projects & Contact */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto space-y-8">
        <div className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400">
              GTM & LEADERSHIP FIT
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mt-2 font-sans">
              Polymath GTM Leader: Technical Depth Meets $1M+ Revenue Execution
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-zinc-300 leading-relaxed font-sans">
            <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-3">
              <div className="text-blue-400 font-mono font-bold text-base flex items-center gap-2">
                <Rocket className="w-4 h-4" /> 1. $1M+ Growth & Sales Execution
              </div>
              <p>
                Built TL Innovations: generating $1M in additional revenue for 10 clients via strategic sales funnels, high-converting copywriting, and targeted cold outbound outreach. I know how to build and scale high-velocity sales engines.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-3">
              <div className="text-blue-400 font-mono font-bold text-base flex items-center gap-2">
                <Users className="w-4 h-4" /> 2. Zurich Network & Startup Access
              </div>
              <p>
                With 8,000+ professionals on LinkedIn, 2M+ content views, Forbes 30u30 recognition, and a history mentoring startup founders (Startup@HSG, START Hack, venture.ch winner), I have direct access to Zurich&apos;s digital native founders.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-3">
              <div className="text-blue-400 font-mono font-bold text-base flex items-center gap-2">
                <Target className="w-4 h-4" /> 3. Technical Mastery of Vertex AI & Gemini
              </div>
              <p>
                Having built AI applications across 20+ prototypes and led enterprise deployments at Zurich Airport, I don&apos;t just sell AI: I demonstrate live code, explain model architectures, and inspire executive CXOs.
              </p>
            </div>
          </div>
        </div>

        <EnterpriseAdoptionToolkit
          companyName="Google"
          roleTitle="AI Sales Lead / GTM (Zurich)"
        />

        <SideProjectsGrid />

        <LinkedInCTA companyName="Google" roleTitle="AI Sales Lead / GTM (Zurich)" />
      </section>

      {/* Teaser Modal */}
      <InterviewTeaserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        companyName="Google"
        roleTitle="AI Sales Lead / GTM (Zurich)"
        blueprintItems={blueprintItems}
      />
    </main>
  );
}
