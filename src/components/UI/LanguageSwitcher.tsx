"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

const labels: Record<Locale, string> = {
  vi: "VI",
  en: "EN",
  zh: "中文",
  lo: "ລາວ",
};

type LanguageSwitcherProps = {
  tone?: "light" | "dark";
};

export function LanguageSwitcher({ tone = "dark" }: LanguageSwitcherProps) {
  const locale = useLocale() as Locale;
  const pathname = usePathname();

  const idle =
    tone === "light"
      ? "text-paa-inverse/80 hover:text-paa-inverse"
      : "text-paa-muted hover:text-paa-text";

  return (
    <div className="flex items-center gap-3" role="navigation" aria-label="Language">
      {routing.locales.map((code) => (
        <Link
          key={code}
          href={pathname}
          locale={code}
          className={`font-medium text-[11px] leading-[14px] tracking-[1.4px] transition-colors ${
            code === locale ? "text-paa-accent" : idle
          }`}
          aria-current={code === locale ? "true" : undefined}
        >
          {labels[code]}
        </Link>
      ))}
    </div>
  );
}
