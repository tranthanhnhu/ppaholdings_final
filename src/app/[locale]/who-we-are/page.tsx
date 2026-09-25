import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/WhoWeAre/Hero";
import { Intro } from "@/components/WhoWeAre/Intro";
import { Roots } from "@/components/WhoWeAre/Roots";
import { Principles } from "@/components/WhoWeAre/Principles";
import { Journey } from "@/components/WhoWeAre/Journey";
import { Timeline } from "@/components/WhoWeAre/Timeline";
import { PaaWay } from "@/components/WhoWeAre/PaaWay";
import { Foundation } from "@/components/WhoWeAre/Foundation";
import { Explore } from "@/components/WhoWeAre/Explore";
import { Footer } from "@/components/Footer/Footer";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function WhoWeArePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <Hero />
      <Intro />
      <Roots />
      <Principles />
      <Journey />
      <Timeline />
      <PaaWay />
      <Foundation />
      <Explore />
      <Footer />
    </main>
  );
}
