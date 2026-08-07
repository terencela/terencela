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
import { motion, useReducedMotion } from "framer-motion";
import { DossierBackground } from "@/app/components/shared/DossierBackground";
import { SubpageHeader } from "@/app/components/shared/SubpageHeader";
import { LoomVideoFrame } from "@/app/components/shared/LoomVideoFrame";
import { DossierThemeProvider } from "@/app/lib/dossier-theme";

const EASE_OUT_STRONG = [0.23, 1, 0.32, 1] as const;

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
    subtitle: "Voice AI for the airport call center, from discovery through formal tender.",
    challenge:
      "Large enterprise, many stakeholders, regulated environment, trust constraints.",
    stats: [
      { value: "~85K", label: "calls/year" },
      { value: "8 FTE", label: "call center" },
      { value: "Regulated", label: "environment" },
    ],
    role: [
      "Discovery",
      "Use-case prioritisation",
      "Architecture and prototype",
      "Vendor evaluation",
      "Governance",
    ],
    outcomeHighlight: "Working PoC in two weeks.",
    outcome:
      "Moved into a formal tender. Built stakeholder trust across the organization. Procurement ongoing.",
  },
  {
    title: "ZRH Insider - Employee App Rebuild",
    subtitle: "Merging three fragmented codebases into one foundation for 35K airport employees.",
    challenge:
      "Fragmented Android/iOS codebases slowed delivery and experimentation.",
    stats: [
      { value: "35K", label: "employees" },
      { value: "3 to 1", label: "codebases merged" },
    ],
    role: [
      "Rebuilt the app foundation in one month",
      "Consolidated architecture for faster rollout",
      "Designed retention and engagement loops",
    ],
    outcomeHighlight: "Production rebuild shipped.",
    outcome:
      "Externally quoted at CHF 350K. Created a scalable base for future features and engagement.",
  },
  {
    title: "Engineering Office LAJO - AI-Native Operations",
    subtitle: "Building a company knowledge base as foundation for proposals, project intelligence, and automation.",
    challenge:
      "Scattered project data, no prep time before sales meetings, manual proposal work.",
    stats: [
      { value: "98%", label: "accuracy rate" },
      { value: "60%", label: "time saved per proposal" },
    ],
    role: [
      "Designed a PoC before the first sales meeting",
      "Built knowledge base with OCR and model routing",
      "Secured a paid workshop and moved into delivery",
    ],
    outcomeHighlight: "Impressed stakeholders before the first meeting.",
    outcome:
      "Knowledge base is the first layer. Proposals are the first use case. Workflow automation is next.",
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

const projectAccents: Record<SelectedProject["graphic"], string> = {
  "employee-app": "rgba(16,163,127,0.12)",
  "voice-ai": "rgba(242,184,91,0.12)",
  "proposal-copilot": "rgba(99,118,255,0.12)",
  "company-brain": "rgba(107,184,255,0.12)",
  "privacy-layer": "rgba(84,207,234,0.12)",
  "vibe-translator": "rgba(156,108,255,0.12)",
};

function ProjectMeaningVisual({
  graphic,
}: {
  graphic: SelectedProject["graphic"];
}) {
  const accent = projectAccents[graphic];
  return (
    <div
      className="project-visual relative overflow-hidden"
      aria-hidden="true"
      style={{ background: `radial-gradient(circle at 30% 30%, ${accent}, transparent 70%)` }}
    />
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
                <div className="mt-auto flex flex-wrap items-center gap-x-1.5 gap-y-2 pt-6">
                  {[
                    { icon: Search, label: "Discover" },
                    { icon: Building2, label: "Build" },
                    { icon: ArrowUpRight, label: "Deploy" },
                    { icon: Users, label: "Adopt" },
                    { icon: ShieldCheck, label: "Govern" },
                  ].map((step, i) => (
                    <React.Fragment key={step.label}>
                      <div className="flex flex-col items-center gap-1">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#10a37f]/[0.08]">
                          <step.icon className="h-3.5 w-3.5 text-[#10a37f]" />
                        </span>
                        <span className="text-[8px] font-medium text-[var(--dossier-muted)]">{step.label}</span>
                      </div>
                      {i < 4 && <ArrowRight className="mt-[-10px] h-2.5 w-2.5 shrink-0 text-[var(--dossier-subtle)]" />}
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

        <section className="dossier-section relative z-[2] pt-8">
          <div className="mx-auto max-w-[1200px] px-4 md:px-8">
            <motion.h2
              className="text-[clamp(28px,3.7vw,44px)] font-semibold tracking-[-0.04em] text-[var(--dossier-ink)]"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE_OUT_STRONG }}
            >
              Three recent deployments
            </motion.h2>

            <motion.article
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{ duration: 0.6, ease: EASE_OUT_STRONG }}
              className="mt-6 rounded-xl border border-[var(--dossier-line)] bg-[var(--dossier-panel)]"
            >
              <div className="p-5 md:p-7">
                <h3 className="text-[clamp(20px,2.4vw,28px)] font-semibold tracking-[-0.02em] text-[var(--dossier-ink)]">
                  {deployments[0].title}
                </h3>
                <p className="mt-1 max-w-[55ch] text-[13px] leading-relaxed text-[var(--dossier-muted)]">
                  {deployments[0].subtitle}
                </p>

                <div className="mt-5 flex flex-wrap gap-8">
                  {deployments[0].stats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 + i * 0.06, ease: EASE_OUT_STRONG }}
                    >
                      <p className="text-xl font-semibold tracking-tight text-[var(--dossier-ink)]">
                        {stat.value}
                      </p>
                      <p className="text-[11px] text-[var(--dossier-muted)]">
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 grid gap-5 border-t border-[var(--dossier-line)] pt-5 lg:grid-cols-[1fr_1fr]">
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-[var(--dossier-subtle)]">
                      My role
                    </p>
                    <ul className="mt-2.5 space-y-1.5 text-[13px] leading-relaxed text-[var(--dossier-body)]">
                      {deployments[0].role.map((item) => (
                        <li key={item} className="relative pl-3 before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-[var(--dossier-subtle)]">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-[var(--dossier-subtle)]">
                      Outcome
                    </p>
                    <p className="mt-2.5 text-[13px] leading-relaxed text-[var(--dossier-body)]">
                      <span className="font-semibold text-[var(--dossier-ink)]">
                        {deployments[0].outcomeHighlight}
                      </span>{" "}
                      {deployments[0].outcome}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>

            <div className="mt-3 grid gap-3 md:grid-cols-2">
              {deployments.slice(1).map((deployment, idx) => (
                <motion.article
                  key={deployment.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: EASE_OUT_STRONG }}
                  className="rounded-xl border border-[var(--dossier-line)] bg-[var(--dossier-panel)]"
                >
                  <div className="p-5">
                    <h3 className="text-base font-semibold tracking-tight text-[var(--dossier-ink)]">
                      {deployment.title}
                    </h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-[var(--dossier-muted)]">
                      {deployment.subtitle}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-5">
                      {deployment.stats.map((stat) => (
                        <div key={stat.label}>
                          <p className="text-lg font-semibold tracking-tight text-[var(--dossier-ink)]">
                            {stat.value}
                          </p>
                          <p className="text-[11px] text-[var(--dossier-muted)]">{stat.label}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 border-t border-[var(--dossier-line)] pt-4">
                      <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-[var(--dossier-subtle)]">
                        My role
                      </p>
                      <ul className="mt-2 space-y-1 text-[13px] leading-relaxed text-[var(--dossier-body)]">
                        {deployment.role.map((item) => (
                          <li key={item} className="relative pl-3 before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-[var(--dossier-subtle)]">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4 border-t border-[var(--dossier-line)] pt-4">
                      <p className="text-[13px] leading-relaxed text-[var(--dossier-body)]">
                        <span className="font-semibold text-[var(--dossier-ink)]">
                          {deployment.outcomeHighlight}
                        </span>{" "}
                        {deployment.outcome}
                      </p>
                    </div>
                  </div>
                </motion.article>
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

        <section className="dossier-section relative z-[2] pt-8">
          <div className="mx-auto max-w-[1200px] px-4 md:px-8">
            <div className="rounded-xl border border-[var(--dossier-line)] bg-[var(--dossier-panel)] p-5 md:p-7">
              <div className="grid items-center gap-6 lg:grid-cols-[1fr_1fr]">
                <div>
                  <h2 className="text-[clamp(22px,2.6vw,30px)] font-semibold tracking-[-0.03em] text-[var(--dossier-ink)]">
                    How I move from zero to deployed
                  </h2>
                  <p className="mt-1.5 max-w-[40ch] text-[13px] leading-relaxed text-[var(--dossier-muted)]">
                    I built a toolkit for each stage. It compounds across engagements.
                  </p>

                  <div className="mt-5 grid gap-3 border-t border-[var(--dossier-line)] pt-5 sm:grid-cols-3">
                    {[
                      { label: "Business", desc: "Value, ownership, ROI" },
                      { label: "System", desc: "Architecture, security, data" },
                      { label: "Adoption", desc: "People, workflows, trust" },
                    ].map((dim) => (
                      <div key={dim.label}>
                        <p className="text-[13px] font-semibold text-[var(--dossier-ink)]">{dim.label}</p>
                        <p className="mt-0.5 text-[12px] text-[var(--dossier-muted)]">{dim.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <motion.div
                  className="relative mx-auto aspect-square w-full max-w-[320px]"
                  initial={reduceMotion ? false : { opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: EASE_OUT_STRONG }}
                >
                  <svg viewBox="0 0 340 340" className="mx-auto block h-full w-full" fill="none">
                    <motion.circle
                      cx={170} cy={170} r={100}
                      stroke="var(--dossier-line)"
                      strokeWidth="1"
                      strokeDasharray={628}
                      initial={reduceMotion ? { strokeDashoffset: 0 } : { strokeDashoffset: 628 }}
                      whileInView={{ strokeDashoffset: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                    />
                    {[
                      { x: 228.8, y: 89.1, r: 36 },
                      { x: 265.1, y: 200.9, r: 108 },
                      { x: 170, y: 270, r: 180 },
                      { x: 74.9, y: 200.9, r: 252 },
                      { x: 111.2, y: 89.1, r: 324 },
                    ].map((arrow, i) => (
                      <motion.g
                        key={i}
                        transform={`translate(${arrow.x}, ${arrow.y}) rotate(${arrow.r})`}
                        initial={reduceMotion ? false : { opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 1.0 + i * 0.06, ease: EASE_OUT_STRONG }}
                      >
                        <path d="M -3.5 -2.5 L 1.5 0 L -3.5 2.5" stroke="var(--dossier-subtle)" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                      </motion.g>
                    ))}
                  </svg>

                  {[
                    { label: "Discover", top: "11.8%", left: "50%" },
                    { label: "Decide", top: "38.2%", left: "86.4%" },
                    { label: "Build", top: "80.9%", left: "72.5%" },
                    { label: "Deploy", top: "80.9%", left: "27.5%" },
                    { label: "Scale", top: "38.2%", left: "13.6%" },
                  ].map((stage, i) => (
                    <motion.p
                      key={stage.label}
                      className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[13px] font-semibold text-[var(--dossier-ink)]"
                      style={{ top: stage.top, left: stage.left }}
                      initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 + i * 0.1, ease: EASE_OUT_STRONG }}
                    >
                      {stage.label}
                    </motion.p>
                  ))}

                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-center text-[11px] leading-tight text-[var(--dossier-muted)]">
                      Continuous<br />Learning
                    </p>
                  </div>
                </motion.div>
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
                Ready to start.
              </h2>
              <p className="mt-4 max-w-[68ch] text-sm leading-relaxed text-[var(--dossier-muted)] md:text-[15px]">
                I am already doing Forward Deployed work across regulated enterprises in Zurich. If OpenAI wants someone who gets enterprise AI from pilot to adoption, let&apos;s talk.
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
