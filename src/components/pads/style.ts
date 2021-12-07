import styled from "styled-components";

interface Props {
  bgColor?: string;
}

export const Container = styled.main<Props>`
  display: grid;
  grid-template-columns: repeat(20, 5vw);
  background: rgba(255, 255, 255, 0.1);
  z-index: 10;
  height: 100vh;
  overflow: hidden;
  position: static;

  .grid {
    border: 0.3px solid rgb(0, 0, 0, 0.1);
    border-radius: 4px;
    width: 5vw;
    height: 5vw;
    background: black;
    filter: blur(50%);
    -webkit-tap-highlight-color: transparent;
    transition: all 0.2s ease-in;

    &:hover {
      transform: perspective(1000px);
      transform: rotateX(1deg);
      transform: scale(1.01);
    }
  }
`;
