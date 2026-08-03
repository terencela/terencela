"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type DossierTheme = "light" | "dark";

const STORAGE_KEY = "dossier-theme";

type DossierThemeContextValue = {
  theme: DossierTheme;
  setTheme: (theme: DossierTheme) => void;
  toggleTheme: () => void;
};

const DossierThemeContext = createContext<DossierThemeContextValue>({
  theme: "light",
  setTheme: () => undefined,
  toggleTheme: () => undefined,
});

function applyThemeToDocument(theme: DossierTheme) {
  const root = document.documentElement;
  root.dataset.dossierTheme = theme;
  root.dataset.dossier = "true";
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute("content", theme === "dark" ? "#0a0b0f" : "#fafaf8");
  }
}

export function DossierThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<DossierTheme>("light");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const initial = stored === "dark" ? "dark" : "light";
    setThemeState(initial);
    applyThemeToDocument(initial);
  }, []);

  const setTheme = useCallback((next: DossierTheme) => {
    setThemeState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    applyThemeToDocument(next);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((current) => {
      const next = current === "dark" ? "light" : "dark";
      window.localStorage.setItem(STORAGE_KEY, next);
      applyThemeToDocument(next);
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({ theme, setTheme, toggleTheme }),
    [theme, setTheme, toggleTheme]
  );

  return <DossierThemeContext.Provider value={value}>{children}</DossierThemeContext.Provider>;
}

export function useDossierTheme() {
  return useContext(DossierThemeContext);
}
