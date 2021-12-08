import { Container } from "./style";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { BiChevronDown } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { IMAGES } from "@src/components/data/images";
import { useInView } from "react-intersection-observer";
import Typed from "typed.js";

export const SectionTwo = () => {
  const accordionData = [
    {
      header: "We Believe In Fun",
      content:
        "We strive to create a personal experience for each one of our clients who walks into our door"
    },
    {
      header: "Far With Clothing​",
      content:
        "We strive to create a personal experience for each one of our clients who walks into our door"
    },
    {
      header: "It’s Your Choice​",
      content:
        "We strive to create a personal experience for each one of our clients who walks into our door"
    },
    {
      header: "Clothing Inside You​",
      content:
        "We strive to create a personal experience for each one of our clients who walks into our door"
    }
  ];

  const { ref: titleRef, inView } = useInView({
    threshold: 0
  });
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (el.current) {
      const typed = new Typed(el.current, {
        strings: [
          "<span style='color: #23d5ab'>Story</span>",
          "<span style='color: #e73c7e'>Style</span>",
          "<span style='color: #ee7752'>Story</span>",
          "<span style='color:  hsl(204 100% 59%)'>Style</span>"
        ],
        typeSpeed: 100,
        smartBackspace: true,
        loop: true,
        backSpeed: 100,
        backDelay: 2000
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <Container inView={inView}>
      <div className="main">
        <div className="main__heading" ref={titleRef}>
          <div className="headers">
            <span>Need a little protection?</span>
          </div>

          <div className="headers">
            &nbsp;<span>Have a look at the fabulous</span>
          </div>

          <div className="headers">
            <span>zumba designs in one case</span>
          </div>
        </div>

        <div className="main__heading-link">
          <span>
            <Link href="/">
              <a>
                Learn more <MdOutlineArrowRightAlt />
              </a>
            </Link>
          </span>
        </div>

        <div className="main__accordion-wrapper">
          <div className="main__accordion">
            <span>BENEFIT</span>
            <div className="main__accordion-heading">
              <span>Every clothing Has a </span>
              <span ref={el} className="alt-text"></span>
            </div>

            {accordionData.map((item, index) => {
              return (
                <div className="main__accordion-item" key={`${index}${item}`}>
                  <span>
                    {item.header}
                    <BiChevronDown className="dropdown-icon" />
                  </span>
                  <input className="focus-tracker" readOnly />
                  <div className="main__accordion-content">
                    <div className="main__accordion-content-anim">
                      <h4>{item.content}</h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="image__wrapper">
            <div>
              {/* <ParallaxBox fadeOut={true} yOffset={-400}> */}
              <Image
                src={IMAGES["section-two"]}
                alt="fullimage"
                width="700"
                height="900"
                objectFit="cover"
              />
              {/* </ParallaxBox> */}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
