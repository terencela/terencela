"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

type DossierBackgroundProps = {
  accentColor: string;
};

export function DossierBackground({ accentColor }: DossierBackgroundProps) {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <div className="dossier-grain" aria-hidden="true" />
      <div className="dossier-dot-grid" aria-hidden="true" />
      <motion.div
        className="dossier-accent-orb"
        aria-hidden="true"
        style={{
          background: `radial-gradient(circle, ${accentColor}22 0%, transparent 68%)`,
        }}
        initial={reduceMotion ? false : { opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      />
      <motion.div
        className="dossier-accent-orb dossier-accent-orb-secondary"
        aria-hidden="true"
        style={{
          background: `radial-gradient(circle, ${accentColor}12 0%, transparent 70%)`,
        }}
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: [0.23, 1, 0.32, 1], delay: 0.15 }}
      />
    </>
  );
}
