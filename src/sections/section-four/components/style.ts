import { animationUtils, borderAnim } from "@src/animations";
import styled, { css } from "styled-components";

import { FONTS } from "@src/styles/fonts";

interface Props {
  bgColor?: string;
  inView?: boolean;
}

export const Container = styled.div<Props>`
  width: 100%;
  margin-top: 24.2rem;
  position: relative;

  .main {
    justify-content: space-between;
    align-items: center;
    position: relative;
    display: flex;
    font-family: ${FONTS.didactic};
    font-size: 6rem;
    line-height: 7.9rem;
    padding: 68px 45px 67px 45px;
    z-index: 2;
    color: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.darkGrey};
    background-color: transparent;
    background: ${({ theme }) => theme.colors.black};

    @media only screen and (max-width: 701px) {
      font-size: 4rem;
      padding: 20px;
    }

    @media only screen and (max-width: 400px) {
      font-size: 3rem;
      padding: 10px;
    }

    button {
      width: 224px;
      height: 68px;

      @media only screen and (max-width: 701px) {
        width: 200px;
        height: 50px;
      }
    }
  }

  &::before {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    right: -6px;
    bottom: -12px;
    border: 2px solid ${({ theme }) => theme.colors.pink};
    transition: all 0.4s ease-in;
    animation: ${borderAnim} 1s cubic-bezier(0.65, 0, 0.35, 1) infinite;
  }
`;

export const ContainerCompanyCarousel = styled.div<Props>`
  margin-top: 40px;
  overflow: hidden;
  opacity: 0;
  width: 100%;

  &::before,
  &::after {
    content: "";
    height: 100px;
    position: absolute;
    width: 200px;
    z-index: 2;
  }

  ${({ inView }) =>
    inView &&
    css`
      animation: ${animationUtils.translateElement("Y", "-100px", 0)} 0.6s
        cubic-bezier(0.33, 1, 0.68, 1) forwards;
    `};

  .carousel {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    display: flex;
    margin-bottom: 100px;

    svg {
      color: white;
      width: 20px;
      height: 20px;
      flex-shrink: 0;
    }
  }
`;
