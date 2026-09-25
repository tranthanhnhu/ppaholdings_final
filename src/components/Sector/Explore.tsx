import { getTranslations } from "next-intl/server";
import { TextLink } from "@/components/UI/TextLink";
import type { SectorSlug } from "@/lib/sectors";
import { sectorMeta } from "@/lib/sectors";

type Props = { slug: SectorSlug };

export async function SectorExplore({ slug }: Props) {
  const t = await getTranslations(`sectors.${sectorMeta[slug].key}`);

  return (
    <section className="bg-paa-bg px-8 py-16 lg:px-24 xl:px-[120px] lg:py-20">
      <p className="mb-4 text-[11px] font-medium tracking-[1.4px] text-paa-muted">
        {t("explore.eyebrow")}
      </p>
      <h2 className="mb-8 max-w-[640px] text-[28px] font-light leading-9 text-paa-text lg:text-[40px] lg:leading-tight">
        {t("explore.headline")}
      </h2>
      <div className="flex flex-wrap gap-8">
        <TextLink href="/investment-approach" label={t("explore.approach")} />
        <TextLink href="/who-we-are" label={t("explore.about")} />
      </div>
    </section>
  );
}
