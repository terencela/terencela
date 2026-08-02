"use client";

import React from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { isExternalDossier } from "@/app/lib/dossier-config";

interface SubpageHeaderProps {
  companyName: string;
  roleTitle: string;
  accentColor: string;
}

export function SubpageHeader({
  companyName,
  roleTitle,
  accentColor,
}: SubpageHeaderProps) {
  const external = isExternalDossier();

  return (
    <header className="dossier-glass-header sticky top-0 z-[60]">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-4 md:px-8">
        <div className="min-w-0">
          <p className="truncate text-sm text-[var(--dossier-ink)]">
            <span className="font-semibold">{companyName}</span>
            <span className="text-[var(--dossier-muted)]"> · {roleTitle}</span>
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <div className="dossier-glass-pill hidden sm:inline-flex">
            <MapPin className="h-3.5 w-3.5" style={{ color: accentColor }} />
            Zurich
          </div>

          <a
            href="https://www.linkedin.com/in/terencela"
            target="_blank"
            rel="noopener noreferrer"
            className="dossier-glass-pill dossier-pressable transition-colors hover:text-[var(--dossier-ink)]"
          >
            LinkedIn
            <ArrowUpRight className="h-3.5 w-3.5 text-[var(--dossier-subtle)]" />
          </a>
        </div>
      </div>

      {external ? null : (
        <div className="sr-only" aria-hidden="true">
          Internal preview mode
        </div>
      )}
    </header>
  );
}
