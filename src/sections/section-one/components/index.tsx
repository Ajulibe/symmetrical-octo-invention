import { useRef, useState, useEffect } from "react";
import { Greybackgroud } from "./style";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";

const TestimonialCarousel = dynamic<Record<string, never>>(
  () => import("./carousel").then((mod) => mod.TestimonialCarousel),
  {
    ssr: false
  }
);

export const CarouselSection = () => {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [startAnim, setStartAnim] = useState(false);
  const index = useRef(0);
  const isMounted = useRef<boolean>(false);

  const { ref: ref, inView } = useInView({
    threshold: 0
  });

  const CarouselContent = [
    {
      image: "/section-one/6.jpg",
      details: ""
    },
    {
      image: "/section-one/3.jpg",
      details: ""
    },
    {
      image: "/section-one/4.jpg",
      details: ""
    },
    {
      image: "/section-one/5.jpg",
      details: ""
    }
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (index.current === CarouselContent.length - 1) {
        index.current = 0;
      } else {
        index.current = index.current + 1;
      }
      setImageIndex(index.current);
    }, 4000);
    return () => clearInterval(intervalId);
  }, [CarouselContent.length]);

  useEffect(() => {
    if (isMounted.current) {
      setStartAnim(true);
      setTimeout(() => {
        setStartAnim(false);
      }, 2500);
    }
    isMounted.current = true;
  }, [imageIndex]);

  const previousImage = imageIndex === 0 ? CarouselContent.length - 1 : imageIndex - 1;

  return (
    <Greybackgroud ref={ref} inView={inView} startAnim={startAnim}>
      <div className="bg">
        <div className="bg__previous">
          <Image
            src={CarouselContent[previousImage].image}
            alt="fullimage"
            width="1700"
            height="2000"
            objectFit="cover"
            priority={true}
            quality={30}
          />
        </div>
        <div className="bg__next">
          <Image
            src={CarouselContent[imageIndex].image}
            alt="fullimage"
            width="1700"
            height="2000"
            objectFit="cover"
            priority={true}
            quality={30}
          />
        </div>
      </div>
      <TestimonialCarousel />
    </Greybackgroud>
  );
};
