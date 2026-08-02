"use client";

import React from "react";
import { Building2, Globe, Lock } from "lucide-react";
import { ClaudeEnterpriseSandbox } from "@/app/components/anthropic/ClaudeEnterpriseSandbox";
import { RoleDossierPage } from "@/app/components/shared/RoleDossierPage";

export default function AnthropicPage() {
  return (
    <RoleDossierPage
      companyKey="anthropic"
      companyName="Anthropic"
      roleTitle="Applied AI Architect, Industries (Zurich)"
      accentColor="#d97706"
      heroEyebrow="Zurich · Applied AI Architect, Industries"
      heroTitle={
        <>
          Swiss enterprises do not need another Claude demo. They need an architecture their{" "}
          <em>CISO will sign.</em>
        </>
      }
      heroSummary="I design Claude deployments that legal, IT, and the board can defend. At Zurich Airport I align C-suite priorities with technical architecture and nDSG compliance reality every week. For Anthropic Industries, that means reference architectures for banking and critical infrastructure, trust evals compliance teams understand, and workshops that resolve blockers in one room instead of six months of email."
      primaryCtaLabel="See my 90-day Industries plan"
      blueprintItems={[
        "Map Anthropic's DACH priority accounts against compliance blockers I have solved in aviation and financial services contexts.",
        "Publish two reference architectures (Swiss private banking and critical infrastructure) with eval criteria, data boundaries, and human oversight tiers.",
        "Lead co-design sessions with customer architects and document reusable patterns for the Zurich Industries team.",
      ]}
      metrics={[
        {
          label: "Regulated verticals",
          value: "3",
          note: "Aviation, finance, public sector.",
        },
        {
          label: "Stakeholder alignment",
          value: "Board + legal",
          note: "C-suite, compliance, engineering together.",
        },
        {
          label: "Privacy frameworks",
          value: "nDSG + FINMA",
          note: "Designed into architecture, not bolted on.",
        },
      ]}
      fitHeading="Mapped to what Industries hires for"
      fitPoints={[
        {
          icon: Lock,
          title: "Reference architecture for regulated workloads",
          description:
            "Industries customers need a documented data flow, model boundary, and oversight model before they expand token volume. I build these artifacts so security teams audit architecture, not slide decks.",
        },
        {
          icon: Building2,
          title: "Constitutional AI in practice",
          description:
            "Trust is not a marketing word. I translate safety principles into eval suites covering hallucination rate, PII leakage, and refusal behavior on regulated content, with thresholds compliance teams can approve.",
        },
        {
          icon: Globe,
          title: "DACH workshop fluency",
          description:
            "Swiss German, High German, English, Cantonese, and working French. I run the cross-functional sessions where legal, IT, and business owners decide whether Claude graduates from lab to production.",
        },
      ]}
      demoTitle="Reference architecture sandbox: Swiss bank first Claude workload"
      demoSummary="Explore how I would map Claude capabilities to nDSG and FINMA constraints for a private banking use case. Toggle compliance requirements and language settings to see how architecture decisions change before a POC expands."
      interactiveDemo={<ClaudeEnterpriseSandbox />}
    />
  );
}
