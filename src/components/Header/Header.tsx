"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Logo } from "@/components/UI/Logo";
import { LanguageSwitcher } from "@/components/UI/LanguageSwitcher";

export const sectorNav = [
  { key: "agriculture", href: "/our-business/agriculture" },
  { key: "food", href: "/our-business/food-processing" },
  { key: "materials", href: "/our-business/natural-materials" },
  { key: "trading", href: "/our-business/trading" },
  { key: "realEstate", href: "/our-business/real-estate" },
] as const;

type HeaderProps = {
  logoSize?: 40 | 50;
};

function navClass(active: boolean) {
  return `font-medium text-[14px] leading-5 whitespace-nowrap transition-colors ${
    active ? "text-paa-accent" : "text-paa-inverse hover:text-paa-accent/90"
  }`;
}

export function Header({ logoSize = 40 }: HeaderProps) {
  const t = useTranslations();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [bizOpen, setBizOpen] = useState(false);
  const [bizHover, setBizHover] = useState(false);
  const onBusiness = pathname.startsWith("/our-business");

  return (
    <>
      <header className="relative z-30 hidden min-h-[88px] w-full items-center justify-between px-8 py-5 lg:flex lg:px-24 xl:px-[120px]">
        <Link href="/" aria-label="PAA Empire Holdings home">
          <Logo size={logoSize} />
        </Link>
        <nav className="flex items-center gap-8">
          <Link
            href="/who-we-are"
            className={navClass(pathname.startsWith("/who-we-are"))}
          >
            {t("nav.about")}
          </Link>
          <Link
            href="/investment-approach"
            className={navClass(pathname.startsWith("/investment-approach"))}
          >
            {t("nav.approach")}
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setBizHover(true)}
            onMouseLeave={() => setBizHover(false)}
          >
            <Link href="/our-business" className={navClass(onBusiness)}>
              {t("nav.business")}
            </Link>
            <div
              className={`absolute right-0 top-full z-50 pt-3 transition ${
                bizHover ? "visible opacity-100" : "invisible opacity-0"
              }`}
            >
              <div className="w-[448px] bg-paa-bg p-4 shadow-[0_16px_40px_rgba(9,23,37,0.18)]">
                {sectorNav.map((item, i) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    className="flex items-center gap-4 border-b border-black/5 py-3 last:border-0 hover:bg-black/[0.02]"
                  >
                    <span className="w-6 shrink-0 text-[11px] font-medium leading-[14px] tracking-[1.4px] text-paa-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-[14px] font-medium leading-5 text-paa-text">
                      {t(`businessSectors.${item.key}`)}
                    </span>
                    <span className="text-[13px] tracking-[1.2px] text-paa-muted">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className={navClass(pathname.startsWith("/contact"))}
          >
            {t("nav.contact")}
          </Link>
          <LanguageSwitcher tone="light" />
        </nav>
      </header>

      <header className="relative z-30 flex h-16 w-full items-center justify-between px-8 lg:hidden">
        <Link href="/" aria-label="PAA Empire Holdings home">
          <Logo size={36} />
        </Link>
        <button
          type="button"
          aria-label="Open menu"
          className="flex size-9 items-center justify-center"
          onClick={() => setOpen(true)}
        >
          <Image src="/icons/menu.svg" alt="" width={24} height={24} />
        </button>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-paa-ink lg:hidden">
          <div className="flex h-16 items-center justify-between px-8">
            <Link href="/" onClick={() => setOpen(false)}>
              <Logo size={36} />
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              className="size-6"
              onClick={() => setOpen(false)}
            >
              <Image src="/icons/close.svg" alt="" width={24} height={24} />
            </button>
          </div>
          <nav className="flex flex-1 flex-col gap-7 overflow-y-auto px-8 pb-10 pt-12">
            <Link
              href="/who-we-are"
              onClick={() => setOpen(false)}
              className="text-[22px] font-medium leading-7 text-paa-inverse"
            >
              {t("nav.about")}
            </Link>
            <Link
              href="/investment-approach"
              onClick={() => setOpen(false)}
              className="text-[22px] font-medium leading-7 text-paa-inverse"
            >
              {t("nav.approach")}
            </Link>
            <div>
              <div className="flex w-full items-center justify-between gap-4">
                <Link
                  href="/our-business"
                  onClick={() => setOpen(false)}
                  className="text-[22px] font-medium leading-7 text-paa-inverse"
                >
                  {t("nav.business")}
                </Link>
                <button
                  type="button"
                  aria-expanded={bizOpen}
                  aria-label={bizOpen ? "Collapse" : "Expand"}
                  className="flex size-10 shrink-0 items-center justify-center text-[28px] font-light leading-none text-paa-accent"
                  onClick={() => setBizOpen((v) => !v)}
                >
                  {bizOpen ? "−" : "+"}
                </button>
              </div>
              {bizOpen && (
                <div className="mt-5 flex flex-col gap-4 pl-1">
                  {sectorNav.map((item, i) => (
                    <Link
                      key={item.key}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 text-[16px] leading-6 text-paa-inverse/90"
                    >
                      <span className="w-6 text-[11px] font-medium tracking-[1.4px] text-paa-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {t(`businessSectors.${item.key}`)}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="text-[22px] font-medium leading-7 text-paa-inverse"
            >
              {t("nav.contact")}
            </Link>

            <div className="mt-2 border-t border-paa-inverse/20 pt-8">
              <LanguageSwitcher tone="light" />
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
