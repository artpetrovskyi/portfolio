import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import i18nConfig from "./config";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init(i18nConfig);
// initialized and ready to go!
// i18next is already initialized, because the translation resources where passed via init function
