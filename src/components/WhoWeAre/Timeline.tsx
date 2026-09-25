import Image from "next/image";
import { getTranslations } from "next-intl/server";

export async function Timeline() {
  const t = await getTranslations("whoWeAre.timeline");
  const items = t.raw("items") as Array<{
    year?: string;
    title: string;
    body?: string;
  }>;

  return (
    <section className="bg-paa-bg px-8 py-20 lg:px-24 xl:px-[120px] lg:py-40">
      <div className="mb-12 flex max-w-[640px] flex-col gap-4 lg:mb-16">
        <p className="text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-muted">
          {t("eyebrow")}
        </p>
        <p className="text-[18px] leading-[30px] text-paa-text">{t("lead")}</p>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-x-20 lg:gap-y-14">
        {items.map((item, i) => (
          <article key={i} className="flex flex-col gap-4">
            {item.year ? (
              <p className="text-[56px] font-light leading-[64px] tracking-[-0.84px] text-paa-text">
                {item.year}
              </p>
            ) : null}
            <div className="flex w-full items-center">
              <Image
                src="/icons/timeline-dot.svg"
                alt=""
                width={8}
                height={8}
                className="shrink-0"
              />
              <div className="h-px flex-1 bg-paa-accent" />
            </div>
            <h3 className="text-[22px] font-medium leading-7 tracking-[-0.2px] text-paa-text">
              {item.title}
            </h3>
            {item.body ? (
              <p className="text-[16px] leading-[26px] text-paa-text">
                {item.body}
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
