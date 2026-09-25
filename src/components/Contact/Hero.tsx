import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Header } from "@/components/Header/Header";

export async function Hero() {
  const t = await getTranslations("contact.hero");

  return (
    <section className="relative flex h-[560px] flex-col overflow-hidden lg:h-[720px]">
      <Image
        src="/images/contact/hero.png"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[rgba(9,23,37,0.55)]" />
      <div className="relative z-10 flex h-full flex-col">
        <Header logoSize={50} />
        <div className="mx-auto flex w-full flex-1 flex-col items-center justify-center gap-4 px-8 pb-12 text-center text-paa-inverse lg:px-24 xl:px-[120px]">
          <p className="text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-accent">
            {t("eyebrow")}
          </p>
          <h1 className="max-w-[492px] text-[32px] font-light leading-10 tracking-[-0.4px] lg:text-[40px] lg:leading-[48px]">
            {t("headline")}
          </h1>
          <p className="text-[18px] leading-[30px]">{t("place")}</p>
        </div>
      </div>
    </section>
  );
}
