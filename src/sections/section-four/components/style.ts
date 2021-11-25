import { FONTS } from "@styles/fonts"
import styled, { css } from "styled-components"

interface Props {
  bgColor?: string
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
    color: #1d1d1f;
    border: 2px solid #1d1d1f;
    background-color: hsla(0, 0%, 100%, 1);

    button {
      width: 224px;
      height: 68px;
    }
  }

  &::before {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    right: -6px;
    bottom: -12px;
    background-color: #1d1d1f;
  }
`

const whitegradient = css`
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
`

export const ContainerCompanyCarousel = styled.div<Props>`
  overflow: hidden;
  &::before,
  &::after {
    ${whitegradient};
    content: "";
    height: 100px;
    position: absolute;
    width: 200px;
    z-index: 2;
  }

  .carousel {
    margin-top: 4.9rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    display: flex;
  }
`
