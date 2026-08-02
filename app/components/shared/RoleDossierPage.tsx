"use client";

import React, { type CSSProperties, useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SubpageHeader } from "@/app/components/shared/SubpageHeader";
import { DossierBackground } from "@/app/components/shared/DossierBackground";
import { CredibilityStrip } from "@/app/components/shared/CredibilityStrip";
import { CareerTimeline } from "@/app/components/shared/CareerTimeline";
import { CareerProofBanner } from "@/app/components/shared/CareerProofBanner";
import { LoomVideoFrame } from "@/app/components/shared/LoomVideoFrame";
import { EnterpriseAdoptionToolkit } from "@/app/components/shared/EnterpriseAdoptionToolkit";
import { SideProjectsGrid } from "@/app/components/shared/SideProjectsGrid";
import { LinkedInCTA } from "@/app/components/shared/LinkedInCTA";
import { InterviewTeaserModal } from "@/app/components/shared/InterviewTeaserModal";
import {
  companyDossierSupport,
  isExternalDossier,
  type DossierCompany,
} from "@/app/lib/dossier-config";
import { dossierItem, dossierStagger, dossierInView, EASE_OUT } from "@/app/lib/motion";

type ExecutionMetric = {
  label: string;
  value: string;
  note: string;
};

type FitPoint = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type RoleDossierPageProps = {
  companyKey: DossierCompany;
  companyName: string;
  roleTitle: string;
  accentColor: string;
  heroEyebrow?: string;
  heroTitle: React.ReactNode;
  heroSummary: string;
  primaryCtaLabel: string;
  blueprintItems: string[];
  metrics: ExecutionMetric[];
  fitHeading: string;
  fitPoints: FitPoint[];
  demoKicker?: string;
  demoTitle: string;
  demoSummary: string;
  interactiveDemo: React.ReactNode;
  loomUrl?: string;
};

function AnimatedMetric({
  value,
  label,
  note,
  accentColor,
  highlight = false,
}: ExecutionMetric & { accentColor: string; highlight?: boolean }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      {...(reduceMotion
        ? {}
        : {
            initial: { opacity: 0, y: 16 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, amount: 0.4 },
            transition: { duration: 0.35, ease: EASE_OUT },
          })}
    >
      <b
        className="dossier-stat-highlight"
        style={{ color: highlight ? accentColor : "var(--dossier-ink)" }}
      >
        {value}
      </b>
      <span>{label}</span>
      {note ? (
        <p className="mt-1 text-[10px] leading-snug text-[var(--dossier-muted)]">{note}</p>
      ) : null}
    </motion.div>
  );
}

