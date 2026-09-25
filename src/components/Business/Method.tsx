import { getTranslations } from "next-intl/server";

export async function Method() {
  const t = await getTranslations("business.method");
  const items = t.raw("items") as Array<{ index: string; title: string; english: string; body: string }>;

  return (
    <section className="bg-paa-bg px-8 py-20 lg:px-24 xl:px-[120px] lg:py-40">
      <div className="mb-12 flex max-w-[1320px] flex-col gap-8 lg:mb-20">
        <p className="text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-muted">{t("eyebrow")}</p>
        <h2 className="text-[32px] font-light leading-10 tracking-[-0.4px] text-paa-text lg:text-[40px] lg:leading-[48px]">
          {t("line1")}<br />{t("line2")}
        </h2>
        <p className="max-w-[720px] text-[18px] leading-[30px] text-paa-text">{t("lead")}</p>
      </div>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-x-[200px] lg:gap-y-20">
        {items.map((item, i) => (
          <article key={item.index} className={`flex flex-col gap-6 ${i % 2 === 1 ? "lg:pt-[72px]" : ""}`}>
            <div className="flex items-center gap-4">
              <span className="text-[56px] font-light leading-[64px] tracking-[-0.84px] text-paa-accent">{item.index}</span>
              <div className="h-px w-[72px] bg-paa-accent" />
            </div>
            <h3 className="font-[family-name:var(--font-cormorant)] text-[32px] font-light leading-10 text-paa-text">{item.title}</h3>
            <p className="text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-muted">{item.english}</p>
            <p className="max-w-[560px] text-[16px] leading-[26px] text-paa-text">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
