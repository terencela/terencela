"use client";

import React from "react";
import { Rocket, Target, Users } from "lucide-react";
import { VertexGtmSimulator } from "@/app/components/google/VertexGtmSimulator";
import { RoleDossierPage } from "@/app/components/shared/RoleDossierPage";

export default function GooglePage() {
  return (
    <RoleDossierPage
      companyKey="google"
      companyName="Google"
      roleTitle="AI Sales Lead / GTM (Zurich)"
      accentColor="#4285f4"
      heroTitle={
        <>
          Swiss enterprises buy Vertex when someone answers the{" "}
          <em>hard technical question</em> in the room.
        </>
      }
      heroSummary="I have been on both sides of a Swiss enterprise AI deal: leading AI evaluation at Zurich Airport, and selling as a founder into regulated accounts. A decade in sales. I know why a CIO chooses OpenAI over Vertex, and how to reframe around workload fit, compliance posture, and proof-of-value that survives procurement."
      primaryCtaLabel="See my 90-day GTM plan"
      blueprintItems={[
        "Qualify the top 20 Zurich and DACH accounts by workload fit: RAG, batch inference, agents, or fine-tuning on Vertex and Gemini.",
        "Build three vertical discovery playbooks (financial services, retail, travel/infrastructure) with technical objection handling for competitive displacement.",
        "Co-run the first five executive workshops with AEs and document what closes technical sign-off versus what stalls at legal.",
      ]}
      metrics={[
        {
          label: "Revenue via TL Innovations",
          value: "$0.5M",
          note: "10 clients through sales funnels and outbound.",
        },
        {
          label: "Sales experience",
          value: "Decade",
          note: "Founder who sold AI services, not just consumed them.",
        },
        {
          label: "Competition wins",
          value: "19+",
          note: "HackZurich, Bain FinTech, venture.ch.",
        },
      ]}
      fitHeading="Mapped to what AI Sales Lead hires for"
      fitPoints={[
        {
          icon: Target,
          title: "Dual buyer and seller perspective",
          description:
            "Discovery calls that surface real workload fit for Vertex and Gemini. I ask the questions Swiss CIOs expect: data residency, inference cost at scale, and migration path from existing stacks.",
        },
        {
          icon: Rocket,
          title: "Land-and-expand in long cycles",
          description:
            "Swiss enterprise deals run 12+ months. I design 30-day proof-of-value milestones with measurable KPIs that give executive sponsors internal ammunition.",
        },
        {
          icon: Users,
          title: "Competitive displacement honesty",
          description:
            "I acknowledge where OpenAI or Azure wins today, then anchor on Google strengths for the specific use case. Buyers trust sellers who understand trade-offs.",
        },
      ]}
      demoTitle="Discovery simulator: how I run a Vertex call with a Swiss CIO"
      demoSummary="Step through account qualification, workload assessment, and objection handling for a DACH enterprise evaluating Google Cloud AI against OpenAI and Azure."
      interactiveDemo={<VertexGtmSimulator />}
    />
  );
}
