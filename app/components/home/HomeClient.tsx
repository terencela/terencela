"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Cpu, Brain, TrendingUp, Bot, Sparkles } from "lucide-react";
import { ProductVisual } from "@/app/components/shared/ProductVisual";

type Project = {
  name: string;
  category: string;
  stage: string;
  description: string;
  evidence: string;
  accent: string;
  visual: string;
};

const targetedRoles = [
  {
    company: "OpenAI",
    role: "Forward Deployed Engineer",
    location: "Zurich",
    path: "/openai",
    domain: "openai.terencela.com",
    accentColor: "#10a37f",
    icon: Cpu,
    tagline: "Production model evals and Swiss nDSG guardrails",
  },
  {
    company: "Anthropic",
    role: "Applied AI Architect, Industries",
    location: "Zurich",
    path: "/anthropic",
    domain: "anthropic.terencela.com",
    accentColor: "#d97706",
    icon: Brain,
    tagline: "FINMA-conscious Claude enterprise integration",
  },
  {
    company: "Google",
    role: "AI Sales Lead / GTM",
    location: "Zurich",
    path: "/google",
    domain: "google.terencela.com",
    accentColor: "#4285f4",
    icon: TrendingUp,
    tagline: "Vertex AI and Gemini ecosystem growth",
  },
  {
    company: "Salesforce",
    role: "Forward Deployed Engineer",
    location: "Zurich",
    path: "/salesforce",
    domain: "salesforce.terencela.com",
    accentColor: "#00a1e0",
    icon: Bot,
    tagline: "Agentforce and Data Cloud execution",
  },
];

const currentProjects: Project[] = [
  {
    name: "Vibe Decoder",
    category: "Human intelligence",
    stage: "Building",
    description:
      "The human-context layer for communication: decoding tone, personality, culture and relationship dynamics before helping you respond.",
    evidence: "Interactive product prototype",
    accent: "violet",
    visual: "messages",
  },
  {
    name: "Engineering Office OS",
    category: "Enterprise AI",
    stage: "Building",
    description:
      "An AI operating system that connects project history, decisions, documents and expertise across engineering offices.",
    evidence: "Vertical system designed",
    accent: "blue",
    visual: "knowledge",
  },
  {
    name: "Treasure",
    category: "Voice AI · Family",
    stage: "Testing",
    description:
      "AI voice calls that capture parents’ stories, preserve family memories and keep generations connected.",
    evidence: "Voice-first experience built",
    accent: "amber",
    visual: "voice",
  },
  {
    name: "AirCompanion",
    category: "Travel",
    stage: "Venture",
    description:
      "A contextual AI companion guiding passengers through the airport journey before, during and after travel.",
    evidence: "Product system designed",
    accent: "cyan",
    visual: "travel",
  },
  {
    name: "Rehearse",
    category: "Simulation",
    stage: "Prototype",
    description:
      "Practice sales calls, negotiations and difficult conversations with realistic AI role-play and targeted feedback.",
    evidence: "Interactive rehearsal flow",
    accent: "coral",
    visual: "rehearse",
  },
  {
    name: "Privacy Layer",
    category: "AI infrastructure",
    stage: "Concept",
    description:
      "A control layer for using AI with sensitive information without exposing more personal context than necessary.",
    evidence: "Architecture explored",
    accent: "green",
    visual: "privacy",
  },
  {
    name: "GTM AI",
    category: "Growth",
    stage: "Prototype",
    description:
      "An AI go-to-market system for researching markets, sharpening positioning and turning insights into campaigns.",
    evidence: "End-to-end workflow built",
    accent: "lime",
    visual: "gtm",
  },
  {
    name: "Asia Bridge",
    category: "Cultural intelligence",
    stage: "Concept",
    description:
      "Duolingo meets Grammarly for the invisible rules, communication styles and social nuances of Asian cultures.",
    evidence: "Product thesis developed",
    accent: "red",
    visual: "culture",
  },
  {
    name: "Workbook Machine",
    category: "Personal growth",
    stage: "Experiment",
    description:
      "Turns self-development ideas and books into personalized exercises, action plans and adaptive workbooks.",
    evidence: "Personal workflow tested",
    accent: "gold",
    visual: "workbook",
  },
  {
    name: "Digital Twin Machine",
    category: "Personal AI",
    stage: "Experiment",
    description:
      "A functional digital twin shaped by a person’s knowledge, communication style, preferences and decisions.",
    evidence: "System experiment",
    accent: "pink",
    visual: "twin",
  },
];

