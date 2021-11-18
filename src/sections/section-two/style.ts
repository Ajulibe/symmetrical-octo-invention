import { FONTS } from "@styles/fonts"
import styled, { keyframes } from "styled-components"

interface Props {
  bgColor?: string
}

const fadeIn = keyframes`
0% {
    transform: translateY(100px)
}

100% {
    transform: translateY(0)

}
`
const underline = keyframes`
0% {
    width: 0%
}

100% {
    width: 100%

}
`

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
      color: #1d1d1f;
      margin-bottom: 3.9rem;

      &-link {
        font-family: ${FONTS.raleway};
        font-size: 20px;
        line-height: 23px;
        color: #1d1d1f;
        display: flex;
        flex-direction: column;

        a {
          display: flex;
          align-items: center;

          svg {
            margin-left: 2rem;
          }
        }

        &:hover {
          &::after {
            animation: ${underline} 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955)
              forwards;
          }
        }
      }

      &-link::after {
        content: " ";
        width: 0%;
        height: 4px;
        top: 0;
        left: 0;
        background-color: #1d1d1f;
        margin-top: 2rem;
      }
    }

    &__accordion-wrapper {
      display: flex;
      margin-top: 150px;
      justify-content: space-between;
    }

    &__accordion {
      background: #fff;
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
        color: #1d1d1f;
      }

      &-heading {
        font-family: ${FONTS.didactic};
        font-size: 60px;
        line-height: 78px;
        color: #1d1d1f;
        margin-bottom: 38px;
      }

      &-item {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        position: relative;
        margin-bottom: 2px;

        span {
          color: #ffffff;
          font-family: ${FONTS.raleway};
          background-color: #1d1d1f;
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
        background-color: #fff;
        padding: 0px 33.34px;
        font-family: ${FONTS.raleway};
        font-size: 14px;
        line-height: 25px;
        color: rgba(29, 29, 31, 0.6);
        height: 0;
        transition: all 0.4s ease-in;
        overflow: hidden;
      }

      .focus-tracker {
        position: absolute;
        caret-color: #fff;
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
        animation: ${fadeIn} 0.6s cubic-bezier(0.65, 0, 0.35, 1);
      }
    }
  }

  .image__wrapper {
    width: 725px;
    height: 921px;
    position: relative;

    & > div {
      width: 695px;
      height: 894px;
      background: brown;
      position: relative;
      left: -10px;
    }
  }

  .image__wrapper::after {
    content: "";
    width: 695px;
    height: 894px;
    background: #1d1d1f;
    position: absolute;
    top: 31px;
    right: 1px;
    z-index: -1;
  }
`
