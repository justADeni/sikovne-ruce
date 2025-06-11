import { JSX } from "react/jsx-runtime";

import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import PricingSection from "./components/PricingSection";
import IntroSection from "./components/IntroSection";
import ContactSection from "./components/ContactSection";
const App = (): JSX.Element => {
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
      <div className="space-y-6 py-6 md:space-y-8 lg:space-y-10 xl:space-y-12 2xl:space-y-14">
        <IntroSection />
        <AboutSection />
        <PricingSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default App;
