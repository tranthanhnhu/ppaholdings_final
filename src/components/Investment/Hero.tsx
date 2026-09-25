import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Header } from "@/components/Header/Header";

export async function Hero() {
  const t = await getTranslations("investment.hero");

  return (
    <section className="relative flex h-[640px] flex-col overflow-hidden lg:h-[860px]">
      <Image
        src="/images/investment/hero.png"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[rgba(9,23,37,0.4)]" />

      <div className="relative z-10 flex h-full flex-col pb-12 lg:justify-between lg:pb-12">
        <Header logoSize={50} />

        <div className="mx-auto hidden w-full max-w-[1440px] flex-col items-center gap-5 overflow-hidden px-24 pb-12 text-center text-paa-inverse xl:px-[120px] lg:flex">
          <p className="text-[11px] font-medium leading-[14px] tracking-[1.4px]">
            {t("eyebrow")}
          </p>
          <h1 className="max-w-[1280px] text-[64px] font-light leading-[74px] tracking-[-0.96px]">
            {t("line1")}
            <br />
            {t("line2")}
          </h1>
          <p className="max-w-[720px] text-[18px] font-normal leading-[30px]">
            {t("lead")}
          </p>
        </div>

        <div className="mt-auto flex flex-col gap-3.5 px-8 text-paa-inverse lg:hidden">
          <p className="text-[11px] font-medium leading-[14px] tracking-[1.4px]">
            {t("eyebrow")}
          </p>
          <h1 className="text-[32px] font-light leading-[40px] tracking-[-0.6px]">
            {t("line1")}
            <br />
            {t("line2")}
          </h1>
          <p className="text-[16px] font-normal leading-[26px]">{t("lead")}</p>
          <p className="pt-2 text-[11px] font-medium leading-[14px] tracking-[1.4px] opacity-55">
            {t("scroll")}
          </p>
        </div>

        <p className="hidden text-center text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-inverse opacity-55 lg:block">
          {t("scroll")}
        </p>
      </div>
    </section>
  );
}
