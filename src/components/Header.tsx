import UntitledImage from "/images/Untitled.webp";
import { Dispatch, JSX, SetStateAction } from "react";
import { FaBars } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import LanguageDropdown from "./LanguageDropdown";

const Header = ({
  showMobileNav,
  setShowMobileNav,
  scrolled
}: {
  showMobileNav: boolean;
  setShowMobileNav: Dispatch<SetStateAction<boolean>>;
  scrolled: boolean;
}): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <div
        className={`from-body-bg via-body-bg fixed top-0 right-0 left-0 z-10 bg-linear-to-b to-transparent p-2.5 transition-all duration-200 xl:p-3.5 ${showMobileNav ? "max-md:p-0" : ""}`}>
        <header
          className={`text-el-bg md:shade bg-accent flex items-center justify-center px-3 py-4 font-bold transition-all duration-200 md:flex-row md:rounded-md md:text-lg lg:text-xl xl:text-2xl ${showMobileNav ? "flex-col text-4xl max-md:h-svh" : "shade flex-row rounded-md"} ${scrolled ? "h-[3.25rem] lg:h-[3.75rem] xl:h-[4.125rem] 2xl:h-[4.5625rem]" : "h-[7.5rem] lg:h-[8.625rem] 2xl:h-[9.625rem]"}`}>
          <div
            className={`traal flex h-full items-center duration-200 ${scrolled ? "gap-x-0" : "gap-x-6"} ${showMobileNav ? "max-md:hidden" : ""}`}>
            <div
              className={`aspect-square h-full w-auto overflow-hidden rounded-lg transition-all duration-200 ${scrolled ? "opacity-0" : "opacity-100"}`}>
              <img src={UntitledImage} alt="logo" />
            </div>
            <h1 className="text-2xl uppercase lg:text-3xl 2xl:text-4xl">
              {t("titleLabel")}
            </h1>
          </div>
          <nav
            className={`ml-auto ${showMobileNav ? "max-md:ml-0" : ""}`}
            data-mobile={showMobileNav}>
            <ul
              className={`flex items-center gap-x-2 gap-y-6 md:flex-row lg:gap-x-4 2xl:gap-x-6 ${showMobileNav ? "flex-col" : ""}`}>
              <li className={` ${showMobileNav ? "" : "max-md:hidden"}`}>
                <a href="#pricing">{t("priceLabel")}</a>
              </li>
              <li className={` ${showMobileNav ? "" : "max-md:hidden"}`}>
                <a href="#contact">{t("contactLabel")}</a>
              </li>

              <li className={`${showMobileNav ? "" : "max-md:hidden"} `}>
                <LanguageDropdown />
              </li>
              <li
                className={`cursor-pointer text-4xl max-md:right-[1.75rem] md:hidden ${
                  showMobileNav
                    ? "transition-all duration-200 max-md:fixed max-md:top-[3.25rem] max-md:right-[2.375rem]"
                    : `max-md:absolute ${scrolled ? "max-md:top-[1.15rem]" : "max-md:top-[3.25rem]"} `
                }`}
                onClick={(): void => {
                  setShowMobileNav((mn: boolean): boolean => !mn);
                }}>
                <FaBars />
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <div
        className={`${scrolled ? "pt-[4.5rem] lg:pt-[5rem] xl:pt-[5.375rem] 2xl:pt-[5.8125rem]" : "pt-[8.75rem] lg:pt-[9.875rem] 2xl:pt-[10.975rem]"}`}
      />
    </>
  );
};

export default Header;
