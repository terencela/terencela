"use client";

import React, { useState, type CSSProperties } from "react";
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
import { ProductVisual } from "@/app/components/shared/ProductVisual";
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
  visual: string;
  description: string;
  evidence: string;
  url?: string;
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
    name: "PrivacyLayer",
    category: "AI infrastructure",
    stage: "Live",
    accent: "green",
    visual: "privacy",
    description:
      "A control layer that strips personal data from AI prompts in the browser before it reaches any model. Zero bytes sent to any server.",
    evidence: "Live product with Chrome extension",
    url: "https://privacy.terencela.com",
  },
  {
    name: "Engineering Office OS",
    category: "Enterprise AI",
    stage: "In delivery",
    accent: "blue",
    visual: "knowledge",
    description:
      "An AI operating system that connects project history, decisions, documents and expertise across engineering offices.",
    evidence: "Vertical system designed",
  },
  {
    name: "Vibe Translator",
    category: "Human intelligence",
    stage: "Building",
    accent: "violet",
    visual: "messages",
    description:
      "The human-context layer for communication: decoding tone, personality, culture and relationship dynamics before helping you respond.",
    evidence: "Interactive product prototype",
    url: "https://vibes.terencela.com",
  },
  {
    name: "AirCompanion",
    category: "Travel",
    stage: "Venture",
    accent: "cyan",
    visual: "travel",
    description:
      "A contextual AI companion guiding passengers through the airport journey before, during and after travel.",
    evidence: "Product system designed",
    url: "https://app.aircompanion.app",
  },
  {
    name: "Asia Bridge",
    category: "Cultural intelligence",
    stage: "Concept",
    accent: "red",
    visual: "culture",
    description:
      "Duolingo meets Grammarly for the invisible rules, communication styles and social nuances of Asian cultures.",
    evidence: "Product thesis developed",
    url: "https://asia.terencela.com",
  },
  {
    name: "Rehearse",
    category: "Simulation",
    stage: "Live",
    accent: "coral",
    visual: "rehearse",
    description:
      "Practice sales calls, negotiations and difficult conversations with realistic AI role-play and targeted feedback.",
    evidence: "Interactive rehearsal flow",
    url: "https://rehearse-roleplay.vercel.app",
  },
  {
    name: "Treasure",
    category: "Voice AI",
    stage: "Testing",
    accent: "amber",
    visual: "voice",
    description:
      "AI voice calls that capture parents' stories, preserve family memories and keep generations connected.",
    evidence: "Voice-first experience built",
    url: "https://treasures-bowl.vercel.app",
  },
];

const accentStyles = {
  "--hero-accent": "#10a37f",
} as CSSProperties;

const flywheelStages = [
  {
    label: "Discover",
    desc: "Map the real problem, stakeholders, and constraints before writing a line of code.",
    angle: -90,
  },
  {
    label: "Decide",
    desc: "Pick the deployment path, align budget owners, and define what 'shipped' means.",
    angle: -18,
  },
  {
    label: "Build",
    desc: "Prototype fast, validate with real users, iterate on evidence not assumptions.",
    angle: 54,
  },
  {
    label: "Deploy",
    desc: "Ship into production with eval gates, data boundaries, and rollback plans.",
    angle: 126,
  },
  {
    label: "Scale",
    desc: "Expand to new teams, harden monitoring, and feed learnings back into the next cycle.",
    angle: 198,
  },
];

