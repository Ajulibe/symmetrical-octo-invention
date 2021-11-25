/* eslint-disable @typescript-eslint/indent */
import { FONTS } from "@styles/fonts"
import styled, { keyframes, css } from "styled-components"

interface Props {
  bgColor?: string
  inView?: boolean
}

const blink = keyframes`
    0%{transform: scale(1); opacity: 0.04};
    50%{transform: scale(10); opacity: 0.01};
    100%{transform: scale(20); opacity: 0}
`

const BgColorfadeIn = keyframes`
from {
  opacity: 0.4;
}
to {
  background: linear-gradient(
        to right,
        hsl(98 100% 62%),
        hsl(204 100% 59%)
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      opacity: 1;
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

const moveInRightfadeIn = keyframes`
0% {
  opacity: 0;
  transform: translateY(100px);
}

100% {
    opacity: 1;
    transform: translateY(0);

}
`
const growWidth = keyframes`
0% {
  width: 0;
  opacity: 0;
}

100% {
  width: 8rem;
  opacity: 1;
}
`

const fadeIn = keyframes`
0% {
  opacity: 0;

}

100% {
    opacity: 1;

}
`

export const Container = styled.main<Props>`
  .main {
    background: #f6f5f2;
    padding: 10.1rem 14rem 12.5rem 14.6rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    &__content {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      font-family: ${FONTS.raleway};
      font-size: 1.6rem;
      line-height: 2.6rem;
      color: rgba(0, 0, 0, 0.6);
    }

    .section__one {
      &-title {
        font-family: ${FONTS.didactic};
        font-size: 2.8rem;
        line-height: 3.7rem;
        color: #000000;
      }

      &-message {
        width: 20.4rem;
        margin-top: 4.1rem;
      }

      &-footer {
        font-family: ${FONTS.raleway};
        font-size: 1.4rem;
        line-height: 1.6rem;
        color: #000000;
        margin-top: 41.96px;
      }
    }

    .section__two {
      width: 20.4rem;

      &-title {
        font-family: ${FONTS.didactic};
        font-size: 2.2rem;
        line-height: 2.9rem;
        color: #000000;
      }

      &-message {
        width: 20.4rem;
        margin-top: 4.1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
          width: 15.1rem;
        }
      }
    }

    .section__three {
      width: 20.4rem;

      &-icons {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      &-message {
        width: 20.4rem;
        margin-top: 4.1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
          width: 15.1rem;
        }
      }
    }

    .section__four {
      &-title {
        font-family: ${FONTS.didactic};
        font-size: 2.2rem;
        line-height: 2.9rem;
        color: #000000;
      }

      &-form {
        font-family: ${FONTS.raleway};
        font-size: 1.4rem;
        line-height: 1.6rem;
        color: #000000;
        margin-top: 41.96px;

        .input-wrapper {
          display: flex;
          flex-direction: column;
          justify-content: center;

          label {
            margin-bottom: 40px;
            color: rgba(0, 0, 0, 0.6);
          }

          input {
            background: transparent;
            border: none;
            padding-bottom: 16px;
            border-bottom: 1px solid hsla(0, 0%, 77%, 1);
            color: #000000;

            &::-webkit-input-placeholder {
              color: rgba(0, 0, 0, 0.6);
              font-weight: 300;
            }

            &::placeholder {
              font-family: ${FONTS.raleway};
              font-weight: 300;
            }

            &:focus {
              outline: none;
            }
          }

          button {
            background: transparent;
            border: 1px solid hsla(240, 3%, 12%, 1);
            height: 55px;
          }
        }
      }
    }
  }
`
