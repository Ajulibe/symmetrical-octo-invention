/* eslint-disable @typescript-eslint/indent */
import { FONTS } from "@styles/fonts";
import styled, { css } from "styled-components";
import { animationUtils } from "@src/animations";

interface Props {
  bgColor?: string;
  inView?: boolean;
}

export const Container = styled.main<Props>``;

export const Main = styled.div<Props>`
  opacity: 0;
  ${({ inView }) =>
    inView &&
    css`
      animation: ${animationUtils.translateElement("Y", "100px", 0)} 0.6s
        cubic-bezier(0.33, 1, 0.68, 1) forwards;
    `};
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
      color: ${({ theme }) => theme.colors.black600};
    }

    .section__one {
      color: ${({ theme }) => theme.colors.white500};
      &-title {
        font-family: ${FONTS.didactic};
        font-size: 2.8rem;
        line-height: 3.7rem;
        color: ${({ theme }) => theme.colors.white800};
      }

      &-message {
        width: 20.4rem;
        margin-top: 4.1rem;
      }

      &-footer {
        font-family: ${FONTS.raleway};
        font-size: 1.4rem;
        line-height: 1.6rem;
        color: ${({ theme }) => theme.colors.white500};
        margin-top: 41.96px;
      }
    }

    .section__two {
      width: 20.4rem;
      color: ${({ theme }) => theme.colors.white500};

      &-title {
        font-family: ${FONTS.didactic};
        font-size: 2.2rem;
        line-height: 2.9rem;
        color: ${({ theme }) => theme.colors.white800};
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
      color: ${({ theme }) => theme.colors.white500};
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
      color: ${({ theme }) => theme.colors.white500};
      &-title {
        font-family: ${FONTS.didactic};
        font-size: 2.2rem;
        line-height: 2.9rem;
        color: ${({ theme }) => theme.colors.white800};
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
            color: ${({ theme }) => theme.colors.white600};
          }

          input {
            background: transparent;
            border: none;
            padding-bottom: 16px;
            border-bottom: 1px solid ${({ theme }) => theme.colors.grey600};
            color: ${({ theme }) => theme.colors.white600};

            &::-webkit-input-placeholder {
              color: ${({ theme }) => theme.colors.white600};
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
            border: 1px solid ${({ theme }) => theme.colors.white500};
            height: 55px;
            color: ${({ theme }) => theme.colors.white600};
          }
        }
      }
    }
  }
`;
