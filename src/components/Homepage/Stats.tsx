import { getTranslations } from "next-intl/server";
import { StatsList } from "@/components/Homepage/StatsList";

export async function Stats() {
  const t = await getTranslations("stats");
  const items = t.raw("items") as Array<{
    value: string;
    unit: string;
    label: string;
  }>;

  return (
    <section className="bg-paa-bg px-6 py-20 lg:px-20 lg:py-40">
      <div className="mb-8 flex max-w-[720px] flex-col gap-4 lg:mb-8">
        <p className="text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-muted">
          {t("eyebrow")}
        </p>
        <h2 className="text-[40px] font-light leading-[48px] tracking-[-0.4px] text-paa-text">
          {t("headline")}
        </h2>
      </div>

      <StatsList items={items} />
    </section>
  );
}
