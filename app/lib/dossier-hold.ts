/** Zurich time — dossier unlocks at start of August 7, 2026. */
const DOSSIER_RELEASE_MS = Date.parse("2026-08-07T00:00:00+02:00");

export const DOSSIER_HOLD_PREVIEW_IMAGE = "/screenshots/openai-v3.png";

export function isDossierOnHold(now = Date.now()): boolean {
  return now < DOSSIER_RELEASE_MS;
}
