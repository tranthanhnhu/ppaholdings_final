import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export async function Businesses() {
  const t = await getTranslations("businesses");
  const items = t.raw("items") as Array<{
    index: string;
    title: string;
    image: string;
  }>;

  return (
    <section id="businesses" className="bg-paa-bg px-6 py-20 lg:px-[60px] lg:py-40">
      <div className="mb-12 flex flex-col gap-5 lg:mb-16">
        <p className="text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-muted">
          {t("eyebrow")}
        </p>
        <h2 className="text-[40px] font-light leading-[48px] tracking-[-0.4px] text-paa-text">
          {t("headline")}
        </h2>
        <p className="max-w-[720px] text-[18px] leading-[30px] text-paa-text">
          {t("lead")}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {items.map((item, i) => {
          const full = i === items.length - 1;
          return (
            <Link
              key={item.index}
              href="/our-business"
              className={`group relative block h-[280px] overflow-hidden lg:h-[420px] ${
                full ? "lg:col-span-2 lg:h-[460px]" : ""
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
                sizes={full ? "100vw" : "(min-width:1024px) 50vw, 100vw"}
              />
              <div className="absolute inset-0 bg-paa-ink/44" />
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 px-7 pb-9">
                <p className="text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-accent">
                  {item.index}
                </p>
                <p className="text-[22px] font-medium leading-7 tracking-[-0.2px] text-paa-inverse">
                  {item.title}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
