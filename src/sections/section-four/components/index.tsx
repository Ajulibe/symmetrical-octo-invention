import {
  ChromeIcon,
  CodeSandboxIcon,
  DribbbleIcon,
  PianoIcon,
  TrainFrontIcon
} from "./social-icons";
/* eslint-disable @typescript-eslint/indent */
import { Container, ContainerCompanyCarousel } from "./style";
import { Expand, fadeIn, moveInfadeIn } from "@src/animations";
import React, { Component, forwardRef } from "react";
import styled, { css } from "styled-components";
import { useEffect, useRef } from "react";

import { Button } from "@components/button";
import { FONTS } from "@src/styles/fonts";
import Image from "next/image";
import { MdOutlineArrowRightAlt } from "react-icons/md";
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
        <ChromeIcon />
        <CodeSandboxIcon />
        <PianoIcon />
        <TrainFrontIcon />
        <DribbbleIcon />
      </div>
    </ContainerCompanyCarousel>
  );
});

export interface GridProps {
  gridRef?: (node?: Element | null | undefined) => void;
}

export const Grid: React.FC<GridProps> = React.memo(() => {
  const { ref, inView } = useInView({
    threshold: 0
  });

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
    <GridWrapper inView={inView} ref={ref}>
      <div className="section__grid">
        {products.map((item, index) => {
          return (
            <div className="grid" key={`${item.alt}${index}`}>
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
    </GridWrapper>
  );
});

Grid.displayName = "Grid";

interface Props {
  inView?: boolean;
}
const GridWrapper = styled.div<Props>`
  transition: all 2s cubic-bezier(0.22, 1, 0.36, 1);
  opacity: 0;
  left: -136px;
  position: relative;
  width: fit-content;

  @media only screen and (max-width: 1055px) {
    left: unset;
  }

  @media only screen and (max-width: 530px) {
    grid-template-columns: 100%;
    grid-column-gap: unset;
  }

  ${({ inView }) =>
    inView &&
    css`
      background-color: ${({ theme }) => theme.colors.black};
      opacity: 1;
    `}

  .grid {
    display: flex;
    flex-direction: column;
    padding: 23px 24px 19px 24px;
    border: 2px solid #1d1d1f;
    transition: all 0.3s ease-in;
    background-color: ${({ theme }) => theme.colors.black};
    filter: blur(40);
    transform-origin: top left;
    ${({ inView }) =>
      inView &&
      css`
        animation: ${Expand} 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
      `};

    &__title {
      .anim {
        opacity: 0;
        height: 23px;
        ${({ inView }) =>
          inView &&
          css`
            animation: ${moveInfadeIn} 1s cubic-bezier(0.65, 0, 0.35, 1) forwards;
          `};
      }
    }

    &__content {
      overflow: hidden;
      div {
        opacity: 0;
        ${({ inView }) =>
          inView &&
          css`
            animation: ${moveInfadeIn} 1s cubic-bezier(0.65, 0, 0.35, 1) forwards;
          `};
      }
    }

    &:first-child {
      animation-delay: 0s;
      opacity: 0;
      .grid__title {
        .anim {
          animation-delay: 0s;
        }
      }

      .grid__content {
        div {
          animation-delay: 0.1s;
        }
      }
    }

    &:nth-child(2) {
      animation-delay: 0.2s;
      opacity: 0;
      .grid__title {
        .anim {
          animation-delay: 0.2s;
        }
      }

      .grid__content {
        div {
          animation-delay: 0.3s;
        }
      }
    }
    &:nth-child(3) {
      animation-delay: 0.5s;
      opacity: 0;
      .grid__title {
        .anim {
          animation-delay: 0.5s;
        }
      }

      .grid__content {
        div {
          animation-delay: 0.6s;
        }
      }
    }

    &:nth-child(4) {
      animation-delay: 0.6s;
      opacity: 0;
      .grid__title {
        .anim {
          animation-delay: 0.6s;
        }
      }

      .grid__content {
        div {
          animation-delay: 0.7s;
        }
      }
    }

    &__image {
      width: 60px;
      height: 60px;
      background: ${({ theme }) => theme.colors.darkGrey};
      margin-bottom: 21.5px;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      transition: all 1s ease-in-out;

      ${({ inView }) =>
        inView &&
        css`
          animation: ${fadeIn} 1s cubic-bezier(0.65, 0, 0.35, 1) forwards 0.4s;
        `};

      &:first-child {
        animation-delay: 0.4s;
        opacity: 0;
      }

      &:nth-child(2) {
        animation-delay: 0.6s;
        opacity: 0;
      }
      &:nth-child(3) {
        animation-delay: 0.8s;
        opacity: 0;
      }

      &:nth-child(4) {
        animation-delay: 1s;
        opacity: 0;
      }
    }

    &__title {
      font-family: ${FONTS.didactic};
      font-size: 20px;
      line-height: 23px;
      color: ${({ theme }) => theme.colors.darkGrey};
      margin-bottom: 17px;
      transition: all 0.3s ease-in;
      overflow: hidden;
    }

    &__content {
      font-family: ${FONTS.raleway};
      font-size: 14px;
      line-height: 25px;
      color: ${({ theme }) => theme.colors.white};
      transition: all 0.3s ease-in;
    }

    &:hover {
      background: ${({ theme }) => theme.colors.darkGrey};
      border: 2px solid ${({ theme }) => theme.colors.white};
      .grid__title {
        color: ${({ theme }) => theme.colors.white};
      }
      .grid__content {
        color: ${({ theme }) => theme.colors.white};
      }
    }

    @media only screen and (max-width: 590px) {
      width: 100%;
      display: flex;
    }
  }
`;
