import Image from "next/image";
import { getTranslations } from "next-intl/server";

export async function Responsible() {
  const t = await getTranslations("responsible");
  const principles = t.raw("principles") as Array<{
    index: string;
    title: string;
  }>;

  return (
    <section className="relative overflow-hidden px-6 py-20 lg:px-[60px] lg:py-40">
      <Image
        src="/images/homepage/growth.jpeg"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[rgba(9,23,37,0.48)]" />

      <div className="relative z-10 flex flex-col gap-12">
        <div className="flex max-w-[720px] flex-col gap-6">
          <p className="text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-accent">
            {t("eyebrow")}
          </p>
          <h2 className="text-[40px] font-light leading-[48px] tracking-[-0.4px] text-paa-inverse">
            {t("headline")}
          </h2>
          <p className="text-[18px] leading-[30px] text-paa-inverse">{t("lead")}</p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          {principles.map((p) => (
            <article
              key={p.index}
              className="flex flex-1 flex-col gap-3 border-t border-paa-accent pt-6"
            >
              <p className="text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-accent">
                {p.index}
              </p>
              <p className="text-[22px] font-medium leading-7 tracking-[-0.2px] text-paa-inverse">
                {p.title}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
