import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "../locales/en.json";
import trTranslations from "../locales/tr.json";

i18n.use(initReactI18next).init({
  lng: "en",
  resources: {
    en: {
      translation: enTranslations,
    },
    tr: {
      translation: trTranslations,
    },
  },
});

export default i18n;
