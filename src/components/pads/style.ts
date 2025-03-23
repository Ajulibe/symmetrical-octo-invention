import styled from "styled-components";

interface Props {
  bgColor?: string;
}

export const Container = styled.main<Props>`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(5vw, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(5vw, 1fr));
  grid-auto-rows: minmax(5vw, 1fr);
  grid-auto-flow: dense;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  pointer-events: none;

  .grid {
    border: 0.3px solid rgb(0, 0, 0, 0.3);
    border-radius: 0.3rem;
    aspect-ratio: 1/1;
    width: 100%;
    height: 100%;
    background: black;
    -webkit-tap-highlight-color: transparent;
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(7vw, 1fr));
    grid-template-rows: repeat(auto-fill, minmax(7vw, 1fr));
    grid-auto-rows: minmax(7vw, 1fr);
  }

  @media only screen and (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(10vw, 1fr));
    grid-template-rows: repeat(auto-fill, minmax(10vw, 1fr));
    grid-auto-rows: minmax(10vw, 1fr);
  }
`;
