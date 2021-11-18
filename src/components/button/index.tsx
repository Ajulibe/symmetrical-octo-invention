/* eslint-disable @typescript-eslint/no-explicit-any */
import { StyledButton } from "./style"
import React from "react"

interface Props {
  Icon?: any
  title: string
}

export const Button: React.FC<Props> = ({ title, Icon, ...rest }) => {
  //   const IconWrapper = () => Icon && <Icon />
  return (
    <StyledButton {...rest}>
      <span>{title}</span>
      {/* {IconWrapper()} */}
    </StyledButton>
  )
}
