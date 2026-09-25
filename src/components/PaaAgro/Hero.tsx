import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Header } from "@/components/Header/Header";

export async function PaaAgroHero() {
  const t = await getTranslations("paaAgro.hero");

  return (
    <section className="relative flex min-h-[640px] flex-col overflow-hidden lg:min-h-[860px]">
      <Image
        src="/images/paa-agro/hero.png"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-paa-ink/55" />
      <div className="relative z-10 flex min-h-[640px] flex-col lg:min-h-[860px]">
        <Header logoSize={50} />
        <div className="mt-auto flex max-w-[760px] flex-col gap-4 px-8 pb-12 pt-10 text-paa-inverse lg:px-24 xl:px-[120px] lg:pb-12">
          <p className="text-[11px] font-medium tracking-[1.4px] text-paa-accent whitespace-pre">
            {t("eyebrow")}
          </p>
          <h1 className="text-[40px] font-light tracking-[-0.6px] lg:text-[56px] lg:leading-[64px] lg:tracking-[-0.84px]">
            {t("title")}
          </h1>
          <p className="max-w-[720px] text-[16px] leading-[26px] lg:text-[18px] lg:leading-[30px]">
            {t("lead")}
          </p>
          <p className="text-[11px] font-medium tracking-[1.4px] opacity-70 whitespace-pre">
            {t("meta")}
          </p>
          <p className="text-[11px] font-medium tracking-[1.4px] opacity-55">
            {t("scroll")}
          </p>
        </div>
      </div>
    </section>
  );
}
