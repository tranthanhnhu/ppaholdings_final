import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Logo } from "@/components/UI/Logo";
import { LanguageSwitcher } from "@/components/UI/LanguageSwitcher";

export async function Footer() {
  const t = await getTranslations("footer");
  const nav = await getTranslations("nav");

  const links = [
    { href: "/who-we-are", label: nav("about") },
    { href: "/investment-approach", label: nav("approach") },
    { href: "/our-business", label: nav("business") },
    { href: "/contact", label: nav("contact") },
  ];

  return (
    <footer className="bg-paa-ink px-8 pb-16 pt-16 text-paa-inverse lg:px-24 xl:px-[120px] lg:pb-16 lg:pt-24">
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">
        <div className="lg:w-[280px]">
          <Logo size={50} />
        </div>

        <div className="flex flex-col gap-3 lg:w-[280px]">
          <p className="text-[11px] font-medium leading-[14px] tracking-[1.4px]">
            {t("hqLabel")}
          </p>
          <div className="text-[16px] leading-[26px]">
            <p>{t("hqName")}</p>
            <p>{t("hqPlace")}</p>
          </div>
        </div>

        <nav className="flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[14px] font-medium leading-5"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="mt-16 flex flex-col gap-6 lg:mt-20 lg:flex-row lg:items-center lg:justify-between">
        <p className="text-[16px] leading-[26px]">{t("copyright")}</p>
        <LanguageSwitcher tone="light" />
      </div>
    </footer>
  );
}
