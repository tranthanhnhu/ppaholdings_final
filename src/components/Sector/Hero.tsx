import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Header } from "@/components/Header/Header";
import type { SectorSlug } from "@/lib/sectors";
import { sectorMeta } from "@/lib/sectors";

type Props = { slug: SectorSlug };

export async function SectorHero({ slug }: Props) {
  const t = await getTranslations(`sectors.${sectorMeta[slug].key}`);
  const meta = sectorMeta[slug];
  const index = String(meta.index).padStart(2, "0");

  return (
    <section className="relative flex min-h-[560px] flex-col overflow-hidden lg:min-h-[760px]">
      <Image
        src={meta.images.hero}
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-paa-ink/55" />
      <div className="relative z-10 flex min-h-[560px] flex-col lg:min-h-[760px]">
        <Header logoSize={40} />
        {/* Raised so title is visible on first viewport */}
        <div className="mt-[18%] flex max-w-[900px] flex-col gap-4 px-8 pb-12 text-paa-inverse lg:mt-[16%] lg:gap-5 lg:px-24 lg:pb-16 xl:px-[120px]">
          <p className="text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-accent whitespace-pre">
            {t("hero.eyebrow", { index })}
          </p>
          <h1 className="max-w-[920px] text-[36px] font-light leading-[1.1] text-paa-inverse lg:text-[64px] lg:leading-[1.05] xl:text-[72px]">
            {t("hero.title")}
          </h1>
          <p className="max-w-[520px] text-[16px] leading-[26px] lg:text-[18px] lg:leading-[30px]">
            {t("hero.lead")}
          </p>
          <p className="pt-1 text-[11px] font-medium tracking-[1.4px] opacity-80">
            {t("hero.scroll")}
          </p>
        </div>
      </div>
    </section>
  );
}
