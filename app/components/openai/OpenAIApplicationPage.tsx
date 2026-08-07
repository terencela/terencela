import type { CSSProperties } from "react";
import Image from "next/image";
import { ArrowUpRight, BriefcaseBusiness, Cpu, Users } from "lucide-react";
import { DossierBackground } from "@/app/components/shared/DossierBackground";
import { SubpageHeader } from "@/app/components/shared/SubpageHeader";
import { DossierThemeProvider } from "@/app/lib/dossier-theme";
import { CredibilityStrip } from "@/app/components/shared/CredibilityStrip";
import { ProductVisual } from "@/app/components/shared/ProductVisual";

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
  visual: string;
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

const commonIssues = [
  "Lack of trust",
  "Weak stakeholder alignment",
  "Fear of risk",
  "Many edge cases",
  "Low empowerment for the economic buyer and champion",
];

const selectedProjects: SelectedProject[] = [
  {
    name: "ZRH Insider",
    category: "Internal employee app",
    stage: "Live rebuild",
    accent: "green",
    visual: "knowledge",
    problem: "The internal employee app needed faster iteration and stronger user retention.",
    solution: "Rebuilt the foundation in one month so product teams can ship and test faster.",
  },
  {
    name: "Zurich Airport Voice AI Agent",
    category: "Operations AI",
    stage: "PoC to tender",
    accent: "amber",
    visual: "voice",
    problem: "High call volume and long support time in a regulated airport environment.",
    solution: "Scoped and delivered a Voice AI PoC in two weeks, then moved it into formal tender and governance.",
  },
  {
    name: "Engineering Office Copilot",
    category: "SME deployment",
    stage: "In delivery",
    accent: "blue",
    visual: "gtm",
    problem: "Proposal preparation was slow because knowledge was scattered across systems.",
    solution: "Built OCR + RAG + routing workflows to produce proposal-ready drafts much faster.",
  },
  {
    name: "Company Brain",
    category: "Knowledge systems",
    stage: "Building",
    accent: "sky",
    visual: "twin",
    problem: "Teams lose time searching across documents, decisions, and fragmented context.",
    solution: "Centralize retrieval with source-grounded answers so teams can execute with confidence.",
  },
  {
    name: "Privacy Layer",
    category: "AI infrastructure",
    stage: "Prototype",
    accent: "cyan",
    visual: "privacy",
    problem: "Organizations need usable AI workflows without exposing sensitive operational data.",
    solution: "Introduce pre-model controls for redaction, routing, and policy enforcement by default.",
  },
  {
    name: "Vibe Translator",
    category: "Human context AI",
    stage: "Prototype",
    accent: "violet",
    visual: "messages",
    problem: "Intent often gets lost when language is interpreted without relationship and cultural context.",
    solution: "Decode communication context before response drafting to reduce social and business friction.",
  },
];

const accentStyles = {
  "--hero-accent": "#10a37f",
} as CSSProperties;

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
                <h1 className="dossier-hero-title">Forward Deployed Engineer, Zurich.</h1>
                <p className="mt-6 max-w-[68ch] text-base leading-relaxed text-[var(--dossier-body)]">
                  I lead enterprise AI deployment at Zurich Airport and through KI Unlocked. I build
                  working systems across regulated environments and bridge business and engineering
                  in delivery-critical projects.
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

            <div className="dossier-hero-metrics mt-7" aria-label="Key metrics">
              <div>
                <b className="dossier-metric-stat" style={{ color: "#10a37f" }}>
                  32M+
                </b>
                <span className="dossier-metric-label">Passengers served in operational scope</span>
                <p className="mt-1 text-[10px] leading-snug text-[var(--dossier-muted)]">
                  Zurich Airport enterprise context.
                </p>
              </div>
              <div>
                <b className="dossier-metric-stat">35k</b>
                <span className="dossier-metric-label">Employees on ZRH Insider app</span>
                <p className="mt-1 text-[10px] leading-snug text-[var(--dossier-muted)]">
                  Internal deployment and product rebuild ownership.
                </p>
              </div>
              <div>
                <b className="dossier-metric-stat">15+</b>
                <span className="dossier-metric-label">AI products launched since 2020</span>
                <p className="mt-1 text-[10px] leading-snug text-[var(--dossier-muted)]">
                  Agents, RAG, voice AI, enterprise knowledge, eval loops.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CredibilityStrip />

        <section className="dossier-section relative z-[2] pt-9">
          <div className="mx-auto max-w-[1200px] px-4 md:px-8">
            <div className="dossier-fit-featured">
              <div className="dossier-fit-featured-copy">
                <h2 className="dossier-hero-title !text-[clamp(30px,4vw,52px)]">Why I am qualified</h2>
                <p className="mt-4 text-base leading-relaxed text-[var(--dossier-body)]">
                  Built in Swiss enterprise settings where deployment quality, stakeholder alignment,
                  and governance have to work together.
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
              Loom video
            </h2>
            <div className="mt-5 border border-[var(--dossier-line-strong)] bg-white p-6 md:p-8">
              <p className="text-sm leading-relaxed text-[var(--dossier-muted)]">
                Simple 90-second video overview. I will place the final Loom link here and keep this
                section minimal.
              </p>
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
              Common issue I keep seeing
            </h2>
            <div className="mt-5 border border-[var(--dossier-line-strong)] bg-white p-6">
              <div className="grid gap-5 md:grid-cols-[0.95fr_1.05fr]">
                <p className="text-sm leading-relaxed text-[var(--dossier-muted)]">
                  Across deployments, model quality is rarely the only blocker. Delivery usually
                  slows down because stakeholders lose alignment under risk pressure.
                </p>
                <ul className="space-y-2 text-sm leading-relaxed text-[var(--dossier-body)]">
                  {commonIssues.map((issue) => (
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
                  <ProductVisual type={project.visual} />
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
