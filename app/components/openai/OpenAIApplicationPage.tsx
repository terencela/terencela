"use client";

import React, { useState, type CSSProperties } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
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
import { ProductVisual } from "@/app/components/shared/ProductVisual";
import { DossierThemeProvider } from "@/app/lib/dossier-theme";

const EASE_OUT_STRONG = [0.23, 1, 0.32, 1] as const;

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
  visual: string;
  description: string;
  evidence: string;
  url?: string;
};

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
    subtitle: "Voice AI for 85K annual calls. Discovery through formal tender.",
    challenge:
      "Regulated environment, multi-stakeholder, trust constraints.",
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
    outcomeHighlight: "PoC in two weeks.",
    outcome: "Formal tender initiated. Procurement ongoing.",
  },
  {
    title: "ZRH Insider - Employee App Rebuild",
    subtitle: "Three codebases merged into one foundation for 35K employees.",
    challenge: "Fragmented Android/iOS slowed delivery.",
    stats: [
      { value: "35K", label: "employees" },
      { value: "3 to 1", label: "codebases merged" },
    ],
    role: [
      "Rebuilt app foundation in one month",
      "Consolidated architecture for faster rollout",
      "Designed engagement loops",
    ],
    outcomeHighlight: "Shipped.",
    outcome: "Externally quoted at CHF 350K. Scalable base for future features.",
  },
  {
    title: "Engineering Office LAJO - AI-Native Operations",
    subtitle: "Company knowledge base powering proposals and project intelligence.",
    challenge: "Scattered data, manual proposal work, zero prep time.",
    stats: [
      { value: "98%", label: "accuracy rate" },
      { value: "60%", label: "time saved per proposal" },
    ],
    role: [
      "PoC ready before first sales meeting",
      "OCR + model routing + RAG pipeline",
      "Secured paid workshop, now in delivery",
    ],
    outcomeHighlight: "Won trust before the first meeting.",
    outcome: "Knowledge base live. Proposal automation next.",
  },
];

const selectedProjects: SelectedProject[] = [
  {
    name: "PrivacyLayer",
    category: "AI infrastructure",
    stage: "Live",
    accent: "green",
    visual: "privacy",
    description: "Browser-side PII stripping before prompts reach any model. Zero bytes to any server.",
    evidence: "Live product with Chrome extension",
    url: "https://privacy.terencela.com",
  },
  {
    name: "Engineering Office OS",
    category: "Enterprise AI",
    stage: "In delivery",
    accent: "blue",
    visual: "knowledge",
    description: "RAG + OCR pipeline connecting project history, decisions and expertise across offices.",
    evidence: "Vertical system designed",
  },
  {
    name: "Vibe Translator",
    category: "Human intelligence",
    stage: "Building",
    accent: "violet",
    visual: "messages",
    description: "Context layer decoding tone, personality and culture before generating responses.",
    evidence: "Interactive product prototype",
    url: "https://vibes.terencela.com",
  },
  {
    name: "AirCompanion",
    category: "Travel",
    stage: "Venture",
    accent: "cyan",
    visual: "travel",
    description: "Contextual AI companion for the full airport journey. Real-time, location-aware.",
    evidence: "Product system designed",
    url: "https://app.aircompanion.app",
  },
  {
    name: "Asia Bridge",
    category: "Cultural intelligence",
    stage: "Concept",
    accent: "red",
    visual: "culture",
    description: "Communication rules and social nuances of Asian cultures. Duolingo meets Grammarly.",
    evidence: "Product thesis developed",
    url: "https://asia.terencela.com",
  },
  {
    name: "Rehearse",
    category: "Simulation",
    stage: "Live",
    accent: "coral",
    visual: "rehearse",
    description: "AI role-play for sales, negotiations and difficult conversations. Real-time feedback.",
    evidence: "Interactive rehearsal flow",
    url: "https://rehearse-roleplay.vercel.app",
  },
  {
    name: "Treasure",
    category: "Voice AI",
    stage: "Testing",
    accent: "amber",
    visual: "voice",
    description: "Voice AI that captures family stories and preserves them across generations.",
    evidence: "Voice-first experience built",
    url: "https://treasures-bowl.vercel.app",
  },
];

const accentStyles = {
  "--hero-accent": "#10a37f",
} as CSSProperties;

