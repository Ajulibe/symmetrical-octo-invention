/* eslint-disable indent */
/* eslint-disable @typescript-eslint/indent */
import styled, { css } from "styled-components";
import { animationUtils, moveInfadeIn } from "@src/animations";

interface Props {
  bgColor?: string;
  loop?: boolean;
  startAnim: boolean;
}

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
    background: ${({ theme }) => theme.colors.transparent};
    will-change: transform, opacity;
    animation: ${moveInfadeIn} 0.7s cubic-bezier(0.65, 0, 0.35, 1) forwards;

    &__next {
      img {
        ${({ startAnim }) =>
          startAnim &&
          css`
            animation: ${animationUtils.carouselScale(1.4, 1)} 1.7s
              cubic-bezier(0.34, 1.56, 0.64, 1);
          `};
      }
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }
`;
