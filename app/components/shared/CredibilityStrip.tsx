"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { dossierInView } from "@/app/lib/motion";

const credentials = [
  { name: "Zurich Airport", detail: "Senior Manager AI" },
  { name: "PwC", detail: "Enterprise consulting" },
  { name: "Credit Suisse", detail: "P3C program" },
  { name: "Forbes", detail: "30 Under 30" },
  { name: "TEDx", detail: "Public speaker" },
  { name: "Founder", detail: "AI agency + 4 ventures" },
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
          A decade in enterprise sales and two Head of AI roles. I code, ship, and present to boards.
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
