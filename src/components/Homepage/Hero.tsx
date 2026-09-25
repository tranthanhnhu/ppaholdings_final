import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Header } from "@/components/Header/Header";
import { TextLink } from "@/components/UI/TextLink";

export async function Hero() {
  const t = await getTranslations("hero");

  return (
    <section className="relative flex h-[640px] flex-col overflow-hidden lg:h-[900px]">
      <Image
        src="/images/homepage/hero.png"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[rgba(9,23,37,0.4)] lg:bg-[rgba(9,23,37,0.38)]" />

      <div className="relative z-10 flex h-full flex-col pb-12 lg:pb-0">
        <Header />

        <div className="mx-auto hidden w-full max-w-[1440px] flex-1 flex-col items-center justify-center gap-5 overflow-hidden px-24 pb-20 text-center xl:px-[120px] lg:flex">
          <p className="text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-inverse">
            {t("eyebrow")}
          </p>
          <h1 className="max-w-[920px] text-[56px] font-light leading-[64px] tracking-[-0.84px] text-paa-inverse">
            {t("line1")}
            <br />
            {t("line2")}
            <br />
            {t("line3")}
          </h1>
          <p className="max-w-[640px] text-[18px] font-normal leading-[30px] text-paa-inverse">
            {t("support")}
          </p>
          <TextLink href="#about" label={t("cta")} tone="light" />
        </div>

        <div className="mt-auto flex flex-col gap-3.5 px-8 lg:hidden">
          <p className="text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-inverse">
            {t("eyebrow")}
          </p>
          <h1 className="text-[32px] font-light leading-[40px] tracking-[-0.6px] text-paa-inverse">
            {t("line1")}
            <br />
            {t("line2")}
            <br />
            {t("line3")}
          </h1>
          <p className="text-[16px] font-normal leading-[26px] text-paa-inverse">
            {t("support")}
          </p>
          <TextLink href="#about" label={t("cta")} tone="light" />
        </div>
      </div>
    </section>
  );
}
