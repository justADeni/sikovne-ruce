import { JSX } from "react/jsx-runtime";

import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import IDKNameSection from "./components/IDKNameSection";
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
      <section className="bg-bg-element container grid grid-cols-2 gap-x-20 rounded-md px-12 py-5 shadow-sm shadow-black/40">
        <div className="border border-black">IMAGE LOREM</div>
        <div className="border border-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          exercitationem in accusantium officiis nihil ratione distinctio magnam
          quae, saepe laboriosam minus necessitatibus beatae soluta rem dolore
          id ex ipsam reiciendis.
        </div>
      </section>
      <IDKNameSection />

      <section
        className="bg-bg-element container rounded-md px-12 py-5 shadow-sm shadow-black/40"
        id="pricing">
        price estimates (static or dynamically calculatable with use of inputs)?
      </section>
      <section
        className="bg-bg-element container m-1 inline-block h-[200svh] rounded-md p-2 px-12 py-5 shadow-sm shadow-black/40"
        id="contact">
        contact
      </section>
    </div>
  );
};

export default App;
