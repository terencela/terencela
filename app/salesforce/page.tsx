"use client";

import React, { useState } from "react";
import { SubpageHeader } from "@/app/components/shared/SubpageHeader";
import { CareerProofBanner } from "@/app/components/shared/CareerProofBanner";
import { LoomVideoFrame } from "@/app/components/shared/LoomVideoFrame";
import { AgentforceSimulator } from "@/app/components/salesforce/AgentforceSimulator";
import { EnterpriseAdoptionToolkit } from "@/app/components/shared/EnterpriseAdoptionToolkit";
import { SideProjectsGrid } from "@/app/components/shared/SideProjectsGrid";
import { InterviewTeaserModal } from "@/app/components/shared/InterviewTeaserModal";
import { LinkedInCTA } from "@/app/components/shared/LinkedInCTA";
import { ArrowUpRight, Bot, Database, Workflow, Zap } from "lucide-react";

export default function SalesforcePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const blueprintItems = [
    "Bridge Data Cloud, Customer 360, and Agentforce autonomous agents for Swiss enterprise customers.",
    "Deploy real-time operational agent workflows for high-volume customer service recovery and field service.",
    "Ensure zero-data-retention compliance under Swiss nDSG data residency rules.",
  ];

  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-sky-500 selection:text-black">
      <SubpageHeader
        companyName="Salesforce"
        roleTitle="Forward Deployed Engineer (Zurich)"
        accentColor="#00a1e0"
      />

      {/* SECTION 1: Hero & Pitch */}
      <section className="relative pt-16 pb-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono uppercase tracking-widest mb-6">
          <Bot className="w-3.5 h-3.5" />
          <span>Zurich Candidate Dossier</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white max-w-5xl leading-[1.05] mb-6">
          Unlocking Data Cloud & Agentforce Automation in Switzerland.
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-3xl font-sans leading-relaxed mb-8">
          I am Terence La: former Interim Chief AI Officer at Spadoom AG (leading SAP & Salesforce AI initiatives), Senior Manager AI at Zurich Airport, and 4x Founder. I specialize in deploying autonomous AI agents over enterprise CRM and real-time operational data streams.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-black font-bold text-sm transition-all flex items-center gap-2 shadow-lg shadow-sky-950/50 hover:scale-[1.02]"
          >
            <span>Open Agentforce Execution Blueprint</span>
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

      {/* SECTION 2: Loom Video & Agentforce Simulator */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto space-y-8">
        <LoomVideoFrame
          companyName="Salesforce"
          roleTitle="Forward Deployed Engineer (Zurich)"
        />

        <div className="space-y-4 pt-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-sky-400 mb-1 flex items-center gap-2">
                <Bot className="w-4 h-4" /> SHOW DON&apos;T TELL DEMO #4
              </div>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white font-sans">
                Agentforce Autonomous Operations Visualizer
              </h2>
            </div>
            <p className="text-xs md:text-sm text-zinc-400 max-w-md font-mono">
              Simulate real-time autonomous agent execution over Salesforce Data Cloud and airport operations.
            </p>
          </div>

          <AgentforceSimulator />
        </div>
      </section>

      {/* SECTION 3: Adoption Toolkit, Side Projects & Contact */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto space-y-8">
        <div className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-sky-400">
              ENTERPRISE CRM & AI FIT
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mt-2 font-sans">
              Interim CAIO + Airport Operations = Complete Agentforce Mastery
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-zinc-300 leading-relaxed font-sans">
            <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-3">
              <div className="text-sky-400 font-mono font-bold text-base flex items-center gap-2">
                <Workflow className="w-4 h-4" /> 1. Spadoom AG Interim CAIO
              </div>
              <p>
                Led advanced enterprise AI initiatives, revamped AI service offerings, and represented Spadoom at SAP Now & SAP Connect. I have hands-on experience integrating AI with enterprise CRM and ERP suites.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-3">
              <div className="text-sky-400 font-mono font-bold text-base flex items-center gap-2">
                <Database className="w-4 h-4" /> 2. Real-Time Data Cloud Processing
              </div>
              <p>
                At Zurich Airport, I handle real-time passenger data streams, flight status events, and CRM integrations for 30M+ travelers per year under strict Swiss nDSG data protection laws.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-3">
              <div className="text-sky-400 font-mono font-bold text-base flex items-center gap-2">
                <Zap className="w-4 h-4" /> 3. Forward Deployed Speed & Execution
              </div>
              <p>
                19+ hackathon and business awards, 4x founder speed, and M.A. HSG strategy training allow me to scope, build, and deploy custom Agentforce solutions for strategic accounts rapidly.
              </p>
            </div>
          </div>
        </div>

        <EnterpriseAdoptionToolkit
          companyName="Salesforce"
          roleTitle="Forward Deployed Position (Zurich)"
        />

        <SideProjectsGrid />

        <LinkedInCTA companyName="Salesforce" roleTitle="Forward Deployed Position (Zurich)" />
      </section>

      {/* Teaser Modal */}
      <InterviewTeaserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        companyName="Salesforce"
        roleTitle="Forward Deployed Position (Zurich)"
        blueprintItems={blueprintItems}
      />
    </main>
  );
}
