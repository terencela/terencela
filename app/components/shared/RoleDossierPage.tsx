"use client";

import React, {
  type CSSProperties,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import {
  animate,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
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
import {
  DOSSIER_LOAD_HERO_DELAY,
  DOSSIER_UI_DURATION,
  DOSSIER_WORD_STAGGER,
  dossierDemoInView,
  dossierFitIconSpring,
  dossierFitPointItem,
  dossierFitStagger,
  dossierInView,
  dossierItem,
  dossierProfileReveal,
  dossierStagger,
  EASE_OUT,
} from "@/app/lib/motion";

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

type ParsedMetricValue = {
  prefix: string;
  numeric: number;
  suffix: string;
  decimals: number;
};

function parseMetricValue(value: string): ParsedMetricValue | null {
  const match = value.match(/^([^\d]*?)([\d,.]+)(.*)$/);
  if (!match) return null;

  const [, prefix, rawNumber, suffix] = match;
  const normalized = rawNumber.replace(/,/g, "");
  const numeric = Number.parseFloat(normalized);
  if (Number.isNaN(numeric)) return null;

  const decimalPart = normalized.split(".")[1];
  return {
    prefix,
    numeric,
    suffix,
    decimals: decimalPart?.length ?? 0,
  };
}

function AnimatedHeroHeadline({
  children,
  className,
  reduceMotion,
}: {
  children: React.ReactNode;
  className: string;
  reduceMotion: boolean | null;
}) {
  const headlineContent = useMemo(() => {
    const renderWords = (
      node: React.ReactNode,
      startIndex: number,
      keyPrefix = ""
    ): { content: React.ReactNode; nextIndex: number } => {
      if (typeof node === "string") {
        const tokens = node.split(/(\s+)/);
        let wordIndex = startIndex;

        const content = tokens.map((token, index) => {
          if (!token || /^\s+$/.test(token)) {
            return token;
          }

          const currentIndex = wordIndex;
          wordIndex += 1;

          if (reduceMotion) {
            return (
              <span key={`${keyPrefix}-${index}`} className="inline">
                {token}
              </span>
            );
          }

          return (
            <span
              key={`${keyPrefix}-${index}`}
              className="inline-block overflow-hidden align-bottom"
              aria-hidden="false"
            >
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, y: 16, clipPath: "inset(100% 0 0 0)" }}
                animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" }}
                transition={{
                  duration: DOSSIER_UI_DURATION,
                  ease: EASE_OUT,
                  delay: DOSSIER_LOAD_HERO_DELAY + currentIndex * DOSSIER_WORD_STAGGER,
                }}
              >
                {token}
              </motion.span>
            </span>
          );
        });

        return { content, nextIndex: wordIndex };
      }

      if (Array.isArray(node)) {
        let wordIndex = startIndex;
        const content = node.map((child, index) => {
          const rendered = renderWords(child, wordIndex, `${keyPrefix}-${index}`);
          wordIndex = rendered.nextIndex;
          return (
            <React.Fragment key={`${keyPrefix}-frag-${index}`}>{rendered.content}</React.Fragment>
          );
        });

        return { content, nextIndex: wordIndex };
      }

      if (isValidElement<{ children?: React.ReactNode }>(node)) {
        const rendered = renderWords(node.props.children, startIndex, `${keyPrefix}-el`);
        return {
          content: React.cloneElement(node, { key: keyPrefix }, rendered.content),
          nextIndex: rendered.nextIndex,
        };
      }

      return { content: node, nextIndex: startIndex };
    };

    return renderWords(children, 0).content;
  }, [children, reduceMotion]);

  return <h1 className={className}>{headlineContent}</h1>;
}

function formatMetricValue(parsed: ParsedMetricValue, amount: number) {
  return `${parsed.prefix}${amount.toFixed(parsed.decimals)}${parsed.suffix}`;
}

