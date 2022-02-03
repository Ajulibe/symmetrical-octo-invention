import { Container, ContainerCompanyCarousel } from "./style";
import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Button } from "@components/button";
import Image from "next/image";
import { useRef, useEffect } from "react";
import Typed from "typed.js";
import { useInView } from "react-intersection-observer";

export interface CompanyCarouselProps {
  setShowFooter: (state: boolean) => void;
}

export const BetterClothing = React.memo(() => {
  useEffect(() => {
    if (el.current) {
      const typed = new Typed(el.current, {
        strings: [
          "<span>go better with</span><span style='color: #23d5ab'> Clothing</span>",
          "<span>look nicer</span><span style='color: #e73c7e'> with a Style</span>",
          "<span>sound sweeter in</span><span style='color: #ee7752'> a Story</span>",
          "<span>get easier</span><span style='color:hsl(204 100% 59%)'> in Life!</span>"
        ],
        typeSpeed: 50,
        smartBackspace: true,
        loop: true,
        backSpeed: 50,
        backDelay: 1000
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  const el = useRef<HTMLDivElement>(null);
  return (
    <Container>
      <div className="main">
        <div className="main__heading">
          Things <span ref={el} className="alt-text"></span>
        </div>
        <Button title="Get Started" Icon={<MdOutlineArrowRightAlt className="icon" />} />
      </div>
    </Container>
  );
});

export const CompanyCarousel: React.FC<CompanyCarouselProps> = React.memo(({ setShowFooter }) => {
  const { ref, inView } = useInView({
    threshold: 0.4
  });

  useEffect(() => {
    if (inView) {
      setShowFooter(true);
    } else {
      setShowFooter(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <ContainerCompanyCarousel ref={ref} inView={inView}>
      <div className="carousel">
        <Image src="/carousel/firstIpsum.svg" height={36} width={157} alt="firstIpsum" />
        <Image src="/carousel/secondIpsum.svg" height={29.36} width={146.3} alt="firstIpsum" />
        <Image src="/carousel/thirdIpsum.svg" height={40.93} width={157.01} alt="firstIpsum" />
        <Image src="/carousel/fourthIpsum.svg" height={36.3} width={161.21} alt="firstIpsum" />
        <Image src="/carousel/fifthIpsum.svg" height={33.73} width={147.68} alt="firstIpsum" />
      </div>
    </ContainerCompanyCarousel>
  );
});

export interface GridProps {
  gridRef: (node?: Element | null | undefined) => void;
}

export const Grid: React.FC<GridProps> = React.memo(({ gridRef }) => {
  const products = [
    {
      image: "/softmaterial.svg",
      alt: "softmaterial",
      title: "Soft Material",
      color: "#23a6d5",
      content: "The versatile space makes it easy to keep a fresh supply of ingredients"
    },
    {
      image: "/strongdurable.svg",
      alt: "strongdurable",
      title: "Strong Durable",
      color: "#e73c7e",
      content: "The versatile space makes it easy to keep a fresh supply of ingredients"
    },
    {
      image: "/beautifulmodel.svg",
      alt: "beautifulmodel",
      title: "Beautiful Model",
      color: "#23d5ab",
      content: "The versatile space makes it easy to keep a fresh supply of ingredients"
    },
    {
      image: "/superquality.svg",
      alt: "superquality",
      title: "Super Quality",
      color: "#ee7752",
      content: "The versatile space makes it easy to keep a fresh supply of ingredients"
    }
  ];

  return (
    <div className="section__grid">
      {products.map((item, index) => {
        return (
          <div className="grid" key={`${item.alt}${index}`} ref={gridRef}>
            <div className="grid__image">
              <Image src={item.image} height={55} width={55} alt={item.alt} priority />
            </div>
            <div className="grid__title" style={{ color: item.color }}>
              <div className="anim">{item.title}</div>
            </div>
            <div className="grid__content">
              <div>{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
});
