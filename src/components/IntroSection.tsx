import { JSX } from "react";
import LazyImg from "./LazyImg";

const IntroSection = (): JSX.Element => {
  return (
    <section className="container-padding bg-el-bg shade container-width grid-rows-[1fr_0fr] overflow-hidden transition-all duration-200 max-md:gap-y-8 md:grid-cols-[1fr_2fr] md:gap-x-3 lg:gap-x-4 xl:gap-x-5 2xl:gap-x-7">
      <div className="">
        <LazyImg
          alt={"person"}
          highResSrc={"/images/person.webp"}
          lowResSrc={"/images/placeholder/person.webp"}
          width={600}
          height={600}
          className="aspect-[3/4] object-cover md:aspect-[4/3] md:object-top"
        />
      </div>
      <div className="my-auto mr-2 text-center text-lg leading-5 font-semibold transition-all duration-200 sm:text-[1.1875rem] sm:leading-6 md:text-start md:text-xl md:leading-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        exercitationem in accusantium officiis nihil ratione distinctio magnam
        quae, saepe laboriosam minus necessitatibus beatae soluta rem dolore id
        ex ipsam reiciendis.
      </div>
    </section>
  );
};

export default IntroSection;
