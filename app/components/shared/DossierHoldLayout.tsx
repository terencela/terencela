"use client";

import { useEffect } from "react";
import { DossierHoldScreen } from "@/app/components/shared/DossierHoldScreen";

export function DossierHoldLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const root = document.documentElement;
    const previousTheme = root.dataset.dossierTheme;

    root.classList.add("dossier-hold-active");
    root.dataset.dossierTheme = "light";

    return () => {
      root.classList.remove("dossier-hold-active");
      if (previousTheme) {
        root.dataset.dossierTheme = previousTheme;
      } else {
        delete root.dataset.dossierTheme;
      }
    };
  }, []);

  return (
    <>
      <div className="dossier-hold-behind">{children}</div>
      <DossierHoldScreen />
    </>
  );
}
