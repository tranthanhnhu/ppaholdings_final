import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/Investment/Hero";
import { Philosophy } from "@/components/Investment/Philosophy";
import { Framework } from "@/components/Investment/Framework";
import { ThemesIntro } from "@/components/Investment/ThemesIntro";
import { Themes } from "@/components/Investment/Themes";
import { Connecting } from "@/components/Investment/Connecting";
import { ValueCreation } from "@/components/Investment/ValueCreation";
import { Ownership } from "@/components/Investment/Ownership";
import { Explore } from "@/components/Investment/Explore";
import { Footer } from "@/components/Footer/Footer";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function InvestmentApproachPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <Hero />
      <Philosophy />
      <Framework />
      <ThemesIntro />
      <Themes />
      <Connecting />
      <ValueCreation />
      <Ownership />
      <Explore />
      <Footer />
    </main>
  );
}
