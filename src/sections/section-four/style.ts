import { moveInRightfadeIn, moveInfadeIn } from "@src/animations";
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

  @media only screen and (max-width: 1378px) {
    padding: unset;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .main {
    display: flex;

    @media only screen and (max-width: 1378px) {
      justify-content: center;
    }

    @media only screen and (max-width: 1055px) {
      flex-direction: column;
      overflow-x: hidden;
      width: 100%;
      /* padding: 0 5% 0 5%; */
      align-items: center;
    }
  }

  .black__canvas {
    position: relative;
    width: 689px;
    height: 851px;
    background: ${({ theme }) => theme.colors.transparent};
    z-index: 0;
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
      background-size: cover;
      background-position: 50% 50%;
      z-index: 4;
    }

    @media only screen and (max-width: 530px) {
      height: 600px;
      img {
        opacity: 1;
      }

      &::before {
        height: 600px;
      }
    }

    @media only screen and (max-width: 439px) {
      height: fit-content;
      &::before {
        height: fit-content;
      }
    }
  }

  .canvas__wrapper {
    width: 709px;
    height: 871px;
    display: flex;
    justify-content: flex-end;
    position: relative;

    @media only screen and (max-width: 1378px) {
      width: 600px;
      height: unset;
    }

    @media only screen and (max-width: 1055px) {
      margin-bottom: 40px;
    }

    @media only screen and (max-width: 732px) {
      width: 100%;
      height: 752px;
      margin-bottom: 40px;
      overflow-y: hidden;
    }

    @media only screen and (max-width: 551px) {
      height: 600px;
    }

    @media only screen and (max-width: 439px) {
      height: fit-content;
    }
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

    @media only screen and (max-width: 1055px) {
      width: 100%;
    }

    @media only screen and (max-width: 530px) {
      height: 600px;
      width: 100%;
      left: 0;
    }

    @media only screen and (max-width: 439px) {
      height: fit-content;
    }
  }

  .section {
    display: flex;
    flex-direction: column;
    padding-left: 5.2rem;

    @media only screen and (max-width: 1378px) {
      width: 35%;
    }

    @media only screen and (max-width: 1055px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    @media only screen and (max-width: 982px) {
      width: 100%;
      padding-left: unset;
    }

    .wrapper {
      overflow: hidden;
      @media only screen and (max-width: 982px) {
      }
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

      @media only screen and (max-width: 982px) {
        font-size: 14px;
        line-height: 20px;
      }
    }

    &__heading {
      font-family: ${FONTS.didactic};
      font-size: 60px;
      line-height: 64px;
      color: ${({ theme }) => theme.colors.grey100};
      width: 356px;
      overflow: hidden;
      margin-bottom: 40px;
      div {
        opacity: 0;
        ${({ inView }) => {
          console.log(inView, "in css");
          return (
            inView &&
            css`
              opacity: 1;
              animation: ${moveInfadeIn} 1s cubic-bezier(0.65, 0, 0.35, 1);
            `
          );
        }};
      }

      & + div {
        margin-bottom: 50px;
      }

      @media only screen and (max-width: 1055px) {
        width: 100%;
        margin-bottom: 40px;
      }

      @media only screen and (max-width: 982px) {
        font-size: 35px;
        line-height: 35px;
        width: 100%;
      }
    }

    &__grid {
      display: grid;
      grid-template-columns: 231px 231px;
      grid-column-gap: 5px;
      grid-row-gap: 7px;
      grid-auto-rows: 241px;
      position: relative;
      z-index: 10;

      @media only screen and (max-width: 1055px) {
        grid-template-columns: 360px 360px;
      }

      @media only screen and (max-width: 795px) {
        grid-template-columns: 270px 270px;
      }

      @media only screen and (max-width: 982px) {
        left: unset;
      }

      @media only screen and (max-width: 590px) {
        grid-template-columns: 90%;
        grid-column-gap: unset;
        justify-content: center;
      }
    }
  }
`;
