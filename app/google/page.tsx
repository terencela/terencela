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
      heroEyebrow="Zurich · AI Sales Lead / GTM"
      heroTitle={
        <>
          Swiss enterprises buy Vertex when someone in the room can answer the{" "}
          <em>hard technical question.</em>
        </>
      }
      heroSummary="I have been on both sides of a Swiss enterprise AI deal: as Head of AI evaluating vendors at Zurich Airport, and as a founder selling into regulated accounts. I know why a CIO chooses OpenAI over Vertex, and how to reframe the conversation around workload fit, compliance posture, and a proof-of-value that survives a 12-month procurement cycle."
      primaryCtaLabel="See my 90-day GTM plan"
      blueprintItems={[
        "Qualify the top 20 Zurich and DACH accounts by workload fit: RAG, batch inference, agents, or fine-tuning on Vertex and Gemini.",
        "Build three vertical discovery playbooks (financial services, retail, travel/infrastructure) with technical objection handling for competitive displacement.",
        "Co-run the first five executive workshops with AEs and document what closes technical sign-off versus what stalls at legal.",
      ]}
      metrics={[
        {
          label: "Founder revenue built",
          value: "$1M+",
          note: "Sold AI services, not just consumed them.",
        },
        {
          label: "Buyer-side reference",
          value: "30M+",
          note: "Enterprise AI procurement from the inside.",
        },
        {
          label: "DACH deal languages",
          value: "5",
          note: "Swiss German, DE, EN, Cantonese, FR.",
        },
      ]}
      fitHeading="Mapped to what AI Sales Lead hires for"
      fitPoints={[
        {
          icon: Target,
          title: "Technical pre-sales credibility",
          description:
            "Discovery calls that surface real workload fit for Vertex and Gemini, not feature tours. I ask the questions Swiss CIOs expect: data residency, inference cost at scale, and migration path from existing stacks.",
        },
        {
          icon: Rocket,
          title: "Land-and-expand in long cycles",
          description:
            "Swiss enterprise deals run 12+ months. I design 30-day proof-of-value milestones with measurable KPIs that give executive sponsors internal ammunition and give AEs a wedge for expansion.",
        },
        {
          icon: Users,
          title: "Competitive displacement honesty",
          description:
            "I acknowledge where OpenAI or Azure wins today, then anchor on Google strengths for the specific use case. Buyers trust sellers who understand the trade-offs, not ones who pretend theirs is always best.",
        },
      ]}
      demoTitle="Discovery simulator: how I run a Vertex call with a Swiss CIO"
      demoSummary="Step through account qualification, workload assessment, and objection handling for a DACH enterprise evaluating Google Cloud AI against OpenAI and Azure. This is the rhythm I would bring to your Zurich pipeline."
      interactiveDemo={<VertexGtmSimulator />}
    />
  );
}
