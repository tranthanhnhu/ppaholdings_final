import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/Contact/Hero";
import { Directory } from "@/components/Contact/Directory";
import { Location } from "@/components/Contact/Location";
import { Footer } from "@/components/Footer/Footer";

type Props = { params: Promise<{ locale: string }> };

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <Hero />
      <Directory />
      <Location />
      <Footer />
    </main>
  );
}
