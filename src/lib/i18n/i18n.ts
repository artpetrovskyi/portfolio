import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import i18nConfig from "./config";

i18next
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .init(i18nConfig);
// initialized and ready to go!
// i18next is already initialized, because the translation resources where passed via init function
