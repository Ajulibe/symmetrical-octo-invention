import { CompanyCarouselProps, GridProps } from "./components";

import { Container } from "./style";
import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";
import useScreenWidth from "@src/hooks/useScreenWidth";

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
  const { ref, inView } = useInView({
    threshold: 0
  });

  return (
    <Container inView={inView} ref={ref}>
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
          <div className="wrapper">
            <div className="section__name">
              <div>FEATURES</div>
            </div>

            <div className="section__heading">
              <div>Our vision lives on there</div>
            </div>
          </div>
          <Grid />
        </div>
      </div>
      <BetterClothing />
      <CompanyCarousel setShowFooter={setShowFooter} />
    </Container>
  );
});