const pastProjects = [
  {
    name: "perseedU",
    year: "2021",
    type: "Web3 infrastructure",
    description:
      "Transparent blockchain infrastructure for charities and purpose-driven communities.",
    proof: "Top 10 Finance · venture.ch",
  },
  {
    name: "Elevated Psychology Network",
    year: "2020-24",
    type: "Community",
    description:
      "A mental-health and psychology community for students and young professionals.",
    proof: "2,000+ community · 25+ events",
  },
  {
    name: "NeverAlone.ch",
    year: "2020",
    type: "Marketplace",
    description:
      "A rapid-response marketplace helping local businesses reach customers during COVID.",
    proof: "50 vendors in four weeks",
  },
  {
    name: "TL Innovations",
    year: "2019-21",
    type: "Growth studio",
    description:
      "Sales funnels, copy, advertising and outbound systems for growing organisations.",
    proof: "10 client engagements · $1M+ generated",
  },
  {
    name: "SmartCredit.io",
    year: "2018-20",
    type: "DeFi",
    description:
      "A fixed-income lending and credit platform for decentralized finance.",
    proof: "Raised 1,200 ETH",
  },
  {
    name: "ZooMania",
    year: "2017",
    type: "Sustainability game",
    description:
      "A gamified app encouraging more sustainable purchasing through collectible digital animals.",
    proof: "HackZurich 3rd prize winner",
  },
];

const principles = [
  ["01", "Human context", "AI should understand the person, not only the prompt."],
  ["02", "Useful before perfect", "Build the smallest real experience, then learn from behavior."],
  ["03", "Evidence over theatre", "Ideas show progress honestly. Ventures show measurable outcomes."],
];


