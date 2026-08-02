/**
 * External dossier pages (/openai, /anthropic, etc.) are standalone application
 * pages that must never link back to the internal hub at /.
 */
export const IS_EXTERNAL_DOSSIER = true;

export function getDossierMode(): "external" | "internal" {
  if (typeof process !== "undefined" && process.env.NEXT_PUBLIC_DOSSIER_MODE === "internal") {
    return "internal";
  }
  return IS_EXTERNAL_DOSSIER ? "external" : "internal";
}

export function isExternalDossier(): boolean {
  return getDossierMode() === "external";
}
