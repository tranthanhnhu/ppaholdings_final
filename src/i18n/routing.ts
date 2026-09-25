import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["vi", "en", "lo", "zh"],
  defaultLocale: "vi",
  localePrefix: "always",
  // Required for `output: "export"` (no middleware negotiation on static hosts)
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
