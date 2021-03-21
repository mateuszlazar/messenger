import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  grid-template-rows: 1fr;
  min-height: 100vh;
  min-width: 100vw;
`;

const Sidebar = styled.nav`
  border-right: 1px solid #ccc;
`;

const Main = styled.main``;

export { Container, Main, Sidebar };
