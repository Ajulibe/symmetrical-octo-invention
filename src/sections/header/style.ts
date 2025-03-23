import { animationUtils, fadeIn } from "@src/animations";

import { FONTS } from "@src/styles/fonts";
/* eslint-disable @typescript-eslint/indent */
import styled from "styled-components";

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

    &__mobile-menu-btn {
      display: none;
      flex-direction: column;
      justify-content: space-between;
      width: 3rem;
      height: 2.1rem;
      z-index: 10;
      cursor: pointer;

      span {
        width: 100%;
        height: 0.3rem;
        background: ${({ theme }) => theme.colors.white};
        border-radius: 0.5rem;
        transition: all 0.3s ease-in-out;
      }
    }

    &__mobile-menu {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.9);
      z-index: 5;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      
      a {
        font-size: 2.4rem;
        line-height: 3.2rem;
        color: ${({ theme }) => theme.colors.white};
        font-family: ${FONTS.raleway};
        margin-bottom: 3rem;
      }
    }
  }

  @media only screen and (max-width: 1440px) {
    padding: 0 6rem;
    
    .header {
      &__name {
        margin-right: 6rem;
      }
      
      &__links {
        & > :not(:last-child) {
          margin-right: 4rem;
        }
        
        & > :last-child {
          margin-right: 6rem;
        }
      }
    }
  }
  
  @media only screen and (max-width: 1024px) {
    padding: 0 4rem;
    
    .header {
      &__links {
        & > :not(:last-child) {
          margin-right: 3rem;
        }
        
        & > :last-child {
          margin-right: 4rem;
        }
      }
      
      &__social-icons {
        & > div:not(:last-child) {
          margin-right: 1.5rem;
        }
      }
    }
  }
  
  @media only screen and (max-width: 768px) {
    padding: 0 2.5rem;
    
    .header {
      &__links {
        display: none;
      }
      
      &__social-icons {
        & > div:not(:last-child):not(:last-child) {
          display: none;
        }
      }
      
      &__mobile-menu-btn {
        display: flex;
      }
      
      &__mobile-menu.active {
        display: flex;
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
  
  @media only screen and (max-width: 768px) {
    width: 5.5rem;
    height: 3.2rem;
    
    .switch__wrapper {
      width: 3rem;
      height: 3rem;
    }
  }
  
  @media only screen and (max-width: 480px) {
    width: 4.5rem;
    height: 2.8rem;
    
    .switch__wrapper {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;
