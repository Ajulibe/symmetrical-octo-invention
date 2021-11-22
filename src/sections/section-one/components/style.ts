/* eslint-disable @typescript-eslint/indent */
import { FONTS } from "@styles/fonts"
import styled, { keyframes, css } from "styled-components"

interface Props {
  bgColor?: string
  loop?: boolean
  startAnim?: boolean
}

const pulse = keyframes` 0% {
    transform: scale(0.95);
    opacity: 0.75;
  }
  100% {
    transform: scale(1.35);
    opacity: 0;
  }`

const carousel = keyframes` 0% {
    transform: translateY(0)
  }
  
  100% { 
    transform: translateY(-230px)
  }`

const fadeIn = keyframes`
  0% {
    opacity: 0
  }

  100% { 
    opacity: 1
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

const IncreaseHeight = keyframes`
  from{
    height: 0rem;
  }

 to{ 
  height: 29.8rem;
  }
  `

const clipPath = keyframes`
0%{
  opacity: 0;
}
40%{
  opacity: 0;
  transform: scale(1.4);
}
70%{
  opacity: 1;
  /* transform: scale(1.); */
}
100% {
  transform: scale(1);
}
`

const clipCirclePath = keyframes`
0%{
  clip-path: circle(2% at 85% 32%);
  opacity: 0.6
}
100% {
  clip-path: circle(130% at 90% 32%);
  opacity: 1
}
`

const animateBg = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`

export const Greybackgroud = styled.main<Props>`
  background: hsla(0, 0%, 83%, 1);
  height: 69.6rem;
  position: relative;
  margin-top: 24rem;
  animation: ${moveInfadeIn} 0.6s ease-in;

  .bg {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;

    &__previous {
      position: absolute;
      top: 0;
      left: 0;
    }

    &__next {
      ${({ startAnim }) =>
        startAnim &&
        css`
          animation: ${clipCirclePath} 0.9s cubic-bezier(0.65, 0, 0.35, 1) 0.2s;
        `};

      img {
        ${({ startAnim }) =>
          startAnim &&
          css`
            animation: ${clipPath} 1.3s cubic-bezier(0, 0.55, 0.45, 1) forwards;
          `};
      }

      position: absolute;
      width: 100%;
      height: 100%;
    }
  }

  .carousel {
    width: 61.5rem;
    height: 29.8rem;
    position: absolute;
    margin-left: 14rem;
    top: -9.8rem;
    height: 0;
    overflow: hidden;
    animation: ${IncreaseHeight} 0.9s cubic-bezier(0.25, 1, 0.5, 1) forwards
      0.2s;

    &__bg-dark {
      background: #1d1d1f;
      width: 57rem;
      height: 25.3rem;
      background-size: cover;
      background-repeat: no-repeat;
      padding: 3.8rem 8.4rem 2.7rem 5.8rem;
      overflow: hidden;
    }

    &__bg-circle {
      width: 89px;
      height: 89px;
      border-radius: 50%;
      background: linear-gradient(
        to right,
        hsl(98 100% 62%),
        hsl(204 100% 59%)
      );
      position: relative;
      bottom: 300px;
      left: 470px;
      transition: all 0.8s ease-in;
      opacity: 1;
      z-index: 2;
    }

    &__bg-second {
      width: 57rem;
      height: 0;
      left: 480px;
      position: absolute;
      z-index: 2;
      /* background: linear-gradient(
        to right,
        hsl(98 100% 62%),
        hsl(204 100% 59%)
      ); */
      background-size: 400% 400%;
      background: linear-gradient(
        -45deg,
        #ee7752,
        #23a6d5,
        hsl(98 100% 62%),
        #23d5ab,
        hsl(204 100% 59%),
        #e73c7e
      );
      animation: ${animateBg} 15s ease infinite;
      transition: all 0.6s cubic-bezier(0, 0.55, 0.45, 1);
      border-radius: 0;
      top: 0;
      left: 0;
    }

    &__bg-dark::before,
    &__bg-dark::after {
      content: "";
      width: 57rem;
      height: 5rem;
      position: absolute;
      z-index: 2;
    }

    &__bg-dark::before {
      top: 0;
      left: 0;
      background: linear-gradient(#1d1d1f, transparent);
      z-index: 1;
    }

    &__bg-dark::after {
      height: 2rem;
      left: 0;
      bottom: 45px;
      background: linear-gradient(to top, #1d1d1f, transparent);
      z-index: 1;
    }

    &__bg-message {
      font-family: ${FONTS.raleway};
      font-size: 22px;
      line-height: 35px;
      color: rgba(255, 255, 255, 0.6);
      margin-bottom: 31px;

      &-info {
        margin-bottom: 40px;
      }
    }

    &__bg-padding {
      width: 42.8rem;
      height: 18.8rem;
      margin: 0 auto;
      animation: ${fadeIn} 0.4s ease-in;
    }

    &__bg-name {
      font-size: 22px;
      line-height: 26px;
      color: #ffffff;
    }

    &__bg-role {
      font-size: 14px;
      line-height: 16px;
      color: #ffffff;
    }

    &__btn {
      width: 89px;
      height: 89px;
      border-radius: 50%;
      background: #fff;
      position: absolute;
      top: 50%;
      right: 50%;
      transform: translate(50%, -50%);
      bottom: 5px;
      justify-content: center;
      display: flex;
      align-items: center;
      outline: none;
      border: none;
      z-index: 4;

      .icon {
        font-size: 50px;
        animation: ${fadeIn} 1s ease-in;
      }
    }

    .wrapper {
      width: 140px;
      height: 140px;
      border-radius: 50%;
      background: transparent;
      position: absolute;
      right: -10px;
      bottom: 5px;
      justify-content: center;
      display: flex;
      align-items: center;
      outline: none;
      border: none;
      z-index: 3;
      filter: drop-shadow(0 0 0.45rem rgb(255, 255, 255, 0.2));

      &:hover {
        & ~ .carousel__bg-second {
          /* animation: ${animateBg} 2s ease-in forwards; */
          height: 25.3rem;
          opacity: 1;
        }
      }
    }

    .loader {
      position: relative;
      transition: all 0.8s cubic-bezier(0.2, 0.6, 0.35, 1);
    }

    &__btn::after,
    &__btn::before {
      width: 89px;
      height: 89px;
      content: "";
      position: absolute;
      background: red;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      border-radius: 50%;
      transform: scale(1);
      z-index: -1;
    }

    &__btn::before {
      opacity: 0;
    }

    &__btn::after {
      background: #fff;
    }

    &__btn:hover {
      & ~ .carousel__bg-circle {
        transform: scale(20);
        opacity: 1;
      }

      & ~ .loader {
        opacity: 0;
      }

      &::before {
        background: yellow;
        animation: ${pulse} 1150ms infinite 150ms;
        transform: scale(1.3);
      }
    }

    &__animator {
      animation: ${carousel} 4s 0s linear infinite;
    }
  }
`
