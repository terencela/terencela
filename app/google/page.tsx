"use client";

import React from "react";
import { Rocket, Target, Users } from "lucide-react";
import { VertexGtmSimulator } from "@/app/components/google/VertexGtmSimulator";
import { RoleDossierPage } from "@/app/components/shared/RoleDossierPage";

export default function GooglePage() {
  return (
    <RoleDossierPage
      companyName="Google"
      roleTitle="AI Sales Lead / GTM (Zurich)"
      accentColor="#4285f4"
      heroEyebrow="Zurich · AI Sales Lead"
      heroTitle={
        <>
          I drive Vertex AI adoption with <em>technical credibility</em> and commercial execution.
        </>
      }
      heroSummary="I combine founder-grade sales momentum with deep AI implementation experience. The result is practical GTM strategy that closes, deploys, and expands inside Swiss enterprise realities."
      primaryCtaLabel="Open 90-day ecosystem playbook"
      blueprintItems={[
        "Define a high-velocity GTM plan for Zurich startups and enterprise accounts.",
        "Enable customer teams to demonstrate model value in language that technical and business buyers both trust.",
        "Build long-cycle executive relationships across finance, retail, and travel.",
      ]}
      metrics={[
        {
          label: "Revenue",
          value: "$1M+",
          note: "Sales systems built.",
        },
        {
          label: "Network",
          value: "8k+",
          note: "LinkedIn ecosystem.",
        },
        {
          label: "90-day plan",
          value: "100",
          note: "Priority accounts.",
        },
      ]}
      fitHeading="Why I match Google AI Sales"
      fitPoints={[
        {
          icon: Rocket,
          title: "GTM execution speed",
          description:
            "Hands-on sales system design and market activation with measurable commercial outcomes.",
        },
        {
          icon: Users,
          title: "Swiss ecosystem access",
          description:
            "Strong reach into startups, innovation communities, and enterprise decision circles.",
        },
        {
          icon: Target,
          title: "Technical buyer trust",
          description:
            "Ability to explain architecture, model trade-offs, and implementation details without hand-waving.",
        },
      ]}
      demoTitle="Vertex AI deal simulator"
      demoSummary="Stress-test market segments, account plans, and migration motions to visualize GTM outcomes before execution."
      interactiveDemo={<VertexGtmSimulator />}
    />
  );
}
