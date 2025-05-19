import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions
} from "@headlessui/react";
import englishFlag from "/images/english.webp";
import czechFlag from "/images/czech.webp";
import { useTranslation } from "react-i18next";
import { JSX, useState } from "react";
const languages = [
  { lang: "cz", icon: czechFlag },
  { lang: "en", icon: englishFlag }
];
const LanguageDropdown = (): JSX.Element => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const changeLanguage = (flagLang: { lang: string; icon: string }): void => {
    void i18n.changeLanguage(flagLang.lang);
    setSelectedLanguage(
      languages.find((l): boolean => l.lang === flagLang.lang)
    );
  };
  return (
    <Listbox value={selectedLanguage} onChange={changeLanguage}>
      <div className="relative">
        <ListboxButton className="bg-primary text-emphasis cursor-pointer overflow-hidden rounded-md shadow-md shadow-black/40 transition-all duration-200 outline-none hover:-translate-y-1 hover:shadow-sm active:-translate-y-0.5">
          <img
            className="aspect-3/2 h-auto w-[2.5rem]"
            src={selectedLanguage?.icon}
            alt={selectedLanguage?.lang}
          />
        </ListboxButton>
        <ListboxOptions className="absolute top-full mt-2 w-[120px] overflow-hidden rounded-md bg-white shadow-sm shadow-black/40 max-md:left-1/2 max-md:-translate-x-1/2 md:right-0">
          {languages.map(
            (flagLang, idx): JSX.Element => (
              <ListboxOption
                key={idx}
                value={flagLang}
                className={`flex cursor-pointer flex-row items-center gap-x-2 p-2 text-black uppercase hover:bg-blue-500 hover:text-white`}>
                <img
                  className="aspect-3/2 h-auto w-[2.5rem]"
                  src={flagLang.icon}
                  alt={flagLang.lang}
                />
                {flagLang.lang}
              </ListboxOption>
            )
          )}
        </ListboxOptions>
      </div>
    </Listbox>
  );
};

export default LanguageDropdown;
