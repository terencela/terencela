"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { CareerProofItem } from "@/app/lib/dossier-config";
import { EASE_OUT } from "@/app/lib/motion";

type CareerProofBannerProps = {
  accentColor?: string;
  intro: string;
  items: CareerProofItem[];
};

export function CareerProofBanner({
  accentColor = "#10a37f",
  intro,
  items,
}: CareerProofBannerProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="dossier-section !py-0">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        <motion.p
          className="mb-8 max-w-[65ch] text-[15px] leading-relaxed text-[var(--dossier-muted)]"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: EASE_OUT }}
        >
          {intro}
        </motion.p>

        <div className="dossier-proof-list">
          {items.map((item, index) => (
            <motion.article
              key={item.label}
              className="dossier-proof-row"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, ease: EASE_OUT, delay: index * 0.05 }}
            >
              <b style={{ color: index === 0 ? accentColor : "var(--dossier-ink)" }}>{item.stat}</b>
              <div>
                <strong>{item.label}</strong>
              </div>
              <p>{item.sub}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
