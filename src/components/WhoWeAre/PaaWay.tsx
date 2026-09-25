import { getTranslations } from "next-intl/server";

export async function PaaWay() {
  const t = await getTranslations("whoWeAre.paaWay");

  return (
    <section className="bg-paa-ink px-8 py-20 text-center text-paa-inverse lg:px-[120px] lg:py-40">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-8 lg:gap-10">
        <p className="text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-accent">
          {t("eyebrow")}
        </p>
        <h2 className="text-[32px] font-light leading-10 tracking-[-0.6px] lg:text-[56px] lg:leading-[68px] lg:tracking-[-0.84px]">
          {t("line1")}
          <br />
          {t("line2")}
        </h2>
        <p className="max-w-[780px] text-[18px] leading-[30px]">{t("p1")}</p>
        <p className="max-w-[780px] text-[16px] leading-[26px]">{t("p2")}</p>
        <p className="max-w-[780px] text-[18px] font-medium leading-7 tracking-[-0.2px] lg:text-[22px] lg:leading-7">
          {t("values")}
        </p>
      </div>
    </section>
  );
}
