import { getTranslations } from "next-intl/server";

export async function ThemesIntro() {
  const t = await getTranslations("investment.themesIntro");

  return (
    <section className="bg-paa-bg px-8 pb-10 pt-20 text-center lg:px-24 xl:px-[120px] lg:pb-20 lg:pt-40">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center gap-5">
        <p className="text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-muted">
          {t("eyebrow")}
        </p>
        <h2 className="max-w-[1320px] text-[32px] font-light leading-10 tracking-[-0.4px] text-paa-text lg:text-[40px] lg:leading-[48px]">
          {t("line1")}
          <br />
          {t("line2")}
        </h2>
        <p className="max-w-[780px] text-[18px] leading-[30px] text-paa-text">
          {t("lead")}
        </p>
      </div>
    </section>
  );
}
