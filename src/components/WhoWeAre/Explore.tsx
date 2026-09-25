import { getTranslations } from "next-intl/server";
import { TextLink } from "@/components/UI/TextLink";

export async function Explore() {
  const t = await getTranslations("whoWeAre.explore");
  const items = t.raw("items") as Array<{
    index: string;
    title: string;
    body: string;
    cta: string;
    href: string;
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
      </div>

      <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
        {items.map((item) => (
          <article key={item.index} className="flex flex-1 flex-col gap-4 pt-6">
            <div className="h-px w-10 bg-paa-accent" />
            <p className="text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-accent">
              {item.index}
            </p>
            <h3 className="text-[22px] font-medium leading-7 tracking-[-0.2px] text-paa-text">
              {item.title}
            </h3>
            <p className="max-w-[400px] text-[16px] leading-[26px] text-paa-muted">
              {item.body}
            </p>
            <TextLink href={item.href} label={item.cta} />
          </article>
        ))}
      </div>
    </section>
  );
}
