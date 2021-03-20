import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "app/styled/theme";

export const GlobalStyles = createGlobalStyle`
  *:before,
  *:after,
  * {
    box-sizing: border-box;
    font-family: sans-serif;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  html,
  body {
    margin: 0;
    padding: 0;
    line-height: 1.4;
  }

  html,
  body,
  #root {
    min-height: 100vh;
  }

  p {
    margin: 0 0 1rem;
  }

  hr {
    border: none;
    height: 1px;
    background: #eee;
    margin: 1rem 0;
  }
`;

const FormRow = styled.div`
  display: block;
  margin: 0 0 1rem;
`;
const FormLabel = styled.label`
  display: block;
  margin: 0 0 0.33rem;
`;
const TextInput = styled.input`
  padding: 0.5rem;
  border-radius: 3px;
  font-size: 16px;
  border: 1px solid #ddd;
  margin: 0 0 1rem;
`;
const TextArea = styled.textarea`
  padding: 0.5rem;
  border-radius: 3px;
  font-size: 16px;
  border: 1px solid #ddd;
  margin: 0 0 1rem;
`;

const InternalLink = styled(Link)`
  color: ${colors.blue};
  text-decoration: none;

  &:hover,
  &:active {
    text-decoration: underline;
  }
`;
const HeaderLink = styled(Link)`
  color: ${colors.black};
  text-decoration: none;
  font-size: 1.2rem;
`;

export { InternalLink, FormRow, FormLabel, TextInput, TextArea, HeaderLink };
