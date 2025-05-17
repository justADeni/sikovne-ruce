import { useTranslation } from "react-i18next";
import { JSX } from "react/jsx-runtime";
import { LazyLoadImage } from "react-lazy-load-image-component";
import dude from "/images/dude.webp";
import placeholder from "/images/placeholder/dude.webp";
import { FaBars } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const App = (): JSX.Element => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string): void => {
    void i18n.changeLanguage(lng);
  };
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);
  useEffect((): (() => void) => {
    const handleScroll = (): void => {
      const currentY = window.scrollY;
      const goingDown = currentY > lastScrollY.current;
      if (goingDown && currentY > 100 && !scrolled) {
        setScrolled(true);
      } else if (!goingDown && currentY < 40 && scrolled) {
        setScrolled(false);
      }

      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return (): void => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);
  return (
    <div
      className={`flex flex-col xl:px-3.5 ${showMobileNav ? "" : "px-2.5"} transition-all duration-200 md:px-2.5`}>
      <div
        className={`from-bg-body via-bg-body fixed top-0 right-0 left-0 bg-linear-to-b to-transparent xl:p-3.5 ${showMobileNav ? "" : "p-2.5"} transition-all duration-200 md:p-2.5`}>
        <header
          className={`bg-bg-surface text-surface-text overflow-hidden ${showMobileNav ? "h-svh flex-col text-4xl" : "flex-row rounded-md shadow-md shadow-black/40"} z-10 flex items-center justify-center px-3 py-4 font-bold transition-all duration-200 md:flex-row md:rounded-md md:text-lg md:shadow-md md:shadow-black/40 lg:text-xl xl:text-2xl 2xl:text-3xl ${scrolled ? "h-[3.25rem] lg:h-[3.75rem] xl:h-[4.125rem] 2xl:h-[4.5625rem]" : "md:h-[7.5rem] lg:h-[8.625rem] 2xl:h-[9.625rem]"}`}>
          <div
            className={`group relative m-2.5 md:inline-flex ${scrolled ? "size-0 outline-none" : "outline-surface-text size-[4.25rem] outline-4 outline-offset-5 md:size-[5.375rem] xl:size-[6.375rem]"} ${showMobileNav ? "hidden" : "inline-flex"} origin-center overflow-hidden rounded-full transition-all duration-200`}>
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
            className={`md:ml-auto ${showMobileNav ? "" : "ml-auto"}`}
            data-mobile={showMobileNav}>
            <ul
              className={`flex gap-y-6 md:flex-row ${showMobileNav ? "flex-col" : ""} items-center gap-x-2 lg:gap-x-4 2xl:gap-x-6`}>
              <li
                className={`hover:underline ${showMobileNav ? "" : "hidden"} md:inline`}>
                <a href="#pricing">see pricing</a>
              </li>
              <li
                className={`hover:underline ${showMobileNav ? "" : "hidden"} md:inline`}>
                <a href="#contact">contact</a>
              </li>

              <li
                className={`hover:underline ${showMobileNav ? "" : "hidden"} md:inline`}>
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
                className={`cursor-pointer text-4xl md:hidden ${
                  showMobileNav
                    ? "transition-all duration-200 max-md:fixed max-md:top-[3.25rem] max-md:right-[2.375rem]"
                    : `max-md:absolute ${scrolled ? "max-md:top-[1.15rem]" : "max-md:top-[3.25rem]"} max-md:right-[1.75rem]`
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
      <section className="m-1 inline-block border p-2">introduction</section>
      <section className="m-1 inline-block border p-2">
        <div className="bg-accent">photo desc</div>
        <div className="bg-primary">desc photo</div>
      </section>
      <section className="m-1 inline-block border p-2" id="pricing">
        price estimates (static or dynamically calculatable with use of inputs)?
      </section>
      <section className="m-1 inline-block h-[200svh] border p-2" id="contact">
        contact
      </section>

      <h1>{t("welcome")}</h1>
      <p>{t("description")}</p>
    </div>
  );
};

export default App;
