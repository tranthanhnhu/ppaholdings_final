import { getTranslations } from "next-intl/server";
import { BusinessValueChainStages } from "@/components/Business/ValueChainStages";

type Stage = { index: string; title: string; companies: string[] };

export async function ValueChain() {
  const t = await getTranslations("business.valueChain");
  const stages = t.raw("stages") as Stage[];

  return (
    <section className="bg-paa-bg px-8 py-20 lg:px-24 lg:py-40 xl:px-[120px]">
      <div className="mb-12 flex max-w-[1320px] flex-col gap-8 lg:mb-20">
        <p className="text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-muted">
          {t("eyebrow")}
        </p>
        <h2 className="text-[32px] font-light leading-10 tracking-[-0.6px] text-paa-text lg:text-[56px] lg:leading-[64px] lg:tracking-[-0.84px]">
          {t("line1")}
          <br />
          {t("line2")}
        </h2>
        <p className="max-w-[720px] text-[18px] leading-[30px] text-paa-text">
          {t("lead")}
        </p>
      </div>

      <BusinessValueChainStages stages={stages} />

      <div className="mt-12 border-t border-paa-accent pt-8 lg:mt-16">
        <p className="mb-2 text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-accent">
          {t("reLabel")}
        </p>
        <p className="text-[16px] leading-[26px] text-paa-text">{t("reNote")}</p>
      </div>
    </section>
  );
}
