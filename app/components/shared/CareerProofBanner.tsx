"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

type CareerProofBannerProps = {
  accentColor?: string;
};

const proofs = [
  {
    stat: "30M+",
    label: "Passengers served",
    sub: "AI Lead at Zurich Airport",
  },
  {
    stat: "Since 2020",
    label: "Building with LLMs",
    sub: "From early GPT production cycles",
  },
  {
    stat: "19+",
    label: "Awards",
    sub: "Hackathons, venture, product showcases",
  },
  {
    stat: "4 languages",
    label: "Swiss + global reach",
    sub: "Swiss German, High German, English, Cantonese",
  },
  {
    stat: "Forbes 30u30",
    label: "Founder track record",
    sub: "4 ventures built, multiple exits and pivots",
  },
];

export function CareerProofBanner({ accentColor = "#10a37f" }: CareerProofBannerProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="dossier-section !py-0">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <p className="mb-6 max-w-xl text-[15px] leading-relaxed text-[#a9aab2]">
            I am Terence. I have spent the last years shipping AI where failure is visible: airports,
            enterprise teams, and regulated Swiss environments.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="dossier-proof-strip"
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
      >
        {proofs.map((item, index) => (
          <motion.div
            key={item.label}
            className="dossier-proof-item"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.06 }}
          >
            <b style={{ color: index === 0 ? accentColor : "#f7f6f2" }}>{item.stat}</b>
            <span>
              <strong className="block text-[#f7f6f2] font-medium">{item.label}</strong>
              {item.sub}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
