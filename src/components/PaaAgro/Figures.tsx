import { getTranslations } from "next-intl/server";

export async function PaaAgroFigures() {
  const t = await getTranslations("paaAgro.figures");
  const items = t.raw("items") as Array<{ value: string; label: string }>;

  return (
    <section className="bg-paa-bg px-8 py-16 lg:flex lg:justify-between lg:px-24 xl:px-[120px] lg:py-20">
      {items.map((item) => (
        <div key={item.label} className="mb-10 flex flex-col gap-3 last:mb-0 lg:mb-0 lg:flex-1">
          <p className="text-[40px] font-light leading-none tracking-[-0.84px] text-paa-text lg:text-[56px] lg:leading-[64px]">
            {item.value}
          </p>
          <p className="text-[11px] font-medium tracking-[1.4px] text-paa-muted">
            {item.label}
          </p>
        </div>
      ))}
    </section>
  );
}
