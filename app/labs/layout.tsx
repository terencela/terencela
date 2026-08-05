import type { Metadata } from "next";
import { ConstructionBanner } from "@/app/components/shared/ConstructionBanner";

export const metadata: Metadata = {
  title: "Terence Labs — Product Portfolio",
  description: "A living portfolio of ventures, prototypes and experiments by Terence La.",
};

export default function LabsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ConstructionBanner />
      <div className="pt-[72px]">{children}</div>
    </>
  );
}
