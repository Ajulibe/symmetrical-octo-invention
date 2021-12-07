/* eslint-disable indent */
/* eslint-disable @typescript-eslint/indent */
import { FONTS } from "@styles/fonts";
import styled, { keyframes, css } from "styled-components";

interface Props {
  bgColor?: string;
  inView: boolean;
  productView: boolean;
}

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

export const Container = styled.main<Props>`
  .main {
    /* background: #f6f5f2; */
    background: transparent;
    display: flex;
    flex-direction: column;
    padding: 10.1rem 14rem 9.1rem 14rem;
    text-align: center;
    .section {
      font-family: ${FONTS.didactic};
      font-size: 20px;
      line-height: 26px;
      color: #747e8b;
      overflow: hidden;

      div {
        opacity: 0;
        ${({ productView }) =>
          productView &&
          css`
            animation: ${moveInfadeIn} 0.7s cubic-bezier(0.65, 0, 0.35, 1) forwards;
          `};
      }

      &__name {
        font-family: ${FONTS.didactic};
        font-size: 60px;
        line-height: 79px;
        color: #747e8b;
        margin-bottom: 77px;
        overflow: hidden;

        div {
          opacity: 0;
          ${({ inView }) =>
            inView &&
            css`
              animation: ${moveInfadeIn} 0.6s cubic-bezier(0.65, 0, 0.35, 1) forwards;
            `};
        }
      }
    }

    .cards__wrapper {
      display: flex;

      & > :not(:last-child) {
        margin-right: 16px;
      }
    }

    .card {
      width: 376px;
      padding: 5px 6px 0 6px;
      display: flex;
      flex-direction: column;
      border: 1px solid #1d1d1f;
      position: relative;
      align-items: center;
      transition: all 0.6s ease-in;
      background: #000;

      &__image {
        width: 100%;
        height: 26.6rem;
        background-color: #d2d2d2;
        overflow: hidden;
      }

      &__item {
        font-family: ${FONTS.didactic};
        font-size: 24px;
        line-height: 31px;
        color: #fff;
        margin-top: 41px;
        margin-bottom: 25px;
      }

      &__price {
        font-family: ${FONTS.didactic};
        font-size: 30px;
        line-height: 39px;
        margin-bottom: 58px;
        color: hsl(98, 100%, 62%, 0.7);
        transition: all 0.4s cubic-bezier(0.55, 0.055, 0.675, 0.19);
      }

      button {
        padding: 15px 0;
        position: relative;
        bottom: -25px;
        text-align: center;
        font-size: 15px;
        width: 228px;
        line-height: 18px;
        transition: all 0.4s cubic-bezier(0.55, 0.055, 0.675, 0.19);
      }
    }

    .card:hover {
      background-color: #1d1d1f;
      border: 1px solid #e73c7e;

      .card__price {
        color: #ee7752;
      }

      .card__item {
        color: #fff;
      }

      button {
        &:hover {
          border: 1px solid #23d5ab;
        }
      }
    }
  }
`;
