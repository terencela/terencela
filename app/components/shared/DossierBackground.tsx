"use client";

import React from "react";

type DossierBackgroundProps = {
  accentColor: string;
};

export function DossierBackground({ accentColor }: DossierBackgroundProps) {
  return (
    <>
      <div className="dossier-grain" aria-hidden="true" />
      <div className="dossier-dot-grid" aria-hidden="true" />
      <div
        className="dossier-accent-orb"
        aria-hidden="true"
        style={{
          background: `radial-gradient(circle, ${accentColor}33 0%, transparent 68%)`,
        }}
      />
      <div
        className="dossier-accent-orb dossier-accent-orb-secondary"
        aria-hidden="true"
        style={{
          background: `radial-gradient(circle, ${accentColor}18 0%, transparent 70%)`,
        }}
      />
    </>
  );
}
