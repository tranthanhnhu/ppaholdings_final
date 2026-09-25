"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { TextLink } from "@/components/UI/TextLink";

type Company = {
  path: string;
  name: string;
  meta: string;
  sector: string;
  image: string;
  href: string;
};

export function Portfolio() {
  const t = useTranslations("business.portfolio");
  const filters = t.raw("filters") as Array<{ id: string; label: string }>;
  const companies = t.raw("companies") as Company[];
  const [active, setActive] = useState("all");

  const visible =
    active === "all" ? companies : companies.filter((c) => c.sector === active);

  return (
    <section className="bg-paa-bg px-8 pb-20 pt-10 lg:px-24 xl:px-[120px] lg:pb-40 lg:pt-20">
      <div className="mb-8 flex max-w-[780px] flex-col gap-4 lg:mb-12">
        <h2 className="text-[32px] font-light leading-10 tracking-[-0.4px] text-paa-text lg:text-[40px] lg:leading-[48px]">
          {t("headline")}
        </h2>
        <p className="text-[18px] leading-[30px] text-paa-text">{t("lead")}</p>
      </div>

      <div className="mb-8 flex flex-wrap gap-x-8 gap-y-3 lg:mb-12">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setActive(f.id)}
            className={`text-[14px] font-medium leading-5 ${
              active === f.id ? "text-paa-accent" : "text-paa-muted"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {visible.map((c) => (
          <article key={c.name} className="flex flex-col bg-white">
            <div className="relative h-[200px] w-full overflow-hidden">
              <Image src={c.image} alt="" fill className="object-cover" sizes="(min-width:1024px) 33vw, 100vw" />
            </div>
            <div className="flex flex-col gap-3 p-6 lg:gap-3 lg:p-8">
              <p className="text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-accent uppercase">{c.path}</p>
              <h3 className="text-[22px] font-medium leading-7 tracking-[-0.2px] text-paa-text">{c.name}</h3>
              <p className="text-[15px] leading-[24px] text-paa-muted lg:text-[16px] lg:leading-[26px]">{c.meta}</p>
              <div className="pt-1">
                <TextLink href={c.href} label={t("cta")} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
