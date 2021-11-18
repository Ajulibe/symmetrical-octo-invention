import { FONTS } from "@styles/fonts"
import styled, { keyframes } from "styled-components"

interface Props {
  bgColor?: string
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

export const Greybackgroud = styled.main<Props>`
  background: hsla(0, 0%, 83%, 1);
  height: 69.6rem;
  position: relative;
  margin-top: 24rem;

  .carousel {
    width: 61.5rem;
    height: 29.8rem;
    position: absolute;
    margin-left: 14rem;
    top: -9.8rem;

    &__bg-dark {
      background: #1d1d1f;
      width: 57rem;
      height: 25.3rem;
      padding: 3.8rem 8.4rem 2.7rem 5.8rem;
      overflow: hidden;
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
      background: red;
      transition: all 0.5s 0.2s ease-in;
      left: 570px;
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

    &__btn::before {
      opacity: 0;
    }

    &__btn::after {
      background: #fff;
    }

    &__btn:hover {
      & ~ .carousel__bg-circle,
      & ~ .carousel__bg-second {
        transform: scale(20);
        opacity: 1;
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
