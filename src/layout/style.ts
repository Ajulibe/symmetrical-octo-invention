import styled from "styled-components"

interface Props {
  bgColor?: string
}

export const Container = styled.main<Props>`
  width: 144rem;
  max-width: 144rem;
  z-index: 9999;
  position: absolute;
`
