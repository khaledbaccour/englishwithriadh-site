"use client";

import { useState } from "react";
import { Field, Input, Textarea, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { GOVERNORATES_EN, GOVERNORATES_AR } from "@/data/governorates";
import { type Locale, getMessages } from "@/lib/i18n";
import { buildWhatsAppLink } from "@/lib/format";

type Mode = "reservation" | "contact";

export function ReservationForm({
  locale,
  mode = "reservation",
  preselectedCourse,
}: {
  locale: Locale;
  mode?: Mode;
  preselectedCourse?: string;
}) {
  const messages = getMessages(locale);
  const governorates = locale === "ar" ? GOVERNORATES_AR : GOVERNORATES_EN;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneAlt, setPhoneAlt] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [status, setStatus] = useState("");
  const [interest, setInterest] = useState(preselectedCourse ?? "");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const lines = [
      locale === "ar" ? "السلام عليكم رياض،" : "Hi Riadh,",
      "",
      `${messages.form.name}: ${name}`,
      `${messages.form.phone}: ${phone}`,
      phoneAlt ? `${messages.form.phone_alt}: ${phoneAlt}` : null,
      email ? `${messages.form.email}: ${email}` : null,
      city ? `${messages.form.city}: ${city}` : null,
      status ? `${messages.form.status}: ${status}` : null,
      interest ? `${messages.form.interest}: ${interest}` : null,
      "",
      message,
    ].filter(Boolean);
    const text = lines.join("\n");
    window.location.href = buildWhatsAppLink(text);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={messages.form.name} required>
          <Input
            type="text"
            required
            placeholder={messages.form.name_ph}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Field>
        <Field label={messages.form.phone} required>
          <Input
            type="tel"
            required
            placeholder={messages.form.phone_ph}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={messages.form.email}>
          <Input
            type="email"
            placeholder={messages.form.email_ph}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Field>
        <Field label={messages.form.phone_alt}>
          <Input
            type="tel"
            placeholder={messages.form.phone_ph}
            value={phoneAlt}
            onChange={(e) => setPhoneAlt(e.target.value)}
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={messages.form.city}>
          <Select value={city} onChange={(e) => setCity(e.target.value)}>
            <option value="">{messages.form.city_ph}</option>
            {governorates.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </Select>
        </Field>
        <Field label={messages.form.status}>
          <Select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="">{messages.form.status_ph}</option>
            <option value={messages.form.status_student}>{messages.form.status_student}</option>
            <option value={messages.form.status_professional}>{messages.form.status_professional}</option>
            <option value={messages.form.status_parent}>{messages.form.status_parent}</option>
          </Select>
        </Field>
      </div>

      {mode === "contact" && (
        <Field label={messages.form.interest}>
          <Select value={interest} onChange={(e) => setInterest(e.target.value)}>
            <option value="">{messages.form.interest_ph}</option>
            <option value={messages.form.interest_courses}>{messages.form.interest_courses}</option>
            <option value={messages.form.interest_books}>{messages.form.interest_books}</option>
            <option value={messages.form.interest_private}>{messages.form.interest_private}</option>
            <option value={messages.form.interest_other}>{messages.form.interest_other}</option>
          </Select>
        </Field>
      )}

      <Field label={messages.form.message} required>
        <Textarea
          required
          placeholder={messages.form.message_ph}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </Field>

      <p className="text-xs text-[var(--color-ink-500)]">{messages.form.consent}</p>

      <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
        {mode === "reservation" ? messages.form.submit_reserve : messages.form.submit_contact}
      </Button>
    </form>
  );
}
