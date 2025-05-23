import { JSX, useEffect, useRef, useState } from "react";

interface LazyImageProps {
  lowResSrc: string;
  highResSrc: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
}

const LazyImg = ({
  lowResSrc,
  highResSrc,
  alt = "",
  className = "",
  width,
  height
}: LazyImageProps): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect((): (() => void) => {
    const currentImg = imgRef.current;
    if (!currentImg)
      return (): void => {
        return;
      };

    const observer = new IntersectionObserver(
      (entries): void => {
        entries.forEach((entry): void => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "60px", threshold: 0.1 }
    );

    observer.observe(currentImg);

    return (): void => {
      if (currentImg && observer) {
        observer.unobserve(currentImg);
      }
    };
  }, []);

  return (
    <img
      ref={imgRef}
      src={isVisible ? highResSrc : lowResSrc}
      loading="lazy"
      alt={`${alt} ${isVisible ? "" : "- lazy"}`}
      className={`${className} ${isVisible ? "" : "blur-[0.375rem]"}`}
      width={width}
      height={height}
    />
  );
};
export default LazyImg;
