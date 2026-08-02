"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { ProductVisual } from "@/app/components/shared/ProductVisual";
import { EASE_OUT } from "@/app/lib/motion";

type SideProjectsGridProps = {
  accentColor?: string;
};

const projects = [
  {
    name: "Vibe Decoder",
    category: "Human context AI",
    stage: "Prototype",
    description:
      "Decodes tone, personality, culture and relationship dynamics before helping you respond.",
    evidence: "Interactive product built",
    visual: "messages",
    accent: "violet",
  },
  {
    name: "Engineering Office OS",
    category: "Enterprise AI",
    stage: "System design",
    description:
      "Connects project history, structural decisions, and expertise across engineering offices.",
    evidence: "Vertical RAG architecture",
    visual: "knowledge",
    accent: "blue",
  },
  {
    name: "AirCompanion",
    category: "Aviation AI",
    stage: "Venture",
    description:
      "Contextual AI guiding airport passengers before, during and after travel.",
    evidence: "Tested in Zurich Airport context",
    visual: "travel",
    accent: "cyan",
  },
  {
    name: "Rehearse",
    category: "Simulation",
    stage: "Prototype",
    description:
      "Practice complex enterprise sales calls and negotiations with realistic AI feedback.",
    evidence: "Interactive audio roleplay",
    visual: "rehearse",
    accent: "coral",
  },
  {
    name: "Privacy Layer",
    category: "AI infrastructure",
    stage: "Architecture",
    description:
      "Control layer for using frontier AI with sensitive enterprise data without raw storage.",
    evidence: "In-memory PII masking",
    visual: "privacy",
    accent: "green",
  },
  {
    name: "GTM AI",
    category: "Growth",
    stage: "Built",
    description:
      "Researches markets, sharpens positioning, and turns insights into automated outbound.",
    evidence: "$1M+ revenue generated",
    visual: "gtm",
    accent: "lime",
  },
];

export function SideProjectsGrid({ accentColor = "#10a37f" }: SideProjectsGridProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="dossier-section !pb-0 !pt-16">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: EASE_OUT }}
          className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <h3 className="dossier-hero-title !text-[clamp(32px,4vw,56px)]">
              Projects that show <em>how I build</em>
            </h3>
            <p className="mt-4 max-w-[55ch] text-sm leading-relaxed text-[var(--dossier-muted)]">
              Side systems I designed and shipped to prove execution depth beyond one employer context.
            </p>
          </div>

          <a
            href="https://github.com/terencela"
            target="_blank"
            rel="noopener noreferrer"
            className="dossier-text-link dossier-pressable inline-flex items-center gap-2"
          >
            github.com/terencela
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>

        <div className="dossier-project-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              className={`dossier-project-card accent-${project.accent}`}
              initial={reduceMotion ? false : { opacity: 0, y: 14, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.4, ease: EASE_OUT, delay: index * 0.05 }}
            >
              <ProductVisual type={project.visual} />
              <div className="flex flex-col p-6 md:p-7">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="text-[11px] font-medium" style={{ color: accentColor }}>
                    {project.category}
                  </span>
                  <span className="text-[11px] text-[var(--dossier-subtle)]">{project.stage}</span>
                </div>
                <h4 className="text-xl font-semibold tracking-tight text-[var(--dossier-ink)]">
                  {project.name}
                </h4>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--dossier-muted)]">
                  {project.description}
                </p>
                <p className="mt-5 border-t border-[var(--dossier-line-strong)] pt-4 text-xs text-[var(--dossier-subtle)]">
                  {project.evidence}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
