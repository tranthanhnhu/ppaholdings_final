import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Logo } from "@/components/UI/Logo";
import { SECTOR_SLUGS, sectorMeta } from "@/lib/sectors";
import type { ReactNode } from "react";

export async function Footer() {
  const t = await getTranslations("footer");
  const nav = await getTranslations("nav");

  const explore = [
    { href: "/who-we-are", label: nav("about") },
    { href: "/investment-approach", label: nav("approach") },
    { href: "/our-business", label: nav("business") },
    { href: "/contact", label: nav("contact") },
  ];

  const sectors = SECTOR_SLUGS.map((slug) => ({
    href: `/our-business/${slug}`,
    label: t(`sectors.${sectorMeta[slug].key}`),
  }));

  const hqLines = t.raw("hqLines") as string[];
  const phone = t("phone");
  const email = t("email");

  return (
    <footer className="bg-paa-ink px-8 pb-10 pt-16 text-paa-inverse lg:px-24 xl:px-[120px] lg:pb-12 lg:pt-20">
      <div className="flex flex-col gap-12 lg:gap-16">
        {/* Brand */}
        <div className="flex items-start gap-4">
          <Logo size={48} className="shrink-0" />
          <div className="flex flex-col gap-1 pt-0.5">
            <p className="text-[18px] font-medium leading-6 tracking-[-0.2px]">
              {t("brand")}
            </p>
            <p className="text-[14px] leading-5 text-paa-inverse/60">
              {t("tagline")}
            </p>
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          <FooterColumn title={t("exploreLabel")}>
            {explore.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] leading-6 text-paa-inverse/90 transition-colors hover:text-paa-accent"
              >
                {link.label}
              </Link>
            ))}
          </FooterColumn>

          <FooterColumn title={t("sectorsLabel")}>
            {sectors.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] leading-6 text-paa-inverse/90 transition-colors hover:text-paa-accent"
              >
                {link.label}
              </Link>
            ))}
          </FooterColumn>

          <FooterColumn title={t("hqLabel")}>
            {hqLines.map((line) => (
              <p
                key={line}
                className="text-[15px] leading-6 text-paa-inverse/90"
              >
                {line}
              </p>
            ))}
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="text-[15px] leading-6 text-paa-inverse/90 transition-colors hover:text-paa-accent"
            >
              {phone}
            </a>
            <a
              href={`mailto:${email}`}
              className="text-[15px] leading-6 text-paa-inverse/90 transition-colors hover:text-paa-accent"
            >
              {email}
            </a>
          </FooterColumn>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-3 border-t border-paa-inverse/10 pt-6 lg:mt-16 lg:flex-row lg:items-center lg:justify-between">
        <p className="text-[13px] leading-5 text-paa-inverse/50">
          {t("copyright")}
        </p>
        <p className="text-[13px] leading-5 text-paa-inverse/50">
          {t("location")}
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-accent">
        {title}
      </p>
      <div className="flex flex-col gap-2.5">{children}</div>
    </div>
  );
}