export function RoleDossierPage({
  companyKey,
  companyName,
  roleTitle,
  accentColor,
  heroEyebrow,
  heroTitle,
  heroSummary,
  primaryCtaLabel,
  blueprintItems,
  metrics,
  fitHeading,
  fitPoints,
  demoTitle,
  demoSummary,
  interactiveDemo,
  loomUrl,
}: RoleDossierPageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const external = isExternalDossier();
  const support = companyDossierSupport[companyKey];

  const accentStyles = useMemo(
    () =>
      ({
        "--accent-color": accentColor,
        "--hero-accent": accentColor,
      }) as CSSProperties,
    [accentColor]
  );

  return (
    <main
      className="dossier-page relative min-h-[100dvh] overflow-x-hidden selection:bg-[color-mix(in_srgb,var(--hero-accent)_25%,white)] selection:text-[#1a1a1a]"
      style={accentStyles}
      data-dossier-mode={external ? "external" : "internal"}
    >
      <DossierBackground accentColor={accentColor} />
      <SubpageHeader companyName={companyName} roleTitle={roleTitle} accentColor={accentColor} />

      <section className="dossier-section relative z-[2] !pb-20 !pt-14 md:!pt-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-8">
          <motion.div
            className="grid items-end gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]"
            variants={reduceMotion ? undefined : dossierStagger}
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
          >
            <div>
              {heroEyebrow ? (
                <motion.p variants={reduceMotion ? undefined : dossierItem} className="dossier-eyebrow">
                  <span aria-hidden="true" />
                  {heroEyebrow}
                </motion.p>
              ) : null}

              <motion.h1 variants={reduceMotion ? undefined : dossierItem} className="dossier-hero-title">
                {heroTitle}
              </motion.h1>

              <motion.p
                variants={reduceMotion ? undefined : dossierItem}
                className="mt-8 max-w-[65ch] text-base leading-relaxed text-[var(--dossier-body)]"
              >
                {heroSummary}
              </motion.p>

              <motion.div
                variants={reduceMotion ? undefined : dossierItem}
                className="mt-10 flex flex-wrap items-center gap-6"
              >
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="dossier-button-primary dossier-pressable"
                  style={{ backgroundColor: accentColor, color: "#1a1a1a" }}
                >
                  {primaryCtaLabel}
                  <ArrowUpRight className="h-4 w-4" />
                </button>

                <a
                  href="https://github.com/terencela"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dossier-text-link dossier-pressable"
                >
                  github.com/terencela ↗
                </a>

                <a
                  href="https://www.linkedin.com/in/terencela"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dossier-text-link dossier-pressable"
                >
                  LinkedIn ↗
                </a>
              </motion.div>

              <motion.div
                variants={reduceMotion ? undefined : dossierItem}
                className="dossier-hero-index mt-12 lg:hidden"
                aria-label="Key metrics"
              >
                {metrics.map((metric, index) => (
                  <AnimatedMetric
                    key={metric.label}
                    {...metric}
                    accentColor={accentColor}
                    highlight={index === 0}
                  />
                ))}
              </motion.div>
            </div>

            <motion.aside variants={reduceMotion ? undefined : dossierItem} className="relative lg:ml-auto">
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.55, ease: EASE_OUT, delay: 0.12 }}
                className="dossier-profile-frame aspect-[3/4] w-full max-w-[340px] lg:ml-auto"
              >
                <Image
                  src="/images/terence-la-profile.png"
                  alt="Terence La, Zurich-based AI leader and builder"
                  fill
                  sizes="340px"
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 z-[2] p-5">
                  <p className="text-sm font-medium text-[#f7f6f2]">Terence La</p>
                  <p className="text-xs text-[#d8d4cb]">Senior Manager AI · Zurich Airport</p>
                </div>
              </motion.div>

              <div className="dossier-hero-index mt-6 hidden lg:block" aria-label="Key metrics">
                {metrics.map((metric, index) => (
                  <AnimatedMetric
                    key={metric.label}
                    {...metric}
                    accentColor={accentColor}
                    highlight={index === 0}
                  />
                ))}
              </div>
            </motion.aside>
          </motion.div>
        </div>
      </section>

      <CredibilityStrip />

      <CareerTimeline accentColor={accentColor} />

      <CareerProofBanner
        accentColor={accentColor}
        intro={support.careerProofIntro}
        items={support.careerProofItems}
      />

      <section className="dossier-section relative z-[2]">
        <div className="mx-auto max-w-[1200px] px-4 md:px-8">
          <motion.div
            {...(reduceMotion ? {} : dossierInView)}
            className="mb-10"
          >
            <h2 className="dossier-hero-title !text-[clamp(32px,4vw,56px)]">
              Hear it <em>directly</em> from me
            </h2>
            <p className="mt-4 max-w-[55ch] text-base leading-relaxed text-[var(--dossier-body)]">
              TEDx speaker, Forbes 30 Under 30, and the person who ships the code behind the strategy.
            </p>
          </motion.div>

          <LoomVideoFrame
            companyName={companyName}
            roleTitle={roleTitle}
            loomUrl={loomUrl}
            accentColor={accentColor}
          />
        </div>
      </section>

      <section className="dossier-section relative z-[2]">
        <div className="mx-auto max-w-[1200px] px-4 md:px-8">
          <motion.div
            {...(reduceMotion ? {} : dossierInView)}
            className="dossier-demo-chrome"
          >
            <div className="dossier-demo-chrome-header">
              <span className="font-medium text-[#f7f6f2]">{demoTitle}</span>
              <span>{companyName}</span>
            </div>
            <div className="border-b border-white/10 px-5 py-4 md:px-8">
              <p className="max-w-[65ch] text-sm leading-relaxed text-[#9a9ba4]">{demoSummary}</p>
            </div>
            <div className="p-4 md:p-6">{interactiveDemo}</div>
          </motion.div>
        </div>
      </section>

      <section className="dossier-section relative z-[2]">
        <div className="mx-auto max-w-[1200px] px-4 md:px-8">
          <motion.div
            {...(reduceMotion ? {} : dossierInView)}
            className="dossier-fit-featured"
          >
            <div className="dossier-fit-featured-copy">
              <h2 className="dossier-hero-title !text-[clamp(28px,3.5vw,48px)]">{fitHeading}</h2>
              <p className="mt-4 text-base leading-relaxed text-[var(--dossier-body)]">
                Range matters more than ever. Built from real deployments at Zurich Airport and a decade
                selling into Swiss enterprise accounts.
              </p>
            </div>
            <div className="dossier-fit-stack">
              {fitPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <motion.div
                    key={point.title}
                    className="dossier-fit-point"
                    initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, ease: EASE_OUT, delay: index * 0.06 }}
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <Icon className="h-4 w-4" style={{ color: accentColor }} />
                      <h3>{point.title}</h3>
                    </div>
                    <p>{point.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <div className="mt-16">
            <EnterpriseAdoptionToolkit
              title={support.toolkitTitle}
              subtitle={support.toolkitSubtitle}
              adoptionPillars={support.adoptionPillars}
              useCases={support.useCases}
              accentColor={accentColor}
            />
          </div>
        </div>
      </section>

      <SideProjectsGrid accentColor={accentColor} />
      <LinkedInCTA
        companyName={companyName}
        roleTitle={roleTitle}
        body={support.linkedInCtaBody}
        accentColor={accentColor}
      />

      <InterviewTeaserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        companyName={companyName}
        roleTitle={roleTitle}
        blueprintItems={blueprintItems}
        pitch={support.interviewPitch}
        pitchSub={support.interviewPitchSub}
        blueprintLabel={support.interviewBlueprintLabel}
        accentColor={accentColor}
      />
    </main>
  );
}
