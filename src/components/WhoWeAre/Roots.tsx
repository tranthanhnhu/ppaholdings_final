import Image from "next/image";
import { getTranslations } from "next-intl/server";

export async function Roots() {
  const t = await getTranslations("whoWeAre.roots");

  return (
    <section className="bg-paa-bg px-8 py-12 lg:px-24 lg:py-20 xl:px-[120px]">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16 xl:gap-20">
        <div className="relative h-[280px] w-full shrink-0 overflow-hidden lg:h-[560px] lg:w-1/2">
          <Image
            src="/images/who-we-are/roots.png"
            alt=""
            fill
            className="object-cover"
            sizes="(min-width:1024px) 40vw, 100vw"
          />
        </div>
        <div className="flex flex-col gap-6 lg:w-1/2 lg:py-4">
          <p className="text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-muted">
            {t("eyebrow")}
          </p>
          <h2 className="text-[32px] font-light leading-10 tracking-[-0.4px] text-paa-text lg:max-w-[560px] lg:text-[40px] lg:leading-[48px]">
            {t("line1")}
            <br />
            {t("line2")}
          </h2>
          <p className="max-w-[560px] text-[18px] leading-[30px] text-paa-text">
            {t("p1")}
          </p>
          <p className="max-w-[560px] text-[16px] leading-[26px] text-paa-text">
            {t("p2")}
          </p>
        </div>
      </div>
    </section>
  );
}
