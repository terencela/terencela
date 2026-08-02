"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { dossierInView } from "@/app/lib/motion";

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
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        <motion.p
          className="dossier-credibility-lead"
          {...(reduceMotion ? {} : dossierInView)}
        >
          A decade in enterprise sales and two Head of AI roles. Builder who ships, not consultant who
          advises.
        </motion.p>
      </div>

      <motion.ul
        className="dossier-credibility-list"
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1], delay: 0.06 }}
      >
        {credentials.map((item, index) => (
          <motion.li
            key={item.name}
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.35,
              ease: [0.23, 1, 0.32, 1],
              delay: index * 0.05,
            }}
          >
            <b>{item.name}</b>
            <span>{item.detail}</span>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
