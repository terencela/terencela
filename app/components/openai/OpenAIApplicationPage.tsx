"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Cpu,
  Database,
  FileText,
  MessageSquareText,
  Mic,
  ShieldCheck,
  Users,
} from "lucide-react";
import { DossierBackground } from "@/app/components/shared/DossierBackground";
import { SubpageHeader } from "@/app/components/shared/SubpageHeader";
import { LoomVideoFrame } from "@/app/components/shared/LoomVideoFrame";
import { DossierThemeProvider } from "@/app/lib/dossier-theme";

type QualificationPillar = {
  icon: typeof BriefcaseBusiness;
  title: string;
  detail: string;
};

type DeploymentExample = {
  title: string;
  challenge: string;
  role: string[];
  outcome: string;
};

type SelectedProject = {
  name: string;
  category: string;
  stage: string;
  accent: string;
  graphic:
    | "employee-app"
    | "voice-ai"
    | "proposal-copilot"
    | "company-brain"
    | "privacy-layer"
    | "vibe-translator";
  problem: string;
  solution: string;
};

const qualificationPillars: QualificationPillar[] = [
  {
    icon: BriefcaseBusiness,
    title: "Enterprise deployment",
    detail: "POCs to production to adoption to governance. I own the full path.",
  },
  {
    icon: Cpu,
    title: "AI builder",
    detail: "15+ products across agents, RAG, voice AI, company knowledge, and eval loops.",
  },
  {
    icon: Users,
    title: "Business x Engineering",
    detail: "I translate between executives, engineers, and end users to keep projects moving.",
  },
];

const credibilityLogos = ["Zurich Airport", "UBS", "Credit Suisse", "PwC", "Forbes", "TEDx", "HSG"] as const;

const deployments: DeploymentExample[] = [
  {
    title: "Zurich Airport - Voice AI Agent",
    challenge:
      "Around 85,000 calls and around 150,000 minutes per year handled by around 8 FTE in the call center. Large enterprise setup, many stakeholders, regulated environment, and trust constraints.",
    role: [
      "Discovery",
      "Use-case prioritisation",
      "Architecture",
      "Prototype",
      "Vendor evaluation",
      "Governance",
    ],
    outcome:
      "Delivered a PoC in two weeks, moved it into a formal tender, and accelerated stakeholder trust and alignment. Procurement timelines are still in progress.",
  },
  {
    title: "ZRH Insider - Employee App Rebuild",
    challenge:
      "The internal airport app serves 35,000 employees and had fragmented mobile foundations, which slowed delivery and experimentation.",
    role: [
      "Rebuilt the app foundation in one month",
      "Consolidated architecture for faster rollout",
      "Focused roadmap on engagement and retention loops",
    ],
    outcome:
      "Shipped a production-ready rebuild that was externally quoted at CHF 350k, and created a base that is faster to extend.",
  },
  {
    title: "Engineering Office LAJO - Proposal Copilot",
    challenge:
      "Very little prep time for proposals and scattered information before sales meetings.",
    role: [
      "Designed PoC before the first sales meeting",
      "Set up OCR + model routing + RAG retrieval",
      "Secured a workshop and moved into delivery",
    ],
    outcome:
      "Current retrieval accuracy is 95-98% on scoped tests. Expected time savings for proposal and project work: around 40%.",
  },
];

const deploymentLessons = [
  "Trust has to be designed, not assumed.",
  "Weak stakeholder alignment kills momentum fast.",
  "Fear of risk often blocks even good technical work.",
  "Edge cases decide whether a deployment survives.",
  "Economic buyers and champions need real decision power.",
];

