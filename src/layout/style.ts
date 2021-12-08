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
`;
