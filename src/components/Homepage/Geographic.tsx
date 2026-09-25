import Image from "next/image";
import { getTranslations } from "next-intl/server";

export async function Geographic() {
  const t = await getTranslations("geographic");

  return (
    <section className="bg-paa-bg px-6 py-20 lg:flex lg:items-center lg:gap-20 lg:px-[60px] lg:py-40">
      <div className="mb-10 flex max-w-[480px] flex-col gap-6 lg:mb-0">
        <p className="text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-muted">
          {t("eyebrow")}
        </p>
        <h2 className="text-[40px] font-light leading-[48px] tracking-[-0.4px] text-paa-text">
          {t("headline1")}
          <br />
          {t("headline2")}
        </h2>
        <p className="text-[18px] leading-[30px] text-paa-text">{t("lead")}</p>
      </div>

      <div className="relative mx-auto aspect-[760/480] w-full max-w-[760px] flex-1 overflow-hidden">
        <Image
          src="/images/homepage/sea-map.png"
          alt={`${t("pinCity")} — ${t("pinLabel")}`}
          fill
          className="object-contain"
          sizes="(min-width:1024px) 760px, 100vw"
        />
      </div>
    </section>
  );
}
