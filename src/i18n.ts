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
          titleLabel: "Skilled Hands",
          contactLabel: "Contact",
          priceLabel: "Pricing",
          aboutLabel: "About",
          aboutText:
            "We’re a small team that takes care of the everyday fixes that keep your home running smoothly. From assembling furniture and painting walls to repairing cracks and fixing light switches, we handle the little jobs that make a big difference. Friendly, reliable, and just a call away — we’re here to help with the tasks you don’t have time for."
        }
      },
      cz: {
        translation: {
          titleLabel: "Šikovné Ruce",
          contactLabel: "Kontakt",
          priceLabel: "Ceník",
          aboutLabel: "O nás",
          aboutText:
            "Jsme malý tým, který se stará o každodenní opravy, které udržují váš domov v dobrém stavu. Zvládáme drobné práce, které mají velký význam, od montáže nábytku a malování stěn až po opravy prasklin a vypínačů. Jsme přátelští, spolehliví a stačí zavolat - jsme tu, abychom vám pomohli s úkoly, na které nemáte čas."
        }
      }
    }
  });

export default i18n;