const flywheelStages = [
  { label: "Discover", desc: "Map the problem, stakeholders and constraints." },
  { label: "Decide", desc: "Align budget owners, define what 'shipped' means." },
  { label: "Build", desc: "Prototype fast, validate with real users." },
  { label: "Deploy", desc: "Eval gates, data boundaries, rollback plans." },
  { label: "Scale", desc: "New teams, monitoring, feed learnings back." },
];

const stageSystemLinks = [
  { layerId: "intake", blocker: "Weak stakeholder alignment." },
  { layerId: "governance", blocker: "Low decision power from buyers and champions." },
  { layerId: "orchestration", blocker: "Edge cases break trust fast." },
  { layerId: "execution", blocker: "Fear of risk blocks go-live." },
  { layerId: "governance", blocker: "Trust and adoption decay without ownership." },
];

const archLayers = [
  {
    id: "intake",
    label: "Intake",
    nodes: ["Call arrives", "Language detect", "Intent classify"],
    color: "#10a37f",
  },
  {
    id: "orchestration",
    label: "Orchestration",
    nodes: ["Route to agent", "Context load", "Knowledge retrieval"],
    color: "#10a37f",
  },
  {
    id: "execution",
    label: "Execution",
    nodes: ["Generate response", "Safety filter", "Voice synthesis"],
    color: "#10a37f",
  },
  {
    id: "governance",
    label: "Governance",
    nodes: ["Eval gate", "Audit log", "Rollback trigger"],
    color: "#10a37f",
  },
];

