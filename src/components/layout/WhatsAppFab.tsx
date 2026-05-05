import { MessageCircle } from "lucide-react";
import { type Locale } from "@/lib/i18n";
import { buildWhatsAppLink } from "@/lib/format";

export function WhatsAppFab({ locale }: { locale: Locale }) {
  const greeting =
    locale === "ar"
      ? "السلام عليكم رياض، أودّ الاستفسار عن الدورات."
      : "Hi Riadh, I would like to ask about your courses.";
  return (
    <a
      href={buildWhatsAppLink(greeting)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 end-6 z-30 inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[var(--shadow-floating)] hover:bg-[#1ebe5b] hover:scale-105 transition"
    >
      <MessageCircle size={24} strokeWidth={2.2} />
    </a>
  );
}
