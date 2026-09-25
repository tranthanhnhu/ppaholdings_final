import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Plus_Jakarta_Sans, Noto_Sans_SC, Noto_Sans_Lao, Cormorant_Garamond } from "next/font/google";
import { routing } from "@/i18n/routing";
import { BackToTop } from "@/components/UI/BackToTop";
import "../globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["300", "400"],
  variable: "--font-cormorant",
  display: "swap",
});

const notoSc = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-noto-sc",
  display: "swap",
});

const notoLao = Noto_Sans_Lao({
  subsets: ["lao"],
  weight: ["300", "400", "500"],
  variable: "--font-noto-lao",
  display: "swap",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      locale,
      type: "website",
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${plusJakarta.variable} ${cormorant.variable} ${notoSc.variable} ${notoLao.variable}`}
    >
      <body
        className={`${plusJakarta.className} antialiased ${
          locale === "zh" ? notoSc.className : ""
        } ${locale === "lo" ? notoLao.className : ""}`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
          <BackToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
