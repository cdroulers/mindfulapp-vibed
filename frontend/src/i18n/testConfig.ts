import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "./locales/en.json";
import frTranslations from "./locales/fr.json";

const testI18n = i18next.createInstance();

void testI18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslations,
    },
    fr: {
      translation: frTranslations,
    },
  },
  lng: "en", // Set default language for tests
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  returnNull: false,
});

export default testI18n;
