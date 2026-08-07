import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import { DossierBackground } from "@/app/components/shared/DossierBackground";
import { SubpageHeader } from "@/app/components/shared/SubpageHeader";
import { DossierThemeProvider } from "@/app/lib/dossier-theme";

type QualificationPillar = {
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
  problem: string;
  solution: string;
};

const qualificationPillars: QualificationPillar[] = [
  {
    title: "Enterprise deployment",
    detail: "POCs to production to adoption to governance. I own the full path.",
  },
  {
    title: "AI builder",
    detail: "15+ products across agents, RAG, voice AI, company knowledge, and eval loops.",
  },
  {
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
    title: "Satire Insider - Foundation Rebuild",
    challenge:
      "Three separate mobile codebases split resources and slowed delivery.",
    role: [
      "Merged the fragmented foundation",
      "Rebuilt architecture for faster releases",
      "Prioritised retention-focused feature work",
    ],
    outcome:
      "One shared foundation now supports faster product iteration, with focus on retention and customer lifetime value.",
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
    name: "Vibe Translator",
    problem: "Messages lose intent across culture and context.",
    solution: "Decode tone, intent, and relationship context before response drafting.",
  },
  {
    name: "Privacy Layer",
    problem: "Teams need AI support without exposing sensitive context.",
    solution: "Add policy checks, redaction flow, and routing controls before model calls.",
  },
  {
    name: "Company Brain",
    problem: "Knowledge is scattered across docs, chats, and old decisions.",
    solution: "Unify retrieval with citations so teams can trust what they read.",
  },
  {
    name: "Voice AI Operations",
    problem: "High repetitive inbound call volume slows service teams.",
    solution: "Automate first-line handling with controlled escalation to human agents.",
  },
  {
    name: "Satire Insider Platform",
    problem: "Fragmented app foundation slowed shipping and maintenance.",
    solution: "Rebuild on one shared base to speed delivery and retention experiments.",
  },
  {
    name: "Proposal Copilot",
    problem: "Proposal prep is slow because source material is scattered.",
    solution: "Use OCR, RAG, and model routing to prepare faster draft-ready briefs.",
  },
];

const marqueeLines = [
  "Enterprise deployment",
  "AI builder",
  "Business x Engineering",
  "Regulated environments",
  "From PoC to production",
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
            <p className="dossier-eyebrow">
              <span aria-hidden="true" />
              Application page
            </p>
            <h1 className="dossier-hero-title">Forward Deployed Engineer, Zurich.</h1>
            <p className="mt-6 max-w-[68ch] text-base leading-relaxed text-[var(--dossier-body)]">
              I already lead AI deployment work in a regulated environment at Zurich Airport and
              through KI-unlocked. I focus on shipping useful systems, not presentation decks.
            </p>
          </div>
        </section>

        <section className="dossier-section-tight relative z-[2] py-5">
          <div className="openai-marquee border-y border-[var(--dossier-line-strong)] bg-white/80 py-5">
            <div className="openai-marquee-track">
              {[0, 1].map((copy) => (
                <div key={copy} className="openai-marquee-group">
                  {marqueeLines.map((line) => (
                    <span key={`${copy}-${line}`} className="openai-marquee-pill">
                      {line}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="dossier-section relative z-[2] pt-9">
          <div className="mx-auto max-w-[1200px] px-4 md:px-8">
            <h2 className="text-[clamp(30px,4.2vw,50px)] font-semibold tracking-[-0.04em] text-[var(--dossier-ink)]">
              Why I am qualified
            </h2>
            <p className="mt-4 max-w-[62ch] text-sm leading-relaxed text-[var(--dossier-muted)] md:text-[15px]">
              This is the short version: enterprise deployment experience, builder execution, and
              business-to-engineering translation.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {qualificationPillars.map((pillar) => (
                <article
                  key={pillar.title}
                  className="border border-[var(--dossier-line-strong)] bg-white p-5"
                >
                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-[var(--dossier-ink)]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--dossier-muted)]">
                    {pillar.detail}
                  </p>
                </article>
              ))}
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
                Simple 90-second video overview. I will add the final Loom link here before
                submission.
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
              <p className="text-sm leading-relaxed text-[var(--dossier-muted)]">
                Across deployments, the blockers are rarely model quality alone. Most delays come
                from alignment and execution gaps.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {commonIssues.map((issue) => (
                  <span
                    key={issue}
                    className="inline-flex items-center border border-[var(--dossier-line-strong)] bg-[#f7f7f5] px-3 py-1.5 text-xs font-medium text-[var(--dossier-ink)]"
                  >
                    {issue}
                  </span>
                ))}
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
              Six selected projects. One-line problem and solution for each.
            </p>
            <div className="mt-6 grid grid-cols-1 border border-[var(--dossier-line-strong)] md:grid-cols-2">
              {selectedProjects.map((project, index) => (
                <article
                  key={project.name}
                  className="border-b border-[var(--dossier-line-strong)] bg-white p-5 md:p-6 [&:nth-last-child(-n+2)]:md:border-b-0 [&:nth-child(odd)]:md:border-r"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--dossier-subtle)]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold tracking-[-0.02em] text-[var(--dossier-ink)]">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--dossier-muted)]">
                    <span className="font-medium text-[var(--dossier-ink)]">Problem:</span>{" "}
                    {project.problem}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--dossier-muted)]">
                    <span className="font-medium text-[var(--dossier-ink)]">Solution:</span>{" "}
                    {project.solution}
                  </p>
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
