import { FONTS } from "@styles/fonts"
import styled from "styled-components"

interface Props {
  bgColor?: string
}

export const Container = styled.main<Props>`
  .main {
    background: #f6f5f2;
    display: flex;
    flex-direction: column;
    padding: 10.1rem 14rem 9.1rem 14rem;
    text-align: center;
    .section {
      font-family: ${FONTS.didactic};
      font-size: 20px;
      line-height: 26px;
      color: #1d1d1f;

      &__name {
        font-family: ${FONTS.didactic};
        font-size: 60px;
        line-height: 79px;
        color: #1d1d1f;
        margin-bottom: 77px;
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
      border: 2px solid black;
      position: relative;
      align-items: center;
      transition: all 0.3s ease-in;

      &__image {
        width: 100%;
        height: 26.6rem;
        background-color: #d2d2d2;
      }

      &__item {
        font-family: ${FONTS.didactic};
        font-size: 24px;
        line-height: 31px;
        color: #1d1d1f;
        margin-top: 41px;
        margin-bottom: 25px;
      }

      &__price {
        font-family: ${FONTS.didactic};
        font-size: 30px;
        line-height: 39px;
        margin-bottom: 58px;
        color: hsla(56, 39%, 51%, 1);
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
      .card__item {
        color: #fff;
      }

      button {
        /* bottom: 30px; */

        &:hover {
          border: 1px solid #fff;
        }
      }
    }
  }
`
