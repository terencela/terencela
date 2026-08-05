import { DossierHoldScreen } from "@/app/components/shared/DossierHoldScreen";

export default function OpenAILayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <DossierHoldScreen />
    </>
  );
}
