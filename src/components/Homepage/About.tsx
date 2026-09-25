import { getTranslations } from "next-intl/server";

export async function About() {
  const t = await getTranslations("about");

  return (
    <section
      id="about"
      className="bg-paa-bg px-6 py-20 lg:flex lg:gap-20 lg:px-20 lg:py-40"
    >
      <div className="mb-7 flex flex-col gap-5 lg:mb-0 lg:w-[600px] lg:shrink-0 lg:gap-5">
        <p className="text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-muted">
          {t("eyebrow")}
        </p>
        <h2 className="max-w-[560px] text-[40px] font-light leading-[48px] tracking-[-0.4px] text-paa-text">
          {t("headline")}
        </h2>
      </div>
      <div className="flex flex-col gap-6 lg:w-[600px]">
        <p className="text-[16px] leading-[26px] text-paa-text lg:text-[18px] lg:leading-[30px]">
          {t("p1")}
        </p>
        <p className="text-[16px] leading-[26px] text-paa-text lg:text-paa-muted">
          {t("p2")}
        </p>
        <p className="text-[16px] leading-[26px] text-paa-text lg:text-paa-muted">
          {t("p3")}
        </p>
        <p className="text-[16px] leading-[26px] text-paa-muted">{t("hq")}</p>
      </div>
    </section>
  );
}
