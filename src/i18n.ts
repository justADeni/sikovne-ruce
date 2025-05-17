import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false
    },
    resources: {
      en: {
        translation: {
          welcome: "Welcome",
          description: "english text."
        }
      },
      fr: {
        translation: {
          welcome: "Bienvenue",
          description: "texte français."
        }
      }
    }
  });

export default i18n;
