import React from "react";
import { Container, LargeWrapper } from "./style";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <LargeWrapper>
      <Container>{children}</Container>
    </LargeWrapper>
  );
};

export default Layout;
