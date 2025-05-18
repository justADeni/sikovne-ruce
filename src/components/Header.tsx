import { Dispatch, JSX, SetStateAction } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import dude from "/images/dude.webp";
import placeholder from "/images/placeholder/dude.webp";
import { FaBars } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Header = ({
  showMobileNav,
  setShowMobileNav,
  scrolled
}: {
  showMobileNav: boolean;
  setShowMobileNav: Dispatch<SetStateAction<boolean>>;
  scrolled: boolean;
}): JSX.Element => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng: string): void => {
    void i18n.changeLanguage(lng);
  };

  return (
    <>
      <div
        className={`from-bg-body via-bg-body fixed top-0 right-0 left-0 bg-linear-to-b to-transparent p-2.5 transition-all duration-200 xl:p-3.5 ${showMobileNav ? "max-md:p-0" : ""}`}>
        <header
          className={`bg-bg-surface text-surface-text z-10 flex items-center justify-center overflow-hidden px-3 py-4 font-bold transition-all duration-200 md:flex-row md:rounded-md md:text-lg md:shadow-md md:shadow-black/40 lg:text-xl xl:text-2xl 2xl:text-3xl ${showMobileNav ? "h-svh flex-col text-4xl" : "flex-row rounded-md shadow-md shadow-black/40"} ${scrolled ? "h-[3.25rem] lg:h-[3.75rem] xl:h-[4.125rem] 2xl:h-[4.5625rem]" : "h-[7.5rem] lg:h-[8.625rem] 2xl:h-[9.625rem]"}`}>
          <div
            className={`group relative m-2.5 origin-center overflow-hidden rounded-full transition-all duration-200 md:inline-flex ${scrolled ? "size-0 outline-none" : "outline-surface-text size-[4.25rem] outline-4 outline-offset-5 md:size-[5.375rem] xl:size-[6.375rem]"} ${showMobileNav ? "hidden" : "inline-flex"}`}>
            <LazyLoadImage
              src={dude}
              placeholderSrc={placeholder}
              className="transition-all duration-200 group-hover:scale-105"
              wrapperClassName="lazy-wrapper group-hover:grayscale group-hover:brightness-90 duration-200 transition-all"
              alt="hello i am {name}"
              width={102}
              height={102}
              title="hello i am {name}"
            />
            <div className="group-hover:bg-surface-text/40 absolute inset-0 transition-colors duration-200" />
          </div>
          <nav
            className={`ml-auto ${showMobileNav ? "max-md:ml-0" : ""}`}
            data-mobile={showMobileNav}>
            <ul
              className={`flex items-center gap-x-2 gap-y-6 md:flex-row lg:gap-x-4 2xl:gap-x-6 ${showMobileNav ? "flex-col" : ""}`}>
              <li
                className={`hover:underline ${showMobileNav ? "max-md:underline" : "max-md:hidden"}`}>
                <a href="#pricing">see pricing</a>
              </li>
              <li
                className={`hover:underline ${showMobileNav ? "max-md:underline" : "max-md:hidden"} `}>
                <a href="#contact">contact</a>
              </li>

              <li
                className={`hover:underline ${showMobileNav ? "" : "max-md:hidden"} `}>
                <select
                  className="cursor-pointer"
                  title="language"
                  onChange={(e): void => changeLanguage(e.target.value)}
                  value={i18n.language}>
                  <option value="en">English</option>
                  <option value="fr">Français</option>
                </select>
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
