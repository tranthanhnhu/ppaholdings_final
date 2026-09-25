import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { TextLink } from "@/components/UI/TextLink";
import type { SectorSlug } from "@/lib/sectors";
import { sectorMeta } from "@/lib/sectors";

type Company = {
  path: string;
  name: string;
  meta: string;
};

type Props = { slug: SectorSlug };

export async function SectorCompanies({ slug }: Props) {
  const t = await getTranslations(`sectors.${sectorMeta[slug].key}`);
  const companies = t.raw("companies.items") as Company[];
  const images = sectorMeta[slug].images.companies;
  const hrefs = sectorMeta[slug].companyHrefs;

  const unique = companies.filter(
    (c, i, arr) => arr.findIndex((x) => x.name === c.name) === i,
  );

  return (
    <section className="bg-paa-bg px-8 pb-20 pt-10 lg:px-24 lg:pb-40 lg:pt-20 xl:px-[120px]">
      <div className="mb-12 flex max-w-[640px] flex-col gap-4 lg:mb-20">
        <p className="text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-muted">
          {t("companies.eyebrow")}
        </p>
        <h2 className="text-[32px] font-light leading-10 text-paa-text lg:text-[40px] lg:leading-tight">
          {t("companies.headline")}
        </h2>
      </div>

      <div
        className={`grid grid-cols-1 gap-10 ${
          unique.length > 1 ? "lg:grid-cols-2 lg:gap-12" : "lg:max-w-[640px]"
        }`}
      >
        {unique.map((c) => {
          const originalIndex = companies.findIndex((x) => x.name === c.name);
          return (
            <article key={c.name} className="flex flex-col gap-4">
              <div className="relative aspect-[4/3] w-full overflow-hidden lg:aspect-[3/2]">
                <Image
                  src={images[originalIndex] ?? images[0]}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 40vw, 100vw"
                />
              </div>
              <div className="flex flex-col gap-3 px-1 pt-1">
                <p className="text-[11px] font-medium tracking-[1.4px] text-paa-accent">
                  {c.path}
                </p>
                <h3 className="text-[28px] font-light leading-tight text-paa-text lg:text-[32px]">
                  {c.name}
                </h3>
                <p className="text-[14px] leading-6 text-paa-muted lg:text-[15px]">
                  {c.meta}
                </p>
                <TextLink
                  href={hrefs[originalIndex] ?? "#"}
                  label={t("companies.cta")}
                />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
