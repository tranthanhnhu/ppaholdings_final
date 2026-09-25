import Image from "next/image";
import { getTranslations } from "next-intl/server";

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

      <div className="relative mx-auto h-[340px] w-full max-w-[520px] shrink-0 lg:mx-0 lg:h-[460px]">
        <Image
          src="/images/investment/framework-circle.svg"
          alt=""
          width={250}
          height={250}
          className="absolute left-[27%] top-[3.5%] size-[48%] lg:left-[140px] lg:top-4 lg:size-[250px]"
        />
        <Image
          src="/images/investment/framework-circle.svg"
          alt=""
          width={250}
          height={250}
          className="absolute left-[5%] top-[36%] size-[48%] lg:left-7 lg:top-[168px] lg:size-[250px]"
        />
        <Image
          src="/images/investment/framework-circle.svg"
          alt=""
          width={250}
          height={250}
          className="absolute right-[5%] top-[36%] size-[48%] lg:left-[248px] lg:right-auto lg:top-[168px] lg:size-[250px]"
        />
        <div className="absolute left-1/2 top-[17%] w-[40%] -translate-x-1/2 text-center text-[11px] font-medium leading-[16px] tracking-[1.2px] text-paa-text lg:top-[78px] lg:w-auto lg:text-[13px] lg:leading-[18px]">
          <p>{t("circle1a")}</p>
          <p>{t("circle1b")}</p>
        </div>
        <div className="absolute left-[24%] top-[58%] w-[28%] -translate-x-1/2 text-center text-[11px] font-medium leading-[16px] tracking-[1.2px] text-paa-text lg:left-[109.5px] lg:top-[268px] lg:w-auto lg:text-[13px] lg:leading-[18px]">
          <p>{t("circle2a")}</p>
          <p>{t("circle2b")}</p>
        </div>
        <div className="absolute left-[76%] top-[58%] w-[28%] -translate-x-1/2 text-center text-[11px] font-medium leading-[16px] tracking-[1.2px] text-paa-text lg:left-[350px] lg:top-[268px] lg:w-auto lg:text-[13px] lg:leading-[18px]">
          <p>{t("circle3a")}</p>
          <p>{t("circle3b")}</p>
        </div>
        <div className="absolute left-[48%] top-[44%] -translate-x-1/2 text-center text-[10px] font-medium leading-[14px] tracking-[1.4px] text-paa-accent lg:left-[209px] lg:top-[202px] lg:text-[11px]">
          <p>{t("center1")}</p>
          <p>{t("center2")}</p>
        </div>
      </div>
    </section>
  );
}
