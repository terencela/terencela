"use client";

import React, { type CSSProperties, useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SubpageHeader } from "@/app/components/shared/SubpageHeader";
import { DossierBackground } from "@/app/components/shared/DossierBackground";
import { CareerProofBanner } from "@/app/components/shared/CareerProofBanner";
import { LoomVideoFrame } from "@/app/components/shared/LoomVideoFrame";
import { EnterpriseAdoptionToolkit } from "@/app/components/shared/EnterpriseAdoptionToolkit";
import { SideProjectsGrid } from "@/app/components/shared/SideProjectsGrid";
import { LinkedInCTA } from "@/app/components/shared/LinkedInCTA";
import { InterviewTeaserModal } from "@/app/components/shared/InterviewTeaserModal";
import { isExternalDossier } from "@/app/lib/dossier-config";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
};

export function RoleDossierPage({
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

  const accentStyles = useMemo(
    () =>
      ({
        "--accent-color": accentColor,
      }) as CSSProperties,
    [accentColor]
  );

  return (
    <main
      className="dossier-page relative min-h-[100dvh] overflow-x-hidden selection:bg-white selection:text-black"
      style={accentStyles}
      data-dossier-mode={external ? "external" : "internal"}
    >
      <DossierBackground accentColor={accentColor} />
      <SubpageHeader companyName={companyName} roleTitle={roleTitle} accentColor={accentColor} />

      <section className="dossier-section relative z-[2] !pb-20 !pt-16 md:!pt-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-8">
          <motion.div
            className="grid items-end gap-12 lg:grid-cols-[minmax(0,1fr)_340px]"
            variants={reduceMotion ? undefined : containerVariants}
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
          >
            <div>
              {heroEyebrow ? (
                <motion.p
                  variants={reduceMotion ? undefined : itemVariants}
                  className="mb-6 text-sm text-[#8f9098]"
                >
                  {heroEyebrow}
                </motion.p>
              ) : null}

              <motion.h1
                variants={reduceMotion ? undefined : itemVariants}
                className="dossier-hero-title"
                style={{ ["--hero-accent" as string]: accentColor }}
              >
                {heroTitle}
              </motion.h1>

              <motion.p
                variants={reduceMotion ? undefined : itemVariants}
                className="mt-8 max-w-2xl text-lg leading-relaxed text-[#a9aab2]"
              >
                {heroSummary}
              </motion.p>

              <motion.div
                variants={reduceMotion ? undefined : itemVariants}
                className="mt-10 flex flex-wrap items-center gap-4"
              >
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="dossier-pressable inline-flex cursor-pointer items-center gap-3 px-5 py-3.5 text-sm font-semibold"
                  style={{
                    backgroundColor: "#f4f2ec",
                    color: "#07080b",
                  }}
                >
                  {primaryCtaLabel}
                  <ArrowUpRight className="h-4 w-4" />
                </button>

                <a
                  href="https://www.linkedin.com/in/terencela"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dossier-pressable text-sm text-[#a9aab2] transition-colors hover:text-white"
                  style={{ borderBottom: "1px solid #55565e", paddingBottom: 4 }}
                >
                  LinkedIn profile ↗
                </a>
              </motion.div>
            </div>

            <motion.aside
              variants={reduceMotion ? undefined : itemVariants}
              className="relative"
            >
              <div className="dossier-profile-frame aspect-[3/4] w-full max-w-[340px] lg:ml-auto">
                <Image
                  src="/images/terence-la-profile.png"
                  alt="Terence La, Zurich-based AI leader"
                  fill
                  sizes="340px"
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 z-[2] p-5">
                  <p className="text-sm font-medium text-[#f7f6f2]">Terence La</p>
                  <p className="text-xs text-[#a9aab2]">Senior Manager AI · Zurich Airport</p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-0 border border-[var(--line)] bg-[#0a0b0f]">
                {metrics.map((metric, index) => (
                  <div
                    key={metric.label}
                    className="px-3 py-4 text-center"
                    style={
                      index < metrics.length - 1
                        ? { borderRight: "1px solid var(--line)" }
                        : undefined
                    }
                  >
                    <p
                      className="text-lg font-semibold tracking-tight"
                      style={{ color: index === 0 ? accentColor : "#f7f6f2" }}
                    >
                      {metric.value}
                    </p>
                    <p className="mt-1 text-[10px] leading-snug text-[#8f9098]">{metric.label}</p>
                  </div>
                ))}
              </div>
            </motion.aside>
          </motion.div>
        </div>
      </section>

      <CareerProofBanner accentColor={accentColor} />

      <section className="dossier-section relative z-[2]">
        <div className="mx-auto max-w-[1200px] px-4 md:px-8">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="mb-10"
          >
            <h2 className="dossier-hero-title !text-[clamp(32px,4vw,56px)]">
              Hear it <em>directly</em> from me
            </h2>
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
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="dossier-demo-chrome"
          >
            <div className="dossier-demo-chrome-header">
              <span className="font-medium text-[#f7f6f2]">{demoTitle}</span>
              <span>{companyName}</span>
            </div>
            <div className="border-b border-[var(--line)] px-5 py-4 md:px-8">
              <p className="max-w-2xl text-sm leading-relaxed text-[#9a9ba4]">{demoSummary}</p>
            </div>
            <div className="p-4 md:p-6">{interactiveDemo}</div>
          </motion.div>
        </div>
      </section>

      <section className="dossier-section relative z-[2]">
        <div className="mx-auto max-w-[1200px] px-4 md:px-8">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="dossier-fit-row"
          >
            <h2 className="dossier-hero-title !text-[clamp(32px,4vw,52px)] sticky top-28 self-start">
              {fitHeading}
            </h2>
            <div>
              {fitPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <motion.div
                    key={point.title}
                    className="dossier-fit-point"
                    initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.06 }}
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
              companyName={companyName}
              roleTitle={roleTitle}
              accentColor={accentColor}
            />
          </div>
        </div>
      </section>

      <SideProjectsGrid accentColor={accentColor} />
      <LinkedInCTA companyName={companyName} roleTitle={roleTitle} accentColor={accentColor} />

      <InterviewTeaserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        companyName={companyName}
        roleTitle={roleTitle}
        blueprintItems={blueprintItems}
        accentColor={accentColor}
      />
    </main>
  );
}
