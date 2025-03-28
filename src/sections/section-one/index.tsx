import { IoMdCheckmark, MdOutlineArrowRightAlt } from "@src/assets/icon";

import { Button } from "@components/button";
import { Container } from "./style";
import React from "react";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";

const CarouselSection = dynamic<Record<string, never>>(
  () => import("./components/index").then((mod) => mod.CarouselSection),
  {
    ssr: false
  }
);
export const SectionOne = React.memo(() => {
  const { ref: ref, inView } = useInView({
    threshold: 0
  });

  return (
    <Container inView={inView}>
      <div className="main">
        <div className="main__right-section">
          <div className="main__inverted-section" ref={ref}>
            <div>Style Of Culture &nbsp;&nbsp;&nbsp;&nbsp;</div>
          </div>

          <div className="main__right-section-bold">
            <div className="header">
              <div className="header-in">
                <p>A style you feel</p>
              </div>

              <div className="header-in">
                <p>comfortable in</p>
              </div>
            </div>

            <div className="main__right-section-light">
              <div className="tick">
                <IoMdCheckmark />
                &nbsp; Buy one get one
              </div>

              <div className="tick">
                <IoMdCheckmark />
                &nbsp; Free Delivery
              </div>

              <div className="tick">
                <IoMdCheckmark />
                &nbsp; Free Return
              </div>
            </div>
          </div>
        </div>

        <div className="main__left-section">
          We are a global brand of premium fashion clothing, accessories footwear, and accessories
          products that is dedicated to offering the very latest in fashion styles and styles that
          are carefully selected and designed by our exclusive and talented designers.
          <Button title="Get Started" Icon={<MdOutlineArrowRightAlt className="icon" />} />
        </div>
      </div>
      <CarouselSection />
    </Container>
  );
});
SectionOne.displayName = "section__one";
