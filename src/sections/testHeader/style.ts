import styled, { keyframes } from "styled-components";

interface Props {
  bgColor?: string;
}

const fadeIn = keyframes`
0%{
    opacity: 0
}

100%{
    opacity: 1
}
`;

export const Container = styled.nav<Props>`
  /* margin-top: 10.9rem; */
  padding: 0 10rem 0 10rem;
  width: 100vw;

  .header {
    border: 1px solid red;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 5px 0 5px 0;
    position: relative;

    &__title {
      display: flex;
      border: 1px solid red;
      p {
        font-size: 20px;
        margin-right: 15px;
        color: black;

        &:hover {
          color: pink;
        }
      }
    }

    &__submit {
      display: flex;
      border: 1px solid red;
    }

    .section__details {
      background: #fff;
      padding: 20px;
      position: absolute;
      top: 100%;
      left: 0;
      animation: ${fadeIn} 0.6s ease-in;
      display: flex;
      font-size: 20px;
      flex-wrap: wrap;
      max-width: 500px;
      justify-content: space-between;
      row-gap: 20px;

      div {
        /* border: 1px solid red; */
      }
    }
  }
`;
