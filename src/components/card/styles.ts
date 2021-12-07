import styled, { keyframes } from "styled-components";
import { COLORS } from "@styles/colors";

interface Props {
  bgColor?: string;
}

//fade in
export const fadeIn = keyframes`
  0% {
    opacity: 0.5
  }
  100% {
    opacity: 1
  }
`;

export const Container = styled.div<Props>`
  width: 47.9rem;
  justify-content: flex-start;
  background: ${COLORS.blueDark};
  box-sizing: border-box;
  border-radius: 5px;
  overflow: hidden;
  max-height: 85px;
  border: 1px solid ${COLORS.blueDark};
  margin-top: 12px;
  transition: all 0.2s ease-in-out;
  ${(props) => (props.bgColor ? `filter: drop-shadow(0px 0px 2px ${props.bgColor})` : null)}
`;
