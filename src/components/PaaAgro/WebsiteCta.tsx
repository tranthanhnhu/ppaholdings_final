import { getTranslations } from "next-intl/server";

export async function PaaAgroWebsiteCta() {
  const t = await getTranslations("paaAgro.website");

  return (
    <section className="bg-paa-bg px-8 py-20 lg:px-24 xl:px-[120px] lg:py-40">
      <p className="mb-8 text-[11px] font-medium tracking-[1.4px] text-paa-muted">
        {t("eyebrow")}
      </p>
      <h2 className="mb-8 text-[32px] font-light leading-10 tracking-[-0.4px] text-paa-text lg:text-[40px] lg:leading-[48px]">
        {t("headline")}
      </h2>
      <p className="mb-8 max-w-[640px] text-[16px] leading-[26px] text-paa-text lg:text-[18px] lg:leading-[30px]">
        {t("lead")}
      </p>
      <a
        href={t("url")}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[13px] font-medium tracking-[1.2px] text-paa-accent whitespace-pre"
      >
        {t("cta")}
      </a>
    </section>
  );
}
