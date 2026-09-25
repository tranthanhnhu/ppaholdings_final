import { setRequestLocale } from "next-intl/server";
import { PaaAgroHero } from "@/components/PaaAgro/Hero";
import { PaaAgroOverview } from "@/components/PaaAgro/Overview";
import { PaaAgroFigures } from "@/components/PaaAgro/Figures";
import { PaaAgroWhatWeDo } from "@/components/PaaAgro/WhatWeDo";
import { PaaAgroEcosystem } from "@/components/PaaAgro/Ecosystem";
import { PaaAgroConnected } from "@/components/PaaAgro/Connected";
import { PaaAgroWebsiteCta } from "@/components/PaaAgro/WebsiteCta";
import { PaaAgroExplore } from "@/components/PaaAgro/Explore";
import { Footer } from "@/components/Footer/Footer";

type Props = { params: Promise<{ locale: string }> };

export default async function PaaAgroPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <PaaAgroHero />
      <PaaAgroOverview />
      <PaaAgroFigures />
      <PaaAgroWhatWeDo />
      <PaaAgroEcosystem />
      <PaaAgroConnected />
      <PaaAgroWebsiteCta />
      <PaaAgroExplore />
      <Footer />
    </main>
  );
}
