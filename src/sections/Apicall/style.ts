import styled from "styled-components"

interface Props {
  bgColor?: string
}

export const Container = styled.div<Props>`
  margin-top: 10.9rem;
  padding: 0 10rem 0 10rem;
  width: 100vw;
  height: 100vh;
  font-size: 20px;

  table,
  tr,
  th,
  td {
    border: 1px solid black;
    padding: 10px;
  }

  th {
    font-weight: 700;
    font-size: 25px;
  }

  tr {
    text-align: left;
  }
`
