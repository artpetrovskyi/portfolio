export const locales = ["en", "ru"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ru";

export const languageNames: Record<Locale, string> = {
  en: "English",
  ru: "Русский",
};

import en from "./locales/en.json";
import ru from "./locales/ru.json";

const i18nConfig = {
  // lng: 'en', // if you're using a language detector, do not define the lng option
  // debug: true,
  supportedLngs: locales,
  fallbackLng: defaultLocale,
  resources: {
    en: { translation: en },
    ru: { translation: ru },
  },
};

export default i18nConfig;
