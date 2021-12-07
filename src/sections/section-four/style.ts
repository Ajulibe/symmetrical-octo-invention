import { FONTS } from "@styles/fonts"
import styled from "styled-components"

interface Props {
  bgColor?: string
}

export const Container = styled.div<Props>`
  padding: 15rem 12rem 15rem 14rem;
  background: transparent;
  .main {
    display: flex;
  }

  .black__canvas {
    width: 689px;
    height: 851px;
    background: #d2d2d2;
    z-index: 3;
    overflow: hidden;
  }

  .canvas__wrapper {
    width: 709px;
    height: 871px;
    display: flex;
    justify-content: flex-end;
    position: relative;
  }

  .canvas__wrapper::before {
    content: "reger";
    width: 689px;
    height: 851px;
    background: #1d1d1f;
    position: absolute;
    bottom: 0;
    left: -20px;
  }

  .section {
    display: flex;
    flex-direction: column;
    padding-left: 5.2rem;
    &__name {
      font-family: ${FONTS.didactic};
      font-size: 20px;
      line-height: 26px;
      color: #fff;
    }

    &__heading {
      font-family: ${FONTS.didactic};
      font-size: 60px;
      line-height: 79px;
      color: #fff;
      margin-bottom: 77px;
      width: 356px;
    }

    &__grid {
      display: grid;
      grid-template-columns: 231px 231px;
      grid-column-gap: 5px;
      grid-row-gap: 7px;
      grid-auto-rows: 241px;
      position: relative;
      left: -136px;
      z-index: 10;
      background-color: #000;
    }

    .grid {
      display: flex;
      flex-direction: column;
      padding: 23px 24px 19px 24px;
      border: 2px solid #1d1d1f;
      transition: all 0.3s ease-in;
      /* background: #fff; */
      filter: blur(40);

      &__image {
        width: 60px;
        height: 60px;
        background: #1d1d1f;
        margin-bottom: 21.5px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &__title {
        font-family: ${FONTS.didactic};
        font-size: 20px;
        line-height: 26px;
        color: #1d1d1f;
        margin-bottom: 17px;
        transition: all 0.3s ease-in;
      }

      &__content {
        font-family: ${FONTS.raleway};
        font-size: 14px;
        line-height: 25px;
        color: #fff;
        transition: all 0.3s ease-in;
      }

      &:hover {
        background: #1d1d1f;
        border: 2px solid #fff;
        .grid__title {
          color: #fff;
        }
        .grid__content {
          color: #fff;
        }
      }
    }
  }
`
