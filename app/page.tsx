import type { Metadata } from "next";
import HomeClient from "@/app/components/home/HomeClient";

export const metadata: Metadata = {
  title: "Terence La · Internal Application Hub",
  robots: {
    index: false,
    follow: false,
  },
};

export default function HomePage() {
  return <HomeClient />;
}
