"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { CareerProofItem } from "@/app/lib/dossier-config";

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
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <p className="mb-6 max-w-xl text-[15px] leading-relaxed text-[#a9aab2]">{intro}</p>
        </motion.div>
      </div>

      <motion.div
        className="dossier-proof-strip"
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
      >
        {items.map((item, index) => (
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
              <strong className="block font-medium text-[#f7f6f2]">{item.label}</strong>
              {item.sub}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
