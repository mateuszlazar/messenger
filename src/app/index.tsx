import Firebase from "firebase/app";
import { FirestoreProvider } from "react-firestore";
import React from "react";

import { Router } from "app/router";
import { GlobalStyles } from "app/styled";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary, Layout, ScrollToTop } from "components";
import { RecoilRoot } from "recoil";

const App = () => (
  <ErrorBoundary>
    <FirestoreProvider firebase={Firebase}>
      <BrowserRouter basename={"/messenger"}>
        <RecoilRoot>
          <Layout>
            <ScrollToTop />
            <GlobalStyles />
            <Router />
          </Layout>
        </RecoilRoot>
      </BrowserRouter>
    </FirestoreProvider>
  </ErrorBoundary>
);

export default App;
