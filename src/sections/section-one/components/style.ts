/* eslint-disable indent */
/* eslint-disable @typescript-eslint/indent */
import styled, { keyframes, css } from "styled-components";
import { animationUtils, moveInfadeIn } from "@src/animations";

interface Props {
  bgColor?: string;
  loop?: boolean;
  startAnim?: boolean;
  inView: boolean;
}

const clipCirclePath = keyframes`
0%{
  clip-path: circle(2% at 85% 32%);
  opacity: 0.6
}
100% {
  clip-path: circle(130% at 90% 32%);
  opacity: 1
}
`;

export const Greybackgroud = styled.main<Props>`
  height: 69.6rem;
  position: relative;
  margin-top: 24rem;
  transition: all 1s ease-in;

  .bg {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    opacity: 0;
    background: ${({ theme }) => theme.colors.darkGrey};
    will-change: transform, opacity;
    animation: ${moveInfadeIn} 0.7s cubic-bezier(0.65, 0, 0.35, 1) forwards;

    &__previous {
      position: absolute;
      top: 0;
      left: 0;
    }

    &__next {
      ${({ inView }) =>
        inView &&
        css`
          animation: ${clipCirclePath} 0.9s cubic-bezier(0.65, 0, 0.35, 1) 0.2s;
        `};

      img {
        ${({ inView }) =>
          inView &&
          css`
            animation: ${animationUtils.scale(1.4, 1)} 1.3s cubic-bezier(0, 0.55, 0.45, 1) forwards;
          `};
      }

      position: absolute;
      width: 100%;
      height: 100%;
    }
  }
`;
