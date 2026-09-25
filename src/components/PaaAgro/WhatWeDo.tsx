import Image from "next/image";
import { getTranslations } from "next-intl/server";

export async function PaaAgroWhatWeDo() {
  const t = await getTranslations("paaAgro.whatWeDo");
  const activities = t.raw("activities") as Array<{
    index: string;
    title: string;
  }>;

  return (
    <section className="bg-paa-bg px-8 py-20 lg:px-24 xl:px-[120px] lg:py-40">
      <div className="mb-12 flex max-w-[880px] flex-col gap-8 lg:mb-20">
        <p className="text-[11px] font-medium tracking-[1.4px] text-paa-muted">
          {t("eyebrow")}
        </p>
        <h2 className="text-[32px] font-light leading-10 tracking-[-0.4px] text-paa-text lg:text-[40px] lg:leading-[48px]">
          {t("headline")}
        </h2>
        <p className="max-w-[720px] text-[16px] leading-[26px] text-paa-text lg:text-[18px] lg:leading-[30px]">
          {t("lead")}
        </p>
      </div>
      <div className="relative mb-12 h-[280px] w-full overflow-hidden lg:mb-20 lg:h-[480px]">
        <Image
          src="/images/paa-agro/activity.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-8">
        {activities.map((a) => (
          <div
            key={a.index}
            className="flex flex-col gap-3 border-t border-paa-accent pb-6 pt-4"
          >
            <p className="text-[11px] font-medium tracking-[1.4px] text-paa-accent">
              {a.index}
            </p>
            <p className="font-[family-name:var(--font-cormorant)] text-[28px] font-light leading-10 text-paa-text lg:text-[32px]">
              {a.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
