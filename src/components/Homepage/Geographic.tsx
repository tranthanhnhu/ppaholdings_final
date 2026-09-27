import { getTranslations } from "next-intl/server";
import { RegionDiagram } from "@/components/Homepage/RegionDiagram";

export async function Geographic() {
  const t = await getTranslations("geographic");

  return (
    <section className="bg-paa-bg px-6 py-20 lg:flex lg:items-center lg:justify-between lg:gap-16 lg:px-24 xl:px-[120px] lg:py-40">
      <div className="mb-12 flex max-w-[520px] flex-col gap-6 lg:mb-0">
        <p className="text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-accent">
          {t("eyebrow")}
        </p>
        <h2 className="text-[36px] font-light leading-[44px] tracking-[-0.4px] text-paa-text lg:text-[40px] lg:leading-[48px]">
          {t("headline1")}
          <br />
          {t("headline2")}
        </h2>
        <p className="text-[18px] leading-[30px] text-paa-text">{t("lead")}</p>
      </div>

      <div className="flex flex-1 justify-center lg:justify-end">
        <RegionDiagram
          center={t("regions.center")}
          north={t("regions.north")}
          east={t("regions.east")}
          south={t("regions.south")}
          west={t("regions.west")}
          caption={t("caption")}
        />
      </div>
    </section>
  );
}
