import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { TextLink } from "@/components/UI/TextLink";

export async function Foundation() {
  const t = await getTranslations("whoWeAre.foundation");

  return (
    <section
      id="foundation"
      className="bg-paa-ink px-8 py-12 text-paa-inverse lg:px-24 lg:py-20 xl:px-[120px]"
    >
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16 xl:gap-20">
        <div className="relative h-[280px] w-full shrink-0 overflow-hidden lg:h-[560px] lg:w-1/2">
          <Image
            src="/images/who-we-are/foundation.png"
            alt=""
            fill
            className="object-cover"
            sizes="(min-width:1024px) 40vw, 100vw"
          />
        </div>
        <div className="flex flex-col gap-6 lg:w-1/2 lg:py-8">
          <p className="text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-accent">
            {t("eyebrow")}
          </p>
          <h2 className="text-[32px] font-light leading-10 tracking-[-0.4px] lg:max-w-[560px] lg:text-[40px] lg:leading-[48px]">
            {t("line1")}
            <br />
            {t("line2")}
          </h2>
          <p className="max-w-[560px] text-[18px] leading-[30px]">{t("p1")}</p>
          <p className="max-w-[560px] text-[16px] leading-[26px]">{t("p2")}</p>
          <TextLink href="#foundation" label={t("cta")} tone="light" />
        </div>
      </div>
    </section>
  );
}
