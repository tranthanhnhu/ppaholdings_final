import Image from "next/image";
import { getTranslations } from "next-intl/server";

export async function Location() {
  const t = await getTranslations("contact.location");

  return (
    <section className="bg-paa-bg px-8 pb-20 pt-10 lg:px-24 xl:px-[120px] lg:pb-20 lg:pt-8">
      <p className="mb-8 text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-muted">{t("eyebrow")}</p>
      <h2 className="mb-4 max-w-[484px] text-[32px] font-light leading-10 tracking-[-0.4px] text-paa-text lg:text-[40px] lg:leading-[48px]">{t("headline")}</h2>
      <p className="mb-8 text-[18px] leading-[30px] text-paa-text">{t("address")}</p>
      <div className="relative h-[280px] w-full overflow-hidden lg:h-[520px]">
        <Image src="/images/contact/map.png" alt={t("headline")} fill className="object-cover" sizes="100vw" />
      </div>
    </section>
  );
}
