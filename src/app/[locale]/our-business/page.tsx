import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/Business/Hero";
import { Method } from "@/components/Business/Method";
import { ValueChain } from "@/components/Business/ValueChain";
import { Portfolio } from "@/components/Business/Portfolio";
import { Closing } from "@/components/Business/Closing";
import { Explore } from "@/components/Business/Explore";
import { Footer } from "@/components/Footer/Footer";

type Props = { params: Promise<{ locale: string }> };

export default async function OurBusinessPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <Hero />
      <Method />
      <ValueChain />
      <Portfolio />
      <Closing />
      <Explore />
      <Footer />
    </main>
  );
}
