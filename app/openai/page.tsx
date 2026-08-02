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
      heroEyebrow="Zurich · Forward Deployed Engineer"
      heroTitle={
        <>
          Your Zurich customers do not fail on model quality. They fail on the path from{" "}
          <em>pilot to production.</em>
        </>
      }
      heroSummary="I am Head of AI at Zurich Airport, where 30 million passengers a year expose every gap in eval coverage, latency, and data handling. I sit with CTOs and security teams, ship Python and TypeScript integrations, and turn field failures into measurable model improvements. That is the job your FDE team does for UBS, Swiss Re, and every DACH account stuck between a great demo and a signed production contract."
      primaryCtaLabel="See my 90-day plan for Zurich accounts"
      blueprintItems={[
        "Shadow two active DACH deployments and document where pilots stall: eval gaps, latency under load, or nDSG data path objections.",
        "Build a reusable eval template for one priority vertical (banking or critical infrastructure) that your Zurich team can deploy on the next account.",
        "Co-own a first production go-live with customer engineering, then write the playbook so the pattern scales without me in every meeting.",
      ]}
      metrics={[
        {
          label: "Production AI tools shipped",
          value: "12+",
          note: "Internal tools in Python and TypeScript.",
        },
        {
          label: "Passenger scale in scope",
          value: "30M+",
          note: "Same operational pressure as tier-1 accounts.",
        },
        {
          label: "Languages for workshops",
          value: "5",
          note: "Swiss German, DE, EN, Cantonese, FR.",
        },
      ]}
      fitHeading="Mapped to what OpenAI FDE hires for"
      fitPoints={[
        {
          icon: Cpu,
          title: "Customer-embedded engineering",
          description:
            "FDE means living inside the customer's architecture. I do this daily at Zurich Airport: debugging integrations, tuning prompts under load, and shipping fixes while ops teams are watching.",
        },
        {
          icon: ShieldCheck,
          title: "Eval-driven reliability",
          description:
            "OpenAI's enterprise motion depends on measurable quality gates before rollout. I built post-interaction eval loops that compare model output against operational ground truth, not synthetic benchmarks.",
        },
        {
          icon: Zap,
          title: "Regulated account credibility",
          description:
            "Swiss banks and infrastructure operators share the same blockers I solve every week: nDSG data residency, audit trails, and legal sign-off on token paths. I speak their language because I am one of them.",
        },
      ]}
      demoTitle="Eval workbench: de-risking a first production deployment"
      demoSummary="This is how I would structure eval gates, latency budgets, and compliance checks for a Swiss bank's first OpenAI workload. Adjust the parameters to see where a pilot passes demo stage but fails production review."
      interactiveDemo={<ProductionEvalWorkbench />}
    />
  );
}
