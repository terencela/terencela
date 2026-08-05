import { DOSSIER_HOLD_PREVIEW_IMAGE } from "@/app/lib/dossier-hold";

export function DossierHoldScreen() {
  return (
    <div className="dossier-hold-root" role="alertdialog" aria-modal="true" aria-labelledby="dossier-hold-title">
      <div
        className="dossier-hold-preview"
        style={{ backgroundImage: `url(${DOSSIER_HOLD_PREVIEW_IMAGE})` }}
        aria-hidden="true"
      />
      <div className="dossier-hold-screen">
        <div className="max-w-2xl px-6 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#8f9098]">
            Temporarily unavailable
          </p>
          <h1
            id="dossier-hold-title"
            className="text-balance text-[clamp(28px,5vw,52px)] font-semibold leading-[1.1] tracking-[-0.03em] text-[#f7f6f2]"
          >
            This page goes live on August 7.
          </h1>
        </div>
      </div>
    </div>
  );
}