function CountUpMetricValue({
  value,
  reduceMotion,
  isInView,
}: {
  value: string;
  reduceMotion: boolean | null;
  isInView: boolean;
}) {
  const parsed = useMemo(() => parseMetricValue(value), [value]);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!parsed || reduceMotion || !isInView || !spanRef.current) return;

    const node = spanRef.current;
    node.textContent = formatMetricValue(parsed, 0);

    const controls = animate(0, parsed.numeric, {
      duration: DOSSIER_UI_DURATION,
      ease: EASE_OUT,
      onUpdate: (latest) => {
        node.textContent = formatMetricValue(parsed, latest);
      },
    });

    return () => controls.stop();
  }, [isInView, parsed, reduceMotion]);

  if (!parsed || reduceMotion) {
    return <>{value}</>;
  }

  return (
    <span ref={spanRef}>{formatMetricValue(parsed, 0)}</span>
  );
}

function AnimatedMetric({
  value,
  label,
  note,
  accentColor,
  highlight = false,
}: ExecutionMetric & { accentColor: string; highlight?: boolean }) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <motion.div
      ref={ref}
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      animate={isInView || reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: DOSSIER_UI_DURATION, ease: EASE_OUT }}
    >
      <b
        className="dossier-stat-highlight"
        style={{ color: highlight ? accentColor : "var(--dossier-ink)" }}
      >
        <CountUpMetricValue value={value} reduceMotion={reduceMotion} isInView={isInView} />
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

  const ctaItems = [
    {
      key: "primary",
      node: (
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="dossier-button-primary dossier-pressable"
          style={{ backgroundColor: accentColor, color: "#1a1a1a" }}
        >
          {primaryCtaLabel}
          <ArrowUpRight className="h-4 w-4" />
        </button>
      ),
    },
    {
      key: "github",
      node: (
        <a
          href="https://github.com/terencela"
          target="_blank"
          rel="noopener noreferrer"
          className="dossier-text-link dossier-pressable"
        >
          github.com/terencela ↗
        </a>
      ),
    },
    {
      key: "linkedin",
      node: (
        <a
          href="https://www.linkedin.com/in/terencela"
          target="_blank"
          rel="noopener noreferrer"
          className="dossier-text-link dossier-pressable"
        >
          LinkedIn ↗
        </a>
      ),
    },
  ] as const;

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
          <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
            <motion.div
              variants={reduceMotion ? undefined : dossierStagger}
              initial={reduceMotion ? false : "hidden"}
              animate="visible"
            >
              {heroEyebrow ? (
                <motion.p variants={reduceMotion ? undefined : dossierItem} className="dossier-eyebrow">
                  <span aria-hidden="true" />
                  {heroEyebrow}
                </motion.p>
              ) : null}

              <motion.div variants={reduceMotion ? undefined : dossierItem}>
                <AnimatedHeroHeadline
                  className="dossier-hero-title"
                  reduceMotion={reduceMotion}
                >
                  {heroTitle}
                </AnimatedHeroHeadline>
              </motion.div>

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
                {ctaItems.map((item) => (
                  <React.Fragment key={item.key}>{item.node}</React.Fragment>
                ))}
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
            </motion.div>

            <motion.aside
              variants={reduceMotion ? undefined : dossierProfileReveal}
              initial={reduceMotion ? false : "hidden"}
              animate="visible"
              className="relative lg:ml-auto"
            >
              <div className="dossier-profile-frame aspect-[3/4] w-full max-w-[340px] lg:ml-auto">
                <Image
                  src="/images/terence-la-profile.png"
                  alt="Terence La, Zurich-based AI leader and builder"
                  fill
                  sizes="340px"
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 z-[2] p-5">
                  <p className="text-sm font-medium text-[var(--dossier-ink)]">Terence La</p>
                  <p className="text-xs text-[var(--dossier-muted)]">Senior Manager AI · Zurich Airport</p>
                </div>
              </div>

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
          </div>
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
            {...(reduceMotion ? {} : dossierDemoInView)}
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
            <motion.div
              className="dossier-fit-stack"
              variants={reduceMotion ? undefined : dossierFitStagger}
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              {fitPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <motion.div
                    key={point.title}
                    className="dossier-fit-point"
                    variants={reduceMotion ? undefined : dossierFitPointItem}
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <motion.span
                        className="inline-flex"
                        initial={reduceMotion ? false : { scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={reduceMotion ? undefined : dossierFitIconSpring}
                      >
                        <Icon className="h-4 w-4" style={{ color: accentColor }} />
                      </motion.span>
                      <h3>{point.title}</h3>
                    </div>
                    <p>{point.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
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
