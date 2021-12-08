import styled from "styled-components";
import { FONTS } from "@styles/fonts";
import { fadeIn } from "@src/animations";

interface Props {
  bgColor?: string;
}

export const Container = styled.nav<Props>`
  display: flex;
  height: 8rem;
  width: 100%;
  padding: 0 14rem 0 14rem;
  justify-content: space-between;
  align-items: center;

  .header {
    &__name {
      font-size: 2.8rem;
      line-height: 3.7rem;
      color: ${({ theme }) => theme.colors.white};
      font-family: ${FONTS.didactic};
      margin-right: 25.9rem;
      font-weight: 400;
      animation: ${fadeIn} 0.7s ease-in;
    }

    &__links {
      font-size: 1.8rem;
      line-height: 2.1rem;
      color: ${({ theme }) => theme.colors.white};
      font-family: ${FONTS.raleway};
      opacity: 0;
      animation: ${fadeIn} 0.7s ease-in 0.3s forwards;

      & > :not(:last-child) {
        margin-right: 6.6rem;
      }

      & > :last-child {
        margin-right: 11.6rem;
      }
    }

    &__social-icons {
      display: flex;
      opacity: 0;
      animation: ${fadeIn} 0.7s ease-in 0.8s forwards;
      img {
        width: 4.2px;
        height: 4.2px;
      }

      & > div:not(:last-child) {
        margin-right: 2.1rem;
      }
    }
  }
`;
