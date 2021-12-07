import { FONTS } from "@styles/fonts";
import styled from "styled-components";

interface Props {
  btnType?: string;
}

export const StyledButton = styled.button<Props>`
  font-family: ${FONTS.raleway};
  color: #1d1d1f;
  background-color: #fff;
  overflow: hidden;
  outline: none;
  box-shadow: none;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid hsla(240, 3%, 12%, 1);
  position: relative;

  span {
    z-index: 3;
    position: relative;
  }

  &::after {
    content: "";
    background-color: #1d1d1f;
    position: absolute;
    height: 100%;
    width: 0%;
    top: 0;
    left: 0;
    transition: width 0.3s linear;
  }

  .icon {
    font-size: 40px;
    margin-left: 20px;
    transition: width 0.3s linear;
    transition: transform 0.6s linear;
    z-index: 3;
  }

  &:hover {
    color: #fff;

    &::after {
      width: 100%;
    }
    .icon {
      color: #fff;
      transform: translateX(10px);
    }
  }
`;
