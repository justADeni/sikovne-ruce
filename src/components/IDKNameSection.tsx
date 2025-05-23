import { JSX } from "react";
import LazyImg from "./LazyImg";

const data = [
  {
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ab animi aperiam deserunt id, possimus numquam quasi ducimus esse labore maxime officia earum consequatur tempore deleniti? Nulla at fugiat neque!
            Magnam voluptatum facere repellat neque ut ad, aliquid aperiam, nihil ab quaerat laboriosam minus atque vel maxime nemo voluptas nulla id cumque pariatur aut nobis autem iste optio? Fuga, totam.
            Ratione minima placeat quo cupiditate temporibus nulla libero quasi quia cumque modi reiciendis provident, quisquam perspiciatis dignissimos incidunt eius error aliquid ab corporis rerum. Earum tempora fugit modi illo in?`,
    src: "/images/english.webp",
    lowResSrc: "/images/placeholder/english.webp",
    alt: "img fallback text"
  },
  {
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ab animi aperiam deserunt id, possimus numquam quasi ducimus esse labore maxime officia earum consequatur tempore deleniti? Nulla at fugiat neque!
            Magnam voluptatum facere repellat neque ut ad, aliquid aperiam, nihil ab quaerat laboriosam minus atque vel maxime nemo voluptas nulla id cumque pariatur aut nobis autem iste optio? Fuga, totam.
            Ratione minima placeat quo cupiditate temporibus nulla libero quasi quia cumque modi reiciendis provident, quisquam perspiciatis dignissimos incidunt eius error aliquid ab corporis rerum. Earum tempora fugit modi illo in?`,
    src: "/images/czech.webp",
    lowResSrc: "/images/placeholder/czech.webp",
    alt: "img fallback text"
  },
  {
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ab animi aperiam deserunt id, possimus numquam quasi ducimus esse labore maxime officia earum consequatur tempore deleniti? Nulla at fugiat neque!
            Magnam voluptatum facere repellat neque ut ad, aliquid aperiam, nihil ab quaerat laboriosam minus atque vel maxime nemo voluptas nulla id cumque pariatur aut nobis autem iste optio? Fuga, totam.
            Ratione minima placeat quo cupiditate temporibus nulla libero quasi quia cumque modi reiciendis provident, quisquam perspiciatis dignissimos incidunt eius error aliquid ab corporis rerum. Earum tempora fugit modi illo in?`,
    src: "/images/Untitled.webp",
    lowResSrc: "/images/placeholder/Untitled.webp",
    alt: "img fallback text"
  }
];

const IDKNameSection = (): JSX.Element => {
  return (
    <section className="space-y-6">
      {data.map((el, i): JSX.Element => {
        const reverse = i % 2 === 0;
        return (
          <div
            className="bg-bg-element container grid items-center gap-x-3 gap-y-6 rounded-md shadow-sm shadow-black/40 transition-all duration-200 max-md:grid-rows-[1fr_0fr] sm:gap-x-4 md:grid-cols-2 md:gap-x-5 md:px-8 md:py-5 lg:gap-x-6 xl:gap-x-8 2xl:gap-x-10"
            key={i}>
            <div className="group relative aspect-square overflow-hidden rounded-lg">
              <LazyImg
                alt={el.alt}
                highResSrc={el.src}
                lowResSrc={el.lowResSrc}
                width={200}
                height={200}
                className="size-full"
              />
              <div className="absolute inset-0 shadow-[inset_0rem_0rem_2.5rem_-0.75rem_rgba(0,0,0,0.3)] transition-all duration-200 group-hover:shadow-[inset_0rem_0rem_2.0625rem_-1rem_rgba(0,0,0,0.24)]" />
            </div>
            <p className={reverse ? "" : "md:-order-1"}>{el.text}</p>
          </div>
        );
      })}
    </section>
  );
};

export default IDKNameSection;
