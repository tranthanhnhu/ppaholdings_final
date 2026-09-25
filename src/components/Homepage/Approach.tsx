import { getTranslations } from "next-intl/server";

export async function Approach() {
  const t = await getTranslations("approach");
  const principles = t.raw("principles") as Array<{
    index: string;
    title: string;
    body: string;
  }>;

  return (
    <section
      id="approach"
      className="bg-paa-bg px-6 pb-20 pt-10 lg:px-20 lg:pb-40 lg:pt-20"
    >
      <div className="mb-12 flex max-w-[720px] flex-col gap-4 lg:mb-16">
        <p className="text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-muted">
          {t("eyebrow")}
        </p>
        <h2 className="text-[40px] font-light leading-[48px] tracking-[-0.4px] text-paa-text">
          {t("headline")}
        </h2>
        <p className="text-[18px] font-normal leading-[30px] text-paa-muted">
          {t("lead")}
        </p>
      </div>

      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-6">
        {principles.map((p, i) => (
          <div key={p.index} className="contents">
            {i > 0 && (
              <span
                aria-hidden
                className="hidden shrink-0 text-[22px] font-light text-paa-accent lg:inline"
              >
                →
              </span>
            )}
            <article className="flex flex-1 flex-col gap-4">
              <p className="text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-accent">
                {p.index}
              </p>
              <h3 className="text-[22px] font-medium leading-7 tracking-[-0.2px] text-paa-text">
                {p.title}
              </h3>
              <p className="max-w-[360px] text-[16px] leading-[26px] text-paa-muted">
                {p.body}
              </p>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
