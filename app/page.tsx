"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Cpu, Brain, TrendingUp, Bot, Sparkles, Building2, Globe, Award } from "lucide-react";

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
    accent: "text-emerald-400 border-emerald-500/40 bg-emerald-500/10 hover:border-emerald-400",
    icon: Cpu,
    tagline: "Production Model Evals & Swiss nDSG Guardrails",
  },
  {
    company: "Anthropic",
    role: "Applied AI Architect, Industries",
    location: "Zurich",
    path: "/anthropic",
    domain: "anthropic.terencela.com",
    accent: "text-amber-400 border-amber-500/40 bg-amber-500/10 hover:border-amber-400",
    icon: Brain,
    tagline: "FINMA Compliant Claude Enterprise Integration",
  },
  {
    company: "Google",
    role: "AI Sales Lead / GTM",
    location: "Zurich",
    path: "/google",
    domain: "google.terencela.com",
    accent: "text-blue-400 border-blue-500/40 bg-blue-500/10 hover:border-blue-400",
    icon: TrendingUp,
    tagline: "Vertex AI & Gemini Zurich Ecosystem Growth",
  },
  {
    company: "Salesforce",
    role: "Forward Deployed Engineer",
    location: "Zurich",
    path: "/salesforce",
    domain: "salesforce.terencela.com",
    accent: "text-sky-400 border-sky-500/40 bg-sky-500/10 hover:border-sky-400",
    icon: Bot,
    tagline: "Autonomous Agentforce & Data Cloud Execution",
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
    year: "2020–24",
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
    year: "2019–21",
    type: "Growth studio",
    description:
      "Sales funnels, copy, advertising and outbound systems for growing organisations.",
    proof: "10 client engagements · $1M+ generated",
  },
  {
    name: "SmartCredit.io",
    year: "2018–20",
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

function ProductVisual({ type }: { type: string }) {
  if (type === "messages") {
    return (
      <div className="phone-pair" aria-hidden="true">
        <div className="mini-phone phone-back">
          <span className="phone-kicker">VIBE PROFILE</span>
          <b>How they communicate</b>
          <div className="score-row"><span>Directness</span><i style={{ width: "78%" }} /></div>
          <div className="score-row"><span>Warmth</span><i style={{ width: "62%" }} /></div>
          <div className="score-row"><span>Context</span><i style={{ width: "88%" }} /></div>
        </div>
        <div className="mini-phone phone-front">
          <span className="phone-kicker">DECODER</span>
          <div className="chat received">“Sure, we can do that.”</div>
          <div className="decode-card">
            <small>What it likely means</small>
            <b>Agreement: with hesitation.</b>
            <p>Ask what would make the plan feel safer.</p>
          </div>
          <button>Draft a response</button>
        </div>
      </div>
    );
  }

  const visuals: Record<string, React.ReactNode> = {
    knowledge: (
      <>
        <div className="ui-top"><span>Project intelligence</span><i /></div>
        <div className="node-map"><b>Project A12</b><span>Decisions</span><span>Experts</span><span>Standards</span></div>
        <div className="ui-answer">Why did we change the load assumption?<em>3 cited sources</em></div>
      </>
    ),
    voice: (
      <>
        <div className="wave">{[1,2,3,4,5,6,7,8,9,10,11].map(n => <i key={n} style={{ height: `${18 + (n % 5) * 9}px` }} />)}</div>
        <b className="visual-title">Mum’s story · 04:28</b>
        <p className="visual-copy">“I never told you how we first arrived…”</p>
      </>
    ),
    travel: (
      <>
        <div className="route-line"><i /><span>ZRH</span><i /><span>HKG</span></div>
        <b className="visual-title">Next: Gate E46</b>
        <p className="visual-copy">12 min walk · passport control ahead</p>
      </>
    ),
    rehearse: (
      <>
        <div className="avatar-ring"><span>AI</span></div>
        <b className="visual-title">Procurement negotiation</b>
        <div className="feedback-pills"><span>Clarity 8.4</span><span>Control 7.8</span></div>
      </>
    ),
    privacy: (
      <>
        <div className="shield-mark">✓</div>
        <b className="visual-title">Context protected</b>
        <div className="privacy-list"><span>Identity hidden <i>On</i></span><span>Raw data stored <i>Off</i></span></div>
      </>
    ),
    gtm: (
      <>
        <div className="funnel"><span>Market</span><span>Accounts</span><span>Campaign</span></div>
        <b className="visual-title">From signal to action</b>
      </>
    ),
    culture: (
      <>
        <div className="culture-chat">“Let’s consider it.”</div>
        <div className="culture-meaning"><small>UNSPOKEN CONTEXT</small><b>This may be a polite “no.”</b></div>
      </>
    ),
    workbook: (
      <>
        <div className="book-lines"><i/><i/><i/><i/></div>
        <b className="visual-title">Insight → exercise → action</b>
      </>
    ),
    twin: (
      <>
        <div className="twin-orbits"><i>T</i><i>AI</i></div>
        <b className="visual-title">Your judgment, extended</b>
      </>
    ),
    web: (
      <>
        <div className="xp-window"><b>Welcome, Terence.</b><p>Choose your interface</p><span>Classic</span><span>XP</span><span>AI</span></div>
      </>
    ),
  };

  return <div className={`project-visual visual-${type}`}>{visuals[type]}</div>;
}

export default function Home() {
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

      {/* Target Subpages Banner */}
      <section className="bg-zinc-950 border-b border-zinc-800/80 px-4 md:px-8 py-8" id="targeted-roles">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest">
              <Sparkles className="w-4 h-4" />
              <span>CUSTOM CANDIDATE DOSSIERS · ZURICH ROLES</span>
            </div>
            <span className="text-[11px] font-mono text-zinc-500">Subdomains hosted on Vercel</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {targetedRoles.map((role) => {
              const Icon = role.icon;
              return (
                <Link
                  key={role.company}
                  href={role.path}
                  className={`p-4 rounded-xl border transition-all duration-200 group flex flex-col justify-between ${role.accent}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2 font-bold font-mono text-base text-white">
                        <Icon className="w-4 h-4" />
                        <span>{role.company}</span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                    </div>
                    <div className="text-xs font-semibold text-zinc-300">{role.role}</div>
                    <div className="text-[11px] text-zinc-400 mt-1">{role.tagline}</div>
                  </div>
                  <div className="mt-4 pt-2 border-t border-white/10 text-[10px] font-mono text-zinc-400 flex items-center justify-between">
                    <span>{role.domain}</span>
                    <span className="text-zinc-500">Zurich, CH</span>
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
          <p className="eyebrow"><span /> Senior Manager AI @ Zurich Airport · 4x Founder · Forbes 30u30</p>
          <h1>
            Building AI systems that <em>understand people,</em> execute under constraint and scale in Zurich.
          </h1>
          <p className="hero-intro">
            Interactive candidate dossier, ventures, and production prototypes by Terence La. Leading AI strategy for 30M+ passengers/year at Zurich Airport, building LLM products since 2020, and lecturing on AI Strategy.
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