const selectedProjects: SelectedProject[] = [
  {
    name: "ZRH Insider",
    category: "Internal employee app",
    stage: "Live rebuild",
    accent: "green",
    graphic: "employee-app",
    problem: "The internal employee app needed faster iteration and stronger user retention.",
    solution: "Rebuilt the foundation in one month so product teams can ship and test faster.",
  },
  {
    name: "Zurich Airport Voice AI Agent",
    category: "Operations AI",
    stage: "PoC to tender",
    accent: "amber",
    graphic: "voice-ai",
    problem: "High call volume and long support time in a regulated airport environment.",
    solution:
      "Scoped and delivered a Voice AI PoC in two weeks, then moved it into formal tender and governance.",
  },
  {
    name: "Engineering Office Copilot",
    category: "SME deployment",
    stage: "In delivery",
    accent: "blue",
    graphic: "proposal-copilot",
    problem: "Proposal preparation was slow because knowledge was scattered across systems.",
    solution: "Built OCR + RAG + routing workflows to produce proposal-ready drafts much faster.",
  },
  {
    name: "Company Brain",
    category: "Knowledge systems",
    stage: "Building",
    accent: "sky",
    graphic: "company-brain",
    problem: "Teams lose time searching across documents, decisions, and fragmented context.",
    solution: "Centralize retrieval with source-grounded answers so teams can execute with confidence.",
  },
  {
    name: "Privacy Layer",
    category: "AI infrastructure",
    stage: "Prototype",
    accent: "cyan",
    graphic: "privacy-layer",
    problem: "Organizations need usable AI workflows without exposing sensitive operational data.",
    solution: "Introduce pre-model controls for redaction, routing, and policy enforcement by default.",
  },
  {
    name: "Vibe Translator",
    category: "Human context AI",
    stage: "Prototype",
    accent: "violet",
    graphic: "vibe-translator",
    problem:
      "Intent often gets lost when language is interpreted without relationship and cultural context.",
    solution: "Decode communication context before response drafting to reduce social and business friction.",
  },
];

const accentStyles = {
  "--hero-accent": "#10a37f",
} as CSSProperties;

