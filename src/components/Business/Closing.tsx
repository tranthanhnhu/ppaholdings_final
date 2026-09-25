import { getTranslations } from "next-intl/server";

export async function Closing() {
  const t = await getTranslations("business.closing");

  return (
    <section className="bg-paa-ink px-8 py-20 text-paa-inverse lg:px-[120px] lg:py-[200px]">
      <h2 className="mb-12 max-w-[880px] text-[32px] font-light leading-10 tracking-[-0.6px] lg:mb-12 lg:text-[56px] lg:leading-[64px] lg:tracking-[-0.84px]">
        {t("line1")}
        <br />
        {t("line2a")}
        <span className="text-paa-accent">{t("line2accent")}</span>
        {t("line2b")}
      </h2>
      <p className="max-w-[600px] text-[18px] leading-[30px] opacity-70">{t("lead")}</p>
    </section>
  );
}
