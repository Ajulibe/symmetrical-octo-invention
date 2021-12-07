/* eslint-disable @typescript-eslint/indent */
import { FONTS } from "@styles/fonts";
import styled, { keyframes, css } from "styled-components";

interface Props {
  bgColor?: string;
  inView?: boolean;
}

const blink = keyframes`
    0%{transform: scale(1); opacity: 0.04};
    50%{transform: scale(10); opacity: 0.01};
    100%{transform: scale(20); opacity: 0}
`;

const BgColorfadeIn = keyframes`
from {
  opacity: 0.4;
}
to {
  background: linear-gradient(
        to right,
        hsl(98 100% 62%),
        hsl(204 100% 59%)
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      opacity: 1;
}
`;

const moveInfadeIn = keyframes`
0% {
  opacity: 0;
    transform: translateY(100px);
}

100% {
    opacity: 1;
    transform: translateY(0);

}
`;

const moveInRightfadeIn = keyframes`
0% {
  opacity: 0;
  transform: translateY(100px);
}

100% {
    opacity: 1;
    transform: translateY(0);

}
`;
const growWidth = keyframes`
0% {
  width: 0;
  opacity: 0;
}

100% {
  width: 8rem;
  opacity: 1;
}
`;

const fadeIn = keyframes`
0% {
  opacity: 0;

}

100% {
    opacity: 1;

}
`;

export const Container = styled.main<Props>`
  margin-top: 10.9rem;

  .main {
    display: flex;
    justify-content: space-between;

    &__right-section {
      display: flex;
      margin-right: min(10vw, 12.9rem);
    }

    &__inverted-section {
      display: flex;
      font-family: ${FONTS.didactic};
      font-size: 2rem;
      line-height: 2.6rem;
      color: #fff;
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
        ${({ inView }) =>
          inView &&
          css`
            animation: ${moveInRightfadeIn} 1s cubic-bezier(0.65, 0, 0.35, 1) forwards;
          `};
      }

      &::after {
        content: "";
        height: 1px;
        background: #fff;
        ${({ inView }) =>
          inView &&
          css`
            animation: ${growWidth} 1.4s ease-in forwards 0.2s;
          `};
      }
    }

    &__right-section-bold {
      font-family: ${FONTS.didactic};
      width: 54.1rem;
      font-size: 8rem;
      color: #fff;
      position: relative;
      left: -113px;
      animation: ${BgColorfadeIn} 1s ease-in 2s forwards;

      & > div:not(:first-child) {
        font-family: ${FONTS.raleway};
        font-style: normal;
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 1.6rem;
        color: rgba(29, 29, 31, 0.6);
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
              animation: ${moveInfadeIn} 0.5s cubic-bezier(0.65, 0, 0.35, 1);
            }
          }

          &:last-child {
            margin-top: 10px;
            p:last-child {
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
        animation: ${blink} 10s 10s ease-in infinite; //removed due to performance
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
        color: #fff;
        animation: ${fadeIn} 1.4s ease-in;
      }
    }

    &__left-section {
      width: 49rem;
      font-size: 1.6rem;
      line-height: 3rem;
      color: #fff;
      font-family: ${FONTS.raleway};
      padding-top: 20px;
      animation: ${fadeIn} 0.9s ease-in 0.3s forwards;
      opacity: 0;

      button,
      button:active,
      button:focus {
        width: 224px;
        height: 68px;
        font-family: ${FONTS.raleway};
        font-size: 16px;
        line-height: 19px;
        color: #1d1d1f;
        background-color: #fff;
        position: relative;
        overflow: hidden;
        outline: none;
        box-shadow: none;
        margin-top: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid hsla(240, 3%, 12%, 1);

        span {
          z-index: 3;
          position: relative;
        }
      }

      &-btnAnimation {
        background-color: #1d1d1f;
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
        color: #fff;
        .main__left-section-btnAnimation {
          width: 100%;
        }
        .main__left-section-icon {
          color: #fff;
          transform: translateX(10px);
        }
      }
    }
  }
`;
