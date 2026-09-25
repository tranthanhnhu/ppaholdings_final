import { getTranslations } from "next-intl/server";

export async function ValueCreation() {
  const t = await getTranslations("investment.valueCreation");
  const steps = t.raw("steps") as Array<{
    index: string;
    title: string;
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

      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-4">
        {steps.map((step, i) => (
          <div key={step.index} className="contents">
            {i > 0 && (
              <span
                aria-hidden
                className="hidden shrink-0 text-[22px] font-light text-paa-accent lg:inline"
              >
                →
              </span>
            )}
            <article className="flex flex-1 flex-col gap-3">
              <p className="text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-accent">
                {step.index}
              </p>
              <h3 className="text-[22px] font-medium leading-7 tracking-[-0.2px] text-paa-text">
                {step.title}
              </h3>
              <p className="text-[16px] leading-[26px] text-paa-text">
                {step.body}
              </p>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
