import { animationUtils, moveInfadeIn } from "@src/animations";
import styled, { css } from "styled-components";

/* eslint-disable indent */
/* eslint-disable @typescript-eslint/indent */
import { FONTS } from "@src/styles/fonts";

interface Props {
  bgColor?: string;
  inView: boolean;
  productView: boolean;
  cardView: boolean;
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

      &:nth-child(1) {
        transform: translateX(-70px);
        ${({ cardView }) =>
          cardView &&
          css`
            animation: ${animationUtils.translateElement("X", "-70px", 0)} 0.6s
              cubic-bezier(0.33, 1, 0.68, 1) forwards;
          `};

        button {
          transition: all 1s ease-in-out;
          ${({ cardView }) =>
            cardView &&
            css`
              animation: ${animationUtils.translateElement("Y", "-25px", 0)} 0.6s
                cubic-bezier(0.33, 1, 0.68, 1) forwards;
            `};
        }
      }

      &:nth-child(3) {
        transform: translateX(70px);
        ${({ cardView }) =>
          cardView &&
          css`
            animation: ${animationUtils.translateElement("X", "70px", 0)} 0.6s
              cubic-bezier(0.33, 1, 0.68, 1) forwards;
          `};
      }

      &__image {
        width: 100%;
        height: 26.6rem;
        background-color: ${({ theme }) => theme.colors.darkWhite};
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

  @media only screen and (max-width: 1440px) {
    .main {
      padding: 10.1rem 6rem 9.1rem 6rem;
    }
  }

  @media only screen and (max-width: 1024px) {
    .main {
      padding: 8rem 4rem;

      .section {
        font-size: 1.8rem;
        line-height: 2.4rem;

        &__name {
          font-size: 5rem;
          line-height: 6.5rem;
          margin-bottom: 6rem;
        }

        &__products {
          flex-direction: column;
          align-items: center;

          .card {
            margin-bottom: 4rem;

            &:last-child {
              margin-bottom: 0;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .main {
      padding: 6rem 2.5rem;

      .section {
        font-size: 1.6rem;
        line-height: 2.2rem;

        &__name {
          font-size: 4rem;
          line-height: 5.2rem;
          margin-bottom: 5rem;
        }

        &__products {
          .card {
            width: 100%;
            max-width: 35rem;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 480px) {
    .main {
      padding: 5rem 2rem;

      .section {
        font-size: 1.4rem;
        line-height: 2rem;

        &__name {
          font-size: 3.2rem;
          line-height: 4.2rem;
          margin-bottom: 4rem;
        }
      }
    }
  }
`;
