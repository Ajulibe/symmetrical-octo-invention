import { BgColorfadeIn, fadeIn, growWidth, moveInfadeIn } from "@src/animations";
import styled, { css, keyframes } from "styled-components";

/* eslint-disable indent */
/* eslint-disable @typescript-eslint/indent */
import { FONTS } from "@src/styles/fonts";

interface Props {
  bgColor?: string;
  inView?: boolean;
}

const blink = keyframes`
    0%{transform: scale(1); opacity: 0.04};
    50%{transform: scale(10); opacity: 0.01};
    100%{transform: scale(20); opacity: 0}
`;

export const Container = styled.main<Props>`
  margin-top: 10.9rem;

  .main {
    display: flex;

    &__right-section {
      display: flex;
    }

    &__inverted-section {
      display: flex;
      font-family: ${FONTS.didactic};
      font-size: 2rem;
      line-height: 2.6rem;
      color: ${({ theme }) => theme.colors.white};
      transform: rotate(90deg);
      transform-origin: left bottom;
      position: relative;
      top: -28px;
      height: 26px;
      width: 248.22px;
      align-items: center;
      justify-content: flex-start;
      overflow: hidden;

      div {
        opacity: 0;
        will-change: opacity, transform;
        ${({ inView }) =>
          inView &&
          css`
            animation: ${moveInfadeIn} 1s cubic-bezier(0.65, 0, 0.35, 1) forwards;
          `};
      }

      &::after {
        content: "";
        height: 1px;
        background: ${({ theme }) => theme.colors.white};
        will-change: opacity, width;
        ${({ inView }) =>
          inView &&
          css`
            animation: ${growWidth} 1s cubic-bezier(0.65, 0, 0.35, 1) 0.3s forwards;
          `};
      }
    }

    &__right-section-bold {
      font-family: ${FONTS.didactic};
      font-size: 8rem;
      color: ${({ theme }) => theme.colors.white};
      position: relative;
      left: -113px;
      margin-right: auto;

      /* animation: ${BgColorfadeIn} 1s ease-in 2s forwards; */

      & > div:not(:first-child) {
        font-family: ${FONTS.raleway};
        font-style: normal;
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 1.6rem;
        color: ${({ theme }) => theme.colors.lightBlack};
        margin-top: 19px;
      }

      .header {
        z-index: 4;
        overflow: hidden;

        &-in {
          padding: 0;
          height: 8rem;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          overflow: hidden;
          &:first-child {
            p:first-child {
              will-change: opacity, transform;
              animation: ${moveInfadeIn} 0.5s cubic-bezier(0.65, 0, 0.35, 1);
            }
          }

          &:last-child {
            margin-top: 10px;
            p:last-child {
              will-change: opacity, transform;
              animation: ${moveInfadeIn} 0.9s cubic-bezier(0.65, 0, 0.35, 1);
            }
          }
        }
      }

      &::before {
        content: "";
        position: absolute;
        width: 50px;
        height: 50px;
        z-index: -1;
        background: red;
        border-radius: 50%;
        background: linear-gradient(to right, #ff3dae, hsl(204 100% 59%));
        background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: ${blink} 10s 10s ease-in infinite; //removed to performance */
        //limitations.
        opacity: 0.04;
      }
    }

    &__right-section-light {
      display: flex;
      & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 19.23px;
        color: ${({ theme }) => theme.colors.white};
        will-change: opacity, background, background-clip;
        animation: ${fadeIn} 1.4s ease-in;
      }
    }

    &__left-section {
      width: 49rem;
      font-size: 1.6rem;
      line-height: 3rem;
      color: ${({ theme }) => theme.colors.white};
      font-family: ${FONTS.raleway};
      padding-top: 20px;
      will-change: opacity, background, background-clip;
      animation: ${fadeIn} 0.9s ease-in 0.3s forwards;
      opacity: 0;
      position: relative;
      margin-left: auto;

      button,
      button:active,
      button:focus {
        width: 224px;
        height: 68px;
        font-family: ${FONTS.raleway};
        font-size: 16px;
        line-height: 19px;
        color: ${({ theme }) => theme.colors.darkGrey};
        background-color: ${({ theme }) => theme.colors.white};
        position: relative;
        overflow: hidden;
        outline: none;
        box-shadow: none;
        margin-top: 30px;
        display: flex;
        justify-content: center;
        align-items: center;

        span {
          z-index: 3;
          position: relative;
        }
      }

      &-btnAnimation {
        background-color: ${({ theme }) => theme.colors.darkGrey};
        position: absolute;
        height: 100%;
        width: 0%;
        top: 0;
        left: 0;
        transition: width 0.3s linear;
      }

      &-icon {
        font-size: 40px;
        margin-left: 20px;
        transition: width 0.3s linear;
        transition: transform 0.6s linear;
        z-index: 3;
      }

      button:hover {
        color: ${({ theme }) => theme.colors.white};
        border: 1px solid ${({ theme }) => theme.colors.darkGrey};
        .main__left-section-btnAnimation {
          width: 100%;
        }
        .main__left-section-icon {
          color: ${({ theme }) => theme.colors.white};
          transform: translateX(10px);
        }
      }
    }
  }

  @media only screen and (max-width: 1440px) {
    margin-top: 9rem;

    .main {
      &__right-section-bold {
        font-size: 7rem;
        width: 40vw;

        /* left: -80px; */

        .header {
          &-in {
            height: 7rem;
          }
        }
      }

      &__left-section {
        width: 45rem;
        font-size: 1.5rem;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    margin-top: 8rem;

    .main {
      width: 80%;
      margin: 0 auto;

      &__inverted-section {
        display: none;
      }

      &__right-section {
        margin-right: 4rem;
        justify-content: flex-start;
      }

      &__right-section-bold {
        font-size: 6rem;
        width: 42rem;
        left: 0;

        .header {
          &-in {
            height: 6rem;
          }
        }
      }

      &__left-section {
        width: 40rem;
        font-size: 1.4rem;
        /* line-height: 2.6rem; */

        button {
          width: 200px;
          height: 60px;
        }
      }
    }
  }

  @media only screen and (max-width: 840px) {
    .main {
      flex-direction: column;
      align-items: center;

      &__right-section {
        margin-right: 0;
        margin-bottom: 4rem;
      }

      &__right-section-bold {
        font-size: 5.5rem;
        width: 100%;

        .header {
          &-in {
            height: 5.5rem;
          }
        }
      }

      &__right-section-light {
        flex-wrap: wrap;

        & > div {
          margin-right: 2rem;
          margin-bottom: 1rem;
        }
      }

      &__right-section {
        margin-bottom: 20px;

        p {
          margin-left: auto;
          margin-right: auto;
        }
      }

      &__left-section {
        width: 100%;
        max-width: 54rem;
        text-align: center;
        margin-top: 0;
        margin-left: unset;

        button {
          margin: 0 auto;
          margin-top: 20px;
        }
      }
    }
  }

  @media only screen and (max-width: 640px) {
    margin-top: 6rem;

    .main {
      &__right-section-bold {
        /* font-size: 4.5rem; */

        .header {
          &-in {
            height: 4.5rem;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 480px) {
    margin-top: 5rem;

    .main {
      &__right-section-bold {
        .header {
          &-in {
            height: 6rem;
          }

          &-in:last-child {
            margin-top: 5px;
          }
        }
      }

      &__right-section-light {
        flex-direction: column;
        align-items: flex-start;

        & > div {
          margin-bottom: 1.5rem;
        }
      }

      &__left-section {
        font-size: 1.3rem;
        line-height: 2.2rem;

        button {
          width: 180px;
          height: 54px;
          font-size: 14px;
        }
      }
    }
  }
`;
