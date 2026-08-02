"use client";

import React from "react";
import { Database, Workflow, Zap } from "lucide-react";
import { AgentforceSimulator } from "@/app/components/salesforce/AgentforceSimulator";
import { RoleDossierPage } from "@/app/components/shared/RoleDossierPage";

export default function SalesforcePage() {
  return (
    <RoleDossierPage
      companyName="Salesforce"
      roleTitle="Forward Deployed Engineer (Zurich)"
      accentColor="#00a1e0"
      heroEyebrow="Zurich · Forward Deployed Engineer"
      heroTitle={
        <>
          I turn CRM data into <em>autonomous workflows</em> teams can trust.
        </>
      }
      heroSummary="I work at the intersection of enterprise data, applied AI, and operations. My focus is practical deployment: measurable outcomes, resilient architecture, and fast adoption in high-stakes environments."
      primaryCtaLabel="Open Agentforce execution blueprint"
      blueprintItems={[
        "Bridge Data Cloud, Customer 360, and agent workflows for Swiss enterprise teams.",
        "Deploy high-volume service recovery automations with clear operational safeguards.",
        "Enforce nDSG-conscious data handling in every autonomous workflow path.",
      ]}
      metrics={[
        {
          label: "Scale",
          value: "30M+",
          note: "Airport travelers.",
        },
        {
          label: "Leadership",
          value: "CAIO",
          note: "Interim applied AI.",
        },
        {
          label: "Cadence",
          value: "Fast",
          note: "Founder build speed.",
        },
      ]}
      fitHeading="Why I match Salesforce FDE"
      fitPoints={[
        {
          icon: Workflow,
          title: "Enterprise workflow design",
          description:
            "Experience shaping high-impact automation paths that plug directly into operational teams.",
        },
        {
          icon: Database,
          title: "Data cloud readiness",
          description:
            "Hands-on with real-time data streams, CRM touchpoints, and strict privacy obligations.",
        },
        {
          icon: Zap,
          title: "Forward deployed execution",
          description:
            "Practical build mentality with the communication range to keep product and customer teams aligned.",
        },
      ]}
      demoTitle="Agentforce operations visualizer"
      demoSummary="Explore customer, operations, and sales agent patterns to see how automation can run safely under real constraints."
      interactiveDemo={<AgentforceSimulator />}
    />
  );
}
