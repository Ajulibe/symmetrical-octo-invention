import { Expand, fadeIn, moveInRightfadeIn, moveInfadeIn } from "@src/animations";
import styled, { css } from "styled-components";

/* eslint-disable indent */
/* eslint-disable @typescript-eslint/indent */
import { FONTS } from "@src/styles/fonts";

interface Props {
  bgColor?: string;
  inView?: boolean;
}

export const Container = styled.div<Props>`
  padding: 15rem 12rem 15rem 14rem;
  background: transparent;
  .main {
    display: flex;
  }

  .black__canvas {
    position: relative;
    width: 689px;
    height: 851px;
    background: ${({ theme }) => theme.colors.transparent};
    z-index: 3;
    overflow: hidden;
    img {
      opacity: 0;
      z-index: 5 !important;
      ${({ inView }) =>
        inView &&
        css`
          animation: ${moveInRightfadeIn} 0.5s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        `};
    }

    &::before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-image: url("section-one/6.jpg");
      background-size: cover;
      background-position: 50% 50%;
      z-index: 4;
    }
  }

  .canvas__wrapper {
    width: 709px;
    height: 871px;
    display: flex;
    justify-content: flex-end;
    position: relative;
  }

  .canvas__wrapper::before {
    content: "";
    width: 689px;
    height: 851px;
    background: ${({ theme }) => theme.colors.black};
    border: 1px solid ${({ theme }) => theme.colors.darkGrey};
    background-image: linear-gradient(to top right, #23d5ab, #ee7752);
    background-position: top left;
    position: absolute;
    bottom: 0;
    left: -20px;
    margin: 0 auto;
    background: ${({ theme }) => theme.colors.transparent};
  }

  .section {
    display: flex;
    flex-direction: column;
    padding-left: 5.2rem;

    .wrapper {
      overflow: hidden;
    }

    &__name {
      font-family: ${FONTS.didactic};
      font-size: 20px;
      line-height: 26px;
      color: ${({ theme }) => theme.colors.grey100};
      margin-bottom: 10px;
      div {
        ${({ inView }) =>
          inView &&
          css`
            animation: ${moveInfadeIn} 0.4s cubic-bezier(0.65, 0, 0.35, 1);
          `};
      }
    }

    &__heading {
      font-family: ${FONTS.didactic};
      font-size: 60px;
      line-height: 64px;
      color: ${({ theme }) => theme.colors.grey100};
      width: 356px;
      overflow: hidden;
      div {
        ${({ inView }) =>
          inView &&
          css`
            animation: ${moveInfadeIn} 0.9s cubic-bezier(0.65, 0, 0.35, 1);
          `};
      }

      & + div {
        margin-bottom: 50px;
      }
    }

    &__heading.first {
      margin-top: 10px;
      div {
        ${({ inView }) =>
          inView &&
          css`
            animation: ${moveInfadeIn} 0.6s cubic-bezier(0.65, 0, 0.35, 1);
          `};
      }
    }

    &__grid {
      display: grid;
      grid-template-columns: 231px 231px;
      grid-column-gap: 5px;
      grid-row-gap: 7px;
      grid-auto-rows: 241px;
      position: relative;
      left: -136px;
      z-index: 10;
      background-color: transparent;
      transition: all 2s cubic-bezier(0.22, 1, 0.36, 1);
      opacity: 0;
      ${({ inView }) =>
        inView &&
        css`
          background-color: ${({ theme }) => theme.colors.black};
          opacity: 1;
        `};
    }

    .grid {
      display: flex;
      flex-direction: column;
      padding: 23px 24px 19px 24px;
      border: 2px solid #1d1d1f;
      transition: all 0.3s ease-in;
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
    }
  }

  @media only screen and (max-width: 1440px) {
    padding: 12rem 6rem;

    .canvas__wrapper {
      width: 50%;
    }

    .black__canvas {
      width: 100%;
      height: auto;
    }

    .content__wrapper {
      width: 50%;
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 10rem 4rem;

    .main {
      flex-direction: column;
    }

    .canvas__wrapper {
      width: 100%;
      margin-bottom: 5rem;
    }

    .content__wrapper {
      width: 100%;

      &__heading {
        font-size: 5rem;
        line-height: 6.5rem;
      }

      &__paragraph {
        font-size: 1.6rem;
        line-height: 2.8rem;
        max-width: 100%;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 8rem 2.5rem;

    .content__wrapper {
      &__heading {
        font-size: 4rem;
        line-height: 5.2rem;
      }

      &__paragraph {
        font-size: 1.4rem;
        line-height: 2.4rem;
      }
    }
  }

  @media only screen and (max-width: 480px) {
    padding: 6rem 2rem;

    .content__wrapper {
      &__heading {
        font-size: 3.2rem;
        line-height: 4.2rem;
      }

      &__paragraph {
        font-size: 1.3rem;
        line-height: 2.2rem;
      }
    }
  }
`;
