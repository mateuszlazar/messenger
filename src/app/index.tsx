import Firebase from "firebase/app";
import { FirestoreProvider } from "react-firestore";
import React from "react";

import { Router } from "app/router";
import { GlobalStyles } from "app/styled";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary, Layout, ScrollToTop } from "components";

const App = () => (
  <ErrorBoundary>
    <FirestoreProvider firebase={Firebase}>
      <BrowserRouter>
        <Layout>
          <ScrollToTop />
          <GlobalStyles />
          <Router />
        </Layout>
      </BrowserRouter>
    </FirestoreProvider>
  </ErrorBoundary>
);

export default App;