function ProjectMeaningVisual({
  graphic,
}: {
  graphic: SelectedProject["graphic"];
}) {
  if (graphic === "employee-app") {
    return (
      <div className="project-visual relative overflow-hidden p-6 md:p-7" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(16,163,127,0.2),transparent_58%)]" />
        <div className="relative flex h-full items-center justify-center gap-4">
          <div className="h-36 w-20 rounded-[18px] border border-black/10 bg-white/80 p-2 shadow-[0_10px_22px_rgba(0,0,0,0.12)]">
            <div className="mx-auto mt-1 h-1.5 w-9 rounded-full bg-black/20" />
            <div className="mt-4 space-y-2">
              <div className="h-2 rounded bg-[#10a37f40]" />
              <div className="h-2 rounded bg-black/10" />
              <div className="h-2 w-4/5 rounded bg-black/10" />
            </div>
            <div className="mt-4 h-12 rounded-lg border border-[#10a37f33] bg-[#10a37f1f]" />
          </div>
          <div className="h-28 w-28 rounded-2xl border border-black/10 bg-white/70 p-3 shadow-[0_8px_18px_rgba(0,0,0,0.08)]">
            <Building2 className="h-5 w-5 text-[#10a37f]" />
            <div className="mt-3 space-y-2">
              <div className="h-1.5 rounded bg-black/15" />
              <div className="h-1.5 rounded bg-black/10" />
              <div className="h-1.5 w-2/3 rounded bg-black/10" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (graphic === "voice-ai") {
    return (
      <div className="project-visual relative overflow-hidden p-6 md:p-7" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_20%,rgba(242,184,91,0.26),transparent_56%)]" />
        <div className="relative flex h-full items-center justify-center">
          <div className="flex items-end gap-1.5">
            {[24, 38, 52, 66, 52, 38, 24].map((height) => (
              <span
                key={height}
                className="w-1.5 rounded-full bg-[#f2b85b]"
                style={{ height: `${height}px` }}
              />
            ))}
          </div>
          <div className="absolute bottom-5 right-5 rounded-full border border-[#f2b85b66] bg-white/70 p-2">
            <Mic className="h-4 w-4 text-[#d99121]" />
          </div>
        </div>
      </div>
    );
  }

  if (graphic === "proposal-copilot") {
    return (
      <div className="project-visual relative overflow-hidden p-6 md:p-7" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_75%,rgba(99,118,255,0.18),transparent_55%)]" />
        <div className="relative mx-auto h-full max-w-[180px]">
          <div className="absolute left-5 top-3 h-[150px] w-[110px] -rotate-6 rounded-lg border border-black/10 bg-white/70" />
          <div className="absolute left-10 top-8 h-[150px] w-[110px] rounded-lg border border-black/15 bg-white/85 p-3 shadow-[0_12px_20px_rgba(0,0,0,0.08)]">
            <FileText className="h-4 w-4 text-[#6376ff]" />
            <div className="mt-3 space-y-2">
              <div className="h-1.5 rounded bg-black/20" />
              <div className="h-1.5 rounded bg-black/10" />
              <div className="h-1.5 w-4/5 rounded bg-black/10" />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-1.5">
              <span className="h-7 rounded border border-[#6376ff55] bg-[#6376ff1f]" />
              <span className="h-7 rounded border border-[#6376ff55] bg-[#6376ff1f]" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (graphic === "company-brain") {
    return (
      <div className="project-visual relative overflow-hidden p-6 md:p-7" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(107,184,255,0.2),transparent_58%)]" />
        <div className="relative h-full w-full">
          <span className="absolute left-[20%] top-[30%] h-px w-16 rotate-[22deg] bg-[#6bb8ff88]" />
          <span className="absolute left-[47%] top-[42%] h-px w-16 -rotate-[24deg] bg-[#6bb8ff88]" />
          <span className="absolute left-[33%] top-[63%] h-px w-14 rotate-[-8deg] bg-[#6bb8ff88]" />
          <div className="absolute left-[15%] top-[25%] flex h-11 w-11 items-center justify-center rounded-full border border-[#6bb8ff99] bg-white/75">
            <Database className="h-4 w-4 text-[#58a7f0]" />
          </div>
          <div className="absolute right-[18%] top-[35%] h-9 w-9 rounded-full border border-[#6bb8ff99] bg-white/75" />
          <div className="absolute left-[42%] bottom-[16%] h-10 w-10 rounded-full border border-[#6bb8ff99] bg-white/75" />
        </div>
      </div>
    );
  }

  if (graphic === "privacy-layer") {
    return (
      <div className="project-visual relative overflow-hidden p-6 md:p-7" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(84,207,234,0.2),transparent_55%)]" />
        <div className="relative flex h-full items-center justify-center gap-4">
          <div className="rounded-2xl border border-[#54cfea66] bg-white/80 p-4 shadow-[0_10px_22px_rgba(0,0,0,0.08)]">
            <ShieldCheck className="h-12 w-12 text-[#2eaecd]" />
          </div>
          <div className="space-y-2">
            <div className="h-2 w-20 rounded bg-black/20" />
            <div className="h-2 w-16 rounded bg-black/12" />
            <div className="h-2 w-24 rounded bg-black/12" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-visual relative overflow-hidden p-6 md:p-7" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(156,108,255,0.2),transparent_56%)]" />
      <div className="relative flex h-full items-center justify-center gap-4">
        <div className="max-w-[120px] rounded-2xl border border-black/10 bg-white/80 p-3 shadow-[0_8px_16px_rgba(0,0,0,0.08)]">
          <MessageSquareText className="h-4 w-4 text-[#9c6cff]" />
          <div className="mt-2 h-1.5 rounded bg-black/20" />
          <div className="mt-1.5 h-1.5 w-4/5 rounded bg-black/10" />
        </div>
        <div className="max-w-[120px] rounded-2xl border border-black/10 bg-white/75 p-3">
          <div className="h-1.5 rounded bg-black/15" />
          <div className="mt-1.5 h-1.5 w-3/4 rounded bg-black/10" />
          <div className="mt-3 h-6 rounded-lg border border-[#9c6cff55] bg-[#9c6cff1f]" />
        </div>
      </div>
    </div>
  );
}

