import { getTranslations } from "next-intl/server";

export async function PaaAgroOverview() {
  const t = await getTranslations("paaAgro.overview");
  const facts = t.raw("facts") as Array<{ label: string; value: string }>;

  return (
    <section className="bg-paa-bg px-8 py-20 lg:flex lg:gap-20 lg:px-24 xl:px-[120px] lg:py-40">
      <div className="mb-12 flex max-w-[800px] flex-col gap-8 lg:mb-0 lg:w-[800px] lg:shrink-0">
        <p className="text-[11px] font-medium tracking-[1.4px] text-paa-muted">
          {t("eyebrow")}
        </p>
        <h2 className="text-[32px] font-light leading-10 tracking-[-0.4px] text-paa-text lg:text-[40px] lg:leading-[48px]">
          {t("headline")}
        </h2>
        <p className="text-[16px] leading-[26px] text-paa-text">{t("p1")}</p>
        <p className="text-[16px] leading-[26px] text-paa-text">{t("p2")}</p>
      </div>
      <div className="w-full lg:flex-1">
        <p className="mb-6 text-[11px] font-medium tracking-[1.4px] text-paa-muted">
          {t("factsEyebrow")}
        </p>
        {facts.map((f) => (
          <div
            key={f.label}
            className="flex flex-col gap-2 border-b border-[#d8d8dd] py-4"
          >
            <p className="text-[11px] font-medium tracking-[1.4px] text-paa-accent">
              {f.label}
            </p>
            <p className="text-[16px] leading-[26px] text-paa-text">{f.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
