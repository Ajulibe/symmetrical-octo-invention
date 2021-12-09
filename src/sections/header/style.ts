/* eslint-disable @typescript-eslint/indent */
import styled from "styled-components";
import { FONTS } from "@styles/fonts";
import { fadeIn, animationUtils } from "@src/animations";

interface Props {
  bgColor?: string;
}

export const Container = styled.nav<Props>`
  display: flex;
  height: 8rem;
  width: 100%;
  padding: 0 14rem 0 14rem;
  justify-content: space-between;
  align-items: center;

  .header {
    &__name {
      font-size: 2.8rem;
      line-height: 3.7rem;
      color: ${({ theme }) => theme.colors.white};
      font-family: ${FONTS.didactic};
      margin-right: 12.9rem;
      font-weight: 400;
      animation: ${fadeIn} 0.7s ease-in;
    }

    &__links {
      font-size: 1.8rem;
      line-height: 2.1rem;
      color: ${({ theme }) => theme.colors.white};
      font-family: ${FONTS.raleway};
      opacity: 0;
      animation: ${fadeIn} 0.7s ease-in 0.3s forwards;

      & > :not(:last-child) {
        margin-right: 6.6rem;
      }

      & > :last-child {
        margin-right: 11.6rem;
      }
    }

    &__social-icons {
      display: flex;
      opacity: 0;
      animation: ${fadeIn} 0.7s ease-in 0.8s forwards;
      img {
        width: 4.2px;
        height: 4.2px;
      }

      & > div:not(:last-child) {
        margin-right: 2.1rem;
      }
    }
  }
`;

interface ThemeProps {
  light: boolean;
}

export const Switch = styled.div<ThemeProps>`
  width: 6.5rem;
  height: 3.8rem;
  transition: all 0.4s ease-in;
  border: 1px solid ${({ light, theme }) => (light ? theme.colors.darkGrey : theme.colors.white200)};
  border-radius: 6.5rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  transition: all 1s ease-in;

  .switch__wrapper {
    display: flex;
    align-items: center;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    transition: all 0.2s ease-in;
    overflow: hidden;
    animation: ${({ light }) => animationUtils.switchMode(light)} 0.8s
      cubic-bezier(0, 0.55, 0.45, 1) forwards;

    &:hover {
      cursor: pointer;
      transform: scale(0.9);
    }

    svg {
      transition: all 2s ease-in;
      transform: rotate(10deg);
    }

    .moonface {
      transition: all 2s ease-in;
      border: 1px solid red;
    }
  }
`;
