import styled from "styled-components";

interface Props {
  bgColor?: string;
}

export const Container = styled.main<Props>`
  display: grid;
  grid-template-columns: repeat(20, 5vw);
  z-index: 10;
  height: 100vh;
  overflow: hidden;
  position: static;

  .grid {
    border: 0.3px solid rgb(0, 0, 0, 0.3);
    border-radius: 5px;
    width: 5vw;
    height: 5vw;
    background: black;
    -webkit-tap-highlight-color: transparent;
  }
`;
