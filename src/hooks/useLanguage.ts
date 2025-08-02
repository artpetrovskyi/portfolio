import { locales } from "@/lib/i18n/config";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export function useLanguage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as (typeof locales)[number];

  const toggleLanguage = () => {
    const nextLang = currentLang === locales[0] ? locales[1] : locales[0];
    i18n.changeLanguage(nextLang);
  };

  // Set <html lang="">
  useEffect(() => {
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  // Set document title based on language
  useEffect(() => {
    document.title = t("common.pageTitle", { defaultValue: "My Portfolio" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLang]);

  return {
    currentLang,
    toggleLanguage,
    changeLanguage: i18n.changeLanguage,
  };
}
