"use client";

import type { CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
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

type CredibilityScriptItem = {
  name: string;
  detail: string;
};

type SelectedProject = {
  name: string;
  category: string;
  stage: string;
  accent: string;
  visualIcon: LucideIcon;
  visualTitle: string;
  visualNote: string;
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

const credibilityScript: CredibilityScriptItem[] = [
  { name: "Zurich Airport", detail: "AI Lead" },
  { name: "Credit Suisse", detail: "Chairman's Office" },
  { name: "PwC", detail: "Transfer pricing" },
  { name: "Forbes", detail: "30 Under 30 DACH" },
  { name: "TEDx", detail: "2x speaker" },
  { name: "HSG", detail: "Master's degree" },
];

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

const loomChapters = [
  {
    time: "0:00",
    title: "Context",
    desc: "What role I play in enterprise AI deployments.",
  },
  {
    time: "0:30",
    title: "Recent deployments",
    desc: "Three concrete examples with challenge, role, and outcome.",
  },
  {
    time: "1:00",
    title: "Day one value",
    desc: "How I would operate on OpenAI customer projects in Zurich.",
  },
];

const selectedProjects: SelectedProject[] = [
  {
    name: "ZRH Insider",
    category: "Internal employee app",
    stage: "Live rebuild",
    accent: "green",
    visualIcon: Building2,
    visualTitle: "App foundation rebuild",
    visualNote: "One shared base for faster releases and retention work.",
    problem: "The internal employee app needed faster iteration and stronger user retention.",
    solution: "Rebuilt the foundation in one month so product teams can ship and test faster.",
  },
  {
    name: "Zurich Airport Voice AI Agent",
    category: "Operations AI",
    stage: "PoC to tender",
    accent: "amber",
    visualIcon: Mic,
    visualTitle: "Voice AI workflow",
    visualNote: "Call routing, escalation logic, and stakeholder governance.",
    problem: "High call volume and long support time in a regulated airport environment.",
    solution:
      "Scoped and delivered a Voice AI PoC in two weeks, then moved it into formal tender and governance.",
  },
  {
    name: "Engineering Office Copilot",
    category: "SME deployment",
    stage: "In delivery",
    accent: "blue",
    visualIcon: FileText,
    visualTitle: "Proposal copilot",
    visualNote: "OCR, retrieval, and model routing for proposal prep.",
    problem: "Proposal preparation was slow because knowledge was scattered across systems.",
    solution: "Built OCR + RAG + routing workflows to produce proposal-ready drafts much faster.",
  },
  {
    name: "Company Brain",
    category: "Knowledge systems",
    stage: "Building",
    accent: "sky",
    visualIcon: Database,
    visualTitle: "Knowledge retrieval",
    visualNote: "One trusted layer across docs, decisions, and context.",
    problem: "Teams lose time searching across documents, decisions, and fragmented context.",
    solution: "Centralize retrieval with source-grounded answers so teams can execute with confidence.",
  },
  {
    name: "Privacy Layer",
    category: "AI infrastructure",
    stage: "Prototype",
    accent: "cyan",
    visualIcon: ShieldCheck,
    visualTitle: "Policy layer",
    visualNote: "Redaction, routing, and guardrails before model calls.",
    problem: "Organizations need usable AI workflows without exposing sensitive operational data.",
    solution: "Introduce pre-model controls for redaction, routing, and policy enforcement by default.",
  },
  {
    name: "Vibe Translator",
    category: "Human context AI",
    stage: "Prototype",
    accent: "violet",
    visualIcon: MessageSquareText,
    visualTitle: "Context-aware messaging",
    visualNote: "Interpret intent before drafting responses.",
    problem:
      "Intent often gets lost when language is interpreted without relationship and cultural context.",
    solution: "Decode communication context before response drafting to reduce social and business friction.",
  },
];

const accentStyles = {
  "--hero-accent": "#10a37f",
} as CSSProperties;

function ProjectMeaningVisual({
  icon: Icon,
  title,
  note,
}: {
  icon: LucideIcon;
  title: string;
  note: string;
}) {
  return (
    <div className="project-visual flex flex-col justify-between p-6 md:p-7" aria-hidden="true">
      <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--dossier-subtle)]">
        <Icon className="h-4 w-4" style={{ color: "var(--accent)" }} />
        <span>{title}</span>
      </div>
      <p className="max-w-[20ch] text-sm leading-relaxed text-[var(--dossier-body)]">{note}</p>
    </div>
  );
}

export function OpenAIApplicationPage() {
  const reduceMotion = useReducedMotion();

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
                <h1 className="dossier-hero-title">Forward Deployed Engineer, Zurich.</h1>
                <p className="mt-6 max-w-[68ch] text-base leading-relaxed text-[var(--dossier-body)]">
                  I lead enterprise AI deployment at Zurich Airport and through KI Unlocked. I build
                  working systems across regulated environments and bridge business and engineering
                  in delivery-critical projects.
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
          <div className="overflow-hidden border-y border-[var(--dossier-line-strong)] bg-white/85 py-5">
            <motion.div
              className="flex w-max gap-4"
              animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
              transition={
                reduceMotion ? undefined : { duration: 28, ease: "linear", repeat: Infinity }
              }
            >
              {[0, 1].map((copy) => (
                <div key={copy} className="flex shrink-0 items-center gap-4">
                  {credibilityScript.map((item) => (
                    <span
                      key={`${copy}-${item.name}`}
                      className="inline-flex items-center gap-2 border border-[var(--dossier-line-strong)] bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--dossier-ink)]"
                      style={{ transform: "rotate(-12deg)" }}
                    >
                      <span>{item.name}</span>
                      <span className="text-[10px] normal-case tracking-normal text-[var(--dossier-muted)]">
                        {item.detail}
                      </span>
                    </span>
                  ))}
                </div>
              ))}
            </motion.div>
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
            <p className="mt-3 max-w-[64ch] text-sm leading-relaxed text-[var(--dossier-muted)]">
              Short video with context, deployments, and how I would contribute in this role.
            </p>
            <div className="mt-5">
              <LoomVideoFrame
                companyName="OpenAI"
                roleTitle="Forward Deployed Engineer (Zurich)"
                videoTitle="How I deploy AI in enterprise teams"
                accentColor="#10a37f"
                chapters={loomChapters}
              />
            </div>
          </div>
        </section>

        <section className="dossier-section relative z-[2] pt-6">
          <div className="mx-auto max-w-[1200px] px-4 md:px-8">
            <h2 className="text-[clamp(28px,3.7vw,44px)] font-semibold tracking-[-0.04em] text-[var(--dossier-ink)]">
              Three recent deployments
            </h2>
            <div className="mt-6 space-y-5">
              {deployments.map((deployment) => (
                <article
                  key={deployment.title}
                  className="border border-[var(--dossier-line-strong)] bg-white p-6 md:p-7"
                >
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-[var(--dossier-ink)]">
                    {deployment.title}
                  </h3>
                  <div className="mt-5 grid gap-5 md:grid-cols-3">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--dossier-subtle)]">
                        Challenge
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--dossier-muted)]">
                        {deployment.challenge}
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--dossier-subtle)]">
                        My role
                      </p>
                      <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-[var(--dossier-muted)]">
                        {deployment.role.map((item) => (
                          <li key={item}>- {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
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
                  <ProjectMeaningVisual
                    icon={project.visualIcon}
                    title={project.visualTitle}
                    note={project.visualNote}
                  />
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
