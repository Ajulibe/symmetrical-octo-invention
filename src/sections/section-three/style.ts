/* eslint-disable indent */
/* eslint-disable @typescript-eslint/indent */
import { FONTS } from "@styles/fonts";
import styled, { css } from "styled-components";
import { moveInfadeIn } from "@src/animations";

interface Props {
  bgColor?: string;
  inView: boolean;
  productView: boolean;
}

export const Container = styled.main<Props>`
  .main {
    background: transparent;
    display: flex;
    flex-direction: column;
    padding: 10.1rem 14rem 9.1rem 14rem;
    text-align: center;
    .section {
      font-family: ${FONTS.didactic};
      font-size: 20px;
      line-height: 26px;
      color: ${({ theme }) => theme.colors.grey100};
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
        color: ${({ theme }) => theme.colors.grey100};
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
      border: 1px solid ${({ theme }) => theme.colors.darkGrey};
      position: relative;
      align-items: center;
      transition: all 0.6s ease-in;
      background: ${({ theme }) => theme.colors.black};

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
        color: ${({ theme }) => theme.colors.white};
        margin-top: 41px;
        margin-bottom: 25px;
      }

      &__price {
        font-family: ${FONTS.didactic};
        font-size: 30px;
        line-height: 39px;
        margin-bottom: 58px;
        color: ${({ theme }) => theme.colors.green700};
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
      border: 1px solid ${({ theme }) => theme.colors.pink};

      .card__price {
        color: ${({ theme }) => theme.colors.orange};
      }

      .card__item {
        color: ${({ theme }) => theme.colors.white};
      }

      button {
        &:hover {
          border: 1px solid ${({ theme }) => theme.colors.lightGreen};
        }
      }
    }
  }
`;
