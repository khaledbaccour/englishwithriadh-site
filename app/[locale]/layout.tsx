import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import { notFound } from "next/navigation";
import { LOCALES, getMessages, isLocale, isRTL, type Locale } from "@/lib/i18n";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-cairo",
  display: "swap",
});

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const messages = getMessages(locale);
  return {
    title: `${messages.meta.site_name} — ${messages.meta.tagline}`,
    description: messages.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        ar: "/ar",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const dir = isRTL(locale) ? "rtl" : "ltr";
  const fontVar = locale === "ar" ? cairo.variable : inter.variable;
  const fontClass = locale === "ar" ? cairo.className : inter.className;

  return (
    <html lang={locale} dir={dir} className={fontVar}>
      <body className={fontClass}>
        <Navbar locale={locale} />
        <main className="min-h-[calc(100vh-72px)]">{children}</main>
        <Footer locale={locale} />
        <WhatsAppFab locale={locale} />
      </body>
    </html>
  );
}
