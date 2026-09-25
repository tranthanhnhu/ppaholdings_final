import { getTranslations } from "next-intl/server";

export async function Ecosystem() {
  const t = await getTranslations("ecosystem");
  const steps = t.raw("steps") as Array<{ index: string; title: string }>;

  return (
    <section className="bg-paa-ink px-6 py-20 text-paa-inverse lg:px-[60px] lg:py-40">
      <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
        <div className="flex max-w-[560px] flex-col gap-6">
          <p className="text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-accent">
            {t("eyebrow")}
          </p>
          <h2 className="text-[40px] font-light leading-[48px] tracking-[-0.4px]">
            {t("headline1")}
            <br />
            {t("headline2")}
          </h2>
          <p className="text-[18px] leading-[30px]">{t("lead")}</p>
        </div>

        <ol className="flex flex-1 flex-col">
          {steps.map((step, i) => (
            <li key={step.index} className="flex flex-col">
              <div className="flex items-start gap-4">
                <span className="shrink-0 text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-accent">
                  {step.index}
                </span>
                <span className="text-[22px] font-medium leading-7 tracking-[-0.2px]">
                  {step.title}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className="ml-[5px] my-2 h-8 w-px bg-paa-accent" />
              )}
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-16 border-t border-paa-accent pt-8 lg:mt-20">
        <p className="mb-3 text-[13px] font-medium leading-[18px] tracking-[1.2px] text-paa-accent">
          {t("reLabel")}
        </p>
        <p className="max-w-[720px] text-[16px] leading-[26px]">{t("reNote")}</p>
      </div>
    </section>
  );
}
