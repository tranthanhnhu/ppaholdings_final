import { getTranslations } from "next-intl/server";
import type { SectorSlug } from "@/lib/sectors";
import { sectorMeta } from "@/lib/sectors";

type Stage = {
  title: string;
  companies: string[];
};

type Props = { slug: SectorSlug };

export async function SectorValueChain({ slug }: Props) {
  const t = await getTranslations(`sectors.${sectorMeta[slug].key}`);
  const shared = await getTranslations("sectors.shared");
  const stages = shared.raw("journey") as Stage[];
  const current = sectorMeta[slug].journeyIndex;

  return (
    <section className="bg-paa-bg px-8 py-20 lg:px-24 xl:px-[120px] lg:py-40">
      <div className="mb-12 flex max-w-[640px] flex-col gap-4 lg:mb-20">
        <p className="text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-muted">
          {t("valueChain.eyebrow")}
        </p>
        <h2 className="text-[32px] font-light leading-10 text-paa-text lg:text-[40px] lg:leading-tight">
          {t("valueChain.headline")}
        </h2>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-2 lg:gap-0">
        {stages.map((stage, i) => {
          const active = i === current;
          const color = active ? "text-paa-accent" : "text-paa-muted";
          return (
            <div
              key={stage.title}
              className="flex min-w-[180px] flex-1 flex-col gap-3 lg:min-w-0"
            >
              <div className="flex items-center py-2">
                {i > 0 && (
                  <div
                    className={`h-px flex-1 ${
                      active ? "bg-paa-accent" : "bg-paa-muted"
                    }`}
                  />
                )}
                <span
                  className={`size-2 shrink-0 rounded-full ${
                    active ? "bg-paa-accent" : "bg-paa-muted"
                  }`}
                />
                {i < stages.length - 1 && (
                  <div
                    className={`h-px flex-1 ${
                      active ? "bg-paa-accent" : "bg-paa-muted"
                    }`}
                  />
                )}
              </div>
              <p className={`text-[11px] font-medium tracking-[1.4px] ${color}`}>
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className={`text-[14px] font-medium ${color}`}>{stage.title}</p>
              <div className="text-[12px] leading-normal text-paa-muted">
                {stage.companies.map((c) => (
                  <p key={c}>{c}</p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
