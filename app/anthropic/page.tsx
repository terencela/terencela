"use client";

import React from "react";
import { Building2, Globe, Lock } from "lucide-react";
import { ClaudeEnterpriseSandbox } from "@/app/components/anthropic/ClaudeEnterpriseSandbox";
import { RoleDossierPage } from "@/app/components/shared/RoleDossierPage";

export default function AnthropicPage() {
  return (
    <RoleDossierPage
      companyName="Anthropic"
      roleTitle="Applied AI Architect, Industries (Zurich)"
      accentColor="#d97706"
      heroEyebrow="Zurich · Applied AI Architect"
      heroTitle={
        <>
          I design Claude deployments teams can <em>trust, adopt,</em> and scale.
        </>
      }
      heroSummary="I bridge C-suite context, technical architecture, and compliance reality. My work focuses on moving Swiss enterprises from exploratory interest to reliable, production-grade AI operations."
      primaryCtaLabel="Open 60-day Claude blueprint"
      blueprintItems={[
        "Run deep technical discovery with Swiss IT, legal, and executive stakeholders.",
        "Design nDSG and FINMA-aligned Claude integration patterns for real workloads.",
        "Build evaluation suites that prove safety and quality improvements before rollout.",
      ]}
      metrics={[
        {
          label: "Verticals",
          value: "3",
          note: "Banking, aviation, public sector.",
        },
        {
          label: "Languages",
          value: "4+",
          note: "Swiss German, DE, EN, Cantonese.",
        },
        {
          label: "Posture",
          value: "E2E",
          note: "Pre-sales through production.",
        },
      ]}
      fitHeading="Why I match Anthropic Industries"
      fitPoints={[
        {
          icon: Globe,
          title: "DACH communication fluency",
          description:
            "Native communication in Swiss and German enterprise contexts with strong executive alignment.",
        },
        {
          icon: Lock,
          title: "Compliance-first architecture",
          description:
            "Direct experience with Swiss privacy expectations and high-assurance implementation patterns.",
        },
        {
          icon: Building2,
          title: "Cross-layer credibility",
          description:
            "Trusted with boards, legal teams, and engineers when decisions involve risk, cost, and velocity.",
        },
      ]}
      demoTitle="Swiss enterprise Claude sandbox"
      demoSummary="Model vertical use cases, compliance constraints, language behavior, and customer value in one interactive view."
      interactiveDemo={<ClaudeEnterpriseSandbox />}
    />
  );
}
