import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { SectorSlug } from "@/lib/sectors";
import { relatedImages, sectorHref, sectorMeta } from "@/lib/sectors";

type Props = { slug: SectorSlug };

export async function SectorRelated({ slug }: Props) {
  const t = await getTranslations(`sectors.${sectorMeta[slug].key}`);
  const shared = await getTranslations("sectors.shared");
  const related = sectorMeta[slug].related;

  return (
    <section className="bg-paa-bg">
      <div className="px-8 pb-8 pt-16 lg:px-24 lg:pb-8 lg:pt-20 xl:px-[120px]">
        <p className="text-[11px] font-medium tracking-[1.4px] text-paa-muted">
          {t("related.eyebrow")}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 px-8 pb-12 lg:grid-cols-2 lg:gap-6 lg:px-24 lg:pb-20 xl:px-[120px]">
        {related.map((rel) => {
          const meta = sectorMeta[rel];
          const index = String(meta.index).padStart(2, "0");
          return (
            <Link
              key={rel}
              href={sectorHref(rel)}
              className="relative flex h-[360px] flex-col justify-end gap-4 overflow-hidden p-8 text-paa-inverse lg:h-[520px]"
            >
              <Image
                src={relatedImages[rel]}
                alt=""
                fill
                className="object-cover"
                sizes="(min-width:1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-paa-ink/60" />
              <p className="relative z-10 text-[11px] font-medium tracking-[1.4px] text-paa-accent">
                {index}
              </p>
              <p className="relative z-10 text-[28px] font-light leading-tight lg:text-[36px]">
                {shared(`titles.${meta.key}`)}
              </p>
              <p className="relative z-10 text-[13px] font-medium tracking-[1.2px]">
                {t("related.cta")}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
