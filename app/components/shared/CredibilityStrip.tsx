"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  dossierCredibilityItem,
  dossierCredibilityStagger,
  dossierInView,
  dossierViewport,
} from "@/app/lib/motion";
import { DossierBorderDrawIn, DossierSectionDivider } from "@/app/components/shared/DossierSectionDivider";

const credentials = [
  { name: "PwC", detail: "Transfer pricing" },
  { name: "Credit Suisse", detail: "Chairman's Office" },
  { name: "Zurich Airport", detail: "Senior Manager AI" },
  { name: "Forbes", detail: "30 Under 30 DACH" },
  { name: "TEDx", detail: "2x speaker" },
  { name: "HSG", detail: "Master's degree" },
];

export function CredibilityStrip() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="dossier-credibility" aria-label="Enterprise credentials">
      <DossierSectionDivider />
      <div className="mx-auto max-w-[1200px] px-4 md:px-8 pt-12">
        <motion.p
          className="dossier-credibility-lead"
          {...(reduceMotion ? {} : dossierInView)}
        >
          A decade in enterprise sales and two Head of AI roles. Builder who ships, not consultant who
          advises.
        </motion.p>
      </div>

      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        <DossierBorderDrawIn className="h-px bg-[var(--dossier-line-strong)]" />
      </div>

      <motion.ul
        className="dossier-credibility-list border-t-0"
        variants={reduceMotion ? undefined : dossierCredibilityStagger}
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={dossierViewport}
      >
        {credentials.map((item) => (
          <motion.li
            key={item.name}
            variants={reduceMotion ? undefined : dossierCredibilityItem}
          >
            <b>{item.name}</b>
            <span>{item.detail}</span>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
