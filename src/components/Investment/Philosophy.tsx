import { getTranslations } from "next-intl/server";
import { asset } from "@/lib/asset";

export async function Philosophy() {
  const t = await getTranslations("investment.philosophy");

  return (
    <section className="bg-paa-bg px-8 pb-10 pt-20 lg:flex lg:items-center lg:gap-16 lg:px-24 xl:px-[120px] lg:pb-20 lg:pt-40">
      <div className="mb-12 flex max-w-[560px] flex-col gap-6 lg:mb-0 lg:shrink-0">
        <p className="text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-muted">
          {t("eyebrow")}
        </p>
        <h2 className="text-[32px] font-light leading-10 tracking-[-0.4px] text-paa-text lg:text-[40px] lg:leading-[48px]">
          {t("headline")}
        </h2>
        <p className="text-[18px] leading-[30px] text-paa-text">{t("lead")}</p>
      </div>

      <div className="relative mx-auto w-full max-w-[520px] shrink-0 lg:mx-0">
        <video
          className="h-auto w-full"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden
        >
          <source src={asset("/animations/diagram.webm")} type="video/webm" />
        </video>
      </div>
    </section>
  );
}
