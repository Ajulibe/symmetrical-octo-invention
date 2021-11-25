/* eslint-disable @typescript-eslint/indent */
import { FONTS } from "@styles/fonts"
import styled, { keyframes, css } from "styled-components"

interface Props {
  bgColor?: string
  inView?: boolean
  imageInView?: boolean
}

const fadeIn = keyframes`
0% {
    transform: translateY(100px)
}

100% {
    transform: translateY(0)

}
`
const underline = keyframes`
0% {
    width: 0%
}

100% {
    width: 100%

}
`
const moveInfadeIn = keyframes`
0% {
  opacity: 0;
    transform: translateY(100px);
}

100% {
    opacity: 1;
    transform: translateY(0);
}
`

const increaseWidth = keyframes`
0% {
 width: 0%;
 opacity: 0;

}

100% {
width: 100%;
opacity: 1;
}
`

export const Container = styled.main<Props>`
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15.2rem;
    padding-bottom: 15.2rem;

    &__heading {
      font-family: ${FONTS.didactic};
      font-size: 60px;
      line-height: 79px;
      text-align: center;
      color: #747e8b;
      margin-bottom: 3.9rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      overflow: hidden;
      position: relative;

      //
      /* background: linear-gradient(
        to right,
        hsl(204 100% 59%),
        RGB(255, 20, 147)
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent; */

      //animation timeline
      .headers {
        overflow: hidden;
        /* border: 1px solid red; */
      }

      .headers:nth-child(1) {
        ${({ inView }) =>
          inView &&
          css`
            animation: ${moveInfadeIn} 0.4s cubic-bezier(0.65, 0, 0.35, 1);
          `};
      }
      .headers:nth-child(2) {
        ${({ inView }) =>
          inView &&
          css`
            animation: ${moveInfadeIn} 0.6s cubic-bezier(0.65, 0, 0.35, 1);
          `};
      }
      .headers:nth-child(3) {
        ${({ inView }) =>
          inView &&
          css`
            animation: ${moveInfadeIn} 0.9s cubic-bezier(0.65, 0, 0.35, 1);
          `};
      }

      &-link {
        font-family: ${FONTS.raleway};
        font-size: 20px;
        line-height: 23px;
        color: #747e8b;
        display: flex;
        flex-direction: column;
        ${({ inView }) =>
          inView &&
          css`
            animation: ${moveInfadeIn} 1.4s cubic-bezier(0.65, 0, 0.35, 1);
          `};

        a {
          display: flex;
          align-items: center;

          svg {
            margin-left: 2rem;
          }
        }

        &:hover {
          &::after {
            animation: ${underline} 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955)
              forwards;
          }
        }
      }

      &-link::after {
        content: " ";
        width: 0%;
        height: 4px;
        top: 0;
        left: 0;
        background-color: #747e8b;
        margin-top: 2rem;
      }
    }

    &__accordion-wrapper {
      display: flex;
      margin-top: 150px;
      justify-content: space-between;
    }

    &__accordion {
      background: #fff;
      padding: 5.7rem 5rem;
      max-height: 75rem;
      width: 46.1rem;
      border: 2px solid black;
      margin-top: 86px;
      position: relative;
      z-index: 5;
      left: 10px;

      span {
        font-family: ${FONTS.raleway};
        font-size: 20px;
        line-height: 26px;
        color: #1d1d1f;
      }

      &-heading {
        margin-bottom: 38px;
        span {
          font-family: ${FONTS.didactic};
          font-size: 60px;
          line-height: 78px;
          color: #1d1d1f;
        }
        /* .alt-text {
          color: #23d5ab;
        } */
        /* span:last-child {
          color: #23d5ab;
        } */
      }

      &-item {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        position: relative;
        margin-bottom: 2px;
        overflow: hidden;
        /* ${({ imageInView }) =>
          imageInView &&
          css`
            animation: ${increaseWidth} 0.6s linear forwards;
          `}; */

        span {
          color: #ffffff;
          font-family: ${FONTS.raleway};
          background-color: #1d1d1f;
          padding: 23.5px 33.34px;
          width: 100%;
          font-size: 15px;
          line-height: 18px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          svg {
            margin-left: auto;
            font-size: 20px;
            transition: all 0.2s ease-in;
          }
        }
      }

      /* &-item:nth-child(3) {
        animation-delay: 0.2s;
      } */

      &-content {
        background-color: #fff;
        padding: 0px 33.34px;
        font-family: ${FONTS.raleway};
        font-size: 14px;
        line-height: 25px;
        color: rgba(29, 29, 31, 0.6);
        height: 0;
        transition: all 0.4s ease-in;
        overflow: hidden;
      }

      .focus-tracker {
        position: absolute;
        caret-color: #fff;
        background-color: transparent;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        outline: none;
        border: none;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }

  .main__accordion-item:focus-within {
    .dropdown-icon {
      transform: rotate(-180deg);
    }
    .main__accordion-content {
      height: auto;
      padding: 23.5px 33.34px;
      &-anim h4 {
        animation: ${fadeIn} 0.6s cubic-bezier(0.65, 0, 0.35, 1);
      }
    }
  }

  .image__wrapper {
    width: 725px;
    height: 921px;
    position: relative;
    overflow: hidden;

    & > div {
      width: 695px;
      height: 894px;
      background: brown;
      position: relative;
      overflow: hidden;
      left: -10px;
    }
  }

  .image__wrapper::after {
    content: "";
    width: 695px;
    height: 894px;
    background: #1d1d1f;
    position: absolute;
    top: 31px;
    right: 1px;
    z-index: -1;
  }
`
