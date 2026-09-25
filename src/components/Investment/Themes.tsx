import Image from "next/image";
import { getTranslations } from "next-intl/server";

type Theme = {
  index: string;
  title: string;
  body: string;
  tagline: string;
  image: string;
  imageRight?: boolean;
};

export async function Themes() {
  const t = await getTranslations("investment.themes");
  const items = t.raw("items") as Theme[];

  return (
    <div>
      {items.map((item) => (
        <section
          key={item.index}
          className="bg-paa-bg px-8 py-12 lg:px-24 lg:py-16 xl:px-[120px]"
        >
          <div
            className={`flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16 xl:gap-20 ${
              item.imageRight ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="relative h-[280px] w-full shrink-0 overflow-hidden lg:h-[480px] lg:w-1/2">
              <Image
                src={item.image}
                alt=""
                fill
                className="object-cover"
                sizes="(min-width:1024px) 40vw, 100vw"
              />
            </div>
            <div className="flex flex-col gap-4 lg:w-1/2 lg:justify-center lg:py-4">
              <p className="text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-accent">
                {item.index}
              </p>
              <h3 className="max-w-[560px] text-[24px] font-light leading-8 tracking-[-0.4px] text-paa-text lg:text-[28px] lg:leading-9">
                {item.title}
              </h3>
              <p className="max-w-[560px] text-[16px] leading-[26px] text-paa-text">
                {item.body}
              </p>
              <p className="max-w-[560px] text-[13px] font-medium leading-[18px] tracking-[1.2px] text-paa-accent">
                {item.tagline}
              </p>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
