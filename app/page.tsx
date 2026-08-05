import type { Metadata } from "next";
import HomeClient from "@/app/components/home/HomeClient";

export const metadata: Metadata = {
  title: "Terence La · AI Product Builder, Zurich",
  description:
    "Building AI systems that understand people. Founder, Forbes 30 Under 30, AI Lead at Zurich Airport.",
};

export default function HomePage() {
  return <HomeClient />;
}
