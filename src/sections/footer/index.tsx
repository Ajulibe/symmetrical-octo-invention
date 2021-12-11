import { Container, Main } from "./style";
import React from "react";
import { Button } from "@components/button";
import { FaPhone, MdMail, MdLocationPin } from "./assets/icons";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";

const FooterLinks = dynamic<Record<string, never>>(
  () => import("./components").then((mod) => mod.FooterLinks),
  {
    ssr: false
  }
);
export interface FooterProps {
  showFooter: boolean;
}

export const Footer: React.FC<FooterProps> = ({ showFooter }) => {
  const { ref, inView } = useInView({
    threshold: 0
  });

  return (
    <Container style={{ display: showFooter ? "block" : "none" }}>
      <Main inView={inView}>
        <div className="main" ref={ref}>
          <div className="main__content section__one">
            <div className="section__one-title">Fabble.</div>
            <div className="section__one-message">
              lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut
            </div>
            <div className="section__one-footer">Copyright © 2021 Fabble.</div>
          </div>

          <div className="main__content section__two">
            <div className="section__two-title">Get In Touch</div>
            <div className="section__two-message">
              <MdLocationPin />
              <span>8819 Ohio St. South Gate, CA 90280</span>
            </div>
            <div className="section__two-message">
              <MdMail />
              <span>email@fabble.com</span>
            </div>
            <div className="section__two-message">
              <FaPhone />
              <span>(205) 555-0100</span>
            </div>
          </div>

          <FooterLinks />

          <div className="main__content section__four">
            <div className="section__four-title">Subscribe Newsletter</div>

            <div className="section__four-form">
              <form className="input-wrapper">
                <label htmlFor="email">Your email</label>
                <input type="text" id="email" placeholder="Enter Your Email . . ." />
                <Button title="SUBSCRIBE" />
              </form>
            </div>
          </div>
        </div>
      </Main>
    </Container>
  );
};
