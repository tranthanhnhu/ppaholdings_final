import { getTranslations } from "next-intl/server";

export async function Framework() {
  const t = await getTranslations("investment.framework");
  const factors = t.raw("factors") as Array<{
    index: string;
    title: string;
    body: string;
  }>;

  return (
    <section className="bg-paa-bg px-8 pb-20 pt-10 lg:px-24 xl:px-[120px] lg:pb-40 lg:pt-10">
      <div className="mb-12 flex flex-col gap-10 lg:mb-16 lg:flex-row lg:gap-12">
        {factors.map((f) => (
          <article key={f.index} className="flex flex-1 flex-col gap-4">
            <p className="text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-accent">
              {f.index}
            </p>
            <h3 className="text-[22px] font-medium leading-7 tracking-[-0.2px] text-paa-text">
              {f.title}
            </h3>
            <p className="max-w-[408px] text-[16px] leading-[26px] text-paa-muted">
              {f.body}
            </p>
          </article>
        ))}
      </div>
      <div className="text-center text-[28px] font-light leading-9 tracking-[-0.4px] text-paa-text lg:text-[40px] lg:leading-[48px]">
        <p>{t("closing1")}</p>
        <p>{t("closing2")}</p>
      </div>
    </section>
  );
}
