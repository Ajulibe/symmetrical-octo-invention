import React from "react";
import { Container } from "./styles";

interface Props {
  bgColor?: string;
}

const Card: React.FC<Props> = ({ bgColor = "red" }) => {
  return <Container bgColor={bgColor}>This is the first Card</Container>;
};
export default Card;
