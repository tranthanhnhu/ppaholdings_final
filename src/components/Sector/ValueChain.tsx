import { getTranslations } from "next-intl/server";
import type { SectorSlug } from "@/lib/sectors";
import { sectorMeta } from "@/lib/sectors";
import { ValueChainStages } from "@/components/Sector/ValueChainStages";

type Stage = {
  title: string;
  companies: string[];
};

type Props = { slug: SectorSlug };

export async function SectorValueChain({ slug }: Props) {
  const t = await getTranslations(`sectors.${sectorMeta[slug].key}`);
  const shared = await getTranslations("sectors.shared");
  const stages = shared.raw("journey") as Stage[];
  const current = sectorMeta[slug].journeyIndex;

  return (
    <section className="bg-paa-bg px-8 py-20 lg:px-24 xl:px-[120px] lg:py-40">
      <div className="mb-12 flex max-w-[640px] flex-col gap-4 lg:mb-20">
        <p className="text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-muted">
          {t("valueChain.eyebrow")}
        </p>
        <h2 className="text-[32px] font-light leading-10 text-paa-text lg:text-[40px] lg:leading-tight">
          {t("valueChain.headline")}
        </h2>
      </div>

      <ValueChainStages stages={stages} current={current} />
    </section>
  );
}
