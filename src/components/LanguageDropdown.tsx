import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions
} from "@headlessui/react";
import { useTranslation } from "react-i18next";
import { JSX, useState } from "react";
import LazyImg from "./LazyImg";
const languages = [
  {
    lang: "cz",
    icon: "/images/czech.webp",
    lowResIcon: "/images/placeholder/czech.webp"
  },
  {
    lang: "en",
    icon: "/images/english.webp",
    lowResIcon: "/images/placeholder/english.webp"
  }
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
      <div className="relative flex items-center justify-center">
        <ListboxButton className="bg-primary shade border-accent text-emphasis cursor-pointer overflow-hidden rounded-md border transition-all duration-200 outline-none hover:scale-105 active:-translate-y-0.5 active:scale-105">
          <img
            className="aspect-3/2 h-auto w-[2.5rem]"
            src={selectedLanguage?.icon}
            alt={selectedLanguage?.lang}
          />
        </ListboxButton>
        <ListboxOptions className="bg-el-bg text-text shade absolute top-full mt-2 w-[120px] overflow-hidden rounded-md max-md:left-1/2 max-md:-translate-x-1/2 md:right-0">
          {languages.map(
            (flagLang, idx): JSX.Element => (
              <ListboxOption
                key={idx}
                value={flagLang}
                className={`hover:bg-secondary transition-color hover:text-el-bg flex cursor-pointer flex-row items-center gap-x-2 p-2 uppercase duration-200`}>
                <LazyImg
                  highResSrc={flagLang.icon}
                  alt={flagLang.lang}
                  lowResSrc={flagLang.lowResIcon}
                  width={40}
                  height={27}
                  className="aspect-3/2 h-auto w-[2.5rem]"
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
