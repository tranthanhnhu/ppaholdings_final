import { SectorHero } from "@/components/Sector/Hero";
import { SectorOverview } from "@/components/Sector/Overview";
import { SectorActivities } from "@/components/Sector/Activities";
import { SectorValueChain } from "@/components/Sector/ValueChain";
import { SectorCompanies } from "@/components/Sector/Companies";
import { SectorPerspective } from "@/components/Sector/Perspective";
import { SectorRelated } from "@/components/Sector/Related";
import { SectorExplore } from "@/components/Sector/Explore";
import { Footer } from "@/components/Footer/Footer";
import type { SectorSlug } from "@/lib/sectors";

type Props = { slug: SectorSlug };

export function SectorPage({ slug }: Props) {
  return (
    <main>
      <SectorHero slug={slug} />
      <SectorOverview slug={slug} />
      <SectorActivities slug={slug} />
      <SectorValueChain slug={slug} />
      <SectorCompanies slug={slug} />
      <SectorPerspective slug={slug} />
      <SectorRelated slug={slug} />
      <SectorExplore slug={slug} />
      <Footer />
    </main>
  );
}
