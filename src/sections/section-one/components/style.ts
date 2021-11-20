/* eslint-disable @typescript-eslint/indent */
import { FONTS } from "@styles/fonts"
import styled, { keyframes, css } from "styled-components"

interface Props {
  bgColor?: string
  loop?: boolean
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

const fadeOut = keyframes`
0% {
  opacity: 1
}

100% { 
  opacity: 0
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

const zoomOut = keyframes`
from{
  transform: scale(1.6);
}

to{ 
  transform: scale(1);
}
`
const imageSwipe = keyframes`
from{
  transform: scale(1.6);
}

to{ 
  transform: scale(1);
}
`

const scaleImage = keyframes`
100%{
  transform: scale(8) translateX(-30px)
}
`

const secondImage = keyframes`
0%{
  opacity: 0;
  transform: scale(3);
}

100% {
  opacity: 1;
  transform: scale(1);
}
`

const secondImageIn = keyframes`
 to{transform: scale(0.8) translateY(10px);
          width: 100%}
`

export const Greybackgroud = styled.main<Props>`
  background: hsla(0, 0%, 83%, 1);
  height: 69.6rem;
  position: relative;
  margin-top: 24rem;
  animation: ${moveInfadeIn} 0.9s ease-in;

  .carousel {
    width: 61.5rem;
    height: 29.8rem;
    position: absolute;
    margin-left: 14rem;
    top: -9.8rem;
    height: 0;
    /* overflow: hidden; */
    animation: ${IncreaseHeight} 0.7s ease-in forwards 0.2s;

    &__bg-dark {
      background: #1d1d1f;
      width: 57rem;
      height: 25.3rem;
      /* background: url("https://res.cloudinary.com/ajulibe/image/upload/v1630596866/ROMI/joanna-nix-walkup-GfqwtN5heR8-unsplash_fs3w9w.jpg"); */
      background-size: cover;
      background-repeat: no-repeat;
      padding: ${({ loop }) => (loop ? "3.8rem 8.4rem 2.7rem 5.8rem" : 0)};
      /* padding: 3.8rem 8.4rem 2.7rem 5.8rem; */
      overflow: hidden;
      /* border: 1px solid red; */
      /* animation: ${zoomOut} 0.7s ease-in forwards; */

      &__image {
        /* transform-origin: bottom middle; */
        width: 100%;
        height: 100%;
        opacity: 0;
        /* opacity: 0; */
        /* transform: scale(2); */
        /* animation: ${imageSwipe} 0.5s ease-in 0.4s forwards; */
        /* transition: all 1s linear 0.2s; */
      }
    }

    &__bg-circle,
    &__bg-second {
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
      opacity: 0;
      z-index: 2;
    }

    &__bg-second {
      left: 480px;
      overflow: hidden;
      background-color: transparent;
      background: unset;
      transform: scale(0);

      opacity: 1;
      ${({ loop }) =>
        loop === false
          ? css`
              animation: ${scaleImage} 0.6s cubic-bezier(0.2, 0.6, 0.35, 1)
                forwards;
            `
          : css`
              animation: ${fadeOut} 0.2s cubic-bezier(0.2, 0.6, 0.35, 1)
                forwards;
            `}
      &_in {
        transform: scale(7);
        top: -43.5rem;
        ${({ loop }) =>
          loop === false
            ? css`
                animation: ${secondImageIn} 0.8s cubic-bezier(0.2, 0.6, 0.35, 1)
                  0.1s forwards;
              `
            : css`
                animation: ${fadeOut} 0.2s cubic-bezier(0.2, 0.6, 0.35, 1)
                  forwards;
              `}

        transition: all 0.8s cubic-bezier(0.2, 0.6, 0.35, 1) 0.1s;
      }
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
      right: 0;
      bottom: 5px;
      justify-content: center;
      display: flex;
      align-items: center;
      outline: none;
      border: none;
      z-index: 3;

      .icon {
        font-size: 50px;
        animation: ${fadeIn} 1s ease-in;
      }
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

    &__div {
      width: 20rem;
      height: 100rem;
      position: absolute;
      top: 50rem;
      ${({ loop }) =>
        loop
          ? css`
              background: red;
            `
          : css`
              background: blue;
            `}
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

      /* & ~ .carousel__bg-second {
        animation: ${scaleImage} 0.6s cubic-bezier(0.2, 0.6, 0.35, 1) forwards;
        .carousel__bg-second_in {
          animation: ${secondImageIn} 0.8s cubic-bezier(0.2, 0.6, 0.35, 1) 0.1s
            forwards;
        }
      } */

      /* & ~ .carousel__animator {
        .carousel__bg-dark__image {
          animation: ${secondImage} 0.5s cubic-bezier(0.2, 0.6, 0.35, 1)
            forwards;
        }
      } */
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