function DeploymentFlywheel({ reduceMotion }: { reduceMotion: boolean | null }) {
  const [active, setActive] = useState<number | null>(null);
  const r = 110;
  const cx = 180;
  const cy = 180;
  const circumference = 2 * Math.PI * r;
  const arcLen = circumference / 5;

  return (
    <section className="dossier-section relative z-[2] pt-8">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        <div className="overflow-hidden rounded-xl border border-[var(--dossier-line)] bg-[var(--dossier-panel)]">
          <div className="grid items-stretch lg:grid-cols-[1fr_1fr]">
            <div className="p-6 md:p-8">
              <h2 className="text-[clamp(22px,2.6vw,30px)] font-semibold tracking-[-0.03em] text-[var(--dossier-ink)]">
                How I move from zero to deployed
              </h2>
              <p className="mt-1.5 max-w-[40ch] text-[13px] leading-relaxed text-[var(--dossier-muted)]">
                I built a toolkit for each stage. It compounds across engagements.
              </p>

              <div className="mt-6 space-y-0 border-t border-[var(--dossier-line)]">
                {flywheelStages.map((stage, i) => (
                  <button
                    key={stage.label}
                    type="button"
                    className="group flex w-full items-start gap-4 border-b border-[var(--dossier-line)] px-1 py-4 text-left"
                    style={{
                      transition: "background 200ms cubic-bezier(0.23,1,0.32,1)",
                      background: active === i ? "rgba(255,255,255,0.03)" : "transparent",
                    }}
                    onMouseEnter={() => setActive(i)}
                    onMouseLeave={() => setActive(null)}
                  >
                    <span
                      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold"
                      style={{
                        transition: "all 200ms cubic-bezier(0.23,1,0.32,1)",
                        background: active === i ? "#10a37f" : "transparent",
                        color: active === i ? "#fff" : "var(--dossier-muted)",
                        border: active === i ? "1px solid #10a37f" : "1px solid var(--dossier-line)",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p
                        className="text-[14px] font-semibold"
                        style={{
                          transition: "color 200ms cubic-bezier(0.23,1,0.32,1)",
                          color: active === i ? "var(--dossier-ink)" : "var(--dossier-subtle)",
                        }}
                      >
                        {stage.label}
                      </p>
                      <p
                        className="mt-0.5 text-[12px] leading-relaxed"
                        style={{
                          transition: "opacity 200ms cubic-bezier(0.23,1,0.32,1), transform 200ms cubic-bezier(0.23,1,0.32,1)",
                          opacity: active === i ? 1 : 0,
                          transform: active === i ? "translateY(0)" : "translateY(-4px)",
                          color: "var(--dossier-muted)",
                          maxHeight: active === i ? "60px" : "0",
                          overflow: "hidden",
                        }}
                      >
                        {stage.desc}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="relative flex items-center justify-center border-t border-[var(--dossier-line)] p-8 lg:border-l lg:border-t-0">
              <motion.div
                className="relative aspect-square w-full max-w-[320px]"
                initial={reduceMotion ? false : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: EASE_OUT_STRONG }}
              >
                <svg viewBox="0 0 360 360" className="block h-full w-full" fill="none">
                  <circle cx={cx} cy={cy} r={r} stroke="var(--dossier-line)" strokeWidth="1" />

                  {flywheelStages.map((stage, i) => {
                    const isActive = active === i;
                    const offset = circumference - arcLen;
                    const rotation = -90 + i * 72;
                    return (
                      <circle
                        key={stage.label}
                        cx={cx}
                        cy={cy}
                        r={r}
                        stroke={isActive ? "#10a37f" : "transparent"}
                        strokeWidth={isActive ? 2.5 : 1}
                        strokeDasharray={`${arcLen} ${offset}`}
                        strokeLinecap="round"
                        transform={`rotate(${rotation} ${cx} ${cy})`}
                        style={{
                          transition: "stroke 250ms cubic-bezier(0.23,1,0.32,1), stroke-width 250ms cubic-bezier(0.23,1,0.32,1)",
                          filter: isActive ? "drop-shadow(0 0 6px rgba(16,163,127,0.4))" : "none",
                        }}
                      />
                    );
                  })}

                  {flywheelStages.map((stage, i) => {
                    const midAngle = (-90 + i * 72 + 36) * (Math.PI / 180);
                    const arrowX = cx + (r) * Math.cos(midAngle);
                    const arrowY = cy + (r) * Math.sin(midAngle);
                    const tangentDeg = (midAngle * 180) / Math.PI + 90;
                    return (
                      <motion.g
                        key={`arrow-${i}`}
                        transform={`translate(${arrowX}, ${arrowY}) rotate(${tangentDeg})`}
                        initial={reduceMotion ? false : { opacity: 0 }}
                        whileInView={{ opacity: 0.5 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 1.0 + i * 0.06, ease: EASE_OUT_STRONG }}
                      >
                        <path d="M -3 -2.5 L 2 0 L -3 2.5" stroke="var(--dossier-subtle)" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                      </motion.g>
                    );
                  })}
                </svg>

                {flywheelStages.map((stage, i) => {
                  const labelR = r + 32;
                  const angle = (-90 + i * 72) * (Math.PI / 180);
                  const x = cx + labelR * Math.cos(angle);
                  const y = cy + labelR * Math.sin(angle);
                  const isActive = active === i;
                  return (
                    <motion.p
                      key={stage.label}
                      className="absolute -translate-x-1/2 -translate-y-1/2 cursor-default whitespace-nowrap text-[13px] font-semibold"
                      style={{
                        top: `${(y / 360) * 100}%`,
                        left: `${(x / 360) * 100}%`,
                        transition: "color 200ms cubic-bezier(0.23,1,0.32,1), transform 200ms cubic-bezier(0.23,1,0.32,1)",
                        color: isActive ? "#10a37f" : "var(--dossier-ink)",
                        transform: `translate(-50%, -50%) scale(${isActive ? 1.08 : 1})`,
                      }}
                      initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 + i * 0.1, ease: EASE_OUT_STRONG }}
                      onMouseEnter={() => setActive(i)}
                      onMouseLeave={() => setActive(null)}
                    >
                      {stage.label}
                    </motion.p>
                  );
                })}

                <div className="absolute inset-0 flex items-center justify-center">
                  <p
                    className="text-center text-[11px] leading-tight"
                    style={{
                      transition: "color 200ms cubic-bezier(0.23,1,0.32,1)",
                      color: active !== null ? "#10a37f" : "var(--dossier-muted)",
                    }}
                  >
                    Continuous<br />Learning
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
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

        <section className="dossier-section dossier-section-tight relative z-[2] !pb-4 !pt-7 md:!pt-10">
          <div className="mx-auto max-w-[1200px] px-4 md:px-8">
            <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(200px,240px)] lg:gap-8">
              <div>
                <p className="dossier-eyebrow">
                  <span aria-hidden="true" />
                  Application page
                </p>
                <h1 className="dossier-hero-title">I turn enterprise AI from idea into adoption.</h1>
                <p className="mt-4 max-w-[68ch] text-base leading-relaxed text-[var(--dossier-body)] md:mt-6">
                  I lead AI at Zurich Airport, build and deploy AI systems through KI Unlocked, and
                  work across business, engineering and governance to get projects shipped.
                </p>
                <p className="mt-2 max-w-[64ch] text-sm leading-relaxed text-[var(--dossier-muted)] md:mt-4">
                  I work where pilots either become real workflows or die in procurement. That is
                  where I do my best work.
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-4 md:mt-7">
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

              <aside className="relative mx-auto w-full max-w-[200px] sm:max-w-[240px] lg:mx-0 lg:ml-auto lg:max-w-none">
                <div className="dossier-profile-frame aspect-[4/5] w-full lg:max-w-[240px]">
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

        <DeploymentFlywheel reduceMotion={reduceMotion} />

        <section className="dossier-section relative z-[2] pt-6">
          <div className="mx-auto max-w-[1200px] px-4 md:px-8">
            <h2 className="text-[clamp(28px,3.5vw,42px)] font-semibold tracking-[-0.04em] text-[var(--dossier-ink)]">
              Selected projects
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--dossier-muted)]">
              Seven personal products across AI infrastructure, human intelligence and voice.
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
                Ready to start.
              </h2>
              <p className="mt-4 max-w-[68ch] text-sm leading-relaxed text-[var(--dossier-muted)] md:text-[15px]">
                I am already doing Forward Deployed work across regulated enterprises in Zurich. If OpenAI wants someone who gets enterprise AI from pilot to adoption, let&apos;s talk.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:terencela.yt@gmail.com"
                  className="dossier-button-primary dossier-cta-accent dossier-pressable inline-flex"
                >
                  terencela.yt@gmail.com
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="https://xp.terencela.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-[var(--dossier-line-strong)] px-5 py-2.5 text-[13px] font-medium text-[var(--dossier-ink)] transition-colors duration-200 hover:bg-[rgba(255,255,255,0.04)]"
                >
                  See my portfolio on Windows XP
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </DossierThemeProvider>
  );
}
