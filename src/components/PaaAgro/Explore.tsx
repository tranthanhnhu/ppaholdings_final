import { getTranslations } from "next-intl/server";
import { TextLink } from "@/components/UI/TextLink";

export async function PaaAgroExplore() {
  const t = await getTranslations("paaAgro.explore");
  const items = t.raw("items") as Array<{
    index: string;
    title: string;
    body: string;
    cta: string;
    href: string;
  }>;

  return (
    <section className="bg-paa-bg px-8 py-20 lg:px-24 xl:px-[120px] lg:py-40">
      <p className="mb-8 text-[11px] font-medium tracking-[1.4px] text-paa-muted">
        {t("eyebrow")}
      </p>
      <h2 className="mb-12 max-w-[720px] text-[32px] font-light leading-10 tracking-[-0.4px] text-paa-text lg:mb-20 lg:text-[40px] lg:leading-[48px]">
        {t("headline")}
      </h2>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {items.map((item) => (
          <article
            key={item.index}
            className="flex flex-col gap-4 border-t border-paa-accent pt-6"
          >
            <p className="text-[11px] font-medium tracking-[1.4px] text-paa-accent">
              {item.index}
            </p>
            <h3 className="text-[22px] font-medium tracking-[-0.2px] text-paa-text">
              {item.title}
            </h3>
            <p className="text-[16px] leading-[26px] text-paa-muted">{item.body}</p>
            <TextLink href={item.href} label={item.cta} />
          </article>
        ))}
      </div>
    </section>
  );
}
