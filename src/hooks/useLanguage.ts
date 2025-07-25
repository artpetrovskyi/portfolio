import { locales } from "@/lib/i18n/config";
import { useTranslation } from "react-i18next";

export function useLanguage() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language as (typeof locales)[number];

  const toggleLanguage = () => {
    const nextLang = currentLang === locales[0] ? locales[1] : locales[0];
    i18n.changeLanguage(nextLang);
  };

  const setHtmlAttributes = (lang: string) => {
    document.documentElement.lang = lang;
  };

  // Sync once when the hook mounts (for detected language)
  if (typeof window !== "undefined") {
    setHtmlAttributes(currentLang);
  }

  return {
    currentLang,
    toggleLanguage,
    changeLanguage: i18n.changeLanguage,
  };
}
