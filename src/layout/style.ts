import styled from "styled-components";

interface Props {
  bgColor?: string;
}

export const Container = styled.main<Props>`
  width: 144rem;
  max-width: 144rem;
  z-index: 9999;
  position: absolute;
  height: 100vh;
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
