import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { SectorPage } from "@/components/Sector/SectorPage";
import { isSectorSlug, SECTOR_SLUGS } from "@/lib/sectors";

type Props = { params: Promise<{ locale: string; sector: string }> };

export function generateStaticParams() {
  return SECTOR_SLUGS.map((sector) => ({ sector }));
}

export default async function OurBusinessSectorPage({ params }: Props) {
  const { locale, sector } = await params;
  if (!isSectorSlug(sector)) notFound();
  setRequestLocale(locale);
  return <SectorPage slug={sector} />;
}
