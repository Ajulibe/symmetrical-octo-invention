import { FONTS } from "@styles/fonts";
import styled, { keyframes } from "styled-components";

interface Props {
  bgColor?: string;
}

const borderAnim = keyframes`
0%{
  border-color:  #ee7752
}
25%{
  border-color:   #23a6d5
}

50%{
  border-color:  hsl(98 100% 62%)
}
75%{
  border-color:  #e73c7e
}
100% {
  border-color:    #23d5ab
}
`;

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
    color: #fff;
    border: 2px solid #1d1d1f;
    background-color: transparent;
    background: #000;

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
    border: 2px solid #e73c7e;
    transition: all 0.4s ease-in;
    animation: ${borderAnim} 1s cubic-bezier(0.65, 0, 0.35, 1) infinite;
  }
`;

export const ContainerCompanyCarousel = styled.div<Props>`
  margin-top: 40px;
  overflow: hidden;
  &::before,
  &::after {
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
`;
