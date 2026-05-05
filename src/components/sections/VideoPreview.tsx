import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import type { Messages } from "@/lib/i18n";
import { ArrowRight } from "lucide-react";

export function VideoPreview({ messages }: { messages: Messages }) {
  return (
    <section className="py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] items-center">
          <div>
            <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-[var(--color-ink-900)]">
              {messages.video_section.title}
            </h2>
            <p className="mt-3 text-[var(--color-ink-500)] text-lg max-w-md">
              {messages.video_section.sub}
            </p>
            <ButtonLink
              href="https://www.youtube.com/"
              target="_blank"
              variant="primary"
              size="md"
              className="mt-6"
            >
              {messages.video_section.cta}
              <ArrowRight size={16} className="rtl:rotate-180" />
            </ButtonLink>
          </div>
          <div className="relative aspect-video rounded-[var(--radius-lg)] overflow-hidden border border-[var(--color-ink-200)] shadow-[var(--shadow-card-hover)] bg-black">
            <iframe
              src="https://www.youtube.com/embed/i0RctDLkagA"
              title="English with Riadh"
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
