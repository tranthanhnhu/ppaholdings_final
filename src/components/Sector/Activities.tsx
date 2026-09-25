"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import type { SectorSlug } from "@/lib/sectors";
import { sectorMeta } from "@/lib/sectors";

type Activity = { title: string; body: string };

type Props = { slug: SectorSlug };

export function SectorActivities({ slug }: Props) {
  const key = sectorMeta[slug].key;
  const t = useTranslations(`sectors.${key}.activities`);
  const items = t.raw("items") as Activity[];
  const [active, setActive] = useState(0);

  return (
    <section className="bg-paa-bg px-8 py-16 lg:flex lg:items-center lg:gap-16 lg:px-24 xl:px-[120px] lg:py-20">
      <div className="relative mb-10 h-[320px] w-full overflow-hidden lg:mb-0 lg:h-[560px] lg:flex-1">
        <Image
          src={sectorMeta[slug].images.activity}
          alt=""
          fill
          className="object-cover"
          sizes="(min-width:1024px) 60vw, 100vw"
        />
      </div>
      <div className="w-full lg:w-[400px] lg:shrink-0">
        <p className="mb-2 text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-muted">
          {t("eyebrow")}
        </p>
        {items.map((item, i) => {
          const selected = i === active;
          return (
            <button
              key={item.title}
              type="button"
              onClick={() => setActive(i)}
              className={`flex w-full flex-col items-start gap-2 border-b border-paa-accent py-4 text-left ${
                selected ? "" : "text-paa-muted"
              }`}
            >
              <span
                className={`text-[11px] font-medium tracking-[1.4px] ${
                  selected ? "text-paa-accent" : ""
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={`text-[24px] font-light leading-8 lg:text-[32px] lg:leading-10 ${
                  selected ? "text-paa-text" : ""
                }`}
              >
                {item.title}
              </span>
              <span
                className={`text-[16px] leading-[26px] ${
                  selected ? "text-paa-muted" : ""
                }`}
              >
                {item.body}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
