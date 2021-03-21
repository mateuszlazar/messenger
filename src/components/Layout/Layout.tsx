// this Layout component wraps every page with the app header on top
// check out App.js to see how it's used

import React from "react";

import { Container, Main, Sidebar } from "./styled";

export const Layout: React.FC = ({ children }) => (
  <Container>
    <Sidebar></Sidebar>
    <Main>{children}</Main>
  </Container>
);
