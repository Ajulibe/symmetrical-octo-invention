import { useRef, useState, useEffect, memo } from "react";
import { Greybackgroud } from "./style";
import Image from "next/image";
import dynamic from "next/dynamic";
import { CarouselContent } from "@src/assets/images";

const TestimonialCarousel = dynamic<Record<string, never>>(
  () => import("./carousel").then((mod) => mod.TestimonialCarousel),
  {
    ssr: false
  }
);

export const CarouselSection = memo(() => {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [startAnim, setStartAnim] = useState(false);
  const index = useRef(0);
  const isMounted = useRef<boolean>(false);

  useEffect(() => {
    let id: ReturnType<typeof requestAnimationFrame>;
    const intervalId = setInterval(() => {
      id = requestAnimationFrame(animate);
    }, 5000);
    return () => {
      clearInterval(intervalId);
      cancelAnimationFrame(id);
    };
  }, []);

  const animate = () => {
    if (index.current === CarouselContent.length - 1) {
      index.current = 0;
    } else {
      index.current = index.current + 1;
    }
    setImageIndex(index.current);
  };

  useEffect(() => {
    let myTimeout: ReturnType<typeof setTimeout>;
    if (isMounted.current) {
      setStartAnim(true);
      myTimeout = setTimeout(() => {
        setStartAnim(false);
      }, 2500);
    }
    isMounted.current = true;
    return () => clearTimeout(myTimeout);
  }, [imageIndex]);

  return (
    <Greybackgroud startAnim={startAnim}>
      <div className="bg">
        <div className="bg__next">
          <Image
            src={CarouselContent[imageIndex].image}
            alt="fullimage"
            width="1700"
            height="2000"
            objectFit="cover"
            priority={true}
            quality={20}
          />
        </div>
      </div>
      <TestimonialCarousel />
    </Greybackgroud>
  );
});
CarouselSection.displayName = "CarouselSection";
