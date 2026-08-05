export function DossierHoldScreen() {
  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center px-6 backdrop-blur-md"
      style={{ backgroundColor: "rgba(7, 8, 11, 0.45)" }}
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="dossier-hold-title"
    >
      <div className="max-w-2xl text-center">
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
  );
}
