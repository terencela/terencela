"use client";

import { useEffect, useState } from "react";
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
      "AI voice calls that capture parents' stories, preserve family memories and keep generations connected.",
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
      "A functional digital twin shaped by a person's knowledge, communication style, preferences and decisions.",
    evidence: "System experiment",
    accent: "pink",
    visual: "twin",
  },
  {
    name: "TerenceLa.com",
    category: "Creative web",
    stage: "Live",
    description:
      "A personal web experience with a classic site, a Windows XP-inspired world and an AI version of Terence.",
    evidence: "Live interactive website",
    accent: "sky",
    visual: "web",
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
    proof: "10 client engagements",
  },
  {
    name: "SmartCredit.io",
    year: "2018-20",
    type: "DeFi",
    description:
      "A fixed-income lending and credit platform for decentralized finance.",
    proof: "Executive growth role",
  },
  {
    name: "ZooMania",
    year: "2017",
    type: "Sustainability game",
    description:
      "A gamified app encouraging more sustainable purchasing through collectible digital animals.",
    proof: "HackZurich prize winner",
  },
  {
    name: "Virtual AR Fitting Room",
    year: "2014",
    type: "Augmented reality",
    description:
      "An early mobile concept for trying on clothes through the smartphone camera.",
    proof: "Built before AR commerce went mainstream",
  },
  {
    name: "PitchLens",
    year: "2023",
    type: "Investment AI",
    description:
      "An AI system that reads pitch decks, surfaces red flags and structures investor analysis.",
    proof: "Working product prototype",
  },
];

const principles = [
  ["01", "Human context", "AI should understand the person, not only the prompt."],
  ["02", "Useful before perfect", "Build the smallest real experience, then learn from behavior."],
  ["03", "Evidence over theatre", "Ideas show progress honestly. Ventures show measurable outcomes."],
];

export function LabsPortfolio() {
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
        <a href="#top" className="brand" aria-label="Terence Labs home">
          TERENCE <span>LABS</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#now">Building now</a>
          <a href="#past">Past ventures</a>
          <a href="#principles">Principles</a>
        </nav>
        <a className="header-link" href="https://terencela.com">
          About Terence ↗
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span /> Independent product lab · Zurich
          </p>
          <h1>
            Products that <em>understand people,</em> preserve context and turn AI into action.
          </h1>
          <p className="hero-intro">
            A living portfolio of ventures, prototypes and experiments by Terence La. Built across
            human communication, enterprise intelligence and real-world connection.
          </p>
          <div className="hero-actions">
            <a href="#now" className="button-primary">
              Explore what I&apos;m building <span>↓</span>
            </a>
            <a href="#past" className="text-link">
              View the archive
            </a>
          </div>
        </div>
        <div className="hero-index" aria-label="Portfolio summary">
          <div>
            <b>11</b>
            <span>Current builds</span>
          </div>
          <div>
            <b>8+</b>
            <span>Past ventures</span>
          </div>
          <div>
            <b>20+</b>
            <span>Innovation awards</span>
          </div>
        </div>
      </section>

      <section className="featured" aria-labelledby="featured-title">
        <div className="featured-copy">
          <div className="featured-meta">
            <span>FLAGSHIP BUILD</span>
            <span className="live-dot">BUILDING NOW</span>
          </div>
          <p className="featured-number">01 / 11</p>
          <h2 id="featured-title">
            Vibe
            <br />
            Decoder
          </h2>
          <p className="featured-thesis">
            AI understands language.
            <br />
            <strong>Vibe Decoder understands the person.</strong>
          </p>
          <p className="featured-body">
            A decoder for the invisible layer behind every message: personality, culture, relationship
            history, subtext and how your reply will actually land.
          </p>
          <div className="featured-proof">
            <div>
              <small>Stage</small>
              <b>Interactive prototype</b>
            </div>
            <div>
              <small>Core wedge</small>
              <b>Decode before rewrite</b>
            </div>
            <div>
              <small>Role</small>
              <b>Founder · Product · Design</b>
            </div>
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

      <section className="now-section" id="now">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span /> Product lab
            </p>
            <h2>Building now</h2>
          </div>
          <p>
            Not eleven active startups. A deliberately honest view of products at different stages:
            from live ventures to focused experiments.
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

      <section className="past-section" id="past">
        <div className="section-heading past-heading">
          <div>
            <p className="eyebrow dark">
              <span /> 2014-2024
            </p>
            <h2>
              Past ventures
              <br />& experiments
            </h2>
          </div>
          <p>
            Finished chapters, not hidden failures. Each project produced a result: traction, an
            award, a working product, or a sharper view of what to build next.
          </p>
        </div>

        <div className="past-list">
          {pastProjects.map((project, index) => (
            <article className="past-row" key={project.name}>
              <span className="past-index">{String(index + 1).padStart(2, "0")}</span>
              <div className="past-name">
                <small>{project.year}</small>
                <h3>{project.name}</h3>
              </div>
              <p>{project.description}</p>
              <div className="past-proof">
                <small>{project.type}</small>
                <b>{project.proof}</b>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="principles" id="principles">
        <p className="eyebrow">
          <span /> The connecting thread
        </p>
        <div className="principles-title">
          <h2>
            Many products.
            <br />
            <em>One obsession.</em>
          </h2>
          <p>
            Making advanced technology feel more human, more contextual and more useful in the
            moments that matter.
          </p>
        </div>
        <div className="principle-grid">
          {principles.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <div>
          <p className="eyebrow">
            <span /> Still building
          </p>
          <h2>
            Everything you want is
            <br />
            <em>10 experiments away.</em>
          </h2>
        </div>
        <div className="footer-links">
          <a href="https://terencela.com">TerenceLa.com ↗</a>
          <a href="mailto:future@terencela.com">future@terencela.com ↗</a>
          <p>
            Zurich, Switzerland
            <br />© {new Date().getFullYear()} Terence La
          </p>
        </div>
      </footer>

      {selected ? (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setSelected(null)}>
          <div
            className={`project-modal accent-${selected.accent}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelected(null)}
              aria-label="Close project"
            >
              ×
            </button>
            <div className="modal-visual">
              <ProductVisual type={selected.visual} />
            </div>
            <div className="modal-copy">
              <span className="stage-badge">{selected.stage}</span>
              <small>{selected.category}</small>
              <h2 id="modal-title">{selected.name}</h2>
              <p>{selected.description}</p>
              <div className="modal-evidence">
                <small>Current evidence</small>
                <b>{selected.evidence}</b>
              </div>
              <p className="modal-note">
                Full case study, product screens and verified metrics will be added as this build
                develops.
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
