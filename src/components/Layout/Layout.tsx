// this Layout component wraps every page with the app header on top
// check out App.js to see how it's used

import React from "react";

import logIn from "../../actions/logIn";
import { FirebaseAuth } from "components";
import { HeaderFooterWrapper, Header, Footer } from "./styled";
import { HeaderLink } from "app/styled";

export const Layout: React.FC = ({ children }) => (
  <HeaderFooterWrapper>
    <Header>
      <HeaderLink to="/">Messenger</HeaderLink>

      <div style={{ float: "right" }}>
        <HeaderLink to="/search">
          <span role="img" aria-label="search">
            🔎
          </span>
        </HeaderLink>{" "}
        <FirebaseAuth>
          {({ isLoading, error, auth }) => {
            if (isLoading) {
              return "...";
            }
            if (error) {
              return "⚠️ login error";
            }
            if (auth) {
              return (
                <HeaderLink to={`/account`}>
                  <span role="img" aria-label="account">
                    👤
                  </span>
                </HeaderLink>
              );
            } else {
              return <button onClick={logIn}>log in</button>;
            }
          }}
        </FirebaseAuth>
      </div>
    </Header>

    {children}

    <Footer>© {new Date().getFullYear()}</Footer>
  </HeaderFooterWrapper>
);
