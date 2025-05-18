import { useTranslation } from "react-i18next";
import { JSX } from "react/jsx-runtime";

import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";

const App = (): JSX.Element => {
  const { t } = useTranslation();

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
      className={`flex flex-col xl:px-3.5 ${showMobileNav ? "max-md:px-0" : ""} px-2.5 transition-all duration-200`}>
      <Header
        showMobileNav={showMobileNav}
        setShowMobileNav={setShowMobileNav}
        scrolled={scrolled}
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
