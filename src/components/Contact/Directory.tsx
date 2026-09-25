import { getTranslations } from "next-intl/server";

export async function Directory() {
  const t = await getTranslations("contact");
  const items = t.raw("items") as Array<{ index: string; label: string; lines: string[] }>;

  return (
    <section className="bg-paa-bg px-8 pb-10 pt-16 lg:px-24 xl:px-[120px] lg:pb-10 lg:pt-32">
      <div className="mb-10 flex max-w-[640px] flex-col gap-8 lg:mb-0">
        <p className="text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-muted">{t("intro.eyebrow")}</p>
        <h2 className="text-[32px] font-light leading-10 tracking-[-0.4px] text-paa-text lg:text-[40px] lg:leading-[48px]">{t("intro.headline")}</h2>
        <p className="text-[18px] leading-[30px] text-paa-text">{t("intro.lead")}</p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:mt-20 lg:grid-cols-2 lg:gap-x-[72px] lg:gap-y-8">
        {items.map((item) => (
          <article key={item.index} className="flex flex-col gap-3 border-b border-[#d8d8dd] pb-6">
            <p className="text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-accent">{item.index}</p>
            <p className="text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-accent">{item.label}</p>
            {item.lines.map((line) => (
              <p key={line} className="text-[18px] leading-[30px] text-paa-text">{line}</p>
            ))}
          </article>
        ))}
      </div>
    </section>
  );
}
