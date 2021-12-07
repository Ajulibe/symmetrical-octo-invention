import { Container } from "./style";
import { MdLocationPin, MdMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { Button } from "@components/button";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  interface ILinks {
    src: string;
    alt: string;
  }

  const links: ILinks[] = [
    {
      src: "/facebook.svg",
      alt: "Facebook Logo"
    },
    {
      src: "/instagram.svg",
      alt: "Instagram Logo"
    },
    {
      src: "/twitter.svg",
      alt: "Twitter Logo"
    },
    {
      src: "/linkedin.svg",
      alt: "Linkedin Logo"
    }
  ];

  return (
    <Container>
      <div className="main">
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

        <div className="main__content section__three">
          <div className="section__three-icons">
            {links.map((item: ILinks) => {
              return (
                <div key={item.alt}>
                  <Link href="/">
                    <a>
                      <Image src={item.src} alt={item.alt} width={42} height={42} />
                    </a>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="section__three-message">
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod.
          </div>
        </div>

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
    </Container>
  );
};
