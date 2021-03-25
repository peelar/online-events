import React from "react";
import Nav from "components/templates/Nav/Nav";
import { Container } from "ui-lib";

const Layout: React.FC = ({ children }) => {
  return (
    <Container maxW="container.lg">
      <Nav />
      {children}
    </Container>
  );
};

export default Layout;
