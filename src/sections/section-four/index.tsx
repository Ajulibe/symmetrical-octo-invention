import { Container } from "./style";
import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import dynamic from "next/dynamic";
import { CompanyCarouselProps, GridProps } from "./components";

const BetterClothing = dynamic<Record<string, never>>(
  () => import("./components").then((mod) => mod.BetterClothing),
  {
    ssr: false
  }
);

const CompanyCarousel = dynamic<CompanyCarouselProps>(
  () => import("./components").then((mod) => mod.CompanyCarousel),
  {
    ssr: false
  }
);

const Grid = dynamic<GridProps>(() => import("./components").then((mod) => mod.Grid), {
  ssr: false
});

export interface CmpFourProps {
  setShowFooter: (state: boolean) => void;
}

export const SectionFour: React.FC<CmpFourProps> = React.memo(({ setShowFooter }) => {
  const { ref: titleRef, inView } = useInView({
    threshold: 0
  });

  return (
    <Container inView={inView}>
      <div className="main">
        <div className="canvas__wrapper">
          <div className="black__canvas">
            <Image
              src="/section-one/2.webp"
              alt="fullimage"
              width="1700"
              height="2500"
              objectFit="cover"
              quality={20}
            />
          </div>
        </div>
        <div className="section">
          <div className="wrapper" ref={titleRef}>
            <div className="section__name">
              <div>FEATURES</div>
            </div>

            <div className="section__heading first">
              <div>Our vision </div>
            </div>

            <div className="section__heading">
              <div>lives on there</div>
            </div>
          </div>
          <Grid gridRef={titleRef} />
        </div>
      </div>
      <BetterClothing />
      <CompanyCarousel setShowFooter={setShowFooter} />
    </Container>
  );
});
