import en from "../../messages/en.json";
import ar from "../../messages/ar.json";

export const LOCALES = ["en", "ar"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

const dictionaries = { en, ar } as const;

export type Messages = typeof en;

export function getMessages(locale: Locale): Messages {
  return dictionaries[locale];
}

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function isRTL(locale: Locale): boolean {
  return locale === "ar";
}

type AnyRecord = Record<string, unknown>;

export function getNested(obj: AnyRecord, path: string): string {
  const parts = path.split(".");
  let cur: unknown = obj;
  for (const p of parts) {
    if (cur && typeof cur === "object" && p in (cur as AnyRecord)) {
      cur = (cur as AnyRecord)[p];
    } else {
      return path;
    }
  }
  return typeof cur === "string" ? cur : path;
}

export function makeT(messages: Messages) {
  return (key: string, vars?: Record<string, string | number>): string => {
    let value = getNested(messages as unknown as AnyRecord, key);
    if (vars) {
      for (const [k, v] of Object.entries(vars)) {
        value = value.replace(new RegExp(`\\{${k}\\}`, "g"), String(v));
      }
    }
    return value;
  };
}
