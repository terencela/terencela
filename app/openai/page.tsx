"use client";

import React from "react";
import { Cpu, ShieldCheck, Zap } from "lucide-react";
import { ProductionEvalWorkbench } from "@/app/components/openai/ProductionEvalWorkbench";
import { RoleDossierPage } from "@/app/components/shared/RoleDossierPage";

export default function OpenAIPage() {
  return (
    <RoleDossierPage
      companyKey="openai"
      companyName="OpenAI"
      roleTitle="Forward Deployed Engineer (Zurich)"
      accentColor="#10a37f"
      heroTitle={
        <>
          Great pilots die in legal review. I&apos;m the person who <em>gets them live.</em>
        </>
      }
      heroSummary="Head of AI at Zurich Airport. I write Python and TypeScript, run evals before go-live, unblock nDSG reviews. This page: who I am, one thing you can play with, and patterns you can steal for your next Zurich account."
      primaryCtaLabel="What I'd do in 90 days"
      blueprintItems={[
        "Shadow two active DACH deployments and document where pilots stall: eval gaps, latency under load, or nDSG data path objections.",
        "Build a reusable eval template for one priority vertical (banking or critical infrastructure) that your Zurich team can deploy on the next account.",
        "Co-own a first production go-live with customer engineering, then write the playbook so the pattern scales without me in every meeting.",
      ]}
      metrics={[
        {
          label: "Production AI tools shipped",
          value: "12+",
          note: "Python and TypeScript in production.",
        },
        {
          label: "Passengers in operational scope",
          value: "30M+",
          note: "Scale context, not a claim I built AI for every passenger.",
        },
        {
          label: "Enterprise clients at KI Unlocked",
          value: "8+",
          note: "40% workflow reduction in deployments.",
        },
      ]}
      fitHeading="Mapped to what OpenAI FDE hires for"
      fitPoints={[
        {
          icon: Cpu,
          title: "End-to-end implementation",
          description:
            "FDE means living inside the customer's architecture. I debug integrations, tune prompts under load, and ship fixes while ops teams are watching at Zurich Airport.",
        },
        {
          icon: ShieldCheck,
          title: "Eval workbench discipline",
          description:
            "Enterprise motion depends on measurable quality gates before rollout. I built post-interaction eval loops that compare model output against operational ground truth.",
        },
        {
          icon: Zap,
          title: "Regulated account credibility",
          description:
            "Swiss banks and infrastructure operators share blockers I solve weekly: nDSG data residency, audit trails, and legal sign-off on token paths.",
        },
      ]}
      demoTitle="Eval workbench: de-risking a first production deployment"
      demoSummary="How I structure eval gates, latency budgets, and compliance checks for a Swiss bank's first OpenAI workload. Adjust parameters to see where a pilot passes demo stage but fails production review."
      interactiveDemo={<ProductionEvalWorkbench />}
    />
  );
}