export default function HomeClient() {
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    if (!selected) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [selected]);

  return (
    <main>
      <header className="site-header">
        <a href="#top" className="brand" aria-label="Terence La home">
          TERENCE <span>LA</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#targeted-roles">Zurich AI Roles</a>
          <a href="#now">Building now</a>
          <a href="#past">Past ventures</a>
          <a href="#principles">Principles</a>
        </nav>
        <a className="header-link" href="https://www.linkedin.com/in/terencela" target="_blank" rel="noopener noreferrer">
          LinkedIn ↗
        </a>
      </header>

      <section className="relative overflow-hidden border-b border-zinc-800 bg-[#05070d] px-4 py-10 md:px-8" id="targeted-roles">
        <div className="pointer-events-none absolute inset-0 opacity-80">
          <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-7 grid gap-5 md:grid-cols-[1.2fr_1fr] md:items-end">
            <div>
              <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-emerald-300">
                <Sparkles className="h-4 w-4" />
                Custom candidate dossiers
              </div>
              <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Four role-specific pages built for Zurich hiring panels.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-zinc-400 md:justify-self-end">
              Each page is tailored to one company and one role. It shows execution thinking, not generic portfolio claims.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {targetedRoles.map((role) => {
              const Icon = role.icon;
              return (
                <Link
                  key={role.company}
                  href={role.path}
                  className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 transition-colors hover:border-zinc-600"
                >
                  <div
                    className="relative flex h-36 items-end overflow-hidden border-b border-zinc-800 p-4"
                    style={{
                      background: `radial-gradient(circle at 80% 20%, ${role.accentColor}33, transparent 55%), linear-gradient(135deg, #0a0b0f, #07080b)`,
                    }}
                  >
                    <span
                      className="absolute right-4 top-4 text-5xl font-semibold tracking-tight opacity-[0.08]"
                      aria-hidden="true"
                    >
                      {role.company}
                    </span>
                    <span
                      className="relative rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-[0.15em]"
                      style={{
                        borderColor: `${role.accentColor}66`,
                        color: role.accentColor,
                        backgroundColor: `${role.accentColor}1A`,
                      }}
                    >
                      {role.company}
                    </span>
                  </div>

                  <div className="p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-white">
                        <Icon className="h-4 w-4" style={{ color: role.accentColor }} />
                        <span className="text-sm font-semibold">{role.role}</span>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-zinc-500 transition-colors group-hover:text-zinc-200" />
                    </div>
                    <p className="text-sm leading-relaxed text-zinc-400">{role.tagline}</p>
                    <div className="mt-4 flex items-center justify-between border-t border-zinc-800 pt-2 text-[11px] text-zinc-500">
                      <span>{role.domain}</span>
                      <span>{role.location}, CH</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Hero */}
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> AI Lead @ Zurich Airport · Founder · Forbes 30u30</p>
          <h1>
            Building AI systems that <em>understand people,</em> execute under constraint and scale in Zurich.
          </h1>
          <p className="hero-intro">
            I create apps — at Zurich Airport, for clients, and at terencela.com/labs. Building with GPT since 2020. 15+ products shipped. Forbes 30 Under 30. 2× TEDx.
          </p>
          <div className="hero-actions">
            <a href="#targeted-roles" className="button-primary">View Target Role Dossiers <span>↓</span></a>
            <a href="#now" className="text-link">Explore active builds</a>
          </div>
        </div>
        <div className="hero-index" aria-label="Portfolio summary">
          <div><b>30M+</b><span>Passengers AI System</span></div>
          <div><b>19+</b><span>Hackathon & Tech Awards</span></div>
          <div><b>Aug 2020</b><span>Building with LLMs</span></div>
        </div>
      </section>

      {/* Flagship Build */}
      <section className="featured" aria-labelledby="featured-title">
        <div className="featured-copy">
          <div className="featured-meta">
            <span>FLAGSHIP BUILD</span>
            <span className="live-dot font-mono">ZURICH AIRPORT AI LEAD</span>
          </div>
          <p className="featured-number font-mono">01 / 10</p>
          <h2 id="featured-title">Vibe<br />Decoder</h2>
          <p className="featured-thesis">
            AI understands language.<br />
            <strong>Vibe Decoder understands the person.</strong>
          </p>
          <p className="featured-body">
            A decoder for the invisible layer behind every message: personality,
            culture, relationship history, subtext and how your reply will actually land.
          </p>
          <div className="featured-proof">
            <div><small>Stage</small><b>Interactive prototype</b></div>
            <div><small>Core wedge</small><b>Decode before rewrite</b></div>
            <div><small>Role</small><b>Founder · Product · Design</b></div>
          </div>
          <button className="case-link" onClick={() => setSelected(currentProjects[0])}>
            Open project view <span>↗</span>
          </button>
        </div>
        <div className="featured-visual">
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <ProductVisual type="messages" />
          <p>CONTEXT IS THE NEW PROMPT</p>
        </div>
      </section>

      {/* Building Now */}
      <section className="now-section" id="now">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> Product lab</p>
            <h2>Building now</h2>
          </div>
          <p>
            A deliberately honest view of products at different stages: from live ventures to focused experiments in AI, travel, and human intelligence.
          </p>
        </div>

        <div className="project-grid">
          {currentProjects.slice(1).map((project, index) => (
            <button
              className={`project-card accent-${project.accent}`}
              key={project.name}
              onClick={() => setSelected(project)}
              aria-label={`Open ${project.name}`}
            >
              <div className="card-topline">
                <span>{String(index + 2).padStart(2, "0")}</span>
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
              </div>
              <span className="card-arrow">↗</span>
            </button>
          ))}
        </div>
      </section>

      {/* Past Section */}
      <section className="past-section" id="past">
        <div className="section-heading past-heading">
          <div>
            <p className="eyebrow dark"><span /> 2014-2024</p>
            <h2>Past ventures<br />& experiments</h2>
          </div>
          <p>
            Finished chapters, not hidden failures. Each produced a result:
            traction, an award, a working product: or a sharper view of what to build next.
          </p>
        </div>

        <div className="past-list">
          {pastProjects.map((project, index) => (
            <article className="past-row" key={project.name}>
              <span className="past-index font-mono">{String(index + 1).padStart(2, "0")}</span>
              <div className="past-name"><small>{project.year}</small><h3>{project.name}</h3></div>
              <p>{project.description}</p>
              <div className="past-proof"><small>{project.type}</small><b>{project.proof}</b></div>
            </article>
          ))}
        </div>
      </section>

      {/* Principles */}
      <section className="principles" id="principles">
        <p className="eyebrow"><span /> The connecting thread</p>
        <div className="principles-title">
          <h2>Many products.<br /><em>One obsession.</em></h2>
          <p>
            Making advanced technology feel more human, more contextual and more useful
            in the moments that matter.
          </p>
        </div>
        <div className="principle-grid">
          {principles.map(([number, title, copy]) => (
            <article key={number}>
              <span className="font-mono">{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <div>
          <p className="eyebrow"><span /> Terence La · Zurich, Switzerland</p>
          <h2>Everything you want is<br /><em>10 experiments away.</em></h2>
        </div>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/terencela" target="_blank" rel="noopener noreferrer">LinkedIn Profile ↗</a>
          <a href="mailto:terencela93@gmail.com">terencela93@gmail.com ↗</a>
          <p>Zurich, Switzerland<br />© {new Date().getFullYear()} Terence La</p>
        </div>
      </footer>

      {selected && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setSelected(null)}>
          <div
            className={`project-modal accent-${selected.accent}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button className="modal-close" onClick={() => setSelected(null)} aria-label="Close project">×</button>
            <div className="modal-visual"><ProductVisual type={selected.visual} /></div>
            <div className="modal-copy">
              <span className="stage-badge">{selected.stage}</span>
              <small>{selected.category}</small>
              <h2 id="modal-title">{selected.name}</h2>
              <p>{selected.description}</p>
              <div className="modal-evidence"><small>Current evidence</small><b>{selected.evidence}</b></div>
              <p className="modal-note">
                Full case study, product screens and verified metrics will be added as this build develops.
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
