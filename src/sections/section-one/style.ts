import { FONTS } from "@styles/fonts"
import styled, { keyframes } from "styled-components"

interface Props {
  bgColor?: string
}

const glow = keyframes`
    0%{background-position:10% 0%}
    50%{background-position:91% 100%}
    100%{background-position:10% 0%}
`
const fadeIn = keyframes`
0% {
    opacity: 0
}

100% {
    opacity: 1
}
`

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
      color: #1d1d1f;
      transform: rotate(90deg);
      transform-origin: left bottom;
      position: relative;
      top: -28px;
      height: 26px;
      width: 248.22px;
      align-items: center;
      justify-content: center;

      &::after {
        content: "";
        width: 9.6rem;
        height: 1px;
        background: hsla(240, 3%, 12%, 1);
      }
    }

    &__right-section-bold {
      font-family: ${FONTS.didactic};
      width: 54.1rem;
      font-size: 8rem;
      line-height: 10.5rem;
      color: #fff;
      position: relative;
      left: -113px;
      background: linear-gradient(
        to right,
        hsl(98 100% 62%),
        hsl(204 100% 59%)
      );
      animation: ${glow} 0.42s ease-in infinite;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: ${fadeIn} 2s cubic-bezier(0.65, 0, 0.35, 1) forwards;

      & > div {
        font-family: ${FONTS.raleway};
        font-style: normal;
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 1.6rem;
        color: rgba(29, 29, 31, 0.6);
        margin-top: 19px;
      }
    }

    &__right-section-light {
      display: flex;
      & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 19.23px;
      }
    }

    &__left-section {
      width: 49rem;
      font-size: 1.6rem;
      line-height: 3rem;
      color: #fff;
      font-family: ${FONTS.raleway};

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
`
