import { getTranslations } from "next-intl/server";
import { PrinciplesList } from "@/components/WhoWeAre/PrinciplesList";

export async function Principles() {
  const t = await getTranslations("whoWeAre.principles");
  const items = t.raw("items") as Array<{
    index: string;
    title: string;
    english: string;
    body: string;
  }>;

  return (
    <section className="bg-paa-bg px-8 py-20 lg:px-24 xl:px-[120px] lg:py-40">
      <div className="mb-12 flex max-w-[720px] flex-col gap-5 lg:mb-20">
        <p className="text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-muted">
          {t("eyebrow")}
        </p>
        <h2 className="text-[32px] font-light leading-10 tracking-[-0.4px] text-paa-text lg:text-[40px] lg:leading-[48px]">
          {t("headline")}
        </h2>
        <p className="text-[18px] leading-[30px] text-paa-text">{t("lead")}</p>
      </div>

      <PrinciplesList items={items} />
    </section>
  );
}
