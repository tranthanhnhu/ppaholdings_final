import Image from "next/image";
import { getTranslations } from "next-intl/server";
import type { SectorSlug } from "@/lib/sectors";
import { sectorMeta } from "@/lib/sectors";

type Props = { slug: SectorSlug };

export async function SectorPerspective({ slug }: Props) {
  const t = await getTranslations(`sectors.${sectorMeta[slug].key}`);

  return (
    <section className="relative flex min-h-[520px] flex-col justify-between overflow-hidden p-8 text-paa-inverse lg:min-h-[720px] lg:px-24 lg:py-20 xl:px-[120px]">
      <Image
        src={sectorMeta[slug].images.perspective}
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-paa-ink/70" />
      <p className="relative z-10 text-[11px] font-medium tracking-[1.4px] text-paa-accent">
        {t("perspective.eyebrow")}
      </p>
      <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-[120px]">
        <p className="max-w-[800px] text-[32px] font-light leading-10 tracking-[-0.4px] lg:text-[56px] lg:leading-[64px] lg:tracking-[-0.84px]">
          {t("perspective.headline")}
        </p>
        <p className="max-w-[360px] text-[16px] leading-[26px]">
          {t("perspective.body")}
        </p>
      </div>
    </section>
  );
}
