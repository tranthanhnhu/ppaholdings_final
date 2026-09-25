import { getTranslations } from "next-intl/server";
import { TextLink } from "@/components/UI/TextLink";

export async function Intro() {
  const t = await getTranslations("whoWeAre.intro");

  return (
    <section className="bg-paa-bg px-8 py-20 lg:flex lg:gap-20 lg:px-24 xl:px-[120px] lg:py-40">
      <div className="mb-8 flex flex-col gap-5 lg:mb-0 lg:w-[560px] lg:shrink-0">
        <p className="text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-muted">
          {t("eyebrow")}
        </p>
        <h2 className="text-[32px] font-light leading-10 tracking-[-0.4px] text-paa-text lg:text-[40px] lg:leading-[48px]">
          {t("headline")}
        </h2>
      </div>
      <div className="flex flex-col gap-5 lg:min-w-0 lg:flex-1">
        <p className="text-[18px] leading-[30px] text-paa-text">{t("p1")}</p>
        <p className="text-[16px] leading-[26px] text-paa-text">{t("p2")}</p>
        <p className="text-[16px] leading-[26px] text-paa-text">{t("p3")}</p>
        <p className="text-[16px] leading-[26px] text-paa-muted">{t("hq")}</p>
        <TextLink href="/our-business" label={t("cta")} />
      </div>
    </section>
  );
}
