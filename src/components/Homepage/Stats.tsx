import { getTranslations } from "next-intl/server";

export async function Stats() {
  const t = await getTranslations("stats");
  const items = t.raw("items") as Array<{
    value: string;
    unit: string;
    label: string;
  }>;

  return (
    <section className="bg-paa-bg px-6 py-20 lg:px-20 lg:py-40">
      <div className="mb-10 flex max-w-[720px] flex-col gap-4 lg:mb-20">
        <p className="text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-muted">
          {t("eyebrow")}
        </p>
        <h2 className="text-[40px] font-light leading-[48px] tracking-[-0.4px] text-paa-text">
          {t("headline")}
        </h2>
      </div>

      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-0 lg:pt-8">
        {items.map((item, i) => (
          <div key={item.label} className="contents lg:contents">
            {i > 0 && (
              <div className="hidden w-px self-stretch bg-paa-accent lg:block" />
            )}
            <div
              className={`flex flex-1 flex-col gap-3 border-t border-paa-accent/40 pt-6 lg:border-0 lg:pt-2 ${
                i === 0
                  ? "lg:pr-8"
                  : i === items.length - 1
                    ? "lg:pl-8"
                    : "lg:px-8"
              }`}
            >
              <div className="flex flex-col">
                <p className="text-[48px] font-light leading-[56px] text-paa-text lg:text-[64px] lg:leading-[72px]">
                  {item.value}
                </p>
                {item.unit ? (
                  <p className="text-[24px] font-light leading-[32px] text-paa-accent lg:text-[32px] lg:leading-[40px]">
                    {item.unit}
                  </p>
                ) : null}
              </div>
              <p className="text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-muted">
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
