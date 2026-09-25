import { getTranslations } from "next-intl/server";
import type { SectorSlug } from "@/lib/sectors";
import { sectorMeta } from "@/lib/sectors";

type Props = { slug: SectorSlug };

export async function SectorOverview({ slug }: Props) {
  const t = await getTranslations(`sectors.${sectorMeta[slug].key}`);
  const paragraphs = t.raw("overview.paragraphs") as string[];

  return (
    <section className="bg-paa-bg px-8 py-20 lg:flex lg:gap-[120px] lg:px-24 xl:px-[120px] lg:py-40">
      <div className="mb-10 flex max-w-[640px] flex-col gap-6 lg:mb-0 lg:w-[640px] lg:shrink-0">
        <p className="text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-muted">
          {t("overview.eyebrow")}
        </p>
        <h2 className="text-[32px] font-light leading-10 text-paa-text lg:text-[48px] lg:leading-[1.15]">
          {t("overview.headline")}
        </h2>
      </div>
      <div className="flex max-w-[440px] flex-col gap-6 pt-0 text-[16px] leading-[26px] text-paa-text lg:pt-12">
        {paragraphs.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
      </div>
    </section>
  );
}