function DeploymentArchitecture({
  reduceMotion,
  activeStageIdx,
  onStageSelect,
}: {
  reduceMotion: boolean | null;
  activeStageIdx: number;
  onStageSelect: (idx: number) => void;
}) {
  const activeLink = stageSystemLinks[activeStageIdx] ?? stageSystemLinks[0];
  const activeStage = flywheelStages[activeStageIdx] ?? flywheelStages[0];
  const activeLayer = archLayers.find((layer) => layer.id === activeLink.layerId) ?? archLayers[0];

  return (
    <section className="dossier-section relative z-[2] pt-6">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#10a37f]">
          Under the hood
        </p>
        <h2 className="mt-2 text-[clamp(22px,2.6vw,30px)] font-semibold tracking-[-0.03em] text-[var(--dossier-ink)]">
          How I architect a deployment
        </h2>
        <p className="mt-1.5 text-[13px] text-[var(--dossier-muted)]">
          Tap a stage - this layer and blocker update.
        </p>

        <div className="mt-4 grid gap-2 rounded-xl border border-[var(--dossier-line)] bg-[var(--dossier-panel)] p-3 text-[11px] md:grid-cols-3 md:items-center">
          <div className="rounded-md border border-[#10a37f]/30 bg-[#10a37f]/[0.06] px-3 py-2 text-[#10a37f]">
            Stage: <span className="font-semibold">{activeStage.label}</span>
          </div>
          <div className="rounded-md border border-[var(--dossier-line)] px-3 py-2 text-[var(--dossier-ink)]">
            Layer: <span className="font-semibold">{activeLayer.label}</span>
          </div>
          <div className="rounded-md border border-[var(--dossier-line)] px-3 py-2 text-[var(--dossier-body)]">
            Blocker: <span className="font-semibold text-[var(--dossier-ink)]">{activeLink.blocker}</span>
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-4">
          {archLayers.map((layer, li) => {
            const isActive = activeLayer.id === layer.id;
            return (
              <motion.button
                key={layer.id}
                type="button"
                className={`group relative rounded-xl border p-5 text-left transition-colors duration-200 ${
                  isActive
                    ? "border-[#10a37f]/40 bg-[#10a37f]/[0.06]"
                    : "border-[var(--dossier-line)] bg-[var(--dossier-panel)] hover:border-[#10a37f]/20"
                }`}
                onClick={() => {
                  const mappedIdx = stageSystemLinks.findIndex((item) => item.layerId === layer.id);
                  if (mappedIdx >= 0) onStageSelect(mappedIdx);
                }}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: li * 0.07, ease: EASE_OUT_STRONG }}
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-[#10a37f]">
                    L{li + 1}
                  </span>
                  <span
                    className={`h-1.5 w-1.5 rounded-full transition-colors ${
                      isActive ? "bg-[#10a37f]" : "bg-[var(--dossier-subtle)]"
                    }`}
                  />
                </div>
                <p className="text-[14px] font-semibold text-[var(--dossier-ink)]">
                  {layer.label}
                </p>
                <ul className={`mt-3 space-y-1.5 overflow-hidden transition-all duration-300 ${
                  isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0 sm:max-h-40 sm:opacity-60"
                }`}>
                  {layer.nodes.map((node) => (
                    <li
                      key={node}
                      className="flex items-center gap-2 text-[11px] text-[var(--dossier-muted)]"
                    >
                      <span className="h-px w-3 bg-[#10a37f]/40" />
                      {node}
                    </li>
                  ))}
                </ul>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DeploymentFlywheel({
  reduceMotion,
  activeStageIdx,
  onStageSelect,
  activeLayerLabel,
  activeBlocker,
}: {
  reduceMotion: boolean | null;
  activeStageIdx: number;
  onStageSelect: (idx: number) => void;
  activeLayerLabel: string;
  activeBlocker: string;
}) {
  const stages = flywheelStages;
  const R = 140;
  const cx = 200;
  const cy = 200;
  const startAngle = -90;
  const nodeR = 32;

  const positions = stages.map((_, i) => {
    const angle = startAngle + (i * 360) / stages.length;
    const rad = (angle * Math.PI) / 180;
    return { x: cx + R * Math.cos(rad), y: cy + R * Math.sin(rad) };
  });

  const active = stages[activeStageIdx] ?? stages[0];

  return (
    <section className="dossier-section relative z-[2] pt-6">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        <h2 className="text-center text-[clamp(22px,2.6vw,30px)] font-semibold tracking-[-0.03em] text-[var(--dossier-ink)]">
          How I move from zero to deployed
        </h2>
        <p className="mx-auto mt-1.5 max-w-[40ch] text-center text-[13px] text-[var(--dossier-muted)]">
          Tap a stage to inspect layer and blocker.
        </p>

        <motion.div
          className="relative mx-auto mt-6 w-full max-w-[380px]"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE_OUT_STRONG }}
        >
          <svg viewBox="0 0 400 400" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx={cx} cy={cy} r={R} stroke="var(--dossier-line)" strokeWidth="1" />

            <motion.circle
              cx={cx}
              cy={cy}
              r={R}
              stroke="#10a37f"
              strokeWidth="2"
              strokeDasharray={`${2 * Math.PI * R}`}
              strokeDashoffset={2 * Math.PI * R}
              strokeLinecap="round"
              style={{ transformOrigin: `${cx}px ${cy}px`, rotate: "-90deg" }}
              initial={reduceMotion ? { strokeDashoffset: 0 } : undefined}
              whileInView={reduceMotion ? undefined : { strokeDashoffset: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: [0.23, 1, 0.32, 1] }}
            />

            {positions.map((p, i) => {
              const next = positions[(i + 1) % positions.length];
              const mx = (p.x + next.x) / 2;
              const my = (p.y + next.y) / 2;
              const dx = next.x - p.x;
              const dy = next.y - p.y;
              const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
              return (
                <polygon
                  key={`arrow-${i}`}
                  points="0,-3 7,0 0,3"
                  fill="#10a37f"
                  opacity="0.5"
                  transform={`translate(${mx},${my}) rotate(${angle})`}
                />
              );
            })}

            {stages.map((stage, i) => {
              const p = positions[i];
              const isActive = activeStageIdx === i;
              return (
                <g
                  key={stage.label}
                  onClick={() => onStageSelect(i)}
                  className="cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") onStageSelect(i);
                  }}
                >
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r={nodeR}
                    fill={isActive ? "#10a37f" : "var(--dossier-panel)"}
                    stroke="#10a37f"
                    strokeWidth={isActive ? "2.5" : "1.5"}
                    className="transition-all duration-200"
                  />
                  <text
                    x={p.x}
                    y={p.y - 5}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill={isActive ? "#fff" : "#10a37f"}
                    fontSize="8"
                    fontWeight="700"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </text>
                  <text
                    x={p.x}
                    y={p.y + 8}
                    textAnchor="middle"
                    dominantBaseline="central"
                    className={isActive ? "fill-white" : "fill-[var(--dossier-ink)]"}
                    fontSize="9"
                    fontWeight="600"
                  >
                    {stage.label}
                  </text>
                </g>
              );
            })}

            <foreignObject x={cx - 90} y={cy - 44} width="180" height="88">
              <div className="flex h-full flex-col items-center justify-center text-center">
                <p className="text-[13px] font-bold tracking-tight text-[var(--dossier-ink)]">
                  {active.label}
                </p>
                <p className="mt-0.5 text-[8px] text-[#10a37f]">
                  {activeLayerLabel}
                </p>
                <p className="mt-0.5 text-[8px] leading-[1.35] text-[var(--dossier-muted)]">
                  {activeBlocker}
                </p>
              </div>
            </foreignObject>
          </svg>
        </motion.div>

        <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5 sm:hidden">
          {stages.map((stage, i) => {
            const isActive = i === activeStageIdx;
            return (
              <button
                key={stage.label}
                type="button"
                onClick={() => onStageSelect(i)}
                className={`rounded-full px-2.5 py-1 text-[10px] ${
                  isActive
                    ? "bg-[#10a37f] text-white"
                    : "border border-[var(--dossier-line)] text-[var(--dossier-muted)]"
                }`}
              >
                {String(i + 1).padStart(2, "0")} {stage.label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function OpenAIApplicationPage() {
  const reduceMotion = useReducedMotion();
  const [activeStageIdx, setActiveStageIdx] = useState(0);
  const activeLink = stageSystemLinks[activeStageIdx] ?? stageSystemLinks[0];
  const activeLayer = archLayers.find((layer) => layer.id === activeLink.layerId) ?? archLayers[0];

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

        <section className="dossier-section dossier-section-tight relative z-[2] !pb-4 !pt-7 md:!pt-10">
          <div className="mx-auto max-w-[1200px] px-4 md:px-8">
            <div className="grid items-start gap-5 md:grid-cols-[minmax(0,1fr)_minmax(180px,230px)] md:gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(220px,260px)]">
              <div className="max-w-[760px]">
                <p className="dossier-eyebrow">
                  <span aria-hidden="true" />
                  Application page
                </p>
                <h1 className="dossier-hero-title">I turn enterprise AI from idea into adoption.</h1>
                <p className="mt-4 max-w-[56ch] text-base leading-relaxed text-[var(--dossier-body)] md:mt-6">
                  AI lead at Zurich Airport. Builder at KI Unlocked. I ship where pilots die in procurement.
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-4 md:mt-7">
                  <a
                    href="https://about.terencela.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dossier-button-primary dossier-cta-accent dossier-pressable inline-flex"
                  >
                    Chat with TerenceAI
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="https://xp.terencela.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[13px] text-[var(--dossier-muted)] transition-colors duration-200 hover:text-[var(--dossier-ink)]"
                  >
                    Discover TerenceXP
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </div>

              <aside className="relative mx-auto mt-1 w-full max-w-[180px] sm:max-w-[210px] md:mx-0 md:mt-0 md:justify-self-end lg:max-w-[250px]">
                <div className="dossier-profile-frame aspect-[4/5] w-full">
                  <Image
                    src="/images/terence-la-profile.png"
                    alt="Terence La profile"
                    fill
                    sizes="240px"
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
              Why me
            </p>
            <h2 className="mt-2 text-[clamp(28px,3.5vw,42px)] font-semibold tracking-[-0.04em] text-[var(--dossier-ink)]">
              What I bring to OpenAI on day one.
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
                  Discovery to production to governance. Full path.
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
                  15+ products. Agents, RAG, voice AI, eval loops.
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
                  <svg viewBox="0 0 220 90" className="w-full max-w-[220px]" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="48" y1="22" x2="172" y2="22" stroke="#10a37f" strokeWidth="1" opacity="0.5" />
                    <line x1="40" y1="24" x2="110" y2="76" stroke="#10a37f" strokeWidth="1" opacity="0.5" />
                    <line x1="180" y1="24" x2="110" y2="76" stroke="#10a37f" strokeWidth="1" opacity="0.5" />
                    <circle cx="40" cy="20" r="4" fill="#10a37f" opacity="0.8" />
                    <circle cx="180" cy="20" r="4" fill="#10a37f" opacity="0.8" />
                    <circle cx="110" cy="78" r="4" fill="#10a37f" opacity="0.8" />
                    <text x="18" y="12" fontSize="9" fontWeight="500" className="fill-[var(--dossier-ink)]">Business</text>
                    <text x="148" y="12" fontSize="9" fontWeight="500" className="fill-[var(--dossier-ink)]">Engineering</text>
                    <text x="92" y="89" fontSize="9" fontWeight="500" className="fill-[var(--dossier-ink)]">User</text>
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

        <DeploymentFlywheel
          reduceMotion={reduceMotion}
          activeStageIdx={activeStageIdx}
          onStageSelect={setActiveStageIdx}
          activeLayerLabel={activeLayer.label}
          activeBlocker={activeLink.blocker}
        />

        <DeploymentArchitecture
          reduceMotion={reduceMotion}
          activeStageIdx={activeStageIdx}
          onStageSelect={setActiveStageIdx}
        />

        <section className="dossier-section relative z-[2] pt-5">
          <div className="mx-auto max-w-[1200px] px-4 md:px-8">
            <h2 className="text-[clamp(26px,3.2vw,36px)] font-semibold tracking-[-0.03em] text-[var(--dossier-ink)]">
              What blocks each stage
            </h2>
            <p className="mt-1.5 text-[13px] text-[var(--dossier-muted)]">
              Same control model. Tap to switch all views.
            </p>
            <div className="mt-4 grid gap-2 sm:grid-cols-5">
              {flywheelStages.map((stage, i) => {
                const isActive = i === activeStageIdx;
                return (
                  <button
                    key={stage.label}
                    type="button"
                    onClick={() => setActiveStageIdx(i)}
                    className={`rounded-xl border p-3 text-left transition-colors duration-200 ${
                      isActive
                        ? "border-[#10a37f]/40 bg-[#10a37f]/[0.06]"
                        : "border-[var(--dossier-line)] bg-[var(--dossier-panel)] hover:border-[#10a37f]/20"
                    }`}
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#10a37f]">
                      {String(i + 1).padStart(2, "0")} {stage.label}
                    </p>
                    <p className="mt-1 text-[11px] leading-relaxed text-[var(--dossier-body)]">
                      {stageSystemLinks[i].blocker}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section className="dossier-section relative z-[2] pt-6">
          <div className="mx-auto max-w-[1200px] px-4 md:px-8">
            <h2 className="text-[clamp(28px,3.5vw,42px)] font-semibold tracking-[-0.04em] text-[var(--dossier-ink)]">
              Selected projects
            </h2>
            <p className="mt-2 text-sm text-[var(--dossier-muted)]">
              Personal products. AI infrastructure, voice, human intelligence.
            </p>
            <div className="project-grid mt-6">
              {selectedProjects.map((project, index) => (
                <div
                  key={project.name}
                  className={`project-card accent-${project.accent}`}
                  style={{ cursor: "default" }}
                >
                  <div className="card-topline">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span className="stage-badge">{project.stage}</span>
                  </div>
                  <ProductVisual type={project.visual} />
                  <div className="card-copy">
                    <small>{project.category}</small>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="evidence">
                      <span>Evidence</span>
                      <b>{project.evidence}</b>
                    </div>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-medium text-[var(--accent)] transition-opacity duration-150 hover:opacity-80"
                      >
                        View project
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="dossier-section relative z-[2] pb-20 pt-8">
          <div className="mx-auto max-w-[1200px] px-4 md:px-8">
            <div className="border border-[var(--dossier-line-strong)] bg-[var(--dossier-panel)] p-7 md:p-9">
              <h2 className="text-[clamp(30px,4vw,48px)] font-semibold tracking-[-0.04em] text-[var(--dossier-ink)]">
                I&apos;d rather show you than tell you.
              </h2>
              <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-[var(--dossier-muted)] md:text-[15px]">
                30 minutes. I&apos;ll walk you through a live deployment, the decisions behind it, and where I think OpenAI&apos;s enterprise play should go next.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/terencela"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dossier-button-primary dossier-cta-accent dossier-pressable inline-flex"
                >
                  Get in touch
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://xp.terencela.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[13px] text-[var(--dossier-muted)] transition-colors duration-200 hover:text-[var(--dossier-ink)]"
                >
                  See TerenceXP
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </DossierThemeProvider>
  );
}
