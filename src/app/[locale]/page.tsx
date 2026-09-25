import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/Homepage/Hero";
import { About } from "@/components/Homepage/About";
import { Stats } from "@/components/Homepage/Stats";
import { Approach } from "@/components/Homepage/Approach";
import { Businesses } from "@/components/Homepage/Businesses";
import { Ecosystem } from "@/components/Homepage/Ecosystem";
import { Geographic } from "@/components/Homepage/Geographic";
import { Responsible } from "@/components/Homepage/Responsible";
import { Explore } from "@/components/Homepage/Explore";
import { Footer } from "@/components/Footer/Footer";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <Hero />
      <About />
      <Stats />
      <Approach />
      <Businesses />
      <Ecosystem />
      <Geographic />
      <Responsible />
      <Explore />
      <Footer />
    </main>
  );
}
