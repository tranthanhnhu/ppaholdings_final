import { getTranslations } from "next-intl/server";

export async function Ownership() {
  const t = await getTranslations("investment.ownership");
  const pillars = t.raw("pillars") as Array<{
    index: string;
    title: string;
    body: string;
  }>;

  return (
    <section className="bg-paa-bg px-8 py-20 lg:px-24 xl:px-[120px] lg:py-40">
      <div className="mb-12 flex max-w-[860px] flex-col gap-5 lg:mb-16">
        <p className="text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-muted">
          {t("eyebrow")}
        </p>
        <h2 className="text-[32px] font-light leading-10 tracking-[-0.6px] text-paa-text lg:text-[48px] lg:leading-[58px] lg:tracking-[-0.72px]">
          {t("line1")}
          <br />
          {t("line2")}
        </h2>
        <p className="text-[18px] leading-[30px] text-paa-text">{t("lead")}</p>
      </div>

      <div className="mb-12 flex flex-col gap-10 lg:mb-16 lg:flex-row lg:gap-12">
        {pillars.map((p) => (
          <article key={p.index} className="flex flex-1 flex-col gap-4">
            <p className="text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-accent">
              {p.index}
            </p>
            <h3 className="text-[22px] font-medium leading-7 tracking-[-0.2px] text-paa-text">
              {p.title}
            </h3>
            <p className="text-[16px] leading-[26px] text-paa-muted">{p.body}</p>
          </article>
        ))}
      </div>

      <div className="max-w-[1320px] text-[18px] leading-[30px] text-paa-text">
        <p>{t("closing1")}</p>
        <p>{t("closing2")}</p>
      </div>
    </section>
  );
}
