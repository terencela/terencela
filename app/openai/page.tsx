"use client";

import React from "react";
import { Cpu, ShieldCheck, Zap } from "lucide-react";
import { ProductionEvalWorkbench } from "@/app/components/openai/ProductionEvalWorkbench";
import { RoleDossierPage } from "@/app/components/shared/RoleDossierPage";

export default function OpenAIPage() {
  return (
    <RoleDossierPage
      companyName="OpenAI"
      roleTitle="Forward Deployed Engineer (Zurich)"
      accentColor="#10a37f"
      heroEyebrow="Zurich · Forward Deployed Engineer"
      heroTitle={
        <>
          I deploy frontier models in Swiss enterprise production with <em>speed and discipline.</em>
        </>
      }
      heroSummary="I lead AI execution at Zurich Airport for 30M+ passengers each year. I build under real privacy constraints, convert field feedback into model improvements, and ship production systems that hold up when stakes are high."
      primaryCtaLabel="Open 60-day execution blueprint"
      blueprintItems={[
        "Assess tier-1 Swiss deployment pipelines for latency, cost, and nDSG readiness.",
        "Ship production prototypes in Python and TypeScript with structured output guarantees.",
        "Run automated eval loops to continuously improve model accuracy from field signals.",
      ]}
      metrics={[
        {
          label: "Passenger scale",
          value: "30M+",
          note: "High concurrency, multilingual demand.",
        },
        {
          label: "LLM history",
          value: "2020",
          note: "GPT workflows since early production.",
        },
        {
          label: "First 60 days",
          value: "4 tracks",
          note: "Delivery, evals, guardrails, enablement.",
        },
      ]}
      fitHeading="Why I match OpenAI Zurich"
      fitPoints={[
        {
          icon: Cpu,
          title: "Technical execution",
          description:
            "Production-grade engineering across full-stack systems, eval infrastructure, and model orchestration.",
        },
        {
          icon: ShieldCheck,
          title: "Regulated deployment",
          description:
            "Proven nDSG-conscious architecture design with strict data handling and operational accountability.",
        },
        {
          icon: Zap,
          title: "Adoption velocity",
          description:
            "Founder-level speed combined with enterprise clarity to move from pilot to active usage quickly.",
        },
      ]}
      demoTitle="Production model eval workbench"
      demoSummary="Evaluate latency, cost, compliance, and output behavior in a realistic Swiss enterprise setup."
      interactiveDemo={<ProductionEvalWorkbench />}
    />
  );
}
