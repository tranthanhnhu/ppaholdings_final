import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { TextLink } from "@/components/UI/TextLink";

export async function PaaAgroConnected() {
  const t = await getTranslations("paaAgro.connected");
  const cards = t.raw("cards") as Array<{
    path: string;
    name: string;
    meta: string;
    href: string;
    image: string;
  }>;

  return (
    <section className="bg-paa-bg px-8 py-20 lg:px-24 xl:px-[120px] lg:py-40">
      <div className="mb-12 flex max-w-[880px] flex-col gap-8 lg:mb-20">
        <p className="text-[11px] font-medium tracking-[1.4px] text-paa-muted">
          {t("eyebrow")}
        </p>
        <h2 className="text-[32px] font-light leading-10 tracking-[-0.4px] text-paa-text lg:text-[40px] lg:leading-[48px]">
          {t("headline")}
        </h2>
        <p className="max-w-[720px] text-[16px] leading-[26px] text-paa-text lg:text-[18px] lg:leading-[30px]">
          {t("lead")}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c) => (
          <article key={c.name} className="flex flex-col bg-white">
            <div className="relative h-[200px] w-full overflow-hidden">
              <Image
                src={c.image}
                alt=""
                fill
                className="object-cover"
                sizes="(min-width:1024px) 33vw, 100vw"
              />
            </div>
            <div className="flex flex-col gap-3 p-6 lg:p-8">
              <p className="text-[11px] font-medium tracking-[1.4px] text-paa-accent uppercase">
                {c.path}
              </p>
              <h3 className="text-[22px] font-medium leading-7 tracking-[-0.2px] text-paa-text">
                {c.name}
              </h3>
              <p className="text-[15px] leading-[24px] text-paa-muted lg:text-[16px] lg:leading-[26px]">
                {c.meta}
              </p>
              <div className="pt-1">
                <TextLink href={c.href} label={t("cta")} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
