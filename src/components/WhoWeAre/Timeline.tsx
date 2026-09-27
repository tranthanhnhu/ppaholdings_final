import { getTranslations } from "next-intl/server";
import { TimelineGrid } from "@/components/WhoWeAre/TimelineGrid";

export async function Timeline() {
  const t = await getTranslations("whoWeAre.timeline");
  const items = t.raw("items") as Array<{
    year?: string;
    title: string;
    body?: string;
  }>;

  return (
    <section className="bg-paa-bg px-8 py-20 lg:px-24 xl:px-[120px] lg:py-40">
      <div className="mb-12 flex max-w-[640px] flex-col gap-4 lg:mb-16">
        <p className="text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-muted">
          {t("eyebrow")}
        </p>
        <p className="text-[18px] leading-[30px] text-paa-text">{t("lead")}</p>
      </div>

      <TimelineGrid items={items} />
    </section>
  );
}
