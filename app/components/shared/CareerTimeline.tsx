"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { careerTimeline, credentialsHighlights } from "@/app/lib/dossier-config";
import {
  dossierTimelineStep,
  dossierViewport,
  EASE_OUT,
} from "@/app/lib/motion";
import { DossierBorderDrawIn, DossierSectionDivider } from "@/app/components/shared/DossierSectionDivider";

type CareerTimelineProps = {
  accentColor?: string;
};

export function CareerTimeline({ accentColor = "#10a37f" }: CareerTimelineProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="dossier-section relative z-[2] !py-16">
      <DossierSectionDivider />
      <div className="mx-auto max-w-[1200px] px-4 md:px-8 pt-16">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={dossierViewport}
          transition={{ duration: 0.55, ease: EASE_OUT }}
          className="mb-10 max-w-[65ch]"
        >
          <h2 className="dossier-hero-title !text-[clamp(28px,3.5vw,48px)]">
            PwC to Credit Suisse to <em>two Head of AI roles</em> to Zurich Airport
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--dossier-body)]">
            Entrepreneurship since 19. A decade in sales. I spot trends early, build things fast, and help
            people navigate new tech.
          </p>
        </motion.div>

        <div className="dossier-career-timeline border-t-0">
          <DossierBorderDrawIn className="h-px bg-[var(--dossier-line-strong)]" />
          <div className="dossier-career-track" role="list" aria-label="Career timeline">
            {careerTimeline.map((step) => (
              <motion.article
                key={`${step.company}-${step.title}`}
                className="dossier-career-step"
                role="listitem"
                variants={reduceMotion ? undefined : dossierTimelineStep}
                initial={reduceMotion ? false : "hidden"}
                whileInView="visible"
                viewport={dossierViewport}
              >
                <span style={{ color: step.current ? accentColor : "var(--dossier-muted)" }}>
                  {step.period}
                </span>
                <b>{step.title}</b>
                <span>{step.company}</span>
                <p>{step.detail}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          className="dossier-credentials-row"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={dossierViewport}
          transition={{ duration: 0.55, ease: EASE_OUT, delay: 0.08 }}
          aria-label="Credentials and recognition"
        >
          {credentialsHighlights.map((item) => (
            <div key={item.label} className="dossier-credential-badge">
              <b>{item.label}</b>
              <span>{item.detail}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
