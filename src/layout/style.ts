import styled from "styled-components";

interface Props {
  bgColor?: string;
}

export const LargeWrapper = styled.main<Props>`
  width: 100%;
  z-index: 9999;
  position: absolute;
  height: 100vh;
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  display: flex;
  justify-content: center;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Container = styled.main<Props>`
  width: 144rem;
  max-width: 144rem;

  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: 1440px) {
    width: 100%;
    max-width: 100%;
    padding: 0 4rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 0 2.5rem;
  }

  @media only screen and (max-width: 480px) {
    padding: 0 2rem;
  }
`;
