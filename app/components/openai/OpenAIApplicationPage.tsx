"use client";

import React, { type CSSProperties } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  BriefcaseBusiness,
  Building2,
  Cpu,
  Database,
  FileText,
  MessageSquareText,
  Mic,
  Search,
  ShieldCheck,
  Users,
  Workflow,
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

type DeploymentStat = {
  value: string;
  label: string;
  sub?: string;
};

type DeploymentExample = {
  title: string;
  subtitle: string;
  challenge: string;
  stats: DeploymentStat[];
  role: string[];
  outcome: string;
  outcomeHighlight: string;
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

const credibilityLogos = [
  "Zurich Airport",
  "UBS",
  "PwC",
  "World Economic Forum",
  "SAP",
  "Forbes",
  "TEDx",
  "HSG",
] as const;

const deployments: DeploymentExample[] = [
  {
    title: "Zurich Airport - Voice AI Agent",
    subtitle: "Building a voice AI agent for the airport's call center from concept to formal tender.",
    challenge:
      "Large enterprise setup, many stakeholders, regulated environment, and clear trust constraints.",
    stats: [
      { value: "~85K", label: "calls per year", sub: "~150K minutes handled" },
      { value: "8 FTE", label: "capacity", sub: "in the call center" },
      { value: "Enterprise", label: "environment", sub: "Highly regulated & trust-critical" },
    ],
    role: [
      "Discovery",
      "Use-case prioritisation",
      "Architecture",
      "Prototype",
      "Vendor evaluation",
      "Governance",
    ],
    outcomeHighlight: "Delivered a working PoC in two weeks",
    outcome:
      "and moved it into a formal tender. Strengthened stakeholder trust and alignment. Procurement process is ongoing.",
  },
  {
    title: "ZRH Insider - Employee App Rebuild",
    subtitle: "Rebuilding the internal airport app to create a solid foundation for future features and engagement.",
    challenge:
      "Three fragmented codebases for Android and iOS slowed delivery and experimentation for 35,000 employees.",
    stats: [
      { value: "35K", label: "employees", sub: "active on the app" },
      { value: "2", label: "codebases", sub: "successfully merged" },
      { value: "1 month", label: "rebuild", sub: "from foundation to rollout" },
    ],
    role: [
      "Rebuilt the app foundation in one month",
      "Consolidated architecture for faster rollout",
      "Focused roadmap on engagement and retention loops",
    ],
    outcomeHighlight: "Shipped a production-ready rebuild",
    outcome:
      "that was externally quoted at CHF 350k, and created a faster, scalable base for future features.",
  },
  {
    title: "Engineering Office LAJO - Proposal Copilot",
    subtitle: "Designing an AI copilot to draft proposals from scattered project data.",
    challenge:
      "Very little prep time for proposals and scattered information across systems before sales meetings.",
    stats: [
      { value: "95-98%", label: "retrieval accuracy", sub: "on scoped tests" },
      { value: "~40%", label: "time savings", sub: "per proposal expected" },
    ],
    role: [
      "Designed PoC before the first sales meeting",
      "Set up OCR + model routing + RAG retrieval",
      "Secured a workshop and moved into delivery",
    ],
    outcomeHighlight: "Impressed stakeholders before the first meeting",
    outcome:
      "and secured a paid workshop. Now delivering the deployment with high retrieval accuracy and measurable time savings.",
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
            <div className="border-y border-[var(--dossier-line)] py-4 md:py-5">
              <div className="flex flex-wrap items-center justify-center gap-2 md:gap-2.5">
                {credibilityLogos.map((logo) => (
                  <div
                    key={logo}
                    className="rounded-full border border-[var(--dossier-line)] px-3.5 py-1.5 text-[13px] font-normal tracking-[-0.005em] text-[var(--dossier-subtle)]"
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
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#10a37f]">
              How I work
            </p>
            <h2 className="mt-2 text-[clamp(28px,3.5vw,42px)] font-semibold tracking-[-0.04em] text-[var(--dossier-ink)]">
              My approach to enterprise AI delivery.
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <article className="flex flex-col rounded-xl border border-[var(--dossier-line)] bg-[var(--dossier-panel)] p-6 pb-7">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#10a37f]/[0.08]">
                  <Workflow className="h-6 w-6 text-[#10a37f]" />
                </div>
                <h3 className="text-[15px] font-semibold tracking-tight text-[var(--dossier-ink)]">
                  Enterprise deployment
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[var(--dossier-muted)]">
                  From discovery to production, adoption and governance.
                </p>
                <div className="mt-auto flex items-center gap-1 pt-6">
                  {[
                    { icon: Search, label: "Discover" },
                    { icon: Building2, label: "Build" },
                    { icon: ArrowUpRight, label: "Deploy" },
                    { icon: Users, label: "Adopt" },
                    { icon: ShieldCheck, label: "Govern" },
                  ].map((step, i) => (
                    <React.Fragment key={step.label}>
                      <div className="flex flex-col items-center gap-1">
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#10a37f]/[0.08]">
                          <step.icon className="h-4 w-4 text-[#10a37f]" />
                        </span>
                        <span className="text-[9px] font-medium text-[var(--dossier-muted)]">{step.label}</span>
                      </div>
                      {i < 4 && <ArrowRight className="mx-0.5 mt-[-10px] h-3 w-3 shrink-0 text-[var(--dossier-subtle)]" />}
                    </React.Fragment>
                  ))}
                </div>
              </article>

              <article className="flex flex-col rounded-xl border border-[var(--dossier-line)] bg-[var(--dossier-panel)] p-6 pb-7">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#10a37f]/[0.08]">
                  <Cpu className="h-6 w-6 text-[#10a37f]" />
                </div>
                <h3 className="text-[15px] font-semibold tracking-tight text-[var(--dossier-ink)]">
                  AI builder
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[var(--dossier-muted)]">
                  15+ products across agents, RAG, voice AI, company knowledge and eval loops.
                </p>
                <div className="mt-auto flex items-center gap-3 pt-6">
                  {[Bot, FileText, Mic, Database, MessageSquareText].map((Icon, i) => (
                    <span
                      key={i}
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#10a37f]/[0.08]"
                    >
                      <Icon className="h-4 w-4 text-[#10a37f]" />
                    </span>
                  ))}
                </div>
              </article>

              <article className="flex flex-col rounded-xl border border-[var(--dossier-line)] bg-[var(--dossier-panel)] p-6 pb-7">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#10a37f]/[0.08]">
                  <Users className="h-6 w-6 text-[#10a37f]" />
                </div>
                <h3 className="text-[15px] font-semibold tracking-tight text-[var(--dossier-ink)]">
                  Business x Engineering
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[var(--dossier-muted)]">
                  Translate between executives, engineers and end users to keep projects moving.
                </p>
                <div className="mt-auto pt-6">
                  <svg viewBox="0 0 200 72" className="h-[64px] w-full max-w-[200px]" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <text x="8" y="12" fontSize="11" fontWeight="600" className="fill-[var(--dossier-ink)]">Business</text>
                    <text x="132" y="12" fontSize="11" fontWeight="600" className="fill-[var(--dossier-ink)]">Engineering</text>
                    <text x="78" y="68" fontSize="11" fontWeight="600" className="fill-[var(--dossier-ink)]">User</text>
                    <line x1="55" y1="16" x2="130" y2="16" stroke="#10a37f" strokeWidth="1.2" />
                    <line x1="45" y1="18" x2="88" y2="54" stroke="#10a37f" strokeWidth="1.2" />
                    <line x1="155" y1="18" x2="105" y2="54" stroke="#10a37f" strokeWidth="1.2" />
                  </svg>
                </div>
              </article>
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
            <div className="mt-6 space-y-8">
              {deployments.map((deployment, index) => (
                <article
                  key={deployment.title}
                  className="overflow-hidden border border-[var(--dossier-line-strong)] bg-[var(--dossier-panel)]"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--dossier-line-strong)] px-5 py-3 md:px-7">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#10a37f]">
                      Deployment {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="px-5 pb-2 pt-5 md:px-7 md:pt-6">
                    <h3 className="text-[clamp(22px,2.6vw,32px)] font-semibold tracking-[-0.03em] text-[var(--dossier-ink)]">
                      {deployment.title}
                    </h3>
                    <p className="mt-1.5 max-w-[60ch] text-sm leading-relaxed text-[var(--dossier-muted)]">
                      {deployment.subtitle}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 px-5 py-4 md:gap-6 md:px-7">
                    {deployment.stats.map((stat) => (
                      <div key={stat.label} className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#10a37f]/10">
                          <div className="h-3.5 w-3.5 rounded-full border-2 border-[#10a37f]" />
                        </div>
                        <div>
                          <p className="text-lg font-semibold tracking-tight text-[var(--dossier-ink)]">
                            {stat.value}
                          </p>
                          <p className="text-xs font-medium text-[var(--dossier-body)]">{stat.label}</p>
                          {stat.sub && (
                            <p className="text-[11px] text-[var(--dossier-muted)]">{stat.sub}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid gap-0 border-t border-[var(--dossier-line-strong)] md:grid-cols-2">
                    <div className="border-b border-[var(--dossier-line-strong)] p-5 md:border-b-0 md:border-r md:p-7">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--dossier-subtle)]">
                        My role
                      </p>
                      <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-[var(--dossier-body)]">
                        {deployment.role.map((item) => (
                          <li
                            key={item}
                            className="relative pl-4 before:absolute before:left-0 before:top-[0.62em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#10a37f]"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-5 md:p-7">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#10a37f]">
                        Outcome
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-[var(--dossier-body)]">
                        <span className="font-semibold text-[var(--dossier-ink)]">
                          {deployment.outcomeHighlight}
                        </span>{" "}
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
            <div className="mt-5 border border-[var(--dossier-line-strong)] bg-[var(--dossier-panel)] p-6">
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
            <div className="border border-[var(--dossier-line-strong)] bg-[var(--dossier-panel)] p-7 md:p-9">
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
