import styled from "styled-components"
import { FONTS } from "@styles/fonts"

interface Props {
  bgColor?: string
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
      color: #fff;
      font-family: ${FONTS.didactic};
      margin-right: 25.9rem;
      font-weight: 400;
    }

    &__links {
      font-size: 1.8rem;
      line-height: 2.1rem;
      color: #fff;
      font-family: ${FONTS.raleway};

      & > :not(:last-child) {
        margin-right: 6.6rem;
      }

      & > :last-child {
        margin-right: 11.6rem;
      }
    }

    &__social-icons {
      display: flex;
      img {
        width: 4.2px;
        height: 4.2px;
      }

      & > div:not(:last-child) {
        margin-right: 2.1rem;
      }
    }
  }
`
