import type { Locale } from "./i18n";

export function formatPriceTND(amount: number, locale: Locale): string {
  if (locale === "ar") {
    return `${amount} د.ت`;
  }
  return `${amount} TND`;
}

export function buildWhatsAppLink(message: string): string {
  const phone = "21625102107";
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
