import { moveInfadeIn, translateIn, underline } from "@src/animations";
import styled, { css } from "styled-components";

/* eslint-disable indent */
/* eslint-disable @typescript-eslint/indent */
import { FONTS } from "@src/styles/fonts";

interface Props {
  bgColor?: string;
  inView?: boolean;
  imageInView?: boolean;
}

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
      color: ${({ theme }) => theme.colors.grey100};
      margin-bottom: 3.9rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      overflow: hidden;
      position: relative;

      //animation timeline
      .headers {
        overflow: hidden;
      }

      .headers:nth-child(1) {
        will-change: opacity, transform;
        ${({ inView }) =>
          inView &&
          css`
            animation: ${moveInfadeIn} 0.4s cubic-bezier(0.65, 0, 0.35, 1);
          `};
      }
      .headers:nth-child(2) {
        will-change: opacity, transform;
        ${({ inView }) =>
          inView &&
          css`
            animation: ${moveInfadeIn} 0.6s cubic-bezier(0.65, 0, 0.35, 1);
          `};
      }
      .headers:nth-child(3) {
        will-change: opacity, transform;
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
        color: ${({ theme }) => theme.colors.grey100};
        display: flex;
        flex-direction: column;
        will-change: opacity, transform;
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
            fill: ${({ theme }) => theme.colors.grey100};
          }
        }

        &:hover {
          &::after {
            animation: ${underline} 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) forwards;
          }
        }
      }

      &-link::after {
        content: " ";
        width: 0%;
        height: 4px;
        top: 0;
        left: 0;
        background-color: ${({ theme }) => theme.colors.grey100};
        margin-top: 2rem;
      }
    }

    &__accordion-wrapper {
      display: flex;
      margin-top: 150px;
      justify-content: space-between;
    }

    &__accordion {
      background: ${({ theme }) => theme.colors.white};
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
        color: ${({ theme }) => theme.colors.darkGrey};
      }

      &-heading {
        margin-bottom: 38px;
        span {
          font-family: ${FONTS.didactic};
          font-size: 60px;
          line-height: 78px;
          color: ${({ theme }) => theme.colors.darkGrey};
        }
      }

      &-item {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        position: relative;
        margin-bottom: 2px;
        overflow: hidden;

        span {
          color: ${({ theme }) => theme.colors.white};
          font-family: ${FONTS.raleway};
          background-color: ${({ theme }) => theme.colors.darkGrey};
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

      &-content {
        background-color: ${({ theme }) => theme.colors.white};
        padding: 0px 33.34px;
        font-family: ${FONTS.raleway};
        font-size: 14px;
        line-height: 25px;
        color: ${({ theme }) => theme.colors.lightBlack};
        height: 0;
        transition: all 0.4s ease-in;
        overflow: hidden;
      }

      .focus-tracker {
        position: absolute;
        caret-color: ${({ theme }) => theme.colors.white};
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
        animation: ${translateIn} 0.6s cubic-bezier(0.65, 0, 0.35, 1);
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
    background: ${({ theme }) => theme.colors.darkGrey};
    position: absolute;
    top: 31px;
    right: 1px;
    z-index: -1;
  }

  @media only screen and (max-width: 1024px) {
    .main {
      padding-top: 12rem;
      padding-bottom: 12rem;
      
      &__heading {
        font-size: 5rem;
        line-height: 6.5rem;
      }
      
      &__description {
        font-size: 1.6rem;
        line-height: 2.6rem;
        max-width: 90%;
      }
      
      &__pic-box {
        width: 90%;
        height: auto;
        margin-top: 5rem;
      }
    }
  }
  
  @media only screen and (max-width: 768px) {
    .main {
      padding-top: 8rem;
      padding-bottom: 8rem;
      
      &__heading {
        font-size: 4rem;
        line-height: 5.2rem;
      }
      
      &__description {
        font-size: 1.4rem;
        line-height: 2.4rem;
      }
      
      &__pic-box {
        width: 100%;
        margin-top: 4rem;
      }
    }
  }
  
  @media only screen and (max-width: 480px) {
    .main {
      padding-top: 6rem;
      padding-bottom: 6rem;
      
      &__heading {
        font-size: 3.2rem;
        line-height: 4.2rem;
      }
      
      &__description {
        font-size: 1.3rem;
        line-height: 2.2rem;
        max-width: 100%;
      }
    }
  }
`;
