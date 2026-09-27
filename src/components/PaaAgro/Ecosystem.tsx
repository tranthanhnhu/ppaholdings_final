import { getTranslations } from "next-intl/server";
import { EcosystemChain } from "@/components/PaaAgro/EcosystemChain";

type Stage = {
  index: string;
  title: string;
  companies: string[];
  current?: boolean;
  note?: string;
};

export async function PaaAgroEcosystem() {
  const t = await getTranslations("paaAgro.ecosystem");
  const stages = t.raw("stages") as Stage[];

  return (
    <section className="bg-paa-ink px-8 py-20 text-paa-inverse lg:px-24 lg:py-40 xl:px-[120px]">
      <div className="mb-12 flex max-w-[880px] flex-col gap-6 lg:mb-20">
        <p className="text-[11px] font-medium tracking-[1.4px] text-paa-accent">
          {t("eyebrow")}
        </p>
        <h2 className="text-[32px] font-light leading-10 tracking-[-0.4px] lg:text-[40px] lg:leading-[48px]">
          {t("headline")}
        </h2>
        <p className="max-w-[720px] text-[16px] leading-[26px] lg:text-[18px] lg:leading-[30px]">
          {t("lead")}
        </p>
      </div>

      <EcosystemChain stages={stages} />
    </section>
  );
}