export function OpenAIApplicationPage() {
  return (
    <DossierThemeProvider>
      <main
        className="dossier-page relative min-h-[100dvh] overflow-x-hidden"
        style={accentStyles}
      >
        <DossierBackground accentColor="#10a37f" />
        <SubpageHeader
          companyName="OpenAI"
          roleTitle="Forward Deployed Engineer (Zurich)"
          accentColor="#10a37f"
        />

        <section className="dossier-section dossier-section-tight relative z-[2] !pb-5 !pt-10 md:!pt-14">
          <div className="mx-auto max-w-[1200px] px-4 md:px-8">
            <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(220px,280px)] lg:gap-10">
              <div>
                <p className="dossier-eyebrow">
                  <span aria-hidden="true" />
                  Application page
                </p>
                <h1 className="dossier-hero-title">I turn enterprise AI from idea into adoption.</h1>
                <p className="mt-6 max-w-[68ch] text-base leading-relaxed text-[var(--dossier-body)]">
                  I lead AI at Zurich Airport, build and deploy AI systems through KI Unlocked, and
                  work across business, engineering and governance to get projects shipped.
                </p>
                <p className="mt-4 max-w-[64ch] text-sm leading-relaxed text-[var(--dossier-muted)]">
                  I work where pilots either become real workflows or die in procurement. That is
                  where I do my best work.
                </p>
              </div>

              <aside className="relative mx-auto w-full max-w-[260px] sm:max-w-[280px] lg:mx-0 lg:ml-auto lg:max-w-none">
                <div className="dossier-profile-frame aspect-[4/5] w-full lg:max-w-[280px]">
                  <Image
                    src="/images/terence-la-profile.png"
                    alt="Terence La profile"
                    fill
                    sizes="280px"
                    className="dossier-profile-photo object-cover object-top"
                    priority
                  />
                  <div className="dossier-profile-caption absolute inset-x-0 bottom-0 z-[2] px-5 pb-5 pt-16">
                    <p className="text-sm font-medium text-white">Terence La</p>
                    <p className="text-xs text-white/80">AI Lead · Zurich Airport</p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="dossier-section-tight relative z-[2] py-5">
          <div className="mx-auto max-w-[1200px] px-4 md:px-8">
            <div className="border-y border-[var(--dossier-line-strong)] py-5 md:py-6">
              <div className="flex flex-wrap items-center justify-center gap-2.5 md:gap-3">
                {credibilityLogos.map((logo) => (
                  <div
                    key={logo}
                    className="rounded-full border border-[var(--dossier-line-strong)] bg-[var(--dossier-panel)] px-4 py-2 text-sm font-semibold tracking-[-0.01em] text-[var(--dossier-body)]"
                  >
                    {logo}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="dossier-section relative z-[2] pt-9">
          <div className="mx-auto max-w-[1200px] px-4 md:px-8">
            <div className="dossier-fit-featured">
              <div className="dossier-fit-featured-copy">
                <h2 className="dossier-hero-title !text-[clamp(30px,4vw,52px)]">
                  How I work in enterprise AI deployments
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[var(--dossier-body)]">
                  Swiss enterprise context, regulated environments, and cross-functional delivery.
                </p>
              </div>
              <div className="dossier-fit-stack">
                {qualificationPillars.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <article key={pillar.title} className="dossier-fit-point">
                      <div className="mb-2 flex items-center gap-2">
                        <Icon className="h-4 w-4" style={{ color: "#10a37f" }} />
                        <h3>{pillar.title}</h3>
                      </div>
                      <p>{pillar.detail}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="dossier-section relative z-[2] pt-6">
          <div className="mx-auto max-w-[1200px] px-4 md:px-8">
            <h2 className="text-[clamp(28px,3.5vw,42px)] font-semibold tracking-[-0.04em] text-[var(--dossier-ink)]">
              90-second walkthrough
            </h2>
            <div className="mt-5">
              <LoomVideoFrame
                companyName="OpenAI"
                roleTitle="Forward Deployed Engineer (Zurich)"
                videoTitle="How I deploy AI in enterprise teams"
                accentColor="#10a37f"
                showChapters={false}
              />
            </div>
          </div>
        </section>

        <section className="dossier-section relative z-[2] pt-6">
          <div className="mx-auto max-w-[1200px] px-4 md:px-8">
            <h2 className="text-[clamp(28px,3.7vw,44px)] font-semibold tracking-[-0.04em] text-[var(--dossier-ink)]">
              Three recent deployments
            </h2>
            <div className="mt-6 space-y-6">
              {deployments.map((deployment, index) => (
                <article
                  key={deployment.title}
                  className="overflow-hidden border border-[var(--dossier-line-strong)] bg-white shadow-[8px_8px_0_#ece8df]"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--dossier-line-strong)] bg-[#faf8f4] px-5 py-4 md:px-6">
                    <h3 className="text-[clamp(24px,2.8vw,36px)] font-semibold tracking-[-0.03em] text-[var(--dossier-ink)]">
                      {deployment.title}
                    </h3>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#10a37f]">
                      Deployment {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="grid gap-0 md:grid-cols-3">
                    <div className="border-b border-[var(--dossier-line-strong)] p-5 md:border-b-0 md:border-r md:p-6">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--dossier-subtle)]">
                        Challenge
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--dossier-muted)]">
                        {deployment.challenge}
                      </p>
                    </div>
                    <div className="border-b border-[var(--dossier-line-strong)] p-5 md:border-b-0 md:border-r md:p-6">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--dossier-subtle)]">
                        My role
                      </p>
                      <ul className="mt-2 space-y-2 text-sm leading-relaxed text-[var(--dossier-muted)]">
                        {deployment.role.map((item) => (
                          <li
                            key={item}
                            className="relative pl-4 before:absolute before:left-0 before:top-[0.62em] before:h-1 before:w-1 before:rounded-full before:bg-[#10a37f]"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-5 md:p-6">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--dossier-subtle)]">
                        Outcome
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--dossier-muted)]">
                        {deployment.outcome}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="dossier-section relative z-[2] pt-6">
          <div className="mx-auto max-w-[1200px] px-4 md:px-8">
            <h2 className="text-[clamp(26px,3.2vw,36px)] font-semibold tracking-[-0.03em] text-[var(--dossier-ink)]">
              Lessons I&apos;ve learned from deploying AI in companies
            </h2>
            <div className="mt-5 border border-[var(--dossier-line-strong)] bg-white p-6">
              <div className="grid gap-5 md:grid-cols-[0.95fr_1.05fr]">
                <p className="text-sm leading-relaxed text-[var(--dossier-muted)]">
                  The model is rarely the bottleneck. Trust, ownership, and alignment are usually
                  the real blockers.
                </p>
                <ul className="space-y-2 text-sm leading-relaxed text-[var(--dossier-body)]">
                  {deploymentLessons.map((issue) => (
                    <li key={issue} className="border-b border-[var(--dossier-line-strong)] pb-2">
                      {issue}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="dossier-section relative z-[2] pt-6">
          <div className="mx-auto max-w-[1200px] px-4 md:px-8">
            <h2 className="text-[clamp(28px,3.5vw,42px)] font-semibold tracking-[-0.04em] text-[var(--dossier-ink)]">
              Selected projects
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--dossier-muted)]">
              Six selected projects with concise problem and solution framing.
            </p>
            <div className="dossier-project-grid mt-6">
              {selectedProjects.map((project, index) => (
                <article
                  key={project.name}
                  className={`dossier-project-card accent-${project.accent}`}
                >
                  <ProjectMeaningVisual graphic={project.graphic} />
                  <div className="flex flex-col p-6 md:p-7">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <span className="text-[11px] font-medium" style={{ color: "#10a37f" }}>
                        {project.category}
                      </span>
                      <span className="text-[11px] text-[var(--dossier-muted)]">
                        {project.stage}
                      </span>
                    </div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--dossier-subtle)]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight text-[var(--dossier-ink)]">
                      {project.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--dossier-body)]">
                      <span className="font-medium text-[var(--dossier-ink)]">Problem:</span>{" "}
                      {project.problem}
                    </p>
                    <p className="mt-2 border-t border-[var(--dossier-line-strong)] pt-3 text-sm leading-relaxed text-[var(--dossier-body)]">
                      <span className="font-medium text-[var(--dossier-ink)]">Solution:</span>{" "}
                      {project.solution}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="dossier-section relative z-[2] pb-20 pt-8">
          <div className="mx-auto max-w-[1200px] px-4 md:px-8">
            <div className="border border-[var(--dossier-line-strong)] bg-white p-7 md:p-9">
              <h2 className="text-[clamp(30px,4vw,48px)] font-semibold tracking-[-0.04em] text-[var(--dossier-ink)]">
                I would love to join as Forward Deployed Engineer.
              </h2>
              <p className="mt-4 max-w-[68ch] text-sm leading-relaxed text-[var(--dossier-muted)] md:text-[15px]">
                I am motivated to bring this execution style into OpenAI projects and enterprise
                relationships across Switzerland.
              </p>
              <a
                href="mailto:terencela.yt@gmail.com"
                className="dossier-button-primary dossier-cta-accent dossier-pressable mt-6 inline-flex"
              >
                terencela.yt@gmail.com
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </DossierThemeProvider>
  );
}
