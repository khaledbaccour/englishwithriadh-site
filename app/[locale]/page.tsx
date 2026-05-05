import { getMessages, isLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { Hero } from "@/components/sections/Hero";
import { CategoriesGrid } from "@/components/sections/CategoriesGrid";
import { FeaturedCourses } from "@/components/sections/FeaturedCourses";
import { BooksStrip } from "@/components/sections/BooksStrip";
import { StatsRow } from "@/components/sections/StatsRow";
import { Testimonials } from "@/components/sections/Testimonials";
import { VideoPreview } from "@/components/sections/VideoPreview";
import { CtaStrip } from "@/components/sections/CtaStrip";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const messages = getMessages(locale);

  return (
    <>
      <Hero locale={locale} messages={messages} />
      <CategoriesGrid locale={locale} messages={messages} />
      <FeaturedCourses locale={locale} messages={messages} />
      <StatsRow messages={messages} />
      <BooksStrip locale={locale} messages={messages} />
      <Testimonials locale={locale} messages={messages} />
      <VideoPreview messages={messages} />
      <CtaStrip locale={locale} messages={messages} />
    </>
  );
}
