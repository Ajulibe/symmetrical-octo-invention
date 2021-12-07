/* eslint-disable @typescript-eslint/indent */
import { FONTS } from "@styles/fonts";
import styled from "styled-components";

interface Props {
  bgColor?: string;
}

export const Container = styled.main<Props>`
  .main {
    background: transparent;
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
      color: rgba(255, 255, 255, 0.5);
      &-title {
        font-family: ${FONTS.didactic};
        font-size: 2.8rem;
        line-height: 3.7rem;
        color: rgba(255, 255, 255, 0.8);
      }

      &-message {
        width: 20.4rem;
        margin-top: 4.1rem;
      }

      &-footer {
        font-family: ${FONTS.raleway};
        font-size: 1.4rem;
        line-height: 1.6rem;
        color: rgba(255, 255, 255, 0.5);
        margin-top: 41.96px;
      }
    }

    .section__two {
      width: 20.4rem;
      color: rgba(255, 255, 255, 0.5);

      &-title {
        font-family: ${FONTS.didactic};
        font-size: 2.2rem;
        line-height: 2.9rem;
        color: rgba(255, 255, 255, 0.8);
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
      color: rgba(255, 255, 255, 0.5);
      &-icons {
        display: flex;
        justify-content: space-between;
        align-items: center;

        img {
          transition: all 0.2s ease;
          &:hover {
            transform: scale(0.9, 0.9);
          }
        }
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
      color: rgba(255, 255, 255, 0.5);
      &-title {
        font-family: ${FONTS.didactic};
        font-size: 2.2rem;
        line-height: 2.9rem;
        color: rgba(255, 255, 255, 0.8);
      }

      &-form {
        font-family: ${FONTS.raleway};
        font-size: 1.4rem;
        line-height: 1.6rem;
        margin-top: 41.96px;

        .input-wrapper {
          display: flex;
          flex-direction: column;
          justify-content: center;

          label {
            margin-bottom: 40px;
            color: rgba(255, 255, 255, 0.6);
          }

          input {
            background: transparent;
            border: none;
            padding-bottom: 16px;
            border-bottom: 1px solid hsla(0, 0%, 77%, 1);
            color: rgba(255, 255, 255, 0.6);

            &::-webkit-input-placeholder {
              color: rgba(255, 255, 255, 0.6);
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
            border: 1px solid rgba(255, 255, 255, 0.5);
            height: 55px;
            color: rgba(255, 255, 255, 0.6);
          }
        }
      }
    }
  }
`;
